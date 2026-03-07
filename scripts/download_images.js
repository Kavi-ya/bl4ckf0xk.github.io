const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../src/content/posts');
const imagesDir = path.join(__dirname, '../public/images/blog');

if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

async function downloadImage(url, filepath) {
    // Medium changed their URL structure, replacing /v2/max/ with /v2/resize:fit:
    const fetchUrl = url.replace('/v2/max/', '/v2/resize:fit:');

    const res = await fetch(fetchUrl, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://medium.com/',
        }
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch ${fetchUrl}: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
}

function extractImageUrls(html) {
    const regex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const urls = [];
    while ((match = regex.exec(html)) !== null) {
        urls.push(match[1]);
    }
    return urls;
}

async function processFile(filePath) {
    let html = fs.readFileSync(filePath, 'utf-8');
    const urls = extractImageUrls(html);

    if (urls.length === 0) return;

    console.log(`Processing ${path.basename(filePath)} (${urls.length} images)`);

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];

        if (url.startsWith('/images/blog/')) continue;

        let filename = url.split('/').pop().split('?')[0];
        if (!filename || filename === '') {
            filename = `img_${Date.now()}_${i}.png`;
        }

        filename = filename.replace(/[^a-zA-Z0-9.\-_]/g, '_');
        // Handle images without extensions
        if (!filename.includes('.')) {
            filename += '.png';
        }

        const localPath = path.join(imagesDir, filename);
        // We use an absolute path from public for the web path
        const webPath = `/images/blog/${filename}`;

        try {
            console.log(`  Downloading ${url} -> ${filename}`);
            await downloadImage(url, localPath);
            html = html.split(url).join(webPath);
        } catch (e) {
            console.error(`  Failed to download ${url}: ${e.message}`);
        }
    }

    fs.writeFileSync(filePath, html, 'utf-8');
}

async function main() {
    try {
        const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.html'));
        for (const file of files) {
            await processFile(path.join(postsDir, file));
        }
        console.log('Finished processing all files.');
    } catch (e) {
        console.error('Error in main block:', e);
    }
}

main();
