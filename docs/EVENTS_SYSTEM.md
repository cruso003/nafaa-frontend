# Events System Documentation

## Overview

The NaFAA website now features a comprehensive events system that prominently displays upcoming events with beautiful UI components, countdown timers, and social media integration.

## Components

### 1. Events Data Structure (`/src/lib/events-data.ts`)

Defines the event data structure and provides helper functions:

```typescript
interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  image?: string;
  socialLinks: SocialLink[];
  registrationUrl?: string;
  category: "conference" | "celebration" | "workshop" | "other";
}
```

**Helper Functions:**
- `getNextEvent()` - Returns the next upcoming event
- `getActiveEvents()` - Returns currently happening events
- `getUpcomingEvents(days)` - Returns events within next N days

### 2. Events Popup (`/src/components/events-popup.tsx`)

A beautiful modal dialog that automatically appears when users visit the homepage.

**Features:**
- ✅ Auto-shows 1.5 seconds after page load
- ✅ Real-time countdown timer with days, hours, minutes, seconds
- ✅ Event details with date, location, description
- ✅ Social media links (Facebook, Twitter, Instagram, LinkedIn, YouTube)
- ✅ Registration button
- ✅ Local storage to prevent showing same event multiple times (24-hour cooldown)
- ✅ Responsive design

**User Experience:**
- Shows once per day per event
- Can be dismissed by user
- Elegant animations
- Mobile-friendly

### 3. Events Banner (`/src/components/events-banner.tsx`)

A prominent top banner that displays upcoming events.

**Features:**
- ✅ Sticky top banner with gradient background
- ✅ Mini countdown display
- ✅ Navigation for multiple events
- ✅ Dismissible
- ✅ Links to event details
- ✅ Responsive design

### 4. Events Section (`/src/components/events-banner.tsx`)

A dedicated homepage section with beautiful event cards.

**Features:**
- ✅ Grid layout for multiple events
- ✅ Event images
- ✅ Full countdown timers
- ✅ Event descriptions
- ✅ Registration buttons
- ✅ Category badges
- ✅ Hover effects

### 5. Countdown Hook (`/src/hooks/use-countdown.ts`)

A reusable React hook for countdown functionality.

**Features:**
- ✅ Real-time updates every second
- ✅ Calculates days, hours, minutes, seconds
- ✅ Detects expired events
- ✅ Date formatting utilities

## Current Events

### World Fisheries Day 2025
- **Dates**: November 15-21, 2025
- **Type**: Celebration
- **Location**: Nationwide
- **Description**: Celebrating sustainable fisheries and ocean ecosystems

### Fishery Investment Conference 2026
- **Dates**: February 15-17, 2026
- **Type**: Conference
- **Location**: Monrovia, Liberia
- **Description**: Investment opportunities in Liberia's fisheries sector

## Adding New Events

### Step 1: Edit Event Data

Update `/src/lib/events-data.ts`:

```typescript
export const upcomingEvents: Event[] = [
  // ... existing events
  {
    id: "your-event-id",
    title: "Your Event Title",
    description: "Detailed description of your event...",
    startDate: new Date("2026-03-15T09:00:00"),
    endDate: new Date("2026-03-17T17:00:00"),
    location: "Event Location",
    image: "/events/your-event-image.jpg",
    category: "conference", // or "celebration", "workshop", "other"
    registrationUrl: "https://your-registration-link.com",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/nafaaliberia"
      },
      {
        platform: "twitter",
        url: "https://twitter.com/nafaaliberia"
      },
      {
        platform: "instagram",
        url: "https://instagram.com/nafaaliberia"
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/company/nafaaliberia"
      }
    ]
  }
];
```

### Step 2: Add Event Image

1. Place your event image in `/public/events/`
2. Recommended size: 1200x600px (2:1 ratio)
3. Format: JPG or PNG
4. Keep file size under 500KB
5. Use descriptive filename: `world-fisheries-day.jpg`

### Step 3: Update Social Media Links

Ensure the social media URLs are correct and active:
- Facebook: Company/organization page
- Twitter: Official account
- Instagram: Official account
- LinkedIn: Company page
- YouTube: Channel (if applicable)

## Customization

### Popup Behavior

Modify popup timing in `/src/components/events-popup.tsx`:

```typescript
// Show popup after delay (milliseconds)
setTimeout(() => {
  setOpen(true);
}, 1500); // Change this value

// Show popup frequency (milliseconds)
const oneDayInMs = 24 * 60 * 60 * 1000; // Change to desired interval
```

### Banner Styling

Customize banner appearance in `/src/components/events-banner.tsx`:

```typescript
// Change gradient colors
className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"

// Modify to your preferred colors
className="bg-gradient-to-r from-green-600 via-teal-700 to-blue-800"
```

### Countdown Display

Customize countdown colors in components:

```typescript
// Current colors
className="bg-gradient-to-br from-blue-600 to-blue-700"

// Change to match your brand
className="bg-gradient-to-br from-green-600 to-green-700"
```

## Integration with CMS/API

To fetch events from a backend API or CMS:

### Option 1: API Integration

```typescript
// src/lib/events-data.ts
export async function fetchUpcomingEvents(): Promise<Event[]> {
  const response = await fetch('/api/events');
  const data = await response.json();
  
  return data.map((event: any) => ({
    ...event,
    startDate: new Date(event.startDate),
    endDate: new Date(event.endDate),
  }));
}
```

### Option 2: WordPress Integration

```typescript
export async function fetchEventsFromWordPress(): Promise<Event[]> {
  const response = await fetch('https://your-wp-site.com/wp-json/wp/v2/events');
  const data = await response.json();
  
  return data.map((event: any) => ({
    id: event.id.toString(),
    title: event.title.rendered,
    description: event.content.rendered,
    startDate: new Date(event.acf.start_date),
    endDate: new Date(event.acf.end_date),
    location: event.acf.location,
    image: event.acf.image?.url,
    category: event.acf.category,
    registrationUrl: event.acf.registration_url,
    socialLinks: event.acf.social_links || []
  }));
}
```

### Update Homepage

```typescript
// src/app/page.tsx
"use client";

import { useState, useEffect } from 'react';

function HomeContent() {
  const [events, setEvents] = useState<Event[]>([]);
  
  useEffect(() => {
    fetchUpcomingEvents().then(setEvents);
  }, []);
  
  // ... rest of component
}
```

## Display Options

The events system provides three display options:

### 1. Top Banner (Recommended)
- Always visible
- Minimal space
- Quick info
- Auto-rotates multiple events

### 2. Popup Modal (Recommended)
- Eye-catching
- Detailed information
- Auto-shows on visit
- Respects user preferences

### 3. Dedicated Section
- Comprehensive display
- Multiple events visible
- Beautiful cards
- Permanent homepage presence

**Current Setup**: All three are active for maximum visibility!

## Testing

### Test Different Scenarios:

1. **Upcoming Event**: Set date in future
2. **Active Event**: Set current date between start and end
3. **Expired Event**: Set date in past
4. **Multiple Events**: Add 3+ events to test navigation
5. **No Events**: Empty array to test fallback

### Test Responsiveness:

- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

### Test Popup Behavior:

1. Clear localStorage: `localStorage.clear()`
2. Reload page
3. Verify popup shows
4. Close popup
5. Reload page
6. Verify popup doesn't show within 24 hours

## Social Media Platform URLs

Update these in your event data:

```typescript
socialLinks: [
  {
    platform: "facebook",
    url: "https://facebook.com/nafaaliberia" // Update this
  },
  {
    platform: "twitter", 
    url: "https://twitter.com/nafaaliberia" // Update this
  },
  {
    platform: "instagram",
    url: "https://instagram.com/nafaaliberia" // Update this
  },
  {
    platform: "linkedin",
    url: "https://linkedin.com/company/nafaaliberia" // Update this
  },
  {
    platform: "youtube",
    url: "https://youtube.com/@nafaaliberia" // Update this
  }
]
```

## Best Practices

### Event Management

1. **Update Regularly**: Keep events current and remove expired ones
2. **Lead Time**: Add events at least 30 days in advance
3. **Images**: Use high-quality, relevant images
4. **Descriptions**: Write clear, engaging descriptions (150-250 words)
5. **Social Links**: Verify all links work before publishing

### Performance

1. **Image Optimization**: Compress images before uploading
2. **Lazy Loading**: Images load on demand
3. **Local Storage**: Prevents unnecessary re-renders
4. **Efficient Countdown**: Updates only visible timers

### User Experience

1. **Don't Overwhelm**: Limit to 2-3 prominent events
2. **Allow Dismissal**: Users can close popups
3. **Clear CTAs**: Obvious registration/learn more buttons
4. **Mobile First**: Test on mobile devices
5. **Accessibility**: Use semantic HTML and ARIA labels

## Troubleshooting

### Popup Not Showing

1. Check localStorage: `localStorage.getItem('event-popup-{eventId}')`
2. Clear if needed: `localStorage.removeItem('event-popup-{eventId}')`
3. Verify event date is in future
4. Check browser console for errors

### Countdown Not Updating

1. Verify date format is correct
2. Check timezone issues
3. Ensure component is client-side (`"use client"`)

### Images Not Loading

1. Verify image path: `/public/events/image.jpg` → `/events/image.jpg`
2. Check file exists in public folder
3. Verify file permissions
4. Check network tab for 404 errors

## Future Enhancements

### Potential Features:

- [ ] Calendar integration (iCal, Google Calendar)
- [ ] Email reminders
- [ ] Event filtering by category
- [ ] Past events archive
- [ ] Event search functionality
- [ ] Event sharing functionality
- [ ] Multi-language support
- [ ] Analytics tracking (event views, clicks)
- [ ] RSVP functionality
- [ ] Live event streaming integration

## Support

For questions or issues with the events system:

1. Check this documentation
2. Review component code comments
3. Test in browser console
4. Check browser compatibility
5. Verify date/time formats

## Credits

Built with:
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **shadcn/ui** - UI components
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

---

Last Updated: October 25, 2025
