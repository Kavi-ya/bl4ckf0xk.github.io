"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

const posts = [
    {
        title: "Reverse Engineering iOS Apps",
        excerpt: "A deep dive into analyzing IPA files and understanding the structure of iOS applications.",
        date: "Oct 12, 2023",
        readTime: "5 min read",
        slug: "reverse-engineering-ios"
    },
    {
        title: "Setting up a Home Lab",
        excerpt: "Guide to building a secure and efficient home server for testing and development.",
        date: "Sep 28, 2023",
        readTime: "8 min read",
        slug: "home-lab-setup"
    },
    {
        title: "The Future of WebAssembly",
        excerpt: "Exploring the potential of Wasm beyond the browser and its impact on performance.",
        date: "Sep 15, 2023",
        readTime: "6 min read",
        slug: "future-of-wasm"
    }
];

export function BlogList() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold font-mono">
                    <span className="text-hacker-red">02.</span> Latest Transmissions
                </h2>
                <Link href="/blog" className="text-sm font-mono text-gray-400 hover:text-hacker-red transition-colors">
                    Read Archive -&gt;
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {posts.map((post, index) => (
                    <Link key={index} href={`/blog/${post.slug}`}>
                        <GlassCard className="h-full hover:bg-white/10 transition-colors group">
                            <div className="flex justify-between items-center mb-4 text-xs font-mono text-gray-500">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 group-hover:text-hacker-red transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-gray-400 text-sm line-clamp-3">
                                {post.excerpt}
                            </p>
                        </GlassCard>
                    </Link>
                ))}
            </div>
        </section>
    );
}
