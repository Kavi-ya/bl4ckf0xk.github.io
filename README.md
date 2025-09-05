# bl4ckf0xk - Cybersecurity Portfolio

A modern, dark-themed portfolio website built with Next.js, showcasing expertise in cybersecurity, exploit development, OT/ICS security, and Active Directory security.

## 🚀 Features

- **Dark Theme**: Professional dark theme with ash, black, dark red, and dark purple color palette
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Background Effects**: Blur effects and cyber grid background
- **Interactive Timeline**: Professional timeline on the About page
- **Blog System**: Complete blog with search and filtering capabilities
- **Smooth Animations**: Framer Motion animations throughout the site

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Fonts**: Inter (sans-serif) and JetBrains Mono (monospace)

## 📁 Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page with timeline
│   ├── blog/
│   │   └── page.tsx          # Blog page with articles
│   ├── globals.css           # Global styles and custom CSS
│   ├── layout.tsx            # Root layout with navigation
│   └── page.tsx              # Home page
├── components/
│   └── Navigation.tsx        # Navigation component
└── ...
```

## 🎨 Design System

### Colors
- **Ash**: Primary neutral color (#171717 to #f8f9fa)
- **Dark Red**: Accent color for highlights (#450a0a to #fef2f2)
- **Dark Purple**: Secondary accent color (#3b0764 to #faf5ff)
- **Black**: Background color (#0a0a0a)

### Typography
- **Primary Font**: Inter (sans-serif)
- **Monospace Font**: JetBrains Mono

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

### Home Page
- Hero section with animated title
- Areas of expertise showcase
- Call-to-action sections
- Social media links

### About Page
- Professional profile card
- Interactive timeline of career milestones
- Technical skills with progress bars
- Professional certifications

### Blog Page
- Featured articles section
- Search and category filtering
- Article cards with metadata
- Responsive grid layout

## 🎯 Key Features

### Navigation
- Fixed header with blur effect on scroll
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth transitions

### Animations
- Fade-in animations on scroll
- Staggered children animations
- Hover effects and transitions
- Smooth page transitions

### Background Effects
- Cyber grid pattern
- Blur effects similar to reference images
- Floating animated elements
- Gradient overlays

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

## 📦 Build and Deploy

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

3. **Deploy to Vercel** (recommended):
   ```bash
   npx vercel
   ```

## 🎨 Customization Guide

### Changing Colors
Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  ash: { /* your ash colors */ },
  'dark-red': { /* your red colors */ },
  'dark-purple': { /* your purple colors */ },
}
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

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- **Email**: contact@example.com
- **GitHub**: [@bl4ckf0xk](https://github.com/bl4ckf0xk)
- **LinkedIn**: [bl4ckf0xk](https://linkedin.com/in/bl4ckf0xk)

---

Built with ❤️ by bl4ckf0xk