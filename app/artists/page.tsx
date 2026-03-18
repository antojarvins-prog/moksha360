import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artists Roster | Moksha360",
  description: "View the Moksha360 artist roster.",
};

export default function ArtistsPage() {
  return (
    <main className="min-h-screen pt-20 pb-32">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-poppins text-[#3D7500] mb-6">Our Roster</h1>
        <p className="text-xl text-gray-700 font-opensans leading-relaxed">
          The brilliant minds working with Moksha360.
        </p>
      </div>
    </main>
  );
}
