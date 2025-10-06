"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  RefreshCw,
  ArrowLeft,
  Check,
  AlertCircle,
  DollarSign,
} from "lucide-react";

// Mock existing licenses
const mockLicenses = [
  { id: "CFL-2024-0123", type: "Commercial License", expiryDate: "2025-01-14", fee: "$800" },
  { id: "AFL-2023-0456", type: "Artisanal License", expiryDate: "2024-12-20", fee: "$150" },
  { id: "RFL-2024-0789", type: "Recreational License", expiryDate: "2025-03-10", fee: "$50" },
];

export default function RenewLicensePage() {
  const router = useRouter();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    licenseNumber: "",
    email: "",
    phone: "",
    vesselRegistration: "",
    updatedAddress: "",
    crewSize: "",
    earlyRenewal: false,
    additionalNotes: "",
  });

  const [files, setFiles] = useState({
    catchReports: null as File | null,
    taxClearance: null as File | null,
    vesselDoc: null as File | null,
  });

  const [selectedLicense, setSelectedLicense] = useState<typeof mockLicenses[0] | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLicenseSelect = (licenseId: string) => {
    const license = mockLicenses.find(l => l.id === licenseId);
    setSelectedLicense(license || null);
    setFormData((prev) => ({ ...prev, licenseNumber: licenseId }));
  };

  const handleFileChange = (name: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [name]: file }));
  };

  const calculateFee = () => {
    if (!selectedLicense) return "$0.00";
    const baseFee = parseFloat(selectedLicense.fee.replace("$", ""));
    const discount = formData.earlyRenewal ? baseFee * 0.10 : 0;
    return `$${(baseFee - discount).toFixed(2)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Renewal data:", formData);
    console.log("Files:", files);
    
    toast({
      title: "Renewal Submitted!",
      description: `Your license renewal has been submitted. New tracking number: RN-2024-${Math.floor(Math.random() * 10000)}`,
    });
    
    setTimeout(() => {
      router.push("/portal/dashboard");
    }, 2000);
  };

  const daysUntilExpiry = (expiryDate: string) => {
    const expiry = new Date(expiryDate);
    const today = new Date();
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.push("/portal/licenses")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Licenses
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Renew Fishing License</h1>
          <p className="text-gray-600 mt-2">Renew your existing fishing license quickly and easily</p>
        </div>

        {/* Early Renewal Discount Banner */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <DollarSign className="h-6 w-6 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-900">Early Renewal Discount Available!</h3>
                <p className="text-sm text-green-800 mt-1">
                  Renew 30+ days before expiration and save 10% on your renewal fee
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent className="pt-6 space-y-6">
              {/* Select Existing License */}
              <div>
                <Label htmlFor="licenseNumber">Select License to Renew *</Label>
                <Select value={formData.licenseNumber} onValueChange={handleLicenseSelect}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a license" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockLicenses.map((license) => {
                      const days = daysUntilExpiry(license.expiryDate);
                      const status = days < 0 ? "Expired" : days < 30 ? "Expiring Soon" : "Active";
                      const statusColor = days < 0 ? "text-red-600" : days < 30 ? "text-amber-600" : "text-green-600";
                      
                      return (
                        <SelectItem key={license.id} value={license.id}>
                          <div className="flex items-center justify-between w-full">
                            <span>{license.id} - {license.type}</span>
                            <span className={`text-xs ml-4 ${statusColor}`}>
                              {status} ({days} days)
                            </span>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {selectedLicense && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* License Summary */}
                  <Card className="bg-gray-50">
                    <CardContent className="pt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">License Type:</span>
                          <span className="font-semibold">{selectedLicense.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Current Expiry:</span>
                          <span className="font-semibold">{selectedLicense.expiryDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Base Fee:</span>
                          <span className="font-semibold">{selectedLicense.fee}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Update Contact Information</h3>
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
                  </div>

                  {/* Updated Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Updated Vessel & Fishing Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="vesselRegistration">Vessel Registration Number</Label>
                        <Input
                          id="vesselRegistration"
                          name="vesselRegistration"
                          value={formData.vesselRegistration}
                          onChange={handleInputChange}
                          placeholder="If changed"
                        />
                      </div>
                      <div>
                        <Label htmlFor="crewSize">Current Crew Size</Label>
                        <Input
                          id="crewSize"
                          name="crewSize"
                          type="number"
                          value={formData.crewSize}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label htmlFor="updatedAddress">Updated Address (if changed)</Label>
                      <Input
                        id="updatedAddress"
                        name="updatedAddress"
                        value={formData.updatedAddress}
                        onChange={handleInputChange}
                        placeholder="Leave blank if no change"
                      />
                    </div>
                  </div>

                  {/* Required Documents */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Required Documents</h3>
                    
                    {selectedLicense.type.includes("Commercial") && (
                      <>
                        <div className="mb-4">
                          <Label htmlFor="catchReports">Previous Year Catch Reports *</Label>
                          <Input
                            id="catchReports"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange("catchReports", e.target.files?.[0] || null)}
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <Label htmlFor="taxClearance">Tax Clearance Certificate *</Label>
                          <Input
                            id="taxClearance"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleFileChange("taxClearance", e.target.files?.[0] || null)}
                            required
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <Label htmlFor="vesselDoc">Updated Vessel Documentation (if applicable)</Label>
                      <Input
                        id="vesselDoc"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange("vesselDoc", e.target.files?.[0] || null)}
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Any changes or additional information"
                    />
                  </div>

                  {/* Early Renewal Checkbox */}
                  <div className="flex items-start space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <Checkbox
                      id="earlyRenewal"
                      checked={formData.earlyRenewal}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, earlyRenewal: checked as boolean }))
                      }
                    />
                    <div className="flex-1">
                      <Label htmlFor="earlyRenewal" className="cursor-pointer">
                        <span className="font-semibold text-green-900">Apply Early Renewal Discount (10%)</span>
                        <p className="text-sm text-green-800 mt-1">
                          I am renewing 30+ days before my license expires
                        </p>
                      </Label>
                    </div>
                  </div>

                  {/* Payment Summary */}
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="pt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Base Renewal Fee:</span>
                          <span>{selectedLicense.fee}</span>
                        </div>
                        {formData.earlyRenewal && (
                          <div className="flex justify-between text-green-600">
                            <span>Early Renewal Discount (10%):</span>
                            <span>-${(parseFloat(selectedLicense.fee.replace("$", "")) * 0.10).toFixed(2)}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-lg font-bold border-t pt-2">
                          <span>Total Amount:</span>
                          <span>{calculateFee()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Terms */}
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm cursor-pointer">
                      I confirm all information is accurate and I agree to comply with NaFAA regulations
                    </Label>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700"
              disabled={!selectedLicense}
            >
              Submit Renewal
              <Check className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
