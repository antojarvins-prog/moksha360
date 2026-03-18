import type { Metadata } from "next";
import { LeadLanding } from "@/components/LeadLanding";

export const metadata: Metadata = {
  title: "Entertainment Agency in Indiranagar | Moksha360",
  description: "Moksha360 serves the Indiranagar music scene with premium artist management and live event coordination.",
};

export default function AgencyIndiranagar() {
  return <LeadLanding title="Entertainment Agency in Indiranagar" desc="Indiranagar is the heart of live music. We help local artists dominate venues around 100ft road and beyond." keyword="Local" local />;
}
