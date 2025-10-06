# 🎯 Quick Reference - Services, Hooks & Commands

## Table of Contents
- [Development Commands](#-development-commands)
- [Authentication](#-authentication)
- [Data Fetching](#-data-fetching)
- [Form Handling](#-form-handling)
- [File Upload](#-file-upload)
- [Search](#-search)
- [Common Patterns](#-common-patterns)
- [Import Paths](#-import-paths)

## 🚀 Development Commands
```bash
bun dev              # Start dev server (http://localhost:3000)
bun run build        # Build for production
bun start            # Start production server
bun run lint         # Run Biome linter
bun run format       # Format code with Biome
```

## 📦 Add Components
```bash
bunx --bun shadcn@latest add [component]

# Examples:
bunx --bun shadcn@latest add form
bunx --bun shadcn@latest add calendar
bunx --bun shadcn@latest add checkbox
bunx --bun shadcn@latest add radio-group
bunx --bun shadcn@latest add switch
```

## 🔐 Authentication

### Using useAuth Hook
```typescript
import { useAuth } from "@/hooks/useAuth";

function LoginForm() {
  const { login, user, isAuthenticated, logout } = useAuth();

  const handleLogin = async () => {
    const result = await login("demo@nafaa.gov.lr", "demo123");
    if (result.success) {
      router.push("/portal/dashboard");
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
```

### Direct Service Call
```typescript
import { authService } from "@/services";

// Login
const response = await authService.login({
  email: "demo@nafaa.gov.lr",
  password: "demo123",
});

// Register
const newUser = await authService.register({
  name: "John Doe",
  email: "john@example.com",
  password: "Password123",
});

// Get current user
const currentUser = await authService.getCurrentUser();
```

**Demo Credentials:**
- User: `demo@nafaa.gov.lr` / `demo123`
- Admin: `admin@nafaa.gov.lr` / `admin123`

## 📊 Data Fetching

### Using useApi Hook (Recommended)
```typescript
import { useApi } from "@/hooks/useApi";
import { mockVessels } from "@/lib/mock-data";

function VesselsList() {
  const { data: vessels, isLoading, error, refetch } = useApi(
    "/vessels",
    mockVessels,
    { staleTime: 300000 } // 5 minutes cache
  );

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      {vessels.map((vessel) => (
        <VesselCard key={vessel.id} vessel={vessel} />
      ))}
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}
```

### Using Services Directly
```typescript
import { vesselsService, licensesService } from "@/services";

// Get all vessels with pagination
const { vessels, total } = await vesselsService.getAll({
  page: 1,
  limit: 10,
  status: "Active",
  type: "Commercial Fishing",
});

// Get single vessel
const vessel = await vesselsService.getById("1");

// Create vessel
const newVessel = await vesselsService.create({
  name: "New Vessel",
  type: "Commercial Fishing",
  registrationNumber: "LR-2024-XXX",
  // ... other fields
});

// Update vessel
const updated = await vesselsService.update("1", {
  status: "Under Inspection",
});

// Get licenses
const { licenses } = await licensesService.getAll({
  status: "Active",
});
```

## 📝 Form Handling

### Using useForm Hook
```typescript
import { useForm } from "@/hooks/useForm";
import { PASSWORD_REGEX, EMAIL_REGEX } from "@/config/constants";

function RegistrationForm() {
  const { 
    values, 
    errors, 
    touched, 
    handleChange, 
    handleBlur, 
    handleSubmit,
    isSubmitting 
  } = useForm(
    {
      name: "",
      email: "",
      password: "",
    },
    {
      name: { required: true },
      email: {
        required: true,
        pattern: { value: EMAIL_REGEX, message: "Invalid email" },
      },
      password: {
        required: true,
        minLength: { value: 8, message: "Min 8 characters" },
        pattern: {
          value: PASSWORD_REGEX,
          message: "Must include uppercase, lowercase, and digit",
        },
      },
    }
  );

  const onSubmit = async (formValues) => {
    await authService.register(formValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          name="name"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
        />
        {touched.name && errors.name && (
          <span className="text-red-500">{errors.name}</span>
        )}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Register"}
      </button>
    </form>
  );
}
```

## 📤 File Upload

### Using useFileUpload Hook
```typescript
import { useFileUpload } from "@/hooks/useFileUpload";

function FileUploader() {
  const { upload, uploadProgress, isUploading, error, reset } = useFileUpload();

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const result = await upload(file, "vessels");
      console.log("File uploaded:", result.url);
      toast.success("File uploaded successfully");
    } catch (err) {
      toast.error("Upload failed");
    }
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={handleFileSelect} 
        disabled={isUploading} 
        accept="image/*"
      />
      
      {isUploading && (
        <div>
          <progress value={uploadProgress?.percentage} max="100" />
          <span>{uploadProgress?.percentage}%</span>
        </div>
      )}
      
      {error && <div className="text-red-500">Error: {error}</div>}
    </div>
  );
}
```

### Multiple File Upload
```typescript
import { uploadsService } from "@/services";

async function uploadMultiple(files: File[]) {
  try {
    const results = await uploadsService.uploadMultiple(files, "documents");
    console.log(`Uploaded ${results.length} files`);
    return results;
  } catch (error) {
    console.error("Upload failed:", error);
  }
}
```

## 🔍 Search

### Using useSearch Hook
```typescript
import { useSearch } from "@/hooks/useSearch";

function SearchBar() {
  const { 
    query, 
    setQuery, 
    results, 
    isSearching, 
    error, 
    clearSearch 
  } = useSearch({
    debounceMs: 300,
    limit: 10,
  });

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      
      {query && (
        <button onClick={clearSearch}>Clear</button>
      )}
      
      {isSearching && <LoadingSpinner />}
      
      <div>
        {results.map((result) => (
          <SearchResult key={result.objectID} result={result} />
        ))}
      </div>
      
      {error && <ErrorMessage error={error} />}
    </div>
  );
}
```

### Direct Search Service
```typescript
import { searchService } from "@/services";

// Global search
const results = await searchService.searchGlobal("fishing", {
  limit: 20,
});

// Search specific index
const vessels = await searchService.searchVessels("ocean", {
  limit: 10,
  filters: "status:Active",
});

const news = await searchService.searchNews("sustainable", {
  limit: 5,
});
```

## 🎨 Theme & Language

### Theme Switching
```typescript
import { useTheme } from "@/hooks/useTheme";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="default">Default</option>
      <option value="modern">Modern</option>
      <option value="classic">Classic</option>
      <option value="minimal">Minimal</option>
    </select>
  );
}
```

### Language Switching
```typescript
import { useTranslation } from "react-i18next";

function TranslatedComponent() {
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      <h1>{t("site.name")}</h1>
      <p>{t("site.description")}</p>
      
      <button onClick={() => i18n.changeLanguage("fr")}>
        Français
      </button>
      <button onClick={() => i18n.changeLanguage("en")}>
        English
      </button>
    </div>
  );
}
```

## 🛠️ Utility Hooks

### Pagination
```typescript
import { usePagination } from "@/hooks/usePagination";

function PaginatedList({ totalItems }) {
  const {
    currentPage,
    pageSize,
    totalPages,
    nextPage,
    previousPage,
    canGoNext,
    canGoPrevious,
    startIndex,
    endIndex,
  } = usePagination({
    initialPage: 1,
    initialPageSize: 10,
    totalItems,
  });

  return (
    <div>
      <div>
        Showing {startIndex + 1} - {Math.min(endIndex, totalItems)} of {totalItems}
      </div>
      
      <button onClick={previousPage} disabled={!canGoPrevious}>
        Previous
      </button>
      
      <span>Page {currentPage} of {totalPages}</span>
      
      <button onClick={nextPage} disabled={!canGoNext}>
        Next
      </button>
    </div>
  );
}
```

### Debounce
```typescript
import { useDebounce } from "@/hooks/useDebounce";
import { useState, useEffect } from "react";

function DebouncedSearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search
      searchService.searchGlobal(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search (debounced)..."
    />
  );
}
```

### Local Storage
```typescript
import { useLocalStorage } from "@/hooks/useLocalStorage";

function SettingsComponent() {
  const [settings, setSettings] = useLocalStorage("user-settings", {
    notifications: true,
    theme: "default",
  });

  return (
    <label>
      <input
        type="checkbox"
        checked={settings.notifications}
        onChange={(e) =>
          setSettings({ ...settings, notifications: e.target.checked })
        }
      />
      Enable Notifications
    </label>
  );
}
```

### Media Queries
```typescript
import { useIsMobile, useIsTablet, useIsDesktop } from "@/hooks/useMediaQuery";

function ResponsiveComponent() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return (
    <div>
      {isMobile && <MobileLayout />}
      {isTablet && <TabletLayout />}
      {isDesktop && <DesktopLayout />}
    </div>
  );
}
```

## 🔧 Common Patterns

### Loading States
```typescript
function DataComponent() {
  const { data, isLoading, error } = useApi("/endpoint", mockData);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <NoData />;

  return <DataDisplay data={data} />;
}
```

### Error Handling
```typescript
async function handleAction() {
  try {
    const result = await someService.someMethod();
    toast.success("Action completed successfully");
  } catch (error) {
    toast.error(error instanceof Error ? error.message : "Action failed");
    console.error("Error:", error);
  }
}
```

### Conditional Rendering
```typescript
import { USE_MOCK_DATA } from "@/config/constants";

function DevTools() {
  if (!USE_MOCK_DATA) return null;
  
  return <MockDataIndicator />;
}
```

## 📚 Import Paths

### Services
```typescript
import { 
  authService, 
  vesselsService, 
  licensesService,
  reportsService, 
  uploadsService, 
  searchService 
} from "@/services";
```

### Hooks
```typescript
import { useAuth } from "@/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import { useForm } from "@/hooks/useForm";
import { useFileUpload } from "@/hooks/useFileUpload";
import { useSearch } from "@/hooks/useSearch";
import { usePagination } from "@/hooks/usePagination";
import { useDebounce } from "@/hooks/useDebounce";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useTheme } from "@/hooks/useTheme";
import { useMediaQuery, useIsMobile } from "@/hooks/useMediaQuery";
```

### Mock Data
```typescript
import {
  mockVessels,
  mockLicenses,
  mockNews,
  mockOpportunities,
  mockPublications,
  mockCatchReports,
  mockPayments,
  type Vessel,
  type License,
  type NewsArticle,
} from "@/lib/mock-data";
```

### Constants
```typescript
import {
  USE_MOCK_DATA,
  API_BASE_URL,
  DEFAULT_PAGE_SIZE,
  MAX_FILE_SIZE,
  ALLOWED_IMAGE_TYPES,
  PASSWORD_REGEX,
  EMAIL_REGEX,
  CACHE_DURATION,
  SUPPORTED_LANGUAGES,
  THEMES,
} from "@/config/constants";
```

### Components
```typescript
import { GlobalSearch } from "@/components/search/global-search";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
```

## 🎯 Best Practices

1. ✅ **Always use services** instead of direct axios calls
2. ✅ **Use useApi hook** for GET requests with automatic caching
3. ✅ **Import from index files** for cleaner imports
4. ✅ **Check USE_MOCK_DATA** when debugging API issues
5. ✅ **Use TypeScript types** from mock-data files
6. ✅ **Handle loading and error states** in all components
7. ✅ **Use constants** instead of magic numbers/strings
8. ✅ **Test in mock mode first** before backend integration
9. ✅ **Follow existing patterns** in the codebase
10. ✅ **Use React Query DevTools** for debugging cache issues

## 🎨 Component Imports

### Most Used
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
```

### Notifications
```tsx
import { toast } from "sonner"
toast.success("Success!")
toast.error("Error!")
```

### Icons
```tsx
import { Fish, Waves, Ship } from "lucide-react"
<Fish className="h-5 w-5" />
```

### Animations
```tsx
import { motion } from "framer-motion"
<motion.div animate={{ opacity: 1 }}>Content</motion.div>
```

### Data Fetching
```tsx
import { useQuery } from "@tanstack/react-query"
const { data, isLoading } = useQuery({ queryKey: ['data'], queryFn: fetchData })
```

## 📁 File Structure
```
src/
├── app/              # Pages & routes
│   ├── page.tsx      # Home (/)
│   └── about/
│       └── page.tsx  # About (/about)
├── components/       # React components
│   ├── ui/           # shadcn components
│   └── custom/       # Your components
└── lib/              # Utilities
    └── utils.ts      # Helper functions
```

## 🎯 Common Patterns

### Page Template
```tsx
export default function MyPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Title</h1>
      <p className="text-slate-600">Description</p>
    </div>
  )
}
```

### Card Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {items.map(item => (
    <Card key={item.id}>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>{item.content}</CardContent>
    </Card>
  ))}
</div>
```

### Form
```tsx
<div className="space-y-4">
  <div>
    <Label htmlFor="name">Name</Label>
    <Input id="name" placeholder="Enter name" />
  </div>
  <Button>Submit</Button>
</div>
```

## 🌈 NaFAA Color Palette
```css
/* Tailwind classes */
text-blue-600       # Primary brand
text-cyan-600       # Ocean/water
text-emerald-600    # Sustainability
text-slate-900      # Headings
text-slate-600      # Body text
bg-slate-50         # Light background
```

## 🔗 Quick Links
- Components: http://localhost:3000/components
- shadcn docs: https://ui.shadcn.com
- Lucide icons: https://lucide.dev
- Tailwind docs: https://tailwindcss.com

---

**Keep this file open while developing! 📌**
