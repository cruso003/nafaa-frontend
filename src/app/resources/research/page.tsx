"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  FileText,
  Download,
  Search,
  Microscope,
  TrendingUp,
  Fish,
  BarChart3,
  Eye,
  Calendar,
} from "lucide-react";

const researchStudies = [
  {
    id: 1,
    title: "Stock Assessment of Yellowfin Tuna in Liberian Waters",
    description: "Comprehensive population analysis and sustainability assessment of yellowfin tuna stocks",
    category: "Stock Assessment",
    field: "Marine Biology",
    authors: ["Dr. Sarah Johnson", "Dr. Kwame Mensah", "Dr. Lisa Chen"],
    institution: "NaFAA Research Division & University of Liberia",
    publishDate: "December 2024",
    pages: 142,
    size: "7.8 MB",
    citations: 12,
    featured: true,
  },
  {
    id: 2,
    title: "Economic Impact of Artisanal Fishing on Coastal Communities",
    description: "Socioeconomic study examining the contribution of small-scale fishing to livelihoods",
    category: "Economic Study",
    field: "Fisheries Economics",
    authors: ["Dr. James Smith", "Prof. Mary Dolo"],
    institution: "World Bank & NaFAA",
    publishDate: "November 2024",
    pages: 96,
    size: "5.2 MB",
    citations: 28,
    featured: true,
  },
  {
    id: 3,
    title: "Climate Change Effects on West African Fish Stocks",
    description: "Analysis of how climate variability affects fish distribution and abundance",
    category: "Climate Research",
    field: "Environmental Science",
    authors: ["Dr. Ahmed Hassan", "Dr. Patricia Williams"],
    institution: "ECOWAS Research Center",
    publishDate: "October 2024",
    pages: 118,
    size: "6.5 MB",
    citations: 45,
    featured: true,
  },
  {
    id: 4,
    title: "Sustainable Aquaculture Practices in Liberia",
    description: "Research on environmentally sustainable aquaculture methods for Liberian conditions",
    category: "Aquaculture",
    field: "Aquaculture Science",
    authors: ["Dr. Michael Brown", "Dr. Grace Kollie"],
    institution: "NaFAA Aquaculture Unit",
    publishDate: "September 2024",
    pages: 87,
    size: "4.9 MB",
    citations: 18,
    featured: false,
  },
  {
    id: 5,
    title: "By-Catch Mitigation Strategies for Trawl Fisheries",
    description: "Evaluation of gear modifications to reduce unintended catch in trawl operations",
    category: "Conservation",
    field: "Fisheries Technology",
    authors: ["Dr. Robert Taylor", "Dr. Emmanuel Clarke"],
    institution: "FAO & NaFAA",
    publishDate: "August 2024",
    pages: 64,
    size: "3.8 MB",
    citations: 22,
    featured: false,
  },
  {
    id: 6,
    title: "Marine Protected Areas Effectiveness Study",
    description: "Assessment of biodiversity and fish stock recovery in Liberia's MPAs",
    category: "Conservation",
    field: "Marine Biology",
    authors: ["Dr. Jennifer Lee", "Dr. Moses Tarr"],
    institution: "Conservation International",
    publishDate: "July 2024",
    pages: 105,
    size: "6.1 MB",
    citations: 34,
    featured: false,
  },
  {
    id: 7,
    title: "Traditional Fishing Knowledge Systems",
    description: "Documentation of indigenous fishing knowledge and practices in coastal Liberia",
    category: "Ethnography",
    field: "Social Science",
    authors: ["Dr. David Wilson", "Dr. Comfort Jallah"],
    institution: "University of Liberia",
    publishDate: "June 2024",
    pages: 128,
    size: "5.7 MB",
    citations: 15,
    featured: false,
  },
  {
    id: 8,
    title: "Post-Harvest Loss Reduction in Fish Supply Chains",
    description: "Study on improving preservation and reducing waste in artisanal fish supply chains",
    category: "Post-Harvest",
    field: "Food Science",
    authors: ["Dr. Susan Martinez", "Dr. Joseph Boakai"],
    institution: "FAO Regional Office",
    publishDate: "May 2024",
    pages: 72,
    size: "4.3 MB",
    citations: 20,
    featured: false,
  },
];

const categories = [
  "All Categories",
  "Stock Assessment",
  "Economic Study",
  "Climate Research",
  "Aquaculture",
  "Conservation",
  "Ethnography",
  "Post-Harvest",
];

const fields = [
  "All Fields",
  "Marine Biology",
  "Fisheries Economics",
  "Environmental Science",
  "Aquaculture Science",
  "Fisheries Technology",
  "Social Science",
  "Food Science",
];

export default function ResearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedField, setSelectedField] = useState("All Fields");
  const [sortBy, setSortBy] = useState("recent");

  const filteredStudies = researchStudies
    .filter((study) => {
      const matchesSearch =
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.authors.some((author) => author.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory =
        selectedCategory === "All Categories" || study.category === selectedCategory;
      const matchesField =
        selectedField === "All Fields" || study.field === selectedField;
      return matchesSearch && matchesCategory && matchesField;
    })
    .sort((a, b) => {
      if (sortBy === "recent") return b.id - a.id;
      if (sortBy === "citations") return b.citations - a.citations;
      return a.title.localeCompare(b.title);
    });

  const featuredStudies = researchStudies.filter((study) => study.featured);

  const getFieldIcon = (field: string) => {
    const icons: Record<string, any> = {
      "Marine Biology": Fish,
      "Fisheries Economics": TrendingUp,
      "Environmental Science": Microscope,
      "Aquaculture Science": Fish,
      "Fisheries Technology": BarChart3,
      "Social Science": FileText,
      "Food Science": FileText,
    };
    return icons[field] || FileText;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002868] via-[#0066CC] to-[#002868] text-white py-20">
        <div className="absolute inset-0 bg-[url('/waves-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Microscope className="mr-2 h-4 w-4" />
              Research Library
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Research & Studies
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Access scientific research and studies on Liberia's fisheries and marine resources
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
              <div className="grid md:grid-cols-5 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by title, author, or keyword..."
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
                <Select value={selectedField} onValueChange={setSelectedField}>
                  <SelectTrigger>
                    <SelectValue placeholder="Research Field" />
                  </SelectTrigger>
                  <SelectContent>
                    {fields.map((field) => (
                      <SelectItem key={field} value={field}>
                        {field}
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
                    <SelectItem value="citations">Most Cited</SelectItem>
                    <SelectItem value="title">Title (A-Z)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Featured Research */}
        {selectedCategory === "All Categories" && selectedField === "All Fields" && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#002868] mb-6">Featured Research</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredStudies.map((study) => {
                const FieldIcon = getFieldIcon(study.field);
                return (
                  <Card key={study.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center">
                          <FieldIcon className="h-4 w-4 text-blue-600" />
                        </div>
                        <Badge variant="secondary">{study.category}</Badge>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {study.description}
                      </p>
                      <div className="text-xs text-gray-500 mb-3">
                        <p className="mb-1">{study.authors.slice(0, 2).join(", ")}</p>
                        <p className="text-[#0066CC]">{study.institution}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {study.publishDate}
                        </span>
                        <span>•</span>
                        <span>{study.citations} citations</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* All Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#002868]">
              {searchQuery || selectedCategory !== "All Categories" || selectedField !== "All Fields"
                ? `Results (${filteredStudies.length})`
                : "All Research"}
            </h2>
          </div>

          <div className="space-y-4">
            {filteredStudies.map((study, index) => {
              const FieldIcon = getFieldIcon(study.field);
              return (
                <motion.div
                  key={study.id}
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
                          <FieldIcon className="h-8 w-8 text-blue-600" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start gap-2 mb-2">
                            <h3 className="text-lg font-semibold flex-1">{study.title}</h3>
                            <Badge variant="outline">{study.category}</Badge>
                            <Badge className="bg-purple-100 text-purple-700 border-purple-300">
                              {study.field}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{study.description}</p>
                          <div className="text-xs text-gray-500 mb-2">
                            <p className="mb-1">
                              <span className="font-medium">Authors:</span> {study.authors.join(", ")}
                            </p>
                            <p className="text-[#0066CC]">{study.institution}</p>
                          </div>
                          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {study.publishDate}
                            </span>
                            <span>{study.pages} pages</span>
                            <span>{study.size}</span>
                            <span className="font-medium">{study.citations} citations</span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex md:flex-col gap-2 flex-shrink-0">
                          <Button variant="outline" size="sm" className="flex-1 md:flex-initial">
                            <Eye className="mr-2 h-4 w-4" />
                            View Abstract
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
              );
            })}
          </div>

          {filteredStudies.length === 0 && (
            <Card className="py-12">
              <CardContent>
                <div className="text-center">
                  <Microscope className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No research found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Submit Research CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-[#002868] to-[#0066CC] text-white">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Submit Your Research</h3>
                  <p className="text-blue-100">
                    Researchers can submit studies for inclusion in our research library
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="flex-shrink-0">
                  Submit Research
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
