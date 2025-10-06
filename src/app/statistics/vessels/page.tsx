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
import Link from "next/link";
import {
  Ship,
  ArrowLeft,
  Filter,
  Download,
  TrendingUp,
  MapPin,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
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

const vesselsByType = [
  { type: "Commercial", count: 380, percentage: 24.7 },
  { type: "Artisanal", count: 820, percentage: 53.2 },
  { type: "Recreational", count: 245, percentage: 15.9 },
  { type: "Processing", count: 95, percentage: 6.2 },
];

const vesselsByRegion = [
  { region: "Montserrado", vessels: 520, color: "#002868" },
  { region: "Grand Bassa", vessels: 280, color: "#0066CC" },
  { region: "Sinoe", vessels: 240, color: "#00A86B" },
  { region: "Maryland", vessels: 190, color: "#C60C30" },
  { region: "Grand Kru", vessels: 160, color: "#F97316" },
  { region: "Others", vessels: 150, color: "#8B5CF6" },
];

const vesselTrendData = [
  { year: "2019", commercial: 320, artisanal: 680, recreational: 180 },
  { year: "2020", commercial: 340, artisanal: 720, recreational: 200 },
  { year: "2021", commercial: 355, artisanal: 760, recreational: 215 },
  { year: "2022", commercial: 365, artisanal: 790, recreational: 230 },
  { year: "2023", commercial: 375, artisanal: 810, recreational: 240 },
  { year: "2024", commercial: 380, artisanal: 820, recreational: 245 },
];

const vesselsBySizeData = [
  { size: "<5m", count: 650 },
  { size: "5-10m", count: 480 },
  { size: "10-15m", count: 240 },
  { size: "15-20m", count: 120 },
  { size: ">20m", count: 50 },
];

const vesselStats = [
  { label: "Total Registered", value: "1,540", change: "+8.3%" },
  { label: "Active This Month", value: "1,328", change: "+5.2%" },
  { label: "New Registrations", value: "42", change: "+12.5%" },
  { label: "Avg Age", value: "8.5 yrs", change: "-2.1%" },
];

export default function VesselStatisticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#002868] to-[#0066CC] text-white py-12">
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
              <Ship className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Vessel Statistics
              </h1>
              <p className="text-xl text-blue-100">
                Comprehensive data on registered fishing vessels in Liberia
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filter Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Vessel Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="artisanal">Artisanal</SelectItem>
                    <SelectItem value="recreational">Recreational</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    {vesselsByRegion.map((r) => (
                      <SelectItem key={r.region} value={r.region.toLowerCase()}>
                        {r.region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {vesselStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Vessels by Type */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Vessels by Type</CardTitle>
                <p className="text-sm text-gray-600">Distribution across categories</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vesselsByType.map((item) => (
                    <div key={item.type}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{item.type}</span>
                        <span className="text-sm text-gray-600">
                          {item.count} ({item.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-[#0066CC] h-3 rounded-full transition-all"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vessels by Region */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Vessels by Region</CardTitle>
                <p className="text-sm text-gray-600">Geographic distribution</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={vesselsByRegion}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ region, vessels }) => `${region}: ${vessels}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="vessels"
                    >
                      {vesselsByRegion.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Registration Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Registration Trend (2019-2024)</CardTitle>
                <p className="text-sm text-gray-600">Growth over time by type</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={vesselTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="commercial" stroke="#002868" strokeWidth={2} name="Commercial" />
                    <Line type="monotone" dataKey="artisanal" stroke="#0066CC" strokeWidth={2} name="Artisanal" />
                    <Line type="monotone" dataKey="recreational" stroke="#00A86B" strokeWidth={2} name="Recreational" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vessels by Size */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Vessels by Size</CardTitle>
                <p className="text-sm text-gray-600">Distribution by length</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={vesselsBySizeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="size" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#0066CC" name="Vessels" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Regional Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Regional Breakdown
              </CardTitle>
              <p className="text-sm text-gray-600">Detailed vessel statistics by region</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Region</th>
                      <th className="text-right py-3 px-4">Total</th>
                      <th className="text-right py-3 px-4">Commercial</th>
                      <th className="text-right py-3 px-4">Artisanal</th>
                      <th className="text-right py-3 px-4">Recreational</th>
                      <th className="text-right py-3 px-4">% of Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vesselsByRegion.map((region) => (
                      <tr key={region.region} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{region.region}</td>
                        <td className="text-right py-3 px-4">{region.vessels}</td>
                        <td className="text-right py-3 px-4">{Math.round(region.vessels * 0.25)}</td>
                        <td className="text-right py-3 px-4">{Math.round(region.vessels * 0.53)}</td>
                        <td className="text-right py-3 px-4">{Math.round(region.vessels * 0.16)}</td>
                        <td className="text-right py-3 px-4">
                          {((region.vessels / 1540) * 100).toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
