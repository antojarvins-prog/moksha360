import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Moksha360",
  description: "Read our latest articles on music promotion strategies, XR concerts, and becoming an artist in Bangalore.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-[#3D7500] mb-8 font-poppins">Blog & Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Blog Post cards will be mapped here */}
      </div>
    </main>
  );
}
