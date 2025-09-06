// Template for creating new blog posts
// Copy this file and rename it to your blog title (e.g., "my-new-blog.ts")
// Then update the content and add it to the index.ts file

export const yourBlogName = {
  id: 3, // Increment this for each new blog
  title: "Your Blog Title Here",
  excerpt: "A brief description of what this blog post is about. This will be shown in the blog card preview.",
  content: `# Your Blog Title Here

## Introduction

Write your introduction here. This is where you'll introduce the topic and provide context for your readers.

## Main Content

### Section 1
Write your main content here. You can use markdown formatting:

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- \`Code snippets\` for technical terms
- [Links](https://example.com) for references

### Section 2
Continue with your content...

## Code Examples

You can include code examples:

\`\`\`javascript
// Example JavaScript code
function example() {
  console.log("Hello, World!");
}
\`\`\`

## Conclusion

Wrap up your blog post with a conclusion that summarizes the key points and provides next steps for readers.

## Resources

- [Resource 1](https://example.com)
- [Resource 2](https://example.com)
- [Resource 3](https://example.com)

---

*Add any disclaimers or additional notes here.*`,
  author: "bl4ckf0xk", // Your author name
  date: "2024-01-20", // Publication date in YYYY-MM-DD format
  readTime: "5 min read", // Estimated reading time
  category: "Your Category", // Choose from: Exploit Development, OT/ICS Security, Active Directory, Malware Analysis, Network Security, Vulnerability Research
  tags: ["tag1", "tag2", "tag3"], // Add relevant tags
  featured: false, // Set to true if this should be featured
  image: "/api/placeholder/800/400", // Blog cover image
  status: "Published", // Status: Published, Draft, Archived
  slug: "your-blog-slug-3" // URL-friendly slug (e.g., "advanced-exploit-framework-1")
};

// Instructions for adding a new blog:
// 1. Copy this template file
// 2. Rename it to something descriptive (e.g., "active-directory-attacks.ts")
// 3. Update all the content above
// 4. Add the import to src/data/blogs/index.ts
// 5. Add the blog to the blogs array in index.ts
// 6. Update the blogCategories if you need a new category
