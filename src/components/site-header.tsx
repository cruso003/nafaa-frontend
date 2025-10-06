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
import { Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
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
              <div className="text-base font-bold text-[#002868]">NaFAA</div>
              <div className="text-xs text-slate-600">Republic of Liberia</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {/* About NaFAA */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>About NaFAA</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <ListItem href="/about" title="Who We Are">
                      Learn about our mission and vision
                    </ListItem>
                    <ListItem href="/about/mandate" title="Our Mandate">
                      Our responsibilities and authority
                    </ListItem>
                    <ListItem href="/about/leadership" title="Leadership Team">
                      Meet our executive leadership
                    </ListItem>
                    <ListItem href="/about/organization" title="Organizational Structure">
                      Department hierarchy and structure
                    </ListItem>
                    <ListItem href="/contact" title="Contact Us">
                      Get in touch with NaFAA
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
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/portal">
              <Button
                variant="outline"
                className="hidden sm:inline-flex border-[#002868] text-[#002868] hover:bg-[#002868] hover:text-white"
              >
                Client Portal
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
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
