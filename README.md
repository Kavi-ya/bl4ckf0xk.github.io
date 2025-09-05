# bl4ckf0xk - Portfolio

Built with Next.js, showcasing expertise in cybersecurity, exploit development, OT/ICS security, and Active Directory security.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Fonts**: Inter (sans-serif) and JetBrains Mono (monospace)

## 🔧 Customization

### Adding New Blog Posts
Edit the `blogPosts` array in `/src/app/blog/page.tsx`:

```typescript
{
  id: 7,
  title: "Your Article Title",
  excerpt: "Article description...",
  content: "Full article content...",
  category: "exploit", // or "ot-ics", "ad", "research", "tools"
  tags: ["tag1", "tag2", "tag3"],
  date: "2024-01-20",
  readTime: "5 min read",
  featured: false
}
```

### Updating Timeline Events
Edit the `timelineEvents` array in `/src/app/about/page.tsx`:

```typescript
{
  year: "2025",
  title: "New Achievement",
  description: "Description of your achievement",
  icon: Award,
  color: "from-dark-red-600 to-dark-red-400"
}
```

### Modifying Skills
Edit the `skills` array in `/src/app/about/page.tsx`:

```typescript
{ name: "New Skill", level: 85 }
```

### Adding New Pages
1. Create a new folder in `/src/app/`
2. Add a `page.tsx` file
3. Update the navigation in `/src/components/Navigation.tsx`

### Modifying Animations
Update animation variants in individual page components:

```typescript
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};
```
