import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Moksha360",
  description: "Learn about Moksha360, Bengaluru's premier artist management and entertainment company.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-[#3D7500] mb-8 font-poppins">About Moksha360</h1>
      <p className="text-lg font-opensans text-gray-700 max-w-3xl">
        We are a Bengaluru-based entertainment, talent management, and music-tech platform focused on artist growth, global exposure, and immersive experiences (XR/AI).
      </p>
    </main>
  );
}
