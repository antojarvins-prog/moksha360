"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "Transformed my music career completely. The global routing and networking was unmatched. Absolutely changed everything.", name: "Electronic Producer", location: "Indiranagar" },
  { quote: "Best artist management team in Bangalore. They rigorously handle the noise so I can just write my vision.", name: "Indie Pop Artist", location: "Koramangala" }
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 p-8 md:p-16 shadow-2xl">
      <Quote className="w-20 h-20 text-[#3D7500]/30 absolute top-8 left-8" />
      <AnimatePresence mode="wait">
        <motion.div
           key={index}
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -50 }}
           transition={{ duration: 0.6, ease: "easeInOut" }}
           className="relative z-10 text-center"
        >
          <p className="text-2xl md:text-5xl font-poppins font-semibold text-white mb-10 leading-tight">"{testimonials[index].quote}"</p>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gradient-to-tr from-[#13AFF0] to-[#4ade80] rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg">M</div>
            <h4 className="font-bold text-white text-xl font-poppins">{testimonials[index].name}</h4>
            <span className="text-gray-400 text-sm mt-1 uppercase tracking-widest">{testimonials[index].location}</span>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center gap-3 mt-12 relative z-10">
        {testimonials.map((_, i) => (
           <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full transition-colors ${i === index ? 'bg-[#4ade80] shadow-[0_0_10px_#4ade80]' : 'bg-white/20'}`} />
        ))}
      </div>
    </div>
  );
}
