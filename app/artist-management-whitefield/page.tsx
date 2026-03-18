import type { Metadata } from "next";
import { LeadLanding } from "@/components/LeadLanding";

export const metadata: Metadata = {
  title: "Artist Management Whitefield | Moksha360",
  description: "Artist management catered to musicians and DJs in Whitefield, Bengaluru.",
};

export default function ArtistManagementWhitefield() {
  return <LeadLanding title="Artist Management in Whitefield" desc="Growing your fanbase in the IT corridor? We connect Whitefield artists directly with global opportunities." keyword="Local" local />;
}
