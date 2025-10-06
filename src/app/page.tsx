import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { NewsSection } from "@/components/sections/news-section";
import { PublicationsSection } from "@/components/sections/publications-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <NewsSection />
      <PublicationsSection />
    </main>
  );
}
