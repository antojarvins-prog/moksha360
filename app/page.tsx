import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Music, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Moksha360 | Top Entertainment Agency in Bangalore",
  description: "Bengaluru-based entertainment, talent management, and music-tech platform.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* 1. Hero */}
      <section className="w-full bg-gradient-to-b from-green-50 to-white py-24 md:py-32 overflow-hidden">
        <FadeIn className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-gray-900 tracking-tight leading-tight mb-6">
            Amplify Your Music Career in <span className="text-[#3D7500]">Bengaluru</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto font-opensans leading-relaxed mb-10">
            Moksha360 is the top entertainment agency in Bangalore for artist growth, global exposure, and cutting-edge XR/AI music experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 hover:-translate-y-1 transition-transform">Start Your Journey <ArrowRight className="ml-2 w-5 h-5" /></Button>
            </Link>
            <Link href="/services">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg h-14 hover:-translate-y-1 transition-transform">Explore Services</Button>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 2. Trust Indicators */}
      <section className="w-full py-12 border-y border-gray-100 bg-white">
        <FadeIn delay={0.2} className="container mx-auto max-w-7xl px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center gap-3 font-bold font-poppins text-xl"><Music className="w-8 h-8 text-[#13AFF0]" /> Spotify Partners</div>
           <div className="flex items-center gap-3 font-bold font-poppins text-xl"><Star className="w-8 h-8 text-[#3D7500]" /> 500+ Artists</div>
        </FadeIn>
      </section>

      {/* 3. Services */}
      <section className="w-full py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 font-opensans max-w-2xl mx-auto text-lg">Comprehensive solutions for musicians to scale their branding, bookings, and immersive promotions.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Card type="service" className="p-10 text-center flex flex-col items-center h-full">
                 <div className="w-20 h-20 bg-[#3D7500]/10 rounded-full flex items-center justify-center mb-6">
                   <Star className="text-[#3D7500] w-10 h-10" />
                 </div>
                 <h3 className="text-2xl font-bold font-poppins mb-3">Artist Management</h3>
                 <p className="text-gray-600 mb-8 flex-grow">Complete handling of your branding, release strategy, and public relations.</p>
                 <Link href="/services" className="text-[#13AFF0] font-medium hover:underline inline-flex items-center text-lg">Learn more <ArrowRight className="ml-1 w-5 h-5" /></Link>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card type="service" className="p-10 text-center flex flex-col items-center h-full">
                 <div className="w-20 h-20 bg-[#13AFF0]/10 rounded-full flex items-center justify-center mb-6">
                   <Music className="text-[#13AFF0] w-10 h-10" />
                 </div>
                 <h3 className="text-2xl font-bold font-poppins mb-3">Live Events</h3>
                 <p className="text-gray-600 mb-8 flex-grow">Booking and managing gigs in Bengaluru's top venues and across India.</p>
                 <Link href="/services" className="text-[#13AFF0] font-medium hover:underline inline-flex items-center text-lg">Learn more <ArrowRight className="ml-1 w-5 h-5" /></Link>
              </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Card type="service" className="p-10 text-center flex flex-col items-center h-full">
                 <div className="w-20 h-20 bg-[#3D7500]/10 rounded-full flex items-center justify-center mb-6">
                   <CheckCircle2 className="text-[#3D7500] w-10 h-10" />
                 </div>
                 <h3 className="text-2xl font-bold font-poppins mb-3">XR & AI Promo</h3>
                 <p className="text-gray-600 mb-8 flex-grow">Immersive XR concerts and AI-driven growth campaigns for modern artists.</p>
                 <Link href="/services" className="text-[#13AFF0] font-medium hover:underline inline-flex items-center text-lg">Learn more <ArrowRight className="ml-1 w-5 h-5" /></Link>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Bengaluru Local Section */}
      <section className="w-full py-24 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center gap-16">
           <FadeIn className="flex-1 space-y-8">
             <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#13AFF0]/10 text-[#13AFF0] font-medium">
               <MapPin className="w-5 h-5 mr-2" /> Local Dominance
             </div>
             <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 leading-tight">The Leading <br/>Artist Management Company in Bengaluru</h2>
             <p className="text-lg text-gray-600 font-opensans leading-relaxed border-l-4 border-[#3D7500] pl-6">
               Bengaluru's thriving music scene requires local expertise. We bridge the gap between emerging talent and the city's premier live event venues, ensuring your music reaches the right audience.
             </p>
             <ul className="space-y-4 pt-4 text-lg text-gray-800">
               <li className="flex items-center gap-3"><CheckCircle2 className="text-[#3D7500] w-6 h-6" /> Access to top Bengaluru venues</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-[#3D7500] w-6 h-6" /> Tailored localized promotion</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="text-[#3D7500] w-6 h-6" /> Network of industry professionals</li>
             </ul>
           </FadeIn>
           <FadeIn delay={0.2} className="flex-1 w-full bg-gray-100 rounded-3xl h-[600px] flex items-center justify-center overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3D7500]/20 to-[#13AFF0]/20 mix-blend-overlay"></div>
              <span className="text-gray-400 font-poppins text-xl">Local Imagery Placeholder</span>
           </FadeIn>
        </div>
      </section>

      {/* 7. FAQ (AI Search Optimization format) */}
      <section className="w-full py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto max-w-4xl px-4">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 font-opensans text-lg">Everything you need to know about working with Moksha360.</p>
          </FadeIn>
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                 <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">What does an artist management company do?</h3>
                 <p className="text-gray-600 font-opensans leading-relaxed text-lg">An artist management company helps musicians grow by managing branding, bookings, and promotions while connecting them to industry opportunities. We handle the business so you can focus on the music.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                 <h3 className="text-xl font-bold font-poppins text-gray-900 mb-3">How do you promote music in Bangalore?</h3>
                 <p className="text-gray-600 font-opensans leading-relaxed text-lg">We utilize a mix of localized digital marketing, playlist pitching, and live event bookings at premium Bengaluru venues to ensure maximum exposure for your releases within the local scene and beyond.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="w-full py-24 bg-[#3D7500] text-white overflow-hidden">
        <FadeIn className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">Ready to Take the Stage?</h2>
          <p className="text-2xl text-green-100 mb-10 font-opensans">Join Moksha360 and let's build your music career together.</p>
          <Link href="/contact">
             <Button variant="secondary" size="lg" className="bg-white text-[#3D7500] border-transparent hover:bg-gray-100 text-xl h-14 hover:scale-105 transition-transform duration-300">Apply for Management</Button>
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
