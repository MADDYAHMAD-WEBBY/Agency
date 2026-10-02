import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import AgencyHeroSection from "@/components/ui/hero-01";
import AboutSection from "@/components/ui/about-section";
import ServicesSection from "@/components/ui/services-section";
import WorksWheelDemo from "@/components/ui/works-wheel-demo";
import SkillsSection from "@/components/ui/SkillsSection";

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
    title: "Works",
    href: "#works",
  },
  {
    title: "Skills",
    href: "#skills",
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
        <section id="works" className="w-full relative z-20">
          <WorksWheelDemo />
        </section>
        <SkillsSection />
      </main>
    </div>
  );
}
