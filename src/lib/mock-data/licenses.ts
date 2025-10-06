// Mock license data for development
export interface License {
  id: string;
  licenseNumber: string;
  type: string;
  holder: string;
  vesselId?: string;
  vesselName?: string;
  status: "Active" | "Expired" | "Suspended" | "Pending";
  issueDate: string;
  expiryDate: string;
  fishingZones?: string[];
  quotas?: {
    species: string;
    amount: number;
    unit: string;
  }[];
  fees: {
    amount: number;
    currency: string;
    paid: boolean;
  };
}

export const mockLicenses: License[] = [
  {
    id: "1",
    licenseNumber: "FL-2024-001",
    type: "Commercial Fishing License",
    holder: "Liberian Fishing Co.",
    vesselId: "1",
    vesselName: "Ocean Explorer",
    status: "Active",
    issueDate: "2024-01-15",
    expiryDate: "2025-01-14",
    fishingZones: ["EEZ Zone A", "EEZ Zone B"],
    quotas: [
      { species: "Tuna", amount: 50, unit: "tons" },
      { species: "Snapper", amount: 30, unit: "tons" },
    ],
    fees: {
      amount: 5000,
      currency: "USD",
      paid: true,
    },
  },
  {
    id: "2",
    licenseNumber: "FL-2024-002",
    type: "Trawler License",
    holder: "Atlantic Seafood Ltd.",
    vesselId: "2",
    vesselName: "Sea Harvester",
    status: "Active",
    issueDate: "2024-02-10",
    expiryDate: "2025-02-09",
    fishingZones: ["EEZ Zone C"],
    quotas: [
      { species: "Shrimp", amount: 40, unit: "tons" },
      { species: "Crab", amount: 25, unit: "tons" },
    ],
    fees: {
      amount: 7500,
      currency: "USD",
      paid: true,
    },
  },
  {
    id: "3",
    licenseNumber: "FL-2024-003",
    type: "Artisanal Fishing License",
    holder: "John Toe",
    vesselId: "3",
    vesselName: "Blue Dolphin",
    status: "Active",
    issueDate: "2024-03-05",
    expiryDate: "2025-03-04",
    fishingZones: ["Coastal Waters"],
    fees: {
      amount: 500,
      currency: "USD",
      paid: true,
    },
  },
  {
    id: "4",
    licenseNumber: "FL-2023-045",
    type: "Processing License",
    holder: "Liberian Seafood Processing",
    vesselId: "4",
    vesselName: "Golden Catch",
    status: "Suspended",
    issueDate: "2023-08-20",
    expiryDate: "2024-08-19",
    fees: {
      amount: 10000,
      currency: "USD",
      paid: false,
    },
  },
  {
    id: "5",
    licenseNumber: "AL-2024-010",
    type: "Aquaculture License",
    holder: "Coastal Aquaculture Farm",
    status: "Active",
    issueDate: "2024-04-01",
    expiryDate: "2026-03-31",
    quotas: [
      { species: "Tilapia", amount: 100, unit: "tons/year" },
      { species: "Catfish", amount: 75, unit: "tons/year" },
    ],
    fees: {
      amount: 3000,
      currency: "USD",
      paid: true,
    },
  },
  {
    id: "6",
    licenseNumber: "FL-2024-020",
    type: "Recreational Fishing Permit",
    holder: "Robert Johnson",
    vesselId: "5",
    vesselName: "Wave Rider",
    status: "Active",
    issueDate: "2024-06-12",
    expiryDate: "2025-06-11",
    fishingZones: ["Recreational Zone"],
    fees: {
      amount: 200,
      currency: "USD",
      paid: true,
    },
  },
];

export function getLicenseById(id: string): License | undefined {
  return mockLicenses.find((license) => license.id === id);
}

export function getLicensesByStatus(status: License["status"]): License[] {
  return mockLicenses.filter((license) => license.status === status);
}

export function getLicensesByType(type: string): License[] {
  return mockLicenses.filter((license) => license.type === type);
}

export function getLicensesByHolder(holder: string): License[] {
  return mockLicenses.filter((license) => license.holder === holder);
}
