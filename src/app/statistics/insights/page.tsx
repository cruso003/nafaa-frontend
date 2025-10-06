"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  TrendingUp,
  ArrowLeft,
  Download,
  FileText,
  BarChart3,
  Calendar,
  Eye,
  AlertCircle,
} from "lucide-react";

const reports = [
  {
    title: "Annual Fisheries Report 2024",
    description: "Comprehensive overview of Liberia's fisheries sector performance",
    date: "December 2024",
    category: "Annual Report",
    pages: 85,
    downloads: 1234,
    size: "4.2 MB",
    format: "PDF",
  },
  {
    title: "Q3 2024 Market Analysis",
    description: "Quarterly analysis of fish market trends and pricing",
    date: "October 2024",
    category: "Market Analysis",
    pages: 28,
    downloads: 856,
    size: "1.8 MB",
    format: "PDF",
  },
  {
    title: "Sustainable Fishing Practices Guide",
    description: "Best practices for sustainable and responsible fishing",
    date: "September 2024",
    category: "Guidelines",
    pages: 42,
    downloads: 2145,
    size: "3.1 MB",
    format: "PDF",
  },
  {
    title: "Vessel Registration Trends 2019-2024",
    description: "5-year analysis of vessel registration patterns",
    date: "August 2024",
    category: "Trend Analysis",
    pages: 15,
    downloads: 678,
    size: "980 KB",
    format: "PDF",
  },
  {
    title: "Species Conservation Status Report",
    description: "Assessment of key commercial species conservation status",
    date: "July 2024",
    category: "Conservation",
    pages: 58,
    downloads: 1567,
    size: "5.4 MB",
    format: "PDF",
  },
  {
    title: "Fisheries Economic Impact Study",
    description: "Economic contribution of fisheries to national GDP",
    date: "June 2024",
    category: "Economic Analysis",
    pages: 72,
    downloads: 943,
    size: "3.8 MB",
    format: "PDF",
  },
];

const insights = [
  {
    title: "Commercial Fishing Growth",
    description: "Commercial fishing licenses increased by 8.3% compared to last year, driven by new vessels in the 10-15m category.",
    impact: "positive",
    metric: "+8.3%",
    icon: TrendingUp,
  },
  {
    title: "Sustainable Catch Levels",
    description: "All major species remain within sustainable catch limits according to scientific assessments.",
    impact: "positive",
    metric: "100%",
    icon: BarChart3,
  },
  {
    title: "Artisanal Sector Support",
    description: "820 artisanal vessels now registered, up from 760 last year, following new support programs.",
    impact: "positive",
    metric: "+7.9%",
    icon: TrendingUp,
  },
  {
    title: "Export Market Expansion",
    description: "Fish exports increased to 12 countries, with EU and Asian markets showing strongest growth.",
    impact: "positive",
    metric: "12 Markets",
    icon: TrendingUp,
  },
];

const keyFindings = [
  {
    title: "Market Trends",
    items: [
      "Tuna prices increased 12% due to high international demand",
      "Local snapper market remains stable with consistent pricing",
      "Shrimp exports show 15% growth, highest in 5 years",
    ],
  },
  {
    title: "Sustainability",
    items: [
      "All commercial species within safe biological limits",
      "Bycatch reduction measures showing positive results",
      "Marine protected areas show 25% increase in fish stocks",
    ],
  },
  {
    title: "Industry Development",
    items: [
      "42 new vessel registrations in first half of 2024",
      "Training programs reached 350 fishermen this year",
      "Cold storage capacity increased by 30% in coastal areas",
    ],
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white py-12">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 mb-4"
            asChild
          >
            <Link href="/statistics">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Statistics
            </Link>
          </Button>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Industry Insights & Reports
              </h1>
              <p className="text-xl text-purple-100">
                Market analysis, trends, and downloadable research reports
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-nafaa-ocean mb-6">Key Insights 2024</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-purple-600" />
                        </div>
                        <Badge className="bg-green-100 text-green-700 border-green-300">
                          {insight.metric}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{insight.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{insight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Findings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-nafaa-ocean mb-6">Key Findings</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {keyFindings.map((finding, index) => (
              <Card key={finding.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{finding.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {finding.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Reports & Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-nafaa-ocean">Reports & Publications</h2>
            <Button variant="outline" asChild>
              <Link href="/publications">View All Publications</Link>
            </Button>
          </div>

          <div className="space-y-6">
            {reports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-8 w-8 text-purple-600" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{report.title}</h3>
                          <Badge variant="outline">{report.category}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {report.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            {report.pages} pages
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {report.downloads} downloads
                          </span>
                          <span>{report.size} • {report.format}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 flex-shrink-0">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          Preview
                        </Button>
                        <Button size="sm">
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

        {/* Data Request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Need Custom Data or Analysis?</h3>
                    <p className="text-purple-100">
                      Request specific datasets, custom reports, or detailed analysis for research or business purposes.
                    </p>
                  </div>
                </div>
                <Button size="lg" variant="secondary" asChild className="flex-shrink-0">
                  <Link href="/contact">Request Data</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
