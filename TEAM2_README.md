# Team 2 - NaFAA Frontend Development

**Project:** National Fisheries & Aquaculture Authority Website  
**Team:** Team 2  
**Status:** ✅ Setup Complete - Ready for Development  
**Last Updated:** October 5, 2025

---

## 🚀 Quick Start

### Prerequisites
- **Bun** (v1.2.22 or higher) - [Install Bun](https://bun.sh)
- **Node.js** (v20+ recommended)
- **Git**

### Installation & Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (already done during setup)
bun install

# Start development server
bun dev

# Open browser to http://localhost:3000
```

---

## 📦 Tech Stack

### Core Technologies
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Bun** - Fast JavaScript runtime & package manager

### Styling & UI
- **Tailwind CSS v4** - Latest utility-first CSS framework
- **shadcn/ui** - High-quality, customizable components
- **Biome** - Fast linter and formatter

### Key Features
- ✅ Server Components by default
- ✅ App Router for modern routing
- ✅ TypeScript for type safety
- ✅ Tailwind v4 with CSS-first configuration
- ✅ shadcn/ui component library
- ✅ Optimized for performance

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles + Tailwind
│   ├── components/       # React components
│   │   └── ui/           # shadcn/ui components
│   │       └── button.tsx
│   └── lib/              # Utility functions
│       └── utils.ts      # cn() helper and more
├── public/               # Static assets
├── components.json       # shadcn/ui configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── biome.json            # Biome linter/formatter config
└── package.json          # Dependencies
```

---

## 🎨 Adding Components from shadcn/ui

### Install Any Component

```bash
# Add a specific component
bunx --bun shadcn@latest add [component-name]

# Examples:
bunx --bun shadcn@latest add card
bunx --bun shadcn@latest add form
bunx --bun shadcn@latest add input
bunx --bun shadcn@latest add dialog
bunx --bun shadcn@latest add dropdown-menu
```

### Browse All Components
Visit: [shadcn/ui Components](https://ui.shadcn.com/docs/components)

### Using Components

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to NaFAA</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  );
}
```

---

## 🛠️ Development Commands

```bash
# Start development server (with hot reload)
bun dev

# Build for production
bun run build

# Start production server
bun start

# Run linter
bun run lint

# Format code
bun run format
```

---

## 📋 Team 2 Responsibilities

Based on `TEAM_2_REFACTOR_ASSIGNMENT.md`, our focus areas:

### 1. Homepage Development (Weeks 3-6)
- [ ] Hero section with animations
- [ ] Service cards with hover effects
- [ ] News/Updates section
- [ ] Statistics dashboard
- [ ] Call-to-action sections

### 2. Component Library (Weeks 3-4)
- [ ] Reusable card components
- [ ] Interactive buttons and forms
- [ ] Navigation components
- [ ] Footer components
- [ ] Loading states and animations

### 3. Testing & QA (Week 7)
- [ ] Component testing
- [ ] Responsive design testing
- [ ] Accessibility testing
- [ ] Cross-browser testing
- [ ] Performance optimization

---

## 🎯 Design Options to Implement

Reference: `FRONTEND_DESIGN_BRIEF.md`

### Option 1: Modern Minimalist (Recommended)
- Clean, professional government authority
- Generous white space
- Bold typography
- Card-based layouts
- Limited color palette

### Option 2: Interactive & Dynamic
- Engaging animations
- Data visualizations
- Interactive elements
- Modern UI patterns

### Option 3: Traditional Government
- Classic, trustworthy design
- Professional color scheme
- Structured layouts

---

## 🎨 Color Palette (NaFAA Brand)

```css
/* Primary Colors */
--nafaa-blue: #1E40AF;      /* Primary brand color */
--nafaa-ocean: #0891B2;     /* Ocean/water theme */
--nafaa-green: #059669;     /* Sustainability/nature */

/* Neutral Colors */
--slate-50: #F8FAFC;        /* Light background */
--slate-100: #F1F5F9;       /* Subtle backgrounds */
--slate-600: #475569;       /* Body text */
--slate-900: #0F172A;       /* Headings */
```

---

## 📦 Recommended Components to Install

```bash
# Layout & Structure
bunx --bun shadcn@latest add card
bunx --bun shadcn@latest add separator
bunx --bun shadcn@latest add tabs

# Navigation
bunx --bun shadcn@latest add navigation-menu
bunx --bun shadcn@latest add breadcrumb

# Forms & Input
bunx --bun shadcn@latest add form
bunx --bun shadcn@latest add input
bunx --bun shadcn@latest add textarea
bunx --bun shadcn@latest add select

# Feedback & Overlays
bunx --bun shadcn@latest add dialog
bunx --bun shadcn@latest add alert
bunx --bun shadcn@latest add toast

# Data Display
bunx --bun shadcn@latest add table
bunx --bun shadcn@latest add badge
bunx --bun shadcn@latest add avatar
```

---

## 🔗 Useful Resources

### Documentation
- [Next.js 15 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Bun Docs](https://bun.sh/docs)

### Design Resources
- [Government Design Patterns](https://designsystem.digital.gov)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Tailwind UI Components](https://tailwindui.com)

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
bun dev -- -p 3001
```

### Clear Cache
```bash
rm -rf .next
bun dev
```

### Dependency Issues
```bash
rm -rf node_modules
rm bun.lock
bun install
```

---

## 📝 Code Style Guidelines

### Component Structure
```tsx
// Use named exports for components
export function MyComponent({ title }: { title: string }) {
  return <div>{title}</div>;
}

// Use default export for pages
export default function HomePage() {
  return <MyComponent title="Welcome" />;
}
```

### TypeScript
```tsx
// Define types for props
interface CardProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

export function Card({ title, description, onClick }: CardProps) {
  // Component implementation
}
```

### CSS Classes (Tailwind)
```tsx
// Use cn() utility for conditional classes
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === "primary" && "primary-classes"
)} />
```

---

## 🚦 Next Steps

1. **Start Development Server**
   ```bash
   cd frontend
   bun dev
   ```

2. **Install Additional Components**
   - Add components as needed for your pages
   - See shadcn/ui docs for all available components

3. **Create Your First Page**
   - Copy the structure from `src/app/page.tsx`
   - Create new pages in `src/app/`
   - Use the `Button` component as a reference

4. **Follow Team 2 Assignment**
   - Review `TEAM_2_REFACTOR_ASSIGNMENT.md`
   - Start with homepage sections
   - Build reusable components

---

## 👥 Team Coordination

- **Main Project:** `nafaa` repository
- **Frontend:** This directory (`frontend/`)
- **Backend:** `backend/` (Team 1's responsibility)
- **Documentation:** `docs/` and `archive/team/`

### Communication
- Keep Team 1 informed of component changes
- Follow the design brief in `docs/FRONTEND_DESIGN_BRIEF.md`
- Document any new components or patterns

---

## ✅ Setup Verification

- [x] Next.js 15 installed
- [x] React 19 configured
- [x] Tailwind CSS v4 integrated
- [x] shadcn/ui initialized
- [x] Button component added
- [x] TypeScript configured
- [x] Development server ready

**Status:** 🟢 Ready for development!

---

## 📞 Need Help?

1. Check the official documentation links above
2. Review existing components in `src/components/ui/`
3. Consult `TEAM_2_REFACTOR_ASSIGNMENT.md` for your tasks
4. Coordinate with Team 1 for backend integration

**Happy Coding! 🎉**
