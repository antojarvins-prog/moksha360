import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Users, TrendingUp, Music, CheckCircle2, Radio, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Moksha360 Integration",
  description: "Explore the complete Moksha360 ecosystem: Artist Management, Live Events, Music Promotion, and XR/AI experiences.",
};

export default function ServicesDirectoryPage() {
  const services = [
    { title: "Artist Management", desc: "Build and scale your music career with expert guidance and dense structural industry routing. We handle the business, you handle the art.", link: "/artist-management", icon: Users },
    { title: "Music Promotion", desc: "Grow your digital audience and reach the exact demographic precisely when they listen using hard algorithmic Spotify pipelines.", link: "/music-promotion", icon: TrendingUp },
    { title: "Live Events", desc: "Perform live dynamically and connect with real physical audiences across our mapped tier-1 Bengaluru venues.", link: "/live-events", icon: Music },
    { title: "Mentorship", desc: "Learn foundational technical parameters directly from established industry professionals currently charting globally.", link: "/mentorship", icon: CheckCircle2 },
    { title: "XR & AI Ecosystem", desc: "Explore and map the absolutely bleeding edge trajectory of future music experiences using heavy tech stacks.", link: "/xr-ai", icon: Radio }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-32">
       <div className="container mx-auto px-4 max-w-6xl">
          <FadeInStagger>
             <FadeIn>
               <div className="text-center mb-24 max-w-4xl mx-auto">
                 <span className="text-[#13AFF0] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Our Infrastructure</span>
                 <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-8 leading-tight">
                   The Complete <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#13AFF0]">Artist Architecture.</span>
                 </h1>
                 <p className="text-xl md:text-2xl text-gray-400 font-opensans leading-relaxed">
                   Select a specific tier of our structural services below to explore dedicated workflows, pricing frameworks, and direct booking systems.
                 </p>
               </div>
             </FadeIn>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {services.map((service, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <Link href={service.link} className="flex flex-col h-full bg-white/5 border border-white/10 hover:border-[#4ade80]/50 hover:bg-white/10 rounded-[2.5rem] p-10 transition-all duration-500 group relative overflow-hideen">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[#13AFF0]/5 rounded-full blur-3xl group-hover:bg-[#4ade80]/20 transition-colors pointer-events-none" />
                       <service.icon className="w-14 h-14 text-[#13AFF0] mb-8 group-hover:scale-[1.2] group-hover:text-[#4ade80] transition-all duration-500" />
                       <h3 className="text-3xl font-bold text-white font-poppins mb-4 relative z-10">{service.title}</h3>
                       <p className="text-gray-400 font-opensans leading-relaxed text-lg relative z-10 flex-grow mb-10">{service.desc}</p>
                       <span className="inline-flex items-center text-white font-medium group-hover:text-[#4ade80] transition-colors mt-auto uppercase tracking-wider text-sm font-poppins">
                         Explore Architecture <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                       </span>
                    </Link>
                  </FadeIn>
               ))}
             </div>
          </FadeInStagger>
       </div>
    </main>
  );
}
