"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ship,
  Plus,
  Edit,
  Trash2,
  AlertCircle,
  CheckCircle2,
  Calendar,
  MapPin,
  Anchor,
  Users,
  ArrowLeft,
  Download,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Mock vessel data
const mockVessels = [
  {
    id: "1",
    name: "Sea Star IV",
    registrationNumber: "VS-2024-001",
    type: "Commercial Fishing Vessel",
    length: "18.5m",
    capacity: "25 tons",
    homePort: "Monrovia",
    owner: "John Doe",
    registrationDate: "2024-01-15",
    expiryDate: "2025-01-14",
    status: "active",
    crew: 8,
  },
  {
    id: "2",
    name: "Ocean Pride",
    registrationNumber: "VS-2023-089",
    type: "Trawler",
    length: "22.0m",
    capacity: "35 tons",
    homePort: "Buchanan",
    owner: "John Doe",
    registrationDate: "2023-03-20",
    expiryDate: "2024-03-19",
    status: "expired",
    crew: 12,
  },
  {
    id: "3",
    name: "Blue Horizon",
    registrationNumber: "VS-2024-045",
    type: "Long-liner",
    length: "16.0m",
    capacity: "18 tons",
    homePort: "Greenville",
    owner: "John Doe",
    registrationDate: "2024-06-10",
    expiryDate: "2025-06-09",
    status: "active",
    crew: 6,
  },
];

export default function VesselsPage() {
  const [vessels, setVessels] = useState(mockVessels);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [selectedVessel, setSelectedVessel] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVessels = vessels.filter(
    (vessel) =>
      vessel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vessel.registrationNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/portal/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  My Vessels
                </h1>
                <p className="text-sm text-gray-600">
                  Manage your registered vessels
                </p>
              </div>
            </div>
            <Button onClick={() => setShowAddDialog(true)}>
              <Plus className="mr-2 h-5 w-5" />
              Add Vessel
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Total Vessels",
              value: vessels.length,
              color: "blue",
              icon: Ship,
            },
            {
              label: "Active",
              value: vessels.filter((v) => v.status === "active").length,
              color: "green",
              icon: CheckCircle2,
            },
            {
              label: "Expired",
              value: vessels.filter((v) => v.status === "expired").length,
              color: "red",
              icon: AlertCircle,
            },
            {
              label: "Total Crew",
              value: vessels.reduce((sum, v) => sum + v.crew, 0),
              color: "purple",
              icon: Users,
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <Input
            placeholder="Search vessels by name or registration number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Vessels List */}
        <div className="space-y-6">
          {filteredVessels.map((vessel, index) => (
            <motion.div
              key={vessel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-blue-100">
                    <Ship className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {vessel.name}
                      </h3>
                      <Badge
                        variant={
                          vessel.status === "active" ? "default" : "destructive"
                        }
                      >
                        {vessel.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 font-mono text-sm">
                      {vessel.registrationNumber}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedVessel(vessel)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Vessel Type</p>
                  <p className="font-semibold text-gray-900">{vessel.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Length</p>
                  <p className="font-semibold text-gray-900">{vessel.length}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Capacity</p>
                  <p className="font-semibold text-gray-900">
                    {vessel.capacity}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Home Port</p>
                  <p className="font-semibold text-gray-900 flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {vessel.homePort}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Registration Date</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {new Date(vessel.registrationDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Expiry Date</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {new Date(vessel.expiryDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Crew Size</p>
                  <p className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {vessel.crew} members
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Owner</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {vessel.owner}
                  </p>
                </div>
              </div>

              {vessel.status === "expired" && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="text-sm text-red-900">
                      This vessel's registration has expired. Please renew to
                      continue operations.
                    </p>
                  </div>
                  <Link href="/services/vessel-renewal">
                    <Button size="sm">Renew Now</Button>
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredVessels.length === 0 && (
          <div className="text-center py-12">
            <Ship className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No vessels found
            </h3>
            <p className="text-gray-600 mb-6">
              {searchQuery
                ? "Try adjusting your search query"
                : "Get started by adding your first vessel"}
            </p>
            <Button onClick={() => setShowAddDialog(true)}>
              <Plus className="mr-2 h-5 w-5" />
              Add Vessel
            </Button>
          </div>
        )}
      </div>

      {/* Add/Edit Vessel Dialog */}
      <Dialog
        open={showAddDialog || selectedVessel !== null}
        onOpenChange={(open) => {
          if (!open) {
            setShowAddDialog(false);
            setSelectedVessel(null);
          }
        }}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {selectedVessel ? "Edit Vessel" : "Add New Vessel"}
            </DialogTitle>
            <DialogDescription>
              {selectedVessel
                ? "Update your vessel information"
                : "Register a new vessel to your account"}
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="vesselName">Vessel Name *</Label>
                <Input
                  id="vesselName"
                  defaultValue={selectedVessel?.name}
                  placeholder="e.g., Sea Star IV"
                />
              </div>
              <div>
                <Label htmlFor="regNumber">Registration Number</Label>
                <Input
                  id="regNumber"
                  defaultValue={selectedVessel?.registrationNumber}
                  placeholder="VS-2024-XXX"
                  disabled
                />
              </div>
            </div>

            <div>
              <Label htmlFor="vesselType">Vessel Type *</Label>
              <Select defaultValue={selectedVessel?.type}>
                <SelectTrigger>
                  <SelectValue placeholder="Select vessel type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Commercial Fishing Vessel">
                    Commercial Fishing Vessel
                  </SelectItem>
                  <SelectItem value="Trawler">Trawler</SelectItem>
                  <SelectItem value="Long-liner">Long-liner</SelectItem>
                  <SelectItem value="Purse Seiner">Purse Seiner</SelectItem>
                  <SelectItem value="Gill-netter">Gill-netter</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="length">Length (meters) *</Label>
                <Input
                  id="length"
                  type="number"
                  step="0.1"
                  defaultValue={selectedVessel?.length?.replace("m", "")}
                  placeholder="18.5"
                />
              </div>
              <div>
                <Label htmlFor="capacity">Capacity (tons) *</Label>
                <Input
                  id="capacity"
                  type="number"
                  defaultValue={selectedVessel?.capacity?.replace(" tons", "")}
                  placeholder="25"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="homePort">Home Port *</Label>
                <Select defaultValue={selectedVessel?.homePort}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select port" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Monrovia">Monrovia</SelectItem>
                    <SelectItem value="Buchanan">Buchanan</SelectItem>
                    <SelectItem value="Greenville">Greenville</SelectItem>
                    <SelectItem value="Harper">Harper</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="crew">Crew Size *</Label>
                <Input
                  id="crew"
                  type="number"
                  defaultValue={selectedVessel?.crew}
                  placeholder="8"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="owner">Owner Name *</Label>
              <Input
                id="owner"
                defaultValue={selectedVessel?.owner}
                placeholder="John Doe"
              />
            </div>
          </form>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowAddDialog(false);
                setSelectedVessel(null);
              }}
            >
              Cancel
            </Button>
            <Button>
              {selectedVessel ? "Update Vessel" : "Register Vessel"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
