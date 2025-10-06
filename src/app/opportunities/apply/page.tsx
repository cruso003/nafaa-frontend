"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Upload,
  FileText,
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Calendar,
  GraduationCap,
  Briefcase,
  Link as LinkIcon,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

function ApplyPageContent() {
  const searchParams = useSearchParams();
  const opportunityId = searchParams.get("id");
  const opportunityType = searchParams.get("type");
  const isJob = opportunityType === "job";

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    county: "",
    nationality: "Liberian",
    dateOfBirth: "",
    gender: "",

    // Education (for both)
    highestDegree: "",
    institution: "",
    fieldOfStudy: "",
    graduationYear: "",
    gpa: "",

    // Job specific
    currentEmployer: "",
    currentPosition: "",
    yearsOfExperience: "",
    expectedSalary: "",
    availableStartDate: "",

    // Scholarship specific
    proposedResearch: "",
    academicAchievements: "",
    languageProficiency: "",
    testScores: "",

    // Common
    coverLetter: "",
    whyInterested: "",
    relevantExperience: "",

    // References
    reference1Name: "",
    reference1Title: "",
    reference1Email: "",
    reference1Phone: "",
    reference2Name: "",
    reference2Title: "",
    reference2Email: "",
    reference2Phone: "",

    // Additional
    linkedinUrl: "",
    portfolioUrl: "",
    agreeToTerms: false,
  });

  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    cv: null,
    coverLetter: null,
    transcript: null,
    certificate: null,
    idDocument: null,
    additionalDoc: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (key: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [key]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Application Submitted Successfully!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for applying. We have received your application and will
              review it carefully. You should receive a confirmation email
              shortly.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>What's next?</strong>
                <br />• You will receive an email confirmation within 24 hours
                <br />• Our team will review your application within 2 weeks
                <br />• Shortlisted candidates will be contacted for interviews
                <br />• Check your email regularly for updates
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/opportunities">
                <Button size="lg">View More Opportunities</Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg">
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href={`/opportunities/${opportunityId}`}>
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Opportunity
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center gap-4">
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
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {isJob ? "Job" : "Scholarship"} Application
                </h1>
                <p className="text-gray-600">
                  Please fill out all required fields carefully
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                />
              </div>
              <div>
                <Label htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                />
              </div>
              <div>
                <Label htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@email.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+231-77-123-4567"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Street Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Main Street"
                />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Monrovia"
                />
              </div>
              <div>
                <Label htmlFor="county">
                  County <span className="text-red-500">*</span>
                </Label>
                <Select
                  name="county"
                  value={formData.county}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, county: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select county" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="montserrado">Montserrado</SelectItem>
                    <SelectItem value="grand-bassa">Grand Bassa</SelectItem>
                    <SelectItem value="margibi">Margibi</SelectItem>
                    <SelectItem value="nimba">Nimba</SelectItem>
                    <SelectItem value="grand-cape-mount">
                      Grand Cape Mount
                    </SelectItem>
                    <SelectItem value="bong">Bong</SelectItem>
                    <SelectItem value="lofa">Lofa</SelectItem>
                    <SelectItem value="sinoe">Sinoe</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="dateOfBirth">
                  Date of Birth <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="gender">
                  Gender <span className="text-red-500">*</span>
                </Label>
                <Select
                  name="gender"
                  value={formData.gender}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, gender: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">
                      Prefer not to say
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              Educational Background
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="highestDegree">
                  Highest Degree <span className="text-red-500">*</span>
                </Label>
                <Select
                  name="highestDegree"
                  value={formData.highestDegree}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, highestDegree: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select degree" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="associate">Associate Degree</SelectItem>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD/Doctorate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="institution">
                  Institution <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="institution"
                  name="institution"
                  required
                  value={formData.institution}
                  onChange={handleInputChange}
                  placeholder="University of Liberia"
                />
              </div>
              <div>
                <Label htmlFor="fieldOfStudy">
                  Field of Study <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  required
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  placeholder="Marine Biology"
                />
              </div>
              <div>
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input
                  id="graduationYear"
                  name="graduationYear"
                  type="number"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  placeholder="2020"
                  min="1950"
                  max="2030"
                />
              </div>
              <div>
                <Label htmlFor="gpa">GPA (if applicable)</Label>
                <Input
                  id="gpa"
                  name="gpa"
                  value={formData.gpa}
                  onChange={handleInputChange}
                  placeholder="3.5/4.0"
                />
              </div>
            </div>
          </motion.div>

          {/* Job Specific Fields */}
          {isJob && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Work Experience
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentEmployer">Current/Recent Employer</Label>
                  <Input
                    id="currentEmployer"
                    name="currentEmployer"
                    value={formData.currentEmployer}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <Label htmlFor="currentPosition">Current/Recent Position</Label>
                  <Input
                    id="currentPosition"
                    name="currentPosition"
                    value={formData.currentPosition}
                    onChange={handleInputChange}
                    placeholder="Job Title"
                  />
                </div>
                <div>
                  <Label htmlFor="yearsOfExperience">
                    Years of Experience <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    type="number"
                    required
                    value={formData.yearsOfExperience}
                    onChange={handleInputChange}
                    placeholder="5"
                    min="0"
                  />
                </div>
                <div>
                  <Label htmlFor="expectedSalary">Expected Salary (USD/year)</Label>
                  <Input
                    id="expectedSalary"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    placeholder="50,000"
                  />
                </div>
                <div>
                  <Label htmlFor="availableStartDate">
                    Available Start Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="availableStartDate"
                    name="availableStartDate"
                    type="date"
                    required
                    value={formData.availableStartDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Scholarship Specific Fields */}
          {!isJob && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Academic Information
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="proposedResearch">
                    Proposed Research Area <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="proposedResearch"
                    name="proposedResearch"
                    required
                    value={formData.proposedResearch}
                    onChange={handleInputChange}
                    placeholder="Describe your proposed research area or field of interest..."
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="academicAchievements">
                    Academic Achievements & Awards
                  </Label>
                  <Textarea
                    id="academicAchievements"
                    name="academicAchievements"
                    value={formData.academicAchievements}
                    onChange={handleInputChange}
                    placeholder="List any academic honors, publications, or achievements..."
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="languageProficiency">Language Proficiency</Label>
                  <Input
                    id="languageProficiency"
                    name="languageProficiency"
                    value={formData.languageProficiency}
                    onChange={handleInputChange}
                    placeholder="e.g., English (Fluent), French (Intermediate)"
                  />
                </div>
                <div>
                  <Label htmlFor="testScores">
                    Test Scores (GRE, TOEFL, IELTS, etc.)
                  </Label>
                  <Input
                    id="testScores"
                    name="testScores"
                    value={formData.testScores}
                    onChange={handleInputChange}
                    placeholder="e.g., TOEFL: 95, GRE: 320"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Motivation & Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Statement of Purpose
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="whyInterested">
                  Why are you interested in this opportunity?{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="whyInterested"
                  name="whyInterested"
                  required
                  value={formData.whyInterested}
                  onChange={handleInputChange}
                  placeholder="Explain your motivation and interest..."
                  rows={5}
                />
              </div>
              <div>
                <Label htmlFor="relevantExperience">
                  Relevant Experience & Skills{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="relevantExperience"
                  name="relevantExperience"
                  required
                  value={formData.relevantExperience}
                  onChange={handleInputChange}
                  placeholder="Describe your relevant experience, skills, and qualifications..."
                  rows={5}
                />
              </div>
            </div>
          </motion.div>

          {/* References */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              Professional References
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Please provide at least two professional references
            </p>

            {/* Reference 1 */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Reference 1 <span className="text-red-500">*</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="reference1Name">Full Name</Label>
                  <Input
                    id="reference1Name"
                    name="reference1Name"
                    required
                    value={formData.reference1Name}
                    onChange={handleInputChange}
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div>
                  <Label htmlFor="reference1Title">Title/Position</Label>
                  <Input
                    id="reference1Title"
                    name="reference1Title"
                    required
                    value={formData.reference1Title}
                    onChange={handleInputChange}
                    placeholder="Professor of Marine Biology"
                  />
                </div>
                <div>
                  <Label htmlFor="reference1Email">Email</Label>
                  <Input
                    id="reference1Email"
                    name="reference1Email"
                    type="email"
                    required
                    value={formData.reference1Email}
                    onChange={handleInputChange}
                    placeholder="jane.smith@university.edu"
                  />
                </div>
                <div>
                  <Label htmlFor="reference1Phone">Phone</Label>
                  <Input
                    id="reference1Phone"
                    name="reference1Phone"
                    type="tel"
                    required
                    value={formData.reference1Phone}
                    onChange={handleInputChange}
                    placeholder="+231-77-123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Reference 2 */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">
                Reference 2 <span className="text-red-500">*</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="reference2Name">Full Name</Label>
                  <Input
                    id="reference2Name"
                    name="reference2Name"
                    required
                    value={formData.reference2Name}
                    onChange={handleInputChange}
                    placeholder="Mr. John Johnson"
                  />
                </div>
                <div>
                  <Label htmlFor="reference2Title">Title/Position</Label>
                  <Input
                    id="reference2Title"
                    name="reference2Title"
                    required
                    value={formData.reference2Title}
                    onChange={handleInputChange}
                    placeholder="Director of Research"
                  />
                </div>
                <div>
                  <Label htmlFor="reference2Email">Email</Label>
                  <Input
                    id="reference2Email"
                    name="reference2Email"
                    type="email"
                    required
                    value={formData.reference2Email}
                    onChange={handleInputChange}
                    placeholder="john.johnson@organization.org"
                  />
                </div>
                <div>
                  <Label htmlFor="reference2Phone">Phone</Label>
                  <Input
                    id="reference2Phone"
                    name="reference2Phone"
                    type="tel"
                    required
                    value={formData.reference2Phone}
                    onChange={handleInputChange}
                    placeholder="+231-77-234-5678"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* File Uploads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Upload className="h-5 w-5 text-blue-600" />
              Required Documents
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cv">
                  CV/Resume (PDF, max 5MB){" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="cv"
                  type="file"
                  accept=".pdf"
                  required
                  onChange={(e) =>
                    handleFileChange("cv", e.target.files?.[0] || null)
                  }
                  className="cursor-pointer"
                />
              </div>
              <div>
                <Label htmlFor="coverLetter">
                  Cover Letter (PDF, max 5MB){" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="coverLetter"
                  type="file"
                  accept=".pdf"
                  required
                  onChange={(e) =>
                    handleFileChange("coverLetter", e.target.files?.[0] || null)
                  }
                  className="cursor-pointer"
                />
              </div>
              <div>
                <Label htmlFor="transcript">
                  Academic Transcripts (PDF, max 10MB){" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="transcript"
                  type="file"
                  accept=".pdf"
                  required
                  onChange={(e) =>
                    handleFileChange("transcript", e.target.files?.[0] || null)
                  }
                  className="cursor-pointer"
                />
              </div>
              <div>
                <Label htmlFor="certificate">
                  Degree Certificate (PDF, max 5MB){" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="certificate"
                  type="file"
                  accept=".pdf"
                  required
                  onChange={(e) =>
                    handleFileChange("certificate", e.target.files?.[0] || null)
                  }
                  className="cursor-pointer"
                />
              </div>
              <div>
                <Label htmlFor="idDocument">
                  National ID or Passport (PDF/Image, max 5MB){" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="idDocument"
                  type="file"
                  accept=".pdf,image/*"
                  required
                  onChange={(e) =>
                    handleFileChange("idDocument", e.target.files?.[0] || null)
                  }
                  className="cursor-pointer"
                />
              </div>
              <div>
                <Label htmlFor="additionalDoc">
                  Additional Documents (Optional - PDF, max 10MB)
                </Label>
                <Input
                  id="additionalDoc"
                  type="file"
                  accept=".pdf"
                  onChange={(e) =>
                    handleFileChange(
                      "additionalDoc",
                      e.target.files?.[0] || null
                    )
                  }
                  className="cursor-pointer"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Certifications, publications, or other supporting documents
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <LinkIcon className="h-5 w-5 text-blue-600" />
              Online Presence (Optional)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
                <Input
                  id="linkedinUrl"
                  name="linkedinUrl"
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <Label htmlFor="portfolioUrl">Portfolio/Website</Label>
                <Input
                  id="portfolioUrl"
                  name="portfolioUrl"
                  type="url"
                  value={formData.portfolioUrl}
                  onChange={handleInputChange}
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
          </motion.div>

          {/* Terms and Submit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="space-y-6">
              {/* Information Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-2">
                      Please review before submitting:
                    </p>
                    <ul className="space-y-1 text-xs">
                      <li>• All information provided is accurate and complete</li>
                      <li>• All required documents are properly uploaded</li>
                      <li>• Your email address is correct for communication</li>
                      <li>• References have been notified and agree to provide recommendations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      agreeToTerms: checked as boolean,
                    }))
                  }
                  required
                />
                <Label
                  htmlFor="agreeToTerms"
                  className="text-sm leading-relaxed cursor-pointer"
                >
                  I certify that all information provided in this application is
                  true and complete to the best of my knowledge. I understand
                  that any false information or omission may disqualify me from
                  consideration or result in dismissal if discovered at a later
                  date. <span className="text-red-500">*</span>
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={!formData.agreeToTerms}
              >
                Submit Application
              </Button>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">Loading...</div>
        </div>
      </div>
    }>
      <ApplyPageContent />
    </Suspense>
  );
}
