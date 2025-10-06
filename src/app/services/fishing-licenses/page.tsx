"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  FileText,
  CheckCircle,
  Clock,
  ArrowLeft,
  ArrowRight,
  DollarSign,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";

const licenseTypes = [
  {
    id: "commercial",
    title: "Commercial License",
    description: "For large-scale commercial fishing operations",
    fee: "$800/year",
    icon: TrendingUp,
    color: "blue",
    requirements: [
      "Registered fishing vessel",
      "Business registration certificate",
      "Tax clearance certificate",
      "Previous catch reports (if renewing)",
    ],
    processingTime: "3-5 business days",
  },
  {
    id: "artisanal",
    title: "Artisanal License",
    description: "For small-scale and traditional fishing",
    fee: "$150/year",
    icon: Users,
    color: "green",
    requirements: [
      "Registered fishing boat",
      "National ID or passport",
      "Community fishing association membership (optional)",
    ],
    processingTime: "2-3 business days",
  },
  {
    id: "recreational",
    title: "Recreational License",
    description: "For sport and recreational fishing",
    fee: "$50/year",
    icon: Shield,
    color: "purple",
    requirements: [
      "Valid government-issued ID",
      "Boat registration (if applicable)",
    ],
    processingTime: "1-2 business days",
  },
];

const applicationProcess = [
  {
    step: 1,
    title: "Create Account",
    description: "Sign up for a NaFAA portal account with your email",
  },
  {
    step: 2,
    title: "Choose License Type",
    description: "Select commercial, artisanal, or recreational license",
  },
  {
    step: 3,
    title: "Submit Application",
    description: "Fill out the application form and upload required documents",
  },
  {
    step: 4,
    title: "Pay License Fee",
    description: "Complete payment via mobile money or bank transfer",
  },
  {
    step: 5,
    title: "Track Status",
    description: "Monitor your application status in your portal dashboard",
  },
  {
    step: 6,
    title: "Receive License",
    description: "Download your approved license and start fishing legally",
  },
];

export default function FishingLicensesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#00A86B] to-[#00CC80] text-white py-16">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 mb-6"
            asChild
          >
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
              <FileText className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Fishing Licenses
              </h1>
              <p className="text-xl text-green-100">
                Legal authorization for commercial, artisanal, and recreational fishing in Liberian waters
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* CTA Banner */}
        <Card className="mb-12 border-2 border-green-500 shadow-xl bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Apply for a Fishing License?
                </h2>
                <p className="text-gray-700 text-lg">
                  Apply, track, and manage your fishing licenses securely in your personal portal dashboard
                </p>
              </div>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="/portal/licenses/apply">
                  Apply in Portal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* License Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">License Types & Fees</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {licenseTypes.map((license) => {
              const Icon = license.icon;
              return (
                <motion.div
                  key={license.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-xl">{license.title}</CardTitle>
                      <CardDescription>{license.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">License Fee</span>
                        <Badge variant="secondary" className="text-lg font-bold">
                          {license.fee}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Processing: {license.processingTime}</span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                        <ul className="space-y-2">
                          {license.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Application Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationProcess.map((item) => (
              <Card key={item.step} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center font-bold text-2xl rounded-bl-3xl">
                  {item.step}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg pr-16">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-blue-600" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">We accept the following payment methods:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Orange Money</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>MTN Mobile Money</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Bank Transfer (CBL, Ecobank, UBA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>In-person payment at NaFAA offices</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Bottom CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Start Your Application Today</h2>
              <p className="text-xl mb-8 text-green-100">
                Join thousands of licensed fishers in Liberia. Apply now and get your license in 1-5 business days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" asChild>
                  <Link href="/portal/licenses/apply">
                    Apply for License
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-green-600 px-8" asChild>
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
