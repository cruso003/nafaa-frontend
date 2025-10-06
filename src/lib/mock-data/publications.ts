// Mock publications data
export interface Publication {
  id: string;
  title: string;
  type: string;
  description: string;
  year: number;
  pages?: number;
  language: string;
  authors?: string[];
  fileUrl?: string;
  fileSize?: string;
  coverImage?: string;
  publishDate: string;
  category: string;
  tags: string[];
  downloads?: number;
}

export const mockPublications: Publication[] = [
  {
    id: "1",
    title: "Annual Fisheries Report 2023",
    type: "Report",
    description:
      "Comprehensive analysis of Liberia's fisheries sector performance, including catch statistics, economic impact, and policy recommendations.",
    year: 2023,
    pages: 145,
    language: "English",
    authors: ["NaFAA Research Team"],
    fileUrl: "/downloads/annual-report-2023.pdf",
    fileSize: "8.5 MB",
    coverImage: "/images/publications/annual-report-2023.jpg",
    publishDate: "2024-03-15",
    category: "Annual Reports",
    tags: ["Statistics", "Policy", "Economics"],
    downloads: 1247,
  },
  {
    id: "2",
    title: "Aquaculture Development Guidelines",
    type: "Guidelines",
    description:
      "Best practices and technical guidelines for establishing and operating aquaculture farms in Liberia.",
    year: 2024,
    pages: 68,
    language: "English",
    authors: ["Dr. James Wilson", "Dr. Mary Kpoto"],
    fileUrl: "/downloads/aquaculture-guidelines.pdf",
    fileSize: "4.2 MB",
    coverImage: "/images/publications/aquaculture-guidelines.jpg",
    publishDate: "2024-06-01",
    category: "Guidelines",
    tags: ["Aquaculture", "Development", "Technical"],
    downloads: 856,
  },
  {
    id: "3",
    title: "Marine Biodiversity Assessment of Liberian Waters",
    type: "Research Paper",
    description:
      "Scientific assessment of marine species diversity, population trends, and conservation status in Liberia's exclusive economic zone.",
    year: 2024,
    pages: 92,
    language: "English",
    authors: [
      "Dr. Sarah Johnson",
      "Dr. Peter Chen",
      "Marine Biology Institute",
    ],
    fileUrl: "/downloads/marine-biodiversity-2024.pdf",
    fileSize: "12.3 MB",
    coverImage: "/images/publications/biodiversity-assessment.jpg",
    publishDate: "2024-09-10",
    category: "Research",
    tags: ["Marine Biology", "Conservation", "Research"],
    downloads: 534,
  },
  {
    id: "4",
    title: "Fisheries Licensing Manual 2024",
    type: "Manual",
    description:
      "Complete guide to fishing license types, application procedures, requirements, and compliance obligations.",
    year: 2024,
    pages: 56,
    language: "English",
    authors: ["NaFAA Licensing Department"],
    fileUrl: "/downloads/licensing-manual-2024.pdf",
    fileSize: "3.1 MB",
    publishDate: "2024-01-20",
    category: "Manuals",
    tags: ["Licensing", "Procedures", "Compliance"],
    downloads: 2103,
  },
  {
    id: "5",
    title: "Sustainable Fishing Practices Handbook",
    type: "Handbook",
    description:
      "Practical handbook for fishers on sustainable fishing methods, gear selection, and environmental conservation.",
    year: 2024,
    pages: 42,
    language: "English / French",
    authors: ["Sustainability Division"],
    fileUrl: "/downloads/sustainable-practices-handbook.pdf",
    fileSize: "5.8 MB",
    coverImage: "/images/publications/sustainability-handbook.jpg",
    publishDate: "2024-07-15",
    category: "Handbooks",
    tags: ["Sustainability", "Best Practices", "Education"],
    downloads: 1678,
  },
  {
    id: "6",
    title: "Climate Change Impact on West African Fisheries",
    type: "Policy Brief",
    description:
      "Analysis of climate change effects on fish stocks and recommendations for adaptive management strategies.",
    year: 2024,
    pages: 28,
    language: "English",
    authors: ["Climate Research Unit"],
    fileUrl: "/downloads/climate-impact-policy-brief.pdf",
    fileSize: "2.4 MB",
    publishDate: "2024-10-05",
    category: "Policy Briefs",
    tags: ["Climate Change", "Policy", "Adaptation"],
    downloads: 892,
  },
  {
    id: "7",
    title: "Artisanal Fisheries Economic Impact Study",
    type: "Study",
    description:
      "Economic analysis of artisanal fishing sector's contribution to livelihoods and national economy.",
    year: 2023,
    pages: 76,
    language: "English",
    authors: ["Economics Research Team"],
    fileUrl: "/downloads/artisanal-fisheries-study.pdf",
    fileSize: "6.7 MB",
    publishDate: "2023-11-30",
    category: "Studies",
    tags: ["Economics", "Artisanal Fishing", "Livelihoods"],
    downloads: 645,
  },
];

export function getPublicationById(id: string): Publication | undefined {
  return mockPublications.find((pub) => pub.id === id);
}

export function getPublicationsByType(type: string): Publication[] {
  return mockPublications.filter((pub) => pub.type === type);
}

export function getPublicationsByCategory(category: string): Publication[] {
  return mockPublications.filter((pub) => pub.category === category);
}

export function getPublicationsByYear(year: number): Publication[] {
  return mockPublications.filter((pub) => pub.year === year);
}

export function getRecentPublications(limit: number = 5): Publication[] {
  return [...mockPublications]
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
    .slice(0, limit);
}
