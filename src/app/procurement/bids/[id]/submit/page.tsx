"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Upload,
  X,
  FileText,
  Building2,
  User,
  Mail,
  Phone,
  DollarSign,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { getProcurementBidById, submitBid } from "@/lib/mock-data/procurement";
import { notFound, useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

const steps = [
  { id: 1, name: "Company Information", icon: Building2 },
  { id: 2, name: "Bid Details", icon: FileText },
  { id: 3, name: "Upload Documents", icon: Upload },
  { id: 4, name: "Review & Submit", icon: Check }
];

export default function BidSubmissionPage({ params }: PageProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");

  // Form data
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [proposedAmount, setProposedAmount] = useState("");
  const [technicalProposal, setTechnicalProposal] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Get bid details
  const [bidId, setBidId] = useState<number | null>(null);
  const [bid, setBid] = useState<any>(null);

  // Load bid details
  useEffect(() => {
    params.then(({ id }) => {
      const parsedId = parseInt(id);
      setBidId(parsedId);
      const bidData = getProcurementBidById(parsedId);
      if (!bidData) {
        notFound();
      }
      setBid(bidData);
    });
  }, [params]);

  if (!bid) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nafaa-ocean mx-auto mb-4"></div>
          <p className="text-gray-600">Loading bid details...</p>
        </div>
      </div>
    );
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!companyName.trim()) newErrors.companyName = "Company name is required";
      if (!contactPerson.trim()) newErrors.contactPerson = "Contact person is required";
      if (!email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email format";
      if (!phone.trim()) newErrors.phone = "Phone number is required";
    } else if (step === 2) {
      if (!proposedAmount.trim()) newErrors.proposedAmount = "Proposed amount is required";
      if (!technicalProposal.trim()) newErrors.technicalProposal = "Technical proposal is required";
      else if (technicalProposal.length < 100) newErrors.technicalProposal = "Technical proposal must be at least 100 characters";
    } else if (step === 3) {
      if (uploadedFiles.length === 0) newErrors.files = "At least one document must be uploaded";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
      setErrors({ ...errors, files: "" });
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    try {
      const result = await submitBid({
        bidId: bid.id,
        companyName,
        contactPerson,
        email,
        phone,
        proposedAmount,
        technicalProposal,
        documents: uploadedFiles
      });

      if (result.success) {
        setSubmissionId(result.submissionId || "");
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting your bid. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
        >
          <Card className="text-center">
            <CardContent className="pt-12 pb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
              </motion.div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Bid Submitted Successfully!</h2>
              <p className="text-gray-600 mb-2">
                Your bid for <strong>{bid.title}</strong> has been submitted.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Submission ID: <span className="font-mono font-semibold">{submissionId}</span>
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <p className="text-sm text-gray-700">
                  A confirmation email has been sent to <strong>{email}</strong>. 
                  You will be notified about the evaluation results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/procurement/bids">
                  <Button variant="outline" className="w-full sm:w-auto">
                    View All Bids
                  </Button>
                </Link>
                <Link href="/portal/dashboard">
                  <Button className="w-full sm:w-auto bg-nafaa-ocean hover:bg-nafaa-ocean-dark">
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-nafaa-ocean via-nafaa-ocean to-nafaa-ocean text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href={`/procurement/bids/${bid.id}`}>
            <Button variant="ghost" className="mb-4 text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Bid Details
            </Button>
          </Link>

          <h1 className="text-3xl font-bold mb-2">Submit Bid Proposal</h1>
          <p className="text-blue-100">{bid.title}</p>
          <p className="text-sm text-blue-200 mt-1">Bid Number: {bid.bidNumber}</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;

              return (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                        isCompleted
                          ? "bg-green-500 border-green-500 text-white"
                          : isCurrent
                          ? "bg-nafaa-ocean border-nafaa-ocean text-white"
                          : "bg-white border-gray-300 text-gray-400"
                      }`}
                    >
                      {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <p className={`text-xs mt-2 text-center ${isCurrent ? "font-semibold text-nafaa-ocean" : "text-gray-500"}`}>
                      {step.name}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 transition-all ${
                        isCompleted ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader>
            <CardTitle>Step {currentStep}: {steps[currentStep - 1].name}</CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Enter your company name"
                      className={errors.companyName ? "border-red-500" : ""}
                    />
                    {errors.companyName && (
                      <p className="text-sm text-red-500 mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      placeholder="Full name of contact person"
                      className={errors.contactPerson ? "border-red-500" : ""}
                    />
                    {errors.contactPerson && (
                      <p className="text-sm text-red-500 mt-1">{errors.contactPerson}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="company@example.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+231-XXX-XXX-XXX"
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <Label htmlFor="proposedAmount">Proposed Amount (USD) *</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="proposedAmount"
                        type="text"
                        value={proposedAmount}
                        onChange={(e) => setProposedAmount(e.target.value)}
                        placeholder="1,000,000"
                        className={`pl-10 ${errors.proposedAmount ? "border-red-500" : ""}`}
                      />
                    </div>
                    {errors.proposedAmount && (
                      <p className="text-sm text-red-500 mt-1">{errors.proposedAmount}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">
                      Estimated Value: {bid.estimatedValue}
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="technicalProposal">Technical Proposal *</Label>
                    <Textarea
                      id="technicalProposal"
                      value={technicalProposal}
                      onChange={(e) => setTechnicalProposal(e.target.value)}
                      placeholder="Provide a detailed description of your technical approach, methodology, and how you plan to fulfill the requirements..."
                      rows={10}
                      className={errors.technicalProposal ? "border-red-500" : ""}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.technicalProposal ? (
                        <p className="text-sm text-red-500">{errors.technicalProposal}</p>
                      ) : (
                        <p className="text-sm text-gray-500">
                          {technicalProposal.length} characters (minimum 100)
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <Label>Upload Required Documents *</Label>
                    <div className="mt-2">
                      <label
                        htmlFor="fileUpload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-10 h-10 text-gray-400 mb-2" />
                          <p className="text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (max 10MB each)</p>
                        </div>
                        <input
                          id="fileUpload"
                          type="file"
                          className="hidden"
                          multiple
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                        />
                      </label>
                    </div>
                    {errors.files && (
                      <p className="text-sm text-red-500 mt-1">{errors.files}</p>
                    )}
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <Label>Uploaded Files ({uploadedFiles.length})</Label>
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-nafaa-ocean" />
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-xs text-gray-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Required Documents:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Valid business registration certificate</li>
                      <li>• Tax clearance certificate</li>
                      <li>• Financial statements (last 3 years)</li>
                      <li>• Technical proposal document</li>
                      <li>• Any other supporting documents</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Review Before Submission</p>
                        <p className="text-sm text-gray-700">
                          Please review all information carefully. Once submitted, you cannot edit your bid.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Company Information</h3>
                      <dl className="grid grid-cols-2 gap-4">
                        <div>
                          <dt className="text-sm text-gray-500">Company Name</dt>
                          <dd className="text-sm font-medium">{companyName}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">Contact Person</dt>
                          <dd className="text-sm font-medium">{contactPerson}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">Email</dt>
                          <dd className="text-sm font-medium">{email}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500">Phone</dt>
                          <dd className="text-sm font-medium">{phone}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="font-semibold text-gray-900 mb-3">Bid Details</h3>
                      <dl className="space-y-3">
                        <div>
                          <dt className="text-sm text-gray-500">Proposed Amount</dt>
                          <dd className="text-sm font-medium">${proposedAmount}</dd>
                        </div>
                        <div>
                          <dt className="text-sm text-gray-500 mb-1">Technical Proposal</dt>
                          <dd className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                            {technicalProposal}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Uploaded Documents ({uploadedFiles.length})
                      </h3>
                      <ul className="space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <FileText className="w-4 h-4 text-nafaa-ocean" />
                            <span>{file.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1 || isSubmitting}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              {currentStep < 4 ? (
                <Button onClick={handleNext} className="bg-nafaa-ocean hover:bg-nafaa-ocean-dark">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Submit Bid
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
