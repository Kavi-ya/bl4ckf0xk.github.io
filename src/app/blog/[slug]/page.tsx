import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { blogs } from "@/data/blogs";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
    return blogs.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogs.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p>Post not found</p>
                    <Link href="/blog" className="text-hacker-blue hover:underline mt-4 block">
                        Return to blogs
                    </Link>
                </div>
            </div>
        );
    }

    // Read the HTML content
    // Note: In Next.js with app router, process.cwd() is usually the project root
    const contentPath = path.join(process.cwd(), "src/content/posts", `${post.slug}.html`);
    let content = "";

    try {
        content = fs.readFileSync(contentPath, "utf-8");
    } catch (error) {
        console.error(`Error reading blog content for ${slug}:`, error);
        content = "<p>Error loading content.</p>";
    }

    return (
        <article className="min-h-screen py-16 px-6 max-w-[1000px] mx-auto w-full">
            <Link href="/blog" className="inline-flex items-center gap-2 text-hacker-blue hover:text-hacker-red mb-8 text-sm font-mono uppercase tracking-wider transition-colors">
                <ArrowLeft size={16} /> Back to Transmission Log
            </Link>

            <GlassCard className="p-8 md:p-12 relative overflow-hidden rounded-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hacker-blue to-transparent opacity-50"></div>
                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        {post.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-hacker-blue/10 text-hacker-blue border border-hacker-blue/30 font-mono text-xs uppercase tracking-widest rounded">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-sm font-mono text-gray-400">
                        <span className="flex items-center gap-2">
                            <Calendar className="text-hacker-blue" size={18} /> {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="text-hacker-blue" size={18} /> {post.readTime}
                        </span>
                    </div>
                </header>

                <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-hacker-blue hover:prose-a:text-hacker-red prose-pre:bg-[#111] prose-pre:border prose-pre:border-white/10"
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                    <div className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                        Transmission Complete \\
                    </div>
                </div>
            </GlassCard>
        </article>
    );
}
