# 🎉 NaFAA Frontend - 2025 Oct

> **Status:** ✅ Initial Development Complete - Reviewing   
> **Tech Stack:** Next.js 15 + React 19 + Tailwind v4 + shadcn/ui + Framer Motion + TanStack Query

---

## 🚀 Quick Start

```bash
# Start development server
bun dev

# Open browser
# Homepage: http://localhost:3000
# Components: http://localhost:3000/components
```

---

## ✅ What's Installed

### Core Framework
- **Next.js 15.5.4** - Latest React framework
- **React 19.1.0** - Latest React
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS v4** - Modern styling

### UI Library (22 Components)
All shadcn/ui components installed:
- Buttons, Cards, Forms, Dialogs, Sheets
- Tabs, Accordions, Navigation, Breadcrumbs
- Alerts, Badges, Avatars, Skeletons
- Tables, Command Palette, and more

### Additional Libraries
- **Framer Motion** - Smooth animations
- **Sonner** - Toast notifications
- **Lucide React** - 1000+ icons
- **TanStack Query** - Data fetching & caching

---

## 📚 Documentation

1. **[QUICKSTART.md](./QUICKSTART.md)** - Get started in 3 steps (3 min read)
2. **[TEAM2_README.md](./TEAM2_README.md)** - Complete setup guide
3. **[COMPONENTS_GUIDE.md](./COMPONENTS_GUIDE.md)** - Code examples & patterns
4. **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Command cheat sheet
5. **[INSTALLATION_SUMMARY.md](./INSTALLATION_SUMMARY.md)** - What's installed

---

## 🎯 View Component Showcase

Visit **http://localhost:3000/components** to see all 22 components in action with examples!

---

## 💡 Quick Examples

### Toast Notification
```tsx
import { toast } from "sonner";
toast.success("Success!");
```

### Icon
```tsx
import { Fish } from "lucide-react";
<Fish className="h-5 w-5" />
```

### Animation
```tsx
import { motion } from "framer-motion";
<motion.div animate={{ opacity: 1 }}>Content</motion.div>
```

### Data Fetching
```tsx
import { useQuery } from "@tanstack/react-query";
const { data } = useQuery({ queryKey: ['data'], queryFn: fetchData });
```

---

## 🎨 Add More Components

```bash
bunx --bun shadcn@latest add [component-name]

# Examples:
bunx --bun shadcn@latest add calendar
bunx --bun shadcn@latest add checkbox
bunx --bun shadcn@latest add form
```

Browse all: https://ui.shadcn.com/docs/components

---

## 📦 Commands

```bash
bun dev              # Start dev server
bun run build        # Build for production
bun start            # Start production server
bun run lint         # Run linter
bun run format       # Format code
```

---

## 🆘 Need Help?

Check the documentation files above or visit:
- **shadcn/ui:** https://ui.shadcn.com
- **Next.js:** https://nextjs.org/docs
- **Tailwind:** https://tailwindcss.com/docs

---

## Deployed on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
