import { redirect } from "next/navigation";

// The landing page routing logic. In Next.js, specific SEO landings 
// should be separate folders like /top-entertainment-agency-bangalore
// Since this is just a placeholder, redirect to home.
export default function LandingIndex() {
  redirect("/");
}
