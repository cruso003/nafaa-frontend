"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Ship, Shield, TrendingUp, Briefcase, ArrowRight, Mail, Award } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const managementTeam = [
  {
    id: 1,
    name: "J. Cyrus Saygbe, Sr",
    title: "Acting Director General",
    department: "Executive Office",
    icon: Briefcase,
    image: "/officials/director.jpg",
    bio: "Acting Director General J. Cyrus Saygbe, Sr leads NaFAA with extensive experience in fisheries management, sustainable development, and marine resource conservation.",
    responsibilities: [
      "Overall strategic leadership and direction",
      "Policy formulation and implementation",
      "Stakeholder engagement and partnerships",
      "Budget approval and financial oversight",
    ],
    contact: { email: "director@nafaa.gov.lr" },
  },
  {
    id: 2,
    name: "Hon. Augustine M. Manoballah",
    title: "Deputy Director General for Administration",
    department: "Administration Division",
    icon: Briefcase,
    image: "/management/deputy-administration.jpg",
    bio: "Deputy Director General for Administration with over 10 years of experience in business and maritime industry.",
    responsibilities: [
      "Administrative operations and management",
      "Human resources oversight",
      "General services coordination",
      "Office management and support services",
    ],
  },
  {
    id: 3,
    name: "William Y. Boeh",
    title: "Deputy Director General for Technical Services",
    department: "Technical Services Division",
    icon: TrendingUp,
    image: "/management/deputy-technical.jpg",
    bio: "Coordinating Research & Statistics, Marine Fisheries, Monitoring Control Surveillance, and Aquaculture & Inland Fisheries.",
    responsibilities: [
      "Research and statistics coordination",
      "Marine fisheries and environment oversight",
      "Monitoring, control, and surveillance",
      "Aquaculture and inland fisheries development",
    ],
  },
];

export default function ManagementPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean-light to-nafaa-ocean text-white py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-10">
              <Image src="/management-hero.jpg" alt="Management Team" fill className="object-cover" />
            </div>
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
              }}
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
                <Users className="mr-2 h-4 w-4" />
                Leadership
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Management Team
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Experienced leaders executing NaFAA's mandate and delivering excellence
              </p>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { label: "Years Experience", value: "50+" },
                  { label: "Team Members", value: "3" },
                  { label: "Divisions Led", value: "6" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-blue-100 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Wave decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" className="w-full">
              <path
                d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H0V0Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean-light rounded-full mb-6"
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-nafaa-ocean mb-6">
                Executive Leadership
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-nafaa-ocean to-nafaa-coral mx-auto rounded-full mb-8" />

              <p className="text-lg text-gray-700 leading-relaxed">
                NaFAA's Senior Management Team comprises seasoned professionals with decades of experience 
                in fisheries management, marine conservation, and sustainable development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Director General Profile */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <Card className="border-0 shadow-2xl overflow-hidden bg-white mb-12">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-[500px] lg:h-auto overflow-hidden group">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image src={managementTeam[0].image} alt={managementTeam[0].name} fill className="object-cover" />
                  </motion.div>

                  <Badge className="absolute top-6 left-6 z-20 bg-white/95 text-nafaa-ocean backdrop-blur-sm px-4 py-2">
                    <Briefcase className="mr-2 h-4 w-4" />
                    {managementTeam[0].department}
                  </Badge>

                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-nafaa-ocean/90 to-transparent z-10" />
                </div>

                {/* Content Side */}
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 bg-nafaa-ocean/10 text-nafaa-ocean border-nafaa-ocean/20 w-fit">
                    Director General
                  </Badge>

                  <h3 className="text-3xl lg:text-4xl font-bold text-nafaa-ocean mb-3">
                    {managementTeam[0].name}
                  </h3>

                  <p className="text-lg text-nafaa-ocean/80 font-medium mb-6">
                    {managementTeam[0].title}
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    {managementTeam[0].bio}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-nafaa-ocean mb-4 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Key Responsibilities
                    </h4>
                    <div className="grid gap-3">
                      {managementTeam[0].responsibilities.map((resp, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-nafaa-ocean/5 transition-colors group"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean-light flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                            <span className="text-white text-xs font-bold">{i + 1}</span>
                          </div>
                          <span className="text-sm text-gray-700">{resp}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex gap-4 pt-6 border-t border-slate-200">
                    <a
                      href={`mailto:${managementTeam[0].contact?.email ?? ""}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-nafaa-ocean transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-nafaa-ocean/10 flex items-center justify-center group-hover:bg-nafaa-ocean transition-colors">
                        <Mail className="w-4 h-4 text-nafaa-ocean group-hover:text-white" />
                      </div>
                      <span>{managementTeam[0].contact?.email ?? ""}</span>
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Deputy Directors */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-nafaa-ocean mb-4">Deputy Directors</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-nafaa-ocean to-nafaa-coral mx-auto rounded-full mb-6" />
              <p className="text-lg text-gray-600">Leading key operational divisions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {managementTeam.slice(1).map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onHoverStart={() => setHoveredCard(member.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all overflow-hidden group">
                      {/* Image Section */}
                      <div className="relative h-80 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean-light" />

                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{
                            scale: hoveredCard === member.id ? 1.1 : 1,
                            opacity: hoveredCard === member.id ? 0.3 : 0.2,
                          }}
                        >
                          <member.icon className="w-24 h-24 text-white/40" />
                        </motion.div>

                        <motion.div
                          className="relative h-full"
                          animate={{ scale: hoveredCard === member.id ? 1.1 : 1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover mix-blend-overlay opacity-40"
                          />
                        </motion.div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        <Badge className="absolute top-4 right-4 bg-white/95 text-nafaa-ocean backdrop-blur-sm">
                          {member.department}
                        </Badge>

                        {/* Name at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                          <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                          <p className="text-sm font-medium text-white/90">{member.title}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-6">
                        <p className="text-gray-700 text-sm mb-6 leading-relaxed">{member.bio}</p>

                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Shield className="w-4 h-4 text-nafaa-ocean" />
                            <h4 className="text-sm font-bold text-nafaa-ocean">Key Responsibilities</h4>
                          </div>

                          <div className="space-y-2">
                            {member.responsibilities.map((resp, i) => (
                              <motion.div
                                key={i}
                                className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-nafaa-ocean/5 transition-colors"
                                whileHover={{ x: 3 }}
                              >
                                <ArrowRight className="w-4 h-4 text-nafaa-ocean mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-700">{resp}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Mandate & Functions - Redesigned */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-96 h-96 bg-nafaa-ocean rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-nafaa-coral rounded-full blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Section Header */}
              <div className="text-center mb-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean-light rounded-2xl mb-6 shadow-xl"
                >
                  <Shield className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-5xl font-bold text-nafaa-ocean mb-6">Legal Mandate & Functions</h3>
                <div className="w-32 h-1.5 bg-gradient-to-r from-nafaa-ocean via-nafaa-coral to-nafaa-ocean mx-auto rounded-full mb-8" />
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  The Authority operates under strict legal frameworks that define the roles, responsibilities, 
                  and qualifications of its leadership and governing bodies.
                </p>
              </div>

              {/* Director General Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50/50 backdrop-blur">
                  <div className="bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean-light p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                        <Briefcase className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Director General</h3>
                        <p className="text-blue-100">Appointment & Qualifications</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <motion.div 
                        className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100"
                        whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                      >
                        <div className="text-nafaa-ocean font-bold text-sm mb-2 uppercase tracking-wide">Appointment</div>
                        <p className="text-gray-700 leading-relaxed">Nominated by the President with Senate consent</p>
                      </motion.div>
                      <motion.div 
                        className="p-5 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100"
                        whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                      >
                        <div className="text-green-700 font-bold text-sm mb-2 uppercase tracking-wide">Term</div>
                        <p className="text-gray-700 leading-relaxed">Four (4) years, renewable for one additional term</p>
                      </motion.div>
                      <motion.div 
                        className="p-5 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100"
                        whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                      >
                        <div className="text-purple-700 font-bold text-sm mb-2 uppercase tracking-wide">Experience</div>
                        <p className="text-gray-700 leading-relaxed">Advanced degree + 7 years senior management</p>
                      </motion.div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                      <h4 className="text-lg font-bold text-nafaa-ocean mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-nafaa-ocean rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm">📋</span>
                        </div>
                        Core Functions
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          "Carry out functions, manage affairs and exercise powers of the Authority",
                          "Ensure fair interpretation and implementation of the Act and regulations",
                          "Ensure efficient administration, budgets, work plans and strategies",
                          "Prepare annual HR Management Plan for Board approval",
                          "Recommend recruitment of competent human resources",
                          "Identify marketing and investment opportunities in fisheries sector",
                          "Negotiate agreements for resource management and conservation",
                          "Develop and publish regulations, circulars, and guidelines",
                          "Perform other functions as required by the Board"
                        ].map((func, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                          >
                            <div className="w-6 h-6 bg-gradient-to-br from-nafaa-ocean to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">{idx + 1}</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{func}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Deputy Directors Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    title: "Deputy Director General for Administration",
                    icon: "👔",
                    gradient: "from-orange-500 to-red-500",
                    bgGradient: "from-orange-50 to-red-50",
                    term: "Four (4) years, renewable",
                    functions: [
                      "Assist Director in day-to-day administration",
                      "Human resources oversight and management",
                      "Procurement plan support and coordination",
                      "Documentation of expenditures",
                      "Other delegated administrative duties"
                    ]
                  },
                  {
                    title: "Deputy Director General for Technical Services",
                    icon: "🔬",
                    gradient: "from-green-500 to-teal-500",
                    bgGradient: "from-green-50 to-teal-50",
                    term: "Five (5) years, renewable",
                    functions: [
                      "Coordinate all technical activities",
                      "Act as principal deputy to Director",
                      "Supervise field activities and operations",
                      "Ensure project EIA screening compliance",
                      "Recruit technical specialists as needed",
                      "Provide staff communication and feedback"
                    ]
                  }
                ].map((deputy, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="border-0 shadow-xl overflow-hidden h-full bg-gradient-to-br from-white to-gray-50">
                      <div className={`bg-gradient-to-r ${deputy.gradient} p-6 text-white`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-3xl">{deputy.icon}</div>
                          <h4 className="text-lg font-bold leading-tight">{deputy.title}</h4>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className={`bg-gradient-to-br ${deputy.bgGradient} rounded-xl p-4 mb-4 border border-gray-200`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Appointment</span>
                            <Badge className="bg-white text-gray-700 border border-gray-300">Presidential</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-gray-600 uppercase tracking-wide">Term</span>
                            <span className="text-sm font-semibold text-gray-700">{deputy.term}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h5 className="font-bold text-nafaa-ocean text-sm mb-3 uppercase tracking-wide">Key Functions</h5>
                          {deputy.functions.map((func, funcIdx) => (
                            <motion.div
                              key={funcIdx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: funcIdx * 0.05 }}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <ArrowRight className="w-4 h-4 text-nafaa-ocean flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{func}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Board of Directors Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-purple-50/50">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                        <Users className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Board of Directors</h3>
                        <p className="text-purple-100">Establishment & Functions</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-6 border border-purple-200">
                      <h4 className="font-bold text-purple-900 mb-3">Composition</h4>
                      <p className="text-gray-700 leading-relaxed">
                        The Board serves as the governing body and consists of nine (9) members: statutory members 
                        (Ministry representatives), four public members, and the Director General as non-voting Secretary.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Establish and adopt policies and procedures for efficient Authority functioning",
                        "Provide general control and accountability to the President",
                        "Guide Director General on conservation and sustainable resource use",
                        "Approve Access Agreements, budgets, financial plans, and HR plans"
                      ].map((func, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.03 }}
                          className="bg-white rounded-xl p-5 border-2 border-purple-100 hover:border-purple-300 transition-colors shadow-sm"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">{idx + 1}</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed mt-0.5">{func}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Management Principles */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-nafaa-ocean mb-4">Our Management Principles</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-nafaa-ocean to-nafaa-coral mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  number: 1,
                  title: "Transparency",
                  desc: "Open communication and accountability",
                  icon: Shield,
                  gradient: "from-blue-500 to-blue-600",
                },
                {
                  number: 2,
                  title: "Sustainability",
                  desc: "Protecting marine resources for future generations",
                  icon: Ship,
                  gradient: "from-green-500 to-green-600",
                },
                {
                  number: 3,
                  title: "Innovation",
                  desc: "Embracing modern technology and best practices",
                  icon: TrendingUp,
                  gradient: "from-purple-500 to-purple-600",
                },
                {
                  number: 4,
                  title: "Collaboration",
                  desc: "Working with stakeholders for shared success",
                  icon: Users,
                  gradient: "from-orange-500 to-orange-600",
                },
              ].map((principle, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <Card className="h-full border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${principle.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="text-white text-2xl font-bold">{principle.number}</span>
                        </motion.div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <principle.icon className="w-6 h-6 text-nafaa-ocean" />
                            <h4 className="text-xl font-bold text-nafaa-ocean">{principle.title}</h4>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{principle.desc}</p>

                          <motion.div
                            className={`mt-4 h-1 bg-gradient-to-r ${principle.gradient} rounded-full`}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean-light text-white rounded-lg font-semibold shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
