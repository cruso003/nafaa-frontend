"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

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

export function PublicationsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nafaa-ocean mb-4">
            Publications & Reports
          </h2>
          <p className="text-lg text-slate-600">
            Access our latest reports, policy documents, and research publications.
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardHeader>
                  {/* Document Icon */}
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <div className="flex gap-2 mb-2 flex-wrap">
                    <Badge variant="secondary">{pub.type}</Badge>
                    <Badge variant="outline">{pub.year}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{pub.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div className="flex justify-between">
                      <span>{pub.pages}</span>
                      <span>{pub.size}</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      {pub.downloads.toLocaleString()} downloads
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-[#00A86B] hover:bg-[#008556] text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Link href="/publications">
            <Button
              size="lg"
              variant="outline"
              className="border-nafaa-ocean text-nafaa-ocean hover:bg-nafaa-ocean hover:text-white"
            >
              View All Publications
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
