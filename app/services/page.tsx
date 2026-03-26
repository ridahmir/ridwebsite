import type { Metadata } from "next";
import { ServicesPageHero } from "@/components/ServicesPageHero";
import { AboutServicesSection } from "@/components/AboutServicesSection";
import { ServiceOfferingsSection } from "@/components/ServiceOfferingsSection";
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
      <PricingSection />
      <WhyWorkWithMeSection />
      <ProcessSection />
      <ServicesContactSection />
    </>
  );
}

