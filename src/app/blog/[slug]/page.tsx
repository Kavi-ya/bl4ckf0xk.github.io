import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

export async function generateStaticParams() {
    return [
        { slug: 'windows-exploit-dev-intro' },
        { slug: 'ics-ot-security-basics' },
        { slug: 'ad-red-teaming-101' },
        { slug: 'reverse-engineering-ghidra' },
    ];
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // In a real app, fetch data based on slug
    const post = {
        title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        date: "Oct 12, 2023",
        readTime: "5 min read",
        content: `
      <p>This is a placeholder for the blog post content. In a real application, this would be fetched from a CMS or markdown file.</p>
      <br/>
      <h3>Introduction</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <br/>
      <h3>The Technical Details</h3>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br/>
      <pre class="bg-black/50 p-4 rounded-lg border border-white/10 overflow-x-auto"><code>function hackThePlanet() {
  console.log("Access Granted");
  return true;
}</code></pre>
      <br/>
      <h3>Conclusion</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    `,
        tags: ["Tech", "Security"]
    };

    return (
        <article className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-hacker-blue mb-8 transition-colors">
                <ArrowLeft size={20} /> Back to Transmission Log
            </Link>

            <GlassCard className="p-8 md:p-12">
                <div className="flex items-center gap-4 text-sm font-mono text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                        <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock size={14} /> {post.readTime}
                    </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                    {post.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-10">
                    {post.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-hacker-blue/10 text-hacker-blue border border-hacker-blue/20">
                            #{tag}
                        </span>
                    ))}
                </div>

                <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-a:text-hacker-blue hover:prose-a:text-hacker-red prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                    <div className="text-gray-400 text-sm">
                        Thanks for reading.
                    </div>
                    <button className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                        <Share2 size={20} />
                    </button>
                </div>
            </GlassCard>
        </article>
    );
}
