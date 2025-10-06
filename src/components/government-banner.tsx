"use client";

import Image from "next/image";
import Link from "next/link";
import { GoogleTranslateSwitcher } from "@/components/google-translate-switcher";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { useState } from "react";

export function GovernmentBanner() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <div className="bg-nafaa-ocean text-white py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/liberia-flag.svg"
              alt="Flag of Liberia"
              width={24}
              height={16}
              className="rounded-sm"
            />
            <span className="font-medium hidden md:inline">
              An official website of the Government of The Republic of Liberia
            </span>
            <span className="font-medium md:hidden">
              Government of Liberia
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-white hover:bg-white/10 hover:text-white"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline ml-1.5 text-xs">Search</span>
            </Button>
            <GoogleTranslateSwitcher />
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-start justify-center pt-20" onClick={() => setSearchOpen(false)}>
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearch} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Search className="h-6 w-6 text-nafaa-ocean" />
                <input
                  type="text"
                  placeholder="Search NaFAA website..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg outline-none"
                  autoFocus
                />
                <Button 
                  type="button"
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-3">Quick Links:</p>
                <div className="grid grid-cols-2 gap-2">
                  <Link 
                    href="/services/vessel-registration" 
                    className="text-sm text-nafaa-ocean hover:underline"
                    onClick={() => setSearchOpen(false)}
                  >
                    Vessel Registration
                  </Link>
                  <Link 
                    href="/services/fishing-licenses" 
                    className="text-sm text-nafaa-ocean hover:underline"
                    onClick={() => setSearchOpen(false)}
                  >
                    Fishing Licenses
                  </Link>
                  <Link 
                    href="/statistics" 
                    className="text-sm text-nafaa-ocean hover:underline"
                    onClick={() => setSearchOpen(false)}
                  >
                    Statistics
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-sm text-nafaa-ocean hover:underline"
                    onClick={() => setSearchOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
