"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, UserCircle, Briefcase, Calculator, HeartHandshake, Globe, FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const staffCategories = [
  {
    id: 1,
    category: "Administrative Staff",
    icon: Briefcase,
    gradient: "from-blue-500 to-cyan-500",
    description: "Supporting day-to-day operations, office management, and administrative coordination",
    count: "25+ Staff",
    roles: [
      "Executive Assistants",
      "Administrative Officers",
      "Office Managers",
      "Receptionists",
      "Protocol Officers",
    ],
  },
  {
    id: 2,
    category: "Finance & Accounting",
    icon: Calculator,
    gradient: "from-green-500 to-emerald-500",
    description: "Managing budgets, accounting, payroll, and financial reporting",
    count: "15+ Staff",
    roles: [
      "Chief Accountant",
      "Budget Officers",
      "Revenue Collectors",
      "Accounting Clerks",
      "Payroll Officers",
    ],
  },
  {
    id: 3,
    category: "Human Resources",
    icon: UserCircle,
    gradient: "from-purple-500 to-indigo-500",
    description: "Recruitment, training, employee welfare, and personnel management",
    count: "10+ Staff",
    roles: [
      "HR Manager",
      "Recruitment Officers",
      "Training Coordinators",
      "Personnel Officers",
      "Employee Relations",
    ],
  },
  {
    id: 4,
    category: "Legal Affairs",
    icon: FileText,
    gradient: "from-red-500 to-pink-500",
    description: "Legal counsel, contracts, compliance, and regulatory support",
    count: "8+ Staff",
    roles: [
      "Legal Counsel",
      "Legal Officers",
      "Contract Specialists",
      "Compliance Officers",
      "Paralegals",
    ],
  },
  {
    id: 5,
    category: "Communications & PR",
    icon: Globe,
    gradient: "from-orange-500 to-amber-500",
    description: "Public relations, media engagement, and stakeholder communications",
    count: "12+ Staff",
    roles: [
      "Communications Director",
      "Public Relations Officers",
      "Social Media Managers",
      "Content Creators",
      "Media Liaisons",
    ],
  },
  {
    id: 6,
    category: "Support Services",
    icon: HeartHandshake,
    gradient: "from-teal-500 to-cyan-500",
    description: "Facility management, security, maintenance, and logistics",
    count: "30+ Staff",
    roles: [
      "Facility Managers",
      "Security Personnel",
      "Maintenance Staff",
      "Drivers",
      "Logistics Officers",
    ],
  },
];

export default function StaffPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean-light to-nafaa-ocean text-white py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/staff-hero.jpg"
              alt="Support Staff"
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
                <Users className="mr-2 h-4 w-4" />
                Our Team
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Support Staff
              </h1>
              <p className="text-xl text-blue-100">
                The dedicated professionals who keep NaFAA running smoothly every day
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
                Our Professional Support Team
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Behind every successful fisheries management operation is a team of dedicated support professionals. 
                NaFAA's support staff provide essential services in administration, finance, human resources, 
                communications, legal affairs, and facility management—ensuring the organization operates efficiently 
                and delivers quality services to all stakeholders.
              </p>
            </motion.div>

            {/* Statistics */}
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-4xl font-bold text-nafaa-ocean mb-2">100+</div>
                    <div className="text-sm text-gray-600">Support Staff</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-4xl font-bold text-nafaa-ocean mb-2">6</div>
                    <div className="text-sm text-gray-600">Service Categories</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="pt-8 pb-8">
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
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="text-4xl font-bold text-nafaa-ocean mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Service Support</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Staff Categories */}
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
                Staff Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized teams providing comprehensive support across all NaFAA operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staffCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all group">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-nafaa-ocean group-hover:text-nafaa-ocean transition-colors">
                        {category.category}
                      </CardTitle>
                      <Badge variant="secondary" className="w-fit mt-2">
                        {category.count}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-6">
                        {category.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-nafaa-ocean text-sm mb-3">Key Roles:</h4>
                        <ul className="space-y-2">
                          {category.roles.map((role, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="text-nafaa-ocean mt-1">•</span>
                              <span>{role}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
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
                Our Team Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our support staff every day
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Excellence",
                  description: "Striving for the highest standards in all we do",
                  icon: "⭐",
                },
                {
                  title: "Service",
                  description: "Putting stakeholders and colleagues first",
                  icon: "🤝",
                },
                {
                  title: "Integrity",
                  description: "Operating with honesty and transparency",
                  icon: "🛡️",
                },
                {
                  title: "Teamwork",
                  description: "Collaborating for collective success",
                  icon: "👥",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all text-center">
                    <CardContent className="pt-8 pb-8">
                      <div className="text-5xl mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold text-nafaa-ocean mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Interested in contributing to sustainable fisheries management in Liberia? 
                Explore career opportunities with NaFAA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/opportunities/careers">
                  <button className="px-8 py-4 bg-white text-nafaa-ocean rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                    <Users className="h-5 w-5" />
                    View Careers
                  </button>
                </a>
                <a href="/contact">
                  <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact HR
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
