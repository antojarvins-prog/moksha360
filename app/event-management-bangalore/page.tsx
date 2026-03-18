import type { Metadata } from "next";
import { LeadLanding } from "@/components/LeadLanding";

export const metadata: Metadata = {
  title: "Event Management Bangalore | Moksha360",
  description: "Secure premium live event bookings and concerts curated by Bengaluru's top event management team.",
};

export default function EventManagementBangalore() {
  return <LeadLanding title="Live Event Management in Bangalore" desc="From iconic clubs to large-scale festivals, our event management team ensures flawless execution and maximum turnout." keyword="Event" />;
}
