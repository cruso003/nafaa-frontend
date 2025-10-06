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
import { useToast } from "@/hooks/use-toast";
import {
  ClipboardList,
  ArrowLeft,
  Plus,
  Trash2,
  Check,
  MapPin,
} from "lucide-react";

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
  "Other",
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

interface CatchEntry {
  id: string;
  species: string;
  weight: string;
  quantity: string;
  condition: string;
}

export default function SubmitReportPage() {
  const router = useRouter();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    licenseNumber: "",
    vesselName: "",
    vesselRegistration: "",
    tripStartDate: "",
    tripEndDate: "",
    fishingMethod: "",
    fishingZone: "",
    latitude: "",
    longitude: "",
    crewSize: "",
    fuelUsed: "",
    iceUsed: "",
    additionalNotes: "",
  });

  const [catchEntries, setCatchEntries] = useState<CatchEntry[]>([
    { id: "1", species: "", weight: "", quantity: "", condition: "fresh" },
  ]);

  const [photos, setPhotos] = useState<File[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addCatchEntry = () => {
    const newId = (catchEntries.length + 1).toString();
    setCatchEntries([...catchEntries, { id: newId, species: "", weight: "", quantity: "", condition: "fresh" }]);
  };

  const removeCatchEntry = (id: string) => {
    if (catchEntries.length > 1) {
      setCatchEntries(catchEntries.filter((entry) => entry.id !== id));
    }
  };

  const updateCatchEntry = (id: string, field: keyof CatchEntry, value: string) => {
    setCatchEntries(
      catchEntries.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const handlePhotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files));
    }
  };

  const getTotalWeight = () => {
    return catchEntries
      .reduce((sum, entry) => sum + (parseFloat(entry.weight) || 0), 0)
      .toFixed(2);
  };

  const getTotalQuantity = () => {
    return catchEntries
      .reduce((sum, entry) => sum + (parseInt(entry.quantity) || 0), 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const reportData = {
      ...formData,
      catchEntries,
      totalWeight: getTotalWeight(),
      totalQuantity: getTotalQuantity(),
    };
    
    console.log("Report data:", reportData);
    console.log("Photos:", photos);
    
    toast({
      title: "Report Submitted!",
      description: `Your catch report has been submitted successfully. Reference: CR-2024-${Math.floor(Math.random() * 10000)}`,
    });
    
    setTimeout(() => {
      router.push("/portal/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => router.push("/portal/reporting")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Reports
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Submit Catch Report</h1>
          <p className="text-gray-600 mt-2">Report your fishing activities and catches</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Trip Information */}
          <Card className="mb-6">
            <CardContent className="pt-6 space-y-6">
              <h3 className="text-lg font-semibold">Trip Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="licenseNumber">License Number *</Label>
                  <Input
                    id="licenseNumber"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleInputChange}
                    placeholder="e.g., CFL-2024-0123"
                    required
                  />
                </div>
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
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="tripStartDate">Trip Start Date & Time *</Label>
                  <Input
                    id="tripStartDate"
                    name="tripStartDate"
                    type="datetime-local"
                    value={formData.tripStartDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="tripEndDate">Trip End Date & Time *</Label>
                  <Input
                    id="tripEndDate"
                    name="tripEndDate"
                    type="datetime-local"
                    value={formData.tripEndDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fishingMethod">Fishing Method *</Label>
                  <Select value={formData.fishingMethod} onValueChange={(value) => handleSelectChange("fishingMethod", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      {fishingMethods.map((method) => (
                        <SelectItem key={method} value={method}>{method}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
            </CardContent>
          </Card>

          {/* Fishing Location */}
          <Card className="mb-6">
            <CardContent className="pt-6 space-y-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Fishing Location
              </h3>
              
              <div>
                <Label htmlFor="fishingZone">Fishing Zone / Area *</Label>
                <Input
                  id="fishingZone"
                  name="fishingZone"
                  value={formData.fishingZone}
                  onChange={handleInputChange}
                  placeholder="e.g., EEZ Zone 3, Coastal waters near Monrovia"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="latitude">Latitude (GPS) *</Label>
                  <Input
                    id="latitude"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleInputChange}
                    placeholder="e.g., 6.3156"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="longitude">Longitude (GPS) *</Label>
                  <Input
                    id="longitude"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleInputChange}
                    placeholder="e.g., -10.8074"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Catch Details */}
          <Card className="mb-6">
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Catch Details</h3>
                <Button type="button" onClick={addCatchEntry} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Species
                </Button>
              </div>

              {catchEntries.map((entry, index) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 border rounded-lg bg-gray-50"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-semibold text-sm text-gray-700">Catch #{index + 1}</span>
                    {catchEntries.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeCatchEntry(entry.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor={`species-${entry.id}`}>Species *</Label>
                      <Select
                        value={entry.species}
                        onValueChange={(value) => updateCatchEntry(entry.id, "species", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select species" />
                        </SelectTrigger>
                        <SelectContent>
                          {commonSpecies.map((species) => (
                            <SelectItem key={species} value={species}>{species}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor={`weight-${entry.id}`}>Total Weight (kg) *</Label>
                      <Input
                        id={`weight-${entry.id}`}
                        type="number"
                        step="0.01"
                        value={entry.weight}
                        onChange={(e) => updateCatchEntry(entry.id, "weight", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor={`quantity-${entry.id}`}>Quantity (pieces) *</Label>
                      <Input
                        id={`quantity-${entry.id}`}
                        type="number"
                        value={entry.quantity}
                        onChange={(e) => updateCatchEntry(entry.id, "quantity", e.target.value)}
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor={`condition-${entry.id}`}>Condition *</Label>
                      <Select
                        value={entry.condition}
                        onValueChange={(value) => updateCatchEntry(entry.id, "condition", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fresh">Fresh</SelectItem>
                          <SelectItem value="frozen">Frozen</SelectItem>
                          <SelectItem value="processed">Processed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Summary */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Total Species:</span>
                      <span className="font-semibold ml-2">{catchEntries.length}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Total Weight:</span>
                      <span className="font-semibold ml-2">{getTotalWeight()} kg</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Total Quantity:</span>
                      <span className="font-semibold ml-2">{getTotalQuantity()} pieces</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card className="mb-6">
            <CardContent className="pt-6 space-y-6">
              <h3 className="text-lg font-semibold">Additional Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fuelUsed">Fuel Used (liters)</Label>
                  <Input
                    id="fuelUsed"
                    name="fuelUsed"
                    type="number"
                    step="0.1"
                    value={formData.fuelUsed}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="iceUsed">Ice Used (kg)</Label>
                  <Input
                    id="iceUsed"
                    name="iceUsed"
                    type="number"
                    step="0.1"
                    value={formData.iceUsed}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="photos">Catch Photos (Optional)</Label>
                <Input
                  id="photos"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotosChange}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Upload photos of your catch (recommended for verification)
                </p>
              </div>

              <div>
                <Label htmlFor="additionalNotes">Additional Notes</Label>
                <Textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any additional information about the fishing trip, weather conditions, or observations"
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Submit Report
              <Check className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
