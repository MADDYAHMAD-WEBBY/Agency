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
  icon: any;
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
    <div className="group relative shrink-0 w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] md:w-[60px] md:h-[60px] lg:w-[62px] lg:h-[62px] rounded-[16px] bg-white border border-slate-200/90 hover:border-purple-400/80 hover:bg-purple-50/50 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-0.5 transform-gpu">
      <Icon
        className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px] transition-transform duration-200 group-hover:scale-110"
        style={{ color: skill.color }}
      />

      {/* Tooltip */}
      <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 bg-zinc-900 border border-white/15 px-2.5 py-1 rounded-md text-[10px] font-mono text-white whitespace-nowrap shadow-xl z-40">
        {skill.name}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  // Repeat arrays 2 times for seamless 50% GPU marquee loop
  const row1Doubled = [...row1Skills, ...row1Skills];
  const row2Doubled = [...row2Skills, ...row2Skills];

  return (
    <section id="skills" className="relative z-10 w-full py-10 sm:py-16 flex flex-col items-center overflow-hidden bg-white text-zinc-900 transition-colors duration-300 border-t-0">
      {/* ===== RICH PURPLE AMBIENT BACKGROUND GLOW ===== */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(147, 51, 234, 0.08) 0%, rgba(79, 70, 229, 0.03) 45%, transparent 75%)",
        }}
      />

      {/* Section Header: Crystal clear, zero cloudy overlays */}
      <div className="relative z-20 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3"
        >
          Tech Stack & Capabilities
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
        >
          Tools & Frameworks Built for{" "}
          <motion.span
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block bg-gradient-to-r from-cyan-600 via-blue-600 via-purple-600 via-fuchsia-600 to-pink-600 bg-[length:200%_auto] bg-clip-text text-transparent font-serif italic font-normal"
          >
            Maximum Speed & Scale
          </motion.span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm text-zinc-600 font-medium max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed tracking-normal"
        >
          Modern frontend frameworks, cloud infrastructure, and database ecosystems engineered for sub-second load times and enterprise-grade reliability.
        </motion.p>
      </div>

      {/* Marquee Rows Container with localized edge fades and generous vertical clearance */}
      <div className="relative z-10 w-full flex flex-col gap-2 sm:gap-3 overflow-hidden py-4 sm:py-6">
        {/* Soft edge gradient fades isolated ONLY to icon rows */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Row 1: Leftward Hardware-Accelerated Marquee */}
        <div className="w-full overflow-visible py-3 sm:py-4">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 w-max animate-marquee-left pause-on-hover">
            {row1Doubled.map((skill, index) => (
              <SkillIcon key={`row1-${skill.name}-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Hardware-Accelerated Marquee */}
        <div className="w-full overflow-visible py-3 sm:py-4">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 w-max animate-marquee-right pause-on-hover">
            {row2Doubled.map((skill, index) => (
              <SkillIcon key={`row2-${skill.name}-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
