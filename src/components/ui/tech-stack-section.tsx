"use client";

import * as React from "react";
import {
  FloatingIconsHero,
  type FloatingIconsHeroProps,
} from "@/components/ui/floating-icons-hero-section";

// --- Official Tech Stack SVG Icons ---

const IconNextjs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_n" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="black" />
    </mask>
    <g mask="url(#mask0_n)">
      <circle cx="90" cy="90" r="90" fill="black" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.8136V70.3533L136.78 160.835C141.341 159.98 145.602 158.826 149.508 157.52Z" fill="white" />
      <rect x="115" y="54" width="13" height="72" fill="white" />
    </g>
  </svg>
);

const IconReact = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 841.9 595.3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="#00d8ff">
      <ellipse cx="420.9" cy="296.5" rx="65.5" ry="65.5" />
      <path d="M420.9 107.8c-73 0-141.2 14.1-188.7 38.6-46.7 24.1-73.4 57.7-73.4 94.6 0 36.9 26.7 70.5 73.4 94.6 47.5 24.5 115.7 38.6 188.7 38.6 73 0 141.2-14.1 188.7-38.6 46.7-24.1 73.4-57.7 73.4-94.6 0-36.9-26.7-70.5-73.4-94.6-47.5-24.5-115.7-38.6-188.7-38.6zm0 241.9c-64.8 0-123.6-12.2-163.6-32.9-38.8-20-56.5-45.7-56.5-71.3 0-25.6 17.7-51.3 56.5-71.3 40-20.7 98.8-32.9 163.6-32.9 64.8 0 123.6 12.2 163.6 32.9 38.8 20 56.5 45.7 56.5 71.3 0 25.6-17.7 51.3-56.5 71.3-40 20.7-98.8 32.9-163.6 32.9z" />
      <path d="M420.9 107.8c-73 0-141.2 14.1-188.7 38.6-46.7 24.1-73.4 57.7-73.4 94.6 0 36.9 26.7 70.5 73.4 94.6 47.5 24.5 115.7 38.6 188.7 38.6 73 0 141.2-14.1 188.7-38.6 46.7-24.1 73.4-57.7 73.4-94.6 0-36.9-26.7-70.5-73.4-94.6-47.5-24.5-115.7-38.6-188.7-38.6zm0 241.9c-64.8 0-123.6-12.2-163.6-32.9-38.8-20-56.5-45.7-56.5-71.3 0-25.6 17.7-51.3 56.5-71.3 40-20.7 98.8-32.9 163.6-32.9 64.8 0 123.6 12.2 163.6 32.9 38.8 20 56.5 45.7 56.5 71.3 0 25.6-17.7 51.3-56.5 71.3-40 20.7-98.8 32.9-163.6 32.9z" transform="rotate(60 420.9 296.5)" />
      <path d="M420.9 107.8c-73 0-141.2 14.1-188.7 38.6-46.7 24.1-73.4 57.7-73.4 94.6 0 36.9 26.7 70.5 73.4 94.6 47.5 24.5 115.7 38.6 188.7 38.6 73 0 141.2-14.1 188.7-38.6 46.7-24.1 73.4-57.7 73.4-94.6 0-36.9-26.7-70.5-73.4-94.6-47.5-24.5-115.7-38.6-188.7-38.6zm0 241.9c-64.8 0-123.6-12.2-163.6-32.9-38.8-20-56.5-45.7-56.5-71.3 0-25.6 17.7-51.3 56.5-71.3 40-20.7 98.8-32.9 163.6-32.9 64.8 0 123.6 12.2 163.6 32.9 38.8 20 56.5 45.7 56.5 71.3 0 25.6-17.7 51.3-56.5 71.3-40 20.7-98.8 32.9-163.6 32.9z" transform="rotate(120 420.9 296.5)" />
    </g>
  </svg>
);

const IconTypescript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#3178C6" />
    <path d="M12.5 11.5H16.5V13H14.5V19H12.5V11.5Z" fill="white" />
    <path d="M7 14.5C7 13.5 7.8 13 9 13C10.2 13 11 13.6 11 14.5C11 17 7 16.5 7 18.5C7 19.3 7.8 20 9 20C10.2 20 11 19.2 11 18.5H9.5C9.5 18.8 9.3 19 9 19C8.7 19 8.5 18.8 8.5 18.5C8.5 17 12.5 17.2 12.5 14.5C12.5 13 11 11.5 9 11.5C7 11.5 5.5 12.8 5.5 14.5H7Z" fill="white" />
  </svg>
);

const IconTailwind = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C9.33333 6 7.66667 7.33333 7 10C8 8.66667 9.16667 8.16667 10.5 8.5C11.3 8.7 11.8714 9.27857 12.5 9.91429C13.525 10.95 14.7 12.15 17.5 12.15C20.1667 12.15 21.8333 10.8167 22.5 8.15C21.5 9.48333 20.3333 9.98333 19 9.65C18.2 9.45 17.6286 8.87143 17 8.23571C15.975 7.2 14.8 6 12 6ZM7 12.15C4.33333 12.15 2.66667 13.4833 2 16.15C3 14.8167 4.16667 14.3167 5.5 14.65C6.3 14.85 6.87143 15.4286 7.5 16.0643C8.525 17.1 9.7 18.3 12.5 18.3C15.1667 18.3 16.8333 16.9667 17.5 14.3C16.5 15.6333 15.3333 16.1333 14 15.8C13.2 15.6 12.6286 15.0214 12 14.3857C10.975 13.35 9.8 12.15 7 12.15Z" fill="#38BDF8" />
  </svg>
);

const IconNodejs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 7.2V16.8L12 22L21 16.8V7.2L12 2Z" fill="#5FA04E" />
    <path d="M12 11.5L7.5 9V14L12 16.5L16.5 14V9L12 11.5Z" fill="white" />
  </svg>
);

const IconWordPress = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#21759B" />
    <path d="M2.2 12C2.2 15.2 3.7 18 6 19.8L3.2 12H2.2ZM21.8 12C21.8 10.7 21.4 9.5 20.6 8.5L17.5 17.2C19.9 16 21.8 14.2 21.8 12ZM12 21.8C10.5 21.8 9.1 21.4 7.8 20.6L11.5 10.4L15.3 20.6C14.3 21.4 13.2 21.8 12 21.8ZM12 2.2C14.4 2.2 16.5 3.1 18.2 4.6L14.7 14.2L12.5 7.8C12.9 7.7 13.3 7.6 13.3 7.6C13.7 7.5 13.6 6.9 13.2 7C13.2 7 11.4 7.2 10.6 7.2C9.8 7.2 8 7 8 7C7.6 6.9 7.5 7.5 7.9 7.6C7.9 7.6 8.3 7.7 8.7 7.8L9.9 11.2L7.3 4.2C8.7 2.9 10.3 2.2 12 2.2Z" fill="white" />
  </svg>
);

const IconWebflow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.8 5L12.2 18.8H7.6L10.3 11H10.2L7.2 18.8H2.5L7.2 5H11.8L9.2 12.8H9.3L12.2 5H16.8ZM21.5 5H16.8L14.8 11.2H14.7L16.8 5ZM21.5 5L17.2 18.8H21.5L24 11.2H23.9L21.5 5Z" fill="#146EF5" />
  </svg>
);

const IconShopify = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8 4.2C18.8 4.2 18.3 4.1 17.8 4.3C17.4 4.5 15.6 5.8 15.6 5.8L12.4 1.8C12.4 1.8 12.1 1.5 11.7 1.5C11.3 1.5 11.1 1.8 11.1 1.8L9.8 5.8C9.8 5.8 8.1 4.5 7.7 4.3C7.2 4.1 6.7 4.2 6.7 4.2L2.5 19.8L12.5 22.5L22.5 19.8L18.8 4.2Z" fill="#95BF47" />
    <path d="M12.5 6.5V19.5L18.5 17.8L15.8 6.5H12.5Z" fill="#5E8E3E" />
  </svg>
);

const IconPython = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9 2C6.7 2 7 4.3 7 4.3V6.6H12.1V7.3H5.1C5.1 7.3 2 7 2 12.1C2 17.2 4.7 17 4.7 17H6.3V14.6C6.3 14.6 6.2 11.7 9.1 11.7H14.2C14.2 11.7 17 11.7 17 8.9V4.3C17 4.3 17.4 2 11.9 2ZM9.4 3.7C10 3.7 10.4 4.1 10.4 4.7C10.4 5.3 10 5.7 9.4 5.7C8.8 5.7 8.4 5.3 8.4 4.7C8.4 4.1 8.9 3.7 9.4 3.7Z" fill="#3776AB" />
    <path d="M12.1 22C17.3 22 17 19.7 17 19.7V17.4H11.9V16.7H18.9C18.9 16.7 22 17 22 11.9C22 6.8 19.3 7 19.3 7H17.7V9.4C17.7 9.4 17.8 12.3 14.9 12.3H9.8C9.8 12.3 7 12.3 7 15.1V19.7C7 19.7 6.6 22 12.1 22ZM14.6 20.3C14 20.3 13.6 19.9 13.6 19.3C13.6 18.7 14 18.3 14.6 18.3C15.2 18.3 15.6 18.7 15.6 19.3C15.6 19.9 15.1 20.3 14.6 20.3Z" fill="#FFD43B" />
  </svg>
);

const IconPostgres = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="#336791" />
    <path d="M16.5 10.5C16.5 9 15.5 8 14 8C13 8 12 8.5 11.5 9.5V8.5H9.5V16H11.5V12.5C11.5 11.5 12 10.5 13 10.5C14 10.5 14.5 11.2 14.5 12.5V16H16.5V10.5Z" fill="white" />
  </svg>
);

const IconOpenAI = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.28 9.37a5.9 5.9 0 0 0-.5-4.83 6 6 0 0 0-6.62-2.85A5.9 5.9 0 0 0 10.4 0a6 6 0 0 0-5.7 4.14 5.9 5.9 0 0 0-4.13 2.9 6 6 0 0 0 .9 7.15 5.9 5.9 0 0 0 .5 4.83 6 6 0 0 0 6.62 2.85A5.9 5.9 0 0 0 13.6 24a6 6 0 0 0 5.7-4.14 5.9 5.9 0 0 0 4.13-2.9 6 6 0 0 0-.9-7.15zm-8.8 13.23a4.5 4.5 0 0 1-2.65-.89l.16-.09 4.42-2.55a.75.75 0 0 0 .38-.65v-6.23l1.87 1.08v5.15a4.52 4.52 0 0 1-4.18 4.18zm-9.35-4.52a4.5 4.5 0 0 1-.55-2.74l.16.1 4.42 2.55a.75.75 0 0 0 .75 0l5.4-3.11v2.17l-4.46 2.57a4.52 4.52 0 0 1-5.72-1.54zm-2.07-9.4a4.5 4.5 0 0 1 2.1-1.85l.01.18V12.1a.75.75 0 0 0 .38.65l5.39 3.12-1.87 1.08-4.46-2.57A4.52 4.52 0 0 1 2.06 8.68zm15.42-4.19a4.5 4.5 0 0 1 2.65.89l-.16.09-4.42 2.55a.75.75 0 0 0-.38.65v6.23l-1.87-1.08V8.67a4.52 4.52 0 0 1 4.18-4.18zm9.35 4.52a4.5 4.5 0 0 1 .55 2.74l-.16-.1-4.42-2.55a.75.75 0 0 0-.75 0l-5.4 3.11V8.04l4.46-2.57a4.52 4.52 0 0 1 5.72 1.54zm2.07 9.4a4.5 4.5 0 0 1-2.1 1.85l-.01-.18V11.9a.75.75 0 0 0-.38-.65l-5.39-3.12 1.87-1.08 4.46 2.57a4.52 4.52 0 0 1 1.55 5.72z" />
  </svg>
);

const IconZapier = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#FF4F00" />
    <path d="M13.5 4L5 13H11L10.5 20L19 11H13L13.5 4Z" fill="white" />
  </svg>
);

const IconFigmaTech = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2A4 4 0 0 0 8 6a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4Z" fill="#F24E1E" />
    <path d="M8 10A4 4 0 0 0 4 14a4 4 0 0 0 4 4h4v-8H8Z" fill="#0ACF83" />
    <path d="M16 10a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4Z" fill="#1ABCFE" />
    <path d="M8 6a4 4 0 0 0-4 4 4 4 0 0 0 4 4v-8Z" fill="#FF7262" />
    <path d="M8 18a4 4 0 0 0-4 4 4 4 0 0 0 4-4Z" fill="#A259FF" />
  </svg>
);

const IconGitHubTech = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const IconVercelTech = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);

// Define 16 floating tech stack icons with responsive screen positions
const techIcons: FloatingIconsHeroProps["icons"] = [
  { id: 1, icon: IconNextjs, className: "top-[10%] left-[8%]" },
  { id: 2, icon: IconReact, className: "top-[15%] right-[10%]" },
  { id: 3, icon: IconTypescript, className: "top-[78%] left-[8%]" },
  { id: 4, icon: IconTailwind, className: "bottom-[12%] right-[10%]" },
  { id: 5, icon: IconNodejs, className: "top-[5%] left-[32%]" },
  { id: 6, icon: IconWordPress, className: "top-[5%] right-[32%]" },
  { id: 7, icon: IconWebflow, className: "bottom-[8%] left-[26%]" },
  { id: 8, icon: IconShopify, className: "top-[42%] left-[12%]" },
  { id: 9, icon: IconPython, className: "top-[72%] right-[26%]" },
  { id: 10, icon: IconPostgres, className: "top-[88%] left-[68%]" },
  { id: 11, icon: IconOpenAI, className: "top-[48%] right-[6%]" },
  { id: 12, icon: IconZapier, className: "top-[52%] left-[6%]" },
  { id: 13, icon: IconFigmaTech, className: "top-[6%] left-[54%]" },
  { id: 14, icon: IconGitHubTech, className: "bottom-[6%] right-[44%]" },
  { id: 15, icon: IconVercelTech, className: "top-[28%] right-[22%]" },
  { id: 16, icon: IconNextjs, className: "top-[62%] left-[32%]" },
];

export default function TechStackSection() {
  return (
    <FloatingIconsHero
      title="Technologies & Stacks We Master"
      subtitle="Engineering high-performing web applications, AI automation workflows, and headless CMS architecture using industry-standard modern stacks."
      ctaText="Start Your Project"
      ctaHref="#contact"
      icons={techIcons}
    />
  );
}
