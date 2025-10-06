import { searchAll, searchIndex } from "@/lib/algolia";

export const searchService = {
  /**
   * Global search across all indexes
   */
  async searchGlobal(query: string, options?: { limit?: number }) {
    return searchAll(query, options);
  },

  /**
   * Search vessels
   */
  async searchVessels(query: string, options?: { limit?: number; filters?: string }) {
    return searchIndex("vessels", query, options);
  },

  /**
   * Search licenses
   */
  async searchLicenses(query: string, options?: { limit?: number; filters?: string }) {
    return searchIndex("licenses", query, options);
  },

  /**
   * Search news
   */
  async searchNews(query: string, options?: { limit?: number; filters?: string }) {
    return searchIndex("news", query, options);
  },

  /**
   * Search publications
   */
  async searchPublications(query: string, options?: { limit?: number; filters?: string }) {
    return searchIndex("publications", query, options);
  },

  /**
   * Search opportunities
   */
  async searchOpportunities(query: string, options?: { limit?: number; filters?: string }) {
    return searchIndex("opportunities", query, options);
  },

  /**
   * Search regulations
   */
  async searchRegulations(query: string, options?: { limit?: number; filters?: string }) {
    return searchIndex("regulations", query, options);
  },
};
