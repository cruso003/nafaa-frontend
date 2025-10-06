"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, FileText, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// SAME news data as the original (first 4)
const newsItems = [
  {
    id: 1,
    title: "New Sustainable Fishing Regulations Announced",
    excerpt: "NaFAA introduces comprehensive measures to protect marine biodiversity and ensure long-term sustainability of fish stocks.",
    category: "Policy",
    date: "2024-01-15",
    image: "/hero-image.png",
  },
  {
    id: 2,
    title: "Fisheries Revenue Reaches Record High",
    excerpt: "Annual report shows 25% increase in licensing fees and improved compliance across all coastal regions.",
    category: "Economics",
    date: "2024-01-10",
    image: "/hero-image.png",
  },
  {
    id: 3,
    title: "Training Program for Local Fishermen Launched",
    excerpt: "New initiative provides modern techniques and safety training to over 500 fishing communities nationwide.",
    category: "Education",
    date: "2024-01-05",
    image: "/hero-image.png",
  },
  {
    id: 4,
    title: "Port Infrastructure Modernization Complete",
    excerpt: "State-of-the-art facilities now operational at major fishing ports, enhancing safety and efficiency.",
    category: "Infrastructure",
    date: "2023-12-28",
    image: "/hero-image.png",
  },
];

// SAME publications data as the original
const publications = [
  {
    title: "Annual Fisheries Report 2024",
    type: "Annual Report",
    year: "2024",
    pages: "124 pages",
    size: "8.5 MB",
    downloads: 2450,
  },
  {
    title: "Sustainable Aquaculture Policy Framework",
    type: "Policy Document",
    year: "2024",
    pages: "45 pages",
    size: "2.1 MB",
    downloads: 1820,
  },
  {
    title: "Coastal Zone Management Guidelines",
    type: "Guidelines",
    year: "2024",
    pages: "68 pages",
    size: "4.3 MB",
    downloads: 1560,
  },
  {
    title: "Fish Stock Assessment Report",
    type: "Research Report",
    year: "2024",
    pages: "92 pages",
    size: "6.7 MB",
    downloads: 990,
  },
];

export function NewsPublicationsTabs() {
  const [activeTab, setActiveTab] = useState<"news" | "publications">("news");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header with Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nafaa-ocean mb-6">
            Latest Updates
          </h2>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("news")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "news"
                  ? "bg-nafaa-ocean text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              News & Announcements
            </button>
            <button
              onClick={() => setActiveTab("publications")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "publications"
                  ? "bg-nafaa-ocean text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Publications & Reports
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        {activeTab === "news" ? (
          <div className="grid md:grid-cols-2 gap-6">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-nafaa-ocean text-white">
                          {item.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-nafaa-ocean transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>

                      <Link
                        href={`/news/${item.id}`}
                        className="inline-flex items-center gap-2 text-nafaa-ocean font-semibold hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    {/* Document Icon */}
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-nafaa-ocean transition-colors">
                      {pub.title}
                    </h3>

                    {/* Type Badge */}
                    <Badge variant="secondary" className="mb-4">
                      {pub.type}
                    </Badge>

                    {/* Metadata */}
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex justify-between">
                        <span>Year:</span>
                        <span className="font-semibold">{pub.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Size:</span>
                        <span className="font-semibold">{pub.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Downloads:</span>
                        <span className="font-semibold">{pub.downloads.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Download Button */}
                    <button className="w-full flex items-center justify-center gap-2 py-2 bg-nafaa-ocean text-white rounded-lg hover:bg-nafaa-ocean-dark transition-colors">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href={activeTab === "news" ? "/news" : "/publications"}
            className="text-nafaa-ocean hover:text-nafaa-ocean-dark font-semibold inline-flex items-center gap-2"
          >
            View All {activeTab === "news" ? "News" : "Publications"}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
