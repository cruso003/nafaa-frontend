"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Ship,
  CheckCircle,
  Clock,
  ArrowLeft,
  ArrowRight,
  FileText,
  Shield,
  Anchor,
  Waves,
} from "lucide-react";

const vesselTypes = [
  {
    id: "commercial",
    title: "Commercial Fishing Vessel",
    description: "Large-scale fishing operations with advanced equipment",
    fee: "$1,200/registration",
    icon: Ship,
    requirements: [
      "Proof of vessel ownership (Bill of Sale)",
      "Builder's Certificate or Import Documentation",
      "Business registration certificate",
      "Insurance certificate (required for vessels over 15m)",
      "Vessel specifications and measurements",
    ],
    processingTime: "5-7 business days",
  },
  {
    id: "artisanal",
    title: "Artisanal Fishing Boat",
    description: "Small-scale traditional fishing boats",
    fee: "$300/registration",
    icon: Anchor,
    requirements: [
      "Proof of vessel ownership",
      "National ID or passport of owner",
      "Boat specifications",
      "Community fishing association membership (if applicable)",
    ],
    processingTime: "3-4 business days",
  },
  {
    id: "carrier",
    title: "Fish Carrier & Processing",
    description: "Vessels for transporting and processing fish",
    fee: "$1,500/registration",
    icon: Waves,
    requirements: [
      "Proof of vessel ownership",
      "Business registration certificate",
      "Health and safety certificates",
      "Processing facility certification (for processing vessels)",
      "Insurance certificate",
    ],
    processingTime: "7-10 business days",
  },
  {
    id: "recreational",
    title: "Recreational Boat",
    description: "Personal boats for sport fishing and leisure",
    fee: "$150/registration",
    icon: Shield,
    requirements: [
      "Valid government-issued ID",
      "Proof of boat ownership",
      "Boat specifications",
    ],
    processingTime: "2-3 business days",
  },
];

const registrationSteps = [
  {
    step: 1,
    title: "Create Portal Account",
    description: "Sign up for a NaFAA portal account to begin",
  },
  {
    step: 2,
    title: "Choose Vessel Type",
    description: "Select the appropriate vessel category",
  },
  {
    step: 3,
    title: "Submit Application",
    description: "Complete the form with vessel details and upload documents",
  },
  {
    step: 4,
    title: "Pay Registration Fee",
    description: "Complete payment via mobile money or bank transfer",
  },
  {
    step: 5,
    title: "Vessel Inspection",
    description: "Physical inspection scheduled (if required for vessel type)",
  },
  {
    step: 6,
    title: "Receive Certificate",
    description: "Download your vessel registration certificate",
  },
];

const requiredDocuments = [
  "Proof of vessel ownership (Bill of Sale or Transfer Agreement)",
  "Builder's Certificate or Import Documentation",
  "Valid business registration for commercial vessels",
  "Passport or National ID of vessel owner",
  "Vessel specifications and measurements",
  "Insurance certificate (for vessels over 15 meters)",
  "Recent photographs of the vessel (multiple angles)",
];

export default function VesselRegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#002868] to-[#0039A6] text-white py-16">
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
              <Ship className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Vessel Registration
              </h1>
              <p className="text-xl text-blue-100">
                Official registration for all fishing vessels operating in Liberian waters
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* CTA Banner */}
        <Card className="mb-12 border-2 border-blue-500 shadow-xl bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Register Your Vessel?
                </h2>
                <p className="text-gray-700 text-lg">
                  Register and manage your vessel documentation securely in your portal dashboard
                </p>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="/portal/vessels/register">
                  Register in Portal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Vessel Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vessel Categories & Fees</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {vesselTypes.map((vessel) => {
              const Icon = vessel.icon;
              return (
                <motion.div
                  key={vessel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{vessel.title}</CardTitle>
                      <CardDescription>{vessel.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Registration Fee</span>
                        <Badge variant="secondary" className="text-lg font-bold">
                          {vessel.fee}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Processing: {vessel.processingTime}</span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                        <ul className="space-y-2">
                          {vessel.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
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

        {/* Registration Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Registration Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registrationSteps.map((item) => (
              <Card key={item.step} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-2xl rounded-bl-3xl">
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

        {/* Required Documents */}
        <section className="mb-16">
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-amber-600" />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Please prepare the following documents before starting your application:</p>
              <ul className="space-y-2">
                {requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-600" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Important Information */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Validity Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Vessel registrations are valid for <strong>5 years</strong> from the date of issuance. 
                  Renewal applications should be submitted at least 30 days before expiration.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg">Inspection Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Physical inspection is required for commercial vessels over 15 meters in length 
                  and all processing vessels. Our team will contact you to schedule an inspection.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Register Your Vessel Today</h2>
              <p className="text-xl mb-8 text-blue-100">
                Ensure legal compliance and access fishing zones. Complete registration in 2-10 business days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" asChild>
                  <Link href="/portal/vessels/register">
                    Start Registration
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600 px-8" asChild>
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
