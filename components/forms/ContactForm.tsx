"use client";

import React, { useState } from "react";
import { ContactFormSchema, ContactFormData } from "@/lib/schema";
import { services } from "@/content/services";
import { Button } from "../ui/Button";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    service: "Pega Development & Implementation",
    message: "",
    phone: "",
    website: "", // honeypot
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [serverState, setServerState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message?: string;
  }>({ status: "idle" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate with Zod
    const result = ContactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ContactFormData;
        if (path) fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setServerState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setServerState({
          status: "success",
          message: "Transmission received. A practice lead will contact you within 1 business day.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "Pega Development & Implementation",
          message: "",
          phone: "",
          website: "",
        });
      } else {
        setServerState({
          status: "error",
          message: data.error || "Failed to submit. Please try again or email us directly.",
        });
      }
    } catch (err) {
      setServerState({
        status: "error",
        message: "Network error. Please try again or email contact@nforce.one.",
      });
    }
  };

  if (serverState.status === "success") {
    return (
      <div className="p-8 md:p-12 rounded-2xl bg-bg-card border border-accent/60 text-center space-y-4 animate-in fade-in duration-200">
        <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent flex items-center justify-center text-accent mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <span className="text-xs font-mono uppercase text-accent font-bold block">
          [TRANSMISSION CONFIRMED]
        </span>
        <h3 className="text-2xl font-bold font-display text-white">
          Message Received Successfully
        </h3>
        <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
          {serverState.message}
        </p>
        <div className="pt-4">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setServerState({ status: "idle" })}
          >
            Send Another Transmission
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-10 rounded-2xl bg-bg-card border border-border shadow-2xl space-y-6"
    >
      {/* Honeypot for spam bot mitigation */}
      <input
        type="text"
        name="website"
        value={formData.website || ""}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase text-text-muted mb-2 font-bold">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Sarah Jenkins"
            className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-white text-sm focus:border-accent focus:outline-none transition-colors"
          />
          {errors.name && (
            <p className="text-xs font-mono text-accent mt-1.5">{errors.name}</p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase text-text-muted mb-2 font-bold">
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="sarah@enterprise.com"
            className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-white text-sm focus:border-accent focus:outline-none transition-colors"
          />
          {errors.email && (
            <p className="text-xs font-mono text-accent mt-1.5">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-xs font-mono uppercase text-text-muted mb-2 font-bold">
            Company Name *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Financial Corp"
            className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-white text-sm focus:border-accent focus:outline-none transition-colors"
          />
          {errors.company && (
            <p className="text-xs font-mono text-accent mt-1.5">{errors.company}</p>
          )}
        </div>

        {/* Service of Interest */}
        <div>
          <label htmlFor="service" className="block text-xs font-mono uppercase text-text-muted mb-2 font-bold">
            Service of Interest *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-white text-sm focus:border-accent focus:outline-none transition-colors"
          >
            <option value="Pega Development & Implementation">Pega Development & Implementation</option>
            <option value="Pega Testing & Quality Engineering">Pega Testing & Quality Engineering</option>
            <option value="QA Testing & Automation">QA Testing & Automation</option>
            <option value="Data Analytics & Business Intelligence">Data Analytics & Business Intelligence</option>
            <option value="Big Data & Data Engineering">Big Data & Data Engineering</option>
            <option value="Database Management & Modernization">Database Management & Modernization</option>
            <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
            <option value="Web & Application Development">Web & Application Development</option>
            <option value="IT Management & PMO Consulting">IT Management & PMO Consulting</option>
            <option value="UI/UX & Design Systems">UI/UX & Design Systems</option>
            <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & Machine Learning</option>
            <option value="Staff Augmentation & Dedicated Teams">Staff Augmentation & Dedicated Teams</option>
            <option value="General Architecture Consultation">General Architecture Consultation</option>
          </select>
        </div>
      </div>

      {/* Project Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase text-text-muted mb-2 font-bold">
          Project Brief / Scope Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your current technical challenge, timeline goals, or architecture requirements..."
          className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-white text-sm focus:border-accent focus:outline-none transition-colors"
        />
        {errors.message && (
          <p className="text-xs font-mono text-accent mt-1.5">{errors.message}</p>
        )}
      </div>

      {serverState.status === "error" && (
        <div className="p-3.5 rounded-lg bg-accent/15 border border-accent text-accent text-xs font-mono flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverState.message}</span>
        </div>
      )}

      {/* Transmitting submit button with magnetic pull */}
      <div>
        <button
          type="submit"
          disabled={serverState.status === "submitting"}
          data-magnetic
          className="w-full inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 rounded-md select-none group relative overflow-hidden text-base px-7 py-3.5 gap-2.5 bg-accent text-white hover:bg-accent-hover active:scale-[0.98] shadow-lg shadow-accent/25 border border-accent/40 disabled:opacity-60"
        >
          {serverState.status === "submitting" ? (
            <span className="btn-text inline-flex items-center gap-2 font-mono">
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>TRANSMITTING DOSSIER...</span>
            </span>
          ) : (
            <span className="btn-text inline-flex items-center gap-2">
              <span>Transmit Consultation Request</span>
              <Send className="w-4 h-4" />
            </span>
          )}
        </button>
      </div>

      <div className="pt-2 border-t border-border flex items-center justify-between text-[11px] font-mono text-text-muted">
        <span>[SYS.ENC.256-BIT] Protected transmission</span>
        <span>Guaranteed NDA Confidentiality</span>
      </div>
    </form>
  );
}
