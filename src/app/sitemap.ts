import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bl4ckf0xk.github.io';

    // Static routes
    const routes = [
        '',
        '/about',
        '/portfolio',
        '/blog',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // In a real app, we would fetch blog posts here to generate dynamic routes
    // For now, we'll add the placeholder posts manually or skip them
    const blogPosts = [
        'windows-exploit-dev-intro',
        'ics-ot-security-basics',
        'ad-red-teaming-101',
        'reverse-engineering-ghidra',
    ].map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...routes, ...blogPosts];
}
