import Image from "next/image";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Globe, Award, TrendingUp, Music } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Moksha360 | Global Artist Management",
  description: "Built in Bengaluru, Connected to the World. Discover the story, mission, and Grammy-level tier-1 infrastructure behind Moksha360.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-32">
       <div className="container mx-auto px-4 max-w-6xl">
          <FadeInStagger>
             <FadeIn>
               <div className="text-center mb-20 max-w-4xl mx-auto">
                 <span className="text-[#4ade80] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Our Story</span>
                 <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-8 leading-tight">
                   Beyond Borders.<br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13AFF0] to-[#4ade80]">Beyond Limits.</span>
                 </h1>
                 <p className="text-xl md:text-2xl text-gray-400 font-opensans leading-relaxed">
                   Moksha360 was engineered to bridge the exact structural gap between massive local Indian talent and the intricate global music ecosystem.
                 </p>
               </div>
             </FadeIn>

             <FadeIn>
               <div className="relative w-full aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 mb-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                 <Image src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=2076&auto=format&fit=crop" alt="Grammy Awards Los Angeles" fill className="object-cover opacity-60" priority />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                 <div className="absolute bottom-10 left-10 p-6 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl max-w-md">
                   <p className="font-poppins font-bold text-white text-xl">Representing Indian Music at the 67th Grammy Awards.</p>
                 </div>
               </div>
             </FadeIn>

             <FadeIn>
               <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
                 <div>
                   <h2 className="text-4xl font-bold font-poppins mb-6">Built in Bengaluru.<br/>Connected to the <span className="text-[#13AFF0]">World.</span></h2>
                   <div className="space-y-6 text-xl text-gray-400 font-opensans leading-relaxed">
                     <p>We saw artists struggling with poor management infrastructure, chaotic event planning, and a sheer lack of global networking strategy.</p>
                     <p>At Moksha360, we threw out the traditional rulebook. By integrating advanced technology (AI/XR) alongside extreme tier-1 physical industry reach, we built an agency that forces aggressive digital scale.</p>
                   </div>
                 </div>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                       <Award className="w-10 h-10 text-[#4ade80] mb-4" />
                       <h3 className="text-xl font-bold text-white mb-2">Tier-1 Network</h3>
                       <p className="text-gray-400 text-sm">Direct connections to A&R global reps.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                       <TrendingUp className="w-10 h-10 text-[#13AFF0] mb-4" />
                       <h3 className="text-xl font-bold text-white mb-2">Data Driven</h3>
                       <p className="text-gray-400 text-sm">Algorithmic Spotify & marketing routing.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                       <Globe className="w-10 h-10 text-[#4ade80] mb-4" />
                       <h3 className="text-xl font-bold text-white mb-2">Global Scale</h3>
                       <p className="text-gray-400 text-sm">Actively booking international tours.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                       <Music className="w-10 h-10 text-[#13AFF0] mb-4" />
                       <h3 className="text-xl font-bold text-white mb-2">Artist First</h3>
                       <p className="text-gray-400 text-sm">Total creative control remains yours.</p>
                    </div>
                 </div>
               </div>
             </FadeIn>
          </FadeInStagger>
       </div>
    </main>
  );
}
