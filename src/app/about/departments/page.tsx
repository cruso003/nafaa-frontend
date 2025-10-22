"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Ship, Shield, Waves, TrendingUp, Globe, Building2, BarChart3, Users, Mail, DollarSign, TreePine, Search, Briefcase, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const departments = [
  {
    id: 1,
    name: "Department of Marine Fisheries",
    icon: Ship,
    gradient: "from-blue-500 to-cyan-500",
    description: "Manages marine fisheries operations, licensing, and sustainable exploitation of marine fish resources in Liberia's territorial waters and EEZ.",
    services: [
      "Marine fishing licenses and permits",
      "Commercial fishing operations",
      "Artisanal fishing support",
      "Marine catch documentation",
      "Fleet management and oversight",
    ],
    contact: "marine@nafaa.gov.lr",
    staff: "20+ Personnel",
  },
  {
    id: 2,
    name: "Monitoring, Control and Surveillance (MCS)",
    icon: Shield,
    gradient: "from-red-500 to-pink-500",
    description: "Conducts surveillance and enforcement operations to combat illegal, unreported, and unregulated (IUU) fishing and ensure compliance with fisheries regulations.",
    services: [
      "At-sea patrols and inspections",
      "Port state control",
      "IUU fishing investigations",
      "Vessel monitoring systems (VMS)",
      "Enforcement actions and penalties",
    ],
    contact: "mcs@nafaa.gov.lr",
    staff: "25+ Personnel",
  },
  {
    id: 3,
    name: "Aquaculture and Inland Fisheries",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
    description: "Promotes sustainable aquaculture development and manages inland fisheries resources including rivers, lakes, and reservoirs.",
    services: [
      "Fish farming extension services",
      "Aquaculture training programs",
      "Inland fisheries management",
      "Hatchery operations support",
      "Technical assistance to farmers",
    ],
    contact: "aquaculture@nafaa.gov.lr",
    staff: "18+ Personnel",
  },
  {
    id: 4,
    name: "Environment and Climate Change",
    icon: TreePine,
    gradient: "from-teal-500 to-green-600",
    description: "Monitors environmental impacts on fisheries, implements climate change adaptation measures, and ensures sustainable marine ecosystem management.",
    services: [
      "Environmental impact assessments",
      "Climate change adaptation strategies",
      "Marine habitat conservation",
      "Ecosystem monitoring",
      "Biodiversity protection programs",
    ],
    contact: "environment@nafaa.gov.lr",
    staff: "12+ Personnel",
  },
  {
    id: 5,
    name: "Finance",
    icon: DollarSign,
    gradient: "from-amber-500 to-orange-500",
    description: "Manages financial operations, budgeting, accounting, revenue collection, and financial reporting for the Authority.",
    services: [
      "Budget preparation and management",
      "Revenue collection and accounting",
      "Financial reporting and audits",
      "Payment processing",
      "Financial planning and analysis",
    ],
    contact: "finance@nafaa.gov.lr",
    staff: "15+ Personnel",
  },
  {
    id: 6,
    name: "Human Resources",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    description: "Manages staff recruitment, development, training, performance management, and employee welfare programs.",
    services: [
      "Recruitment and onboarding",
      "Staff training and development",
      "Performance management",
      "Payroll and benefits administration",
      "Employee relations and welfare",
    ],
    contact: "hr@nafaa.gov.lr",
    staff: "10+ Personnel",
  },
  {
    id: 7,
    name: "Administration and General Services",
    icon: Building2,
    gradient: "from-gray-500 to-slate-600",
    description: "Provides administrative support, facility management, logistics, transportation, and general services to all departments.",
    services: [
      "Facility and asset management",
      "Transportation and logistics",
      "Office administration",
      "Security and safety management",
      "Records and archives management",
    ],
    contact: "admin@nafaa.gov.lr",
    staff: "22+ Personnel",
  },
  {
    id: 8,
    name: "Research and Statistics",
    icon: BarChart3,
    gradient: "from-indigo-500 to-purple-500",
    description: "Conducts scientific research, stock assessments, data collection, and statistical analysis to support evidence-based fisheries management.",
    services: [
      "Fish stock assessments",
      "Catch and effort data collection",
      "Statistical analysis and reporting",
      "Marine scientific research",
      "Database management",
    ],
    contact: "research@nafaa.gov.lr",
    staff: "16+ Personnel",
  },
  {
    id: 9,
    name: "Procurement",
    icon: Briefcase,
    gradient: "from-blue-600 to-indigo-600",
    description: "Manages procurement processes, vendor selection, contract administration, and ensures compliance with public procurement regulations.",
    services: [
      "Procurement planning and execution",
      "Vendor registration and management",
      "Contract administration",
      "Bid evaluation and awards",
      "Procurement compliance monitoring",
    ],
    contact: "procurement@nafaa.gov.lr",
    staff: "8+ Personnel",
  },
  {
    id: 10,
    name: "Internal Audit",
    icon: FileCheck,
    gradient: "from-rose-500 to-red-600",
    description: "Provides independent assurance and oversight through internal audits, risk management, and compliance monitoring.",
    services: [
      "Internal audit examinations",
      "Risk assessment and management",
      "Compliance reviews",
      "Financial controls evaluation",
      "Audit reporting and follow-up",
    ],
    contact: "audit@nafaa.gov.lr",
    staff: "6+ Personnel",
  },
  {
    id: 11,
    name: "Policy, Planning and Investment",
    icon: FileText,
    gradient: "from-cyan-500 to-blue-600",
    description: "Develops fisheries policies, strategic plans, investment programs, and coordinates with national development initiatives.",
    services: [
      "Policy formulation and analysis",
      "Strategic planning and development",
      "Investment promotion and facilitation",
      "Program monitoring and evaluation",
      "Donor coordination and partnerships",
    ],
    contact: "policy@nafaa.gov.lr",
    staff: "12+ Personnel",
  },
];

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean-light to-nafaa-ocean text-white py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/departments-hero.jpg"
              alt="Departments"
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
                <Building2 className="mr-2 h-4 w-4" />
                Organization
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Departments & Divisions
              </h1>
              <p className="text-xl text-blue-100">
                Specialized teams delivering comprehensive fisheries services across Liberia
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-nafaa-ocean mb-6">
                Our Organizational Structure
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                NaFAA operates through eleven specialized departments, each focused on delivering specific services 
                and functions essential to sustainable fisheries management. From marine fisheries and aquaculture to 
                monitoring and enforcement, finance, research, and policy development, our departments work together to fulfill NaFAA's mandate 
                and serve Liberia's fishing communities and industries.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="border-0 shadow-lg text-center bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardContent className="pt-8 pb-8">
                    <Building2 className="h-10 w-10 text-nafaa-ocean mx-auto mb-3" />
                    <div className="text-4xl font-bold text-nafaa-ocean mb-2">11</div>
                    <div className="text-sm text-gray-600">Departments</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-0 shadow-lg text-center bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="pt-8 pb-8">
                    <Users className="h-10 w-10 text-nafaa-ocean mx-auto mb-3" />
                    <div className="text-4xl font-bold text-nafaa-ocean mb-2">150+</div>
                    <div className="text-sm text-gray-600">Total Staff</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="border-0 shadow-lg text-center bg-gradient-to-br from-purple-50 to-indigo-50">
                  <CardContent className="pt-8 pb-8">
                    <Globe className="h-10 w-10 text-nafaa-ocean mx-auto mb-3" />
                    <div className="text-4xl font-bold text-nafaa-ocean mb-2">5</div>
                    <div className="text-sm text-gray-600">Regional Offices</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="border-0 shadow-lg text-center bg-gradient-to-br from-orange-50 to-amber-50">
                  <CardContent className="pt-8 pb-8">
                    <FileText className="h-10 w-10 text-nafaa-ocean mx-auto mb-3" />
                    <div className="text-4xl font-bold text-nafaa-ocean mb-2">40+</div>
                    <div className="text-sm text-gray-600">Services Offered</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Management link card */}
        <section className="py-8 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-nafaa-ocean mb-2">Departments & Deputies</h4>
                  <p className="text-sm text-gray-700 mb-3">Deputy Directors (Administration, Technical Services, etc.) have defined roles in supporting departmental programs. For full role descriptions and appointment terms, view the management structure.</p>
                  <Link href="/about/management" className="text-nafaa-ocean font-medium hover:underline">View Management Structure →</Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-nafaa-ocean mb-4">
                All Departments
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore each department's services, functions, and contact information
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all group">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${dept.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <dept.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-nafaa-ocean mb-2 group-hover:text-nafaa-ocean transition-colors">
                            {dept.name}
                          </CardTitle>
                          <Badge variant="secondary">{dept.staff}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        {dept.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-nafaa-ocean text-sm mb-3">Key Services:</h4>
                        <ul className="space-y-2">
                          {dept.services.map((service, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-nafaa-ocean mt-1">✓</span>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-nafaa-ocean" />
                          <a
                            href={`mailto:${dept.contact}`}
                            className="text-sm text-gray-600 hover:text-nafaa-ocean transition-colors"
                          >
                            {dept.contact}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Organizational Chart */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-nafaa-ocean mb-4">
                Organizational Hierarchy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                How our departments are structured for effective service delivery
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-nafaa-ocean/20 shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {/* Level 1 */}
                    <div className="text-center">
                      <div className="inline-block px-6 py-3 bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean text-white rounded-lg font-semibold">
                        Director General
                      </div>
                    </div>

                    {/* Connecting line */}
                    <div className="flex justify-center">
                      <div className="w-px h-12 bg-gray-300"></div>
                    </div>

                    {/* Level 2 */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="px-4 py-2 bg-nafaa-ocean text-white rounded-lg text-sm font-semibold">
                          Deputy Director<br />(Operations)
                        </div>
                        <div className="mt-3 text-xs text-gray-600 space-y-1">
                          <div>• Licensing</div>
                          <div>• Vessel Registration</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="px-4 py-2 bg-nafaa-ocean text-white rounded-lg text-sm font-semibold">
                          Deputy Director<br />(Compliance)
                        </div>
                        <div className="mt-3 text-xs text-gray-600 space-y-1">
                          <div>• Enforcement</div>
                          <div>• Research</div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="px-4 py-2 bg-nafaa-ocean text-white rounded-lg text-sm font-semibold">
                          Deputy Director<br />(Development)
                        </div>
                        <div className="mt-3 text-xs text-gray-600 space-y-1">
                          <div>• Aquaculture</div>
                          <div>• Data & Statistics</div>
                        </div>
                      </div>
                    </div>

                    {/* Cross-cutting functions */}
                    <div className="pt-6 border-t">
                      <div className="text-center text-sm font-semibold text-gray-600 mb-3">
                        Cross-Cutting Functions
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="px-3 py-2 bg-gray-100 text-gray-700 rounded text-center text-sm">
                          International Relations
                        </div>
                        <div className="px-3 py-2 bg-gray-100 text-gray-700 rounded text-center text-sm">
                          Administration
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Assistance?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Our departments are here to serve you. Contact the relevant department for specialized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-nafaa-ocean hover:bg-gray-100">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <FileText className="mr-2 h-5 w-5" />
                    View Services
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
