"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  FileText,
  Download,
  Search,
  Scale,
  Shield,
  Globe,
  BookOpen,
  Eye,
} from "lucide-react";

const policyCategories = [
  {
    id: "fisheries-laws",
    title: "Fisheries Laws & Regulations",
    icon: Scale,
    color: "blue",
    description: "National laws governing fishing activities in Liberian waters",
    documents: [
      {
        id: 1,
        title: "Liberian Fisheries and Aquaculture Act 2019",
        description: "Principal legislation governing all fishing and aquaculture activities in Liberia",
        effectiveDate: "January 2020",
        category: "Primary Legislation",
        pages: 125,
        size: "8.5 MB",
        version: "Consolidated 2024",
      },
      {
        id: 2,
        title: "Commercial Fishing Regulations 2024",
        description: "Detailed regulations for commercial fishing operations and licensing requirements",
        effectiveDate: "January 2024",
        category: "Regulation",
        pages: 78,
        size: "4.2 MB",
        version: "v3.0",
      },
      {
        id: 3,
        title: "Artisanal Fishing Guidelines",
        description: "Guidelines and regulations specific to small-scale and artisanal fishing",
        effectiveDate: "March 2023",
        category: "Guidelines",
        pages: 42,
        size: "2.8 MB",
        version: "v2.1",
      },
      {
        id: 4,
        title: "Fish Processing Standards",
        description: "Standards and requirements for fish processing facilities and operations",
        effectiveDate: "June 2023",
        category: "Standards",
        pages: 56,
        size: "3.5 MB",
        version: "v1.5",
      },
    ],
  },
  {
    id: "environmental",
    title: "Environmental & Conservation Policies",
    icon: Shield,
    color: "green",
    description: "Policies protecting marine ecosystems and promoting sustainable fishing",
    documents: [
      {
        id: 5,
        title: "Marine Protected Areas Policy",
        description: "Framework for designation and management of marine protected areas",
        effectiveDate: "September 2022",
        category: "Conservation Policy",
        pages: 68,
        size: "4.8 MB",
        version: "v2.0",
      },
      {
        id: 6,
        title: "Sustainable Fishing Practices Directive",
        description: "Mandatory practices for environmentally sustainable fishing operations",
        effectiveDate: "May 2023",
        category: "Directive",
        pages: 45,
        size: "3.2 MB",
        version: "v1.8",
      },
      {
        id: 7,
        title: "By-Catch Reduction Guidelines",
        description: "Requirements and best practices for minimizing by-catch",
        effectiveDate: "November 2023",
        category: "Guidelines",
        pages: 38,
        size: "2.5 MB",
        version: "v1.3",
      },
      {
        id: 8,
        title: "Endangered Species Protection Act",
        description: "Protection measures for threatened and endangered marine species",
        effectiveDate: "July 2021",
        category: "Legislation",
        pages: 52,
        size: "3.8 MB",
        version: "Amended 2023",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety & Compliance",
    icon: Shield,
    color: "red",
    description: "Safety standards and compliance requirements for fishing operations",
    documents: [
      {
        id: 9,
        title: "Vessel Safety Standards 2024",
        description: "Comprehensive safety requirements for all classes of fishing vessels",
        effectiveDate: "January 2024",
        category: "Standards",
        pages: 95,
        size: "6.2 MB",
        version: "v4.0",
      },
      {
        id: 10,
        title: "Crew Training and Certification Requirements",
        description: "Mandatory training and certification for fishing vessel crew members",
        effectiveDate: "August 2023",
        category: "Regulation",
        pages: 62,
        size: "4.1 MB",
        version: "v2.5",
      },
      {
        id: 11,
        title: "Emergency Response Procedures",
        description: "Protocols for handling emergencies at sea and accident reporting",
        effectiveDate: "April 2023",
        category: "Procedures",
        pages: 48,
        size: "3.3 MB",
        version: "v1.9",
      },
      {
        id: 12,
        title: "Inspection and Enforcement Guidelines",
        description: "Guidelines for vessel inspections and compliance enforcement",
        effectiveDate: "October 2023",
        category: "Guidelines",
        pages: 71,
        size: "4.7 MB",
        version: "v2.2",
      },
    ],
  },
  {
    id: "international",
    title: "International Agreements",
    icon: Globe,
    color: "purple",
    description: "International treaties and regional fisheries agreements",
    documents: [
      {
        id: 13,
        title: "ECOWAS Fisheries Protocol",
        description: "Regional cooperation agreement for West African fisheries management",
        effectiveDate: "March 2020",
        category: "Regional Agreement",
        pages: 84,
        size: "5.5 MB",
        version: "2024 Edition",
      },
      {
        id: 14,
        title: "Port State Measures Agreement Implementation",
        description: "Implementation of FAO Port State Measures Agreement in Liberian ports",
        effectiveDate: "June 2022",
        category: "International Treaty",
        pages: 58,
        size: "3.9 MB",
        version: "v1.5",
      },
      {
        id: 15,
        title: "IUU Fishing Prevention Framework",
        description: "Framework for preventing illegal, unreported, and unregulated fishing",
        effectiveDate: "December 2021",
        category: "Framework",
        pages: 76,
        size: "5.1 MB",
        version: "v2.1",
      },
    ],
  },
];

export default function PoliciesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = policyCategories.map((category) => ({
    ...category,
    documents: category.documents.filter(
      (doc) =>
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.category.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.documents.length > 0);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; badge: string }> = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        badge: "bg-blue-100 text-blue-700 border-blue-300",
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        badge: "bg-green-100 text-green-700 border-green-300",
      },
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        badge: "bg-red-100 text-red-700 border-red-300",
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        badge: "bg-purple-100 text-purple-700 border-purple-300",
      },
    };
    return colors[color] || colors.blue;
  };

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
              Legal Framework
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Policies & Regulations
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Access laws, regulations, and policy documents governing Liberia's fisheries sector
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search policies and regulations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Policy Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`h-7 w-7 ${colors.text}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-nafaa-ocean mb-1">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.documents.map((doc, docIndex) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: docIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex flex-col md:flex-row gap-6">
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                              <FileText className={`h-8 w-8 ${colors.text}`} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-start gap-2 mb-2">
                                <h3 className="text-lg font-semibold flex-1">{doc.title}</h3>
                                <Badge className={colors.badge}>{doc.category}</Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                              <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                                <span className="font-medium">Effective: {doc.effectiveDate}</span>
                                <span>•</span>
                                <span>{doc.version}</span>
                                <span>•</span>
                                <span>{doc.pages} pages</span>
                                <span>•</span>
                                <span>{doc.size}</span>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex md:flex-col gap-2 flex-shrink-0">
                              <Button variant="outline" size="sm" className="flex-1 md:flex-initial">
                                <Eye className="mr-2 h-4 w-4" />
                                View
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
              </motion.div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="py-12">
              <CardContent>
                <div className="text-center">
                  <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No policies found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Legal Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="border-amber-300 bg-amber-50">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Scale className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">Legal Notice</h3>
                  <p className="text-sm text-amber-800">
                    While we strive to keep all policy documents up to date, these documents are provided
                    for informational purposes only. For official legal purposes, please consult the
                    official Government of Liberia publications or contact NaFAA directly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
