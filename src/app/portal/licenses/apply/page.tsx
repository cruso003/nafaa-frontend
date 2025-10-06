"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Upload,
  ArrowLeft,
  ArrowRight,
  Check,
  AlertCircle,
} from "lucide-react";

const licenseTypes = [
  { id: "commercial", name: "Commercial License", fee: "$800/year", description: "For large-scale commercial fishing operations" },
  { id: "artisanal", name: "Artisanal License", fee: "$150/year", description: "For small-scale and traditional fishing" },
  { id: "recreational", name: "Recreational License", fee: "$50/year", description: "For sport and recreational fishing" },
];

const fishingMethods = [
  "Long-lining",
  "Purse seining",
  "Trawling",
  "Gillnetting",
  "Hook and line",
  "Trap fishing",
  "Seine netting",
  "Cast netting",
];

export default function ApplyLicensePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Applicant Information
    licenseType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    idNumber: "",
    
    // Vessel Information
    vesselName: "",
    vesselRegistration: "",
    vesselLength: "",
    enginePower: "",
    homePort: "",
    
    // Fishing Details
    fishingMethods: [] as string[],
    targetSpecies: "",
    fishingZones: "",
    crewSize: "",
    
    // Business Details (for commercial)
    businessName: "",
    businessRegistration: "",
    taxId: "",
    
    // Additional Information
    previousLicense: false,
    previousLicenseNumber: "",
    additionalNotes: "",
  });

  const [files, setFiles] = useState({
    idDocument: null as File | null,
    vesselRegistration: null as File | null,
    businessCertificate: null as File | null,
    insurance: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (method: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      fishingMethods: checked
        ? [...prev.fishingMethods, method]
        : prev.fishingMethods.filter((m) => m !== method),
    }));
  };

  const handleFileChange = (name: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [name]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Submit to backend API
    console.log("Form data:", formData);
    console.log("Files:", files);
    
    // Simulate API call
    toast({
      title: "Application Submitted!",
      description: "Your fishing license application has been submitted successfully. Tracking number: FL-2024-" + Math.floor(Math.random() * 10000),
    });
    
    // Redirect to dashboard after 2 seconds
    setTimeout(() => {
      router.push("/portal/dashboard");
    }, 2000);
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.push("/portal/licenses")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Licenses
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Apply for Fishing License</h1>
          <p className="text-gray-600 mt-2">Complete the application form to receive your fishing license</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= s
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step > s ? <Check className="h-5 w-5" /> : s}
                </div>
                {s < 4 && (
                  <div
                    className={`w-full h-1 mx-2 ${
                      step > s ? "bg-green-600" : "bg-gray-200"
                    }`}
                    style={{ minWidth: "60px" }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>License Type</span>
            <span>Applicant Info</span>
            <span>Vessel & Fishing</span>
            <span>Review & Submit</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent className="pt-6">
              {/* Step 1: License Type Selection */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Select License Type</Label>
                    <RadioGroup value={formData.licenseType} onValueChange={(value) => handleSelectChange("licenseType", value)}>
                      <div className="space-y-4">
                        {licenseTypes.map((type) => (
                          <div
                            key={type.id}
                            className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                              formData.licenseType === type.id
                                ? "border-green-600 bg-green-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() => handleSelectChange("licenseType", type.id)}
                          >
                            <div className="flex items-start">
                              <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                              <div className="ml-3 flex-1">
                                <Label htmlFor={type.id} className="text-base font-semibold cursor-pointer">
                                  {type.name}
                                </Label>
                                <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                                <p className="text-sm font-semibold text-green-600 mt-2">{type.fee}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Applicant Information */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-semibold">Applicant Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Physical Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="idNumber">National ID / Passport Number *</Label>
                      <Input
                        id="idNumber"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {formData.licenseType === "commercial" && (
                    <>
                      <h3 className="text-lg font-semibold mt-6">Business Information</h3>
                      <div>
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          required={formData.licenseType === "commercial"}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="businessRegistration">Business Registration Number *</Label>
                          <Input
                            id="businessRegistration"
                            name="businessRegistration"
                            value={formData.businessRegistration}
                            onChange={handleInputChange}
                            required={formData.licenseType === "commercial"}
                          />
                        </div>
                        <div>
                          <Label htmlFor="taxId">Tax ID Number *</Label>
                          <Input
                            id="taxId"
                            name="taxId"
                            value={formData.taxId}
                            onChange={handleInputChange}
                            required={formData.licenseType === "commercial"}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <Label htmlFor="idDocument">Upload ID Document *</Label>
                    <Input
                      id="idDocument"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange("idDocument", e.target.files?.[0] || null)}
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Upload your national ID or passport (PDF, JPG, or PNG)</p>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Vessel & Fishing Details */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-semibold">Vessel Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vesselName">Vessel Name *</Label>
                      <Input
                        id="vesselName"
                        name="vesselName"
                        value={formData.vesselName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="vesselRegistration">Vessel Registration Number *</Label>
                      <Input
                        id="vesselRegistration"
                        name="vesselRegistration"
                        value={formData.vesselRegistration}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="vesselLength">Vessel Length (meters) *</Label>
                      <Input
                        id="vesselLength"
                        name="vesselLength"
                        type="number"
                        value={formData.vesselLength}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="enginePower">Engine Power (HP) *</Label>
                      <Input
                        id="enginePower"
                        name="enginePower"
                        type="number"
                        value={formData.enginePower}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="homePort">Home Port *</Label>
                      <Input
                        id="homePort"
                        name="homePort"
                        value={formData.homePort}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="vesselRegistrationDoc">Upload Vessel Registration Document *</Label>
                    <Input
                      id="vesselRegistrationDoc"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange("vesselRegistration", e.target.files?.[0] || null)}
                      required
                    />
                  </div>

                  <h3 className="text-lg font-semibold mt-6">Fishing Details</h3>

                  <div>
                    <Label className="mb-3 block">Fishing Methods * (Select all that apply)</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {fishingMethods.map((method) => (
                        <div key={method} className="flex items-center space-x-2">
                          <Checkbox
                            id={method}
                            checked={formData.fishingMethods.includes(method)}
                            onCheckedChange={(checked) => handleCheckboxChange(method, checked as boolean)}
                          />
                          <Label htmlFor={method} className="cursor-pointer font-normal">
                            {method}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="targetSpecies">Target Species</Label>
                    <Textarea
                      id="targetSpecies"
                      name="targetSpecies"
                      value={formData.targetSpecies}
                      onChange={handleInputChange}
                      placeholder="List the main species you plan to target"
                      rows={3}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fishingZones">Intended Fishing Zones *</Label>
                      <Input
                        id="fishingZones"
                        name="fishingZones"
                        value={formData.fishingZones}
                        onChange={handleInputChange}
                        placeholder="e.g., Coastal waters, EEZ Zone 3"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="crewSize">Crew Size *</Label>
                      <Input
                        id="crewSize"
                        name="crewSize"
                        type="number"
                        value={formData.crewSize}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {formData.licenseType === "commercial" && (
                    <div>
                      <Label htmlFor="insurance">Insurance Certificate</Label>
                      <Input
                        id="insurance"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange("insurance", e.target.files?.[0] || null)}
                      />
                      <p className="text-sm text-gray-500 mt-1">Required for vessels over 15 meters</p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Step 4: Review & Submit */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-semibold">Review Your Application</h3>
                  
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="pt-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-sm text-blue-900">
                            Please review all information carefully before submitting. You will receive a confirmation email 
                            with your tracking number once submitted.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">License Type</h4>
                      <p className="text-gray-700">{licenseTypes.find(t => t.id === formData.licenseType)?.name}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Applicant Information</h4>
                      <p className="text-gray-700">{formData.firstName} {formData.lastName}</p>
                      <p className="text-gray-700">{formData.email} • {formData.phone}</p>
                      <p className="text-gray-700">{formData.address}, {formData.city}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Vessel Information</h4>
                      <p className="text-gray-700">{formData.vesselName} ({formData.vesselRegistration})</p>
                      <p className="text-gray-700">Length: {formData.vesselLength}m • Engine: {formData.enginePower}HP • Port: {formData.homePort}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Fishing Details</h4>
                      <p className="text-gray-700">Methods: {formData.fishingMethods.join(", ")}</p>
                      <p className="text-gray-700">Zones: {formData.fishingZones} • Crew: {formData.crewSize}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 pt-4">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm cursor-pointer">
                      I confirm that all information provided is accurate and I agree to the{" "}
                      <a href="/terms" className="text-green-600 hover:underline">terms and conditions</a>
                    </Label>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            {step < 4 ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={
                  (step === 1 && !formData.licenseType) ||
                  (step === 2 && (!formData.firstName || !formData.lastName || !formData.email))
                }
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Submit Application
                <Check className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
