# Layout Switcher System - Quick Guide

## Overview
A flexible homepage layout variant system that allows NaFAA director to review and choose between different homepage designs.

## How to Use

### Method 1: Keyboard Shortcut
Press **`Ctrl + Shift + L`** anywhere on the homepage to open the layout switcher panel.

### Method 2: URL Parameters
Add `?layout=` parameter to the homepage URL:

- `http://localhost:3000/?layout=modern` - Current design (default)
- `http://localhost:3000/?layout=split` - Split hero layout
- `http://localhost:3000/?layout=slider` - Slider layout

### Method 3: Floating Button
Click the blue floating button in the bottom-right corner.

## Layout Variants

### 1. Modern (Current Design)
**URL:** `?layout=modern`

**Features:**
- Full-width hero with gradient overlay and background image
- Animated stat cards with icons
- Horizontal officials cards with hover effects
- Feature grid services with icon variations
- Standard news and publications sections

**Best For:** Dynamic, modern feel with rich animations

---

### 2. Split Hero
**URL:** `?layout=split`

**Features:**
- **Hero:** Content on left, large image on right
- **Stats:** Animated number counters (CountUp effect)
- **Officials:** Zigzag layout (President left, VP right, Director left)
- **Services:** Uniform grid with consistent card design
- **News:** Sidebar layout (news left, publications right)

**Best For:** Clean, professional presentation with clear hierarchy

---

### 3. Slider
**URL:** `?layout=slider`

**Features:**
- **Hero:** Carousel/slider with multiple slides
- **Stats:** Inline badges overlaying hero bottom
- **Officials:** Horizontal scrolling container
- **Services:** Tabbed interface for categories
- **News:** Featured card + list view

**Best For:** Interactive, engaging experience with multiple focal points

## Implementation Status

### ✅ Completed
- [x] Layout config system (`lib/layout-config.ts`)
- [x] Layout switcher component with keyboard shortcut
- [x] Floating toggle button
- [x] URL parameter system
- [x] Split hero component created
- [x] Homepage integration

### 🔄 In Progress
- [ ] Split layout: Zigzag officials component
- [ ] Split layout: Animated stats component
- [ ] Split layout: Uniform services component
- [ ] Split layout: Sidebar news component
- [ ] Slider layout: Hero carousel component
- [ ] Slider layout: Horizontal scroll officials
- [ ] Slider layout: Tabbed services
- [ ] Slider layout: Featured news component

## Technical Details

### File Structure
```
src/
├── lib/
│   └── layout-config.ts          # Layout types and configurations
├── components/
│   ├── layout-switcher.tsx       # Switcher UI component
│   └── sections/
│       ├── hero-section.tsx      # Modern layout (original)
│       ├── hero-section-split.tsx # Split layout
│       ├── hero-section-slider.tsx # Slider layout (TODO)
│       ├── officials-zigzag.tsx   # Split layout (TODO)
│       └── ...                    # Other variant components
└── app/
    └── page.tsx                   # Homepage with conditional rendering
```

### Key Functions

**`getLayoutFromUrl()`**
Reads the `?layout=` parameter from the URL and returns the layout type.

**`setLayoutUrl(layout)`**
Updates the URL with the new layout parameter without page reload.

### Layout Switcher Shortcuts
- **Open/Close:** `Ctrl + Shift + L`
- **Floating Button:** Bottom-right corner (always visible)
- **Click Card:** Select layout directly from switcher panel

## Sharing with Stakeholders

Send these links to stakeholders for review:

```
Modern Layout:
https://your-domain.com/?layout=modern

Split Layout:
https://your-domain.com/?layout=split

Slider Layout:
https://your-domain.com/?layout=slider
```

## Customization

### Adding New Layouts
1. Add new layout type to `lib/layout-config.ts`:
   ```typescript
   export type LayoutType = 'modern' | 'split' | 'slider' | 'your-new-layout';
   ```

2. Add configuration:
   ```typescript
   'your-new-layout': {
     id: 'your-new-layout',
     name: 'Your New Layout',
     description: '...',
     features: { ... }
   }
   ```

3. Create variant components in `components/sections/`

4. Update `app/page.tsx` conditional rendering

### Removing After Decision
Once the director chooses a layout, simply:
1. Remove unused component files
2. Remove layout switcher import from homepage
3. Delete `layout-config.ts` (optional)
4. Keep only the chosen layout components

## Notes
- Layout variants are **homepage only** - other pages remain unchanged
- All layouts use the same data and content
- Purely presentational differences (spacing, arrangement, animations)
- No database or backend changes required
- Easy to remove after decision is made
