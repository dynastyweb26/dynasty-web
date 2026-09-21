"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { siteData, getTier } from "../../data/site";
import { FAQ } from "../../components/FAQ";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [selectedSolutions, setSelectedSolutions] = useState([]);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });

  useEffect(() => {
    const sParam = searchParams.get("s");
    if (sParam) {
      const ids = sParam.split(",").map((id) => id.trim()).filter(Boolean);
      setSelectedSolutions(ids);
    }
  }, [searchParams]);

  const toggleSolution = (id) => {
    setSelectedSolutions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const computedTier = getTier(selectedSolutions);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // Spam prevention

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          solutions: selectedSolutions,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          businessName: "",
          email: "",
          phone: "",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please email brandon@dynastyweb.co directly.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header-block">
        <div className="eyebrow">
          <span>Start a Conversation</span>
        </div>
        <h1 className="page-title">
          Get a <em>custom</em> quote.
        </h1>
        <p className="page-subtitle">
          Select your solutions below. Your package tier calculates automatically based on your requirements.
        </p>
        <div className="faq-jump-row">
          <a href="#faq" className="btn btn-ghost btn-sm">
            View FAQs ↓
          </a>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autocomplete="off"
            />

            <div className="computed-tier-banner">
              <div className="tier-banner-top">
                <span className="tier-label">Calculated Tier:</span>
                <strong className="tier-name">{computedTier.name}</strong>
              </div>
              <p className="tier-qualifier">{computedTier.qualifier}</p>
              {computedTier.nextTier && (
                <div className="next-tier-nudge">
                  💡 Add {computedTier.neededForNext} more solution{computedTier.neededForNext > 1 ? "s" : ""} to unlock <strong>{computedTier.nextTier}</strong> perks!
                </div>
              )}
            </div>

            <div className="form-group-grid">
              <div className="form-field">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>

              <div className="form-field">
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Forney Plumbing Co."
                />
              </div>
            </div>

            <div className="form-group-grid">
              <div className="form-field">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(972) 555-0199"
                />
              </div>
            </div>

            <div className="form-field">
              <label>Digital Solutions of Interest</label>
              <div className="checkbox-solutions-grid">
                {siteData.solutions.map((sol) => {
                  const isChecked = selectedSolutions.includes(sol.id);
                  return (
                    <label
                      key={sol.id}
                      className={`custom-checkbox-tile ${isChecked ? "checked" : ""}`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleSolution(sol.id)}
                      />
                      <span className="checkbox-custom-box">
                        {isChecked && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </span>
                      <div className="checkbox-text-wrap">
                        <span className="sol-title">{sol.name}</span>
                        <span className="sol-price">{sol.price}/{sol.cadence}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or current site..."
              />
            </div>

            {status === "error" && (
              <div className="form-status-alert error">
                <p>{errorMessage}</p>
                <p className="fallback-note">
                  Direct email: <a href="mailto:brandon@dynastyweb.co">brandon@dynastyweb.co</a>
                </p>
              </div>
            )}

            {status === "success" && (
              <div className="form-status-alert success">
                <p>✓ Enquiry received! We will be in touch within 24 business hours.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-primary btn-submit full-width"
            >
              {status === "sending" ? "Sending Enquiry..." : "Submit Enquiry"}
            </button>
          </form>
        </div>

        <div className="contact-info-sidebar">
          <div className="sidebar-card">
            <h3>Direct Contact</h3>
            <p>Prefer to send a direct message or email?</p>
            <a href="mailto:brandon@dynastyweb.co" className="sidebar-email">
              brandon@dynastyweb.co
            </a>
            <div className="sidebar-location">
              <span>📍 Forney, Texas</span>
              <p>Serving local service businesses across North Texas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION BELOW FORM */}
      <div id="faq" className="contact-faq-wrap">
        <FAQ />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="section contact-page-section">
      <div className="wrap">
        <Suspense fallback={<div className="loading-spinner">Loading contact form...</div>}>
          <ContactFormInner />
        </Suspense>
      </div>
    </section>
  );
}
