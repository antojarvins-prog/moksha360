import { FadeIn } from "./FadeIn";
import { Button } from "./Button";
import Link from "next/link";
import { MapPin } from "lucide-react";

export function LeadLanding({ title, desc, keyword, local = false }: { title: string, desc: string, keyword: string, local?: boolean }) {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center pt-32 pb-24 text-center px-4 bg-gradient-to-b from-green-50 to-white">
       <FadeIn className="container mx-auto max-w-4xl">
         {local && <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#13AFF0]/10 text-[#13AFF0] font-medium mb-6"><MapPin className="w-4 h-4 mr-2" /> Local Dominance</div>}
         <h1 className="text-5xl md:text-6xl font-bold font-poppins text-gray-900 tracking-tight leading-tight mb-6">{title}</h1>
         <p className="text-xl max-w-2xl mx-auto font-opensans text-gray-700 mb-10 leading-relaxed">{desc}</p>
         <Link href="/contact"><Button size="lg" className="h-14 px-8 text-lg">Contact {keyword} Experts</Button></Link>
       </FadeIn>
    </main>
  );
}
