"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Search,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Users,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Fisheries Biologist",
    department: "Research Division",
    type: "Full-time",
    location: "Monrovia",
    salary: "$45,000 - $60,000/year",
    deadline: "2025-01-15",
    postedDate: "2024-12-10",
    applicants: 23,
    description: "Lead fisheries stock assessments and research projects to support sustainable management policies.",
    requirements: ["PhD in Marine Biology or Fisheries Science", "5+ years experience in stock assessment", "Strong data analysis skills"],
    featured: true,
  },
  {
    id: 2,
    title: "Fisheries Enforcement Officer",
    department: "Compliance & Enforcement",
    type: "Full-time",
    location: "Grand Bassa County",
    salary: "$28,000 - $35,000/year",
    deadline: "2025-01-20",
    postedDate: "2024-12-08",
    applicants: 45,
    description: "Monitor fishing activities, conduct vessel inspections, and enforce fisheries regulations in coastal areas.",
    requirements: ["Bachelor's degree in relevant field", "Law enforcement experience preferred", "Ability to work at sea"],
    featured: true,
  },
  {
    id: 3,
    title: "Data Analyst - Catch Reporting",
    department: "Data Management",
    type: "Full-time",
    location: "Monrovia",
    salary: "$32,000 - $42,000/year",
    deadline: "2025-01-25",
    postedDate: "2024-12-05",
    applicants: 34,
    description: "Analyze catch data, generate reports, and maintain fisheries databases to support decision-making.",
    requirements: ["Bachelor's in Statistics, Computer Science, or related field", "Experience with data analysis tools", "Strong SQL skills"],
    featured: false,
  },
  {
    id: 4,
    title: "Community Outreach Coordinator",
    department: "Community Relations",
    type: "Full-time",
    location: "Multiple Locations",
    salary: "$25,000 - $32,000/year",
    deadline: "2025-02-01",
    postedDate: "2024-12-03",
    applicants: 52,
    description: "Engage with fishing communities, organize training programs, and facilitate stakeholder consultations.",
    requirements: ["Bachelor's degree in Social Sciences or related field", "Experience in community development", "Fluency in local languages"],
    featured: false,
  },
  {
    id: 5,
    title: "IT Systems Administrator",
    department: "Information Technology",
    type: "Full-time",
    location: "Monrovia",
    salary: "$35,000 - $45,000/year",
    deadline: "2025-01-30",
    postedDate: "2024-12-01",
    applicants: 28,
    description: "Manage IT infrastructure, maintain online systems, and provide technical support for digital platforms.",
    requirements: ["Bachelor's in IT or Computer Science", "3+ years system administration experience", "Network security knowledge"],
    featured: false,
  },
  {
    id: 6,
    title: "Aquaculture Development Officer",
    department: "Aquaculture Unit",
    type: "Contract (2 years)",
    location: "Sinoe County",
    salary: "$30,000 - $38,000/year",
    deadline: "2025-02-10",
    postedDate: "2024-11-28",
    applicants: 19,
    description: "Support aquaculture development projects, train fish farmers, and monitor production facilities.",
    requirements: ["Degree in Aquaculture or related field", "Experience in fish farming", "Willingness to work in rural areas"],
    featured: false,
  },
];

const scholarships = [
  {
    id: 7,
    title: "Master's Degree in Marine Science",
    provider: "NaFAA & University of Ghana",
    type: "Full Scholarship",
    location: "Accra, Ghana",
    value: "Full tuition + $1,000/month stipend",
    deadline: "2025-02-28",
    postedDate: "2024-12-12",
    applicants: 67,
    description: "Full scholarship for Master's program in Marine Science with focus on fisheries management and conservation.",
    requirements: ["Bachelor's degree in related field (min 3.0 GPA)", "Liberian nationality", "Commitment to return and serve NaFAA for 3 years"],
    featured: true,
  },
  {
    id: 8,
    title: "PhD in Fisheries Economics",
    provider: "NaFAA & World Bank",
    type: "Full Scholarship",
    location: "University of Rhode Island, USA",
    value: "Full tuition + $2,500/month stipend",
    deadline: "2025-03-15",
    postedDate: "2024-12-10",
    applicants: 23,
    description: "Doctoral scholarship for research in fisheries economics and sustainable development.",
    requirements: ["Master's degree in Economics or related field", "Strong research background", "GRE scores required"],
    featured: true,
  },
  {
    id: 9,
    title: "Professional Certificate in Sustainable Aquaculture",
    provider: "NaFAA & FAO",
    type: "Training Grant",
    location: "Online + 2 weeks in Kenya",
    value: "$5,000 training grant",
    deadline: "2025-01-31",
    postedDate: "2024-12-08",
    applicants: 89,
    description: "6-month certificate program covering modern aquaculture techniques and business management.",
    requirements: ["Working in fisheries/aquaculture sector", "Basic computer skills", "English proficiency"],
    featured: false,
  },
  {
    id: 10,
    title: "Fisheries Management Short Course",
    provider: "NaFAA & ECOWAS",
    type: "Training Grant",
    location: "Dakar, Senegal",
    value: "$3,000 (all expenses covered)",
    deadline: "2025-02-15",
    postedDate: "2024-12-05",
    applicants: 45,
    description: "Intensive 4-week course on modern fisheries management practices and regional cooperation.",
    requirements: ["Mid-level government or fisheries sector employee", "Basic French recommended", "Letter from employer"],
    featured: false,
  },
  {
    id: 11,
    title: "Undergraduate Scholarship in Marine Biology",
    provider: "NaFAA Foundation",
    type: "Partial Scholarship",
    location: "University of Liberia",
    value: "$2,000/year (4 years)",
    deadline: "2025-03-30",
    postedDate: "2024-12-01",
    applicants: 134,
    description: "Partial scholarship for undergraduate studies in Marine Biology with internship opportunities at NaFAA.",
    requirements: ["Completed high school with strong science grades", "Liberian citizen", "Demonstrated financial need"],
    featured: false,
  },
];

export default function OpportunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Types");
  const [activeTab, setActiveTab] = useState("jobs");

  const filterItems = (items: typeof jobs | typeof scholarships) => {
    return items.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation =
        selectedLocation === "All Locations" || item.location.includes(selectedLocation);
      const matchesType = selectedType === "All Types" || item.type === selectedType;
      return matchesSearch && matchesLocation && matchesType;
    });
  };

  const filteredJobs = filterItems(jobs);
  const filteredScholarships = filterItems(scholarships);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const getDaysRemaining = (deadline: string) => {
    const days = Math.ceil((new Date(deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    return days;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-nafaa-ocean via-nafaa-ocean to-nafaa-ocean text-white py-20">
        <div className="absolute inset-0 bg-[url('/waves-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Briefcase className="mr-2 h-4 w-4" />
              Career Opportunities
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Jobs & Scholarships
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Join our team or advance your education with opportunities in fisheries and marine science
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <span>{jobs.length} Open Positions</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <span>{scholarships.length} Active Scholarships</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search opportunities..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Locations">All Locations</SelectItem>
                    <SelectItem value="Monrovia">Monrovia</SelectItem>
                    <SelectItem value="Grand Bassa">Grand Bassa County</SelectItem>
                    <SelectItem value="Sinoe">Sinoe County</SelectItem>
                    <SelectItem value="Online">Online</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Types">All Types</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Full Scholarship">Full Scholarship</SelectItem>
                    <SelectItem value="Training Grant">Training Grant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="jobs" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Jobs ({filteredJobs.length})
              </TabsTrigger>
              <TabsTrigger value="scholarships" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Scholarships ({filteredScholarships.length})
              </TabsTrigger>
            </TabsList>

            {/* Jobs Tab */}
            <TabsContent value="jobs">
              <div className="space-y-6">
                {filteredJobs.map((job, index) => {
                  const daysRemaining = getDaysRemaining(job.deadline);
                  return (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex flex-col md:flex-row gap-6">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <Briefcase className="h-8 w-8 text-blue-600" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-start gap-2 mb-2">
                                <h3 className="text-xl font-semibold flex-1">{job.title}</h3>
                                {job.featured && (
                                  <Badge className="bg-amber-100 text-amber-700 border-amber-300">
                                    Featured
                                  </Badge>
                                )}
                                <Badge variant="outline">{job.type}</Badge>
                                {daysRemaining <= 7 && (
                                  <Badge className="bg-red-100 text-red-700 border-red-300">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {daysRemaining} days left
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mb-3">{job.description}</p>
                              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <DollarSign className="h-4 w-4" />
                                  {'salary' in job ? job.salary : job.value}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  Deadline: {formatDate(job.deadline)}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  {job.applicants} applicants
                                </span>
                              </div>
                              <div className="text-xs text-gray-500">
                                Posted {formatDate(job.postedDate)} • {'department' in job ? job.department : job.provider}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex md:flex-col gap-2 flex-shrink-0">
                              <Button asChild className="flex-1 md:flex-initial">
                                <Link href={`/opportunities/${job.id}`}>
                                  View Details
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                              <Button variant="outline" asChild className="flex-1 md:flex-initial">
                                <Link href={`/opportunities/apply?id=${job.id}`}>
                                  Apply Now
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}

                {filteredJobs.length === 0 && (
                  <Card className="py-12">
                    <CardContent>
                      <div className="text-center">
                        <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* Scholarships Tab */}
            <TabsContent value="scholarships">
              <div className="space-y-6">
                {filteredScholarships.map((scholarship, index) => {
                  const daysRemaining = getDaysRemaining(scholarship.deadline);
                  return (
                    <motion.div
                      key={scholarship.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex flex-col md:flex-row gap-6">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                              <GraduationCap className="h-8 w-8 text-green-600" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-start gap-2 mb-2">
                                <h3 className="text-xl font-semibold flex-1">{scholarship.title}</h3>
                                {scholarship.featured && (
                                  <Badge className="bg-amber-100 text-amber-700 border-amber-300">
                                    Featured
                                  </Badge>
                                )}
                                <Badge variant="outline">{scholarship.type}</Badge>
                                {daysRemaining <= 14 && (
                                  <Badge className="bg-red-100 text-red-700 border-red-300">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {daysRemaining} days left
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mb-3">{scholarship.description}</p>
                              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {scholarship.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <DollarSign className="h-4 w-4" />
                                  {'value' in scholarship ? scholarship.value : scholarship.salary}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  Deadline: {formatDate(scholarship.deadline)}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  {scholarship.applicants} applicants
                                </span>
                              </div>
                              <div className="text-xs text-gray-500">
                                Posted {formatDate(scholarship.postedDate)} • {'provider' in scholarship ? scholarship.provider : scholarship.department}
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex md:flex-col gap-2 flex-shrink-0">
                              <Button asChild className="flex-1 md:flex-initial">
                                <Link href={`/opportunities/${scholarship.id}`}>
                                  View Details
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                              <Button variant="outline" asChild className="flex-1 md:flex-initial">
                                <Link href={`/opportunities/apply?id=${scholarship.id}`}>
                                  Apply Now
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}

                {filteredScholarships.length === 0 && (
                  <Card className="py-12">
                    <CardContent>
                      <div className="text-center">
                        <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No scholarships found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Job Alerts CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-nafaa-ocean to-nafaa-ocean text-white">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Get Job Alerts</h3>
                  <p className="text-blue-100">
                    Subscribe to receive notifications about new job openings and scholarship opportunities
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="flex-shrink-0">
                  Subscribe Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
