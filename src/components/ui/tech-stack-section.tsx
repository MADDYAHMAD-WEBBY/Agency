"use client";

import * as React from "react";
import {
  FloatingIconsHero,
  type FloatingIconsHeroProps,
} from "@/components/ui/floating-icons-hero-section";

// --- Official Tech Stack White Vector SVG Icons ---

const IconNextjs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill="white"/>
    <path d="M109.833 115.688L49.1917 38.6667H38.6667V89.3333H48V50.925L100.958 118.067C104.058 117.45 107.033 116.65 109.833 115.688Z" fill="#433c50"/>
    <rect x="85.3333" y="38.6667" width="9.33333" height="50.6667" fill="#433c50"/>
  </svg>
);

const IconReact = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="8" fill="white"/>
    <g stroke="white" strokeWidth="5" fill="none">
      <ellipse cx="50" cy="50" rx="36" ry="14"/>
      <ellipse cx="50" cy="50" rx="36" ry="14" transform="rotate(60 50 50)"/>
      <ellipse cx="50" cy="50" rx="36" ry="14" transform="rotate(120 50 50)"/>
    </g>
  </svg>
);

const IconTypescript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="16" fill="white"/>
    <path d="M54 48H72V56H64V80H54V48Z" fill="#433c50"/>
    <path d="M30 62C30 57 34 54 41 54C48 54 51 57 51 62C51 72 31 71 31 77C31 80 34 82 41 82C48 82 51 79 51 75H43C43 76.5 42 77.5 41 77.5C40 77.5 39 76.5 39 75C39 68 59 69 59 62C59 52 49 48 41 48C33 48 23 53 23 62H30Z" fill="#433c50"/>
  </svg>
);

const IconTailwind = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 36C18 36 13 41 11 51C14 46 17.5 44 21.5 45.25C23.9 46 25.6 47.7 27.5 49.6C30.6 52.7 34.1 56.3 42.5 56.3C50.5 56.3 55.5 51.3 57.5 41.3C54.5 46.3 51 48.3 47 47.05C44.6 46.3 42.9 44.6 41 42.7C37.9 39.6 34.4 36 26 36ZM42.5 56.3C34.5 56.3 29.5 61.3 27.5 71.3C30.5 66.3 34 64.3 38 65.55C40.4 66.3 42.1 68 44 69.9C47.1 73 50.6 76.6 59 76.6C67 76.6 72 71.6 74 61.6C71 66.6 67.5 68.6 63.5 67.35C61.1 66.6 59.4 64.9 57.5 63C54.4 59.9 50.9 56.3 42.5 56.3Z" fill="white"/>
  </svg>
);

const IconNodejs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10L85 30V70L50 90L15 70V30L50 10Z" fill="white"/>
    <path d="M50 32L70 43.5V66.5L50 78L30 66.5V43.5L50 32Z" fill="#433c50"/>
    <path d="M50 40L63 47.5V62.5L50 70L37 62.5V47.5L50 40Z" fill="white"/>
  </svg>
);

const IconWordPress = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.158 0C5.457 0 0 5.457 0 12.158c0 6.701 5.457 12.158 12.158 12.158 6.701 0 12.158-5.457 12.158-12.158C24.316 5.457 18.859 0 12.158 0zm0 1.258c6.014 0 10.9 4.886 10.9 10.9 0 2.292-.71 4.417-1.926 6.173L15.34 5.372c.483-.028.932-.083.932-.083.435-.055.385-.688-.055-.658 0 0-1.354.11-2.228.11-.842 0-2.195-.11-2.195-.11-.44-.03-.49.603-.055.658 0 0 .422.055.85.083l2.482 6.793-3.486 10.428L6.4 5.372c.483-.028.932-.083.932-.083.435-.055.385-.688-.055-.658 0 0-1.354.11-2.228.11-.842 0-2.195-.11-2.195-.11-.44-.03-.49.603-.055.658 0 0 .422.055.85.083l4.57 12.553L6.96 17.514C4.16 15.01 2.516 11.4 2.516 7.4c0-2.292.71-4.417 1.926-6.173L12.158 1.258z" />
  </svg>
);

const IconWebflow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 20L51 75H32L43 44H42.5L30 75H11L30 20H49L38 51H38.5L50 20H70ZM90 20H71L63 45H62.5L71 20ZM90 20L72 75H90L100 45H99.5L90 20Z" fill="white"/>
  </svg>
);

const IconShopify = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.34 2.55c-.06 0-.12.02-.17.06-.06.05-.1.11-.11.18L14.6 5.5h-5.2l-.46-2.71c-.01-.07-.05-.13-.11-.18a.29.29 0 0 0-.17-.06H5.45c-.14 0-.25.11-.25.25v.75c0 .14.11.25.25.25h2.61l2.45 14.46c.02.12.12.21.25.21h8.48c.13 0 .23-.09.25-.21l2.45-14.46h2.61c.14 0 .25-.11.25-.25v-.75c0-.14-.11-.25-.25-.25h-3.21zM9.82 5.5l.38-2.25h3.6l.38 2.25H9.82z" />
  </svg>
);

const IconPython = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M49 10C27 10 28 20 28 20V30H50V33H20C20 33 7 31 7 53C7 75 18 74 18 74H25V63C25 63 24 50 37 50H59C59 50 71 50 71 38V18C71 18 73 10 49 10ZM38 18C41 18 43 20 43 23C43 26 41 28 38 28C35 28 33 26 33 23C33 20 35 18 38 18Z" fill="white"/>
    <path d="M51 90C73 90 72 80 72 80V70H50V67H80C80 67 93 69 93 47C93 25 82 26 82 26H75V37C75 37 76 50 63 50H41C41 50 29 50 29 62V82C29 82 27 90 51 90ZM62 82C59 82 57 80 57 77C57 74 59 72 62 72C65 72 67 74 67 77C67 80 65 82 62 82Z" fill="#e2e8f0"/>
  </svg>
);

const IconPostgres = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="white"/>
    <path d="M68 42C68 36 64 32 58 32C54 32 50 34 48 38V34H40V64H48V50C48 46 50 42 54 42C58 42 60 45 60 50V64H68V42Z" fill="#433c50"/>
  </svg>
);

const IconOpenAI = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M92.8 39.1A24.5 24.5 0 0 0 90.7 19a25 25 0 0 0-27.6-11.9A24.5 24.5 0 0 0 43.3 0a25 25 0 0 0-23.8 17.3 24.5 24.5 0 0 0-17.2 12.1 25 25 0 0 0 3.7 29.8 24.5 24.5 0 0 0 2.1 20.1 25 25 0 0 0 27.6 11.9A24.5 24.5 0 0 0 56.7 100a25 25 0 0 0 23.8-17.3 24.5 24.5 0 0 0 17.2-12.1 25 25 0 0 0-3.7-29.8zM56.7 94.2a18.8 18.8 0 0 1-11-3.7l.7-.4 18.4-10.6a3.1 3.1 0 0 0 1.6-2.7V50.9l7.8 4.5v21.5a18.8 18.8 0 0 1-17.5 17.4zM17.7 75.3a18.8 18.8 0 0 1-2.3-11.4l.7.4 18.4 10.6a3.1 3.1 0 0 0 3.1 0l22.5-13v9l-18.6 10.7a18.8 18.8 0 0 1-23.8-6.3zm-8.6-39.2a18.8 18.8 0 0 1 8.8-7.7v.8v25.9a3.1 3.1 0 0 0 1.6 2.7l22.5 13-7.8 4.5L16 63.6A18.8 18.8 0 0 1 9.1 36.1zm64.3-17.4a18.8 18.8 0 0 1 11 3.7l-.7.4-18.4 10.6a3.1 3.1 0 0 0-1.6 2.7v25.9l-7.8-4.5V36a18.8 18.8 0 0 1 17.5-17.3zm23.8 29.8a18.8 18.8 0 0 1 2.3 11.4l-.7-.4-18.4-10.6a3.1 3.1 0 0 0-3.1 0l-22.5 13v-9l18.6-10.7a18.8 18.8 0 0 1 23.8 6.3zm8.6 39.2a18.8 18.8 0 0 1-8.8 7.7v-.8V50a3.1 3.1 0 0 0-1.6-2.7l-22.5-13 7.8-4.5L84 41.3a18.8 18.8 0 0 1 6.9 27.5z"/>
  </svg>
);

const IconZapier = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M56 16L21 54H46L44 84L79 46H54L56 16Z" fill="white"/>
  </svg>
);

const IconFigmaTech = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10A18 18 0 0 0 32 28a18 18 0 0 0 18 18 18 18 0 0 0 18-18A18 18 0 0 0 50 10Z" fill="white"/>
    <path d="M32 46A18 18 0 0 0 14 64a18 18 0 0 0 18 18h18V46H32Z" fill="white"/>
    <path d="M68 46a18 18 0 0 0-18 18 18 18 0 0 0 18 18 18 18 0 0 0 18-18 18 18 0 0 0-18-18Z" fill="white"/>
    <path d="M32 28a18 18 0 0 0-18 18 18 18 0 0 0 18 18V28Z" fill="white"/>
    <path d="M32 82a18 18 0 0 0-18 18 18 18 0 0 0 18-18Z" fill="white"/>
  </svg>
);

const IconGitHubTech = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 1.2A48.8 48.8 0 0 0 34.6 96.3c2.4.4 3.3-1 3.3-2.3v-8.3c-13.6 3-16.4-6.5-16.4-6.5-2.2-5.7-5.4-7.2-5.4-7.2-4.4-3 .3-3 .3-3 4.9.3 7.5 5 7.5 5 4.3 7.5 11.4 5.3 14.2 4.1.4-3.2 1.7-5.3 3.1-6.5-10.8-1.2-22.2-5.4-22.2-24.1 0-5.3 1.9-9.7 5-13.1-.5-1.2-2.2-6.2.5-12.9 0 0 4.1-1.3 13.4 5a46.6 46.6 0 0 1 24.4 0c9.3-6.3 13.4-5 13.4-5 2.7 6.7 1 11.7.5 12.9 3.1 3.4 5 7.8 5 13.1 0 18.7-11.4 22.9-22.3 24.1 1.7 1.5 3.3 4.4 3.3 9v13.4c0 1.3.9 2.7 3.3 2.3A48.8 48.8 0 0 0 50 1.2z"/>
  </svg>
);

const IconVercelTech = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10L90 85H10L50 10Z" />
  </svg>
);

const IconFramerMotion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10H80V45H50L20 10Z" fill="white"/>
    <path d="M20 45H50L80 80H20V45Z" fill="white"/>
    <path d="M50 45L80 45V80L50 45Z" fill="white"/>
  </svg>
);

// Define 16 floating tech stack icons with responsive screen positions (safe top padding)
const techIcons: FloatingIconsHeroProps["icons"] = [
  { id: 1, icon: IconNextjs, className: "top-[16%] left-[8%]" },
  { id: 2, icon: IconReact, className: "top-[18%] right-[10%]" },
  { id: 3, icon: IconTypescript, className: "top-[78%] left-[8%]" },
  { id: 4, icon: IconTailwind, className: "bottom-[12%] right-[10%]" },
  { id: 5, icon: IconNodejs, className: "top-[14%] left-[32%]" },
  { id: 6, icon: IconWordPress, className: "top-[14%] right-[32%]" },
  { id: 7, icon: IconWebflow, className: "bottom-[12%] left-[26%]" },
  { id: 8, icon: IconShopify, className: "top-[45%] left-[10%]" },
  { id: 9, icon: IconPython, className: "top-[72%] right-[26%]" },
  { id: 10, icon: IconPostgres, className: "top-[82%] left-[68%]" },
  { id: 11, icon: IconOpenAI, className: "top-[48%] right-[6%]" },
  { id: 12, icon: IconZapier, className: "top-[52%] left-[6%]" },
  { id: 13, icon: IconFigmaTech, className: "top-[14%] left-[54%]" },
  { id: 14, icon: IconGitHubTech, className: "bottom-[10%] right-[44%]" },
  { id: 15, icon: IconVercelTech, className: "top-[32%] right-[22%]" },
  { id: 16, icon: IconFramerMotion, className: "top-[65%] left-[32%]" },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack">
      <FloatingIconsHero
        eyebrow="Battle-Tested Modern Stack"
        title={
          <>
            Technologies & Stacks We{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Master
            </span>
          </>
        }
        subtitle="Engineering high-performing web applications, AI automation workflows, and headless CMS architecture using industry-standard modern stacks."
        ctaText="Start Your Project"
        ctaHref="#contact"
        icons={techIcons}
      />
    </section>
  );
}
