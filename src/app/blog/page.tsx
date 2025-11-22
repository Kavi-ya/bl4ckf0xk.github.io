"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
    {
        title: "Working on this part of website",
        excerpt: "In Development",
        date: "Nov 22, 2025",
        readTime: "1 min read",
        slug: "windows-exploit-dev-intro",
        tags: ["Website", "Development", "Next.js"]
    },
    // {
    //     title: "Introduction to Windows Exploit Development",
    //     excerpt: "Getting started with stack-based buffer overflows, understanding memory layout, and writing your first shellcode.",
    //     date: "Nov 15, 2023",
    //     readTime: "10 min read",
    //     slug: "windows-exploit-dev-intro",
    //     tags: ["Exploit Dev", "Windows", "Assembly"]
    // },
    // {
    //     title: "Securing Industrial Control Systems",
    //     excerpt: "An overview of common protocols like Modbus and DNP3, and how to identify and mitigate vulnerabilities in OT environments.",
    //     date: "Oct 28, 2023",
    //     readTime: "12 min read",
    //     slug: "ics-ot-security-basics",
    //     tags: ["ICS/OT", "SCADA", "Network Security"]
    // },
    // {
    //     title: "Active Directory Red Teaming 101",
    //     excerpt: "Understanding Kerberos, NTLM, and common attack vectors like Kerberoasting and ASREPRoasting.",
    //     date: "Oct 05, 2023",
    //     readTime: "15 min read",
    //     slug: "ad-red-teaming-101",
    //     tags: ["Active Directory", "Red Teaming", "Kerberos"]
    // },
    // {
    //     title: "Reverse Engineering with Ghidra",
    //     excerpt: "A practical guide to analyzing malware samples and understanding their behavior using NSA's open-source tool.",
    //     date: "Sep 12, 2023",
    //     readTime: "8 min read",
    //     slug: "reverse-engineering-ghidra",
    //     tags: ["Reverse Engineering", "Malware Analysis", "Ghidra"]
    // }
];

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
                        <GlassCard className="group hover:bg-white/5 transition-all duration-300 mb-5">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} /> {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold mb-3 group-hover:text-hacker-red transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 mb-4">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-1 rounded text-xs font-mono bg-white/5 text-gray-300 border border-white/10">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-center md:justify-end">
                                    <div className="p-3 rounded-full bg-white/5 text-gray-400 group-hover:bg-hacker-red/10 group-hover:text-hacker-red transition-all">
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
