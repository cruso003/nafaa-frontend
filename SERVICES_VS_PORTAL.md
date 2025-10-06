# Services vs Portal - Flow Explanation

## 🔄 **Two Separate Areas**

### 1. **Public Services Page** (`/services`)
**Purpose:** Information & Marketing

**What it does:**
- Shows available services to the public
- Explains requirements and processing times
- Displays benefits and features
- Acts as a landing page for people to learn about services

**Who can access:** Everyone (no login required)

**Example Services:**
- Vessel Registration
- Fishing Licenses
- License Renewal
- Catch Reporting
- Fee Payments

**Current State:** ✅ Exists at `/services`

---

### 2. **Client Portal** (`/portal`)
**Purpose:** Actual Service Delivery

**What it does:**
- Allows logged-in users to apply for services
- Provides forms to submit applications
- Shows user's existing licenses/vessels/payments
- Enables renewals and updates
- Displays user's transaction history

**Who can access:** Logged-in users only

**Portal Sections:**
- `/portal/dashboard` - Overview of user's activities
- `/portal/vessels` - Manage vessels, add new ones
- `/portal/licenses` - View licenses, apply for new ones, renew
- `/portal/reporting` - Submit catch reports
- `/portal/payments` - View payment history, make payments

**Current State:** ✅ Exists and requires authentication

---

## 🔗 **How They Connect**

### **User Journey:**

```
1. User visits PUBLIC WEBSITE
   ↓
2. User clicks "Services" in navigation
   ↓
3. User sees Services Page (/services)
   - Reads about "Fishing Licenses"
   - Sees "Apply Now" or "Get Started" button
   ↓
4. User clicks "Apply Now"
   ↓
5. System checks: Is user logged in?
   
   ❌ NOT logged in:
      → Redirect to /portal/login
      → User logs in or registers
      → After login: Redirect to /portal/licenses (or appropriate form)
   
   ✅ Already logged in:
      → Redirect directly to /portal/licenses (or appropriate form)
   ↓
6. User completes form in PORTAL
   ↓
7. Application submitted!
```

---

## 📊 **Service-to-Portal Mapping**

| Public Service Page | Portal Destination | Action |
|---------------------|-------------------|--------|
| `/services` → Vessel Registration | `/portal/vessels` | Add New Vessel |
| `/services` → Fishing Licenses | `/portal/licenses` | Apply for License |
| `/services` → License Renewal | `/portal/licenses` | Renew Existing |
| `/services` → Catch Reporting | `/portal/reporting` | Submit Report |
| `/services` → Fee Payments | `/portal/payments` | Make Payment |

---

## 🎯 **Key Differences**

| Aspect | Services Page | Portal |
|--------|---------------|--------|
| **Access** | Public | Requires Login |
| **Purpose** | Information | Actual Forms |
| **Content** | Marketing/Descriptions | Data Entry/Management |
| **Authentication** | None | NextAuth Session |
| **Data** | Static Information | Dynamic User Data |
| **CTA Buttons** | "Learn More", "Apply Now" | "Submit", "Save", "Update" |

---

## 🔐 **Authentication Flow**

### **Services Page Buttons:**

```typescript
// Example: Services Page "Apply Now" button
<Button asChild>
  <Link href="/portal/licenses?action=apply">
    Apply Now
  </Link>
</Button>

// Or with proper auth check:
import { useAuth } from "@/hooks/useAuth";

function ApplyButton() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const handleApply = () => {
    if (isAuthenticated) {
      router.push("/portal/licenses?action=apply");
    } else {
      // Store intended destination
      sessionStorage.setItem("redirectAfterLogin", "/portal/licenses?action=apply");
      router.push("/portal/login");
    }
  };

  return (
    <Button onClick={handleApply}>
      Apply Now
    </Button>
  );
}
```

---

## ✅ **No Role-Based Access Needed**

Since the site only has:
- **Public Pages** (accessible to everyone)
- **Client Portal** (accessible to logged-in clients only)
- **Admin Panel** (separate system with backend)

**We DON'T need:**
- ❌ Role-based access control (RBAC)
- ❌ Admin routes in this frontend
- ❌ Permission checks beyond "logged in" vs "not logged in"

**We only need:**
- ✅ Authentication check (useAuth hook)
- ✅ Protected routes (redirect to login if not authenticated)
- ✅ Session management (NextAuth)

---

## 🎨 **Current Implementation Status**

### ✅ **What Exists:**

1. **Public Services Page** (`/services`)
   - Service cards with descriptions
   - Features and benefits
   - Processing times
   - "Apply Now" buttons

2. **Portal Pages:**
   - Dashboard (`/portal/dashboard`)
   - Vessels Management (`/portal/vessels`)
   - Licenses Management (`/portal/licenses`)
   - Reporting (`/portal/reporting`)
   - Payments (`/portal/payments`)

3. **Authentication:**
   - NextAuth setup
   - Login/Register pages
   - useAuth hook
   - Demo credentials available

### ⚠️ **What Needs Connection:**

The "Apply Now" buttons on `/services` page should:
1. Check authentication status
2. Redirect to login if needed (with return URL)
3. After login, redirect to appropriate portal page
4. Open the correct form/action in portal

---

## 💡 **Recommended Implementation**

### **Update Services Page Buttons:**

```typescript
// Before (current):
<Button asChild>
  <Link href="/services/fishing-licenses">
    Learn More
  </Link>
</Button>

// After (recommended):
<Button asChild>
  <Link href="/portal/licenses?action=apply&type=commercial">
    Apply Now
  </Link>
</Button>
// This will trigger NextAuth's middleware to check auth
// If not logged in, redirects to login with callbackUrl
```

### **Portal Pages Handle Query Params:**

```typescript
// portal/licenses/page.tsx
const searchParams = useSearchParams();
const action = searchParams.get("action"); // "apply" or "renew"
const type = searchParams.get("type"); // "commercial", "artisanal", etc.

useEffect(() => {
  if (action === "apply") {
    // Open "Apply for License" form
    // Pre-fill type if provided
  }
}, [action, type]);
```

---

## 🔄 **Summary**

**Services Page = Marketing & Information**
- Public access
- No forms
- Links to portal

**Portal = Actual Work**
- Requires login
- Has forms
- User data & transactions

**They are connected through:**
1. "Apply Now" buttons on services page
2. Authentication check
3. Redirect to portal forms
4. Query parameters to pre-select form/action

---

*This architecture keeps public information separate from user transactions while providing a seamless flow between them.*
