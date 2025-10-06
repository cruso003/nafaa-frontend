"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Fish,
  ArrowLeft,
  Filter,
  Download,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const monthlyCatchData = [
  { month: "Jan", tuna: 850, snapper: 620, grouper: 480, other: 250 },
  { month: "Feb", tuna: 920, snapper: 680, grouper: 510, other: 290 },
  { month: "Mar", tuna: 1050, snapper: 720, grouper: 560, other: 270 },
  { month: "Apr", tuna: 880, snapper: 650, grouper: 490, other: 330 },
  { month: "May", tuna: 1180, snapper: 780, grouper: 610, other: 230 },
  { month: "Jun", tuna: 1420, snapper: 850, grouper: 680, other: 150 },
];

const speciesData = [
  { species: "Yellowfin Tuna", catch: 3500, value: 875000, trend: "up", change: "+12%" },
  { species: "Red Snapper", catch: 2800, value: 560000, trend: "up", change: "+8%" },
  { species: "Grouper", catch: 2100, value: 630000, trend: "down", change: "-3%" },
  { species: "Barracuda", catch: 1600, value: 320000, trend: "up", change: "+5%" },
  { species: "Shrimp", catch: 1200, value: 720000, trend: "up", change: "+15%" },
  { species: "Mahi-Mahi", catch: 980, value: 294000, trend: "up", change: "+10%" },
  { species: "King Mackerel", catch: 750, value: 187500, trend: "down", change: "-2%" },
  { species: "Wahoo", catch: 520, value: 156000, trend: "up", change: "+7%" },
];

const regionalCatch = [
  { region: "Coastal Zone A", q1: 2100, q2: 2400, q3: 2800, q4: 2600 },
  { region: "Coastal Zone B", q1: 1800, q2: 1950, q3: 2100, q4: 2000 },
  { region: "EEZ North", q1: 1400, q2: 1600, q3: 1800, q4: 1700 },
  { region: "EEZ South", q1: 1200, q2: 1350, q3: 1500, q4: 1450 },
];

const catchStats = [
  { label: "Total Catch YTD", value: "9,450 MT", change: "+12.5%" },
  { label: "Avg Monthly", value: "1,575 MT", change: "+8.7%" },
  { label: "Total Species", value: "42", change: "+3" },
  { label: "Estimated Value", value: "$4.7M", change: "+15.2%" },
];

export default function CatchDataPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#00A86B] to-[#00CC80] text-white py-12">
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
              <Fish className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Catch Data & Reports
              </h1>
              <p className="text-xl text-green-100">
                Comprehensive fish catch statistics by species, region, and time period
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
                    <SelectValue placeholder="Species" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Species</SelectItem>
                    <SelectItem value="tuna">Tuna</SelectItem>
                    <SelectItem value="snapper">Snapper</SelectItem>
                    <SelectItem value="grouper">Grouper</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="zone-a">Coastal Zone A</SelectItem>
                    <SelectItem value="zone-b">Coastal Zone B</SelectItem>
                    <SelectItem value="eez">EEZ Waters</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Time Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ytd">Year to Date</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
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
          {catchStats.map((stat, index) => (
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
          {/* Monthly Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Monthly Catch by Species (2024)</CardTitle>
                <p className="text-sm text-gray-600">Catch volumes in metric tons</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={monthlyCatchData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="tuna" stackId="1" stroke="#002868" fill="#002868" name="Tuna" />
                    <Area type="monotone" dataKey="snapper" stackId="1" stroke="#0066CC" fill="#0066CC" name="Snapper" />
                    <Area type="monotone" dataKey="grouper" stackId="1" stroke="#00A86B" fill="#00A86B" name="Grouper" />
                    <Area type="monotone" dataKey="other" stackId="1" stroke="#C60C30" fill="#C60C30" name="Other" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Regional Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Catch by Region (Quarterly)</CardTitle>
                <p className="text-sm text-gray-600">Regional distribution in MT</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={regionalCatch}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" angle={-15} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="q1" fill="#002868" name="Q1" />
                    <Bar dataKey="q2" fill="#0066CC" name="Q2" />
                    <Bar dataKey="q3" fill="#00A86B" name="Q3" />
                    <Bar dataKey="q4" fill="#C60C30" name="Q4" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Species Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Top Species YTD</CardTitle>
                <p className="text-sm text-gray-600">Total catch in metric tons</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={speciesData.slice(0, 6)} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="species" type="category" width={100} />
                    <Tooltip />
                    <Bar dataKey="catch" fill="#00A86B" name="Catch (MT)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Species Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Species Breakdown</CardTitle>
              <p className="text-sm text-gray-600">Detailed catch and value data by species</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Species</th>
                      <th className="text-right py-3 px-4">Catch (MT)</th>
                      <th className="text-right py-3 px-4">Estimated Value</th>
                      <th className="text-right py-3 px-4">Avg Price/MT</th>
                      <th className="text-right py-3 px-4">Trend</th>
                      <th className="text-right py-3 px-4">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {speciesData.map((species) => (
                      <tr key={species.species} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{species.species}</td>
                        <td className="text-right py-3 px-4">{species.catch.toLocaleString()}</td>
                        <td className="text-right py-3 px-4">${species.value.toLocaleString()}</td>
                        <td className="text-right py-3 px-4">
                          ${Math.round(species.value / species.catch).toLocaleString()}
                        </td>
                        <td className="text-right py-3 px-4">
                          {species.trend === "up" ? (
                            <TrendingUp className="h-4 w-4 text-green-600 inline" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-600 inline" />
                          )}
                        </td>
                        <td className={`text-right py-3 px-4 font-semibold ${
                          species.trend === "up" ? "text-green-600" : "text-red-600"
                        }`}>
                          {species.change}
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
