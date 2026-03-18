import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Music, Star, Network, TrendingUp, Presentation } from "lucide-react";

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
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "description": "India's gateway connecting artists to global music opportunities using technology.",
        "url": "https://moksha360.com"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does an artist management company do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An artist management company helps musicians grow by handling branding, bookings, promotions, and partnerships."
            }
          },
          {
            "@type": "Question",
            "name": "Can beginners join?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Moksha360 supports both beginners and professionals."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="flex flex-col items-center w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Hero */}
      <section className="w-full bg-gradient-to-b from-green-50 to-white py-24 md:py-32 overflow-hidden">
        <FadeIn className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-gray-900 tracking-tight leading-tight mb-6">
            India’s Gateway to <br/><span className="text-[#3D7500]">Global Music Success</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto font-opensans leading-relaxed mb-10">
            Empowering artists through management, marketing, live events, and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 hover:-translate-y-1 transition-transform">Get Discovered <ArrowRight className="ml-2 w-5 h-5" /></Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg h-14 hover:-translate-y-1 transition-transform">Book Consultation</Button>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 2. Trust Indicators */}
      <section className="w-full py-12 border-y border-gray-100 bg-white">
        <FadeIn delay={0.2} className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center gap-2 font-bold font-poppins md:text-xl"><Star className="w-6 h-6 text-[#3D7500]" /> 100+ Artists Managed</div>
           <div className="flex items-center gap-2 font-bold font-poppins md:text-xl"><Network className="w-6 h-6 text-[#13AFF0]" /> Global Collaborations</div>
           <div className="flex items-center gap-2 font-bold font-poppins md:text-xl"><Music className="w-6 h-6 text-[#3D7500]" /> Grammy-Level Network</div>
           <div className="flex items-center gap-2 font-bold font-poppins md:text-xl"><MapPin className="w-6 h-6 text-[#13AFF0]" /> Based in Bengaluru</div>
        </FadeIn>
      </section>

      {/* 3. Services */}
      <section className="w-full py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 font-opensans max-w-2xl mx-auto text-lg">Full artist lifecycle support, blending traditional management with tech-enabled growth.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Card type="service" className="p-8 text-center flex flex-col items-center h-full">
                 <div className="w-16 h-16 bg-[#3D7500]/10 rounded-full flex items-center justify-center mb-6">
                   <Star className="text-[#3D7500] w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-bold font-poppins mb-3">Artist Management</h3>
                 <p className="text-gray-600 mb-8 flex-grow">Build your career with expert guidance.</p>
                 <Link href="/artist-management" className="text-[#13AFF0] font-medium hover:underline inline-flex items-center text-lg">Learn more <ArrowRight className="ml-1 w-5 h-5" /></Link>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card type="service" className="p-8 text-center flex flex-col items-center h-full">
                 <div className="w-16 h-16 bg-[#13AFF0]/10 rounded-full flex items-center justify-center mb-6">
                   <TrendingUp className="text-[#13AFF0] w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-bold font-poppins mb-3">Music Promotion</h3>
                 <p className="text-gray-600 mb-8 flex-grow">Reach global audiences and grow your fanbase.</p>
                 <Link href="/music-promotion" className="text-[#13AFF0] font-medium hover:underline inline-flex items-center text-lg">Learn more <ArrowRight className="ml-1 w-5 h-5" /></Link>
              </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Card type="service" className="p-8 text-center flex flex-col items-center h-full">
                 <div className="w-16 h-16 bg-[#3D7500]/10 rounded-full flex items-center justify-center mb-6">
                   <Music className="text-[#3D7500] w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-bold font-poppins mb-3">Live Events</h3>
                 <p className="text-gray-600 mb-8 flex-grow">Perform on premium stages.</p>
                 <Link href="/live-events" className="text-[#13AFF0] font-medium hover:underline inline-flex items-center text-lg">Learn more <ArrowRight className="ml-1 w-5 h-5" /></Link>
              </Card>
            </FadeIn>
            {/* Mentorship & XR */}
            <FadeIn delay={0.1}>
              <Card type="service" className="p-8 text-center flex flex-col items-center h-full">
                 <div className="w-16 h-16 bg-[#13AFF0]/10 rounded-full flex items-center justify-center mb-6">
                   <Presentation className="text-[#13AFF0] w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-bold font-poppins mb-3">Mentorship</h3>
                 <p className="text-gray-600 mb-8 flex-grow">Learn from industry professionals.</p>
                 <Link href="/mentorship" className="text-[#13AFF0] font-medium hover:underline inline-flex items-center text-lg">Learn more <ArrowRight className="ml-1 w-5 h-5" /></Link>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card type="service" className="p-8 text-center flex flex-col items-center h-full">
                 <div className="w-16 h-16 bg-[#3D7500]/10 rounded-full flex items-center justify-center mb-6">
                   <CheckCircle2 className="text-[#3D7500] w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-bold font-poppins mb-3">XR & AI</h3>
                 <p className="text-gray-600 mb-8 flex-grow">Experience the future of music.</p>
                 <Link href="/xr-ai" className="text-[#13AFF0] font-medium hover:underline inline-flex items-center text-lg">Learn more <ArrowRight className="ml-1 w-5 h-5" /></Link>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="w-full py-24 bg-white border-y border-gray-100">
         <div className="container mx-auto max-w-5xl px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold font-poppins text-gray-900 mb-12">Why Choose Us</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
               <FadeIn delay={0.1}>
                 <h4 className="text-xl font-bold text-[#3D7500] mb-2 font-poppins">Global Exposure</h4>
                 <p className="text-gray-600 font-opensans">Unlock international opportunities.</p>
               </FadeIn>
               <FadeIn delay={0.2}>
                 <h4 className="text-xl font-bold text-[#13AFF0] mb-2 font-poppins">Tech-driven Growth</h4>
                 <p className="text-gray-600 font-opensans">Leveraging AI tools and XR models.</p>
               </FadeIn>
               <FadeIn delay={0.3}>
                 <h4 className="text-xl font-bold text-[#3D7500] mb-2 font-poppins">Proven Results</h4>
                 <p className="text-gray-600 font-opensans">A track record of scaling artists.</p>
               </FadeIn>
               <FadeIn delay={0.4}>
                 <h4 className="text-xl font-bold text-[#13AFF0] mb-2 font-poppins">Bengaluru Expertise</h4>
                 <p className="text-gray-600 font-opensans">Rooted in India's creative capital.</p>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* 5. Bengaluru Local Section */}
      <section className="w-full py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center gap-16">
           <FadeIn className="flex-1 space-y-8">
             <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#13AFF0]/10 text-[#13AFF0] font-medium">
               <MapPin className="w-5 h-5 mr-2" /> Local Dominance
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 leading-tight">Your Local <br/>Music Ecosystem</h2>
             <p className="text-lg text-gray-600 font-opensans leading-relaxed border-l-4 border-[#3D7500] pl-6">
               Bengaluru's thriving music scene requires local expertise. We bridge the gap between emerging talent and the city's premier sectors.
             </p>
             <div>
               <h4 className="font-bold text-gray-900 mb-4 font-poppins text-xl">Serving:</h4>
               <ul className="space-y-4 text-lg text-gray-800 grid grid-cols-2">
                 <li className="flex items-center gap-2"><CheckCircle2 className="text-[#3D7500] w-5 h-5" /> Indiranagar</li>
                 <li className="flex items-center gap-2"><CheckCircle2 className="text-[#3D7500] w-5 h-5" /> Whitefield</li>
                 <li className="flex items-center gap-2"><CheckCircle2 className="text-[#3D7500] w-5 h-5" /> Koramangala</li>
                 <li className="flex items-center gap-2"><CheckCircle2 className="text-[#3D7500] w-5 h-5" /> Electronic City</li>
               </ul>
             </div>
           </FadeIn>
           <FadeIn delay={0.2} className="flex-1 w-full bg-white rounded-3xl h-[400px] flex items-center justify-center overflow-hidden relative shadow-lg border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3D7500]/10 to-[#13AFF0]/10"></div>
              <MapPin className="w-32 h-32 text-gray-200" />
           </FadeIn>
        </div>
      </section>

      {/* 7. FAQ (AI Search Optimization format) */}
      <section className="w-full py-24 bg-white overflow-hidden">
        <div className="container mx-auto max-w-4xl px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">Frequently Asked Questions</h2>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                 <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">What does an artist management company do?</h3>
                 <p className="text-gray-600 font-opensans leading-relaxed text-lg">An artist management company helps musicians grow by handling branding, bookings, promotions, and partnerships.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                 <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">Can beginners join?</h3>
                 <p className="text-gray-600 font-opensans leading-relaxed text-lg">Yes, Moksha360 supports both beginners and professionals.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="w-full py-24 bg-[#3D7500] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <FadeIn className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">Ready to take your music global?</h2>
          <p className="text-2xl text-green-100 mb-8 font-opensans">Book your consultation today. <span className="font-bold text-white block mt-2 opacity-90"><Star className="w-5 h-5 inline mr-2 mb-1"/> Grammy-level connection. Limited slots available.</span></p>
          <Link href="/contact">
             <Button variant="secondary" size="lg" className="bg-white text-[#3D7500] border-transparent hover:bg-gray-100 text-xl h-14 px-10 hover:scale-105 transition-transform duration-300">Book Consultation</Button>
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
