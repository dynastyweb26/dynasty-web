"use client";

import { useState } from "react";
import { siteData } from "@/data/site";

export default function ContactForm({ selectedPackage, selectedSolutions = [], onToggleSolution }) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
    website: "", // Honeypot field
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    shake: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null, shake: false });

    // Client-side quick check
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: "Please fill in all required fields marked with *.",
        shake: true,
      });
      setTimeout(() => setStatus((s) => ({ ...s, shake: false })), 500);
      return;
    }

    try {
      const selectedPackageObj = siteData.packages.find((p) => p.id === selectedPackage);
      const packageName = selectedPackageObj ? selectedPackageObj.name : "Not sure yet";

      const solutionNames = selectedSolutions
        .map((solId) => siteData.solutions.find((s) => s.id === solId)?.name)
        .filter(Boolean);

      const payload = {
        name: formData.name,
        businessName: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        package: packageName,
        solutions: solutionNames,
        message: formData.message,
        website: formData.website,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send enquiry.");
      }

      setStatus({ submitting: false, success: true, error: null, shake: false });
      setFormData({ name: "", businessName: "", email: "", phone: "", message: "", website: "" });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || "An error occurred while sending your message.",
        shake: true,
      });
      setTimeout(() => setStatus((s) => ({ ...s, shake: false })), 500);
    }
  };

  const selectedPkgName =
    siteData.packages.find((p) => p.id === selectedPackage)?.name || "Not sure yet";

  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <span className="eyebrow reveal">Get In Touch</span>
        <h2 className="reveal">
          Ready to build your digital <em>foundation</em>?
        </h2>
        <p className="reveal">
          Send us your project details below or email directly to{" "}
          <a href="mailto:brandon@dynastyweb.co" className="gold-link">
            brandon@dynastyweb.co
          </a>.
        </p>

        {/* Form Container */}
        <div className={`form-card reveal ${status.shake ? "form-shake" : ""}`}>
          {/* Quote Selection Summary */}
          <div className="quote-summary-bar">
            <span>
              <strong>Quote Selection:</strong> {selectedPkgName}{" "}
              {selectedSolutions.length > 0 &&
                `+ ${selectedSolutions.length} solution${selectedSolutions.length > 1 ? "s" : ""}`}
            </span>
          </div>

          {status.success ? (
            <div className="success-state">
              <svg className="draw-check" width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="var(--gold)" strokeWidth="2" />
                <path d="M7 12l3 3 7-7" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3>Enquiry Sent!</h3>
              <p>
                Thank you for reaching out. Brandon will review your enquiry and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot field - visually hidden */}
              <div style={{ display: "none" }} aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Brandon Talla"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="businessName" className="form-label">
                    Business Name
                  </label>
                  <input
                    id="businessName"
                    type="text"
                    name="businessName"
                    className="form-input"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Dynasty Plumbing LLC"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@business.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(214) 555-0199"
                  />
                </div>
              </div>

              {/* Package Selection Display */}
              <div className="form-group">
                <label className="form-label">Selected Package</label>
                <div className="package-pill-group">
                  {siteData.packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      className={`pkg-pill ${selectedPackage === pkg.id ? "active" : ""}`}
                      onClick={() => onToggleSolution && onToggleSolution.setPackage?.(pkg.id)}
                    >
                      {pkg.name}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`pkg-pill ${!selectedPackage ? "active" : ""}`}
                    onClick={() => onToggleSolution && onToggleSolution.setPackage?.(null)}
                  >
                    Not sure yet
                  </button>
                </div>
              </div>

              {/* Solutions Checkboxes */}
              <div className="form-group">
                <label className="form-label">Digital Solutions of Interest</label>
                <div className="solutions-checkbox-grid">
                  {siteData.solutions.map((sol) => {
                    const isChecked = selectedSolutions.includes(sol.id);
                    return (
                      <label key={sol.id} className="custom-checkbox">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => onToggleSolution && onToggleSolution(sol.id)}
                          style={{ display: "none" }}
                        />
                        <span className="checkbox-box">
                          <svg className="checkbox-svg" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M3.5 8.5l3 3 6-6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        <span>{sol.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Project Details or Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your business, timeline, or current website..."
                />
              </div>

              {status.error && (
                <div className="error-banner">
                  <p>{status.error}</p>
                </div>
              )}

              <div style={{ marginTop: "24px", textAlign: "center" }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status.submitting}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {status.submitting ? "Sending Enquiry..." : "Send Enquiry"}
                </button>
              </div>

              <div className="privacy-note">
                By submitting this form, you agree to our{" "}
                <a href="/privacy" className="gold-link">
                  Privacy Policy
                </a>.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
