"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface AnimatedPillButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedPillButton({
  text,
  onClick,
  className = "",
}: AnimatedPillButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`group relative inline-flex items-center h-[46px] bg-black hover:bg-zinc-900 text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-white/15 border border-zinc-800 hover:border-zinc-700/90 cursor-pointer select-none overflow-hidden ${
        isHovered ? "pl-1.5 pr-6" : "pl-6 pr-1.5"
      } ${className}`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
        className="flex items-center gap-3"
      >
        {/* White Circle Badge */}
        <motion.div
          layout
          style={{ order: isHovered ? 1 : 2 }}
          className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-2xs"
        >
          {isHovered ? (
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          ) : (
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          )}
        </motion.div>

        {/* Text */}
        <motion.span
          layout
          style={{ order: isHovered ? 2 : 1 }}
          className="whitespace-nowrap font-medium text-sm text-white"
        >
          {text}
        </motion.span>
      </motion.div>
    </button>
  );
}
