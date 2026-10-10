import Header, { NavigationSection } from "@/components/ui/hero-01-utils/header";
import AgencyHeroSection from "@/components/ui/hero-01";
import LogoMarqueePreview from "@/components/ui/logo-marquee-demo";
import AboutSection from "@/components/ui/about-section";
import ServicesSection from "@/components/ui/services-section";
import WorksWheelDemo from "@/components/ui/works-wheel-demo";
import SkillsSection from "@/components/ui/SkillsSection";
import IndustriesSection from "@/components/ui/industries-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import TeamSection from "@/components/ui/team-section";
import FaqSection from "@/components/ui/faq-section";
import CtaSection from "@/components/ui/cta-section";
import SiteFooter from "@/components/ui/site-footer";

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
    title: "Pricing",
    href: "#pricing",
  },
];

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://mhkmarkedia.com/#organization",
      "name": "MHKMarkedia",
      "url": "https://mhkmarkedia.com",
      "logo": "https://mhkmarkedia.com/images/ceo.webp",
      "image": "https://mhkmarkedia.com/images/ceo.webp",
      "description": "Full-Stack Web Development, Headless Next.js, Headless WordPress & Local SEO Expert agency led by CEO M. Hafeez Khan with 16+ years experience.",
      "founder": {
        "@type": "Person",
        "name": "M. Hafeez Khan",
        "jobTitle": "CEO & Lead Digital Architect",
        "sameAs": ["https://www.linkedin.com/in/hafeezkhan"]
      },
      "telephone": "+966532428200",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SA",
        "addressRegion": "Riyadh"
      },
      "sameAs": [
        "https://www.linkedin.com/in/hafeezkhan",
        "https://twitter.com/mhkmarkedia"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://mhkmarkedia.com/#website",
      "url": "https://mhkmarkedia.com",
      "name": "MHKMarkedia",
      "publisher": {
        "@id": "https://mhkmarkedia.com/#organization"
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-purple-600 selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <Header navigationData={navigationData} />
      <main className="w-full -mt-[68px] sm:-mt-[96px]">
        <AgencyHeroSection />
        <LogoMarqueePreview />
        <AboutSection />
        <ServicesSection />
        <section id="works" className="w-full relative z-20">
          <WorksWheelDemo />
        </section>
        <SkillsSection />
        <IndustriesSection />
        <TestimonialsSection />
        <TeamSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
