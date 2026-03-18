import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export function BlogPreviewGrid() {
  const blogs = [
    { title: "Top Music Events in Bangalore 2026", desc: "Explore the top music events in Bangalore in 2026 including NH7 Weekender, Sunburn Arena, and heavily localized gig venues...", link: "/blog/top-music-events-in-bangalore-2026", date: "Mar 19, 2026" },
    { title: "How to Build a Music Brand", desc: "Learn the foundational pillars of music branding, storytelling, visual identity, and overarching aesthetic consistency.", link: "/blog/how-to-build-a-music-brand", date: "Mar 18, 2026" },
    { title: "How to Get Spotify Streams", desc: "Learn actionable, algorithm-friendly data strategies to significantly scale and increase your organic Spotify streams.", link: "/blog/how-to-get-spotify-streams", date: "Mar 17, 2026" }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {blogs.map((blog, i) => (
        <FadeIn key={i} delay={i * 0.1}>
          <Link href={blog.link} className="flex flex-col h-full bg-white/5 border border-white/10 hover:border-[#4ade80]/50 hover:bg-white/10 rounded-[2rem] p-8 transition-all group duration-300">
            <span className="text-[#13AFF0] text-sm font-semibold tracking-widest uppercase font-poppins mb-4 block">{blog.date}</span>
            <h3 className="text-2xl font-bold text-white font-poppins mb-4 group-hover:text-[#4ade80] transition-colors leading-snug">{blog.title}</h3>
            <p className="text-gray-400 font-opensans leading-relaxed mb-10 flex-grow">{blog.desc}</p>
            <span className="inline-flex items-center text-white font-medium group-hover:text-[#4ade80] transition-colors mt-auto uppercase tracking-wider text-sm">Read Article <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" /></span>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}
