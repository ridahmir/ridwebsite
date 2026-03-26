import type { Metadata } from "next";
import { CertificationsSection } from "@/components/CertificationsSection";
import { GetInTouchSection } from "@/components/GetInTouchSection";

export const metadata: Metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  return (
    <>
      <CertificationsSection />
      <GetInTouchSection />
    </>
  );
}

