"use client";

import { useSearchParams } from "next/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { HeroSectionSplit } from "@/components/sections/hero-section-split";
import { HeroSectionSlider } from "@/components/sections/hero-section-slider";
import { StatsSectionAnimated } from "@/components/sections/stats-section-animated";
import { OfficialsSection } from "@/components/sections/officials-section";
import { OfficialsSectionZigzag } from "@/components/sections/officials-section-zigzag";
import { OfficialsCompact } from "@/components/sections/officials-compact";
import { ServicesSection } from "@/components/sections/services-section";
import { ServicesSectionUniform } from "@/components/sections/services-section-uniform";
import { ServicesTabs } from "@/components/sections/services-tabs";
import { NewsSection } from "@/components/sections/news-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import { NewsSidebarSection } from "@/components/sections/news-sidebar-section";
import { NewsPublicationsTabs } from "@/components/sections/news-publications-tabs";
import { LayoutSwitcher } from "@/components/layout-switcher";
import { type LayoutType } from "@/lib/layout-config";
import { Suspense } from "react";

function HomeContent() {
  const searchParams = useSearchParams();
  const layout = (searchParams?.get('layout') || 'modern') as LayoutType;

  return (
    <main>
      {/* Conditional Hero Section based on layout */}
      {layout === 'modern' && <HeroSection />}
      {layout === 'split' && <HeroSectionSplit />}
      {layout === 'slider' && <HeroSectionSlider />}
      
      {/* Conditional Stats Section - animated for split and slider layouts */}
      {(layout === 'split' || layout === 'slider') && <StatsSectionAnimated />}
      
      {/* Conditional Officials Section */}
      {layout === 'modern' && <OfficialsSection />}
      {layout === 'split' && <OfficialsSectionZigzag />}
      {layout === 'slider' && <OfficialsCompact />}
      
      {/* Conditional Services Section */}
      {layout === 'modern' && <ServicesSection />}
      {layout === 'split' && <ServicesSectionUniform />}
      {layout === 'slider' && <ServicesTabs />}
      
      {/* Conditional News & Publications */}
      {layout === 'modern' && (
        <>
          <NewsSection />
          <PublicationsSection />
        </>
      )}
      {layout === 'split' && <NewsSidebarSection />}
      {layout === 'slider' && <NewsPublicationsTabs />}
      
      {/* Layout switcher - toggle with Ctrl+Shift+L */}
      <LayoutSwitcher />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <HomeContent />
    </Suspense>
  );
}
