import { algoliasearch } from "algoliasearch";
import {
  ALGOLIA_APP_ID,
  ALGOLIA_SEARCH_API_KEY,
  USE_MOCK_DATA,
} from "@/config/constants";

// Initialize Algolia client
const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY);

// Index names
export const INDEXES = {
  VESSELS: "vessels",
  LICENSES: "licenses",
  NEWS: "news",
  PUBLICATIONS: "publications",
  OPPORTUNITIES: "opportunities",
  REGULATIONS: "regulations",
} as const;

/**
 * Search across all indexes
 */
export async function searchAll(query: string, options?: { limit?: number }) {
  if (USE_MOCK_DATA) {
    // Mock search results
    return getMockSearchResults(query, options?.limit);
  }

  try {
    const queries = Object.values(INDEXES).map((indexName) => ({
      indexName,
      query,
      hitsPerPage: options?.limit || 5,
    }));

    const { results } = await searchClient.search({ requests: queries });
    return results;
  } catch (error) {
    console.error("Algolia search error:", error);
    throw new Error("Search failed");
  }
}

/**
 * Search in a specific index
 */
export async function searchIndex(
  indexName: string,
  query: string,
  options?: {
    limit?: number;
    filters?: string;
    facets?: string[];
  }
) {
  if (USE_MOCK_DATA) {
    return getMockSearchResults(query, options?.limit, indexName);
  }

  try {
    const results = await searchClient.search({
      requests: [
        {
          indexName,
          query,
          hitsPerPage: options?.limit || 20,
          filters: options?.filters,
          facets: options?.facets,
        },
      ],
    });

    return results.results[0];
  } catch (error) {
    console.error(`Algolia search error in ${indexName}:`, error);
    throw new Error("Search failed");
  }
}

/**
 * Mock search results for development
 */
function getMockSearchResults(query: string, limit = 5, indexName?: string) {
  const mockResults = {
    vessels: [
      {
        objectID: "1",
        name: "Ocean Explorer",
        type: "Fishing Vessel",
        registrationNumber: "LR-2024-001",
        description: "Commercial fishing vessel for tuna",
      },
      {
        objectID: "2",
        name: "Sea Harvester",
        type: "Cargo Vessel",
        registrationNumber: "LR-2024-002",
        description: "Cargo transport for seafood products",
      },
    ],
    licenses: [
      {
        objectID: "1",
        licenseNumber: "FL-2024-001",
        type: "Commercial Fishing License",
        status: "Active",
        description: "Permit for commercial tuna fishing",
      },
      {
        objectID: "2",
        licenseNumber: "FL-2024-002",
        type: "Aquaculture License",
        status: "Active",
        description: "License for tilapia farming",
      },
    ],
    news: [
      {
        objectID: "1",
        title: "New Sustainable Fishing Guidelines Released",
        category: "Policy Update",
        date: "2024-12-20",
        excerpt:
          "NaFAA announces new guidelines for sustainable fishing practices",
      },
      {
        objectID: "2",
        title: "Annual Fisheries Conference 2024",
        category: "Event",
        date: "2024-12-15",
        excerpt:
          "Join us for the annual fisheries conference in Monrovia",
      },
    ],
    publications: [
      {
        objectID: "1",
        title: "Annual Fisheries Report 2023",
        type: "Report",
        year: 2023,
        description: "Comprehensive analysis of fisheries sector",
      },
      {
        objectID: "2",
        title: "Aquaculture Development Guidelines",
        type: "Guidelines",
        year: 2024,
        description: "Best practices for aquaculture development",
      },
    ],
    opportunities: [
      {
        objectID: "1",
        title: "Fisheries Officer Position",
        type: "Job",
        deadline: "2025-01-15",
        description: "Seeking experienced fisheries management officer",
      },
      {
        objectID: "2",
        title: "Aquaculture Training Scholarship",
        type: "Scholarship",
        deadline: "2025-02-01",
        description: "Full scholarship for aquaculture studies",
      },
    ],
    regulations: [
      {
        objectID: "1",
        title: "Fisheries Management Act 2023",
        type: "Legislation",
        effectiveDate: "2023-01-01",
        description: "Primary legislation for fisheries management",
      },
    ],
  };

  const filterResults = (data: any[]) => {
    if (!query) return data.slice(0, limit);
    return data
      .filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(query.toLowerCase())
        )
      )
      .slice(0, limit);
  };

  if (indexName) {
    return {
      hits: filterResults(mockResults[indexName as keyof typeof mockResults] || []),
      nbHits: mockResults[indexName as keyof typeof mockResults]?.length || 0,
      query,
    };
  }

  // Return all results
  return Object.entries(mockResults).map(([index, data]) => ({
    index,
    hits: filterResults(data),
    nbHits: data.length,
    query,
  }));
}

export default searchClient;
