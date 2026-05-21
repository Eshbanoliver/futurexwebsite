"use client";

import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="liquid-glass p-8 rounded-2xl text-center space-y-6 max-w-lg mx-auto shadow-[0_4px_20px_rgba(96,45,238,0.05)]">
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-[#25D366] animate-pulse" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Inquiry Received!</h3>
        <p className="text-foreground/75 leading-relaxed text-sm">
          Thank you for reaching out to FutureX Digital Marketing. One of our senior strategists will review your project and get in touch within the next 2 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="glow-btn-secondary px-6 py-2 rounded-xl text-sm font-bold text-foreground transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="liquid-glass p-6 md:p-8 rounded-2xl space-y-5 shadow-xl relative overflow-hidden">
      {/* Subtle border glow */}
      <div className="absolute inset-0 border border-primary/10 pointer-events-none rounded-2xl" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full glass-input px-4 py-3 rounded-xl text-foreground placeholder-foreground/30 text-[15px]"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full glass-input px-4 py-3 rounded-xl text-foreground placeholder-foreground/30 text-[15px]"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full glass-input px-4 py-3 rounded-xl text-foreground placeholder-foreground/30 text-[15px]"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
            Service of Interest *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full glass-input px-4 py-3 rounded-xl text-foreground/85 placeholder-foreground/30 text-[15px] bg-white"
          >
            <option value="" disabled className="text-foreground/40 bg-white">Select a Service</option>
            {Object.values(servicesData).map((service) => (
              <option key={service.slug} value={service.slug} className="text-foreground bg-white">
                {service.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-foreground/80">
          Project Brief / Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full glass-input px-4 py-3 rounded-xl text-foreground placeholder-foreground/30 text-[15px]"
          placeholder="Tell us about your campaign goals, budget constraints, or project specifications..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full glow-btn-primary py-4 px-6 rounded-xl text-base font-bold text-white tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            <span>Analyzing Campaign Brief...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Claim Free Digital Audit</span>
          </>
        )}
      </button>
    </form>
  );
}
