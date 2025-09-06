# Blog Management System

This directory contains all blog posts for the portfolio website. Each blog is stored in its own file for better organization and maintainability.

## Directory Structure

```
src/data/blogs/
├── index.ts                    # Central blog management file
├── blog-template.ts           # Template for creating new blogs
├── advanced-exploit-framework.ts
├── ics-ot-security.ts
└── README.md                  # This file
```

## Adding a New Blog

### Step 1: Create a New Blog File

1. Copy the `blog-template.ts` file
2. Rename it to something descriptive (e.g., `active-directory-attacks.ts`)
3. Update the content following the template structure

### Step 2: Update the Blog Data

1. Open `src/data/blogs/index.ts`
2. Add an import for your new blog:
   ```typescript
   import { yourBlogName } from './your-blog-file';
   ```
3. Add your blog to the `blogs` array:
   ```typescript
   export const blogs: Blog[] = [
     advancedExploitFrameworkBlog,
     icsOtSecurityBlog,
     yourBlogName, // Add your blog here
   ];
   ```

### Step 3: Update Categories (if needed)

If you're adding a new category, update the `blogCategories` array in `index.ts`:

```typescript
export const blogCategories = [
  // ... existing categories
  { id: 'new-category', name: 'New Category', color: 'linear-gradient(to right, #COLOR1, #COLOR2)' }
];
```

## Blog Structure

Each blog file should export an object with the following structure:

```typescript
export const yourBlogName = {
  id: number,                    // Unique ID (increment for each new blog)
  title: string,                 // Blog title
  excerpt: string,               // Short description for preview
  content: string,               // Full blog content in markdown
  author: string,                // Author name
  date: string,                  // Publication date (YYYY-MM-DD)
  readTime: string,              // Estimated reading time
  category: string,              // Blog category
  tags: string[],                // Array of tags
  featured: boolean,             // Whether to feature this blog
  image: string,                 // Cover image URL
  status: string                 // Status: "Published", "Draft", "Archived"
};
```

## Content Guidelines

### Writing Style
- Use clear, technical language appropriate for cybersecurity professionals
- Include code examples where relevant
- Use proper markdown formatting
- Add relevant links and resources

### Content Structure
- Start with an introduction
- Use clear headings and subheadings
- Include practical examples
- End with a conclusion and resources

### Code Examples
- Use proper code blocks with language specification
- Keep examples concise and relevant
- Include comments where necessary
- Avoid overly complex code that might confuse readers

## Categories

Available categories:
- **Exploit Development**: Tools, techniques, and research related to exploit development
- **OT/ICS Security**: Industrial Control Systems and Operational Technology security
- **Active Directory**: AD security, attacks, and defense techniques
- **Malware Analysis**: Malware research, analysis techniques, and tools
- **Network Security**: Network security protocols, tools, and techniques
- **Vulnerability Research**: Vulnerability discovery, analysis, and disclosure

## Tags

Use relevant tags to help with categorization and search:
- Technical terms (e.g., "rop", "kernel", "windows")
- Security domains (e.g., "exploit", "malware", "network")
- Tools and frameworks (e.g., "metasploit", "ida-pro", "wireshark")
- Attack types (e.g., "buffer-overflow", "privilege-escalation")

## Best Practices

1. **Keep it focused**: Each blog should cover one main topic
2. **Be technical**: Your audience is cybersecurity professionals
3. **Include examples**: Practical examples help readers understand concepts
4. **Update regularly**: Keep content current with latest security trends
5. **Use proper formatting**: Good markdown formatting improves readability
6. **Add resources**: Include links to tools, papers, and additional reading

## File Naming Convention

Use kebab-case for file names:
- `advanced-exploit-framework.ts`
- `active-directory-attacks.ts`
- `malware-analysis-techniques.ts`

## Testing

After adding a new blog:
1. Check that the blog appears in the works page
2. Verify the blog card displays correctly
3. Test the category filtering
4. Ensure the content renders properly

## Maintenance

- Regularly review and update existing blogs
- Remove outdated information
- Update links and resources
- Archive old blogs if necessary
