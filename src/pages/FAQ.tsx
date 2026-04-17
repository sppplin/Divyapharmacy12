/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    q: "Are Divya Pharmacy medicines safe to take with allopathy?",
    a: "Most Ayurvedic medicines can be taken alongside allopathic treatments, but it's essential to keep a gap of at least 30-60 minutes between them. We strongly recommend consulting with our resident Vaidya or your physician before combining treatments."
  },
  {
    q: "How long does it take to see results with Ayurvedic treatment?",
    a: "Ayurveda works on the root cause rather than just symptoms. For chronic conditions, it typically takes 4-12 weeks to see significant improvement. Consistency in dosage and following recommended dietary guidelines (Ahaar-Vihaar) is crucial."
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes, Divya Pharmacy delivers authentic Ayurvedic formulations to over 60 countries worldwide. Shipping times and costs vary depending on the destination and local customs regulations."
  },
  {
    q: "How can I consult with a Patanjali Yogpeeth doctor?",
    a: "We have over 80 resident Ayurvedic physicians at Patanjali Yogpeeth. You can visit in person or use our upcoming online consultation feature. For immediate queries, you can contact our helpline at +91-1334-244107."
  },
  {
    q: "Are there any side effects of Swarna Bhasma (Gold Ash)?",
    a: "When prepared according to traditional Shastric methods and 'Puta' cycles as we do at Divya Pharmacy, Bhasmas are processed into nano-particles that are safe and highly bio-available. They should only be taken in the prescribed dosage."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="bg-cream min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-saffron-pale rounded-full flex items-center justify-center text-saffron mx-auto mb-6">
            <HelpCircle size={32} />
          </div>
          <h1 className="font-serif text-4xl font-bold text-text-dark mb-4">Frequently Asked Questions</h1>
          <div className="font-devanagari text-xl text-saffron mb-6">सामान्य प्रश्नोत्तर</div>
          <p className="text-text-light max-w-lg mx-auto">Find answers to common questions about our products, Ayurvedic treatments, and shipping.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-warm-white border border-border rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className={`font-serif text-lg font-semibold transition-colors ${openIndex === i ? 'text-saffron' : 'text-text-dark group-hover:text-saffron'}`}>
                  {faq.q}
                </span>
                <ChevronDown size={20} className={`text-text-light transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-saffron' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-text-mid leading-relaxed border-t border-cream pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-deep-green rounded-3xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <MessageCircle size={120} />
          </div>
          <h3 className="font-serif text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-[#A0B8A0] mb-8">Our expert Vaidyas are here to help you on your healing journey.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary">WHATSAPP US</button>
            <button className="px-8 py-3 rounded-sm border border-white/20 text-white font-display text-[11px] tracking-widest hover:border-white transition-all uppercase">
              Call Helpline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
