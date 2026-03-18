import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Moksha360",
  description: "Explore Moksha360's services: Artist Management, Live Events, Music Promotion, and XR/AI experiences.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-[#3D7500] mb-8 font-poppins">Our Services</h1>
      <p className="text-lg font-opensans text-gray-700 max-w-3xl">
        From artist branding and bookings to cutting-edge XR concerts, we provide comprehensive solutions for musical growth.
      </p>
    </main>
  );
}
