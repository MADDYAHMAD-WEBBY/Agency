"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full py-3 sm:py-5 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        
        {/* Logo: Black pill */}
        <Link href="/" className="inline-flex items-center">
          <div className="bg-black text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg tracking-tight hover:opacity-95 transition-opacity">
            shadcnspace.
          </div>
        </Link>

        {/* Center Nav: Light Gray Segmented Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-[#f4f4f5] p-1.5 rounded-full border border-gray-200/50">
          {navigationData.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                item.isActive
                  ? "bg-white text-purple-950 shadow-xs font-semibold border border-purple-200/60"
                  : "text-gray-500 hover:text-black hover:bg-gray-200/50"
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
              <button aria-label="Open Menu" className="p-2 sm:p-2.5 rounded-full bg-gray-100/90 text-black hover:bg-gray-200 transition-colors">
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] xs:w-[320px] bg-white p-6">
              <SheetHeader className="border-b pb-4 mb-6">
                <SheetTitle className="text-left font-bold text-xl text-black">
                  shadcnspace.
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
    </header>
  );
}

