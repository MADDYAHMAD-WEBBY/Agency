"use client";

import * as React from "react";
import {
  FloatingIconsHero,
  type FloatingIconsHeroProps,
} from "@/components/ui/floating-icons-hero-section";

// --- 33 Official Tech Stack White Vector SVG Icons (From User's Image) ---

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

const IconNextjs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill="white"/>
    <path d="M109.833 115.688L49.1917 38.6667H38.6667V89.3333H48V50.925L100.958 118.067C104.058 117.45 107.033 116.65 109.833 115.688Z" fill="#433c50"/>
    <rect x="85.3333" y="38.6667" width="9.33333" height="50.6667" fill="#433c50"/>
  </svg>
);

const IconTypescript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="16" fill="white"/>
    <path d="M54 48H72V56H64V80H54V48Z" fill="#433c50"/>
    <path d="M30 62C30 57 34 54 41 54C48 54 51 57 51 62C51 72 31 71 31 77C31 80 34 82 41 82C48 82 51 79 51 75H43C43 76.5 42 77.5 41 77.5C40 77.5 39 76.5 39 75C39 68 59 69 59 62C59 52 49 48 41 48C33 48 23 53 23 62H30Z" fill="#433c50"/>
  </svg>
);

const IconJavascript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="16" fill="white"/>
    <path d="M48 74C48 78 45 81 39 81C32 81 29 76 29 70H37C37 72.5 38 74 39 74C40 74 40.5 73 40.5 71V48H48V74ZM69 74C69 78 65 81 58 81C51 81 47 76 47 70H55C55 72.5 56 74 58 74C60 74 61 73 61 71.5C61 70 60 69 57 68L54 67C49 65 47 62 47 57C47 51 52 48 59 48C65 48 69 52 69 58H61C61 55.5 60 54.5 58.5 54.5C57 54.5 56 55.5 56 57C56 58 57 59 60 60L63 61C67 63 69 66 69 74Z" fill="#433c50"/>
  </svg>
);

const IconSupabase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.35 23.511a.75.75 0 0 0 1.258-.696L12.593 13.5H21a.75.75 0 0 0 .546-1.264L10.65.489A.75.75 0 0 0 9.392 1.185L11.407 10.5H3a.75.75 0 0 0-.546 1.264l10.896 11.747z" />
  </svg>
);

const IconZod = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M8 9h8l-8 6h8" />
  </svg>
);

const IconRedux = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 9.4c0 2.2-2 4-4.5 4s-4.5-1.8-4.5-4 2-4 4.5-4 4.5 1.8 4.5 4z" />
    <path d="M7.5 14.6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
    <path d="M16.5 14.6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
  </svg>
);

const IconTailwind = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 36C18 36 13 41 11 51C14 46 17.5 44 21.5 45.25C23.9 46 25.6 47.7 27.5 49.6C30.6 52.7 34.1 56.3 42.5 56.3C50.5 56.3 55.5 51.3 57.5 41.3C54.5 46.3 51 48.3 47 47.05C44.6 46.3 42.9 44.6 41 42.7C37.9 39.6 34.4 36 26 36ZM42.5 56.3C34.5 56.3 29.5 61.3 27.5 71.3C30.5 66.3 34 64.3 38 65.55C40.4 66.3 42.1 68 44 69.9C47.1 73 50.6 76.6 59 76.6C67 76.6 72 71.6 74 61.6C71 66.6 67.5 68.6 63.5 67.35C61.1 66.6 59.4 64.9 57.5 63C54.4 59.9 50.9 56.3 42.5 56.3Z" fill="white"/>
  </svg>
);

const IconStyledComponents = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.49 0-4.5-2.01-4.5-4.5 0-1.85 1.12-3.44 2.72-4.14.45-.2.95-.36 1.48-.44L14.5 5l1.5 2.6c1.78.89 3 2.74 3 4.9 0 2.49-2.01 4.5-4.5 4.5z" />
  </svg>
);

const IconPostgres = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="white"/>
    <path d="M68 42C68 36 64 32 58 32C54 32 50 34 48 38V34H40V64H48V50C48 46 50 42 54 42C58 42 60 45 60 50V64H68V42Z" fill="#433c50"/>
  </svg>
);

const IconGraphql = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <circle cx="12" cy="2" r="2" fill="white" />
    <circle cx="22" cy="8.5" r="2" fill="white" />
    <circle cx="22" cy="15.5" r="2" fill="white" />
    <circle cx="12" cy="22" r="2" fill="white" />
    <circle cx="2" cy="15.5" r="2" fill="white" />
    <circle cx="2" cy="8.5" r="2" fill="white" />
  </svg>
);

const IconGit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.57 10.57L13.43 2.43a1.5 1.5 0 0 0-2.12 0L9.44 4.31l3.07 3.07a1.86 1.86 0 0 1 2.37 2.37l3.06 3.06a1.86 1.86 0 0 1 2.12 2.12l1.51-1.51a1.5 1.5 0 0 0 0-2.12zM5.31 9.44L3.43 11.32a1.5 1.5 0 0 0 0 2.12l8.14 8.14a1.5 1.5 0 0 0 2.12 0l1.88-1.88-3.07-3.07a1.86 1.86 0 0 1-2.37-2.37L7.06 11.2a1.86 1.86 0 0 1-1.75-1.76z" />
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

const IconStripe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.763-1.444 2.21-1.444 2.617 0 5.438.995 7.502 2.158l.942-5.432C19.034 1.054 15.938.1 12.833.1 6.398.1 2.2 3.483 2.2 8.761c0 7.801 10.742 6.551 10.742 9.927 0 1.002-.878 1.603-2.525 1.603-2.909 0-6.286-1.258-8.625-2.616l-1 5.496C3.212 24.475 6.787 25.5 10.998 25.5c6.702 0 11.002-3.28 11.002-8.775 0-8.318-10.742-6.938-10.742-10.075z" />
  </svg>
);

const IconMicroservices = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
    <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
  </svg>
);

const IconNotion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.107-.746c.373 0 .28-.326.187-.466L16.48.99C16.014.477 15.361 0 14.15 0L3.106.746C2.36.839 1.986 1.259 2.22 1.959l2.239 2.249zm.84 3.731l12.784-.84c1.12-.093 1.4.373 1.4 1.12v13.627c0 .84-.373 1.306-1.4 1.4l-12.784.84c-1.12.093-1.493-.373-1.493-1.4V9.059c0-.84.373-1.213 1.493-1.12zM8.38 10.645v9.147l3.826-.233v-9.147L8.38 10.645zm5.132-.326v9.147l3.827-.233v-9.147l-3.827.233z" />
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

const IconZapier = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M56 16L21 54H46L44 84L79 46H54L56 16Z" fill="white"/>
  </svg>
);

const IconJava = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.747 16.516s-.786.155-1.127.361c-1.293.774.207 1.341 1.033 1.393 1.343.078 3.513-.155 5.58-1.033 1.833-.774 3.772-2.144 3.772-2.144s-1.033.723-2.067 1.188c-2.325 1.059-4.805 1.085-7.191.235zm.775 3.332s-1.162.258-1.653.568c-1.55 1.007.413 1.705 1.705 1.757 2.067.078 5.244-.284 8.241-1.782 1.498-.75 2.583-1.627 2.583-1.627s-1.214.749-2.609 1.292c-3.1 1.188-6.149 1.162-8.267-.208zm5.554-15.807c.801.956.336 2.093-.698 3.101-1.42 1.395-3.332 2.557-3.332 2.557s1.395-.826 2.377-1.782c1.239-1.214 1.576-2.093.852-3.101-.698-.956-2.118-2.015-2.118-2.015s1.963.155 2.919 1.24zM7.282 13.75s-1.007.258-1.524.594c-2.015 1.317.517 2.222 2.222 2.274 2.687.103 6.82-.362 10.747-2.325 1.937-.982 3.359-2.118 3.359-2.118s-1.576.956-3.385 1.653c-4.03 1.55-7.982 1.524-11.419-.078z" />
  </svg>
);

const IconPrisma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 19.5L12 22L22 19.5L12 2Z" />
    <path d="M12 2V22" />
  </svg>
);

const IconNodejs = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10L85 30V70L50 90L15 70V30L50 10Z" fill="white"/>
    <path d="M50 32L70 43.5V66.5L50 78L30 66.5V43.5L50 32Z" fill="#433c50"/>
    <path d="M50 40L63 47.5V62.5L50 70L37 62.5V47.5L50 40Z" fill="white"/>
  </svg>
);

const IconMongodb = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.164 0s-.273.29-.482.528C8.04 4.544 4.544 9.497 4.544 14.523c0 4.249 2.87 7.747 7.039 8.683v.794h.834v-.794c4.169-.936 7.039-4.434 7.039-8.683 0-5.026-3.496-9.979-7.138-13.995-.209-.238-.482-.528-.482-.528z" />
  </svg>
);

const IconExpress = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="bold" fontFamily="sans-serif">ex</text>
  </svg>
);

const IconCloudflare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
  </svg>
);

const IconAuth0 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.98 7.448L12 0 2.02 7.448l3.81 11.728L12 24l6.17-4.824 3.81-11.728zm-9.98 12.164L7.52 16.14l-2.35-7.232L12 4.096l6.83 4.812-2.35 7.232-4.48 3.472z" />
  </svg>
);

const IconVSCode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.15 2.587L18.21.21a1.49 1.49 0 0 0-1.706.337l-10.38 9.941-4.08-3.09a.75.75 0 0 0-.96.06L.2 8.347a.75.75 0 0 0 .04 1.09l3.96 3.463-3.96 3.462a.75.75 0 0 0-.04 1.09l.888.89a.75.75 0 0 0 .96.06l4.08-3.09 10.38 9.94a1.49 1.49 0 0 0 1.706.338l4.94-2.377A1.5 1.5 0 0 0 24 22.183V3.817a1.5 1.5 0 0 0-.85-1.23z" />
  </svg>
);

const IconLinux = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.33 0C8.84 0 7.82 3.12 7.82 5.86c0 1.25.17 3.52-.61 4.57C6.44 11.47 5 12.28 5 14.5c0 2.22 1.44 4.5 4.5 4.5.33 0 .76-.05 1.21-.14 1.29.83 2.92 1.14 4.62 1.14s3.33-.31 4.62-1.14c.45.09.88.14 1.21.14 3.06 0 4.5-2.28 4.5-4.5 0-2.22-1.44-3.03-2.21-4.07-.78-1.05-.61-3.32-.61-4.57C17.84 3.12 16.82 0 13.33 0h-1z" />
  </svg>
);

const IconUbuntu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="6" cy="12" r="2" fill="white" />
    <circle cx="15" cy="6.8" r="2" fill="white" />
    <circle cx="15" cy="17.2" r="2" fill="white" />
  </svg>
);

const IconWordPress = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.158 0C5.457 0 0 5.457 0 12.158c0 6.701 5.457 12.158 12.158 12.158 6.701 0 12.158-5.457 12.158-12.158C24.316 5.457 18.859 0 12.158 0zm0 1.258c6.014 0 10.9 4.886 10.9 10.9 0 2.292-.71 4.417-1.926 6.173L15.34 5.372c.483-.028.932-.083.932-.083.435-.055.385-.688-.055-.658 0 0-1.354.11-2.228.11-.842 0-2.195-.11-2.195-.11-.44-.03-.49.603-.055.658 0 0 .422.055.85.083l2.482 6.793-3.486 10.428L6.4 5.372c.483-.028.932-.083.932-.083.435-.055.385-.688-.055-.658 0 0-1.354.11-2.228.11-.842 0-2.195-.11-2.195-.11-.44-.03-.49.603-.055.658 0 0 .422.055.85.083l4.57 12.553L6.96 17.514C4.16 15.01 2.516 11.4 2.516 7.4c0-2.292.71-4.417 1.926-6.173L12.158 1.258z" />
  </svg>
);

const IconElementor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
    <rect x="7" y="7" width="2.5" height="10" fill="white" />
    <rect x="11.5" y="7" width="5.5" height="2" fill="white" />
    <rect x="11.5" y="11" width="5.5" height="2" fill="white" />
    <rect x="11.5" y="15" width="5.5" height="2" fill="white" />
  </svg>
);

const IconKotlin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 24H0V0h24L12 12Z" />
  </svg>
);

const IconWix = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontSize="11" fontWeight="900" fontFamily="sans-serif">WIX</text>
  </svg>
);

const IconGoogle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 15.987 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

// Define ALL 33 floating tech stack icons with non-overlapping canvas positions
const techIcons: FloatingIconsHeroProps["icons"] = [
  // Top Outer Arc (1-8)
  { id: 1, icon: IconReact, className: "top-[12%] left-[4%]" },
  { id: 2, icon: IconNextjs, className: "top-[16%] left-[16%]" },
  { id: 3, icon: IconTypescript, className: "top-[12%] left-[28%]" },
  { id: 4, icon: IconJavascript, className: "top-[16%] left-[40%]" },
  { id: 5, icon: IconSupabase, className: "top-[12%] right-[40%]" },
  { id: 6, icon: IconZod, className: "top-[16%] right-[28%]" },
  { id: 7, icon: IconRedux, className: "top-[12%] right-[16%]" },
  { id: 8, icon: IconTailwind, className: "top-[16%] right-[4%]" },

  // Mid Outer Ring (9-17)
  { id: 9, icon: IconStyledComponents, className: "top-[32%] left-[3%]" },
  { id: 10, icon: IconPostgres, className: "top-[36%] left-[14%]" },
  { id: 11, icon: IconGraphql, className: "top-[32%] right-[14%]" },
  { id: 12, icon: IconGit, className: "top-[36%] right-[3%]" },
  { id: 13, icon: IconGitHubTech, className: "top-[52%] left-[5%]" },
  { id: 14, icon: IconVercelTech, className: "top-[52%] right-[5%]" },
  { id: 15, icon: IconStripe, className: "top-[68%] left-[4%]" },
  { id: 16, icon: IconMicroservices, className: "top-[68%] right-[4%]" },
  { id: 17, icon: IconNotion, className: "top-[82%] left-[6%]" },

  // Bottom Outer Arc (18-25)
  { id: 18, icon: IconFigmaTech, className: "top-[82%] right-[6%]" },
  { id: 19, icon: IconZapier, className: "bottom-[10%] left-[16%]" },
  { id: 20, icon: IconJava, className: "bottom-[14%] left-[28%]" },
  { id: 21, icon: IconPrisma, className: "bottom-[10%] left-[40%]" },
  { id: 22, icon: IconNodejs, className: "bottom-[10%] right-[40%]" },
  { id: 23, icon: IconMongodb, className: "bottom-[14%] right-[28%]" },
  { id: 24, icon: IconExpress, className: "bottom-[10%] right-[16%]" },
  { id: 25, icon: IconCloudflare, className: "top-[26%] left-[24%]" },

  // Inner Subtle Accents (26-33)
  { id: 26, icon: IconAuth0, className: "top-[26%] right-[24%]" },
  { id: 27, icon: IconVSCode, className: "top-[44%] left-[22%]" },
  { id: 28, icon: IconLinux, className: "top-[44%] right-[22%]" },
  { id: 29, icon: IconUbuntu, className: "top-[62%] left-[20%]" },
  { id: 30, icon: IconWordPress, className: "top-[62%] right-[20%]" },
  { id: 31, icon: IconElementor, className: "bottom-[22%] left-[34%]" },
  { id: 32, icon: IconKotlin, className: "bottom-[22%] right-[34%]" },
  { id: 33, icon: IconGoogle, className: "top-[76%] left-[48%]" },
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
