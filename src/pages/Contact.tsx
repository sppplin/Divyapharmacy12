/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-warm-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-deep-green py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        <div className="max-w-[1300px] mx-auto relative z-10 text-center">
          <span className="section-tag text-saffron-light mb-4">Get In Touch</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">Contact Our Vaidyas</h1>
          <p className="text-saffron-light/80 max-w-2xl mx-auto font-display text-sm tracking-widest uppercase">Ancient Consultation · Modern Support</p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-text-dark mb-6">Divya Pharmacy HQ</h2>
              <p className="text-text-mid leading-relaxed mb-8">
                Visit our main center in the sacred city of Haridwar for traditional consultations or reach out to us for any product inquiries. Our team of expert Vaidyas is here to guide your healing journey.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Phone, title: "Phone Support", info: "+91 800-200-PATANJALI", sub: "Mon-Sat, 9AM-6PM" },
                  { icon: Mail, title: "Email Us", info: "care@divyapharmacy.com", sub: "Response in 24h" },
                  { icon: MapPin, title: "Our Ashram", info: "Haridwar, Uttarakhand", sub: "Pin: 249405, India" },
                  { icon: Clock, title: "Consultation", info: "80+ Resident Vaidyas", sub: "Free Expert Guidance" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-cream/40 rounded-2xl border border-border/50">
                    <div className="w-10 h-10 bg-saffron/10 rounded-full flex items-center justify-center text-saffron shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-display text-[10px] font-bold tracking-widest text-text-light uppercase mb-1">{item.title}</h4>
                      <div className="font-sans font-bold text-text-dark">{item.info}</div>
                      <div className="text-[10px] text-text-light">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-deep-green text-white rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-saffron opacity-20 -mr-16 -mt-16 rounded-full group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-bold mb-4">Urgent Medical Inquiry?</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">If you have critical health concerns or need immediate Ayurvedic guidance, call our 24/7 helpline.</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <span className="font-display text-xl font-bold tracking-widest">1800-180-4108</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-saffron/5 border border-border">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-display text-[10px] tracking-widest text-text-light uppercase font-bold">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-cream border border-border rounded-xl px-4 py-4 focus:border-saffron outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-display text-[10px] tracking-widest text-text-light uppercase font-bold">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="rahul@example.com"
                      className="w-full bg-cream border border-border rounded-xl px-4 py-4 focus:border-saffron outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-display text-[10px] tracking-widest text-text-light uppercase font-bold">Subject</label>
                  <select className="w-full bg-cream border border-border rounded-xl px-4 py-4 focus:border-saffron outline-none transition-all appearance-none cursor-pointer">
                    <option>Product Inquiry</option>
                    <option>Vaidya Consultation</option>
                    <option>Order Tracking</option>
                    <option>Bulk/Wholesale Inquiry</option>
                    <option>General Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-display text-[10px] tracking-widest text-text-light uppercase font-bold">Your Message</label>
                  <textarea 
                    rows={5}
                    placeholder="How can our ancient wisdom help you today?"
                    className="w-full bg-cream border border-border rounded-xl px-4 py-4 focus:border-saffron outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full btn-primary py-5 text-sm flex items-center justify-center gap-3 rounded-xl shadow-xl shadow-saffron/20 hover:shadow-saffron/40 transition-all font-bold tracking-widest"
                >
                  <Send size={18} /> SEND MESSAGE
                </button>
                <p className="text-center text-[10px] text-text-light tracking-wider uppercase">Average response time: 24-48 hours</p>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 px-6"
              >
                <div className="w-20 h-20 bg-deep-green text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-deep-green/20">
                  <CheckCircle size={40} />
                </div>
                <h3 className="font-serif text-3xl font-bold text-text-dark mb-4">Jai Bharat! Message Received.</h3>
                <p className="text-text-mid mb-10 max-w-sm mx-auto">Thank you for reaching out. One of our team members or Vaidyas will contact you shortly via email.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="font-display text-xs font-bold tracking-[3px] text-saffron hover:text-deep-green transition-colors uppercase underline underline-offset-8"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
