// Central export for all mock data
export * from "./statistics";
export * from "./vessels";
export * from "./licenses";
export * from "./news";
export * from "./opportunities";
export * from "./publications";
export * from "./reports";

// Re-export types
export type { Vessel } from "./vessels";
export type { License } from "./licenses";
export type { NewsArticle } from "./news";
export type { Opportunity } from "./opportunities";
export type { Publication } from "./publications";
export type { CatchReport, Payment } from "./reports";
