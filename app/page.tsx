import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { ArrowRight, CheckCircle2, Globe, TrendingUp, Music, Users, Radio } from "lucide-react";

// Interactive Content Loaders
import { Accordion } from "@/components/Accordion";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { BlogPreviewGrid } from "@/components/BlogPreviewGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Zoom Animation natively CSS bound */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_concert_energy_1773866491674.png"
            alt="Moksha360 Live Concert Experience"
            fill
            className="object-cover animate-hero-zoom opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-20 flex flex-col items-center text-center">
          <FadeInStagger>
            <FadeIn>
              <span className="inline-block py-2 px-4 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-300 font-poppins mb-6 uppercase">
                Trusted by artists across Bengaluru
              </span>
            </FadeIn>
            <FadeIn>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins text-white mb-6 leading-[1.1] max-w-5xl">
                India’s Gateway to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13AFF0] to-[#4ade80]">Global Music Success</span>
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="text-lg md:text-2xl text-gray-300 font-opensans max-w-3xl mx-auto mb-10 leading-relaxed">
                Helping artists grow through professional management, promotion, live experiences, and next-generation technical acceleration.
              </p>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/artist-management">
                  <Button size="lg" className="h-14 px-10 text-lg w-full sm:w-auto hover:scale-[1.05] transition-transform duration-300 shadow-[0_0_20px_rgba(19,175,240,0.3)] bg-[#13AFF0] border-none">
                    Get Discovered
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" size="lg" className="h-14 px-10 text-lg w-full sm:w-auto hover:scale-[1.05] transition-transform duration-300 border-white/20 hover:bg-white/5">
                    Book Consultation
                  </Button>
                </Link>
              </div>
              <p className="text-gray-400 text-sm mt-8 flex items-center justify-center gap-2 font-opensans">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Limited onboarding slots available
              </p>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>

      {/* 2. GLOBAL AUTHORITY SECTION */}
      <section className="py-24 md:py-32 bg-[#050505] relative border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden border border-white/10">
                <Image
                  src="/images/global_authority_network_1773866510533.png"
                  alt="Grammy Awards Networking"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10 p-6 bg-[#050505]/60 backdrop-blur-xl border border-white/10 rounded-[2rem]">
                  <p className="font-poppins font-bold text-lg text-white">🌍 Global Industry Access</p>
                  <p className="text-gray-400 text-sm mt-2">Connecting Bengaluru strictly to the World.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-8 leading-tight">Global From <span className="text-[#13AFF0]">Day One.</span></h2>
              <div className="space-y-6 text-xl text-gray-400 font-opensans leading-relaxed">
                <p>Before Moksha360 officially launched, its founders aggressively represented independent Indian music at the <strong>67th Grammy Awards in Los Angeles</strong>.</p>
                <p>This wasn’t just physical visibility. It was about building real industry relationships, understanding granular global music ecosystems, and opening structural opportunities for artists beyond borders.</p>
                <p>Today, Moksha360 permanently connects artists from Bengaluru to global audiences through calculated strategy, advanced technical routing, and sheer industry access.</p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="flex items-center gap-3"><Globe className="text-[#4ade80] w-7 h-7 shrink-0" /><span className="font-bold text-white text-lg">Grammy-Level Presence</span></div>
                <div className="flex items-center gap-3"><TrendingUp className="text-[#4ade80] w-7 h-7 shrink-0" /><span className="font-bold text-white text-lg">International Network</span></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. TRUST SECTION */}
      <section className="py-24 bg-[#F9F9F9] text-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "100+", label: "Artists Supported", icon: Users },
              { metric: "Global", label: "Collaborations", icon: Globe },
              { metric: "Tier-1", label: "Industry Network", icon: CheckCircle2 },
              { metric: "Bengaluru", label: "Headquartered", icon: Music },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group">
                  <stat.icon className="w-12 h-12 text-[#3D7500] mb-6 group-hover:scale-[1.15] transition-transform duration-500" />
                  <h3 className="text-4xl md:text-5xl font-bold font-poppins text-[#050505] mb-2">{stat.metric}</h3>
                  <p className="text-gray-600 font-opensans font-semibold text-lg">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="py-24 md:py-32 bg-[#050505] relative">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6">Our Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#13AFF0] to-[#4ade80]">Infrastructure</span></h2>
              <p className="text-xl text-gray-400 font-opensans leading-relaxed">Everything an ambitious artist needs to scale systematically.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}><ServiceCard title="Artist Management" desc="Build and scale your music career with expert guidance and dense structural routing." link="/artist-management" icon={Users} /></FadeIn>
            <FadeIn delay={0.2}><ServiceCard title="Music Promotion" desc="Grow your digital audience and reach the exact demographic precisely when they listen." link="/music-promotion" icon={TrendingUp} /></FadeIn>
            <FadeIn delay={0.3}><div className="md:col-span-1"><ServiceCard title="Live Events" desc="Perform live dynamically and connect with real physical audiences across mapped venues." link="/live-events" icon={Music} /></div></FadeIn>
            <FadeIn delay={0.4} className="md:col-span-1 md:col-start-2"><ServiceCard title="Mentorship" desc="Learn foundational technical parameters directly from established industry professionals." link="/mentorship" icon={CheckCircle2} /></FadeIn>
            <FadeIn delay={0.5} className="md:col-span-1"><ServiceCard title="XR & AI" desc="Explore and map the absolutely bleeding edge trajectory of future music experiences." link="/xr-ai" icon={Radio} /></FadeIn>
          </div>
        </div>
      </section>

      {/* 5. WHY MOKSHA360 */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <FadeIn>
               <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-10 leading-tight">Why Artists Choose <span className="text-[#3D7500]">Moksha360</span></h2>
               <ul className="space-y-8">
                 {["Tier-1 Global exposure opportunities", "Dense international industry network integrations", "Strict technology-driven algorithmic scale parameters", "Career-focused holistic development roadmaps"].map((point, i) => (
                   <li key={i} className="flex items-start gap-5 text-xl text-gray-300 font-medium">
                     <CheckCircle2 className="w-8 h-8 text-[#13AFF0] shrink-0 mt-1" />
                     <span className="leading-relaxed">{point}</span>
                   </li>
                 ))}
               </ul>
             </FadeIn>
             <FadeIn>
               <div className="relative aspect-[4/4] md:aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
                  <Image src="/images/artist_studio_recording_1773866526884.png" alt="Artist in Studio Recording" fill className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
               </div>
             </FadeIn>
           </div>
        </div>
      </section>

      {/* 6. ARTIST JOURNEY TIMELINE */}
      <section className="py-24 md:py-32 bg-[#050505]">
        <div className="container mx-auto px-4 overflow-hidden">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6">The Artist <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#13AFF0]">Journey</span></h2>
              <p className="text-xl text-gray-400 font-opensans leading-relaxed">A strictly enforced logical flow bridging basic discovery directly to global scale.</p>
            </div>
          </FadeIn>
          <JourneyTimeline />
        </div>
      </section>

      {/* 7. LOCAL SEO SECTION & 8. TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative border-t border-white/5 overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3D7500]/5 blur-[200px] rounded-full pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#13AFF0]/5 blur-[200px] rounded-full pointer-events-none" />
         <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="text-center max-w-4xl mx-auto mb-20">
                <span className="text-[#4ade80] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Our Root Geographies</span>
                <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-8 leading-tight">Built in Bengaluru,<br/>Connected to the World.</h2>
                <p className="text-2xl text-gray-400 font-opensans leading-relaxed mb-10">Actively serving and scaling artists physically originating from:</p>
                <div className="flex flex-wrap justify-center gap-4">
                   {["Indiranagar", "Koramangala", "Whitefield", "Electronic City", "HSR Layout"].map(loc => (
                     <span key={loc} className="px-8 py-4 rounded-full border border-white/10 bg-white/5 font-semibold text-lg hover:bg-white/10 transition-colors shadow-lg shadow-black/50">{loc}</span>
                   ))}
                </div>
              </div>
            </FadeIn>
            
            <div className="mt-24">
               <TestimonialCarousel />
            </div>
         </div>
      </section>

      {/* 9. BLOG PREVIEW SECTION */}
      <section className="py-24 md:py-32 bg-[#050505] border-t border-white/5">
         <div className="container mx-auto px-4">
            <FadeIn>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                 <div>
                   <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6">Explore Our <span className="text-[#13AFF0]">Authority</span></h2>
                   <p className="text-xl text-gray-400 font-opensans">Rigorous insights, strict structural strategies, and digital scaling blueprints.</p>
                 </div>
                 <Link href="/blog">
                    <Button variant="ghost" size="lg" className="border border-white/20 hover:bg-white/10 hidden md:flex h-14 px-8 font-semibold">Read All Authority Articles</Button>
                 </Link>
              </div>
            </FadeIn>
            <BlogPreviewGrid />
            <Link href="/blog" className="mt-12 block md:hidden">
                <Button variant="ghost" size="lg" className="w-full border border-white/20 hover:bg-white/10 h-14 font-semibold">Read All Authority Articles</Button>
            </Link>
         </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
         <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#13AFF0]/10 blur-[200px] rounded-full -translate-y-1/2 pointer-events-none" />
         <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-6">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Questions</span></h2>
              </div>
            </FadeIn>
            <Accordion />
         </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#13AFF0] via-[#0b6b94] to-[#050505] z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay z-0" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-6xl md:text-8xl font-bold font-poppins text-white mb-10 tracking-tight leading-[1.1]">Ready to Take Your<br/>Music Global?</h2>
            <p className="text-2xl md:text-3xl text-white/90 font-opensans mb-14 max-w-3xl mx-auto font-medium">Join the exclusive network of artists structurally scaling their organic careers.</p>
            <Link href="/contact" className="inline-block">
              <Button size="lg" className="h-20 px-16 text-2xl font-bold font-poppins bg-white text-[#050505] hover:bg-gray-100 hover:scale-[1.05] transition-transform duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-none">
                Start Your Journey
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

// Internal Module: Core Service Parameter Matrix
function ServiceCard({ title, desc, link, icon: Icon, className = "" }: any) {
  return (
    <Link href={link} className={`block h-full bg-white/5 border border-white/10 hover:border-[#13AFF0]/60 hover:bg-white/10 rounded-[2.5rem] p-12 transition-all duration-500 group relative overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ade80]/5 rounded-full blur-3xl group-hover:bg-[#13AFF0]/20 transition-colors" />
      <Icon className="w-14 h-14 text-[#4ade80] mb-8 group-hover:scale-[1.2] group-hover:text-[#13AFF0] transition-all duration-500 relative z-10" />
      <h3 className="text-3xl font-bold text-white font-poppins mb-4 relative z-10">{title}</h3>
      <p className="text-gray-400 font-opensans leading-relaxed text-lg relative z-10">{desc}</p>
    </Link>
  );
}
