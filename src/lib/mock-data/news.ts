// Mock news and media data
export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  featured: boolean;
  imageUrl?: string;
  tags: string[];
}

export const mockNews: NewsArticle[] = [
  {
    id: "1",
    title: "New Sustainable Fishing Guidelines Released",
    slug: "new-sustainable-fishing-guidelines-released",
    category: "Policy Update",
    excerpt:
      "NaFAA announces comprehensive new guidelines for sustainable fishing practices to protect marine ecosystems.",
    content: `The National Fisheries and Aquaculture Authority has released new comprehensive guidelines aimed at promoting sustainable fishing practices across Liberia's waters. These guidelines represent a major step forward in balancing economic development with environmental conservation.

Key highlights include:
- Seasonal fishing restrictions for vulnerable species
- Mandatory reporting requirements for commercial vessels
- New equipment standards to reduce bycatch
- Enhanced monitoring and enforcement measures
- Support programs for artisanal fishers transitioning to sustainable methods

The guidelines will be implemented in phases over the next 12 months, with extensive stakeholder consultation and training programs.`,
    author: "Dr. Sarah Johnson",
    publishDate: "2024-12-20",
    featured: true,
    imageUrl: "/images/news/sustainable-fishing.jpg",
    tags: ["Sustainability", "Policy", "Regulations"],
  },
  {
    id: "2",
    title: "Annual Fisheries Conference 2024 Announced",
    slug: "annual-fisheries-conference-2024",
    category: "Events",
    excerpt:
      "Join industry leaders, policymakers, and stakeholders for the premier fisheries event of the year.",
    content: `The 2024 Annual Fisheries Conference will take place from February 15-17, 2025 at the Monrovia City Hall. This year's theme is "Innovation and Sustainability in West African Fisheries."

Conference highlights:
- Keynote speeches from international fisheries experts
- Panel discussions on climate change impacts
- Technology showcase for modern fishing equipment
- Networking opportunities with industry professionals
- Workshops on aquaculture development

Registration is now open. Early bird rates available until January 15, 2025.`,
    author: "Events Team",
    publishDate: "2024-12-15",
    featured: true,
    imageUrl: "/images/news/conference.jpg",
    tags: ["Conference", "Events", "Networking"],
  },
  {
    id: "3",
    title: "Record Tuna Catch Reported in Q4 2024",
    slug: "record-tuna-catch-q4-2024",
    category: "Industry News",
    excerpt:
      "Commercial fishing sector reports highest tuna catch in five years, signaling healthy fish stocks.",
    content: `The fourth quarter of 2024 saw a remarkable increase in tuna catches, with commercial vessels reporting the highest quarterly catch in five years. This positive trend indicates healthy fish stocks and effective fisheries management.

Statistics show:
- 3,500 metric tons of tuna caught in Q4
- 15% increase compared to Q4 2023
- Yellowfin tuna leading the catch
- Sustainable fishing methods maintained
- No overfishing concerns raised

Marine biologists attribute this success to sustainable fishing practices and favorable ocean conditions. NaFAA will continue monitoring to ensure stock sustainability.`,
    author: "Marine Research Team",
    publishDate: "2024-12-10",
    featured: false,
    tags: ["Industry", "Statistics", "Sustainability"],
  },
  {
    id: "4",
    title: "New Aquaculture Training Center Opens in Buchanan",
    slug: "aquaculture-training-center-buchanan",
    category: "Development",
    excerpt:
      "State-of-the-art facility to train next generation of aquaculture professionals.",
    content: `A new aquaculture training center has officially opened in Buchanan, Grand Bassa County. The facility features modern equipment and will provide comprehensive training in fish farming techniques, business management, and sustainable practices.

The center offers:
- 6-month certificate programs
- Short courses and workshops
- Hands-on training with live specimens
- Business development support
- Access to industry mentors

The facility is expected to train over 500 individuals annually, contributing significantly to the growth of Liberia's aquaculture sector.`,
    author: "Development Team",
    publishDate: "2024-12-05",
    featured: true,
    imageUrl: "/images/news/training-center.jpg",
    tags: ["Aquaculture", "Training", "Development"],
  },
  {
    id: "5",
    title: "Digital Licensing Platform Launch",
    slug: "digital-licensing-platform-launch",
    category: "Technology",
    excerpt:
      "NaFAA introduces online portal for streamlined license applications and renewals.",
    content: `NaFAA has launched a new digital licensing platform, making it easier than ever for fishers and vessel owners to apply for and renew licenses online. The platform represents a significant modernization of fisheries administration.

Platform features:
- Online application submission
- Real-time application tracking
- Digital document upload
- Online payment processing
- Automated renewal reminders
- Mobile-friendly interface

The platform is now live and accessible 24/7. Training sessions are available for users who need assistance.`,
    author: "IT Department",
    publishDate: "2024-11-28",
    featured: false,
    tags: ["Technology", "Digital Services", "Licensing"],
  },
];

export function getNewsById(id: string): NewsArticle | undefined {
  return mockNews.find((article) => article.id === id);
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return mockNews.find((article) => article.slug === slug);
}

export function getFeaturedNews(): NewsArticle[] {
  return mockNews.filter((article) => article.featured);
}

export function getNewsByCategory(category: string): NewsArticle[] {
  return mockNews.filter((article) => article.category === category);
}
