"use client";

import React, { useState } from "react";

export default function HospitalityAuditForm() {
  const [formData, setFormData] = useState({
    propertyName: "",
    city: "",
    bookingChannels: "",
    monthlyBookings: "",
    contactNumber: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-950 via-zinc-950 to-purple-900 text-white shadow-2xl border border-purple-800/80 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-3">
        <span className="inline-block px-3 py-1 rounded-full bg-purple-800/80 text-purple-200 text-[11px] font-mono font-bold uppercase tracking-wider">
          FREE GROWTH AUDIT & DIRECT BOOKING BLUEPRINT
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif italic font-normal tracking-tight text-white">
          Ready to increase your direct bookings & savings?
        </h2>
        <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed font-sans">
          Share your property or restaurant details. Our engineering team will audit your booking channels within 24 hours and deliver a personalized commission-saving roadmap.
        </p>
      </div>

      {submitted ? (
        <div className="mt-8 p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500/80 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xl mx-auto">
            ✓
          </div>
          <h3 className="text-xl font-bold font-serif text-white">Audit Request Received!</h3>
          <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
            Thank you! Our engineering team will deliver your custom growth audit report to your WhatsApp number <strong>{formData.contactNumber}</strong> and email within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 text-left">
          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
              Property / Restaurant Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Grand Heritage Hotel & Cafe"
              value={formData.propertyName}
              onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-purple-800/80 text-white text-xs font-sans focus:outline-none focus:border-purple-400 placeholder:text-zinc-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
              City / Location *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. London, Dubai, New York"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-purple-800/80 text-white text-xs font-sans focus:outline-none focus:border-purple-400 placeholder:text-zinc-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
              Current Booking Channels *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Booking.com, Agoda, Foodpanda, Phone Calls"
              value={formData.bookingChannels}
              onChange={(e) => setFormData({ ...formData, bookingChannels: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-purple-800/80 text-white text-xs font-sans focus:outline-none focus:border-purple-400 placeholder:text-zinc-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
              Monthly Guests / Bookings *
            </label>
            <select
              required
              value={formData.monthlyBookings}
              onChange={(e) => setFormData({ ...formData, monthlyBookings: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-purple-800/80 text-white text-xs font-sans focus:outline-none focus:border-purple-400 transition-colors"
            >
              <option value="" disabled>Select Monthly Volume</option>
              <option value="1-50">1 - 50 bookings/month</option>
              <option value="51-200">51 - 200 bookings/month</option>
              <option value="201-500">201 - 500 bookings/month</option>
              <option value="500+">500+ bookings/month</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
              WhatsApp / Contact Number *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +1 555 123 4567"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-purple-800/80 text-white text-xs font-sans focus:outline-none focus:border-purple-400 placeholder:text-zinc-500 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="e.g. manager@hotel.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-purple-800/80 text-white text-xs font-sans focus:outline-none focus:border-purple-400 placeholder:text-zinc-500 transition-colors"
            />
          </div>

          <div className="sm:col-span-2 pt-3">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
            >
              {loading ? (
                <span>Submitting Audit Request...</span>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Book Free Hospitality Growth Audit</span>
                  <span>↗</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
