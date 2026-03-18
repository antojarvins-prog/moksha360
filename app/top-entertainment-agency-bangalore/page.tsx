import type { Metadata } from "next";
import { LeadLanding } from "@/components/LeadLanding";

export const metadata: Metadata = {
  title: "Top Entertainment Agency in Bangalore | Moksha360",
  description: "Moksha360 is the top entertainment agency in Bangalore bridging the gap between talent and premium global opportunities.",
};

export default function AgencyBangalore() {
  return <LeadLanding title="Top Entertainment Agency in Bangalore" desc="Looking for rapid music career growth? Moksha360 provides end-to-end artist management and live event coordination in Bengaluru." keyword="Our Entertainment" />;
}
