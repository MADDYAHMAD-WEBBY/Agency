"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface AnimatedPillButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "default" | "glass" | "purple" | "black";
}

export default function AnimatedPillButton({
  text,
  onClick,
  href,
  className = "",
  variant = "default",
}: AnimatedPillButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isGlass = variant === "glass";
  const isBlack = variant === "black";

  const getContainerStyles = () => {
    if (isGlass) {
      return "bg-white/70 hover:bg-white/95 backdrop-blur-md text-zinc-900 border border-zinc-300/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-zinc-400/90";
    }
    if (isBlack) {
      return "bg-black hover:bg-zinc-900 text-white border border-zinc-800 hover:border-zinc-700/90 shadow-xs hover:shadow-lg hover:shadow-white/15";
    }
    return "bg-[#8B3DFF] hover:bg-[#782ee6] text-white border border-[#9d57ff]/60 hover:border-[#8B3DFF] shadow-md hover:shadow-lg hover:shadow-purple-500/25 active:scale-[0.98]";
  };

  const getBadgeStyles = () => {
    if (isGlass) {
      return "bg-[#8B3DFF] text-white group-hover:bg-[#782ee6]";
    }
    if (isBlack) {
      return "bg-white text-black";
    }
    return "bg-white text-[#8B3DFF]";
  };

  const buttonContent = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`group relative inline-flex items-center w-fit shrink-0 h-[48px] rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer select-none overflow-hidden ${getContainerStyles()} ${
        isHovered ? "pl-2 pr-6" : "pl-6 pr-2"
      } ${className}`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
        className="flex items-center gap-3"
      >
        {/* Circle Badge with Arrow */}
        <motion.div
          layout
          style={{ order: isHovered ? 1 : 2 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-2xs transition-colors duration-300 ${getBadgeStyles()}`}
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
          className={`whitespace-nowrap font-medium text-sm ${
            isGlass ? "text-zinc-900" : "text-white"
          }`}
        >
          {text}
        </motion.span>
      </motion.div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block no-underline">
        {buttonContent}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="bg-transparent border-0 p-0 m-0 cursor-pointer">
      {buttonContent}
    </button>
  );
}

