export interface SocialLink {
  platform: "facebook" | "twitter" | "instagram" | "linkedin" | "youtube";
  url: string;
}

export interface Event {
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
  // New fields for enhanced functionality
  allowRegistration?: boolean; // Can users register on-site?
  maxAttendees?: number; // Maximum capacity
  currentAttendees?: number; // Current registered count
  registrationDeadline?: Date; // Last date to register
  priority?: number; // Higher number = higher priority for same-day events
  tags?: string[]; // For filtering/categorization
}

// Sample events data - replace with API calls or CMS data
export const upcomingEvents: Event[] = [
  {
    id: "world-fisheries-day-2025",
    title: "World Fisheries Day 2025",
    description: "Join us in celebrating World Fisheries Day, recognizing the critical importance of healthy ocean ecosystems and sustainable fisheries to our communities and economy.",
    startDate: new Date("2025-11-15T00:00:00"),
    endDate: new Date("2025-11-21T23:59:59"),
    location: "Nationwide Celebrations",
    image: "/events/wfd.png",
    category: "celebration",
    priority: 1,
    tags: ["celebration", "awareness", "community"],
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
      }
    ]
  },
  {
    id: "fishery-investment-conference-2026",
    title: "Fishery Investment Conference 2025",
    description: "A landmark conference bringing together investors, industry leaders, and policymakers to explore investment opportunities in Liberia's fisheries sector and sustainable aquaculture development.",
    startDate: new Date("2025-11-25T09:00:00"),
    endDate: new Date("2025-11-27T17:00:00"),
    location: "Monrovia, Liberia",
    image: "/events/fic.png",
    category: "conference",
    allowRegistration: true,
    maxAttendees: 200,
    currentAttendees: 45,
    registrationDeadline: new Date("2025-11-24T23:59:59"),
    priority: 2,
    tags: ["conference", "investment", "business"],
    registrationUrl: "#register",
    socialLinks: [
      {
        platform: "facebook",
        url: "https://facebook.com/nafaaliberia"
      },
      {
        platform: "linkedin",
        url: "https://linkedin.com/company/nafaaliberia"
      },
      {
        platform: "twitter",
        url: "https://twitter.com/nafaaliberia"
      }
    ]
  }
];

// Get the next upcoming event (sorted by priority for same-day events)
export function getNextEvent(): Event | null {
  const now = new Date();
  const upcoming = upcomingEvents
    .filter(event => event.startDate > now)
    .sort((a, b) => {
      // First sort by start date
      const dateDiff = a.startDate.getTime() - b.startDate.getTime();
      if (dateDiff !== 0) return dateDiff;
      
      // If same date, sort by priority (higher priority first)
      return (b.priority || 0) - (a.priority || 0);
    });
  
  return upcoming[0] || null;
}

// Get all active events (currently happening)
export function getActiveEvents(): Event[] {
  const now = new Date();
  return upcomingEvents.filter(
    event => event.startDate <= now && event.endDate >= now
  );
}

// Get upcoming events within next N days (sorted intelligently)
export function getUpcomingEvents(days: number = 90): Event[] {
  const now = new Date();
  const futureDate = new Date();
  futureDate.setDate(now.getDate() + days);
  
  return upcomingEvents
    .filter(event => event.startDate > now && event.startDate <= futureDate)
    .sort((a, b) => {
      // First sort by start date
      const dateDiff = a.startDate.getTime() - b.startDate.getTime();
      if (dateDiff !== 0) return dateDiff;
      
      // If same date, sort by priority (higher priority first)
      return (b.priority || 0) - (a.priority || 0);
    });
}

// Get events happening on the same day
export function getEventsOnSameDay(date: Date): Event[] {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);
  
  return upcomingEvents
    .filter(event => {
      const eventStart = new Date(event.startDate);
      return eventStart >= startOfDay && eventStart <= endOfDay;
    })
    .sort((a, b) => (b.priority || 0) - (a.priority || 0));
}

// Check if event registration is still open
export function isRegistrationOpen(event: Event): boolean {
  if (!event.allowRegistration) return false;
  if (!event.registrationDeadline) return true;
  
  const now = new Date();
  return now < event.registrationDeadline;
}

// Check if event is at capacity
export function isEventFull(event: Event): boolean {
  if (!event.maxAttendees || !event.currentAttendees) return false;
  return event.currentAttendees >= event.maxAttendees;
}

// Get registration status
export function getRegistrationStatus(event: Event): {
  canRegister: boolean;
  reason?: string;
  spotsLeft?: number;
} {
  if (!event.allowRegistration) {
    return { canRegister: false, reason: "External registration only" };
  }
  
  if (isEventFull(event)) {
    return { canRegister: false, reason: "Event is at full capacity" };
  }
  
  if (!isRegistrationOpen(event)) {
    return { canRegister: false, reason: "Registration has closed" };
  }
  
  const spotsLeft = event.maxAttendees && event.currentAttendees 
    ? event.maxAttendees - event.currentAttendees 
    : undefined;
  
  return { canRegister: true, spotsLeft };
}
