# 🚀 Quick Start Guide - Team 2 Frontend

## Start Working in 3 Steps

### 1. Start the Development Server
```bash
cd frontend
bun dev
```
Open your browser to: **http://localhost:3000**

### 2. See Your Changes Live
Edit `src/app/page.tsx` and save. The browser will automatically reload!

### 3. Add More Components
```bash
# Install any shadcn component you need
bunx --bun shadcn@latest add card
bunx --bun shadcn@latest add input
bunx --bun shadcn@latest add form
```

---

## 📦 What's Already Installed

✅ **Next.js 15** - React framework  
✅ **React 19** - Latest React  
✅ **Tailwind CSS v4** - Styling  
✅ **shadcn/ui** - Component library  
✅ **TypeScript** - Type safety  
✅ **Bun** - Fast package manager  

**Button component** is already added as an example!

---

## 🎯 Your First Task

1. Open `frontend/src/app/page.tsx`
2. You'll see the NaFAA homepage with 3 buttons
3. This demonstrates shadcn/ui components working
4. Start building from here!

---

## 📚 Essential Links

- **Full Documentation:** See `TEAM2_README.md`
- **shadcn Components:** https://ui.shadcn.com/docs/components
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs

---

## 🎨 Next Steps

Based on your assignment (`TEAM_2_REFACTOR_ASSIGNMENT.md`):

1. **Homepage Sections** - Build hero, services, news cards
2. **Component Library** - Create reusable components  
3. **Animations** - Add smooth interactions
4. **Testing** - Ensure quality

---

## 💡 Pro Tips

### Adding a New Page
Create a new folder in `src/app/`:
```bash
src/app/
  about/
    page.tsx      # Creates /about route
  services/
    page.tsx      # Creates /services route
```

### Using Components
```tsx
import { Button } from "@/components/ui/button";

<Button variant="default">Click Me</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
```

### Tailwind Classes
```tsx
<div className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
  My styled div
</div>
```

---

## 🐛 Something Not Working?

```bash
# Clear cache and restart
rm -rf .next
bun dev
```

**Need more help?** Check `TEAM2_README.md` for detailed troubleshooting.

---

**Ready to build? Run `bun dev` and start coding! 🎉**
