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
  FileCheck,
  ClipboardList,
  Ship,
  CreditCard,
} from "lucide-react";

const formCategories = [
  {
    id: "vessel",
    title: "Vessel Forms",
    icon: Ship,
    color: "blue",
    forms: [
      {
        id: 1,
        title: "Vessel Registration Application",
        description: "Initial registration form for new fishing vessels",
        format: ["PDF", "Word"],
        version: "v2.3",
        updated: "Dec 2024",
        size: "245 KB",
      },
      {
        id: 2,
        title: "Vessel Transfer Form",
        description: "Transfer vessel ownership documentation",
        format: ["PDF", "Word"],
        version: "v1.8",
        updated: "Nov 2024",
        size: "180 KB",
      },
      {
        id: 3,
        title: "Vessel Modification Request",
        description: "Request approval for vessel modifications",
        format: ["PDF"],
        version: "v1.5",
        updated: "Oct 2024",
        size: "210 KB",
      },
      {
        id: 4,
        title: "Vessel Decommission Form",
        description: "Form for deregistering a vessel",
        format: ["PDF", "Word"],
        version: "v1.2",
        updated: "Sep 2024",
        size: "165 KB",
      },
    ],
  },
  {
    id: "license",
    title: "License Forms",
    icon: FileCheck,
    color: "green",
    forms: [
      {
        id: 5,
        title: "Commercial License Application",
        description: "Application form for commercial fishing license",
        format: ["PDF", "Word"],
        version: "v3.1",
        updated: "Dec 2024",
        size: "320 KB",
      },
      {
        id: 6,
        title: "Artisanal License Application",
        description: "Application form for artisanal fishing license",
        format: ["PDF", "Word"],
        version: "v3.1",
        updated: "Dec 2024",
        size: "285 KB",
      },
      {
        id: 7,
        title: "Recreational License Application",
        description: "Application form for recreational fishing license",
        format: ["PDF", "Word"],
        version: "v2.5",
        updated: "Nov 2024",
        size: "195 KB",
      },
      {
        id: 8,
        title: "License Renewal Form",
        description: "Simplified renewal form for existing licenses",
        format: ["PDF", "Word"],
        version: "v2.8",
        updated: "Dec 2024",
        size: "210 KB",
      },
      {
        id: 9,
        title: "License Amendment Request",
        description: "Request changes to existing license details",
        format: ["PDF"],
        version: "v1.4",
        updated: "Oct 2024",
        size: "175 KB",
      },
    ],
  },
  {
    id: "reporting",
    title: "Reporting Forms",
    icon: ClipboardList,
    color: "orange",
    forms: [
      {
        id: 10,
        title: "Monthly Catch Report",
        description: "Mandatory monthly catch reporting form",
        format: ["PDF", "Excel"],
        version: "v4.2",
        updated: "Dec 2024",
        size: "340 KB",
      },
      {
        id: 11,
        title: "Incident Report Form",
        description: "Report fishing incidents or accidents",
        format: ["PDF", "Word"],
        version: "v2.1",
        updated: "Nov 2024",
        size: "220 KB",
      },
      {
        id: 12,
        title: "By-Catch Reporting Form",
        description: "Report non-target species caught",
        format: ["PDF", "Excel"],
        version: "v1.9",
        updated: "Oct 2024",
        size: "265 KB",
      },
      {
        id: 13,
        title: "Gear Loss Notification",
        description: "Report lost fishing gear or equipment",
        format: ["PDF"],
        version: "v1.3",
        updated: "Sep 2024",
        size: "145 KB",
      },
    ],
  },
  {
    id: "payment",
    title: "Payment Forms",
    icon: CreditCard,
    color: "purple",
    forms: [
      {
        id: 14,
        title: "Payment Receipt Template",
        description: "Standard receipt for NaFAA transactions",
        format: ["PDF"],
        version: "v2.0",
        updated: "Dec 2024",
        size: "125 KB",
      },
      {
        id: 15,
        title: "Fee Waiver Request",
        description: "Request waiver or reduction of fees",
        format: ["PDF", "Word"],
        version: "v1.7",
        updated: "Nov 2024",
        size: "190 KB",
      },
      {
        id: 16,
        title: "Payment Plan Application",
        description: "Apply for installment payment plan",
        format: ["PDF", "Word"],
        version: "v1.5",
        updated: "Oct 2024",
        size: "205 KB",
      },
    ],
  },
];

export default function FormsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = formCategories.map((category) => ({
    ...category,
    forms: category.forms.filter(
      (form) =>
        form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        form.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.forms.length > 0);

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
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        badge: "bg-orange-100 text-orange-700 border-orange-300",
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
              <FileText className="mr-2 h-4 w-4" />
              Downloadable Forms
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Forms & Applications
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Download the forms you need for vessel registration, licensing, reporting, and payments
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
                  placeholder="Search forms by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Form Categories */}
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
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center`}>
                    <IconComponent className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#002868]">{category.title}</h2>
                    <p className="text-gray-600">{category.forms.length} forms available</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.forms.map((form, formIndex) => (
                    <motion.div
                      key={form.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: formIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <Badge className={colors.badge}>{form.version}</Badge>
                            <div className="flex gap-1">
                              {form.format.map((fmt) => (
                                <Badge key={fmt} variant="outline" className="text-xs">
                                  {fmt}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <CardTitle className="text-lg line-clamp-2">{form.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {form.description}
                          </p>
                          <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                            <span>Updated {form.updated}</span>
                            <span>•</span>
                            <span>{form.size}</span>
                          </div>
                          <div className="flex gap-2">
                            {form.format.map((fmt) => (
                              <Button key={fmt} size="sm" variant="outline" className="flex-1">
                                <Download className="mr-2 h-4 w-4" />
                                {fmt}
                              </Button>
                            ))}
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
                  <h3 className="text-lg font-semibold mb-2">No forms found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search criteria
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Help Section */}
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
                  <h3 className="text-xl font-bold mb-2">Need Help Filling Out Forms?</h3>
                  <p className="text-blue-100">
                    Contact our support team for assistance with any forms or applications
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="flex-shrink-0">
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
