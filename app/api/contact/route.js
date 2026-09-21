import { NextResponse } from "next/server";

// Simple in-memory rate limiting map: ip -> list of timestamps
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxSubmissions = 5;

  const timestamps = (rateLimitMap.get(ip) || []).filter((ts) => now - ts < windowMs);

  if (timestamps.length >= maxSubmissions) {
    return true;
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

function sanitizeInput(str) {
  if (typeof str !== "string") return "";
  // Strip HTML tags and trim
  return str.replace(/<[^>]*>?/gm, "").trim();
}

export async function POST(request) {
  try {
    // 1. Payload size check (< 10KB)
    const contentLength = parseInt(request.headers.get("content-length") || "0", 10);
    if (contentLength > 10 * 1024) {
      return NextResponse.json({ error: "Payload too large." }, { status: 413 });
    }

    const body = await request.json();

    // 2. Honeypot check
    if (body.website || body.honeypot) {
      // Silently drop spam submission
      return NextResponse.json({ success: true, message: "Enquiry sent successfully." });
    }

    // 3. Rate limiting check
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown-ip";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later or email us directly." },
        { status: 429 }
      );
    }

    // 4. Input sanitization & validation
    const name = sanitizeInput(body.name);
    const businessName = sanitizeInput(body.businessName);
    const email = sanitizeInput(body.email);
    const phone = sanitizeInput(body.phone);
    const packageName = sanitizeInput(body.package);
    const solutions = Array.isArray(body.solutions)
      ? body.solutions.map((s) => sanitizeInput(s)).join(", ")
      : sanitizeInput(body.solutions);
    const message = sanitizeInput(body.message);

    if (!name || name.length > 100) {
      return NextResponse.json({ error: "Please enter a valid name (max 100 chars)." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 100) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!message || message.length > 2000) {
      return NextResponse.json({ error: "Please enter a message (max 2000 chars)." }, { status: 400 });
    }

    // 5. Environment variables check
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Service unconfigured on server; return failure to trigger fallback UI
      return NextResponse.json(
        { error: "Contact service is currently unavailable. Please email brandon@dynastyweb.co." },
        { status: 503 }
      );
    }

    // 6. POST to EmailJS REST API with 10s timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const emailjsPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: {
        from_name: name,
        business_name: businessName || "N/A",
        reply_to: email,
        phone_number: phone || "N/A",
        selected_package: packageName || "Not sure yet",
        selected_solutions: solutions || "None",
        message: message,
      },
    };

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailjsPayload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Unable to send enquiry. Please email brandon@dynastyweb.co directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Enquiry sent successfully." });
  } catch (err) {
    return NextResponse.json(
      { error: "An unexpected error occurred. Please email brandon@dynastyweb.co directly." },
      { status: 500 }
    );
  }
}
