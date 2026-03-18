import type { Metadata } from "next";
import { LeadLanding } from "@/components/LeadLanding";

export const metadata: Metadata = {
  title: "Talent Agency Electronic City | Moksha360",
  description: "Moksha360 talent representation for creators and musicians in Electronic City.",
};

export default function AgencyElectronicCity() {
  return <LeadLanding title="Talent Agency in Electronic City" desc="Elevating talent throughout Electronic City with bespoke management and automated promotional funnels." keyword="Local" local />;
}
