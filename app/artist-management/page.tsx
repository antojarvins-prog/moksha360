import type { Metadata } from "next";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Artist Management in Bangalore | Moksha360",
  description: "We help artists grow, monetize, and scale globally. Professional artist management services in Bengaluru.",
};

export default function ArtistManagementPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 bg-[#050505] text-white">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#13AFF0] mb-8">Artist Management in Bangalore</h1>
        <p className="text-xl text-gray-300 font-opensans leading-relaxed mb-12">We help artists grow, monetize, and scale globally. Focus on your music while we handle the business.</p>

        <section className="mb-16 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold font-poppins mb-6">Key Benefits</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="text-[#13AFF0]" /> Holistic Branding</li>
            <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="text-[#13AFF0]" /> Premium Gigs</li>
            <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="text-[#13AFF0]" /> Revenue Optimization</li>
            <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="text-[#13AFF0]" /> Global Exposure</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold font-poppins mb-6">Our Process</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full bg-[#13AFF0]/20 text-[#13AFF0] flex items-center justify-center font-bold text-lg shrink-0">1</div>
               <div><h3 className="text-xl font-bold font-poppins">Evaluation</h3><p className="text-gray-400">Assessing your current catalog and brand momentum.</p></div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full bg-[#13AFF0]/20 text-[#13AFF0] flex items-center justify-center font-bold text-lg shrink-0">2</div>
               <div><h3 className="text-xl font-bold font-poppins">Strategy</h3><p className="text-gray-400">Designing a multi-channel growth roadmap.</p></div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full bg-[#13AFF0]/20 text-[#13AFF0] flex items-center justify-center font-bold text-lg shrink-0">3</div>
               <div><h3 className="text-xl font-bold font-poppins">Promotion</h3><p className="text-gray-400">Marketing, PR, and Spotify play-listing.</p></div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full bg-[#13AFF0]/20 text-[#13AFF0] flex items-center justify-center font-bold text-lg shrink-0">4</div>
               <div><h3 className="text-xl font-bold font-poppins">Performance</h3><p className="text-gray-400">Executing live shows and tour routing.</p></div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full bg-[#3D7500]/20 text-[#3D7500] flex items-center justify-center font-bold text-lg shrink-0">5</div>
               <div><h3 className="text-xl font-bold font-poppins">Growth</h3><p className="text-gray-400">Sustaining expansion and global collaborations.</p></div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-[#3D7500]/5 p-8 rounded-2xl border border-[#3D7500]/10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
           <div>
             <h2 className="text-2xl font-bold font-poppins text-white mb-2">Pricing</h2>
             <p className="text-gray-400">Custom plans tailored to your career stage.</p>
           </div>
           <Link href="/contact">
             <Button size="lg" className="h-14 px-8 text-lg">Start Your Journey <ArrowRight className="ml-2 w-5 h-5" /></Button>
           </Link>
        </section>
        <section className="mt-16 pt-16 border-t border-white/10 mb-16">
           <h2 className="text-2xl font-bold font-poppins text-white mb-6">Serving Artists Across Bangalore</h2>
           <p className="text-gray-400 leading-relaxed">We strategically work with artists operating across the entire city layout, establishing dedicated focus routing targeting Indiranagar, Koramangala, Whitefield, and Electronic City infrastructures.</p>
        </section>

        <section className="mb-16">
           <h2 className="text-2xl font-bold font-poppins text-white mb-6">Learn More</h2>
           <ul className="space-y-4">
               <li><Link href="/blog/how-artist-management-works" className="text-[#13AFF0] hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" /> How Artist Management Works</Link></li>
               <li><Link href="/blog/indie-artist-growth-guide" className="text-[#13AFF0] hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Indie Artist Growth Guide</Link></li>
               <li><Link href="/blog/music-career-mistakes-to-avoid" className="text-[#13AFF0] hover:underline flex items-center gap-2"><ArrowRight className="w-4 h-4" /> Music Career Mistakes to Avoid</Link></li>
           </ul>
        </section>
      </div>
    </main>
  );
}
