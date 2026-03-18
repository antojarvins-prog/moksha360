import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Build a Music Brand (Complete Guide) | Moksha360",
  description: "Learn the foundational pillars of music branding, storytelling, visual identity, and aesthetic consistency for modern musicians.",
};

export default function Blog8() {
  const jsonLd = { /* omitted */ };
  return (
    <main className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-[#050505] text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[#3D7500]/10 rounded-full mix-blend-screen filter blur-[150px] opacity-30 pointer-events-none z-0"></div>
      <div className="relative z-10 w-full">
        <Link href="/blog" className="inline-flex items-center text-[#13AFF0] hover:text-white transition-colors mb-12 font-medium tracking-wide">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
        </Link>
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#13AFF0] mb-8 font-poppins leading-tight tracking-tighter">
            How to Build a Music Brand
          </h1>
          <div className="bg-[#13AFF0]/5 border border-[#13AFF0]/20 p-8 rounded-3xl mb-12 backdrop-blur-md">
            <h2 className="text-[#13AFF0] font-bold font-poppins mb-3 text-xl flex items-center">🔍 Featured Snippet</h2>
            <p className="font-opensans text-gray-300 leading-relaxed"><strong>What is a music brand?</strong><br/>A music brand is the identity of an artist, including their sound, visuals, personality, and story, which helps audiences recognize and connect with them.</p>
          </div>
          <div className="flex flex-col gap-6 mb-12">
             <img src="https://diqmdwhttngxa.cloudfront.net/63408/18529/Unleash%20Your%20Brand%20Potential%20Portland%20Indie%20Musician%20Photography%20with%20David%20Norris%20by%20Mewphotovideo01_960.jpg" alt="Brand Photography" className="w-full h-[500px] object-cover rounded-[2rem] border border-white/10 shadow-[0_0_40px_rgba(61,117,0,0.2)]" />
          </div>
          <article className="prose prose-invert prose-lg max-w-none font-opensans text-gray-300 space-y-8">
             <section>
               <h2 className="text-3xl font-bold font-poppins text-white mt-10 mb-6">Introduction</h2>
               <p className="leading-relaxed">Your brand is what people remember and feel precisely when the music stops playing.</p>
             </section>
             <section>
               <h2 className="text-3xl font-bold font-poppins text-white mt-12 mb-6">Core Elements</h2>
               <h3 className="text-2xl font-bold font-poppins text-[#4ade80] mt-8">Visual Identity</h3>
               <ul className="list-disc pl-8 space-y-2 text-gray-300 mt-4 leading-relaxed">
                 <li>Strict color matrixing</li>
                 <li>Curated clothing style grids</li>
                 <li>Aggressive photography directions</li>
               </ul>
               <h3 className="text-2xl font-bold font-poppins text-[#4ade80] mt-8">Storytelling</h3>
               <ul className="list-disc pl-8 space-y-2 text-gray-300 mt-4 leading-relaxed">
                 <li>Your raw origin background</li>
                 <li>The overarching social/artistic message driving you</li>
               </ul>
             </section>
             <section>
               <h2 className="text-3xl font-bold font-poppins text-white mt-12 mb-6">Consistency and Platforms</h2>
               <p className="leading-relaxed">Consistency builds massive psychological recognition and trust. You must aggressively maintain this aesthetic brand across Instagram visual grids, highly-directed YouTube video narratives, and meticulously organized Spotify canvas clips.</p>
             </section>
             <section className="bg-white/5 p-10 rounded-[2rem] border border-white/10 mt-16 mb-24 backdrop-blur-2xl">
               <h2 className="text-4xl font-bold font-poppins text-white mb-6">Conclusion</h2>
               <p className="leading-relaxed text-xl">A strong, unshakeable brand successfully turns casual passing listeners into highly loyal, spending fans.</p>
             </section>
          </article>
        </FadeIn>
      </div>
    </main>
  );
}
