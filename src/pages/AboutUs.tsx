/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { History, Heart, Globe, School, BookOpen, Star, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutUs() {
  const missions = [
    "A holistic perspective towards Health & Well being.",
    "To propagate Yoga & Pranayam in a scientific manner for the welfare of humanity.",
    "Patanjali is committed towards serving the Nation through charity.",
    "Acharyakulam and a 1500-acre University for Research in Yoga & Ayurveda."
  ];

  return (
    <main className="pt-20 pb-24">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1600&q=80" 
            alt="Ayurvedic Heritage" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag text-saffron mb-4"
          >
            Since 1995
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight"
          >
            Who We Are
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-devanagari text-2xl text-saffron-light mt-4"
          >
            दिव्य योग मन्दिर (ट्रस्ट) — एक गौरवशाली इतिहास
          </motion.div>
        </div>
      </section>

      {/* Trust Introduction */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark mb-8 leading-relaxed">
                Founded by <span className="text-deep-green">Swami Ramdev Ji</span> & <span className="text-deep-green">Acharya Balkrishna Ji</span>
              </h2>
              <p className="text-lg text-text-mid leading-relaxed">
                Divya Yog Mandir Trust was founded in 1995 as a response to the growing demand for Yoga and Ayurveda, fueled by the success of our free Yoga classes. The trust provides the necessary infrastructure, organizational framework, and outreach programs to advance the benefits of these ancient sciences beyond the immediate community.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-cream/30 p-8 rounded-3xl border border-border/50">
              <History className="text-saffron mb-6" size={32} />
              <h3 className="font-serif text-2xl font-bold text-text-dark mb-4">Historical Roots</h3>
              <p className="text-sm text-text-mid leading-relaxed">
                The Kripalu Bagh Ashram on the blessed land next to the holy Ganges was built in 1932 by the scholarly erudite and God-realized Param Pujya Swami Kripalu Dev Ji Maharaj.
              </p>
            </div>
            <div className="bg-deep-green/5 p-8 rounded-3xl border border-deep-green/10">
              <Heart className="text-deep-green mb-6" size={32} />
              <h3 className="font-serif text-2xl font-bold text-text-dark mb-4">National Service</h3>
              <p className="text-sm text-text-mid leading-relaxed">
                Patanjali has benefitted crores of people through its charity worth thousands of crores. We are committed to education, health & culture through our nation-building projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed History */}
      <section className="py-24 px-6 bg-warm-white bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" 
                alt="Ashram Living" 
                className="rounded-[40px] shadow-2xl z-10 relative h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-saffron/10 rounded-full blur-3xl -z-10" />
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-4xl font-bold text-text-dark">Divya Yog Mandir History</h2>
              <div className="space-y-6 text-text-mid leading-relaxed text-sm">
                <p>
                  Swami Kripalu Dev Ji along with another great spiritualist Swami Shraddhanand, who was the founder of the pure and chaste Hindu traditions of the “GURUKUL KANGRI”, organized a movement of rejuvenation of Indian ancient traditions and renaissance of its glorious and hoary past.
                </p>
                <p>
                  Country, its religion and all related aspects, covered by the gathering dust of centuries of neglect, were rediscovered and extolled. It was the place where great patriots like Shri Rash Bihari Bose had taken shelter during their operations for freedom movements.
                </p>
                <p className="font-medium text-text-dark italic border-l-4 border-saffron pl-4">
                  Saint Shri Kripalu Dev Ji Maharaj was succeeded by his illustrious disciple Pujya Swami Shri Shankar Dev Ji Maharaj, well conversant with Vedic knowledge and an ardent advocate of noble human values.
                </p>
                <p>
                  Swami ji founded the Trust in 1995 along with his group of disciples; joined by Philanthropist Pujya Swami Ram Dev Ji Maharaj and Acharya Balkrishna Ji Maharaj, also a great spiritualist & scholar of Ayurveda. They continue to exalt the traditions and enrich the future with what the trust had enshrined and achieved in its glorious preceding years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patanjali's Pillars */}
      <section className="py-24 px-6 bg-deep-green text-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="section-tag text-saffron-light opacity-80 mb-6">Nation Building</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16">National Service Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <School size={40} className="text-saffron-light mx-auto mb-6" />
              <h4 className="font-serif text-xl font-bold mb-4">Acharyakulam</h4>
              <p className="text-xs text-white/70 leading-relaxed">Establishing Vedic education centers in every District & Tehsil across the nation.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <Globe size={40} className="text-saffron-light mx-auto mb-6" />
              <h4 className="font-serif text-xl font-bold mb-4">World Class University</h4>
              <p className="text-xs text-white/70 leading-relaxed">A grand University spreading over 1500 acres dedicated to excellence in Vedic learning.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <BookOpen size={40} className="text-saffron-light mx-auto mb-6" />
              <h4 className="font-serif text-xl font-bold mb-4">Ayurveda Research</h4>
              <p className="text-xs text-white/70 leading-relaxed">Pioneering research in Yoga & Ayurveda to scientifically validate ancient Vedic wisdom.</p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-saffron rounded-2xl max-w-2xl mx-auto text-deep-green">
            <h4 className="font-serif text-xl font-bold mb-4">Join Our Journey</h4>
            <p className="text-sm font-medium mb-6">
              We call upon all religious, nationalist, pure & spiritual souls living around the globe to connect with us to contribute in our efforts for education, health & culture.
            </p>
            <button className="bg-deep-green text-white px-8 py-3 rounded-full font-display text-xs font-bold tracking-widest uppercase hover:bg-black transition-colors">
              Contribute Now
            </button>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-saffron/5 rounded-full blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Sparkles className="text-saffron mx-auto mb-4" size={32} />
            <h2 className="font-serif text-4xl font-bold text-text-dark">Vision & Mission</h2>
          </div>
          
          <div className="space-y-4">
            {missions.map((mission, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 bg-white border border-border shadow-sm rounded-2xl hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-deep-green/10 text-deep-green rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <p className="font-serif text-lg text-text-dark">{mission}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
