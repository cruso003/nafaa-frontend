"use client";

import { use, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  MapPin,
  DollarSign,
  Calendar,
  Users,
  Clock,
  Building,
  CheckCircle2,
  FileText,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for opportunities
const opportunitiesData: Record<string, any> = {
  "1": {
    id: "1",
    title: "Senior Fisheries Biologist",
    type: "job",
    department: "Research Division",
    employmentType: "Full-time",
    location: "Monrovia, Liberia",
    salary: "$45,000 - $60,000",
    deadline: "2025-01-15",
    postedDate: "2024-12-01",
    applicants: 23,
    featured: true,
    description: "We are seeking an experienced Senior Fisheries Biologist to lead research initiatives on sustainable fisheries management and marine conservation in Liberian waters.",
    responsibilities: [
      "Lead fisheries stock assessment programs and research projects",
      "Develop and implement sustainable fisheries management strategies",
      "Analyze fisheries data and prepare technical reports",
      "Collaborate with regional and international research institutions",
      "Supervise junior biologists and research assistants",
      "Provide scientific advice to policy makers and stakeholders",
      "Conduct field surveys and data collection activities",
    ],
    requirements: [
      "Master's degree or PhD in Marine Biology, Fisheries Science, or related field",
      "Minimum 7 years of experience in fisheries research",
      "Strong knowledge of West African fisheries and marine ecosystems",
      "Experience with statistical analysis software (R, Python, or similar)",
      "Excellent technical writing and presentation skills",
      "Valid driver's license and ability to conduct field work",
      "Proficiency in English; knowledge of local languages is a plus",
    ],
    benefits: [
      "Competitive salary with annual performance reviews",
      "Health insurance for employee and family",
      "30 days annual leave plus public holidays",
      "Professional development opportunities",
      "Research grant support",
      "Pension contribution",
    ],
    howToApply: "Submit your application through our online portal. Include your CV, cover letter, copies of academic certificates, and contact information for three professional references.",
    contactPerson: "Dr. Sarah Johnson",
    contactEmail: "recruitment@nafaa.gov.lr",
    contactPhone: "+231-77-123-4567",
  },
  "2": {
    id: "2",
    title: "Fisheries Enforcement Officer",
    type: "job",
    department: "Compliance & Enforcement",
    employmentType: "Full-time",
    location: "Grand Bassa County",
    salary: "$28,000 - $35,000",
    deadline: "2025-01-20",
    postedDate: "2024-12-05",
    applicants: 45,
    featured: true,
    description: "Join our enforcement team to protect Liberia's marine resources. This position involves monitoring fishing activities, conducting inspections, and enforcing fisheries regulations.",
    responsibilities: [
      "Conduct routine inspections of fishing vessels and landing sites",
      "Monitor compliance with fishing regulations and licensing requirements",
      "Investigate reports of illegal fishing activities",
      "Issue warnings and citations for violations",
      "Prepare enforcement reports and documentation",
      "Collaborate with Coast Guard and maritime authorities",
      "Educate fishers on regulations and best practices",
    ],
    requirements: [
      "Bachelor's degree in Fisheries, Marine Science, Law Enforcement, or related field",
      "Minimum 3 years of experience in enforcement or compliance work",
      "Knowledge of fisheries laws and regulations",
      "Strong communication and interpersonal skills",
      "Physical fitness and ability to work in maritime conditions",
      "Valid driver's license; boat handling skills preferred",
      "Computer literacy and report writing skills",
    ],
    benefits: [
      "Competitive salary package",
      "Health and life insurance",
      "25 days annual leave",
      "Specialized training opportunities",
      "Uniform and equipment provided",
      "Field allowances",
    ],
    howToApply: "Apply online with your CV, cover letter, police clearance certificate, and academic credentials. Successful candidates will undergo physical fitness assessment and background check.",
    contactPerson: "Commander James Wilson",
    contactEmail: "enforcement@nafaa.gov.lr",
    contactPhone: "+231-77-234-5678",
  },
  "7": {
    id: "7",
    title: "Master's in Marine Science Scholarship",
    type: "scholarship",
    provider: "NaFAA & University of Ghana",
    scholarshipType: "Full Scholarship",
    location: "Accra, Ghana",
    value: "Full tuition + $1,000/month stipend",
    deadline: "2025-02-28",
    postedDate: "2024-11-15",
    applicants: 67,
    featured: true,
    duration: "2 years",
    description: "A prestigious scholarship opportunity for Liberian nationals to pursue a Master's degree in Marine Science at the University of Ghana, focusing on West African fisheries and marine conservation.",
    coverage: [
      "Full tuition fees for 2-year program",
      "Monthly stipend of $1,000 for living expenses",
      "Roundtrip airfare (Monrovia-Accra)",
      "Health insurance coverage",
      "Research grant up to $3,000",
      "Books and study materials allowance",
    ],
    requirements: [
      "Bachelor's degree in Biology, Environmental Science, or related field",
      "Minimum GPA of 3.0 on 4.0 scale",
      "Liberian citizenship",
      "English proficiency (TOEFL/IELTS or equivalent)",
      "Statement of purpose (2-3 pages)",
      "Two academic recommendation letters",
      "Commitment to return to Liberia after studies",
    ],
    researchAreas: [
      "Fisheries stock assessment",
      "Marine biodiversity conservation",
      "Coastal ecosystem management",
      "Climate change impacts on fisheries",
      "Sustainable aquaculture",
    ],
    applicationProcess: [
      "Submit online application form",
      "Upload academic transcripts and certificates",
      "Provide statement of purpose and research interests",
      "Submit two recommendation letters",
      "Complete University of Ghana admission application",
      "Shortlisted candidates will be interviewed",
    ],
    howToApply: "Complete the online scholarship application form and upload all required documents. Shortlisted candidates will be invited for an interview in January 2025.",
    contactPerson: "Ms. Grace Mensah",
    contactEmail: "scholarships@nafaa.gov.lr",
    contactPhone: "+231-77-345-6789",
  },
  "8": {
    id: "8",
    title: "PhD in Fisheries Economics",
    type: "scholarship",
    provider: "NaFAA & World Bank",
    scholarshipType: "Full Scholarship",
    location: "University of Rhode Island, USA",
    value: "Full tuition + $2,500/month stipend",
    deadline: "2025-03-15",
    postedDate: "2024-11-20",
    applicants: 23,
    featured: true,
    duration: "4 years",
    description: "An exceptional opportunity to pursue doctoral studies in Fisheries Economics, with focus on sustainable livelihoods and economic development in West African fisheries sector.",
    coverage: [
      "Full tuition and fees for 4-year PhD program",
      "Monthly stipend of $2,500",
      "Annual roundtrip airfare",
      "Comprehensive health insurance",
      "Conference attendance support (up to $5,000/year)",
      "Research and dissertation funding",
    ],
    requirements: [
      "Master's degree in Economics, Marine Policy, Development Studies, or related field",
      "Minimum GPA of 3.5 on 4.0 scale",
      "Strong quantitative and analytical skills",
      "Research experience demonstrated through publications or projects",
      "GRE scores (minimum 310 combined verbal and quantitative)",
      "TOEFL iBT 90+ or IELTS 7.0+",
      "Detailed research proposal (5-7 pages)",
      "Three academic recommendation letters",
    ],
    researchAreas: [
      "Fisheries value chain analysis",
      "Economic impacts of fisheries policies",
      "Market systems for small-scale fisheries",
      "Trade and export dynamics",
      "Blue economy development",
    ],
    applicationProcess: [
      "Submit NaFAA scholarship application online",
      "Apply separately to University of Rhode Island PhD program",
      "Prepare comprehensive research proposal",
      "Obtain three academic recommendation letters",
      "Submit GRE and TOEFL scores",
      "NaFAA selection committee review",
      "University admission decision",
    ],
    howToApply: "Applications must be submitted through both NaFAA scholarship portal and URI graduate school. Complete application package required by deadline.",
    contactPerson: "Dr. Emmanuel Toe",
    contactEmail: "phd-scholarships@nafaa.gov.lr",
    contactPhone: "+231-77-456-7890",
  },
};

// Related opportunities
const relatedOpportunities = [
  {
    id: "3",
    title: "Data Analyst",
    type: "job" as const,
    location: "Monrovia",
    salary: "$32,000 - $42,000",
    deadline: "2025-01-25",
  },
  {
    id: "4",
    title: "Community Outreach Coordinator",
    type: "job" as const,
    location: "Multiple Locations",
    salary: "$25,000 - $32,000",
    deadline: "2025-02-01",
  },
  {
    id: "9",
    title: "Aquaculture Training Certificate",
    type: "scholarship" as const,
    location: "Online + Kenya",
    value: "$5,000 grant",
    deadline: "2025-01-31",
  },
];

export default function OpportunityDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [saved, setSaved] = useState(false);
  const { id } = use(params);
  const opportunity = opportunitiesData[id];

  if (!opportunity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Opportunity Not Found
          </h1>
          <Link href="/opportunities">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Opportunities
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const isJob = opportunity.type === "job";
  const daysRemaining = Math.ceil(
    (new Date(opportunity.deadline).getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Back button */}
        <Link href="/opportunities">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Opportunities
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Header card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`p-4 rounded-xl ${
                    isJob ? "bg-blue-100" : "bg-green-100"
                  }`}
                >
                  {isJob ? (
                    <Briefcase className="h-8 w-8 text-blue-600" />
                  ) : (
                    <GraduationCap className="h-8 w-8 text-green-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">{opportunity.type}</Badge>
                    {opportunity.featured && (
                      <Badge className="bg-yellow-500">Featured</Badge>
                    )}
                    {daysRemaining <= (isJob ? 7 : 14) && (
                      <Badge variant="destructive">
                        {daysRemaining} days left
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {opportunity.title}
                  </h1>
                  <p className="text-lg text-gray-600 mb-4">
                    {isJob
                      ? opportunity.department
                      : opportunity.provider}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      <span>
                        {isJob ? opportunity.salary : opportunity.value}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Deadline: {formatDate(opportunity.deadline)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{opportunity.applicants} applicants</span>
                    </div>
                    {isJob && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building className="h-4 w-4" />
                        <span>{opportunity.employmentType}</span>
                      </div>
                    )}
                    {!isJob && opportunity.duration && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{opportunity.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href={`/opportunities/apply?id=${opportunity.id}&type=${opportunity.type}`}
                  className="flex-1"
                >
                  <Button size="lg" className="w-full">
                    Apply Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setSaved(!saved)}
                >
                  <Bookmark
                    className={`h-5 w-5 ${saved ? "fill-current" : ""}`}
                  />
                </Button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {isJob ? "Job Description" : "Scholarship Description"}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {opportunity.description}
              </p>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Requirements
              </h2>
              <ul className="space-y-3">
                {opportunity.requirements.map(
                  (requirement: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Responsibilities (jobs) or Coverage/Benefits (scholarships) */}
            {isJob ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {opportunity.responsibilities.map(
                    (responsibility: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Scholarship Coverage
                </h2>
                <ul className="space-y-3">
                  {opportunity.coverage.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits (jobs only) */}
            {isJob && opportunity.benefits && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {opportunity.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Research Areas (scholarships only) */}
            {!isJob && opportunity.researchAreas && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Research Areas
                </h2>
                <ul className="space-y-3">
                  {opportunity.researchAreas.map(
                    (area: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{area}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {/* Application Process (scholarships only) */}
            {!isJob && opportunity.applicationProcess && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Application Process
                </h2>
                <ol className="space-y-3">
                  {opportunity.applicationProcess.map(
                    (step: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-gray-600 pt-0.5">{step}</span>
                      </li>
                    )
                  )}
                </ol>
              </div>
            )}

            {/* How to Apply */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                How to Apply
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {opportunity.howToApply}
              </p>
              <Link
                href={`/opportunities/apply?id=${opportunity.id}&type=${opportunity.type}`}
              >
                <Button size="lg" className="w-full">
                  <FileText className="mr-2 h-5 w-5" />
                  Start Application
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Deadline countdown */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-sm p-6 text-white">
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-3 opacity-90" />
                <h3 className="text-lg font-semibold mb-2">
                  Application Deadline
                </h3>
                <p className="text-3xl font-bold mb-1">{daysRemaining}</p>
                <p className="text-sm opacity-90">days remaining</p>
                <p className="text-sm opacity-75 mt-3">
                  {formatDate(opportunity.deadline)}
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Contact Person</p>
                  <p className="font-semibold text-gray-900">
                    {opportunity.contactPerson}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Email</p>
                  <a
                    href={`mailto:${opportunity.contactEmail}`}
                    className="text-blue-600 hover:underline"
                  >
                    {opportunity.contactEmail}
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Phone</p>
                  <a
                    href={`tel:${opportunity.contactPhone}`}
                    className="text-blue-600 hover:underline"
                  >
                    {opportunity.contactPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Share */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Share This Opportunity
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        window.location.href
                      )}&text=${encodeURIComponent(opportunity.title)}`,
                      "_blank"
                    )
                  }
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        window.location.href
                      )}`,
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      `mailto:?subject=${encodeURIComponent(
                        opportunity.title
                      )}&body=${encodeURIComponent(window.location.href)}`,
                      "_blank"
                    )
                  }
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>

            {/* Related opportunities */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Similar Opportunities
              </h3>
              <div className="space-y-4">
                {relatedOpportunities
                  .filter((opp) => opp.id !== opportunity.id)
                  .slice(0, 3)
                  .map((opp) => (
                    <Link
                      key={opp.id}
                      href={`/opportunities/${opp.id}`}
                      className="block group"
                    >
                      <div className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                        <div className="flex items-start gap-3">
                          <div
                            className={`p-2 rounded-lg ${
                              opp.type === "job"
                                ? "bg-blue-100"
                                : "bg-green-100"
                            }`}
                          >
                            {opp.type === "job" ? (
                              <Briefcase className="h-4 w-4 text-blue-600" />
                            ) : (
                              <GraduationCap className="h-4 w-4 text-green-600" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 mb-1 line-clamp-2">
                              {opp.title}
                            </h4>
                            <p className="text-xs text-gray-500 mb-1">
                              {opp.location}
                            </p>
                            <p className="text-xs font-semibold text-gray-700">
                              {'salary' in opp ? opp.salary : opp.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Quick apply CTA */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Ready to Apply?</h3>
              <p className="text-sm opacity-90 mb-4">
                Don't miss this opportunity. Submit your application before the
                deadline.
              </p>
              <Link
                href={`/opportunities/apply?id=${opportunity.id}&type=${opportunity.type}`}
              >
                <Button
                  size="lg"
                  className="w-full bg-white text-green-700 hover:bg-gray-100"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
