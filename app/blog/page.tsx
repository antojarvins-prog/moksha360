import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "./data";
import { FadeIn } from "@/components/FadeIn";
import { Card } from "@/components/Card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights | Moksha360",
  description: "Read our latest articles on music promotion strategies, XR concerts, and becoming an artist in Bangalore.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-[#3D7500] mb-6 font-poppins">Blog & Insights</h1>
        <p className="text-xl text-gray-600 font-opensans max-w-2xl mx-auto">Latest strategies, tips, and industry news for independent artists.</p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((b, i) => (
          <FadeIn delay={(i % 3) * 0.1} key={b.slug}>
            <Link href={`/blog/${b.slug}`}>
               <Card className="h-full p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-[#13AFF0]/20 hover:border-[#13AFF0] flex flex-col bg-white">
                  <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">{b.title}</h3>
                  <p className="text-gray-600 font-opensans leading-relaxed flex-grow">{b.desc}</p>
                  <div className="mt-6 text-[#3D7500] font-medium flex items-center">Read Article <ArrowRight className="w-4 h-4 ml-1" /></div>
               </Card>
            </Link>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
