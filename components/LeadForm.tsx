"use client";

import { useState } from "react";
import { Button } from "./Button";

export function LeadForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 bg-white/5 backdrop-blur-2xl p-10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3D7500]/10 to-[#13AFF0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      <h3 className="text-3xl font-bold font-poppins text-white mb-2 relative z-10">Book Consultation</h3>
      <p className="text-gray-400 text-sm mb-8 relative z-10">Limited availability. Select your genre and goal.</p>
      
      <div className="space-y-2 text-left relative z-10">
        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
        <input id="name" required className="w-full h-14 px-5 rounded-xl border border-white/10 bg-black/40 text-white focus:border-[#3D7500] focus:ring-1 focus:ring-[#3D7500] focus:bg-black/60 outline-none transition-all placeholder:text-gray-600" placeholder="Your full name" />
      </div>
      <div className="space-y-2 text-left relative z-10">
        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
        <input id="email" type="email" required className="w-full h-14 px-5 rounded-xl border border-white/10 bg-black/40 text-white focus:border-[#3D7500] focus:ring-1 focus:ring-[#3D7500] focus:bg-black/60 outline-none transition-all placeholder:text-gray-600" placeholder="you@domain.com" />
      </div>
      <div className="space-y-2 text-left relative z-10">
        <label htmlFor="type" className="text-sm font-medium text-gray-300">Artist Type</label>
        <select id="type" className="w-full h-14 px-5 rounded-xl border border-white/10 bg-black/40 text-gray-200 focus:border-[#3D7500] focus:ring-1 focus:ring-[#3D7500] focus:bg-black/60 outline-none transition-all appearance-none cursor-pointer">
          <option value="indie" className="bg-black text-white">Indie Musician</option>
          <option value="dj" className="bg-black text-white">DJ / Producer</option>
          <option value="band" className="bg-black text-white">Band / Group</option>
          <option value="creator" className="bg-black text-white">Creator</option>
          <option value="other" className="bg-black text-white">Other</option>
        </select>
      </div>
      <div className="space-y-2 text-left relative z-10">
        <label htmlFor="goal" className="text-sm font-medium text-gray-300">Goal</label>
        <textarea id="goal" required rows={3} className="w-full p-5 rounded-xl border border-white/10 bg-black/40 text-white focus:border-[#3D7500] focus:ring-1 focus:ring-[#3D7500] focus:bg-black/60 outline-none transition-all resize-none placeholder:text-gray-600" placeholder="e.g., I want to get more gigs..."></textarea>
      </div>
      <Button type="submit" variant="primary" className="w-full h-14 text-lg mt-6 relative z-10 font-semibold" disabled={status === "submitting" || status === "success"}>
        {status === "idle" ? "Submit Application" : status === "submitting" ? "Sending..." : "Received!"}
      </Button>
    </form>
  );
}
