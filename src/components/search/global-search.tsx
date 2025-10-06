"use client";

import { useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface GlobalSearchProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function GlobalSearch({ open, onOpenChange }: GlobalSearchProps) {
  const { query, setQuery, results, isSearching, clearSearch } = useSearch({
    limit: 20,
  });

  const getResultType = (result: any): string => {
    if (result.registrationNumber) return "Vessel";
    if (result.licenseNumber) return "License";
    if (result.category) return "News";
    if (result.type === "Report" || result.type === "Guidelines") return "Publication";
    if (result.type === "Job" || result.type === "Scholarship") return "Opportunity";
    if (result.effectiveDate) return "Regulation";
    return "Result";
  };

  const getResultLink = (result: any): string => {
    const type = getResultType(result);
    switch (type) {
      case "Vessel":
        return `/portal/vessels/${result.objectID}`;
      case "License":
        return `/portal/licenses/${result.objectID}`;
      case "News":
        return `/news/${result.objectID}`;
      case "Publication":
        return `/resources/publications/${result.objectID}`;
      case "Opportunity":
        return `/opportunities/${result.objectID}`;
      case "Regulation":
        return `/resources/regulations/${result.objectID}`;
      default:
        return "#";
    }
  };

  const getResultTitle = (result: any): string => {
    return result.title || result.name || result.licenseNumber || "Untitled";
  };

  const getResultDescription = (result: any): string => {
    return result.description || result.excerpt || result.type || "";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search vessels, licenses, news, publications..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10"
            autoFocus
          />
          {query && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
              onClick={clearSearch}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <ScrollArea className="h-[400px] pr-4">
          {isSearching ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-2">
              {results.map((result) => (
                <Link
                  key={result.objectID}
                  href={getResultLink(result)}
                  onClick={() => onOpenChange?.(false)}
                  className="block p-4 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium truncate">
                          {getResultTitle(result)}
                        </h4>
                        <Badge variant="secondary" className="shrink-0">
                          {getResultType(result)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {getResultDescription(result)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No results found for "{query}"</p>
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                Start typing to search across all content
              </p>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
