import { NextResponse } from "next/server";
import { siteData, getTier } from "../../../data/site";

// Simple in-memory rate limiting (IP -> timestamps)
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const limit = 5; // max 5 submissions per 15 minutes

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((ts) => now - ts < windowMs);

  if (validTimestamps.length >= limit) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export async function POST(req) {
  try {
    // 1. Rate limiting check
    const clientIp = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many enquiries sent. Please wait a few minutes before trying again." },
        { status: 429 }
      );
    }

    // 2. Payload size check
    const bodyText = await req.text();
    if (bodyText.length > 10240) { // 10KB limit
      return NextResponse.json(
        { error: "Payload too large." },
        { status: 413 }
      );
    }

    const body = JSON.parse(bodyText);
    const { name, businessName, email, phone, message, solutions = [], honeypot } = body;

    // 3. Honeypot check
    if (honeypot) {
      // Quietly succeed for spambots
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // 4. Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 5. Server-side tier computation
    const computedTier = getTier(solutions);
    const solutionNames = solutions
      .map((id) => siteData.solutions.find((s) => s.id === id)?.name || id)
      .join(", ") || "None selected (Website base)";

    // 6. Read EmailJS config from server env vars
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials not fully configured in environment.");
      // Graceful fallback response instructing direct email
      return NextResponse.json(
        {
          error: "Email service currently unavailable. Please email brandon@dynastyweb.co directly.",
          fallbackEmail: "brandon@dynastyweb.co",
        },
        { status: 503 }
      );
    }

    // 7. Send via EmailJS REST API with timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const emailjsRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          phone: phone || "Not provided",
          business_name: businessName || "Not provided",
          calculated_tier: computedTier.name,
          solutions_list: solutionNames,
          message: message,
        },
      }),
    });

    clearTimeout(timeout);

    if (!emailjsRes.ok) {
      const errText = await emailjsRes.text();
      console.error("EmailJS REST error:", errText);
      return NextResponse.json(
        { error: "Failed to send email via server. Please email brandon@dynastyweb.co directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
      tier: computedTier.name,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please email brandon@dynastyweb.co." },
      { status: 500 }
    );
  }
}
