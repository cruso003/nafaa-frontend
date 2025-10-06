"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Ship, Shield, Waves, TrendingUp, Globe, Building2, BarChart3, Users, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const departments = [
  {
    id: 1,
    name: "Licensing Division",
    icon: FileText,
    gradient: "from-blue-500 to-cyan-500",
    description: "Manages the issuance, renewal, and administration of fishing licenses, permits, and certificates for commercial, artisanal, and recreational fishing activities.",
    services: [
      "Commercial fishing licenses",
      "Artisanal fishing permits",
      "Recreational fishing licenses",
      "Special permits and exemptions",
      "License renewals and amendments",
    ],
    contact: "licensing@nafaa.gov.lr",
    staff: "15+ Personnel",
  },
  {
    id: 2,
    name: "Vessel Registration",
    icon: Ship,
    gradient: "from-teal-500 to-emerald-500",
    description: "Responsible for vessel registration, documentation, certification, and maintaining the national fishing vessel registry.",
    services: [
      "New vessel registration",
      "Vessel documentation",
      "Vessel inspections and certification",
      "Registry maintenance",
      "Ownership transfers",
    ],
    contact: "vessels@nafaa.gov.lr",
    staff: "12+ Personnel",
  },
  {
    id: 3,
    name: "Compliance & Enforcement",
    icon: Shield,
    gradient: "from-red-500 to-pink-500",
    description: "Conducts monitoring, control, and surveillance (MCS) operations to combat illegal, unreported, and unregulated (IUU) fishing and ensure regulatory compliance.",
    services: [
      "Port inspections",
      "At-sea patrols and surveillance",
      "IUU fishing investigations",
      "Catch documentation verification",
      "Enforcement actions and penalties",
    ],
    contact: "enforcement@nafaa.gov.lr",
    staff: "25+ Personnel",
  },
  {
    id: 4,
    name: "Fisheries Research",
    icon: Waves,
    gradient: "from-purple-500 to-indigo-500",
    description: "Conducts scientific research on fish stocks, marine ecosystems, and environmental impacts to inform sustainable fisheries management decisions.",
    services: [
      "Stock assessments",
      "Ecosystem research",
      "Catch and effort data analysis",
      "Marine biodiversity studies",
      "Scientific advisory services",
    ],
    contact: "research@nafaa.gov.lr",
    staff: "20+ Personnel",
  },
  {
    id: 5,
    name: "Aquaculture Development",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
    description: "Promotes and supports the development of sustainable aquaculture practices, including fish farming, training, and technical assistance to fish farmers.",
    services: [
      "Aquaculture extension services",
      "Fish farmer training programs",
      "Site selection and farm design",
      "Technical assistance",
      "Seed production support",
    ],
    contact: "aquaculture@nafaa.gov.lr",
    staff: "18+ Personnel",
  },
  {
    id: 6,
    name: "Data & Statistics",
    icon: BarChart3,
    gradient: "from-orange-500 to-amber-500",
    description: "Collects, analyzes, and publishes fisheries data and statistics to support evidence-based policy making and industry planning.",
    services: [
      "Catch and landing data collection",
      "Trade statistics compilation",
      "Data analysis and reporting",
      "Statistical publications",
      "Database management",
    ],
    contact: "statistics@nafaa.gov.lr",
    staff: "10+ Personnel",
  },
  {
    id: 7,
    name: "International Relations",
    icon: Globe,
    gradient: "from-indigo-500 to-blue-500",
    description: "Manages Liberia's participation in regional and international fisheries agreements, treaties, and cooperation initiatives.",
    services: [
      "Regional fisheries organizations",
      "Bilateral cooperation agreements",
      "International treaty compliance",
      "Diplomatic engagement",
      "Technical cooperation programs",
    ],
    contact: "international@nafaa.gov.lr",
    staff: "8+ Personnel",
  },
  {
    id: 8,
    name: "Administration",
    icon: Building2,
    gradient: "from-gray-500 to-slate-500",
    description: "Provides essential support services including finance, human resources, procurement, IT, and facility management.",
    services: [
      "Financial management and accounting",
      "Human resources and payroll",
      "Procurement and logistics",
      "IT and communications",
      "Facility and asset management",
    ],
    contact: "admin@nafaa.gov.lr",
    staff: "30+ Personnel",
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
                NaFAA operates through eight specialized departments, each focused on delivering specific services 
                and functions essential to sustainable fisheries management. From licensing and enforcement to 
                research and international cooperation, our departments work together to fulfill NaFAA's mandate 
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
                    <div className="text-4xl font-bold text-nafaa-ocean mb-2">8</div>
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
