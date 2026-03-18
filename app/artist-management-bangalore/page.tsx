import type { Metadata } from "next";
import { LeadLanding } from "@/components/LeadLanding";

export const metadata: Metadata = {
  title: "Artist Management Company Bengaluru | Moksha360",
  description: "Bengaluru's premier artist management company. We help artists secure gigs, grow audiences, and scale their brands.",
};

export default function ArtistManagementBangalore() {
  return <LeadLanding title="Artist Management Company in Bengaluru" desc="Scale your music brand with industry experts. We handle your PR, bookings, and release strategies locally and globally." keyword="Management" />;
}
