# 🗺️ Visual Guide - Where Everything Is Located

## 📍 Header Layout (Top of Every Page)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  BLUE TOP BAR                                                           │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │ ☎ +231 777 123 456    ✉ info@nafaa.gov.lr    🌐 English ▼  🎨 ▼  │ │
│  │                                                 ↑           ↑       │ │
│  │                                          LANGUAGE    THEME          │ │
│  │                                          SWITCHER    SWITCHER       │ │
│  └───────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────┤
│  WHITE MAIN HEADER                                                      │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │  [N]  National Fisheries &         Home  About ▼  Services  News  │ │
│  │       Aquaculture Authority              Resources ▼  Contact     │ │
│  │       Republic of Liberia                                  Portal │ │
│  └───────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

## 🎨 Theme Switcher - Detailed View

**When you click the Palette icon (🎨):**

```
┌─────────────────────────────┐
│  Choose Theme               │
├─────────────────────────────┤
│  🎨 Default              ✓  │  ← Currently selected
│  ✨ Modern                   │
│  📜 Classic                  │
│  ⚪ Minimal                  │
└─────────────────────────────┘
```

**What each theme changes:**

```
DEFAULT THEME (🎨):
├─ Primary Color: Navy Blue #002868
├─ Accent Color: Light Blue #0066CC
├─ Success Color: Green #00A86B
├─ Danger Color: Red #C60C30
└─ Style: Professional Government

MODERN THEME (✨):
├─ Primary Color: Lighter blues
├─ Accent Color: Vibrant cyan
├─ Success Color: Fresh green
├─ Danger Color: Soft red
└─ Style: Contemporary, Clean

CLASSIC THEME (📜):
├─ Primary Color: Dark navy
├─ Accent Color: Traditional blue
├─ Success Color: Forest green
├─ Danger Color: Deep red
└─ Style: Formal, Traditional

MINIMAL THEME (⚪):
├─ Primary Color: Soft grays
├─ Accent Color: Subtle blue
├─ Success Color: Muted green
├─ Danger Color: Muted red
└─ Style: Simple, Content-focused
```

## 🌐 Language Switcher - Detailed View

**When you click the Globe icon (🌐):**

```
┌─────────────────────────────┐
│  🇺🇸 English              ✓  │  ← Currently selected
│  🇫🇷 Français                │
└─────────────────────────────┘
```

**What translations cover:**

```
TRANSLATED AREAS:
├─ Navigation Menu
│  ├─ Home → Accueil
│  ├─ About → À Propos
│  ├─ Services → Services
│  ├─ Resources → Ressources
│  └─ Contact → Contact
│
├─ Site Information
│  ├─ Site Name
│  ├─ Tagline
│  └─ Description
│
├─ Common Elements
│  ├─ Buttons (Login, Submit, Cancel, etc.)
│  ├─ Labels (Email, Password, Name, etc.)
│  └─ Messages (Success, Error, Loading, etc.)
│
├─ Page Content
│  ├─ Home Page
│  ├─ About Page
│  ├─ Services Page
│  └─ Portal Pages
│
└─ Footer
   ├─ Quick Links
   ├─ Contact Info
   └─ Copyright
```

## 🏠 Services Page Layout

**Visit: `/services`**

```
┌──────────────────────────────────────────────────────────────┐
│                      SERVICES PAGE                           │
│                                                              │
│  Our Services                                               │
│  ════════════                                               │
│                                                              │
│  ┌─────────────────────┐  ┌─────────────────────┐          │
│  │  🚢 Vessel          │  │  📄 Fishing         │          │
│  │  Registration       │  │  Licenses           │          │
│  │                     │  │                     │          │
│  │  • New vessel reg   │  │  • Commercial       │          │
│  │  • Documentation    │  │  • Artisanal        │          │
│  │  • Transfer         │  │  • Recreational     │          │
│  │                     │  │                     │          │
│  │  ⏱ 5-7 business days│  │  ⏱ 3-5 business days│          │
│  │                     │  │                     │          │
│  │  ℹ Login required   │  │  ℹ Login required   │          │
│  │                     │  │                     │          │
│  │  [Apply Now →]      │  │  [Apply Now →]      │          │
│  │       ↓             │  │       ↓             │          │
│  │  Goes to:           │  │  Goes to:           │          │
│  │  /portal/vessels    │  │  /portal/licenses   │          │
│  └─────────────────────┘  └─────────────────────┘          │
│                                                              │
│  [More service cards...]                                    │
└──────────────────────────────────────────────────────────────┘
```

## 🔐 Portal Layout

**Visit: `/portal` (requires login)**

```
┌──────────────────────────────────────────────────────────────┐
│                     CLIENT PORTAL                            │
│                                                              │
│  👤 Welcome, Demo User                    [Logout]          │
│  ════════════════════════                                   │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │ Dashboard   │  │ Vessels     │  │ Licenses    │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│  ┌─────────────┐  ┌─────────────┐                         │
│  │ Reporting   │  │ Payments    │                         │
│  └─────────────┘  └─────────────┘                         │
│                                                              │
│  Current Page: /portal/licenses                            │
│  ════════════════════════════════                          │
│                                                              │
│  My Licenses              [Apply for New License]          │
│  ────────────                                              │
│                                                              │
│  ┌──────────────────────────────────────────────┐          │
│  │ Commercial Fishing License                   │          │
│  │ CFL-2024-0123                                │          │
│  │ Status: ✓ Active                             │          │
│  │ Expires: 2025-01-14                          │          │
│  │ Vessel: Sea Star IV                          │          │
│  │                                              │          │
│  │ [View] [Renew] [Download PDF]               │          │
│  └──────────────────────────────────────────────┘          │
│                                                              │
│  [More licenses...]                                        │
└──────────────────────────────────────────────────────────────┘
```

## 🔄 User Journey Flow

```
START: Public Website (/)
│
├─ User sees header with Language (🌐) and Theme (🎨) switchers
│  └─ Can change language/theme anytime
│
├─ User clicks "Services" in navigation
│  └─ Goes to: /services
│
├─ User sees service cards with "Apply Now" buttons
│  └─ Each card shows: ℹ Login required to access this service
│
├─ User clicks "Apply Now" (e.g., on Fishing Licenses)
│  └─ Link: /portal/licenses?action=apply
│
├─ System checks authentication
│  │
│  ├─ NOT LOGGED IN:
│  │  └─ Redirects to: /portal/login
│  │     └─ Shows login form
│  │        └─ User enters:
│  │           Email: demo@nafaa.gov.lr
│  │           Password: demo123
│  │        └─ After successful login:
│  │           └─ Redirects to: /portal/licenses?action=apply
│  │
│  └─ ALREADY LOGGED IN:
│     └─ Goes directly to: /portal/licenses?action=apply
│
├─ User arrives in Portal
│  └─ Sees dashboard with sections
│     └─ Can manage:
│        ├─ Vessels
│        ├─ Licenses
│        ├─ Reports
│        └─ Payments
│
└─ User completes form and submits
   └─ Success! ✓
```

## 📂 File Structure Reference

```
frontend/
├── src/
│   ├── components/
│   │   ├── header.tsx                    ← Language & Theme switchers here
│   │   ├── language-switcher.tsx         ← 🌐 Language dropdown
│   │   ├── theme-switcher.tsx            ← 🎨 Theme dropdown
│   │   └── ...
│   │
│   ├── hooks/
│   │   ├── useTheme.ts                   ← Theme state management
│   │   └── useAuth.ts                    ← Authentication check
│   │
│   ├── app/
│   │   ├── services/
│   │   │   └── page.tsx                  ← Public services page
│   │   │
│   │   └── portal/
│   │       ├── page.tsx                  ← Portal dashboard
│   │       ├── dashboard/page.tsx
│   │       ├── vessels/page.tsx          ← Vessel management
│   │       ├── licenses/page.tsx         ← License management
│   │       ├── reporting/page.tsx        ← Catch reporting
│   │       └── payments/page.tsx         ← Payment management
│   │
│   ├── locales/
│   │   ├── en/                           ← English translations
│   │   │   ├── common.json
│   │   │   ├── home.json
│   │   │   ├── about.json
│   │   │   ├── services.json
│   │   │   └── portal.json
│   │   │
│   │   └── fr/                           ← French translations
│   │       ├── common.json
│   │       ├── home.json
│   │       ├── about.json
│   │       ├── services.json
│   │       └── portal.json
│   │
│   └── lib/
│       └── i18n.ts                       ← Language configuration
│
└── Documentation/
    ├── SERVICES_VS_PORTAL.md             ← Flow explanation
    ├── LANGUAGE_THEME_GUIDE.md           ← How to use switchers
    └── VISUAL_GUIDE.md                   ← This file!
```

## 🎯 Quick Access Cheat Sheet

| What I Want | Where to Look | What to Click |
|-------------|---------------|---------------|
| Change theme | Top right corner, blue bar | 🎨 Palette icon |
| Change language | Top right corner, blue bar | 🌐 Globe icon |
| See available services | Main navigation | "Services" |
| Apply for a service | Services page | "Apply Now" button |
| Login to portal | Click "Apply Now" or | "Portal" in navigation |
| Manage vessels | Portal sidebar | "Vessels" section |
| Manage licenses | Portal sidebar | "Licenses" section |
| Submit catch report | Portal sidebar | "Reporting" section |
| Make payment | Portal sidebar | "Payments" section |
| View dashboard | After login | "Dashboard" section |

## 🖱️ Interactive Elements

**Clickable in Header:**
```
┌─ Contact Info: ☎ +231 777 123 456, ✉ info@nafaa.gov.lr
│
├─ Language Switcher: 🌐 [Dropdown]
│  └─ Changes entire site language
│
├─ Theme Switcher: 🎨 [Dropdown]
│  └─ Changes color scheme & style
│
├─ Logo: [N] National Fisheries...
│  └─ Returns to homepage
│
└─ Navigation Menu:
   ├─ Home → /
   ├─ About → /about (with dropdown)
   ├─ Services → /services
   ├─ Resources → /resources (with dropdown)
   ├─ News → /news
   ├─ Contact → /contact
   └─ Portal → /portal (requires login)
```

**Clickable on Services Page:**
```
Each Service Card has:
├─ Service Title (clickable)
├─ Description (info)
├─ Features list (info)
├─ Processing time (info)
├─ Login requirement notice (info)
└─ "Apply Now" button → Takes to portal
```

**Clickable in Portal:**
```
Sidebar Navigation:
├─ Dashboard
├─ Vessels → /portal/vessels
├─ Licenses → /portal/licenses
├─ Reporting → /portal/reporting
└─ Payments → /portal/payments

Each Section has:
├─ View existing items
├─ Add new items
├─ Edit items
├─ Delete items
└─ Download/Export options
```

---

## 💡 Pro Tips

**Theme Selection:**
- Try **Modern** (✨) for a fresh, contemporary feel
- Use **Classic** (📜) for formal government appearance
- Choose **Minimal** (⚪) for content-focused experience
- Stick with **Default** (🎨) for original NaFAA branding

**Language Selection:**
- English is default and most complete
- French translations cover all major sections
- Add more languages by creating new folders in `/locales`

**Navigation:**
- Use breadcrumbs in portal to track location
- Browser back button works everywhere
- Portal sections are bookmarkable

**Login:**
- Demo user: `demo@nafaa.gov.lr` / `demo123`
- Admin user: `admin@nafaa.gov.lr` / `admin123`
- Session persists across page refreshes

---

**This visual guide shows exactly where everything is and how it connects!** 🗺️✨
