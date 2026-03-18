import type { Metadata } from "next";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Live Events in Bangalore | Moksha360",
  description: "Secure premium bookings and perform at top venues. Moksha360 handles booking, marketing, and live execution.",
};

export default function LiveEventsPage() {
  return (
    <main className="min-h-screen pt-20 pb-32">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-poppins text-[#3D7500] mb-6">Live Events in Bangalore</h1>
        <p className="text-xl text-gray-700 font-opensans leading-relaxed mb-12">We help artists grow, monetize, and access world-class stages in Bengaluru and across India.</p>

        <section className="mb-16 bg-gray-50 p-8 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold font-poppins mb-6">Key Benefits</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="text-[#13AFF0]" /> Venue Representation</li>
            <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="text-[#13AFF0]" /> Tour Routing</li>
            <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="text-[#13AFF0]" /> Contract Logistics</li>
            <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="text-[#13AFF0]" /> Global Exposure</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold font-poppins mb-6">Our Process</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full bg-[#13AFF0]/20 text-[#13AFF0] flex items-center justify-center font-bold text-lg shrink-0">1</div>
               <div><h3 className="text-xl font-bold font-poppins">Evaluation</h3><p className="text-gray-600">Assessing your current catalog and brand momentum.</p></div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full bg-[#13AFF0]/20 text-[#13AFF0] flex items-center justify-center font-bold text-lg shrink-0">2</div>
               <div><h3 className="text-xl font-bold font-poppins">Strategy</h3><p className="text-gray-600">Designing a multi-channel growth roadmap.</p></div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full bg-[#13AFF0]/20 text-[#13AFF0] flex items-center justify-center font-bold text-lg shrink-0">3</div>
               <div><h3 className="text-xl font-bold font-poppins">Promotion</h3><p className="text-gray-600">Marketing, PR, and Spotify play-listing.</p></div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full bg-[#13AFF0]/20 text-[#13AFF0] flex items-center justify-center font-bold text-lg shrink-0">4</div>
               <div><h3 className="text-xl font-bold font-poppins">Performance</h3><p className="text-gray-600">Executing live shows and tour routing.</p></div>
            </div>
            <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full bg-[#3D7500]/20 text-[#3D7500] flex items-center justify-center font-bold text-lg shrink-0">5</div>
               <div><h3 className="text-xl font-bold font-poppins">Growth</h3><p className="text-gray-600">Sustaining expansion and global collaborations.</p></div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-[#3D7500]/5 p-8 rounded-2xl border border-[#3D7500]/10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
           <div>
             <h2 className="text-2xl font-bold font-poppins text-gray-900 mb-2">Pricing</h2>
             <p className="text-gray-600">Custom plans based on tour scale.</p>
           </div>
           <Link href="/contact">
             <Button size="lg" className="h-14 px-8 text-lg">Start Your Journey <ArrowRight className="ml-2 w-5 h-5" /></Button>
           </Link>
        </section>
      </div>
    </main>
  );
}
