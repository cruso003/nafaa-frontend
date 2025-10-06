"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import {
  FileText,
  Download,
  Search,
  Filter,
  Calendar,
  Eye,
  BookOpen,
} from "lucide-react";

const publications = [
  {
    id: 1,
    title: "Annual Fisheries Report 2024",
    description: "Comprehensive overview of Liberia's fisheries sector performance, catch statistics, and industry trends for 2024.",
    category: "Annual Report",
    date: "December 2024",
    author: "NaFAA Research Division",
    pages: 85,
    size: "4.2 MB",
    downloads: 1234,
    featured: true,
  },
  {
    id: 2,
    title: "Sustainable Fishing Practices Guide",
    description: "Best practices and guidelines for sustainable and responsible fishing operations in Liberian waters.",
    category: "Guidelines",
    date: "September 2024",
    author: "NaFAA Technical Team",
    pages: 42,
    size: "3.1 MB",
    downloads: 2145,
    featured: true,
  },
  {
    id: 3,
    title: "Q3 2024 Market Analysis",
    description: "Quarterly analysis of fish market trends, pricing dynamics, and export opportunities.",
    category: "Market Report",
    date: "October 2024",
    author: "NaFAA Economics Unit",
    pages: 28,
    size: "1.8 MB",
    downloads: 856,
    featured: false,
  },
  {
    id: 4,
    title: "Species Conservation Status Report",
    description: "Assessment of conservation status for key commercial species in Liberian waters.",
    category: "Research",
    date: "July 2024",
    author: "NaFAA Conservation Team",
    pages: 58,
    size: "5.4 MB",
    downloads: 1567,
    featured: false,
  },
  {
    id: 5,
    title: "Fisheries Economic Impact Study",
    description: "Analysis of the economic contribution of fisheries sector to Liberia's GDP and employment.",
    category: "Economic Study",
    date: "June 2024",
    author: "NaFAA & World Bank",
    pages: 72,
    size: "3.8 MB",
    downloads: 943,
    featured: true,
  },
  {
    id: 6,
    title: "Vessel Safety Standards 2024",
    description: "Updated safety standards and requirements for fishing vessels operating in Liberian waters.",
    category: "Guidelines",
    date: "May 2024",
    author: "NaFAA Safety Division",
    pages: 35,
    size: "2.4 MB",
    downloads: 678,
    featured: false,
  },
  {
    id: 7,
    title: "Aquaculture Development Strategy",
    description: "Strategic plan for developing sustainable aquaculture industry in Liberia (2024-2030).",
    category: "Strategy Document",
    date: "April 2024",
    author: "NaFAA Aquaculture Unit",
    pages: 95,
    size: "6.2 MB",
    downloads: 534,
    featured: false,
  },
  {
    id: 8,
    title: "Illegal Fishing Prevention Report",
    description: "Analysis of IUU fishing activities and enforcement measures in Liberian waters.",
    category: "Compliance Report",
    date: "March 2024",
    author: "NaFAA Enforcement Team",
    pages: 48,
    size: "3.5 MB",
    downloads: 892,
    featured: false,
  },
];

const categories = [
  "All Categories",
  "Annual Report",
  "Guidelines",
  "Market Report",
  "Research",
  "Economic Study",
  "Strategy Document",
  "Compliance Report",
];

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("recent");

  const filteredPublications = publications
    .filter((pub) => {
      const matchesSearch =
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Categories" || pub.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "recent") return b.id - a.id;
      if (sortBy === "popular") return b.downloads - a.downloads;
      return a.title.localeCompare(b.title);
    });

  const featuredPublications = publications.filter((pub) => pub.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean to-nafaa-ocean text-white py-20">
        <div className="absolute inset-0 bg-[url('/waves-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <BookOpen className="mr-2 h-4 w-4" />
              Resource Library
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Publications & Reports
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Access research reports, guidelines, and industry publications from NaFAA
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search publications..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="title">Title (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Featured Publications */}
        {selectedCategory === "All Categories" && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-nafaa-ocean mb-6">Featured Publications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPublications.map((pub, index) => (
                <Card key={pub.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{pub.category}</Badge>
                      <Badge className="bg-amber-100 text-amber-700 border-amber-300">
                        Featured
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{pub.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {pub.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {pub.date}
                      </span>
                      <span>•</span>
                      <span>{pub.pages} pages</span>
                      <span>•</span>
                      <span>{pub.size}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-nafaa-ocean">
              {searchQuery || selectedCategory !== "All Categories"
                ? `Results (${filteredPublications.length})`
                : "All Publications"}
            </h2>
          </div>

          <div className="space-y-4">
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-8 w-8 text-blue-600" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start gap-2 mb-2">
                          <h3 className="text-lg font-semibold flex-1">{pub.title}</h3>
                          <Badge variant="outline">{pub.category}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{pub.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {pub.date}
                          </span>
                          <span>{pub.author}</span>
                          <span>{pub.pages} pages</span>
                          <span>{pub.size}</span>
                          <span className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {pub.downloads} downloads
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex md:flex-col gap-2 flex-shrink-0">
                        <Button variant="outline" size="sm" className="flex-1 md:flex-initial">
                          <Eye className="mr-2 h-4 w-4" />
                          Preview
                        </Button>
                        <Button size="sm" className="flex-1 md:flex-initial">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <Card className="py-12">
              <CardContent>
                <div className="text-center">
                  <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No publications found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean text-white">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Get Notified of New Publications
                  </h3>
                  <p className="text-blue-100">
                    Subscribe to receive email notifications when new reports and publications are released
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="flex-shrink-0">
                  Subscribe Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
