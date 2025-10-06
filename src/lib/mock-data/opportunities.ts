// Mock opportunities data (jobs and scholarships)
export interface Opportunity {
  id: string;
  title: string;
  type: "Job" | "Scholarship" | "Training" | "Grant";
  category: string;
  description: string;
  requirements: string[];
  benefits?: string[];
  deadline: string;
  status: "Open" | "Closed" | "Extended";
  location?: string;
  duration?: string;
  salary?: string;
  applicationUrl?: string;
  contactEmail: string;
  postedDate: string;
}

export const mockOpportunities: Opportunity[] = [
  {
    id: "1",
    title: "Senior Fisheries Officer",
    type: "Job",
    category: "Management",
    description:
      "Seeking experienced fisheries management officer to oversee commercial fishing operations and ensure compliance with regulations.",
    requirements: [
      "Bachelor's degree in Marine Biology, Fisheries Science, or related field",
      "Minimum 5 years experience in fisheries management",
      "Knowledge of Liberian fisheries regulations",
      "Strong analytical and communication skills",
      "Valid driver's license",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Professional development opportunities",
      "Pension plan",
    ],
    deadline: "2025-01-15",
    status: "Open",
    location: "Monrovia, Liberia",
    duration: "Full-time, Permanent",
    salary: "$35,000 - $45,000 annually",
    contactEmail: "recruitment@nafaa.gov.lr",
    postedDate: "2024-12-01",
  },
  {
    id: "2",
    title: "Aquaculture Development Scholarship",
    type: "Scholarship",
    category: "Education",
    description:
      "Full scholarship for pursuing Master's degree in Aquaculture or related field at recognized international universities.",
    requirements: [
      "Liberian citizen",
      "Bachelor's degree with minimum 3.0 GPA",
      "Acceptance letter from accredited university",
      "Commitment to return to Liberia upon completion",
      "Two letters of recommendation",
    ],
    benefits: [
      "Full tuition coverage",
      "Monthly stipend for living expenses",
      "Travel allowance",
      "Book and research allowance",
    ],
    deadline: "2025-02-01",
    status: "Open",
    duration: "2 years",
    contactEmail: "scholarships@nafaa.gov.lr",
    postedDate: "2024-11-25",
  },
  {
    id: "3",
    title: "Marine Inspector",
    type: "Job",
    category: "Enforcement",
    description:
      "Join our enforcement team to conduct vessel inspections and ensure compliance with fishing regulations and safety standards.",
    requirements: [
      "Diploma or degree in related field",
      "Minimum 2 years experience in marine inspections",
      "Physical fitness for boarding vessels",
      "Knowledge of maritime safety regulations",
      "Ability to work in challenging conditions",
    ],
    benefits: [
      "Competitive salary",
      "Field allowances",
      "Training opportunities",
      "Health insurance",
    ],
    deadline: "2025-01-30",
    status: "Open",
    location: "Buchanan & Harper",
    duration: "Full-time, Permanent",
    salary: "$25,000 - $30,000 annually",
    contactEmail: "recruitment@nafaa.gov.lr",
    postedDate: "2024-12-10",
  },
  {
    id: "4",
    title: "Sustainable Fishing Practices Training",
    type: "Training",
    category: "Capacity Building",
    description:
      "Free training program for artisanal fishers on sustainable fishing methods, equipment use, and business management.",
    requirements: [
      "Active fishing license",
      "Minimum 1 year fishing experience",
      "Commitment to attend all sessions",
      "Basic literacy in English or local language",
    ],
    benefits: [
      "Free training",
      "Certificate of completion",
      "Starter equipment package",
      "Access to microfinance programs",
    ],
    deadline: "2025-01-20",
    status: "Open",
    location: "Multiple coastal communities",
    duration: "3 weeks (part-time)",
    contactEmail: "training@nafaa.gov.lr",
    postedDate: "2024-12-05",
  },
  {
    id: "5",
    title: "Research Grant: Climate Change Impact on Fisheries",
    type: "Grant",
    category: "Research",
    description:
      "Research grant available for studying the impact of climate change on Liberia's marine ecosystems and fishing communities.",
    requirements: [
      "PhD or Master's degree in relevant field",
      "Research proposal aligned with NaFAA priorities",
      "Affiliation with recognized research institution",
      "Budget not exceeding $50,000",
    ],
    benefits: [
      "Research funding up to $50,000",
      "Access to NaFAA data and facilities",
      "Publication support",
      "Networking opportunities",
    ],
    deadline: "2025-02-28",
    status: "Open",
    duration: "12-18 months",
    contactEmail: "research@nafaa.gov.lr",
    postedDate: "2024-11-30",
  },
  {
    id: "6",
    title: "IT Systems Administrator",
    type: "Job",
    category: "Technology",
    description:
      "Manage and maintain NaFAA's IT infrastructure, including digital licensing platform and database systems.",
    requirements: [
      "Bachelor's degree in Computer Science or IT",
      "Minimum 3 years system administration experience",
      "Knowledge of web servers, databases, and networks",
      "Experience with cloud platforms",
      "Problem-solving skills",
    ],
    deadline: "2025-01-10",
    status: "Extended",
    location: "Monrovia, Liberia",
    duration: "Full-time, Permanent",
    salary: "$30,000 - $40,000 annually",
    contactEmail: "recruitment@nafaa.gov.lr",
    postedDate: "2024-11-15",
  },
];

export function getOpportunityById(id: string): Opportunity | undefined {
  return mockOpportunities.find((opp) => opp.id === id);
}

export function getOpportunitiesByType(
  type: Opportunity["type"]
): Opportunity[] {
  return mockOpportunities.filter((opp) => opp.type === type);
}

export function getOpportunitiesByStatus(
  status: Opportunity["status"]
): Opportunity[] {
  return mockOpportunities.filter((opp) => opp.status === status);
}

export function getOpenOpportunities(): Opportunity[] {
  return mockOpportunities.filter((opp) => opp.status === "Open");
}
