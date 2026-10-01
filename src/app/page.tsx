import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import AgencyHeroSection from "@/components/ui/hero-01";
import AboutSection from "@/components/ui/about-section";
import ServicesSection from "@/components/ui/services-section";

const navigationData: NavigationSection[] = [
  {
    title: "Home",
    href: "#",
    isActive: true,
  },
  {
    title: "About us",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Team",
    href: "#team",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-purple-600 selection:text-white relative">
      <Header navigationData={navigationData} />
      <main className="w-full -mt-[68px] sm:-mt-[96px]">
        <AgencyHeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
    </div>
  );
}
