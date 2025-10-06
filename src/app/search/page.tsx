"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Briefcase, Ship, TrendingUp, BookOpen, AlertCircle } from "lucide-react";

// Comprehensive search index with keywords and synonyms
const searchIndex = [
  // Opportunities & Jobs
  {
    title: "Career Opportunities",
    description: "Explore current job openings and career opportunities at NaFAA",
    url: "/opportunities",
    keywords: ["jobs", "careers", "employment", "vacancy", "vacancies", "hiring", "work", "positions", "openings", "recruitment"],
    category: "Opportunities",
    icon: Briefcase,
  },
  {
    title: "Procurement Opportunities",
    description: "View open procurement bids and tender opportunities",
    url: "/procurement/bids",
    keywords: ["procurement", "bids", "tenders", "contracts", "bidding", "rfp", "rfq", "proposals", "vendors", "suppliers"],
    category: "Opportunities",
    icon: FileText,
  },
  
  // Services
  {
    title: "Vessel Registration",
    description: "Register your fishing vessel with NaFAA",
    url: "/services/vessel-registration",
    keywords: ["vessel", "registration", "register", "boat", "ship", "fishing vessel", "commercial vessel", "artisanal"],
    category: "Services",
    icon: Ship,
  },
  {
    title: "Fishing Licenses",
    description: "Apply for commercial or artisanal fishing licenses",
    url: "/services/fishing-licenses",
    keywords: ["license", "fishing", "permit", "commercial fishing", "artisanal fishing", "authorization"],
    category: "Services",
    icon: FileText,
  },
  {
    title: "License Renewal",
    description: "Renew your existing fishing licenses",
    url: "/services/license-renewal",
    keywords: ["renewal", "renew", "extend", "license renewal", "permit renewal"],
    category: "Services",
    icon: FileText,
  },
  {
    title: "Catch Reporting",
    description: "Submit monthly catch reports and data",
    url: "/services/catch-reporting",
    keywords: ["catch", "report", "reporting", "data submission", "monthly report", "catch data"],
    category: "Services",
    icon: TrendingUp,
  },
  {
    title: "Payment Services",
    description: "Pay fees, fines, and charges online",
    url: "/services/payments",
    keywords: ["payment", "pay", "fees", "charges", "fines", "billing", "invoice", "online payment"],
    category: "Services",
    icon: FileText,
  },
  
  // About
  {
    title: "About NaFAA",
    description: "Learn about our mission, vision, and values",
    url: "/about",
    keywords: ["about", "mission", "vision", "values", "who we are", "about us"],
    category: "About",
    icon: BookOpen,
  },
  {
    title: "Our Mandate",
    description: "Understanding NaFAA's responsibilities and authority",
    url: "/about/mandate",
    keywords: ["mandate", "responsibilities", "authority", "role", "functions", "duties"],
    category: "About",
    icon: BookOpen,
  },
  {
    title: "Board of Directors",
    description: "Meet the Board of Directors providing governance oversight",
    url: "/about/board",
    keywords: ["board", "directors", "governance", "leadership", "board members"],
    category: "About",
    icon: Briefcase,
  },
  {
    title: "Management Team",
    description: "Executive leadership and department heads",
    url: "/about/management",
    keywords: ["management", "executives", "leadership", "directors", "department heads", "team"],
    category: "About",
    icon: Briefcase,
  },
  {
    title: "Departments",
    description: "Organizational structure and divisions",
    url: "/about/departments",
    keywords: ["departments", "divisions", "organization", "structure", "units"],
    category: "About",
    icon: BookOpen,
  },
  
  // Statistics & Data
  {
    title: "Statistics Dashboard",
    description: "View comprehensive fisheries statistics and data",
    url: "/statistics",
    keywords: ["statistics", "data", "dashboard", "metrics", "numbers", "analytics", "insights"],
    category: "Statistics",
    icon: TrendingUp,
  },
  {
    title: "Vessel Statistics",
    description: "Registered vessel data and trends",
    url: "/statistics/vessels",
    keywords: ["vessel statistics", "vessel data", "fleet data", "registered vessels"],
    category: "Statistics",
    icon: Ship,
  },
  {
    title: "Catch Data",
    description: "Commercial and artisanal catch statistics",
    url: "/statistics/catch-data",
    keywords: ["catch", "catch data", "harvest", "landings", "fish catch", "production"],
    category: "Statistics",
    icon: TrendingUp,
  },
  {
    title: "Industry Insights",
    description: "Reports and analysis of the fishing industry",
    url: "/statistics/insights",
    keywords: ["insights", "reports", "analysis", "trends", "industry reports"],
    category: "Statistics",
    icon: TrendingUp,
  },
  
  // Resources
  {
    title: "Publications",
    description: "Reports, newsletters, and publications",
    url: "/publications",
    keywords: ["publications", "reports", "newsletters", "documents", "papers"],
    category: "Resources",
    icon: BookOpen,
  },
  {
    title: "Forms & Documents",
    description: "Download application forms and required documents",
    url: "/resources/forms",
    keywords: ["forms", "documents", "downloads", "applications", "templates"],
    category: "Resources",
    icon: FileText,
  },
  {
    title: "Laws & Policies",
    description: "Fisheries laws, regulations, and policies",
    url: "/resources/policies",
    keywords: ["laws", "policies", "regulations", "legislation", "rules", "legal"],
    category: "Resources",
    icon: BookOpen,
  },
  {
    title: "Research",
    description: "Fisheries research and scientific studies",
    url: "/resources/research",
    keywords: ["research", "studies", "science", "scientific", "marine research"],
    category: "Resources",
    icon: BookOpen,
  },
  {
    title: "Partnerships",
    description: "International and local partnerships",
    url: "/resources/partnerships",
    keywords: ["partnerships", "partners", "collaboration", "international", "cooperation"],
    category: "Resources",
    icon: Briefcase,
  },
  {
    title: "FAQs",
    description: "Frequently asked questions and answers",
    url: "/resources/faq",
    keywords: ["faq", "faqs", "questions", "help", "answers", "support"],
    category: "Resources",
    icon: AlertCircle,
  },
  
  // News & Contact
  {
    title: "News & Events",
    description: "Latest news, announcements, and events",
    url: "/news",
    keywords: ["news", "events", "announcements", "updates", "press", "media"],
    category: "News",
    icon: FileText,
  },
  {
    title: "Contact Us",
    description: "Get in touch with NaFAA",
    url: "/contact",
    keywords: ["contact", "reach us", "get in touch", "phone", "email", "address", "location"],
    category: "Contact",
    icon: AlertCircle,
  },
  
  // Portal
  {
    title: "Client Portal",
    description: "Access your account and manage services online",
    url: "/portal",
    keywords: ["portal", "login", "account", "dashboard", "client portal", "my account"],
    category: "Portal",
    icon: Briefcase,
  },
];

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase().trim();
    
    return searchIndex
      .map(item => {
        let score = 0;
        
        // Exact title match (highest score)
        if (item.title.toLowerCase() === lowerQuery) {
          score += 100;
        }
        // Title contains query
        else if (item.title.toLowerCase().includes(lowerQuery)) {
          score += 50;
        }
        
        // Keyword exact match
        if (item.keywords.some(kw => kw === lowerQuery)) {
          score += 80;
        }
        
        // Keyword contains query
        const matchingKeywords = item.keywords.filter(kw => 
          kw.includes(lowerQuery) || lowerQuery.includes(kw)
        );
        score += matchingKeywords.length * 20;
        
        // Description contains query
        if (item.description.toLowerCase().includes(lowerQuery)) {
          score += 10;
        }
        
        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [query]);

  if (!query.trim()) {
    return (
      <div className="text-center py-12">
        <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-600">Enter a search term to find what you're looking for</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
        <p className="text-gray-600 mb-6">
          We couldn't find anything matching "<span className="font-semibold">{query}</span>"
        </p>
        <div className="max-w-md mx-auto text-left">
          <p className="text-sm text-gray-600 mb-2">Try searching for:</p>
          <ul className="text-sm text-nafaa-ocean space-y-1">
            <li>• Jobs, careers, or opportunities</li>
            <li>• Vessel registration or fishing licenses</li>
            <li>• Statistics, data, or reports</li>
            <li>• Contact information</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Search Results for "<span className="text-nafaa-ocean">{query}</span>"
        </h2>
        <p className="text-gray-600">
          Found {results.length} {results.length === 1 ? 'result' : 'results'}
        </p>
      </div>

      {results.map((result, index) => {
        const Icon = result.icon;
        return (
          <Link href={result.url} key={index}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-nafaa-ocean/10 rounded-lg">
                    <Icon className="h-6 w-6 text-nafaa-ocean" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl text-nafaa-ocean hover:underline">
                        {result.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {result.category}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {result.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-500">
                  {result.url}
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-nafaa-ocean-dark to-nafaa-ocean text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <Search className="h-8 w-8" />
            <h1 className="text-3xl md:text-4xl font-bold">Search</h1>
          </div>
          <p className="text-lg text-blue-100">
            Find information across the NaFAA website
          </p>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Suspense fallback={
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nafaa-ocean mx-auto"></div>
            </div>
          }>
            <SearchResults />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
