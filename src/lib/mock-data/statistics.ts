// Mock statistics data for development
export const monthlyData = [
  { month: "Jan", catch: 1200, vessels: 450, revenue: 85000 },
  { month: "Feb", catch: 1400, vessels: 480, revenue: 92000 },
  { month: "Mar", catch: 1600, vessels: 520, revenue: 98000 },
  { month: "Apr", catch: 1350, vessels: 495, revenue: 88000 },
  { month: "May", catch: 1800, vessels: 540, revenue: 105000 },
  { month: "Jun", catch: 2100, vessels: 580, revenue: 118000 },
  { month: "Jul", catch: 2300, vessels: 600, revenue: 125000 },
  { month: "Aug", catch: 2200, vessels: 590, revenue: 122000 },
  { month: "Sep", catch: 2000, vessels: 570, revenue: 115000 },
  { month: "Oct", catch: 1900, vessels: 560, revenue: 110000 },
  { month: "Nov", catch: 1700, vessels: 540, revenue: 102000 },
  { month: "Dec", catch: 1500, vessels: 520, revenue: 95000 },
];

export const vesselTypeData = [
  { name: "Commercial", value: 380, color: "var(--nafaa-ocean)" },
  { name: "Artisanal", value: 820, color: "var(--nafaa-ocean)" },
  { name: "Recreational", value: 245, color: "#00A86B" },
  { name: "Processing", value: 95, color: "#C60C30" },
];

export const topSpeciesData = [
  { species: "Tuna", catch: 3500 },
  { species: "Snapper", catch: 2800 },
  { species: "Grouper", catch: 2100 },
  { species: "Barracuda", catch: 1600 },
  { species: "Shrimp", catch: 1200 },
  { species: "Lobster", catch: 900 },
  { species: "Crab", catch: 750 },
];

export const keyMetrics = [
  {
    title: "Total Catch",
    value: "9,450",
    unit: "metric tons",
    change: "+12.5%",
    trend: "up" as const,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Active Vessels",
    value: "1,540",
    unit: "registered",
    change: "+8.3%",
    trend: "up" as const,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "License Holders",
    value: "2,340",
    unit: "active licenses",
    change: "+5.7%",
    trend: "up" as const,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Revenue",
    value: "$586K",
    unit: "YTD 2024",
    change: "+15.2%",
    trend: "up" as const,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

export const regionalData = [
  { region: "Montserrado", catch: 3200, vessels: 450 },
  { region: "Grand Bassa", catch: 2800, vessels: 380 },
  { region: "Sinoe", catch: 1900, vessels: 280 },
  { region: "Grand Kru", catch: 1550, vessels: 210 },
  { region: "Maryland", catch: 1200, vessels: 180 },
];

export const complianceData = [
  { category: "Compliant", value: 85, color: "#00A86B" },
  { category: "Pending Review", value: 10, color: "#FFA500" },
  { category: "Non-Compliant", value: 5, color: "#C60C30" },
];

export const exportData = [
  { destination: "USA", volume: 2500, value: 180000 },
  { destination: "EU", volume: 2100, value: 165000 },
  { destination: "China", volume: 1800, value: 140000 },
  { destination: "Japan", volume: 1400, value: 125000 },
  { destination: "Other", volume: 1650, value: 105000 },
];
