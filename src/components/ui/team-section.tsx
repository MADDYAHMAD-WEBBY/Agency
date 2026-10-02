"use client";

import React from "react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  cardGradient: string;
  cardBorder: string;
  avatarGradient: string;
  socials: {
    github?: string;
    linkedin?: string;
    x?: string;
  };
}

// Owner / Featured Leader Card (Mature Executive Periwinkle-Indigo Palette)
const featuredLeader = {
  name: "Muhammad Hafeez Khan",
  role: "Founder",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
  cardGradient: "bg-gradient-to-br from-[#ede9fe] via-[#f3f0ff] to-[#e0e7ff]",
  cardBorder: "border-purple-300/90 hover:border-purple-500",
  avatarGradient: "from-[#4338ca] via-[#6d28d9] to-[#7c3aed]",
  socials: {
    x: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};

// 4 Team Members with mature, executive slate/lavender/indigo gradients (No black, No candy colors)
const teamMembers: TeamMember[] = [
  {
    name: "Hamad Ahmad",
    role: "Full-Stack Developer & Local SEO Expert",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=85",
    cardGradient: "bg-gradient-to-br from-[#f0f4ff] via-[#e8efff] to-[#ede9fe]",
    cardBorder: "border-indigo-200/90 hover:border-indigo-400",
    avatarGradient: "from-[#1e1b4b] via-[#3730a3] to-[#4f46e5]",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Bilal Tariq",
    role: "Senior Full-Stack Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=85",
    cardGradient: "bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#ede9fe]",
    cardBorder: "border-slate-300/80 hover:border-purple-400",
    avatarGradient: "from-[#312e81] via-[#4338ca] to-[#6366f1]",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Ayesha Malik",
    role: "Lead UI/UX & Brand Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85",
    cardGradient: "bg-gradient-to-br from-[#faf5ff] via-[#f5f3ff] to-[#ede9fe]",
    cardBorder: "border-purple-200/90 hover:border-purple-400",
    avatarGradient: "from-[#581c87] via-[#7c3aed] to-[#a855f7]",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Zainab Noor",
    role: "Conversion & Content Strategist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=85",
    cardGradient: "bg-gradient-to-br from-[#f5f5f7] via-[#faf5ff] to-[#ede9fe]",
    cardBorder: "border-purple-200/90 hover:border-purple-400",
    avatarGradient: "from-[#4a044e] via-[#701a75] to-[#9333ea]",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

// Clean SVGs for Social Icons
function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="relative z-20 w-full py-10 sm:py-16 bg-white text-zinc-900 overflow-hidden">
      {/* Background Ambient Glow matching purple agency theme */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(147, 51, 234, 0.05) 0%, rgba(79, 70, 229, 0.02) 50%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-purple-600 uppercase mb-2 sm:mb-3"
          >
            Engineering & Growth Team
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
          >
            The Minds Behind{" "}
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent font-serif italic font-normal">
              Digital Excellence
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-zinc-600 font-medium max-w-lg mx-auto mt-3 sm:mt-4 leading-relaxed"
          >
            Senior engineers, local SEO specialists, and creative leads dedicated to shipping industry-leading digital experiences.
          </motion.p>
        </div>

        {/* Team Bento Grid: Mature Sophisticated Palette + 10px Border Radius + Large Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* Left Column: Owner / Featured Leader Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`lg:col-span-5 ${featuredLeader.cardGradient} border ${featuredLeader.cardBorder} rounded-[10px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(99,102,241,0.08)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(147,51,234,0.14)] group`}
          >
            {/* Top: Large Portrait with 10px Border Radius & Studio Purple Gradient */}
            <div className={`relative w-full aspect-square rounded-[10px] overflow-hidden bg-gradient-to-br ${featuredLeader.avatarGradient} shadow-sm`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(216,180,254,0.25)_0%,transparent_75%)] pointer-events-none z-10" />
              
              <img
                src={featuredLeader.image}
                alt={featuredLeader.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Middle: Name & Role */}
            <div className="text-center my-5 sm:my-6">
              <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {featuredLeader.name}
              </h4>
              <p className="text-xs sm:text-sm text-purple-700 font-semibold mt-1">
                {featuredLeader.role}
              </p>
            </div>

            {/* Bottom: Centered Circular Social Buttons */}
            <div className="flex items-center justify-center gap-3">
              {featuredLeader.socials.x && (
                <a
                  href={featuredLeader.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X Profile"
                  className="w-10 h-10 rounded-full bg-white/95 hover:bg-purple-600 text-slate-700 hover:text-white border border-purple-200/90 hover:border-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] shadow-xs"
                >
                  <XIcon className="w-4 h-4" />
                </a>
              )}
              {featuredLeader.socials.linkedin && (
                <a
                  href={featuredLeader.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full bg-white/95 hover:bg-purple-600 text-slate-700 hover:text-white border border-purple-200/90 hover:border-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] shadow-xs"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              )}
              {featuredLeader.socials.github && (
                <a
                  href={featuredLeader.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full bg-white/95 hover:bg-purple-600 text-slate-700 hover:text-white border border-purple-200/90 hover:border-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column: 2x2 Grid of Horizontal Team Cards with Big Images & 10px Radius */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${member.cardGradient} border ${member.cardBorder} rounded-[10px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(147,51,234,0.12)] transition-all duration-300 group min-h-[220px] sm:min-h-[240px]`}
              >
                {/* Top Row: Substantially Enlarged Avatar Image (rounded-[10px]) + Right Socials */}
                <div className="flex items-start justify-between w-full gap-3">
                  {/* Big Square Avatar (w-28 sm:w-32 lg:w-36 = 112px to 144px) */}
                  <div className={`relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-[10px] overflow-hidden bg-gradient-to-br ${member.avatarGradient} shadow-sm shrink-0 ring-1 ring-slate-300/60`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Top-Right Social Icons */}
                  <div className="flex items-center gap-2">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub`}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-purple-600 text-slate-700 hover:text-white border border-slate-200 hover:border-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xs"
                      >
                        <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-purple-600 text-slate-700 hover:text-white border border-slate-200 hover:border-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xs"
                      >
                        <LinkedInIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom Row: Name and Role */}
                <div className="mt-4 sm:mt-5">
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-700 font-semibold mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
