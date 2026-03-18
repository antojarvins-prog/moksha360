"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: "What does Moksha360 do?", answer: "Moksha360 helps artists grow organically through holistic management, target audience promotion, deep-routed live events, and advanced global XR technologies." },
  { question: "How can I join?", answer: "You can securely apply online or book a direct technical consultation with our primary A&R routing team." },
  { question: "Do you support beginners?", answer: "Yes, we actively support both ambitious indie beginners looking to establish local traction and established touring professionals ready to scale." }
];

export function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden">
          <button
            className="w-full p-6 text-left flex justify-between items-center text-white font-poppins font-semibold text-lg hover:bg-white/10 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.question}
            <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} className="text-[#13AFF0] shrink-0">
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="p-6 pt-0 text-gray-400 font-opensans leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
