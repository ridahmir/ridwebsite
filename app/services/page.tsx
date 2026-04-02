import type { Metadata } from "next";
import { ServicesPageHero } from "@/components/ServicesPageHero";
import { AboutServicesSection } from "@/components/AboutServicesSection";
import { ServiceOfferingsSection } from "@/components/ServiceOfferingsSection";
import { WhatYouGetSection } from "@/components/WhatYouGetSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { PricingSection } from "@/components/PricingSection";
import { WhyWorkWithMeSection } from "@/components/WhyWorkWithMeSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesContactSection } from "@/components/ServicesContactSection";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageHero />
      <AboutServicesSection />
      <ServiceOfferingsSection />
      <WhatYouGetSection />
      <UseCasesSection />
      <PricingSection />
      <WhyWorkWithMeSection />
      <ProcessSection />
      <ServicesContactSection />
    </>
  );
}

