"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/content-data";

interface BlogPostsGridProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogPostsGrid({ posts, categories }: BlogPostsGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ─── CATEGORY FILTER PILLS ─── */}
      <section className="max-w-5xl mx-auto" aria-label="Filter blog posts by category">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-[#8B3DFF] text-white shadow-md scale-[1.02]"
                  : "bg-zinc-100/90 text-zinc-600 border border-zinc-200/80 hover:text-zinc-900 hover:border-purple-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── BLOG POST CARDS GRID ─── */}
      <section className="max-w-5xl mx-auto" aria-label="Blog articles">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-zinc-200/80 bg-white shadow-2xs hover:shadow-lg hover:border-purple-300 transition-all duration-300 overflow-hidden h-full"
              >
                {/* Card Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Pill Overlay on Image */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-5 space-y-3">
                  {/* Post Title */}
                  <h2 className="text-base sm:text-lg font-serif font-bold text-zinc-900 leading-snug line-clamp-2 group-hover:text-purple-700 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Bottom Row: Meta + Read Article CTA */}
                  <div className="flex items-center justify-between gap-2 pt-3.5 border-t border-zinc-100 mt-auto text-xs font-mono">
                    {/* Read Time & Date */}
                    <div className="flex items-center gap-2 text-[11px] text-zinc-400 uppercase tracking-wider whitespace-nowrap min-w-0 overflow-hidden text-ellipsis">
                      <span className="whitespace-nowrap">{post.readTime}</span>
                      <span className="text-zinc-300">·</span>
                      <time className="whitespace-nowrap">{post.publishDate}</time>
                    </div>

                    {/* Read Article Arrow */}
                    <div className="flex items-center gap-1.5 font-bold text-zinc-600 group-hover:text-purple-600 transition-colors shrink-0 whitespace-nowrap">
                      <span className="text-[11px] tracking-wide">Read article</span>
                      <span className="w-6 h-6 rounded-full border border-zinc-200 group-hover:border-purple-400 group-hover:bg-purple-50 flex items-center justify-center transition-all group-hover:translate-x-0.5 shrink-0">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center mx-auto text-2xl">
              📝
            </div>
            <h3 className="text-xl font-serif font-bold text-zinc-900">
              No posts in this category yet
            </h3>
            <p className="text-sm text-zinc-500 font-sans max-w-md mx-auto">
              New technical articles are published regularly. Check back soon or explore other categories.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="mt-2 px-6 py-2.5 rounded-full bg-[#8B3DFF] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#782ee6] transition-all shadow-md active:scale-95"
            >
              View All Posts
            </button>
          </div>
        )}
      </section>
    </>
  );
}
