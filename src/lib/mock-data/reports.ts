// Mock catch report and payment data
export interface CatchReport {
  id: string;
  vesselId: string;
  vesselName: string;
  reportDate: string;
  fishingPeriod: {
    start: string;
    end: string;
  };
  location: {
    zone: string;
    latitude?: number;
    longitude?: number;
  };
  catches: {
    species: string;
    quantity: number;
    unit: string;
  }[];
  status: "Submitted" | "Under Review" | "Approved" | "Rejected";
  submittedBy: string;
  notes?: string;
}

export interface Payment {
  id: string;
  invoiceNumber: string;
  type: string;
  description: string;
  amount: number;
  currency: string;
  status: "Paid" | "Pending" | "Overdue" | "Cancelled";
  dueDate: string;
  paidDate?: string;
  paymentMethod?: string;
  transactionId?: string;
  payer: string;
  relatedTo?: {
    type: "License" | "Vessel" | "Fine";
    id: string;
    reference: string;
  };
}

export const mockCatchReports: CatchReport[] = [
  {
    id: "1",
    vesselId: "1",
    vesselName: "Ocean Explorer",
    reportDate: "2024-12-15",
    fishingPeriod: {
      start: "2024-12-10",
      end: "2024-12-14",
    },
    location: {
      zone: "EEZ Zone A",
      latitude: 5.2345,
      longitude: -10.1234,
    },
    catches: [
      { species: "Yellowfin Tuna", quantity: 2500, unit: "kg" },
      { species: "Skipjack Tuna", quantity: 1800, unit: "kg" },
      { species: "Snapper", quantity: 450, unit: "kg" },
    ],
    status: "Approved",
    submittedBy: "Captain James Wilson",
  },
  {
    id: "2",
    vesselId: "2",
    vesselName: "Sea Harvester",
    reportDate: "2024-12-18",
    fishingPeriod: {
      start: "2024-12-12",
      end: "2024-12-17",
    },
    location: {
      zone: "EEZ Zone C",
    },
    catches: [
      { species: "Shrimp", quantity: 3200, unit: "kg" },
      { species: "Crab", quantity: 890, unit: "kg" },
    ],
    status: "Under Review",
    submittedBy: "Captain Maria Santos",
  },
  {
    id: "3",
    vesselId: "3",
    vesselName: "Blue Dolphin",
    reportDate: "2024-12-20",
    fishingPeriod: {
      start: "2024-12-19",
      end: "2024-12-20",
    },
    location: {
      zone: "Coastal Waters",
    },
    catches: [
      { species: "Barracuda", quantity: 125, unit: "kg" },
      { species: "Snapper", quantity: 78, unit: "kg" },
    ],
    status: "Submitted",
    submittedBy: "John Toe",
  },
];

export const mockPayments: Payment[] = [
  {
    id: "1",
    invoiceNumber: "INV-2024-001",
    type: "License Fee",
    description: "Annual Commercial Fishing License",
    amount: 5000,
    currency: "USD",
    status: "Paid",
    dueDate: "2024-01-15",
    paidDate: "2024-01-10",
    paymentMethod: "Bank Transfer",
    transactionId: "TXN-20240110-001",
    payer: "Liberian Fishing Co.",
    relatedTo: {
      type: "License",
      id: "1",
      reference: "FL-2024-001",
    },
  },
  {
    id: "2",
    invoiceNumber: "INV-2024-002",
    type: "License Fee",
    description: "Annual Trawler License",
    amount: 7500,
    currency: "USD",
    status: "Paid",
    dueDate: "2024-02-10",
    paidDate: "2024-02-08",
    paymentMethod: "Mobile Money",
    transactionId: "TXN-20240208-002",
    payer: "Atlantic Seafood Ltd.",
    relatedTo: {
      type: "License",
      id: "2",
      reference: "FL-2024-002",
    },
  },
  {
    id: "3",
    invoiceNumber: "INV-2024-015",
    type: "Vessel Registration",
    description: "Vessel Registration Renewal",
    amount: 1500,
    currency: "USD",
    status: "Pending",
    dueDate: "2025-01-15",
    payer: "Liberian Fishing Co.",
    relatedTo: {
      type: "Vessel",
      id: "1",
      reference: "LR-2024-001",
    },
  },
  {
    id: "4",
    invoiceNumber: "INV-2024-020",
    type: "Fine",
    description: "Late Catch Report Submission",
    amount: 500,
    currency: "USD",
    status: "Overdue",
    dueDate: "2024-12-01",
    payer: "Atlantic Seafood Ltd.",
    relatedTo: {
      type: "License",
      id: "2",
      reference: "FL-2024-002",
    },
  },
  {
    id: "5",
    invoiceNumber: "INV-2024-003",
    type: "License Fee",
    description: "Artisanal Fishing License",
    amount: 500,
    currency: "USD",
    status: "Paid",
    dueDate: "2024-03-05",
    paidDate: "2024-03-03",
    paymentMethod: "Cash",
    transactionId: "TXN-20240303-003",
    payer: "John Toe",
    relatedTo: {
      type: "License",
      id: "3",
      reference: "FL-2024-003",
    },
  },
];

export function getCatchReportById(id: string): CatchReport | undefined {
  return mockCatchReports.find((report) => report.id === id);
}

export function getCatchReportsByVessel(vesselId: string): CatchReport[] {
  return mockCatchReports.filter((report) => report.vesselId === vesselId);
}

export function getPaymentById(id: string): Payment | undefined {
  return mockPayments.find((payment) => payment.id === id);
}

export function getPaymentsByStatus(status: Payment["status"]): Payment[] {
  return mockPayments.filter((payment) => payment.status === status);
}

export function getPaymentsByPayer(payer: string): Payment[] {
  return mockPayments.filter((payment) => payment.payer === payer);
}
