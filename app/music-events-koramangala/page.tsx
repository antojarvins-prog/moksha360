import type { Metadata } from "next";
import { LeadLanding } from "@/components/LeadLanding";

export const metadata: Metadata = {
  title: "Music Events Koramangala | Moksha360",
  description: "Secure gigs and host music events in Koramangala's top venues with Moksha360.",
};

export default function MusicEventsKoramangala() {
  return <LeadLanding title="Music Events in Koramangala" desc="Koramangala's buzzing nightlife awaits. We book and promote premium music events for our managed artists." keyword="Local" local />;
}
