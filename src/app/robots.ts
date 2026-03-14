import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/private/',
                '/bl4ckf0xk{v01d_' // CTF Part 1
            ],
        },
        sitemap: 'https://bl4ckf0xk.github.io/sitemap.xml',
    };
}
