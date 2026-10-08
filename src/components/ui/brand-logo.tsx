import React from "react";

export default function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-1.5 font-extrabold tracking-tight text-white select-none ${className}`}>
      <span className="text-xl sm:text-2xl font-sans tracking-tighter">
        MHK<span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent font-serif italic font-normal">Markedia</span>
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
    </div>
  );
}
