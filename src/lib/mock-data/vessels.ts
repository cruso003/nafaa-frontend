// Mock vessel data for development
export interface Vessel {
  id: string;
  name: string;
  type: string;
  registrationNumber: string;
  imo?: string;
  flag: string;
  length: number;
  tonnage: number;
  owner: string;
  captain?: string;
  homePort: string;
  status: "Active" | "Inactive" | "Suspended" | "Under Inspection";
  registrationDate: string;
  expiryDate: string;
  fishingZones?: string[];
  equipment?: string[];
}

export const mockVessels: Vessel[] = [
  {
    id: "1",
    name: "Ocean Explorer",
    type: "Commercial Fishing",
    registrationNumber: "LR-2024-001",
    imo: "IMO-9876543",
    flag: "Liberia",
    length: 45.5,
    tonnage: 250,
    owner: "Liberian Fishing Co.",
    captain: "Captain James Wilson",
    homePort: "Monrovia",
    status: "Active",
    registrationDate: "2024-01-15",
    expiryDate: "2025-01-14",
    fishingZones: ["EEZ Zone A", "EEZ Zone B"],
    equipment: ["GPS", "Sonar", "Refrigeration"],
  },
  {
    id: "2",
    name: "Sea Harvester",
    type: "Trawler",
    registrationNumber: "LR-2024-002",
    imo: "IMO-9876544",
    flag: "Liberia",
    length: 52.0,
    tonnage: 320,
    owner: "Atlantic Seafood Ltd.",
    captain: "Captain Maria Santos",
    homePort: "Buchanan",
    status: "Active",
    registrationDate: "2024-02-10",
    expiryDate: "2025-02-09",
    fishingZones: ["EEZ Zone C"],
    equipment: ["GPS", "Sonar", "Fish Finder", "Refrigeration"],
  },
  {
    id: "3",
    name: "Blue Dolphin",
    type: "Artisanal",
    registrationNumber: "LR-2024-003",
    flag: "Liberia",
    length: 12.5,
    tonnage: 15,
    owner: "John Toe",
    homePort: "Harper",
    status: "Active",
    registrationDate: "2024-03-05",
    expiryDate: "2025-03-04",
    fishingZones: ["Coastal Waters"],
    equipment: ["Basic Navigation"],
  },
  {
    id: "4",
    name: "Golden Catch",
    type: "Processing Vessel",
    registrationNumber: "LR-2023-045",
    imo: "IMO-9876545",
    flag: "Liberia",
    length: 65.0,
    tonnage: 480,
    owner: "Liberian Seafood Processing",
    captain: "Captain David Chen",
    homePort: "Monrovia",
    status: "Under Inspection",
    registrationDate: "2023-08-20",
    expiryDate: "2024-08-19",
    equipment: ["GPS", "Processing Equipment", "Cold Storage"],
  },
  {
    id: "5",
    name: "Wave Rider",
    type: "Recreational",
    registrationNumber: "LR-2024-015",
    flag: "Liberia",
    length: 18.0,
    tonnage: 8,
    owner: "Robert Johnson",
    homePort: "Monrovia",
    status: "Active",
    registrationDate: "2024-06-12",
    expiryDate: "2025-06-11",
    fishingZones: ["Recreational Zone"],
    equipment: ["GPS", "Fish Finder"],
  },
];

export function getVesselById(id: string): Vessel | undefined {
  return mockVessels.find((vessel) => vessel.id === id);
}

export function getVesselsByStatus(status: Vessel["status"]): Vessel[] {
  return mockVessels.filter((vessel) => vessel.status === status);
}

export function getVesselsByType(type: string): Vessel[] {
  return mockVessels.filter((vessel) => vessel.type === type);
}
