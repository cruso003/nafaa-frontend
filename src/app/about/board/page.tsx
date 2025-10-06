"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Mail, Phone, Award, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const boardMembers = [
  {
    id: 1,
    name: "[Board Chairperson Name]",
    title: "Chairperson, Board of Directors",
    representing: "Presidential Appointee",
    image: "/board/chairperson.jpg",
    bio: "The Board Chairperson provides strategic oversight and ensures NaFAA operates in accordance with its mandate and national fisheries policies.",
    email: "board.chair@nafaa.gov.lr",
  },
  {
    id: 2,
    name: "[Member Name]",
    title: "Board Member",
    representing: "Ministry of Agriculture",
    image: "/board/member1.jpg",
    bio: "Represents the Ministry of Agriculture's interests in fisheries policy and agricultural integration.",
    email: "board.member1@nafaa.gov.lr",
  },
  {
    id: 3,
    name: "[Member Name]",
    title: "Board Member",
    representing: "Ministry of Finance",
    image: "/board/member2.jpg",
    bio: "Ensures financial accountability and oversees budgetary compliance for NaFAA operations.",
    email: "board.member2@nafaa.gov.lr",
  },
  {
    id: 4,
    name: "[Member Name]",
    title: "Board Member",
    representing: "Environmental Protection Agency",
    image: "/board/member3.jpg",
    bio: "Champions environmental sustainability and marine conservation in fisheries management.",
    email: "board.member3@nafaa.gov.lr",
  },
  {
    id: 5,
    name: "[Member Name]",
    title: "Board Member",
    representing: "Fishermen's Association",
    image: "/board/member4.jpg",
    bio: "Represents the interests of local fishing communities and artisanal fishermen.",
    email: "board.member4@nafaa.gov.lr",
  },
  {
    id: 6,
    name: "[Member Name]",
    title: "Board Member",
    representing: "Private Sector - Fishing Industry",
    image: "/board/member5.jpg",
    bio: "Brings commercial fishing industry perspectives to policy and regulatory decisions.",
    email: "board.member5@nafaa.gov.lr",
  },
];

export default function BoardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Page Hero */}
        <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean-light to-nafaa-ocean text-white py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/board-hero.jpg"
              alt="Board of Directors"
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
                Governance
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Board of Directors
              </h1>
              <p className="text-xl text-blue-100">
                Providing strategic oversight and policy direction for sustainable fisheries management
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
                Governance & Oversight
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The NaFAA Board of Directors comprises distinguished representatives from government ministries, 
                regulatory agencies, fishing communities, and the private sector. The Board provides strategic 
                direction, ensures accountability, and safeguards the sustainable use of Liberia's marine resources 
                for current and future generations.
              </p>
            </motion.div>

            {/* Board Responsibilities */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean flex items-center justify-center mx-auto mb-4">
                      <Award className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-center text-nafaa-ocean">
                      Policy Oversight
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center text-sm">
                      Establishing fisheries policies, approving regulations, and ensuring compliance with national and international standards
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean-light flex items-center justify-center mx-auto mb-4">
                      <Building2 className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-center text-nafaa-ocean">
                      Strategic Direction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center text-sm">
                      Setting organizational goals, approving strategic plans, and guiding NaFAA's long-term vision
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00A86B] to-[#00D084] flex items-center justify-center mx-auto mb-4">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-center text-nafaa-ocean">
                      Accountability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center text-sm">
                      Monitoring financial performance, reviewing audits, and ensuring transparent and effective operations
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Board Members */}
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
                Meet the Board
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A diverse group of leaders representing stakeholders across government, industry, and communities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all group overflow-hidden">
                    {/* Image Section */}
                    <div className="relative h-64 bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <Users className="w-16 h-16 text-white/50" />
                        </div>
                      </div>
                      {/* Placeholder for actual image */}
                      {/* <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      /> */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-white/90 text-nafaa-ocean">
                        {member.representing}
                      </Badge>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-nafaa-ocean mb-2 group-hover:text-nafaa-ocean transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm font-semibold text-nafaa-ocean mb-4">
                        {member.title}
                      </p>
                      <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                        {member.bio}
                      </p>

                      {/* Contact */}
                      <div className="pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-nafaa-ocean" />
                          <a
                            href={`mailto:${member.email}`}
                            className="text-sm text-gray-600 hover:text-nafaa-ocean transition-colors truncate"
                          >
                            {member.email}
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

        {/* Meeting Schedule */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl bg-gradient-to-br from-nafaa-ocean/5 to-nafaa-ocean/5">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nafaa-ocean to-nafaa-ocean flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-nafaa-ocean mb-4">
                        Board Meetings
                      </h3>
                      <p className="text-gray-700 mb-4">
                        The Board of Directors meets quarterly to review organizational performance, approve policies, 
                        and provide strategic guidance. Special meetings are convened as needed to address urgent matters 
                        affecting Liberia's fisheries sector.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center gap-3">
                          <span className="text-nafaa-ocean font-semibold">Frequency:</span>
                          <span className="text-gray-700">Quarterly</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-nafaa-ocean font-semibold">Location:</span>
                          <span className="text-gray-700">NaFAA Headquarters</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
