"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

import { blogs } from "@/data/blogs";

const posts = blogs;

export default function BlogPage() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
                    <span className="text-hacker-red">/</span> Transmission Log
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Thoughts, tutorials, and research notes on software development, security, and technology.
                </p>
            </div>

            <div className="space-y-24">
                {posts.map((post, index) => (
                    <Link key={index} href={`/blog/${post.slug}`}>
                        <GlassCard className="group relative overflow-hidden rounded-2xl p-6 md:p-8 hover:border-hacker-blue transition-all duration-500 mb-8 border border-white/10 bg-white/5 hover:bg-white/[0.07]">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-hacker-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="text-hacker-blue/70 group-hover:text-hacker-blue transition-colors" size={14} /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="text-hacker-blue/70 group-hover:text-hacker-blue transition-colors" size={14} /> {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-hacker-red transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-hacker-blue/10 text-hacker-blue border border-hacker-blue/30 font-mono text-xs uppercase tracking-widest rounded transition-colors group-hover:border-hacker-blue/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-gray-400 group-hover:border-hacker-red/50 group-hover:text-hacker-red group-hover:bg-hacker-red/10 transition-all duration-300 shadow-[0_0_0_rgba(255,0,60,0)] group-hover:shadow-[0_0_15px_rgba(255,0,60,0.2)]">
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </Link>
                ))}
            </div>
        </div>
    );
}
