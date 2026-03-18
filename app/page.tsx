import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Music, Star, Network, TrendingUp, Presentation } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Top Entertainment Agency in Bangalore | Moksha360",
  description: "Moksha360 is a leading entertainment and artist management company in Bangalore helping musicians grow globally.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Moksha360",
        "address": { "@type": "PostalAddress", "addressLocality": "Bengaluru", "addressRegion": "Karnataka", "addressCountry": "IN" },
        "description": "India's gateway connecting artists to global music opportunities using technology.",
        "url": "https://moksha360.com"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What does an artist management company do?", "acceptedAnswer": { "@type": "Answer", "text": "An artist management company helps musicians grow by handling branding, bookings, promotions, and partnerships." } },
          { "@type": "Question", "name": "Can beginners join?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Moksha360 supports both beginners and professionals." } }
        ]
      }
    ]
  };

  return (
    <main className="flex flex-col items-center w-full bg-[#050505] text-white">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-[#3D7500]/20 rounded-full mix-blend-screen filter blur-[150px] opacity-40 pointer-events-none z-0"></div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* 1. Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden">
        <Image src="/hero_bg.png" alt="Moksha360 Premium Concert Stage" fill className="object-cover opacity-[0.25] mix-blend-screen z-0 pointer-events-none" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505] z-10 pointer-events-none"></div>

        <FadeIn className="container mx-auto max-w-6xl px-6 text-center relative z-20 mt-16">
          <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium mb-10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] text-sm tracking-wide">
             <Star className="w-5 h-5 mr-3 text-[#4ade80]" /> The Premier Entertainment Agency in Bangalore
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black font-poppins tracking-tighter leading-[1.05] mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 pb-4">
            India’s Gateway to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] via-[#13AFF0] to-[#4ade80] filter drop-shadow-[0_0_30px_rgba(74,222,128,0.4)] animate-pulse">Global Music Success</span>
          </h1>
          <p className="mt-8 text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto font-opensans leading-snug mb-14 font-light">
            Empowering artists through management, marketing, live events, and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto h-16 px-12 text-xl font-semibold shadow-[0_0_40px_rgba(61,117,0,0.5)]">Get Discovered <ArrowRight className="ml-3 w-6 h-6" /></Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto h-16 px-12 text-xl font-semibold">Book Consultation</Button>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 2. Trust Indicators */}
      <section className="relative w-full py-16 border-y border-white/5 bg-white/5 backdrop-blur-3xl z-20">
        <FadeIn delay={0.2} className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 md:gap-20 text-gray-400">
           <div className="flex items-center gap-4 font-bold font-poppins md:text-2xl text-white tracking-wide"><Star className="w-8 h-8 text-[#4ade80]" /> 100+ Artists Managed</div>
           <div className="flex items-center gap-4 font-bold font-poppins md:text-2xl text-white tracking-wide"><Network className="w-8 h-8 text-[#13AFF0]" /> Global Collaborations</div>
           <div className="flex items-center gap-4 font-bold font-poppins md:text-2xl text-white tracking-wide"><Music className="w-8 h-8 text-[#4ade80]" /> Grammy-Level Network</div>
           <div className="flex items-center gap-4 font-bold font-poppins md:text-2xl text-white tracking-wide"><MapPin className="w-8 h-8 text-[#13AFF0]" /> Based in Bengaluru</div>
        </FadeIn>
      </section>

      {/* 3. Services */}
      <section className="relative w-full py-40 overflow-hidden z-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#13AFF0]/20 rounded-full mix-blend-screen filter blur-[150px] opacity-40 pointer-events-none"></div>
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <FadeIn className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black font-poppins text-white mb-8 tracking-tighter">Our Core Services</h2>
            <p className="text-gray-400 font-opensans max-w-3xl mx-auto text-2xl font-light leading-relaxed">Full artist lifecycle support, blending traditional management with tech-enabled growth.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Card type="service" className="p-10 flex flex-col items-start h-full group">
                 <div className="w-20 h-20 bg-gradient-to-tr from-[#3D7500]/30 to-black/50 rounded-2xl flex items-center justify-center mb-8 border border-[#3D7500]/50 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(61,117,0,0.2)]">
                   <Star className="text-[#4ade80] w-10 h-10 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
                 </div>
                 <h3 className="text-3xl font-bold font-poppins mb-4 text-white">Artist Management</h3>
                 <p className="text-gray-400 mb-10 flex-grow text-lg leading-relaxed font-light">Build your career with expert guidance and dedicated representation.</p>
                 <Link href="/artist-management" className="text-[#4ade80] font-bold hover:text-white transition-colors inline-flex items-center text-lg uppercase tracking-wider">Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" /></Link>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card type="service" className="p-10 flex flex-col items-start h-full group">
                 <div className="w-20 h-20 bg-gradient-to-tr from-[#13AFF0]/30 to-black/50 rounded-2xl flex items-center justify-center mb-8 border border-[#13AFF0]/50 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(19,175,240,0.2)]">
                   <TrendingUp className="text-[#13AFF0] w-10 h-10 drop-shadow-[0_0_15px_rgba(19,175,240,0.8)]" />
                 </div>
                 <h3 className="text-3xl font-bold font-poppins mb-4 text-white">Music Promotion</h3>
                 <p className="text-gray-400 mb-10 flex-grow text-lg leading-relaxed font-light">Reach global audiences and predictably grow your fanbase.</p>
                 <Link href="/music-promotion" className="text-[#13AFF0] font-bold hover:text-white transition-colors inline-flex items-center text-lg uppercase tracking-wider">Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" /></Link>
              </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Card type="service" className="p-10 flex flex-col items-start h-full group">
                 <div className="w-20 h-20 bg-gradient-to-tr from-[#3D7500]/30 to-black/50 rounded-2xl flex items-center justify-center mb-8 border border-[#3D7500]/50 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(61,117,0,0.2)]">
                   <Music className="text-[#4ade80] w-10 h-10 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
                 </div>
                 <h3 className="text-3xl font-bold font-poppins mb-4 text-white">Live Events</h3>
                 <p className="text-gray-400 mb-10 flex-grow text-lg leading-relaxed font-light">Perform on premium stages in India and around the world.</p>
                 <Link href="/live-events" className="text-[#4ade80] font-bold hover:text-white transition-colors inline-flex items-center text-lg uppercase tracking-wider">Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" /></Link>
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card type="service" className="p-10 flex flex-col items-start h-full group">
                 <div className="w-20 h-20 bg-gradient-to-tr from-[#13AFF0]/30 to-black/50 rounded-2xl flex items-center justify-center mb-8 border border-[#13AFF0]/50 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(19,175,240,0.2)]">
                   <Presentation className="text-[#13AFF0] w-10 h-10 drop-shadow-[0_0_15px_rgba(19,175,240,0.8)]" />
                 </div>
                 <h3 className="text-3xl font-bold font-poppins mb-4 text-white">Mentorship</h3>
                 <p className="text-gray-400 mb-10 flex-grow text-lg leading-relaxed font-light">Learn directly from globally recognized industry professionals.</p>
                 <Link href="/mentorship" className="text-[#13AFF0] font-bold hover:text-white transition-colors inline-flex items-center text-lg uppercase tracking-wider">Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" /></Link>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card type="service" className="p-10 flex flex-col items-start h-full group">
                 <div className="w-20 h-20 bg-gradient-to-tr from-[#3D7500]/30 to-black/50 rounded-2xl flex items-center justify-center mb-8 border border-[#3D7500]/50 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(61,117,0,0.2)]">
                   <CheckCircle2 className="text-[#4ade80] w-10 h-10 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
                 </div>
                 <h3 className="text-3xl font-bold font-poppins mb-4 text-white">XR & AI</h3>
                 <p className="text-gray-400 mb-10 flex-grow text-lg leading-relaxed font-light">Experience the future of music through immersive virtual ecosystems.</p>
                 <Link href="/xr-ai" className="text-[#4ade80] font-bold hover:text-white transition-colors inline-flex items-center text-lg uppercase tracking-wider">Learn more <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" /></Link>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="relative w-full py-32 bg-[#020202] border-y border-white/5 z-20 overflow-hidden">
         <Image src="/studio_bg.png" alt="High End Studio" fill className="object-cover opacity-10 mix-blend-lighten z-0 pointer-events-none" />
         <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/80 to-[#020202] z-10 pointer-events-none"></div>

         <div className="container mx-auto max-w-7xl px-6 relative z-20">
            <FadeIn className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6 tracking-tight">Why Choose Us</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
               <FadeIn delay={0.1} className="text-center">
                 <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-[#3D7500]/50 to-transparent rounded-full flex items-center justify-center mb-6 shadow-[#3D7500]/20 shadow-lg border border-[#3D7500]/50 text-white font-bold text-xl">1</div>
                 <h4 className="text-2xl font-bold text-white mb-4 font-poppins tracking-wide">Global Exposure</h4>
                 <p className="text-gray-400 font-opensans text-lg font-light leading-relaxed">Unlock international opportunities and secure global distribution deals.</p>
               </FadeIn>
               <FadeIn delay={0.2} className="text-center">
                 <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-[#13AFF0]/50 to-transparent rounded-full flex items-center justify-center mb-6 shadow-[#13AFF0]/20 shadow-lg border border-[#13AFF0]/50 text-white font-bold text-xl">2</div>
                 <h4 className="text-2xl font-bold text-white mb-4 font-poppins tracking-wide">Tech-Driven Growth</h4>
                 <p className="text-gray-400 font-opensans text-lg font-light leading-relaxed">Leverage automated AI tools and immersive XR 3D environments.</p>
               </FadeIn>
               <FadeIn delay={0.3} className="text-center">
                 <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-[#3D7500]/50 to-transparent rounded-full flex items-center justify-center mb-6 shadow-[#3D7500]/20 shadow-lg border border-[#3D7500]/50 text-white font-bold text-xl">3</div>
                 <h4 className="text-2xl font-bold text-white mb-4 font-poppins tracking-wide">Proven Results</h4>
                 <p className="text-gray-400 font-opensans text-lg font-light leading-relaxed">A certified track record of scaling artists from 0 to 1 Million streams.</p>
               </FadeIn>
               <FadeIn delay={0.4} className="text-center">
                 <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-[#13AFF0]/50 to-transparent rounded-full flex items-center justify-center mb-6 shadow-[#13AFF0]/20 shadow-lg border border-[#13AFF0]/50 text-white font-bold text-xl">4</div>
                 <h4 className="text-2xl font-bold text-white mb-4 font-poppins tracking-wide">Bengaluru Expertise</h4>
                 <p className="text-gray-400 font-opensans text-lg font-light leading-relaxed">Rooted deeply in India's creative capital with premium venue access.</p>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* 5. Bengaluru Local Section */}
      <section className="relative w-full py-40 overflow-hidden z-20">
        <Image src="/bengaluru_city.png" alt="Bengaluru Cyberpunk Nightlife" fill className="object-cover opacity-10 mix-blend-color-dodge z-0 pointer-events-none" />
        <div className="container mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-20 relative z-20">
           <FadeIn className="flex-1 space-y-10">
             <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#13AFF0]/20 border border-[#13AFF0]/30 text-[#13AFF0] font-bold tracking-wide uppercase text-sm">
               <MapPin className="w-4 h-4 mr-2" /> Local Dominance
             </div>
             <h2 className="text-5xl lg:text-7xl font-black font-poppins text-white leading-[1.1] tracking-tighter">Your Local <br/>Music Ecosystem</h2>
             <p className="text-xl text-gray-400 font-opensans leading-relaxed border-l-4 border-[#4ade80] pl-8 font-light">
               Bengaluru's thriving music scene requires local expertise. We seamlessly bridge the gap between emerging talent and the city's premier live entertainment sectors.
             </p>
             <div className="pt-6">
               <h4 className="font-bold text-white mb-6 font-poppins text-2xl tracking-wide">Actively Serving:</h4>
               <ul className="grid grid-cols-2 gap-y-6 gap-x-12 text-xl text-gray-300 font-light">
                 <li className="flex items-center gap-3"><CheckCircle2 className="text-[#4ade80] w-6 h-6 shadow-[#4ade80]/50 drop-shadow-md" /> Indiranagar</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="text-[#4ade80] w-6 h-6 shadow-[#4ade80]/50 drop-shadow-md" /> Whitefield</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="text-[#4ade80] w-6 h-6 shadow-[#4ade80]/50 drop-shadow-md" /> Koramangala</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="text-[#4ade80] w-6 h-6 shadow-[#4ade80]/50 drop-shadow-md" /> Electronic City</li>
               </ul>
             </div>
           </FadeIn>
           <FadeIn delay={0.2} className="flex-1 w-full bg-white/5 rounded-[3rem] h-[600px] flex items-center justify-center overflow-hidden relative shadow-[0_0_80px_rgba(19,175,240,0.1)] border border-white/10 backdrop-blur-3xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3D7500]/20 to-[#13AFF0]/20 opacity-50 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-color-dodge"></div>
              <MapPin className="w-40 h-40 text-white/50 group-hover:scale-110 transition-transform duration-1000 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]" />
           </FadeIn>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="relative w-full py-32 bg-[#020202] border-t border-white/5 overflow-hidden z-20">
        <div className="container mx-auto max-w-5xl px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6 tracking-tighter">Frequently Asked Questions</h2>
          </FadeIn>
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="bg-white/5 p-12 rounded-[2rem] border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors backdrop-blur-xl">
                 <h3 className="text-2xl font-bold font-poppins text-white mb-4">What does an artist management company do?</h3>
                 <p className="text-gray-400 font-opensans leading-relaxed text-xl font-light">An artist management company helps musicians grow by meticulously handling branding pipelines, event bookings, global promotions, and strategic partnerships.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white/5 p-12 rounded-[2rem] border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors backdrop-blur-xl">
                 <h3 className="text-2xl font-bold font-poppins text-white mb-4">Can beginners join?</h3>
                 <p className="text-gray-400 font-opensans leading-relaxed text-xl font-light">Yes, Moksha360 supports early-stage beginners and accelerates them into seasoned professionals.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="relative w-full py-40 overflow-hidden z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3D7500]/20 z-0 pointer-events-none"></div>
        <FadeIn className="container mx-auto max-w-5xl px-6 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-black font-poppins mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">Ready to take your music global?</h2>
          <p className="text-3xl text-gray-300 mb-12 font-opensans font-light">Book your consultation today. <span className="font-bold text-white block mt-4"><Star className="w-8 h-8 inline mr-3 mb-1 text-[#4ade80]"/> Grammy-level connection.<br/><span className="text-[#13AFF0] uppercase text-xl tracking-widest mt-4 block">Limited slots available.</span></span></p>
          <Link href="/contact">
             <Button variant="primary" size="lg" className="h-20 px-16 text-2xl hover:scale-105 transition-transform duration-500 shadow-[0_0_60px_rgba(61,117,0,0.6)] border border-[#4ade80]/50 font-black">Reserve Your Slot Now</Button>
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
