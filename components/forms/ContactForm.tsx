"use client";

import React, { useState } from "react";
import { ContactFormSchema, ContactFormData } from "@/lib/schema";
import { services } from "@/content/services";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

interface ContactFormProps {
  initialService?: string;
  className?: string;
}

export function ContactForm({ initialService = "", className }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: initialService,
    message: "",
    website: "", // honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus("submitting");

    // Client-side Zod validation
    const result = ContactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit request. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
        website: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 md:p-12 rounded-2xl bg-bg-raised border border-accent/40 text-center flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold font-display text-text">Thank You for Reaching Out</h3>
        <p className="text-text-muted mt-3 max-w-md">
          Your project details have been received. An NForce One practice lead will review your requirements and follow up within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs font-mono uppercase tracking-wider text-accent border border-accent/30 hover:bg-accent/10 px-5 py-2.5 rounded-md transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={className}>
      {status === "error" && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Honeypot field (hidden from legitimate users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave blank</label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-text mb-2">
            Your Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full bg-bg-card border border-border focus:border-accent rounded-lg px-4 py-3 text-text placeholder:text-text-muted/40 focus:outline-none transition-colors"
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-400 mt-1.5 font-mono">
              {errors.name}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-text mb-2">
            Business Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full bg-bg-card border border-border focus:border-accent rounded-lg px-4 py-3 text-text placeholder:text-text-muted/40 focus:outline-none transition-colors"
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-400 mt-1.5 font-mono">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-text mb-2">
            Company / Organization <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Financial Corp."
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            className="w-full bg-bg-card border border-border focus:border-accent rounded-lg px-4 py-3 text-text placeholder:text-text-muted/40 focus:outline-none transition-colors"
          />
          {errors.company && (
            <p id="company-error" className="text-xs text-red-400 mt-1.5 font-mono">
              {errors.company}
            </p>
          )}
        </div>

        {/* Phone (Optional) */}
        <div>
          <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-text mb-2">
            Phone Number <span className="text-text-muted/60 lowercase">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full bg-bg-card border border-border focus:border-accent rounded-lg px-4 py-3 text-text placeholder:text-text-muted/40 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Service of Interest */}
      <div className="mb-6">
        <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-text mb-2">
          Service of Interest <span className="text-accent">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          className="w-full bg-bg-card border border-border focus:border-accent rounded-lg px-4 py-3 text-text focus:outline-none transition-colors"
        >
          <option value="" disabled>Select a core capability or practice</option>
          <option value="pega-flagship">Flagship Pega Implementation / CDH</option>
          {services.map((svc) => (
            <option key={svc.slug} value={svc.slug}>
              {svc.title}
            </option>
          ))}
          <option value="general-consultation">General IT Strategy & Architecture</option>
        </select>
        {errors.service && (
          <p id="service-error" className="text-xs text-red-400 mt-1.5 font-mono">
            {errors.service}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="mb-8">
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-text mb-2">
          Project Overview & Objectives <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your current tech landscape, target delivery milestones, and specific areas where NForce One can help..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full bg-bg-card border border-border focus:border-accent rounded-lg px-4 py-3 text-text placeholder:text-text-muted/40 focus:outline-none transition-colors resize-y"
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-400 mt-1.5 font-mono">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-accent-text font-semibold px-8 py-4 rounded-lg transition-all shadow-lg shadow-accent/10 hover:shadow-accent/20 active:scale-[0.98] disabled:opacity-50"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting Request...</span>
          </>
        ) : (
          <>
            <span>Submit Consultation Request</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Fallback info */}
      <div className="mt-6 pt-6 border-t border-border flex flex-wrap items-center justify-between text-xs font-mono text-text-muted gap-4">
        <span>Direct Email: <a href="mailto:contact@nforce.one" className="text-text hover:text-accent underline">contact@nforce.one</a></span>
        <span>Direct Phone: <a href="tel:+19724996667" className="text-text hover:text-accent">+1 (972) 499-6667</a></span>
      </div>
    </form>
  );
}
