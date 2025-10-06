"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ClipboardList,
  CheckCircle,
  Clock,
  ArrowLeft,
  ArrowRight,
  FileText,
  AlertTriangle,
  Fish,
  BarChart3,
  Scale,
} from "lucide-react";

const reportingRequirements = [
  {
    id: "commercial",
    title: "Commercial Fishing Operations",
    description: "Mandatory daily catch reports for all commercial vessels",
    frequency: "Daily",
    icon: BarChart3,
    required: [
      "Species caught and quantities",
      "Total weight per species (kg)",
      "Fishing location (GPS coordinates)",
      "Fishing gear/method used",
      "Number of crew members",
      "Vessel trip start and end times",
    ],
    deadline: "Within 24 hours of landing",
  },
  {
    id: "artisanal",
    title: "Artisanal Fishing",
    description: "Weekly catch reports for small-scale operations",
    frequency: "Weekly",
    icon: Fish,
    required: [
      "Species caught and approximate quantities",
      "Fishing location (general area)",
      "Fishing methods used",
      "Number of fishing days",
    ],
    deadline: "End of each week (Sunday by 6 PM)",
  },
  {
    id: "recreational",
    title: "Recreational Fishing",
    description: "Optional reporting, but encouraged for conservation",
    frequency: "Optional",
    icon: Scale,
    required: [
      "Species caught (if known)",
      "Approximate quantities",
      "Fishing location",
      "Whether fish were kept or released",
    ],
    deadline: "Anytime (voluntary)",
  },
];

const reportingProcess = [
  {
    step: 1,
    title: "Access Portal",
    description: "Log into your NaFAA portal account",
  },
  {
    step: 2,
    title: "Navigate to Reports",
    description: "Go to 'Catch Reports' section in your dashboard",
  },
  {
    step: 3,
    title: "Enter Catch Data",
    description: "Fill in species, weights, location, and fishing details",
  },
  {
    step: 4,
    title: "Attach Photos",
    description: "Upload photos of catch (optional but recommended)",
  },
  {
    step: 5,
    title: "Submit Report",
    description: "Review and submit your catch report",
  },
  {
    step: 6,
    title: "Receive Confirmation",
    description: "Get confirmation number for your records",
  },
];

const whyReport = [
  {
    title: "Sustainable Fisheries",
    description: "Help maintain healthy fish populations for future generations",
    icon: Fish,
  },
  {
    title: "Conservation Data",
    description: "Contribute to scientific research and marine conservation efforts",
    icon: BarChart3,
  },
  {
    title: "Legal Compliance",
    description: "Meet regulatory requirements and maintain your fishing license",
    icon: CheckCircle,
  },
  {
    title: "Better Management",
    description: "Support evidence-based fisheries management decisions",
    icon: FileText,
  },
];

const commonSpecies = [
  "Yellowfin Tuna",
  "Skipjack Tuna",
  "Bigeye Tuna",
  "Atlantic Sailfish",
  "Blue Marlin",
  "Barracuda",
  "Red Snapper",
  "Grouper",
  "Mahi-Mahi",
  "Wahoo",
  "King Mackerel",
  "Spanish Mackerel",
  "Tilapia",
  "Catfish",
  "Cassava Fish",
  "Other (specify in report)",
];

export default function CatchReportingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-nafaa-ocean to-[#0039A6] text-white py-16">
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
              <ClipboardList className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Catch Reporting
              </h1>
              <p className="text-xl text-blue-100">
                Report your catches and contribute to sustainable fisheries management
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
                  Ready to Submit Your Catch Report?
                </h2>
                <p className="text-gray-700 text-lg">
                  Quick and easy reporting from your portal dashboard. Track all your submissions in one place.
                </p>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="/portal/reports/submit">
                  Submit Report
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Why Report */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Report Your Catch?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyReport.map((reason) => {
              const Icon = reason.icon;
              return (
                <Card key={reason.title} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Reporting Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Reporting Requirements by License Type</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reportingRequirements.map((requirement) => {
              const Icon = requirement.icon;
              return (
                <motion.div
                  key={requirement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{requirement.title}</CardTitle>
                      <CardDescription>{requirement.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Frequency</span>
                        <Badge variant="secondary" className="text-base font-bold">
                          {requirement.frequency}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{requirement.deadline}</span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Required Information:</h4>
                        <ul className="space-y-2">
                          {requirement.required.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
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

        {/* Reporting Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Submit a Report</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportingProcess.map((item) => (
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

        {/* Common Species */}
        <section className="mb-16">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fish className="h-5 w-5 text-green-600" />
                Common Species in Liberian Waters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Here are the most commonly caught species that you can report:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {commonSpecies.map((species) => (
                  <div key={species} className="flex items-center gap-2 p-2 bg-white rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{species}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Penalties Warning */}
        <section className="mb-16">
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-800">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                Important: Reporting Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900">
              <p className="mb-4">
                <strong>Commercial license holders</strong> are legally required to submit catch reports. 
                Failure to comply may result in:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Warnings and fines for first-time offenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>License suspension for repeated violations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Inability to renew licenses without up-to-date reports</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Bottom CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Submit Your Catch Report Today</h2>
              <p className="text-xl mb-8 text-blue-100">
                Fast, easy, and essential for sustainable fisheries. Stay compliant and support conservation!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8" asChild>
                  <Link href="/portal/reports/submit">
                    Submit Report
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-600 px-8" asChild>
                  <Link href="/portal/reports">
                    View Past Reports
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
