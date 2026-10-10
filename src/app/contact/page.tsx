"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import SiteFooter from "@/components/ui/site-footer";

const navigationData: NavigationSection[] = [
  { title: "Home", href: "/", isActive: false },
  { title: "About us", href: "/#about" },
  { title: "Services", href: "/#services" },
  { title: "Works", href: "/works" },

  { title: "Contact", href: "/contact", isActive: true },
];

// Helper to get days in month
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

// Helper to get first day of month (0 = Sun, 1 = Mon, etc.)
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const TIME_SLOTS = [
  "09:30am", "10:00am", "10:30am", "11:00am", "11:30am",
  "12:00pm", "12:30pm", "01:00pm", "01:30pm", "02:00pm",
  "02:30pm", "03:00pm", "03:30pm", "04:00pm", "04:30pm", "05:00pm"
];

// Helper to format time slot string according to 12h / 24h mode
function formatTimeSlot(slot12h: string, format: "12h" | "24h"): string {
  if (format === "12h") return slot12h;
  
  const match = slot12h.match(/^(\d{2}):(\d{2})(am|pm)$/i);
  if (!match) return slot12h;
  
  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const period = match[3].toLowerCase();

  if (period === "pm" && hours < 12) {
    hours += 12;
  } else if (period === "am" && hours === 12) {
    hours = 0;
  }

  const hoursStr = hours.toString().padStart(2, "0");
  return `${hoursStr}:${minutes}`;
}

const CONTACT_FAQS = [
  {
    question: "What is the typical response time?",
    answer: "On working days (Mon–Sat), our team guarantees a response within 24 hours with a detailed technical review and actionable next steps.",
  },
  {
    question: "Is the initial consultation call free?",
    answer: "Yes, 100% free. The 30-minute discovery call and initial technical audit carry zero cost and zero sales obligation.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! Our team regularly collaborates with clients across the US, UK, UAE, Europe, and Australia using remote workflows and flexible time-zone scheduling.",
  },
  {
    question: "Can a Non-Disclosure Agreement (NDA) be signed?",
    answer: "Absolutely. All proprietary business ideas, custom codebases, and customer records remain 100% secure and confidential under a formal NDA signed by our team.",
  },
  {
    question: "What is needed to get started?",
    answer: "A basic outline of your project goals, reference websites, key feature requirements, and target timeline are all that is needed for our initial call.",
  },
  {
    question: "How are contracts and payments handled?",
    answer: "Projects operate under structured milestone-based contracts. Payments are securely processed via Stripe credit card, Wise, bank transfers, or regional gateways upon milestone sign-off.",
  },
];

function ContactPageInner() {
  const searchParams = useSearchParams();
  const selectedPackage = searchParams.get("package");
  const selectedService = searchParams.get("service");
  const selectedIndustry = searchParams.get("industry");
  const selectedTotal = searchParams.get("total");

  const [activeTab, setActiveTab] = useState<"call" | "message">("call");

  // Booking Calendar States
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number>(21);
  const [selectedTime, setSelectedTime] = useState<string>("11:30am");
  const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h");
  const [timezone, setTimezone] = useState<string>("Asia/Karachi (GMT+5)");
  const [isConfirmingSlot, setIsConfirmingSlot] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Booking Form Inputs
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingNote, setBookingNote] = useState("");

  // Send Message Form States
  const [msgName, setMsgName] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgPhone, setMsgPhone] = useState("");
  const [msgService, setMsgService] = useState("Workflow & Business Automation");
  const [msgBudget, setMsgBudget] = useState("$1k - $3k");
  const [msgContent, setMsgContent] = useState("");
  const [msgSentSuccess, setMsgSentSuccess] = useState(false);

  useEffect(() => {
    if (selectedPackage || selectedService || selectedIndustry) {
      const parts = [];
      if (selectedPackage) parts.push(`Package: ${selectedPackage}`);
      if (selectedService) parts.push(`Service: ${selectedService}`);
      if (selectedIndustry) parts.push(`Industry: ${selectedIndustry}`);
      if (selectedTotal) parts.push(`Est. Total: ${selectedTotal}`);

      const summary = parts.join(" | ");
      setBookingNote(`Hi, I'm interested in discussing the ${summary}. Ready for kickoff!`);
      setMsgContent(`Hi, I would like to get started with ${summary}. Please send over the onboarding details and kickoff schedule.`);
    }
  }, [selectedPackage, selectedService, selectedIndustry, selectedTotal]);

  // Calendar Navigation
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfWeek = getFirstDayOfMonth(currentYear, currentMonth);

  const monthYearString = `${MONTH_NAMES[currentMonth]} ${currentYear}`;

  const selectedDateObj = new Date(currentYear, currentMonth, selectedDay);
  const dayOfWeekStr = selectedDateObj.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  const monthShortStr = selectedDateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const selectedDateHeaderStr = `${dayOfWeekStr}, ${monthShortStr} ${selectedDay}`;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setIsConfirmingSlot(false);
  };

  const handleSendMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMsgSentSuccess(true);
  };

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://mhkmarkedia.com/contact#page",
        "url": "https://mhkmarkedia.com/contact",
        "name": "Contact CEO M. Hafeez Khan | Free Digital Consultation | MHKMarkedia",
        "description": "Book a free 30-minute discovery call or send a direct project brief. Low friction, maximum transparency & guaranteed 24-hour response.",
        "publisher": {
          "@type": "Organization",
          "name": "MHKMarkedia",
          "url": "https://mhkmarkedia.com"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://mhkmarkedia.com/#service",
        "name": "MHKMarkedia Digital Architect Agency",
        "telephone": "+966532428200",
        "url": "https://mhkmarkedia.com",
        "priceRange": "$$$"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mhkmarkedia.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "https://mhkmarkedia.com/contact"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {/* Standard Site Header matching entire website */}
      <Header navigationData={navigationData} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-[50px] sm:-mt-[70px] pt-24 sm:pt-28 pb-20">
        
        {/* Eyebrow & Headline Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3">
            Free Consultation &amp; Project Audit
          </h2>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Let&apos;s Talk About Your Project{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal pr-3 sm:pr-4 py-1"
            >
              Free Consultation, No Obligation.
            </motion.span>
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed font-sans mt-3 sm:mt-4">
            Share your project goals or questions—every inquiry receives a guaranteed response within 24 hours on working days. Low friction, maximum transparency &amp; trust guaranteed.
          </p>
        </div>

        {/* Selected Package Highlight Badge */}
        {(selectedPackage || selectedService || selectedIndustry) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto mb-8 p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-fuchsia-50 to-purple-50 border border-purple-200 text-center text-xs font-mono text-purple-950 flex items-center justify-center gap-3 shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>
              Selected Deal: <strong className="text-purple-700 font-extrabold uppercase">{selectedPackage || selectedService || selectedIndustry}</strong>
              {selectedTotal && <span className="text-emerald-700 font-bold ml-1">({selectedTotal})</span>}
            </span>
          </motion.div>
        )}

        {/* Control Bar: Mode Switcher Tabs (Left) + Social Links (Right) */}
        <div className="flex flex-wrap items-center justify-between gap-4 max-w-5xl mx-auto mb-8 sm:mb-10">
          
          {/* Mode Switcher Pills */}
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/80 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("call")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                activeTab === "call"
                  ? "bg-[#8B3DFF] text-white shadow-md scale-[1.02]"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Book a Call</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("message")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                activeTab === "message"
                  ? "bg-[#8B3DFF] text-white shadow-md scale-[1.02]"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Send Message</span>
            </button>
          </div>

          {/* Social Media Links Bar */}
          <div className="inline-flex items-center gap-3 p-1.5 px-4 rounded-full bg-zinc-100/90 border border-zinc-200/80">
            <a
              href="mailto:contact@mhkmarkedia.com"
              title="Send Email"
              className="w-9 h-9 rounded-full bg-white border border-zinc-200 text-zinc-700 hover:text-purple-600 hover:border-purple-300 flex items-center justify-center transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="w-9 h-9 rounded-full bg-white border border-zinc-200 text-zinc-700 hover:text-purple-600 hover:border-purple-300 flex items-center justify-center transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <a
              href="https://wa.me/966532428200"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp Chat"
              className="w-9 h-9 rounded-full bg-white border border-zinc-200 text-zinc-700 hover:text-emerald-600 hover:border-emerald-300 flex items-center justify-center transition-colors shadow-2xs group"
            >
              <svg className="w-4 h-4 fill-current text-zinc-700 group-hover:text-emerald-600 transition-colors" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982L2 22l5.167-1.334A9.946 9.946 0 0012.01 22c5.507 0 9.991-4.479 9.991-9.986.001-5.507-4.482-9.986-9.989-9.986zm5.836 14.072c-.247.692-1.239 1.327-1.733 1.385-.458.053-1.045.1-3.045-.724-2.553-1.053-4.183-3.666-4.31-3.835-.125-.168-1.026-1.368-1.026-2.61 0-1.241.649-1.849.882-2.1.233-.251.509-.313.679-.313.169 0 .339.002.486.009.156.007.366-.059.573.438.212.509.722 1.759.785 1.887.063.127.106.276.021.444-.085.168-.127.275-.254.423-.127.148-.267.331-.381.444-.127.127-.26.265-.112.519.148.254.656 1.084 1.408 1.754.968.863 1.785 1.131 2.039 1.258.254.127.403.106.551-.063.148-.169.635-.741.805-.995.169-.254.338-.211.572-.127.233.084 1.482.699 1.736.826.254.127.423.19.486.296.063.106.063.614-.184 1.306z"/>
              </svg>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter Profile"
              className="w-9 h-9 rounded-full bg-white border border-zinc-200 text-zinc-700 hover:text-purple-600 hover:border-purple-300 flex items-center justify-center transition-colors shadow-2xs"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

        </div>

        {/* TAB CONTENT 1: BOOK A CALL */}
        {activeTab === "call" && (
          <div className="max-w-5xl mx-auto rounded-3xl bg-[#FAF5FF] border border-purple-100/90 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-10 min-h-[540px] sm:min-h-[560px] flex flex-col justify-between transition-all duration-300 relative">
            
            {bookingSuccess ? (
              /* Success State after slot booking */
              <div className="text-center py-12 space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20 text-2xl animate-bounce">
                  ✓
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900">
                  Meeting Confirmed!
                </h2>
                <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                  Your 30-minute discovery call on <strong className="text-purple-700 font-semibold">{monthYearString} {selectedDay} at {formatTimeSlot(selectedTime, timeFormat)}</strong> has been scheduled.
                </p>
                <div className="p-5 rounded-2xl bg-white border border-purple-100 max-w-md mx-auto text-xs text-zinc-700 space-y-2 text-left shadow-2xs">
                  <div className="flex justify-between border-b border-purple-50 pb-2">
                    <span className="text-zinc-400 font-mono">PLATFORM</span>
                    <strong className="text-purple-700 font-medium">Google Meet (Link emailed)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400 font-mono">TIMEZONE</span>
                    <strong className="text-zinc-800 font-medium">{timezone}</strong>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setBookingSuccess(false);
                    setIsConfirmingSlot(false);
                  }}
                  className="mt-4 px-7 py-3 rounded-full bg-[#8B3DFF] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#782ee6] transition-all shadow-md active:scale-95"
                >
                  Book Another Call
                </button>
              </div>
            ) : (
              /* 3-Column Calendar Grid Matching Sleek Layout */
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch h-full my-auto">
                
                {/* COLUMN 1: MEETING SPECS (Left - 3 cols) */}
                <div className="md:col-span-4 lg:col-span-3 flex flex-col justify-between space-y-6 md:border-r border-purple-200/40 md:pr-6">
                  
                  <div className="space-y-4 pt-1">
                    <h3 className="text-2xl font-serif italic font-normal text-zinc-900">
                      30 Min Meeting
                    </h3>

                    <div className="space-y-3 text-xs text-zinc-600 font-sans pt-1">
                      <div className="flex items-center gap-2.5">
                        <span className="w-4 h-4 rounded-full border border-emerald-400 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                          ✓
                        </span>
                        <span className="text-zinc-700">Requires confirmation</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-zinc-700">30m</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span className="text-zinc-700">Google Meet</span>
                      </div>
                    </div>
                  </div>

                  {/* Timezone Selector Footer */}
                  <div className="pt-4 border-t border-purple-200/40">
                    <div className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                      TIMEZONE
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-700 bg-white p-2.5 rounded-2xl border border-purple-100 shadow-2xs">
                      <span>🌐</span>
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="bg-transparent border-0 text-xs text-zinc-800 font-mono font-medium focus:outline-none w-full cursor-pointer"
                      >
                        <option value="Asia/Karachi (GMT+5)">Asia/Karachi (PKT)</option>
                        <option value="America/New_York (GMT-4)">America/New_York (EST)</option>
                        <option value="Europe/London (GMT+1)">Europe/London (BST)</option>
                        <option value="Asia/Dubai (GMT+4)">Asia/Dubai (GST)</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* COLUMN 2: MONTH CALENDAR (Middle - 5 cols) */}
                <div className="md:col-span-8 lg:col-span-5 flex flex-col justify-between space-y-4 lg:border-r border-purple-200/40 lg:pr-6">
                  
                  <div className="space-y-4">
                    {/* Month Header & Controls */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-mono font-bold text-zinc-800">
                        {monthYearString}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          className="w-7 h-7 rounded-full bg-white border border-purple-200/70 hover:bg-purple-50 text-zinc-700 flex items-center justify-center text-xs transition-all shadow-2xs"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          className="w-7 h-7 rounded-full bg-white border border-purple-200/70 hover:bg-purple-50 text-zinc-700 flex items-center justify-center text-xs transition-all shadow-2xs"
                        >
                          ›
                        </button>
                      </div>
                    </div>

                    {/* Days Header */}
                    <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                      <div>SUN</div>
                      <div>MON</div>
                      <div>TUE</div>
                      <div>WED</div>
                      <div>THU</div>
                      <div>FRI</div>
                      <div>SAT</div>
                    </div>

                    {/* Calendar Days Grid */}
                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-sans">
                      {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                        <div key={`empty-${idx}`} className="h-8 sm:h-9" />
                      ))}

                      {Array.from({ length: daysInMonth }).map((_, idx) => {
                        const dayNum = idx + 1;
                        const isSelected = selectedDay === dayNum;
                        const isWeekend = (firstDayOfWeek + idx) % 7 === 0 || (firstDayOfWeek + idx) % 7 === 6;

                        return (
                          <button
                            key={dayNum}
                            type="button"
                            onClick={() => setSelectedDay(dayNum)}
                            className={`h-8 sm:h-9 rounded-full flex items-center justify-center text-xs transition-all ${
                              isSelected
                                ? "bg-[#8B3DFF] text-white font-bold shadow-md scale-105"
                                : isWeekend
                                ? "text-zinc-400 hover:bg-purple-100/50"
                                : "text-zinc-800 hover:bg-purple-200/60 font-medium"
                            }`}
                          >
                            {dayNum}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* COLUMN 3: TIME SLOTS PICKER (Right - 4 cols) */}
                <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-4">
                    {/* Selected Date Header & 12h/24h Toggle */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-mono font-bold text-zinc-800 uppercase tracking-wider">
                        {selectedDateHeaderStr}
                      </h3>

                      <div className="inline-flex items-center p-0.5 rounded-full bg-zinc-200/70 text-[10px] font-mono font-bold">
                        <button
                          type="button"
                          onClick={() => setTimeFormat("12h")}
                          className={`px-2.5 py-0.5 rounded-full transition-all ${
                            timeFormat === "12h" ? "bg-[#8B3DFF] text-white shadow-2xs" : "text-zinc-600 hover:text-zinc-900"
                          }`}
                        >
                          12h
                        </button>
                        <button
                          type="button"
                          onClick={() => setTimeFormat("24h")}
                          className={`px-2.5 py-0.5 rounded-full transition-all ${
                            timeFormat === "24h" ? "bg-[#8B3DFF] text-white shadow-2xs" : "text-zinc-600 hover:text-zinc-900"
                          }`}
                        >
                          24h
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Time Slots List */}
                    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1.5 text-xs custom-scrollbar">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = selectedTime === slot;
                        const formattedSlot = formatTimeSlot(slot, timeFormat);
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`w-full py-2.5 px-4 rounded-full border transition-all flex items-center justify-center font-mono font-medium text-xs ${
                              isSelected
                                ? "bg-[#8B3DFF] border-[#8B3DFF] text-white shadow-sm"
                                : "bg-white border-purple-100 text-zinc-800 hover:border-purple-300 hover:bg-purple-50/50"
                            }`}
                          >
                            {formattedSlot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Confirm Slot Action Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsConfirmingSlot(true)}
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#8B3DFF] to-[#635BFF] hover:from-[#782ee6] hover:to-[#5248e6] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-purple-500/20 active:scale-98"
                    >
                      Confirm Slot ({formatTimeSlot(selectedTime, timeFormat).toUpperCase()})
                    </button>
                  </div>

                </div>

              </div>
            )}

            {/* POP-UP MODAL OVERLAY ON SLOT CONFIRMATION */}
            {isConfirmingSlot && (
              <div 
                className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
                onClick={() => setIsConfirmingSlot(false)}
              >
                <div 
                  className="bg-white rounded-[28px] p-6 sm:p-8 max-w-[460px] w-full shadow-2xl relative border border-purple-100 space-y-6 text-zinc-900 font-sans"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header & Close Button */}
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl font-mono font-bold tracking-tight text-zinc-900">
                      Confirm 30 Min Call
                    </h2>
                    <button
                      type="button"
                      onClick={() => setIsConfirmingSlot(false)}
                      className="w-8 h-8 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 flex items-center justify-center text-lg transition-colors"
                      aria-label="Close modal"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Date & Time Summary Card */}
                  <div className="bg-[#F8F5FF] border border-purple-100/80 rounded-2xl p-4 space-y-2 text-xs font-mono font-medium text-zinc-800">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">📅</span>
                      <span>{selectedDateHeaderStr}, {currentYear}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">⏰</span>
                      <span>{formatTimeSlot(selectedTime, timeFormat)} ({timezone.split(" ")[0]})</span>
                    </div>
                  </div>

                  {/* Confirmation Form */}
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-purple-100 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 text-sm text-zinc-900 placeholder:text-zinc-400 bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={bookingEmail}
                        onChange={(e) => setBookingEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-purple-100 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 text-sm text-zinc-900 placeholder:text-zinc-400 bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                        PROJECT NOTES (OPTIONAL)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe what you'd like to discuss..."
                        value={bookingNote}
                        onChange={(e) => setBookingNote(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl border border-purple-100 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 text-sm text-zinc-900 placeholder:text-zinc-400 bg-white transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#8B3DFF] to-[#635BFF] hover:from-[#782ee6] hover:to-[#5248e6] text-white font-mono text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-purple-500/25 active:scale-98 flex items-center justify-center gap-2 mt-2"
                    >
                      <span>Confirm Booking</span>
                      <span>→</span>
                    </button>
                  </form>
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB CONTENT 2: SEND MESSAGE */}
        {activeTab === "message" && (
          <div className="max-w-5xl mx-auto rounded-3xl bg-[#FAF5FF] border border-purple-100/90 shadow-xl overflow-hidden p-6 sm:p-8 lg:p-12 min-h-[540px] sm:min-h-[560px] flex flex-col justify-center transition-all duration-300">
            {msgSentSuccess ? (
              <div className="text-center py-12 space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20 text-2xl animate-bounce">
                  ✓
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900">
                  Message Sent Successfully!
                </h2>
                <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-purple-700 font-semibold">{msgName}</strong>. We received your project brief and will reply to your email shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setMsgSentSuccess(false)}
                  className="mt-4 px-7 py-3 rounded-full bg-[#8B3DFF] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#782ee6] transition-all shadow-md active:scale-95"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessageSubmit} className="space-y-6 max-w-2xl mx-auto w-full my-auto">
                <div className="text-center space-y-2 mb-6">
                  <h2 className="text-3xl sm:text-4xl font-serif italic font-normal text-zinc-900">
                    Send a Direct Message
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500 font-sans">
                    Have a project in mind or want to discuss headless WordPress & Full-Stack web dev?
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1.5">
                      <label className="font-mono font-bold text-zinc-600 text-[11px] uppercase tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={msgName}
                        onChange={(e) => setMsgName(e.target.value)}
                        className="w-full px-5 py-3 rounded-full border border-purple-100 bg-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 text-sm shadow-2xs transition-all text-zinc-800 placeholder:text-zinc-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono font-bold text-zinc-600 text-[11px] uppercase tracking-wider">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="hello@domain.com"
                        value={msgEmail}
                        onChange={(e) => setMsgEmail(e.target.value)}
                        className="w-full px-5 py-3 rounded-full border border-purple-100 bg-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 text-sm shadow-2xs transition-all text-zinc-800 placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1.5">
                      <label className="font-mono font-bold text-zinc-600 text-[11px] uppercase tracking-wider">Service Required *</label>
                      <select
                        required
                        value={msgService}
                        onChange={(e) => setMsgService(e.target.value)}
                        className="w-full px-5 py-3 rounded-full border border-purple-100 bg-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 text-xs sm:text-sm shadow-2xs transition-all text-zinc-800 cursor-pointer"
                      >
                        <optgroup label="AI & Automation">
                          <option value="Workflow & Business Automation">Workflow & Business Automation</option>
                          <option value="AI Chatbots & Autonomous Agents">AI Chatbots & Autonomous Agents</option>
                          <option value="CRM & Sales Lead Automation">CRM & Sales Lead Automation</option>
                          <option value="Custom AI Integrations">Custom AI Integrations</option>
                        </optgroup>
                        <optgroup label="Web & App Development">
                          <option value="Business Websites">Business Websites</option>
                          <option value="E-Commerce (Shopify & Woo)">E-Commerce (Shopify & Woo)</option>
                          <option value="Custom WordPress Development">Custom WordPress Development</option>
                          <option value="Web Applications (React / Next.js)">Web Applications (React / Next.js)</option>
                          <option value="Custom Software / SaaS Solutions">Custom Software / SaaS Solutions</option>
                          <option value="Mobile Apps Development">Mobile Apps Development</option>
                          <option value="API & Third-Party Integrations">API & Third-Party Integrations</option>
                        </optgroup>
                        <optgroup label="Local SEO & Reputation">
                          <option value="Google Business Profile (GBP) Optimization">Google Business Profile (GBP) Optimization</option>
                          <option value="Citation Building & Local SEO">Citation Building & Local SEO</option>
                          <option value="Review Management & Reputation">Review Management & Reputation</option>
                        </optgroup>
                        <optgroup label="Other">
                          <option value="Other / Custom Digital Engineering">Other / Custom Digital Engineering</option>
                        </optgroup>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono font-bold text-zinc-600 text-[11px] uppercase tracking-wider">Estimated Budget</label>
                      <select
                        value={msgBudget}
                        onChange={(e) => setMsgBudget(e.target.value)}
                        className="w-full px-5 py-3 rounded-full border border-purple-100 bg-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 text-xs sm:text-sm shadow-2xs transition-all text-zinc-800 cursor-pointer"
                      >
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+ (Enterprise)">$10,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <label className="font-mono font-bold text-zinc-600 text-[11px] uppercase tracking-wider">Project Details *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your goals, timeline, and tech stack requirements..."
                      value={msgContent}
                      onChange={(e) => setMsgContent(e.target.value)}
                      className="w-full px-5 py-4 rounded-3xl border border-purple-100 bg-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 text-sm shadow-2xs transition-all text-zinc-800 placeholder:text-zinc-400 resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#8B3DFF] to-[#5248e6] hover:from-[#782ee6] hover:to-[#4238d6] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-98"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* WHAT HAPPENS NEXT SECTION */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3">
              Transparent Workflow
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              How We Work Together{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal pr-3 sm:pr-4 py-1"
              >
                What Happens Next?
              </motion.span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium max-w-lg mx-auto mt-3 sm:mt-4 leading-relaxed">
              Zero pressure &amp; complete transparency from your first inquiry to project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-3 relative overflow-hidden group hover:border-purple-300 transition-colors">
              <div className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full inline-block">
                STEP 01
              </div>
              <h3 className="text-sm font-serif font-bold text-zinc-900">Submit Your Brief</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                Submit the inquiry form or book a 30-minute discovery slot on the calendar.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-3 relative overflow-hidden group hover:border-purple-300 transition-colors">
              <div className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full inline-block">
                STEP 02
              </div>
              <h3 className="text-sm font-serif font-bold text-zinc-900">24-Hour Review</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                Your project brief is thoroughly reviewed with detailed feedback provided within 24 hours.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-3 relative overflow-hidden group hover:border-purple-300 transition-colors">
              <div className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full inline-block">
                STEP 03
              </div>
              <h3 className="text-sm font-serif font-bold text-zinc-900">Discovery Call</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                A free 30-minute discovery call to align on technical stack, features, and business goals.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-3 relative overflow-hidden group hover:border-purple-300 transition-colors">
              <div className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full inline-block">
                STEP 04
              </div>
              <h3 className="text-sm font-serif font-bold text-zinc-900">Proposal &amp; Quote</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                Receive a detailed proposal with clear scope, milestones, and transparent pricing in 1–3 days.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-3 relative overflow-hidden group hover:border-purple-300 transition-colors">
              <div className="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-full inline-block">
                STEP 05
              </div>
              <h3 className="text-sm font-serif font-bold text-zinc-900">Project Kickoff</h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                Upon agreement, repository setup and agile development execution begin immediately.
              </p>
            </div>
          </div>
        </div>

        {/* MINI FAQ SECTION */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3">
              Clear Answers &amp; Technical Transparency
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Frequently Asked Questions{" "}
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal pr-3 sm:pr-4 py-1"
              >
                &amp; Direct Insights
              </motion.span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 font-medium max-w-lg mx-auto mt-3 sm:mt-4 leading-relaxed">
              Everything you need to know before booking your consultation call or sending a message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {CONTACT_FAQS.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-purple-100 shadow-2xs space-y-2 hover:border-purple-200 transition-all">
                <h3 className="text-sm font-serif font-bold text-zinc-900 flex items-start gap-2">
                  <span className="text-purple-600 font-mono text-xs">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans pl-5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </main>

      <SiteFooter />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center font-mono text-xs text-purple-600">
          Loading contact page...
        </div>
      }
    >
      <ContactPageInner />
    </Suspense>
  );
}
