"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Users, FileText, Shield, TrendingUp, Globe, Waves, Ship } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function OrganizationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="relative bg-gradient-to-br from-[#002868] via-[#003A8C] to-[#0066CC] text-white py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/organization-hero.jpg"
              alt="Our Organization"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                About NaFAA
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Organizational Structure
              </h1>
              <p className="text-xl text-blue-100">
                A streamlined structure designed for effective fisheries management and service delivery
              </p>
            </motion.div>
          </div>
        </section>

        {/* Organization Chart */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002868] mb-4">
                Organizational Hierarchy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our structure ensures clear lines of authority, efficient decision-making, and coordinated service delivery
              </p>
            </motion.div>

            {/* Visual Organization Chart */}
            <div className="space-y-8">
              {/* Level 1: Director General */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
              >
                <Card className="border-2 border-[#002868] shadow-xl max-w-md w-full">
                  <CardHeader className="text-center bg-gradient-to-r from-[#002868] to-[#0066CC] text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Director General</CardTitle>
                    <p className="text-blue-100 text-sm">Chief Executive Officer</p>
                  </CardHeader>
                  <CardContent className="pt-4 text-center text-sm text-gray-600">
                    Overall leadership, strategic direction, policy formulation
                  </CardContent>
                </Card>
              </motion.div>

              {/* Level 2: Deputy Directors */}
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {deputyDirectors.map((deputy, index) => (
                  <motion.div
                    key={deputy.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-2 border-[#0066CC] shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader className="text-center bg-gradient-to-r from-[#0066CC] to-[#00A0E3] text-white">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <deputy.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-lg">{deputy.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-gray-600 text-center">{deputy.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Connecting Line */}
              <div className="h-8 flex items-center justify-center">
                <div className="w-px h-full bg-gray-300"></div>
              </div>

              {/* Level 3: Departments */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {departments.map((dept, index) => (
                  <motion.div
                    key={dept.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <Card className="h-full border border-gray-200 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardHeader className="pb-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${dept.gradient} flex items-center justify-center mb-3`}>
                          <dept.icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-base text-[#002868]">{dept.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs text-gray-600">{dept.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Functions */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002868] mb-4">
                Key Functions by Department
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized teams working together to deliver comprehensive fisheries services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {functionalAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center flex-shrink-0`}>
                          <area.icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-[#002868] mb-2">
                            {area.title}
                          </CardTitle>
                          <Badge variant="secondary">{area.team}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {area.functions.map((func, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-[#00A86B] mt-1">✓</span>
                            <span>{func}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002868] mb-4">
                Our Organization at a Glance
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {organizationStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                    <CardContent className="pt-8 pb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4`}>
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-[#002868] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[#002868] to-[#0066CC] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Learn More About NaFAA
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Explore our leadership team, mandate, and how we serve Liberia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/about/leadership">
                  <Button size="lg" className="bg-white text-[#002868] hover:bg-gray-100">
                    <Users className="mr-2 h-5 w-5" />
                    Meet Our Team
                  </Button>
                </Link>
                <Link href="/about/mandate">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <FileText className="mr-2 h-5 w-5" />
                    Our Mandate
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

const deputyDirectors = [
  {
    title: "Deputy Director (Operations)",
    icon: Ship,
    description: "Oversees licensing, registration, and operational services",
  },
  {
    title: "Deputy Director (Compliance)",
    icon: Shield,
    description: "Manages enforcement, monitoring, and regulatory compliance",
  },
  {
    title: "Deputy Director (Development)",
    icon: TrendingUp,
    description: "Leads aquaculture development and capacity building",
  },
];

const departments = [
  {
    name: "Licensing Division",
    icon: FileText,
    gradient: "from-blue-500 to-cyan-500",
    description: "Fishing licenses, permits, and certificates",
  },
  {
    name: "Vessel Registration",
    icon: Ship,
    gradient: "from-teal-500 to-emerald-500",
    description: "Vessel registration and documentation",
  },
  {
    name: "Compliance & Enforcement",
    icon: Shield,
    gradient: "from-red-500 to-pink-500",
    description: "Monitoring, control, and surveillance",
  },
  {
    name: "Fisheries Research",
    icon: Waves,
    gradient: "from-purple-500 to-indigo-500",
    description: "Scientific research and stock assessment",
  },
  {
    name: "Aquaculture Development",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
    description: "Fish farming support and extension",
  },
  {
    name: "Data & Statistics",
    icon: FileText,
    gradient: "from-orange-500 to-amber-500",
    description: "Data collection and analysis",
  },
  {
    name: "International Relations",
    icon: Globe,
    gradient: "from-indigo-500 to-blue-500",
    description: "Regional cooperation and treaties",
  },
  {
    name: "Administration",
    icon: Building2,
    gradient: "from-gray-500 to-slate-500",
    description: "Finance, HR, and support services",
  },
];

const functionalAreas = [
  {
    title: "Regulatory Services",
    team: "Licensing & Registration",
    icon: FileText,
    gradient: "from-blue-500 to-cyan-500",
    functions: [
      "Issue fishing licenses and permits",
      "Register and document vessels",
      "Collect and manage fees",
      "Maintain licensing database",
    ],
  },
  {
    title: "Compliance & Enforcement",
    team: "Monitoring & Control",
    icon: Shield,
    gradient: "from-red-500 to-pink-500",
    functions: [
      "Conduct sea and port inspections",
      "Combat illegal fishing (IUU)",
      "Monitor catch reporting",
      "Enforce fisheries regulations",
    ],
  },
  {
    title: "Research & Development",
    team: "Scientific Services",
    icon: Waves,
    gradient: "from-purple-500 to-indigo-500",
    functions: [
      "Assess fish stocks and ecosystems",
      "Conduct marine research",
      "Provide scientific advice",
      "Monitor environmental impacts",
    ],
  },
  {
    title: "Capacity Building",
    team: "Extension & Training",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
    functions: [
      "Train fishermen and fish farmers",
      "Provide technical assistance",
      "Support community development",
      "Promote best practices",
    ],
  },
];

const organizationStats = [
  {
    value: "8",
    label: "Major Departments",
    icon: Building2,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    value: "150+",
    label: "Staff Members",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    value: "5",
    label: "Regional Offices",
    icon: Globe,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    value: "24/7",
    label: "Operations",
    icon: Shield,
    gradient: "from-orange-500 to-amber-500",
  },
];
