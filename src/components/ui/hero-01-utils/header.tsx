"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import AnimatedPillButton from "@/components/ui/animated-pill-button";

export interface NavigationSection {
  title: string;
  href: string;
  isActive?: boolean;
}

interface HeaderProps {
  navigationData?: NavigationSection[];
}

export interface DropdownSubItem {
  title: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface ServiceCategoryGroup {
  category: string;
  items: DropdownSubItem[];
}

// EXACT SERVICES FROM THE SERVICES SECTION OF THE WEBSITE (Categorized: AI, Web, SEO)
export const SERVICES_DROPDOWN_GROUPS: ServiceCategoryGroup[] = [
  {
    category: "AI & Automation",
    items: [
      {
        title: "Workflow Automation",
        href: "/services/workflow-automation",
        description: "Automate repetitive operations, eliminate bottlenecks & connect tools.",
      },
      {
        title: "AI Chatbots & Autonomous Agents",
        href: "/services/ai-chatbots",
        description: "Intelligent LLM chatbots & 24/7 agents to engage visitors & close sales.",
      },
      {
        title: "CRM / Lead Automation",
        href: "/services/crm-lead-automation",
        description: "Auto-capture, track & nurture leads with instant CRM follow-up pipelines.",
      },
      {
        title: "Custom AI Integrations",
        href: "/services/custom-ai-integrations",
        description: "Embed AI capabilities directly into your web platforms & software.",
      },
    ],
  },
  {
    category: "Web & App Development",
    items: [
      {
        title: "Business Websites",
        href: "/services/business-websites",
        description: "High-converting, mobile-responsive sites built for brand authority.",
      },
      {
        title: "E-Commerce (Shopify & Woo)",
        href: "/services/ecommerce",
        description: "Scalable online stores with 1-page checkouts & high conversions.",
      },
      {
        title: "Custom WordPress Development",
        href: "/services/wordpress-website",
        description: "Sub-second speed, custom Gutenberg blocks & full CMS control.",
      },
      {
        title: "Web Apps (React / Next.js)",
        href: "/services/web-applications",
        description: "Next.js 15 apps delivering lightning performance & dynamic routing.",
      },
      {
        title: "Custom Software / SaaS Solutions",
        href: "/services/custom-software-saas",
        description: "Full-stack software architecture, MVPs & multi-tenant SaaS platforms.",
      },
      {
        title: "Mobile Apps",
        href: "/services/mobile-apps",
        description: "Cross-platform iOS & Android mobile apps with native fluidity.",
      },
      {
        title: "API & Third-Party Integrations",
        href: "/services/api-integrations",
        description: "REST & GraphQL APIs connecting payment, CRM & ERP systems.",
      },
    ],
  },
  {
    category: "Local SEO & Reputation",
    items: [
      {
        title: "Google Business Profile Optimization",
        href: "/services/gbp-optimization",
        description: "Rank top 3 on Google Map Pack & dominate local search traffic.",
      },
      {
        title: "Citation Building",
        href: "/services/citation-building",
        description: "Consistent high-authority NAP citations across premium directories.",
      },
      {
        title: "Review Management & Reputation",
        href: "/services/review-management",
        description: "Automate review requests & build glowing 5-star social proof.",
      },
    ],
  },
];

export const INDUSTRIES_DROPDOWN_ITEMS: DropdownSubItem[] = [
  {
    title: "Hospitality & Direct Booking",
    href: "/industries/hospitality-dining",
    description: "Commission-free booking & guest experience portals.",
    icon: "🏨",
  },
  {
    title: "Home Trades & Emergency Services",
    href: "/industries/home-trades-contractors",
    description: "24/7 call capture & instant service dispatch.",
    icon: "🛠️",
  },
  {
    title: "E-Commerce & DTC Stores",
    href: "/industries/ecommerce-dtc",
    description: "High-converting storefronts & cart recovery engines.",
    icon: "🛍️",
  },
  {
    title: "Finance & Wealth Tech",
    href: "/industries/finance-wealth-tech",
    description: "Encrypted portals & bank-grade compliance.",
    icon: "📈",
  },
  {
    title: "Law & Legal Services",
    href: "/industries/law-legal-services",
    description: "High-authority builds & consultation intake.",
    icon: "⚖️",
  },
  {
    title: "Real Estate & Architecture",
    href: "/industries/real-estate-architecture",
    description: "Dynamic IDX listings & high-ticket lead capture.",
    icon: "🏢",
  },
  {
    title: "Healthcare & Patient Portals",
    href: "/industries/healthcare-clinics",
    description: "HIPAA-ready patient intake & online appointments.",
    icon: "🩺",
  },
];

export const COMPANY_DROPDOWN_ITEMS: DropdownSubItem[] = [
  {
    title: "About Us",
    href: "/about",
    description: "Our engineering philosophy & full-stack development team.",
    icon: "✨",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Technical insights on Next.js, AI, WordPress & SEO.",
    icon: "📝",
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "Transparent packages & custom enterprise contracts.",
    icon: "💎",
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Book a 30-min call or send a direct project brief.",
    icon: "✉️",
  },
];

export default function Header({ navigationData }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | "company" | null>(null);
  
  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: "services" | "industries" | "company") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-0 z-50 w-full py-3 sm:py-5 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        
        {/* Logo: Black pill */}
        <Link href="/" className="inline-flex items-center">
          <div className="bg-black text-white border border-zinc-900 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg tracking-tight hover:opacity-95 transition-opacity shadow-sm">
            MHKMarkedia
          </div>
        </Link>

        {/* Center Nav: Original Segmented Glass Pill with Light Glassy Dropdowns */}
        <nav
          className="hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-xl p-1.5 rounded-full border border-white/70 shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.95),0_8px_32px_0_rgba(147,51,234,0.08)] transition-all relative"
          onMouseLeave={handleMouseLeave}
        >
          {/* Home */}
          <Link
            href="/"
            className="px-5 py-2 text-sm font-medium rounded-full text-zinc-700 hover:text-purple-950 hover:bg-white/60 transition-all duration-300"
          >
            Home
          </Link>

          {/* Services Dropdown Item */}
          <div className="relative flex items-center" onMouseEnter={() => handleMouseEnter("services")}>
            <Link
              href="/#services"
              className={`flex items-center gap-1 px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeDropdown === "services"
                  ? "bg-white/95 text-black font-semibold shadow-sm border border-white/80 backdrop-blur-md"
                  : "text-zinc-700 hover:text-purple-950 hover:bg-white/60"
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180 text-purple-600" : "text-zinc-500"}`} />
            </Link>

            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[840px] bg-white/95 backdrop-blur-2xl rounded-3xl border border-purple-100/90 shadow-[0_20px_50px_rgba(139,61,255,0.15)] p-6 z-50 grid grid-cols-1 md:grid-cols-3 gap-6 text-zinc-900"
                >
                  {SERVICES_DROPDOWN_GROUPS.map((group, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-100/80 border border-purple-200/70 px-3 py-1 rounded-full inline-block">
                        {group.category}
                      </div>
                      <div className="space-y-1">
                        {group.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="group block p-2 rounded-2xl hover:bg-purple-50/70 transition-all border border-transparent hover:border-purple-100"
                          >
                            <div className="mb-0.5">
                              <span className="text-xs font-bold text-zinc-900 group-hover:text-purple-700 transition-colors">
                                {item.title}
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-500 line-clamp-1 leading-relaxed font-sans">
                              {item.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {/* View All Services Footer Bar */}
                  <div className="md:col-span-3 pt-3 border-t border-purple-100 flex items-center justify-between">
                    <span className="text-xs text-zinc-600 font-sans">Looking for custom digital services?</span>
                    <Link
                      href="/#services"
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs font-mono font-bold text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-1"
                    >
                      <span>Explore All Services</span>
                      <span>→</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Dropdown Item */}
          <div className="relative flex items-center" onMouseEnter={() => handleMouseEnter("industries")}>
            <Link
              href="/#industries"
              className={`flex items-center gap-1 px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeDropdown === "industries"
                  ? "bg-white/95 text-black font-semibold shadow-sm border border-white/80 backdrop-blur-md"
                  : "text-zinc-700 hover:text-purple-950 hover:bg-white/60"
              }`}
            >
              <span>Industries</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "industries" ? "rotate-180 text-purple-600" : "text-zinc-500"}`} />
            </Link>

            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] bg-white/95 backdrop-blur-2xl rounded-3xl border border-purple-100/90 shadow-[0_20px_50px_rgba(139,61,255,0.15)] p-6 z-50 text-zinc-900"
                >
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-100/80 border border-purple-200/70 px-3 py-1 rounded-full inline-block mb-3">
                    Targeted Industry Solutions
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {INDUSTRIES_DROPDOWN_ITEMS.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-purple-50/70 transition-all border border-transparent hover:border-purple-100"
                      >
                        <span className="text-xl p-1.5 rounded-xl bg-purple-50 border border-purple-100 group-hover:bg-white transition-colors shadow-2xs">
                          {item.icon}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-zinc-900 group-hover:text-purple-700 transition-colors">
                            {item.title}
                          </div>
                          <p className="text-[10px] text-zinc-500 line-clamp-1 font-sans">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Works */}
          <Link
            href="/#works"
            className="px-5 py-2 text-sm font-medium rounded-full text-zinc-700 hover:text-purple-950 hover:bg-white/60 transition-all duration-300"
          >
            Works
          </Link>

          {/* Company Dropdown Item (Pricing, About Us, Contact Us) */}
          <div className="relative flex items-center" onMouseEnter={() => handleMouseEnter("company")}>
            <Link
              href="/#about"
              className={`flex items-center gap-1 px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeDropdown === "company"
                  ? "bg-white/95 text-black font-semibold shadow-sm border border-white/80 backdrop-blur-md"
                  : "text-zinc-700 hover:text-purple-950 hover:bg-white/60"
              }`}
            >
              <span>Company</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "company" ? "rotate-180 text-purple-600" : "text-zinc-500"}`} />
            </Link>

            <AnimatePresence>
              {activeDropdown === "company" && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full right-0 mt-3 w-[330px] bg-white/95 backdrop-blur-2xl rounded-3xl border border-purple-100/90 shadow-[0_20px_50px_rgba(139,61,255,0.15)] p-5 z-50 space-y-2 text-zinc-900"
                >
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-100/80 border border-purple-200/70 px-3 py-1 rounded-full inline-block mb-2">
                    Company Info & Links
                  </div>

                  {COMPANY_DROPDOWN_ITEMS.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="group flex items-center gap-3 p-2.5 rounded-2xl hover:bg-purple-50/70 transition-all border border-transparent hover:border-purple-100"
                    >
                      <span className="text-lg p-2 rounded-xl bg-purple-50 border border-purple-100 group-hover:bg-white transition-colors shadow-2xs">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-xs font-bold text-zinc-900 group-hover:text-purple-700 transition-colors">
                          {item.title}
                        </div>
                        <p className="text-[10px] text-zinc-500 font-sans line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>


        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <AnimatedPillButton text="Let's Collaborate" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open Menu" className="p-2 sm:p-2.5 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-200 hover:bg-zinc-200 transition-colors">
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] xs:w-[340px] bg-white text-zinc-900 p-6 overflow-y-auto">
              <SheetHeader className="border-b pb-4 mb-6">
                <SheetTitle className="text-left font-bold text-xl text-black">
                  MHKMarkedia
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-2">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 text-sm font-semibold rounded-xl text-zinc-800 hover:bg-zinc-100 transition-colors"
                >
                  Home
                </Link>

                {/* Mobile Services Accordion */}
                <div className="border border-purple-100 rounded-2xl overflow-hidden bg-purple-50/30">
                  <div className="flex items-center justify-between px-4 py-3 text-sm font-bold text-zinc-900">
                    <Link href="/#services" onClick={() => setIsOpen(false)} className="hover:text-purple-700">
                      Services
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-1 text-purple-600"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="p-3 pt-0 space-y-3 bg-white border-t border-purple-100">
                      {SERVICES_DROPDOWN_GROUPS.map((group, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="text-[10px] font-mono font-bold text-purple-700 uppercase px-2 pt-1">
                            {group.category}
                          </div>
                          {group.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block p-2 rounded-xl text-xs font-semibold text-zinc-700 hover:text-purple-700 hover:bg-purple-50 transition-colors"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Industries Accordion */}
                <div className="border border-purple-100 rounded-2xl overflow-hidden bg-purple-50/30">
                  <div className="flex items-center justify-between px-4 py-3 text-sm font-bold text-zinc-900">
                    <Link href="/#industries" onClick={() => setIsOpen(false)} className="hover:text-purple-700">
                      Industries
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                      className="p-1 text-purple-600"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {mobileIndustriesOpen && (
                    <div className="p-3 pt-0 space-y-1 bg-white border-t border-purple-100">
                      {INDUSTRIES_DROPDOWN_ITEMS.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-xl text-xs font-semibold text-zinc-700 hover:text-purple-700 hover:bg-purple-50 transition-colors"
                        >
                          <span>{item.icon}</span>
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Works */}
                <Link
                  href="/#works"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 text-sm font-semibold rounded-xl text-zinc-800 hover:bg-zinc-100 transition-colors"
                >
                  Works
                </Link>

                {/* Mobile Company Accordion */}
                <div className="border border-purple-100 rounded-2xl overflow-hidden bg-purple-50/30">
                  <div className="flex items-center justify-between px-4 py-3 text-sm font-bold text-zinc-900">
                    <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-purple-700">
                      Company
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                      className="p-1 text-purple-600"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileCompanyOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {mobileCompanyOpen && (
                    <div className="p-3 pt-0 space-y-1 bg-white border-t border-purple-100">
                      {COMPANY_DROPDOWN_ITEMS.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-xl text-xs font-semibold text-zinc-700 hover:text-purple-700 hover:bg-purple-50 transition-colors"
                        >
                          <span>{item.icon}</span>
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>



                <div className="pt-6 border-t border-zinc-100 mt-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <AnimatedPillButton text="Let's Collaborate" className="w-full justify-between" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </motion.header>
  );
}
