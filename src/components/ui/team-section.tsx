"use client";

import React from "react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  gradient: string;
  socials: {
    github?: string;
    linkedin?: string;
    x?: string;
  };
}

// Owner / Featured Leader Card
const featuredLeader: TeamMember = {
  name: "Hamad Ahmad",
  role: "Founder & Full-Stack Architect",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
  gradient: "from-purple-700 via-indigo-600 to-violet-900",
  socials: {
    x: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};

// Compact Team Members (Images kept small & subtle)
const teamMembers: TeamMember[] = [
  {
    name: "Bilal Tariq",
    role: "Senior Full-Stack Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    gradient: "from-purple-600 via-purple-700 to-indigo-800",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Ayesha Malik",
    role: "Lead UI/UX & Brand Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    gradient: "from-fuchsia-600 via-purple-600 to-violet-800",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Usman Farooq",
    role: "Technical SEO & Growth Specialist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    gradient: "from-indigo-600 via-purple-700 to-violet-900",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Zainab Noor",
    role: "Conversion & Content Strategist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    gradient: "from-purple-600 via-pink-600 to-purple-900",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

// Clean SVGs for Social Icons
function XIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
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
    <section id="team" className="relative z-20 w-full py-16 sm:py-24 bg-white text-zinc-900 overflow-hidden">
      {/* Background Ambient Glow matching purple agency theme */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(147, 51, 234, 0.05) 0%, rgba(79, 70, 229, 0.02) 50%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
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

        {/* Compact Team Bento Grid: Cards positioned close together */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-3.5 items-stretch">
          
          {/* Left Column: Owner / Featured Leader Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 bg-gradient-to-b from-[#fbf9ff] via-[#f7f3ff] to-white border border-purple-200/90 rounded-[22px] p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(147,51,234,0.06)] transition-all duration-300 hover:border-purple-400 hover:shadow-[0_16px_36px_rgba(147,51,234,0.12)] group"
          >
            {/* Top: Large Portrait with Purple Theme Color Grading */}
            <div className={`relative w-full aspect-square rounded-[16px] overflow-hidden bg-gradient-to-br ${featuredLeader.gradient} shadow-inner`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(216,180,254,0.25)_0%,transparent_70%)] pointer-events-none z-10" />
              
              <img
                src={featuredLeader.image}
                alt={featuredLeader.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Middle: Name & Role */}
            <div className="text-center my-4 sm:my-5">
              <h4 className="text-lg sm:text-xl font-extrabold text-zinc-900 tracking-tight">
                {featuredLeader.name}
              </h4>
              <p className="text-xs sm:text-sm text-purple-600 font-semibold mt-1">
                {featuredLeader.role}
              </p>
            </div>

            {/* Bottom: Centered Circular Social Buttons */}
            <div className="flex items-center justify-center gap-2.5">
              {featuredLeader.socials.x && (
                <a
                  href={featuredLeader.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X Profile"
                  className="w-9 h-9 rounded-full bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white border border-purple-200/70 hover:border-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                >
                  <XIcon className="w-3.5 h-3.5" />
                </a>
              )}
              {featuredLeader.socials.linkedin && (
                <a
                  href={featuredLeader.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-full bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white border border-purple-200/70 hover:border-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                </a>
              )}
              {featuredLeader.socials.github && (
                <a
                  href={featuredLeader.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-full bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white border border-purple-200/70 hover:border-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column: 2x2 Grid of Compact Horizontal Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white hover:bg-[#faf7ff] border border-purple-100 hover:border-purple-300 rounded-[20px] p-4 sm:p-5 flex flex-col justify-between shadow-[0_2px_12px_rgba(147,51,234,0.04)] hover:shadow-[0_12px_28px_rgba(147,51,234,0.09)] transition-all duration-300 group min-h-[145px] sm:min-h-[160px]"
              >
                {/* Top Row: Small Compact Avatar (Owner k ilava chota image) + Right Socials */}
                <div className="flex items-start justify-between w-full">
                  {/* Small Square Avatar on Purple Theme Gradient */}
                  <div className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-gradient-to-br ${member.gradient} shadow-xs shrink-0 ring-1 ring-purple-200/60`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Top-Right Compact Social Icons */}
                  <div className="flex items-center gap-1.5">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub`}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white border border-purple-200/60 hover:border-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-105"
                      >
                        <GithubIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-50 hover:bg-purple-600 text-purple-700 hover:text-white border border-purple-200/60 hover:border-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-105"
                      >
                        <LinkedInIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom Row: Name and Role */}
                <div className="mt-3.5 sm:mt-4">
                  <h4 className="text-sm sm:text-base font-bold text-zinc-900 tracking-tight group-hover:text-purple-700 transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-[0.72rem] sm:text-xs text-zinc-500 font-medium mt-0.5">
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
