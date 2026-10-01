import AgencyHeroSection from "@/components/ui/hero-01";
import AboutSection from "@/components/ui/about-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 antialiased selection:bg-purple-600 selection:text-white">
      <AgencyHeroSection />
      <AboutSection />
    </div>
  );
}
