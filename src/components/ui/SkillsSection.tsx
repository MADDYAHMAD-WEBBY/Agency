"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiSwiper,
  SiPython,
  SiPostgresql,
  SiGraphql,
  SiGit,
  SiGithub,
  SiVercel,
  SiSupabase,
  SiNotion,
  SiFigma,
  SiVite,
  SiPrisma,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiCloudflare,
  SiFirebase,
  SiLinux,
  SiUbuntu,
  SiWordpress,
  SiElementor,
  SiKinsta,
  SiWix,
  SiGooglecloud,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

interface SkillItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

const row1Skills: SkillItem[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Swiper", icon: SiSwiper, color: "#6332F6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "REST API", icon: TbApi, color: "#0F172A" },
  { name: "Notion", icon: SiNotion, color: "#000000" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const row2Skills: SkillItem[] = [
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Java", icon: FaJava, color: "#5382A1" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "VS Code", icon: VscCode, color: "#007ACC" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Ubuntu", icon: SiUbuntu, color: "#E95420" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "Elementor", icon: SiElementor, color: "#92003B" },
  { name: "Kinsta", icon: SiKinsta, color: "#5333ED" },
  { name: "Wix", icon: SiWix, color: "#000000" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
];

function SkillIcon({ skill }: { skill: SkillItem }) {
  const Icon = skill.icon;
  return (
    <div className="group relative shrink-0 w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] md:w-[60px] md:h-[60px] lg:w-[62px] lg:h-[62px] rounded-[16px] bg-white border border-slate-200/90 hover:border-purple-400 hover:bg-purple-50/50 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md hover:scale-110 hover:-translate-y-1">
      <Icon
        className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px] transition-transform duration-200 group-hover:scale-110"
        style={{ color: skill.color }}
      />

      {/* Tooltip */}
      <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 bg-slate-900 border border-white/15 px-2.5 py-1 rounded-md text-[10px] font-mono text-white whitespace-nowrap shadow-xl z-40">
        {skill.name}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [isHoveredRow1, setIsHoveredRow1] = useState(false);
  const [isHoveredRow2, setIsHoveredRow2] = useState(false);

  // Repeat arrays 3 times to ensure infinite smooth marquee loop
  const row1Doubled = [...row1Skills, ...row1Skills, ...row1Skills];
  const row2Doubled = [...row2Skills, ...row2Skills, ...row2Skills];

  return (
    <section id="skills" className="relative z-10 w-full py-20 md:py-28 flex flex-col items-center overflow-hidden bg-white text-slate-900 transition-colors duration-300 border-t-0">
      {/* ===== RICH PURPLE AMBIENT BACKGROUND GLOW ===== */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139, 92, 246, 0.12) 0%, rgba(88, 28, 135, 0.04) 45%, transparent 75%)",
        }}
      />

      {/* Top and Bottom Edge Fades for 100% Seamless Background Blend */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Left and Right Edge Gradient Fades for Smooth Infinite Marquee Effect */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-36 md:w-56 bg-gradient-to-r from-white via-white/90 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-36 md:w-56 bg-gradient-to-l from-white via-white/90 to-transparent z-20" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-6 sm:mb-8 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[42px] sm:text-[56px] md:text-[67px] font-serif font-normal text-slate-900 tracking-tight"
        >
          Skills &{" "}
          <span className="font-serif italic font-normal bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#EC4899] bg-clip-text text-transparent">
            Tools
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-mono text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-4 leading-relaxed"
        >
          Tools Behind the Magic: From code to deployment—tools that bring digital visions to life.
        </motion.p>
      </div>

      {/* Marquee Rows Container */}
      <div className="relative z-10 w-full flex flex-col gap-2 sm:gap-2.5 overflow-visible py-1">
        
        {/* Row 1: Leftward Infinite Marquee */}
        <div
          className="w-full overflow-hidden pt-12 pb-3 -mt-9"
          onMouseEnter={() => setIsHoveredRow1(true)}
          onMouseLeave={() => setIsHoveredRow1(false)}
        >
          <motion.div
            className="flex items-center gap-3 sm:gap-4 md:gap-5 w-max"
            animate={{
              x: isHoveredRow1 ? undefined : ["0%", "-33.333%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {row1Doubled.map((skill, index) => (
              <SkillIcon key={`${skill.name}-${index}`} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Rightward Infinite Marquee */}
        <div
          className="w-full overflow-hidden pt-12 pb-3 -mt-9"
          onMouseEnter={() => setIsHoveredRow2(true)}
          onMouseLeave={() => setIsHoveredRow2(false)}
        >
          <motion.div
            className="flex items-center gap-3 sm:gap-4 md:gap-5 w-max"
            animate={{
              x: isHoveredRow2 ? undefined : ["-33.333%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 32,
                ease: "linear",
              },
            }}
          >
            {row2Doubled.map((skill, index) => (
              <SkillIcon key={`${skill.name}-${index}`} skill={skill} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
