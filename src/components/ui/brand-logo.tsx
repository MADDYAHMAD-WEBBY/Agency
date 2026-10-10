import React from "react";

interface StylishMHKWordmarkProps {
  className?: string;
  variant?: "dark" | "light";
}

/**
 * Premium Stylish MHK Wordmark Logo Component
 * - 'MHK' rendered with custom geometric SVG paths + vibrant purple/violet gradient & node constellation accents.
 * - 'MARKEDIA' rendered in crisp White (for dark mode/footer) or Dark Charcoal (for light mode/header).
 */
export const StylishMHKWordmark: React.FC<StylishMHKWordmarkProps> = ({
  className = "h-8",
  variant = "light",
}) => {
  const isDark = variant === "dark";
  const markediaColor = isDark ? "#FFFFFF" : "#09090B";
  const gradId = isDark ? "mhk-text-grad-dark" : "mhk-text-grad-light";
  const glowId = isDark ? "mhk-glow-dark" : "mhk-glow-light";

  return (
    <svg viewBox="0 0 242 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Light Mode Gradient */}
        <linearGradient id="mhk-text-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#581C87" />
          <stop offset="35%" stopColor="#7C3AED" />
          <stop offset="75%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>

        {/* Dark Mode Glowing Neon Gradient */}
        <linearGradient id="mhk-text-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="40%" stopColor="#C084FC" />
          <stop offset="80%" stopColor="#E9D5FF" />
          <stop offset="100%" stopColor="#F5H3FF" />
        </linearGradient>

        {/* Dynamic Glow Filter */}
        <filter id="mhk-glow-light" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#7C3AED" floodOpacity="0.3" />
        </filter>

        <filter id="mhk-glow-dark" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3.5" floodColor="#A855F7" floodOpacity="0.6" />
        </filter>
      </defs>

      <g filter={`url(#${glowId})`}>
        {/* Stylish Geometric 'M' with Facet Slash */}
        <path
          d="M4 34V6H12.5L19.5 22.5L26.5 6H35V34H27.5V15.5L20.5 31.5H18.5L11.5 15.5V34H4Z"
          fill={`url(#${gradId})`}
        />
        
        {/* Stylized 'H' with Constellation Node */}
        <path
          d="M41 6H48.5V16.5H57.5V6H65V34H57.5V23.5H48.5V34H41V6Z"
          fill={`url(#${gradId})`}
        />
        {/* Node Dot on H crossbar */}
        <circle cx="53" cy="20" r="3.2" fill={isDark ? "#E9D5FF" : "#C084FC"} />
        <circle cx="53" cy="20" r="1.5" fill={isDark ? "#7C3AED" : "#FFFFFF"} />

        {/* Stylized 'K' with Accent Top Node */}
        <path
          d="M71 6H78.5V18.5L88 6H97.5L85.5 20L98 34H88.5L78.5 21.5V34H71V6Z"
          fill={`url(#${gradId})`}
        />
        {/* Constellation Network Line connecting H node to K tip */}
        <line x1="53" y1="20" x2="97.5" y2="6.5" stroke={isDark ? "#C084FC" : "#A855F7"} strokeWidth="1" opacity="0.6" strokeDasharray="2 2" />
        {/* K Top Node Accent */}
        <circle cx="97.5" cy="6.5" r="2.8" fill={isDark ? "#FFFFFF" : "#A855F7"} />
      </g>

      {/* 'MARKEDIA' Text - White in Dark Mode / Charcoal in Light Mode */}
      <text
        x="106"
        y="30"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', sans-serif"
        fontWeight="900"
        fontSize="24"
        letterSpacing="-0.04em"
        fill={markediaColor}
      >
        MARKEDIA
      </text>
    </svg>
  );
};

// Backward compatibility helper
export const BrandEmblem = StylishMHKWordmark;

export default function BrandLogo({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <StylishMHKWordmark className="h-7 sm:h-9 w-auto" variant={variant} />
    </div>
  );
}
