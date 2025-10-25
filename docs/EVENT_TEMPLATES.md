// Copy this template when adding new events

{
  // REQUIRED FIELDS
  id: "world-oceans-day-2026", // Unique identifier (use lowercase with hyphens)
  title: "World Oceans Day 2026", // Event name
  description: "Join us in celebrating World Oceans Day with activities, exhibitions, and discussions about marine conservation and sustainable fisheries.", // 150-250 words recommended
  startDate: new Date("2026-06-08T00:00:00"), // Format: YYYY-MM-DDTHH:mm:ss
  endDate: new Date("2026-06-08T23:59:59"), // Format: YYYY-MM-DDTHH:mm:ss
  category: "celebration", // Options: "conference" | "celebration" | "workshop" | "other"
  socialLinks: [
    {
      platform: "facebook",
      url: "https://facebook.com/nafaaliberia" // UPDATE THIS
    },
    {
      platform: "twitter",
      url: "https://twitter.com/nafaaliberia" // UPDATE THIS
    },
    {
      platform: "instagram",
      url: "https://instagram.com/nafaaliberia" // UPDATE THIS
    }
  ],

  // OPTIONAL FIELDS
  location: "Monrovia Central Beach", // Physical location or "Virtual" or "Nationwide"
  image: "/events/world-oceans-day.jpg", // Path relative to /public/ folder
  registrationUrl: "https://register.example.com", // Link to registration page
}

// MULTIPLE SOCIAL PLATFORMS EXAMPLE
{
  id: "annual-fisheries-conference-2026",
  title: "Annual Fisheries Conference 2026",
  description: "The premier conference for fisheries professionals, researchers, and policymakers to discuss the future of sustainable fishing in Liberia.",
  startDate: new Date("2026-09-20T09:00:00"),
  endDate: new Date("2026-09-22T17:00:00"),
  location: "Monrovia Conference Center",
  image: "/events/conference-2026.jpg",
  category: "conference",
  registrationUrl: "https://conference.nafaa.gov.lr/register",
  socialLinks: [
    { platform: "facebook", url: "https://facebook.com/nafaaliberia" },
    { platform: "twitter", url: "https://twitter.com/nafaaliberia" },
    { platform: "instagram", url: "https://instagram.com/nafaaliberia" },
    { platform: "linkedin", url: "https://linkedin.com/company/nafaaliberia" },
    { platform: "youtube", url: "https://youtube.com/@nafaaliberia" }
  ]
}

// SINGLE DAY EVENT EXAMPLE
{
  id: "community-cleanup-day",
  title: "Coastal Community Cleanup Day",
  description: "Join volunteers from across the community to help clean our beaches and protect marine life.",
  startDate: new Date("2025-12-15T08:00:00"),
  endDate: new Date("2025-12-15T14:00:00"),
  location: "Various Coastal Locations",
  category: "other",
  socialLinks: [
    { platform: "facebook", url: "https://facebook.com/nafaaliberia" },
    { platform: "instagram", url: "https://instagram.com/nafaaliberia" }
  ]
}

// MULTI-DAY EVENT EXAMPLE (WEEK-LONG)
{
  id: "aquaculture-training-week-2026",
  title: "Aquaculture Training Week 2026",
  description: "A comprehensive week-long training program covering modern aquaculture techniques, sustainable practices, and business development for fish farmers.",
  startDate: new Date("2026-04-13T08:00:00"),
  endDate: new Date("2026-04-17T17:00:00"),
  location: "NaFAA Training Center, Buchanan",
  image: "/events/aquaculture-training.jpg",
  category: "workshop",
  registrationUrl: "https://training.nafaa.gov.lr/aquaculture-2026",
  socialLinks: [
    { platform: "facebook", url: "https://facebook.com/nafaaliberia" },
    { platform: "twitter", url: "https://twitter.com/nafaaliberia" },
    { platform: "linkedin", url: "https://linkedin.com/company/nafaaliberia" }
  ]
}

// VIRTUAL EVENT EXAMPLE
{
  id: "virtual-fisheries-webinar-2026",
  title: "Future of Fisheries: Virtual Webinar Series",
  description: "A three-part virtual webinar series featuring international experts discussing climate change impacts, sustainable practices, and technological innovations in fisheries management.",
  startDate: new Date("2026-03-01T10:00:00"),
  endDate: new Date("2026-03-15T12:00:00"),
  location: "Virtual Event",
  category: "workshop",
  registrationUrl: "https://webinar.nafaa.gov.lr/register",
  socialLinks: [
    { platform: "facebook", url: "https://facebook.com/nafaaliberia" },
    { platform: "linkedin", url: "https://linkedin.com/company/nafaaliberia" },
    { platform: "youtube", url: "https://youtube.com/@nafaaliberia" }
  ]
}
