import type { Metadata } from "next";
import { LeadLanding } from "@/components/LeadLanding";

export const metadata: Metadata = {
  title: "Music Promotion Bangalore | Moksha360",
  description: "Expert music promotion services in Bangalore. Gain momentum on Spotify, social media, and local radio.",
};

export default function MusicPromoBangalore() {
  return <LeadLanding title="Music Promotion in Bangalore" desc="Get your tracks heard. We deploy targeted digital marketing and Spotify playlist pitching for emerging talent in Bengaluru." keyword="Promotion" />;
}
