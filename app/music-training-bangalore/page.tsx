import type { Metadata } from "next";
import { LeadLanding } from "@/components/LeadLanding";

export const metadata: Metadata = {
  title: "Music Training Bangalore | Moksha360",
  description: "1-on-1 industry mentorship and music training to elevate your career in Bangalore.",
};

export default function MusicTrainingBangalore() {
  return <LeadLanding title="Music Mentorship & Training in Bangalore" desc="Learn from the best. Our music training and industry mentorship programs help you understand the business behind the art." keyword="Mentorship" />;
}
