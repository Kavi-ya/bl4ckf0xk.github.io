
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, '../medium/posts');
const OUTPUT_CONTENT_DIR = path.join(__dirname, '../src/content/posts');
const OUTPUT_DATA_FILE = path.join(__dirname, '../src/data/blogs.ts');

const files = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.html') && !file.startsWith('draft_'));

const blogs = [];

files.forEach(file => {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');

    // Simple regex extraction (cheerio would be better but trying to avoid finding deps)
    const titleMatch = content.match(/<h1 class="p-name">(.*?)<\/h1>/) || content.match(/<title>(.*?)<\/title>/);
    let title = titleMatch ? titleMatch[1] : file.replace('.html', '');

    // Clean title (remove " - By ...")
    title = title.split(' -- by ')[0];

    // Extract date
    const dateMatch = content.match(/<time class="dt-published" datetime="(.*?)">(.*?)<\/time>/);
    const date = dateMatch ? dateMatch[2] : 'Unknown Date';

    // Extract body/article content
    // Improved logic: Extract everything between </header> and <footer>
    let bodyContent = '';
    const headerEndIndex = content.indexOf('</header>');
    const footerStartIndex = content.indexOf('<footer>');

    if (headerEndIndex !== -1 && footerStartIndex !== -1) {
        bodyContent = content.substring(headerEndIndex + 9, footerStartIndex).trim();
    } else {
        // Fallback to section regex if header/footer not found (unlikely for medium export)
        const sectionMatch = content.match(/<section data-field="body".*?>([\s\S]*?)<\/section>/);
        if (sectionMatch) {
            bodyContent = sectionMatch[1];
        }
    }

    // Remove the subtitle section to prevent duplicate text
    bodyContent = bodyContent.replace(/<section data-field="subtitle"[\s\S]*?<\/section>/i, '');

    // Remove the title (h3 with graf--title)
    bodyContent = bodyContent.replace(/<h3[^>]*class="[^"]*graf--title[^"]*"[^>]*>[\s\S]*?<\/h3>/i, '');

    // Replace old Medium CDN URL with new one to avoid SSL/loading issues
    bodyContent = bodyContent.replace(/cdn-images-1\.medium\.com/g, 'miro.medium.com/v2');

    // Clean up content slightly (remove classes if needed, or keep for styling?)
    // keeping for now, but Next.js might warn about specific attributes.
    // simpler to strip classes? No, let's keep basic HTML.

    // Slug from filename date-slug
    // file format: YYYY-MM-DD_Title-slug-id.html
    const slugParts = file.split('_');
    const slugNamePart = slugParts[1].replace('.html', '');
    // Remove the tracking id at the end (last 12 chars usually approx)
    // format Title-slug-id -> Title-slug
    // Actually simpler to just slugify the title or use the filename cleaned up
    let slug = slugNamePart.replace(/-[a-z0-9]+$/, '').toLowerCase();
    // Wait, some slugs might be valid words. 
    // Let's use the title to make a clean slug
    slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    // Excerpt (first paragraph)
    const pMatch = bodyContent.match(/<p.*?>(.*?)<\/p>/);
    let excerpt = pMatch ? pMatch[1].replace(/<[^>]*>/g, '').substring(0, 150) + '...' : 'Click to read more.';

    // Read time (estimate)
    const words = bodyContent.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const readTime = Math.ceil(words / 200) + ' min read';

    // Tags (can try to extract from class="p-category" or just generic)
    // <a .. class="p-category">Tag</a>
    const tags = [];
    const tagMatches = bodyContent.matchAll(/<a[^>]*class="p-category"[^>]*>(.*?)<\/a>/g);
    for (const match of tagMatches) {
        tags.push(match[1]);
    }

    // Default tags if none
    if (tags.length === 0) tags.push('Tech', 'Security');

    blogs.push({
        title,
        slug,
        date,
        excerpt,
        readTime,
        tags: [...new Set(tags)], // unique
        fileName: `${slug}.html`
    });

    fs.writeFileSync(path.join(OUTPUT_CONTENT_DIR, `${slug}.html`), bodyContent);
});

// Sort by date desc
blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

const tsContent = `export interface BlogPost {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    readTime: string;
    tags: string[];
}

export const blogs: BlogPost[] = ${JSON.stringify(blogs.map(({ fileName, ...rest }) => rest), null, 4)};
`;

fs.writeFileSync(OUTPUT_DATA_FILE, tsContent);

console.log(`Processed ${files.length} posts.`);
