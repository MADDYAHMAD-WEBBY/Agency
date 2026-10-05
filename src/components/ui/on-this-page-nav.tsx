"use client";

import React, { useEffect, useState } from "react";

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

interface OnThisPageNavProps {
  items: NavItem[];
}

export default function OnThisPageNav({ items }: OnThisPageNavProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  return (
    <div className="hidden lg:block lg:col-span-4 sticky top-28 sm:top-32 self-start space-y-4 pl-6 border-l border-zinc-200/80 max-h-[calc(100vh-150px)] overflow-y-auto scrollbar-thin">
      <div className="text-xs font-mono font-bold text-zinc-400 tracking-wider uppercase mb-4 sticky top-0 bg-white/90 backdrop-blur-xs py-1 z-10">
        ON THIS PAGE
      </div>
      <nav className="space-y-3.5 text-xs font-mono">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveId(item.id);
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`flex items-start gap-2.5 transition-all duration-200 ${
                isActive
                  ? "border-l-2 border-black -ml-[25px] pl-5 font-bold text-black"
                  : "text-zinc-500 font-normal hover:text-zinc-900"
              }`}
            >
              <span className={`shrink-0 ${isActive ? "text-black" : "text-zinc-400"}`}>
                {item.icon}
              </span>
              <span className="leading-tight">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
