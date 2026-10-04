"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import AnimatedPillButton from "@/components/ui/animated-pill-button";

export interface NavigationSection {
  title: string;
  href: string;
  isActive?: boolean;
}

interface HeaderProps {
  navigationData: NavigationSection[];
}

export default function Header({ navigationData }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="bg-black text-white border border-zinc-900 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg tracking-tight hover:opacity-95 transition-opacity">
            MHKMarkedia
          </div>
        </Link>

        {/* Center Nav: Premium Glassmorphic Segmented Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-xl p-1.5 rounded-full border border-white/70 shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.95),0_8px_32px_0_rgba(147,51,234,0.08)] transition-all">
          {navigationData.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                item.isActive
                  ? "bg-white/95 text-black font-semibold shadow-sm border border-white/80 backdrop-blur-md"
                  : "text-zinc-700 hover:text-purple-950 hover:bg-white/60"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <AnimatedPillButton text="Let's Collaborate" />
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open Menu" className="p-2 sm:p-2.5 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-200 hover:bg-zinc-200 transition-colors">
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] xs:w-[320px] bg-white p-6">
              <SheetHeader className="border-b pb-4 mb-6">
                <SheetTitle className="text-left font-bold text-xl text-black">
                  MHKMarkedia
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-3">
                {navigationData.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2.5 text-base font-medium rounded-xl transition-colors ${
                      item.isActive
                        ? "bg-black text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="pt-6 border-t mt-4">
                  <AnimatedPillButton text="Let's Collaborate" className="w-full justify-between" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </motion.header>
  );
}

