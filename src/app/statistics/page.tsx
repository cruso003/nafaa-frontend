"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  Ship,
  Fish,
  Users,
  DollarSign,
  ArrowRight,
  Download,
  Calendar,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Mock data for charts
const monthlyData = [
  { month: "Jan", catch: 1200, vessels: 450, revenue: 85000 },
  { month: "Feb", catch: 1400, vessels: 480, revenue: 92000 },
  { month: "Mar", catch: 1600, vessels: 520, revenue: 98000 },
  { month: "Apr", catch: 1350, vessels: 495, revenue: 88000 },
  { month: "May", catch: 1800, vessels: 540, revenue: 105000 },
  { month: "Jun", catch: 2100, vessels: 580, revenue: 118000 },
];

const vesselTypeData = [
  { name: "Commercial", value: 380, color: "#002868" },
  { name: "Artisanal", value: 820, color: "#0066CC" },
  { name: "Recreational", value: 245, color: "#00A86B" },
  { name: "Processing", value: 95, color: "#C60C30" },
];

const topSpeciesData = [
  { species: "Tuna", catch: 3500 },
  { species: "Snapper", catch: 2800 },
  { species: "Grouper", catch: 2100 },
  { species: "Barracuda", catch: 1600 },
  { species: "Shrimp", catch: 1200 },
];

const keyMetrics = [
  {
    title: "Total Catch",
    value: "9,450",
    unit: "metric tons",
    change: "+12.5%",
    trend: "up",
    icon: Fish,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Active Vessels",
    value: "1,540",
    unit: "registered",
    change: "+8.3%",
    trend: "up",
    icon: Ship,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "License Holders",
    value: "2,340",
    unit: "active licenses",
    change: "+5.7%",
    trend: "up",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Revenue",
    value: "$586K",
    unit: "YTD 2024",
    change: "+15.2%",
    trend: "up",
    icon: DollarSign,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

const statisticsCategories = [
  {
    title: "Vessel Statistics",
    description: "Registered vessels by type, size, and region",
    href: "/statistics/vessels",
    icon: Ship,
    color: "bg-blue-500",
    metrics: ["1,540 Total Vessels", "380 Commercial", "820 Artisanal"],
  },
  {
    title: "Catch Data",
    description: "Fish catch data by species, region, and trends",
    href: "/statistics/catch-data",
    icon: Fish,
    color: "bg-green-500",
    metrics: ["9,450 MT Total", "42 Species", "6 Regions"],
  },
  {
    title: "Industry Insights",
    description: "Market analysis, trends, and downloadable reports",
    href: "/statistics/insights",
    icon: TrendingUp,
    color: "bg-purple-500",
    metrics: ["24 Reports", "Monthly Updates", "Export Data"],
  },
];

export default function StatisticsPage() {
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
              <BarChart3 className="mr-2 h-4 w-4" />
              Public Dashboard
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Fisheries Statistics & Data
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transparent data on Liberia's fisheries sector - catch reports, vessel statistics, and industry insights
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#dashboard">
                  View Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Reports
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section id="dashboard" className="py-12 -mt-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="shadow-lg">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center`}>
                          <Icon className={`h-6 w-6 ${metric.color}`} />
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {metric.change}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
                      <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                      <p className="text-xs text-gray-500">{metric.unit}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Monthly Catch Trend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Catch Trend (2024)</CardTitle>
                  <p className="text-sm text-gray-600">Total catch in metric tons</p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="catch" 
                        stroke="#0066CC" 
                        strokeWidth={3}
                        name="Catch (MT)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vessel Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Vessel Distribution by Type</CardTitle>
                  <p className="text-sm text-gray-600">Total: 1,540 vessels</p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={vesselTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={(entry: any) => {
                          const total = vesselTypeData.reduce((sum, item) => sum + item.value, 0);
                          const percent = ((entry.value / total) * 100).toFixed(0);
                          return `${entry.name} ${percent}%`;
                        }}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {vesselTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Top Species */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Top 5 Species by Catch</CardTitle>
                  <p className="text-sm text-gray-600">Year to date 2024</p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={topSpeciesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="species" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="catch" fill="#00A86B" name="Catch (MT)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Revenue Trend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Revenue</CardTitle>
                  <p className="text-sm text-gray-600">License and registration fees (USD)</p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="revenue" fill="#C60C30" name="Revenue ($)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002868] mb-4">
              Explore Detailed Statistics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dive deeper into specific areas of fisheries data and insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {statisticsCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-lg ${category.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="mb-2">{category.title}</CardTitle>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {category.metrics.map((metric, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                            {metric}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" asChild>
                        <Link href={category.href}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Update Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Data Updates</h3>
                    <p className="text-sm text-gray-700">
                      Last updated: <strong>December 1, 2024</strong> | Next update: December 15, 2024
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Statistics are updated bi-weekly based on submitted catch reports and vessel registrations
                    </p>
                  </div>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/contact">Request Custom Report</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
