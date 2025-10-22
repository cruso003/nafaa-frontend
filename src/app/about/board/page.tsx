"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, Shield, Target, FileCheck, TrendingUp, Briefcase, 
  Crown, Star, CheckCircle2, ArrowRight, Scale, BookOpen,
  Award, Clock, UserCheck, XCircle, AlertCircle, FileText
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const boardMembers = {
  statutory: [
    {
      id: 1,
      position: "Chairperson",
      ministry: "Ministry of Agriculture",
      icon: Crown,
      gradient: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      description: "Leads board meetings and strategic direction",
      isChair: true,
    },
    {
      id: 2,
      position: "Member",
      ministry: "Ministry of National Defense",
      icon: Shield,
      gradient: "from-red-500 to-rose-600",
      bgColor: "from-red-50 to-rose-50",
      description: "Maritime security and enforcement oversight",
    },
    {
      id: 3,
      position: "Member",
      ministry: "Ministry of Finance & Development Planning",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      description: "Financial oversight and budget approval",
    },
    {
      id: 4,
      position: "Member",
      ministry: "Ministry of Commerce & Industry",
      icon: Briefcase,
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      description: "Trade and commercial fisheries development",
    },
    {
      id: 5,
      position: "Member",
      ministry: "Liberia Maritime Authority",
      icon: Target,
      gradient: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50",
      description: "Maritime compliance and vessel licensing",
    },
  ],
  public: [
    {
      id: 6,
      position: "Public Member",
      category: "Industry Expert",
      icon: Star,
      gradient: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      description: "Brings private sector and industry expertise",
    },
    {
      id: 7,
      position: "Public Member",
      category: "Community Representative",
      icon: Users,
      gradient: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
      description: "Represents fishing communities and stakeholders",
    },
    {
      id: 8,
      position: "Public Member",
      category: "Technical Specialist",
      icon: Award,
      gradient: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-50",
      description: "Provides technical and scientific guidance",
    },
    {
      id: 9,
      position: "Public Member",
      category: "Environmental Advocate",
      icon: Target,
      gradient: "from-lime-500 to-green-600",
      bgColor: "from-lime-50 to-green-50",
      description: "Ensures sustainable resource management",
    },
  ],
};

const boardFunctions = [
  {
    title: "Policy Development",
    description: "Establish and adopt necessary policies and procedures to ensure efficient Authority functioning",
    icon: FileCheck,
    color: "blue",
  },
  {
    title: "Governance & Accountability",
    description: "Provide general control and accountability to the President for exercise of Authority functions",
    icon: Scale,
    color: "purple",
  },
  {
    title: "Strategic Guidance",
    description: "Guide Director General on conservation, management, development and sustainable resource use",
    icon: Target,
    color: "green",
  },
  {
    title: "Policy Recommendations",
    description: "Review and recommend overall policy in matters within the scope of the Act and Regulations",
    icon: BookOpen,
    color: "orange",
  },
  {
    title: "Access Agreements",
    description: "Review and approve recommendations on proposed Access Agreements under the Act",
    icon: FileText,
    color: "cyan",
  },
  {
    title: "Financial Oversight",
    description: "Approve annual budget, financial plan, HR Management Plan and oversee all financial matters",
    icon: TrendingUp,
    color: "emerald",
  },
  {
    title: "Annual Reports",
    description: "Endorse required annual reports and perform duties as provided in the Act and Regulations",
    icon: CheckCircle2,
    color: "indigo",
  },
];

const vacationReasons = [
  {
    title: "Resignation",
    icon: UserCheck,
    gradient: "from-blue-500 to-blue-600",
    description: "Upon written notice to the President. Takes effect upon receipt or acknowledgement.",
  },
  {
    title: "Removal",
    icon: XCircle,
    gradient: "from-red-500 to-red-600",
    description: "President may remove on Board recommendation for prolonged sickness, conviction, or inability to discharge duties.",
  },
  {
    title: "Death",
    icon: AlertCircle,
    gradient: "from-gray-500 to-gray-600",
    description: "President nominates replacement within 60 days to serve unexpired term.",
  },
];

export default function BoardOfDirectorsPage() {
  const [activeTab, setActiveTab] = useState<"members" | "functions" | "procedures">("members");
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-nafaa-ocean via-blue-700 to-nafaa-ocean-light text-white py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-10">
              <Image src="/board-hero.jpg" alt="Board of Directors" fill className="object-cover" />
            </div>
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
              }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
                <Shield className="mr-2 h-4 w-4" />
                Governance
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Board of Directors
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                The governing body providing strategic oversight, policy guidance, and accountability 
                for NaFAA's operations and mandate
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Total Members", value: "9", icon: Users },
                  { label: "Statutory", value: "5", icon: Shield },
                  { label: "Public", value: "4", icon: Star },
                  { label: "Term Years", value: "4", icon: Clock },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <stat.icon className="w-6 h-6 mb-2 text-blue-200" />
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

        {/* Board Overview */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean-light rounded-2xl mb-6 shadow-xl"
              >
                <Users className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-5xl font-bold text-nafaa-ocean mb-6">Board Composition</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-nafaa-ocean via-nafaa-coral to-nafaa-ocean mx-auto rounded-full mb-8" />
              
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                The Board consists of nine (9) members appointed by the President, bringing together 
                government expertise and public representation to guide NaFAA's strategic direction.
              </p>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-gray-100 rounded-2xl p-2 shadow-inner">
                {[
                  { key: "members", label: "Board Members", icon: Users },
                  { key: "functions", label: "Functions", icon: Target },
                  { key: "procedures", label: "Procedures", icon: FileCheck },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === tab.key
                        ? "bg-white text-nafaa-ocean shadow-lg"
                        : "text-gray-600 hover:text-nafaa-ocean"
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "members" && (
              <div className="space-y-12">
                {/* Statutory Members */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-nafaa-ocean">Statutory Members</h3>
                      <p className="text-gray-600">Government ministry representatives (5 members)</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {boardMembers.statutory.map((member, idx) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -8 }}
                        onMouseEnter={() => setHoveredMember(member.id)}
                        onMouseLeave={() => setHoveredMember(null)}
                      >
                        <Card className={`border-0 shadow-xl overflow-hidden h-full ${
                          member.isChair ? "ring-2 ring-amber-400" : ""
                        }`}>
                          <div className={`bg-gradient-to-r ${member.gradient} p-6 text-white relative`}>
                            {member.isChair && (
                              <Badge className="absolute top-4 right-4 bg-white/90 text-amber-600 border-0">
                                <Crown className="w-3 h-3 mr-1" />
                                Chair
                              </Badge>
                            )}
                            <member.icon className="w-12 h-12 mb-4 opacity-90" />
                            <h4 className="text-lg font-bold mb-2">{member.ministry}</h4>
                            <p className="text-sm text-white/80">{member.position}</p>
                          </div>
                          <CardContent className="p-6">
                            <div className={`bg-gradient-to-br ${member.bgColor} rounded-xl p-4 border border-gray-200`}>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {member.description}
                              </p>
                            </div>
                            {member.isChair && (
                              <div className="mt-4 flex items-center gap-2 text-sm text-amber-600">
                                <Crown className="w-4 h-4" />
                                <span className="font-semibold">Leads Board Meetings</span>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Public Members */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-nafaa-ocean">Public Members</h3>
                      <p className="text-gray-600">Selected from the public based on expertise (4 members)</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {boardMembers.public.map((member, idx) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -8 }}
                      >
                        <Card className="border-0 shadow-xl overflow-hidden h-full">
                          <div className={`bg-gradient-to-r ${member.gradient} p-6 text-white`}>
                            <member.icon className="w-12 h-12 mb-4 opacity-90" />
                            <h4 className="text-lg font-bold mb-2">{member.category}</h4>
                            <p className="text-sm text-white/80">{member.position}</p>
                          </div>
                          <CardContent className="p-6">
                            <div className={`bg-gradient-to-br ${member.bgColor} rounded-xl p-4 border border-gray-200`}>
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {member.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Ex-Officio Member */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Card className="border-0 shadow-2xl overflow-hidden max-w-2xl mx-auto">
                    <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-6 text-white">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                          <Briefcase className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold">Ex-Officio Member</h4>
                          <p className="text-gray-200">Secretary of the Board (Non-Voting)</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-bold text-gray-900 mb-2">Director General</h5>
                            <p className="text-gray-700 leading-relaxed mb-3">
                              Serves as Secretary of the Board in a non-voting capacity, providing administrative 
                              support, documentation, and liaison between the Board and Authority operations.
                            </p>
                            <Badge className="bg-gray-100 text-gray-700 border border-gray-300">
                              Non-Voting Status
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            )}

            {activeTab === "functions" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {boardFunctions.map((func, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                    >
                      <Card className="border-0 shadow-xl h-full overflow-hidden">
                        <div className={`bg-gradient-to-br from-${func.color}-500 to-${func.color}-600 p-6 text-white`}>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                              <func.icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold">{func.title}</h4>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <p className="text-gray-700 leading-relaxed">{func.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Remuneration Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12"
                >
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <TrendingUp className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-nafaa-ocean mb-4">Board Remuneration</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl p-5 border border-orange-200">
                              <div className="flex items-center gap-2 mb-2">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <h5 className="font-bold text-gray-900">Public Members</h5>
                              </div>
                              <p className="text-sm text-gray-700">
                                Receive board remuneration as approved in the Authority's annual budget in 
                                accordance with Government policy
                              </p>
                            </div>
                            <div className="bg-white rounded-xl p-5 border border-orange-200">
                              <div className="flex items-center gap-2 mb-2">
                                <XCircle className="w-5 h-5 text-red-600" />
                                <h5 className="font-bold text-gray-900">Statutory Members</h5>
                              </div>
                              <p className="text-sm text-gray-700">
                                Not entitled to board remuneration as they serve in their capacity as 
                                government ministry representatives
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "procedures" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl mx-auto space-y-12"
              >
                {/* Appointment Process */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <UserCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-nafaa-ocean">Appointment & Tenure</h3>
                      <p className="text-gray-600">Selection criteria and term limits</p>
                    </div>
                  </div>

                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                          <h4 className="font-bold text-nafaa-ocean mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5" />
                            Selection Criteria
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>Based on integrity and character</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>Gender representation considered</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>Relevant knowledge and expertise</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>Professional experience in relevant fields</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                          <h4 className="font-bold text-nafaa-ocean mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            Term & Process
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 text-nafaa-ocean flex-shrink-0 mt-0.5" />
                              <span>Non-statutory members serve 4-year terms</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 text-nafaa-ocean flex-shrink-0 mt-0.5" />
                              <span>Appointed by President with Senate consent</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 text-nafaa-ocean flex-shrink-0 mt-0.5" />
                              <span>Statutory members serve in their ministry capacity</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 text-nafaa-ocean flex-shrink-0 mt-0.5" />
                              <span>Terms may be renewable based on performance</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Vacation from Office */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-nafaa-ocean">Vacation from Office</h3>
                      <p className="text-gray-600">Circumstances and procedures for departure</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {vacationReasons.map((reason, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <Card className="border-0 shadow-xl h-full">
                          <div className={`bg-gradient-to-r ${reason.gradient} p-6 text-white`}>
                            <reason.icon className="w-10 h-10 mb-3" />
                            <h4 className="text-xl font-bold">{reason.title}</h4>
                          </div>
                          <CardContent className="p-6">
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {reason.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8"
                  >
                    <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileCheck className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h5 className="font-bold text-nafaa-ocean mb-2">Replacement Procedure</h5>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              The same procedures for appointment shall apply to the filling of any vacancy 
                              created by resignation, removal, or death. Replacement nominees must meet the 
                              same qualifications and go through Senate confirmation.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-nafaa-ocean via-blue-700 to-nafaa-ocean-light text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 70%)`,
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Committed to Excellence
              </h3>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Our Board of Directors ensures NaFAA operates with integrity, transparency, and 
                accountability in service to Liberia's fisheries sector
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-nafaa-ocean rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl"
                whileHover={{ scale: 1.05, y: -3 }}
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
