"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or handle search
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/nafaa-logo.png"
              alt="NaFAA Logo"
              width={60}
              height={60}
              className="h-14 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-xs md:text-sm lg:text-base font-bold text-nafaa-ocean">
                National Fisheries and Aquaculture Authority
              </div>
              {/* <div className="text-[10px] md:text-xs text-slate-600">Republic of Liberia</div> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="/about" title="About Us">
                      Our mission, vision, and values
                    </ListItem>
                    <ListItem href="/about/mandate" title="Our Mandate">
                      Our responsibilities and authority
                    </ListItem>
                    <ListItem href="/about/board" title="Board of Directors">
                      Governance and strategic oversight
                    </ListItem>
                    <ListItem href="/about/management" title="Management Team">
                      Executive leadership and directors
                    </ListItem>
                    <ListItem href="/about/staff" title="Support Staff">
                      Professional support services
                    </ListItem>
                    <ListItem href="/about/departments" title="Departments">
                      Organizational structure and divisions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="/services/vessel-registration" title="Vessel Registration">
                      Register your fishing vessel
                    </ListItem>
                    <ListItem href="/services/fishing-licenses" title="Fishing Licenses">
                      Apply for fishing licenses
                    </ListItem>
                    <ListItem href="/services/license-renewal" title="License Renewal">
                      Renew your existing licenses
                    </ListItem>
                    <ListItem href="/services/catch-reporting" title="Catch Reporting">
                      Submit monthly catch reports
                    </ListItem>
                    <ListItem href="/services/payments" title="Payment Services">
                      Pay fees and charges
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Statistics & Data */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Statistics & Data</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="/statistics" title="Public Dashboard">
                      View industry statistics
                    </ListItem>
                    <ListItem href="/statistics/vessels" title="Vessel Statistics">
                      Registered vessel data
                    </ListItem>
                    <ListItem href="/statistics/catch-data" title="Catch Data">
                      Fish catch reports and trends
                    </ListItem>
                    <ListItem href="/statistics/insights" title="Industry Insights">
                      Analysis and reports
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="/publications" title="Publications">
                      Reports and documents
                    </ListItem>
                    <ListItem href="/resources/forms" title="Forms & Downloads">
                      Download forms and applications
                    </ListItem>
                    <ListItem href="/resources/policies" title="Policy Documents">
                      Laws and regulations
                    </ListItem>
                    <ListItem href="/resources/research" title="Research Reports">
                      Studies and research
                    </ListItem>
                    <ListItem href="/resources/partnerships" title="Partnerships">
                      International, regional & local partners
                    </ListItem>
                    <ListItem href="/resources/faq" title="FAQs">
                      Frequently asked questions
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* News & Events */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/news">
                    News & Events
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Opportunities (formerly Careers) */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/opportunities">
                    Opportunities
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Procurement */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/procurement/bids">
                    Procurement
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/portal">
              <Button
                variant="outline"
                className="hidden sm:inline-flex border-nafaa-ocean text-nafaa-ocean hover:bg-nafaa-ocean hover:text-white"
              >
                Client Portal
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
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
                <div className="mt-4 flex justify-end">
                  <Button type="submit" className="bg-nafaa-ocean hover:bg-nafaa-ocean-dark">
                    Search
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Menu - Full Screen Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[81px] bottom-0 bg-white z-50 overflow-y-auto">
            <div className="max-h-full py-6 px-4 space-y-1">
              {/* About Section */}
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 px-4 bg-gray-50 rounded-lg font-semibold text-nafaa-ocean hover:bg-gray-100">
                  <span>About</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-2 ml-4 space-y-1">
                  <Link href="/about" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                  </Link>
                  <Link href="/about/mandate" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Our Mandate
                  </Link>
                  <Link href="/about/board" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Board of Directors
                  </Link>
                  <Link href="/about/management" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Management Team
                  </Link>
                  <Link href="/about/staff" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Support Staff
                  </Link>
                  <Link href="/about/departments" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Departments
                  </Link>
                </div>
              </details>

              {/* Services Section */}
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 px-4 bg-gray-50 rounded-lg font-semibold text-nafaa-ocean hover:bg-gray-100">
                  <span>Services</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-2 ml-4 space-y-1">
                  <Link href="/services/vessel-registration" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Vessel Registration
                  </Link>
                  <Link href="/services/fishing-licenses" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Fishing Licenses
                  </Link>
                  <Link href="/services/license-renewal" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    License Renewal
                  </Link>
                  <Link href="/services/catch-reporting" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Catch Reporting
                  </Link>
                  <Link href="/services/payments" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Payment Services
                  </Link>
                </div>
              </details>

              {/* Statistics & Data Section */}
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 px-4 bg-gray-50 rounded-lg font-semibold text-nafaa-ocean hover:bg-gray-100">
                  <span>Statistics & Data</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-2 ml-4 space-y-1">
                  <Link href="/statistics" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Public Dashboard
                  </Link>
                  <Link href="/statistics/vessels" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Vessel Statistics
                  </Link>
                  <Link href="/statistics/catch-data" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Catch Data
                  </Link>
                  <Link href="/statistics/insights" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Industry Insights
                  </Link>
                </div>
              </details>

              {/* Resources Section */}
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-3 px-4 bg-gray-50 rounded-lg font-semibold text-nafaa-ocean hover:bg-gray-100">
                  <span>Resources</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-2 ml-4 space-y-1">
                  <Link href="/publications" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Publications
                  </Link>
                  <Link href="/resources/forms" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Forms & Documents
                  </Link>
                  <Link href="/resources/policies" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Laws & Policies
                  </Link>
                  <Link href="/resources/research" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Research
                  </Link>
                  <Link href="/resources/partnerships" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    Partnerships
                  </Link>
                  <Link href="/resources/faq" className="block py-2.5 px-4 text-sm hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                    FAQs
                  </Link>
                </div>
              </details>

              {/* News & Events */}
              <Link href="/news" className="flex items-center py-3 px-4 bg-gray-50 rounded-lg font-semibold text-nafaa-ocean hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                News & Events
              </Link>

              {/* Contact */}
              <Link href="/contact" className="flex items-center py-3 px-4 bg-gray-50 rounded-lg font-semibold text-nafaa-ocean hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>

              {/* Opportunities */}
              <Link href="/opportunities" className="flex items-center py-3 px-4 bg-gray-50 rounded-lg font-semibold text-nafaa-ocean hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Opportunities
              </Link>

              {/* Procurement */}
              <Link href="/procurement/bids" className="flex items-center py-3 px-4 bg-gray-50 rounded-lg font-semibold text-nafaa-ocean hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Procurement
              </Link>

              {/* Client Portal - Mobile */}
              <div className="pt-6">
                <Link href="/portal" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-nafaa-ocean hover:bg-nafaa-ocean-dark py-6 text-base">
                    Client Portal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const navigationMenuTriggerStyle = () =>
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";
