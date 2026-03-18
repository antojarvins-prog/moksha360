"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const steps = [
  { title: "Discover", desc: "Evaluate your catalog, targeted demographic sound, and current organic brand momentum." },
  { title: "Develop", desc: "Build aggressive, multi-channel growth roadmaps and strict visual aesthetic frameworks." },
  { title: "Promote", desc: "Execute heavy external PR campaigns and structural Spotify algorithmic placement runs." },
  { title: "Perform", desc: "Secure hyper-local stage bookings and dense physical live gig routing arrays." },
  { title: "Scale", desc: "Lock massive global collaborations, label opportunities, and industry sponsorships." },
];

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-12">
      <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 rounded-full md:-translate-x-1/2" />
      <motion.div
         className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#13AFF0] to-[#4ade80] rounded-full md:-translate-x-1/2 origin-top shadow-[0_0_20px_rgba(19,175,240,0.5)]"
         style={{ scaleY }}
      />
      <div className="flex flex-col gap-12">
        {steps.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
               key={i}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className={`flex relative w-full items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} pl-16 md:pl-0`}
            >
               <div className="md:w-1/2" />
               <motion.div 
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 transition={{ delay: 0.3, type: "spring" }}
                 className="absolute left-[8px] md:left-1/2 w-6 h-6 bg-[#050505] border-4 border-[#13AFF0] rounded-full z-10 md:-translate-x-1/2 shadow-[0_0_15px_rgba(19,175,240,0.8)]" 
               />
               <div className={`md:w-1/2 flex flex-col ${isEven ? 'md:pr-16 md:text-right md:items-end' : 'md:pl-16 md:text-left md:items-start'}`}>
                 <h3 className="text-3xl font-bold font-poppins text-white mb-3 tracking-wide">{step.title}</h3>
                 <p className="text-gray-400 font-opensans leading-relaxed text-lg">{step.desc}</p>
               </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
