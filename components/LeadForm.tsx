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
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold font-poppins text-gray-900">Book Consultation</h3>
      <div className="space-y-2 text-left">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
        <input id="name" required className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-[#3D7500] focus:ring-1 focus:ring-[#3D7500] outline-none" />
      </div>
      <div className="space-y-2 text-left">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
        <input id="email" type="email" required className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-[#3D7500] focus:ring-1 focus:ring-[#3D7500] outline-none" />
      </div>
      <div className="space-y-2 text-left">
        <label htmlFor="type" className="text-sm font-medium text-gray-700">Artist Type</label>
        <select id="type" className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:border-[#3D7500] focus:ring-1 focus:ring-[#3D7500] outline-none bg-white">
          <option>Indie Musician</option>
          <option>DJ / Producer</option>
          <option>Band / Group</option>
          <option>Creator</option>
          <option>Other</option>
        </select>
      </div>
      <div className="space-y-2 text-left">
        <label htmlFor="goal" className="text-sm font-medium text-gray-700">Goal</label>
        <textarea id="goal" required rows={3} className="w-full p-4 rounded-lg border border-gray-200 focus:border-[#3D7500] focus:ring-1 focus:ring-[#3D7500] outline-none" placeholder="e.g., I want to get more gigs..."></textarea>
      </div>
      <Button type="submit" variant="primary" className="w-full h-12 text-lg mt-4" disabled={status === "submitting" || status === "success"}>
        {status === "idle" ? "Submit Application" : status === "submitting" ? "Sending..." : "Received!"}
      </Button>
    </form>
  );
}
