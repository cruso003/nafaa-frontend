export interface ProcurementBid {
  id: number;
  title: string;
  bidNumber: string;
  category: string;
  description: string;
  estimatedValue: string;
  deadline: string;
  publishedDate: string;
  status: "open" | "closed" | "awarded";
  requirements: string[];
  documents: {
    name: string;
    size: string;
    url?: string;
  }[];
  technicalSpecs?: string;
  evaluationCriteria?: string[];
  contactPerson?: {
    name: string;
    email: string;
    phone: string;
  };
  submissionsCount?: number;
  awardedTo?: string;
  awardDate?: string;
}

export interface BidSubmission {
  id: string;
  bidId: number;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  proposedAmount: string;
  technicalProposal: string;
  documents: File[];
  submittedDate: string;
  status: "pending" | "under-review" | "accepted" | "rejected";
}

export const procurementBids: ProcurementBid[] = [
  {
    id: 1,
    title: "Supply of Marine Research Vessel",
    bidNumber: "NFAA/PROC/2025/001",
    category: "Equipment",
    description: "Procurement of a fully equipped marine research vessel for fisheries monitoring and stock assessment operations. The vessel must be capable of extended offshore operations and equipped with modern navigation, communication, and research equipment.",
    estimatedValue: "$2,500,000",
    deadline: "2025-11-15",
    publishedDate: "2025-10-01",
    status: "open",
    requirements: [
      "Valid business registration and tax clearance certificate",
      "Technical specifications compliance with IMO standards",
      "Financial capacity proof (bank statements for last 3 years)",
      "Previous experience in marine vessel supply (minimum 3 similar projects)",
      "Warranty period of at least 5 years",
      "Local representation or partnership with Liberian company"
    ],
    documents: [
      { name: "Bid Document", size: "2.4 MB", url: "/docs/bid-001.pdf" },
      { name: "Technical Specifications", size: "1.8 MB", url: "/docs/tech-spec-001.pdf" },
      { name: "Terms and Conditions", size: "450 KB", url: "/docs/terms-001.pdf" },
      { name: "Evaluation Matrix", size: "320 KB", url: "/docs/eval-001.pdf" }
    ],
    technicalSpecs: "Vessel must be 25-30 meters in length, equipped with echo sounders, GPS, radar, fish finding equipment, laboratory space, and accommodation for 15 crew members. Fuel capacity minimum 10,000 liters.",
    evaluationCriteria: [
      "Technical compliance (40 points)",
      "Financial proposal (30 points)",
      "Previous experience (20 points)",
      "After-sales service (10 points)"
    ],
    contactPerson: {
      name: "Robert Johnson",
      email: "procurement@nafaa.gov.lr",
      phone: "+231-777-123-456"
    },
    submissionsCount: 12
  },
  {
    id: 2,
    title: "Construction of Cold Storage Facilities",
    bidNumber: "NFAA/PROC/2025/002",
    category: "Infrastructure",
    description: "Design and construction of three modern cold storage facilities in Grand Bassa, Sinoe, and Maryland Counties. Each facility must have a capacity of 500 metric tons and meet international food safety standards.",
    estimatedValue: "$1,800,000",
    deadline: "2025-11-20",
    publishedDate: "2025-10-05",
    status: "open",
    requirements: [
      "Licensed construction company with Grade 1 or 2 classification",
      "Cold storage construction experience (minimum 2 similar projects)",
      "Financial capability documentation (minimum turnover $2M annually)",
      "Health and safety certifications (ISO 45001 preferred)",
      "Environmental compliance certificate",
      "Project timeline not exceeding 18 months"
    ],
    documents: [
      { name: "Bid Document", size: "3.1 MB", url: "/docs/bid-002.pdf" },
      { name: "Architectural Plans", size: "5.2 MB", url: "/docs/arch-002.pdf" },
      { name: "Bill of Quantities", size: "980 KB", url: "/docs/boq-002.pdf" },
      { name: "Site Plans", size: "2.1 MB", url: "/docs/site-002.pdf" }
    ],
    technicalSpecs: "Three facilities each with 500MT capacity, temperature range -25°C to +5°C, backup power systems, loading/unloading bays, office space, and security systems.",
    evaluationCriteria: [
      "Technical design and approach (35 points)",
      "Financial proposal (30 points)",
      "Experience and past performance (25 points)",
      "Project timeline (10 points)"
    ],
    contactPerson: {
      name: "Sarah Williams",
      email: "infrastructure@nafaa.gov.lr",
      phone: "+231-777-234-567"
    },
    submissionsCount: 8
  },
  {
    id: 3,
    title: "Supply of Fisheries Monitoring System",
    bidNumber: "NFAA/PROC/2025/003",
    category: "Technology",
    description: "Procurement and installation of advanced vessel monitoring system (VMS) and integrated catch reporting software for real-time tracking and data management of commercial fishing vessels.",
    estimatedValue: "$950,000",
    deadline: "2025-11-25",
    publishedDate: "2025-10-08",
    status: "open",
    requirements: [
      "IT/Software company registration and valid licenses",
      "VMS implementation experience in fisheries sector",
      "Technical support capability (24/7 helpdesk)",
      "Training and maintenance plan for 3 years",
      "System must be compatible with regional standards",
      "Data security and privacy compliance"
    ],
    documents: [
      { name: "Bid Document", size: "1.9 MB", url: "/docs/bid-003.pdf" },
      { name: "System Requirements", size: "1.2 MB", url: "/docs/sys-req-003.pdf" },
      { name: "Evaluation Criteria", size: "620 KB", url: "/docs/eval-003.pdf" },
      { name: "SLA Template", size: "450 KB", url: "/docs/sla-003.pdf" }
    ],
    technicalSpecs: "Cloud-based VMS with mobile app, real-time vessel tracking, automated catch reporting, data analytics dashboard, API integration capabilities, and multi-language support.",
    evaluationCriteria: [
      "Technical solution quality (40 points)",
      "Cost and value for money (25 points)",
      "Implementation timeline (15 points)",
      "Support and maintenance plan (20 points)"
    ],
    contactPerson: {
      name: "Michael Chen",
      email: "technology@nafaa.gov.lr",
      phone: "+231-777-345-678"
    },
    submissionsCount: 15
  },
  {
    id: 4,
    title: "Consultancy for Fisheries Management Plan",
    bidNumber: "NFAA/PROC/2024/028",
    category: "Consultancy",
    description: "Development of comprehensive 5-year fisheries management and sustainability plan incorporating ecosystem-based management principles and climate change adaptation strategies.",
    estimatedValue: "$450,000",
    deadline: "2025-10-18",
    publishedDate: "2024-12-20",
    status: "closed",
    requirements: [
      "Fisheries management expertise (minimum 10 years)",
      "International experience in similar projects preferred",
      "Team composition documentation (lead consultant + experts)",
      "Previous similar projects portfolio (minimum 3 projects)",
      "Understanding of West African fisheries context"
    ],
    documents: [
      { name: "Terms of Reference", size: "850 KB", url: "/docs/tor-004.pdf" },
      { name: "Proposal Template", size: "540 KB", url: "/docs/template-004.pdf" }
    ],
    contactPerson: {
      name: "Dr. Patricia Moore",
      email: "research@nafaa.gov.lr",
      phone: "+231-777-456-789"
    },
    submissionsCount: 23,
    awardedTo: "Marine Resources Consulting Ltd.",
    awardDate: "2025-10-20"
  },
  {
    id: 5,
    title: "Supply of Laboratory Equipment",
    bidNumber: "NFAA/PROC/2025/004",
    category: "Equipment",
    description: "Procurement of modern laboratory equipment for fish quality testing, disease diagnosis, and water quality analysis to enhance food safety standards.",
    estimatedValue: "$380,000",
    deadline: "2025-12-01",
    publishedDate: "2025-10-10",
    status: "open",
    requirements: [
      "Laboratory equipment supplier with authorized dealership",
      "Equipment warranty minimum 3 years with spare parts availability",
      "Installation, calibration, and training included in proposal",
      "After-sales support commitment (response time within 48 hours)",
      "CE or equivalent international certification",
      "User manuals in English"
    ],
    documents: [
      { name: "Equipment Specifications", size: "1.5 MB", url: "/docs/equip-005.pdf" },
      { name: "Bid Form", size: "680 KB", url: "/docs/form-005.pdf" },
      { name: "Quality Standards", size: "420 KB", url: "/docs/quality-005.pdf" }
    ],
    technicalSpecs: "PCR machines, spectrophotometers, microscopes, water quality testing kits, pH meters, dissolved oxygen meters, and related consumables.",
    evaluationCriteria: [
      "Equipment quality and specifications (35 points)",
      "Price competitiveness (30 points)",
      "Warranty and support (20 points)",
      "Delivery timeline (15 points)"
    ],
    contactPerson: {
      name: "Dr. James Thompson",
      email: "laboratory@nafaa.gov.lr",
      phone: "+231-777-567-890"
    },
    submissionsCount: 6
  },
  {
    id: 6,
    title: "Supply of Fish Inspection Vehicles",
    bidNumber: "NFAA/PROC/2025/005",
    category: "Equipment",
    description: "Supply of 10 four-wheel drive vehicles for fish inspection and enforcement operations across coastal counties.",
    estimatedValue: "$650,000",
    deadline: "2025-11-30",
    publishedDate: "2025-10-12",
    status: "open",
    requirements: [
      "Authorized vehicle dealer with service centers in Liberia",
      "Vehicles must be new (current year model)",
      "Minimum 2-year warranty",
      "Spare parts availability guarantee",
      "After-sales service and maintenance support"
    ],
    documents: [
      { name: "Bid Document", size: "1.2 MB", url: "/docs/bid-006.pdf" },
      { name: "Vehicle Specifications", size: "890 KB", url: "/docs/vehicle-006.pdf" }
    ],
    contactPerson: {
      name: "John Martinez",
      email: "procurement@nafaa.gov.lr",
      phone: "+231-777-678-901"
    },
    submissionsCount: 4
  }
];

// Mock service functions
export const getProcurementBids = (filters?: {
  category?: string;
  status?: string;
  searchQuery?: string;
}): ProcurementBid[] => {
  let filtered = [...procurementBids];

  if (filters?.category && filters.category !== "All Categories") {
    filtered = filtered.filter(bid => bid.category === filters.category);
  }

  if (filters?.status && filters.status !== "all") {
    filtered = filtered.filter(bid => bid.status === filters.status);
  }

  if (filters?.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(
      bid =>
        bid.title.toLowerCase().includes(query) ||
        bid.bidNumber.toLowerCase().includes(query) ||
        bid.description.toLowerCase().includes(query)
    );
  }

  return filtered.sort((a, b) => 
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
};

export const getProcurementBidById = (id: number): ProcurementBid | undefined => {
  return procurementBids.find(bid => bid.id === id);
};

export const submitBid = async (submission: Omit<BidSubmission, "id" | "submittedDate" | "status">): Promise<{ success: boolean; submissionId?: string; message: string }> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const submissionId = `SUB-${Date.now()}`;
      resolve({
        success: true,
        submissionId,
        message: "Your bid has been submitted successfully. You will receive a confirmation email shortly."
      });
    }, 1500);
  });
};
