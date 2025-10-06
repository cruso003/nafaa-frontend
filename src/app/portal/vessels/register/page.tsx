"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Ship,
  ArrowLeft,
  ArrowRight,
  Check,
  AlertCircle,
} from "lucide-react";

const vesselTypes = [
  { id: "commercial", name: "Commercial Fishing Vessel", fee: "$1,200", description: "Large-scale fishing operations" },
  { id: "artisanal", name: "Artisanal Fishing Boat", fee: "$300", description: "Small-scale traditional fishing" },
  { id: "carrier", name: "Fish Carrier & Processing", fee: "$1,500", description: "Transport and processing vessels" },
  { id: "recreational", name: "Recreational Boat", fee: "$150", description: "Personal boats for sport fishing" },
];

const hullMaterials = ["Steel", "Aluminum", "Fiberglass", "Wood", "Composite"];

export default function RegisterVesselPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Vessel Type
    vesselType: "",
    
    // Owner Information
    ownerFirstName: "",
    ownerLastName: "",
    ownerEmail: "",
    ownerPhone: "",
    ownerAddress: "",
    ownerCity: "",
    ownerIdNumber: "",
    
    // Business Info (for commercial)
    businessName: "",
    businessRegistration: "",
    
    // Vessel Details
    vesselName: "",
    vesselLength: "",
    vesselWidth: "",
    vesselDepth: "",
    grossTonnage: "",
    netTonnage: "",
    buildYear: "",
    builder: "",
    hullMaterial: "",
    hullNumber: "",
    
    // Engine & Equipment
    engineMake: "",
    engineModel: "",
    enginePower: "",
    numberOfEngines: "1",
    propulsionType: "",
    fuelCapacity: "",
    
    // Registration Details
    registrationPort: "",
    intendedUse: "",
    fishingGear: "",
    cargoCapacity: "",
    
    // Additional
    additionalNotes: "",
  });

  const [files, setFiles] = useState({
    ownershipProof: null as File | null,
    builderCertificate: null as File | null,
    businessCert: null as File | null,
    insurance: null as File | null,
    photos: [] as File[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (name: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [name]: file }));
  };

  const handleMultipleFiles = (files: FileList | null) => {
    if (files) {
      setFiles((prev) => ({ ...prev, photos: Array.from(files) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form data:", formData);
    console.log("Files:", files);
    
    toast({
      title: "Registration Submitted!",
      description: "Your vessel registration has been submitted. Tracking number: VR-2024-" + Math.floor(Math.random() * 10000),
    });
    
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
          <Button variant="ghost" onClick={() => router.push("/portal/vessels")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Vessels
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Register Vessel</h1>
          <p className="text-gray-600 mt-2">Register your fishing vessel with NaFAA</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= s ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step > s ? <Check className="h-5 w-5" /> : s}
                </div>
                {s < 4 && (
                  <div
                    className={`w-full h-1 mx-2 ${step > s ? "bg-blue-600" : "bg-gray-200"}`}
                    style={{ minWidth: "60px" }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Vessel Type</span>
            <span>Owner Info</span>
            <span>Vessel Details</span>
            <span>Review</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent className="pt-6">
              {/* Step 1: Vessel Type */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Select Vessel Type</Label>
                    <RadioGroup value={formData.vesselType} onValueChange={(value) => handleSelectChange("vesselType", value)}>
                      <div className="space-y-4">
                        {vesselTypes.map((type) => (
                          <div
                            key={type.id}
                            className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                              formData.vesselType === type.id
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() => handleSelectChange("vesselType", type.id)}
                          >
                            <div className="flex items-start">
                              <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                              <div className="ml-3 flex-1">
                                <Label htmlFor={type.id} className="text-base font-semibold cursor-pointer">
                                  {type.name}
                                </Label>
                                <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                                <p className="text-sm font-semibold text-blue-600 mt-2">{type.fee}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Owner Information */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-semibold">Vessel Owner Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ownerFirstName">First Name *</Label>
                      <Input
                        id="ownerFirstName"
                        name="ownerFirstName"
                        value={formData.ownerFirstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="ownerLastName">Last Name *</Label>
                      <Input
                        id="ownerLastName"
                        name="ownerLastName"
                        value={formData.ownerLastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ownerEmail">Email Address *</Label>
                      <Input
                        id="ownerEmail"
                        name="ownerEmail"
                        type="email"
                        value={formData.ownerEmail}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="ownerPhone">Phone Number *</Label>
                      <Input
                        id="ownerPhone"
                        name="ownerPhone"
                        type="tel"
                        value={formData.ownerPhone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="ownerAddress">Physical Address *</Label>
                    <Input
                      id="ownerAddress"
                      name="ownerAddress"
                      value={formData.ownerAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="ownerCity">City *</Label>
                      <Input
                        id="ownerCity"
                        name="ownerCity"
                        value={formData.ownerCity}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="ownerIdNumber">National ID / Passport *</Label>
                      <Input
                        id="ownerIdNumber"
                        name="ownerIdNumber"
                        value={formData.ownerIdNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {(formData.vesselType === "commercial" || formData.vesselType === "carrier") && (
                    <>
                      <h3 className="text-lg font-semibold mt-6">Business Information</h3>
                      <div>
                        <Label htmlFor="businessName">Business Name *</Label>
                        <Input
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="businessRegistration">Business Registration Number *</Label>
                        <Input
                          id="businessRegistration"
                          name="businessRegistration"
                          value={formData.businessRegistration}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="businessCert">Upload Business Certificate</Label>
                        <Input
                          id="businessCert"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange("businessCert", e.target.files?.[0] || null)}
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <Label htmlFor="ownershipProof">Proof of Ownership *</Label>
                    <Input
                      id="ownershipProof"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange("ownershipProof", e.target.files?.[0] || null)}
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Bill of Sale or Transfer Agreement</p>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Vessel Details */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-semibold">Vessel Specifications</h3>
                  
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

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="vesselLength">Length (meters) *</Label>
                      <Input
                        id="vesselLength"
                        name="vesselLength"
                        type="number"
                        step="0.01"
                        value={formData.vesselLength}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="vesselWidth">Width (meters) *</Label>
                      <Input
                        id="vesselWidth"
                        name="vesselWidth"
                        type="number"
                        step="0.01"
                        value={formData.vesselWidth}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="vesselDepth">Depth (meters) *</Label>
                      <Input
                        id="vesselDepth"
                        name="vesselDepth"
                        type="number"
                        step="0.01"
                        value={formData.vesselDepth}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="buildYear">Year Built *</Label>
                      <Input
                        id="buildYear"
                        name="buildYear"
                        type="number"
                        value={formData.buildYear}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="builder">Builder/Manufacturer</Label>
                      <Input
                        id="builder"
                        name="builder"
                        value={formData.builder}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="hullMaterial">Hull Material *</Label>
                      <Select value={formData.hullMaterial} onValueChange={(value) => handleSelectChange("hullMaterial", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select material" />
                        </SelectTrigger>
                        <SelectContent>
                          {hullMaterials.map((material) => (
                            <SelectItem key={material} value={material}>{material}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="hullNumber">Hull Identification Number</Label>
                      <Input
                        id="hullNumber"
                        name="hullNumber"
                        value={formData.hullNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mt-6">Engine & Equipment</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="engineMake">Engine Make *</Label>
                      <Input
                        id="engineMake"
                        name="engineMake"
                        value={formData.engineMake}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="engineModel">Engine Model</Label>
                      <Input
                        id="engineModel"
                        name="engineModel"
                        value={formData.engineModel}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
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
                      <Label htmlFor="numberOfEngines">Number of Engines *</Label>
                      <Input
                        id="numberOfEngines"
                        name="numberOfEngines"
                        type="number"
                        value={formData.numberOfEngines}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="fuelCapacity">Fuel Capacity (liters)</Label>
                      <Input
                        id="fuelCapacity"
                        name="fuelCapacity"
                        type="number"
                        value={formData.fuelCapacity}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="registrationPort">Registration Port *</Label>
                      <Input
                        id="registrationPort"
                        name="registrationPort"
                        value={formData.registrationPort}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="intendedUse">Intended Use *</Label>
                      <Input
                        id="intendedUse"
                        name="intendedUse"
                        value={formData.intendedUse}
                        onChange={handleInputChange}
                        placeholder="e.g., Tuna fishing, Transport"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="photos">Vessel Photos *</Label>
                    <Input
                      id="photos"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleMultipleFiles(e.target.files)}
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Upload at least 3 photos (bow, stern, sides)</p>
                  </div>

                  <div>
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Any additional information about the vessel"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg font-semibold">Review Registration</h3>
                  
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="pt-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <p className="text-sm text-blue-900">
                          Please review all information carefully. An inspection may be required for commercial vessels over 15 meters.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Vessel Type</h4>
                      <p className="text-gray-700">{vesselTypes.find(t => t.id === formData.vesselType)?.name}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Owner Information</h4>
                      <p className="text-gray-700">{formData.ownerFirstName} {formData.ownerLastName}</p>
                      <p className="text-gray-700">{formData.ownerEmail} • {formData.ownerPhone}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Vessel Details</h4>
                      <p className="text-gray-700">{formData.vesselName}</p>
                      <p className="text-gray-700">
                        Dimensions: {formData.vesselLength}m × {formData.vesselWidth}m × {formData.vesselDepth}m
                      </p>
                      <p className="text-gray-700">
                        Built: {formData.buildYear} • Hull: {formData.hullMaterial}
                      </p>
                      <p className="text-gray-700">
                        Engine: {formData.engineMake} ({formData.enginePower}HP)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 pt-4">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm cursor-pointer">
                      I confirm all information is accurate and I agree to comply with NaFAA regulations
                    </Label>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <Button type="button" variant="outline" onClick={prevStep} disabled={step === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            
            {step < 4 ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={step === 1 && !formData.vesselType}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Submit Registration
                <Check className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
