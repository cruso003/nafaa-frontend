"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  Globe,
  Building2,
  Users,
  Handshake,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const internationalPartners = [
  {
    id: 1,
    name: "Food and Agriculture Organization (FAO)",
    type: "UN Agency",
    description: "Technical assistance and capacity building for sustainable fisheries management",
    region: "Global",
    logo: "🌐",
    website: "fao.org",
    focus: ["Technical Support", "Capacity Building", "Policy Development"],
  },
  {
    id: 2,
    name: "World Bank",
    type: "Financial Institution",
    description: "Funding and technical support for fisheries sector development projects",
    region: "Global",
    logo: "🏦",
    website: "worldbank.org",
    focus: ["Project Funding", "Economic Analysis", "Infrastructure"],
  },
  {
    id: 3,
    name: "European Union",
    type: "Regional Organization",
    description: "Trade partnerships and support for sustainable fishing practices",
    region: "Europe",
    logo: "🇪🇺",
    website: "europa.eu",
    focus: ["Trade", "Sustainability", "Market Access"],
  },
  {
    id: 4,
    name: "Conservation International",
    type: "NGO",
    description: "Marine conservation and protected area management support",
    region: "Global",
    logo: "🌿",
    website: "conservation.org",
    focus: ["Conservation", "MPAs", "Biodiversity"],
  },
];

const regionalPartners = [
  {
    id: 5,
    name: "ECOWAS Commission",
    type: "Regional Body",
    description: "Regional fisheries cooperation and policy harmonization",
    region: "West Africa",
    logo: "🤝",
    website: "ecowas.int",
    focus: ["Regional Cooperation", "Policy Harmonization", "Trade"],
  },
  {
    id: 6,
    name: "FCWC (Fishery Committee for the West Central Gulf of Guinea)",
    type: "Regional Fisheries Body",
    description: "Coordinated management of shared fish stocks in West Africa",
    region: "West Africa",
    logo: "🐟",
    website: "fcwc-fish.org",
    focus: ["Stock Management", "MCS", "Regional Coordination"],
  },
  {
    id: 7,
    name: "West Africa Biodiversity and Climate Change (WA BiCC)",
    type: "Regional Program",
    description: "Climate adaptation and biodiversity conservation in fisheries",
    region: "West Africa",
    logo: "🌍",
    website: "wabicc.org",
    focus: ["Climate Change", "Adaptation", "Biodiversity"],
  },
];

const localPartners = [
  {
    id: 8,
    name: "University of Liberia - Marine Science Department",
    type: "Academic Institution",
    description: "Research collaboration and student training programs",
    location: "Monrovia, Liberia",
    logo: "🎓",
    focus: ["Research", "Education", "Training"],
  },
  {
    id: 9,
    name: "Liberia Artisanal Fishermen Association",
    type: "Industry Association",
    description: "Representing small-scale fishers in policy and program development",
    location: "National",
    logo: "⚓",
    focus: ["Advocacy", "Community Development", "Training"],
  },
  {
    id: 10,
    name: "Environmental Protection Agency (EPA)",
    type: "Government Agency",
    description: "Environmental compliance and marine ecosystem protection",
    location: "Monrovia, Liberia",
    logo: "🏛️",
    focus: ["Environmental Protection", "Compliance", "Monitoring"],
  },
  {
    id: 11,
    name: "Liberia Maritime Authority",
    type: "Government Agency",
    description: "Maritime safety and vessel registration coordination",
    location: "Monrovia, Liberia",
    logo: "🚢",
    focus: ["Maritime Safety", "Vessel Registration", "Compliance"],
  },
];

export default function PartnershipsPage() {
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
              <Handshake className="mr-2 h-4 w-4" />
              Collaboration Network
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Partnerships & Collaboration
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Working together with international, regional, and local partners to strengthen Liberia's fisheries sector
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* International Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Globe className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#002868]">International Partners</h2>
              <p className="text-gray-600">Global organizations supporting Liberia's fisheries development</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {internationalPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{partner.logo}</div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{partner.name}</CardTitle>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary">{partner.type}</Badge>
                          <Badge variant="outline">{partner.region}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{partner.description}</p>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-700 mb-2">Focus Areas:</p>
                      <div className="flex flex-wrap gap-2">
                        {partner.focus.map((area) => (
                          <Badge key={area} className="bg-blue-50 text-blue-700 border-blue-200">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={`https://${partner.website}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regional Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#002868]">Regional Partners</h2>
              <p className="text-gray-600">West African organizations collaborating on fisheries management</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {regionalPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-3">{partner.logo}</div>
                    <CardTitle className="text-lg mb-2">{partner.name}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">{partner.type}</Badge>
                      <Badge variant="outline" className="text-xs">{partner.region}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{partner.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {partner.focus.map((area) => (
                        <Badge key={area} className="bg-green-50 text-green-700 border-green-200 text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Local Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Building2 className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#002868]">Local Partners</h2>
              <p className="text-gray-600">Liberian institutions and organizations working with NaFAA</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-3">{partner.logo}</div>
                    <CardTitle className="text-base mb-2 line-clamp-2">{partner.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs w-fit">{partner.type}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-3">{partner.description}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                      <MapPin className="h-3 w-3" />
                      {partner.location}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {partner.focus.map((area) => (
                        <Badge key={area} className="bg-purple-50 text-purple-700 border-purple-200 text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner With Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-[#002868] to-[#0066CC] text-white overflow-hidden">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
                  <p className="text-blue-100 mb-6">
                    Interested in partnering with NaFAA to support sustainable fisheries development in Liberia?
                    We welcome collaboration with international organizations, research institutions, NGOs, and private sector partners.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Handshake className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Technical Partnerships</h3>
                        <p className="text-sm text-blue-100">Capacity building and knowledge exchange</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Globe className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Research Collaboration</h3>
                        <p className="text-sm text-blue-100">Joint research projects and data sharing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Investment Opportunities</h3>
                        <p className="text-sm text-blue-100">Support for sustainable fisheries projects</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 text-gray-900">
                  <h3 className="text-xl font-bold mb-4">Partnership Inquiry</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Organization Name</label>
                      <Input placeholder="Enter organization name" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Contact Name</label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Partnership Interest</label>
                      <Textarea placeholder="Tell us about your partnership proposal..." rows={4} />
                    </div>
                    <Button size="lg" className="w-full bg-[#002868] hover:bg-[#001a4d]">
                      <Mail className="mr-2 h-4 w-4" />
                      Submit Inquiry
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
