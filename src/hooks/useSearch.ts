"use client";

import { useState, useCallback } from "react";
import { useDebounce } from "./useDebounce";
import { searchAll, searchIndex } from "@/lib/algolia";

interface SearchResult {
  objectID: string;
  [key: string]: any;
}

interface UseSearchOptions {
  index?: string;
  limit?: number;
  debounceMs?: number;
}

export function useSearch(options: UseSearchOptions = {}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query, options.debounceMs || 300);

  const search = useCallback(
    async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setIsSearching(true);
      setError(null);

      try {
        if (options.index) {
          // Search in specific index
          const result = await searchIndex(
            options.index,
            searchQuery,
            { limit: options.limit }
          );
          // Handle the result which could be an object with hits property or array
          if (result && typeof result === 'object' && 'hits' in result) {
            setResults(result.hits as SearchResult[]);
          } else if (Array.isArray(result)) {
            // If it's an array of result objects, flatten to get hits
            const hits = result.flatMap((r: any) => 
              r && typeof r === 'object' && 'hits' in r ? r.hits : []
            );
            setResults(hits as SearchResult[]);
          } else {
            setResults([]);
          }
        } else {
          // Search across all indexes
          const allResults = await searchAll(searchQuery, {
            limit: options.limit,
          });
          
          // Flatten results from all indexes
          const flatResults = Array.isArray(allResults)
            ? allResults.flatMap((r: any) => r.hits || [])
            : [];
          
          setResults(flatResults);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Search failed");
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    },
    [options.index, options.limit]
  );

  // Auto-search when debounced query changes
  useState(() => {
    if (debouncedQuery) {
      search(debouncedQuery);
    } else {
      setResults([]);
    }
  });

  const clearSearch = useCallback(() => {
    setQuery("");
    setResults([]);
    setError(null);
  }, []);

  return {
    query,
    setQuery,
    results,
    isSearching,
    error,
    search,
    clearSearch,
  };
}
