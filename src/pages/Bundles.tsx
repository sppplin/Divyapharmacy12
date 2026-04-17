/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  ShoppingBag, 
  ArrowRight,
  TrendingDown,
  ShieldCheck,
  Star,
  CheckCircle
} from 'lucide-react';
import { BUNDLES } from '../constants';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useNavigate } from 'react-router-dom';

export default function Bundles() {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

  return (
    <div className="bg-warm-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#1a2a1a] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron opacity-10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse" />
        
        <div className="max-w-[1300px] mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-saffron/20 text-saffron-light px-4 py-2 rounded-full border border-saffron/30 mb-8 backdrop-blur-md">
            <Zap size={14} className="fill-saffron" />
            <span className="font-display text-[10px] tracking-[2px] font-bold uppercase">Greatest Savings</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Complete Health Bundles</h1>
          <p className="text-[#A0B8A0] max-w-2xl mx-auto font-devanagari text-2xl mb-8">संपूर्ण आरोग्य पैकेज — शरीर और मन के लिए एक पूर्ण समाधान</p>
          <div className="flex items-center justify-center gap-8 text-white/60 font-display text-[10px] tracking-[4px] uppercase font-bold">
            <span className="flex items-center gap-2"><Star size={12} className="text-saffron" /> Expert Curated</span>
            <span className="flex items-center gap-2"><TrendingDown size={12} className="text-saffron" /> Save Up To 30%</span>
            <span className="flex items-center gap-2"><ShieldCheck size={12} className="text-saffron" /> Full Treatment</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {BUNDLES.map((bundle, index) => (
            <motion.div 
              key={bundle.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[32px] overflow-hidden border border-border flex flex-col md:flex-row h-full shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Side */}
              <div className="md:w-2/5 relative bg-gradient-to-br from-cream to-saffron-pale p-8 flex items-center justify-center overflow-hidden">
                <div className="relative flex -space-x-12 md:-space-x-8 group-hover:-space-x-4 transition-all duration-700">
                  {bundle.imgs.map((img, i) => (
                    <motion.img 
                      key={i} 
                      src={img} 
                      referrerPolicy="no-referrer"
                      alt="" 
                      className={`w-36 h-36 md:w-48 md:h-48 object-contain rounded-2xl bg-white p-4 shadow-xl border-2 border-white/50 relative z-[${10-i}]`}
                      style={{ transform: `rotate(${i % 2 === 0 ? '-5deg' : '5deg'})` }}
                    />
                  ))}
                </div>
                <div className="absolute top-6 left-6">
                  <span className="bg-deep-green text-white text-[9px] font-display font-bold tracking-widest px-3 py-1.5 rounded-full shadow-lg uppercase">
                    Save {bundle.save}%
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-saffron font-display text-[10px] font-bold tracking-[3px] uppercase mb-4">
                    <TrendingDown size={14} /> {bundle.tag}
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-text-dark mb-2">{bundle.name}</h3>
                  <div className="font-devanagari text-lg text-sage mb-6">{bundle.hindi}</div>
                  
                  <div className="space-y-3 mb-10">
                    <div className="text-[10px] font-display tracking-widest text-text-light uppercase font-bold mb-4 flex items-center gap-2">
                       <span className="w-4 h-px bg-border flex shrink-0" /> WHAT'S INSIDE
                    </div>
                    {bundle.products.map((p, i) => (
                      <div key={i} className="flex items-center gap-3 text-text-mid bg-cream/30 p-3 rounded-xl border border-border/30 hover:bg-cream transition-colors">
                        <CheckCircle size={16} className="text-sage" />
                        <span className="text-sm font-medium">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-border mt-auto">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-4xl font-bold text-saffron">₹{bundle.price}</span>
                        <span className="text-base text-text-light line-through decoration-saffron/30">₹{bundle.original}</span>
                      </div>
                      <span className="text-[10px] text-sage font-bold tracking-widest uppercase mt-1">Special Bundle Price</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => {
                      // Logic would ideally add all items, but for now we follow simple bundle pattern
                      showToast(`Bundle "${bundle.name}" added to cart`);
                    }}
                    className="w-full btn-primary py-5 text-sm flex items-center justify-center gap-3 rounded-2xl shadow-xl shadow-saffron/20 transition-all font-bold tracking-widest group"
                  >
                    <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" /> 
                    BUY COMPREHENSIVE KIT
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section specifically for bundles */}
        <div className="mt-24 bg-deep-green text-white p-12 md:p-20 rounded-[40px] text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
          <div className="relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Why opt for a Bundle?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              {[
                { title: "SYNERGISTIC EFFICACY", desc: "Ayurvedic products work best when combined correctly to address root causes and symptoms simultaneously." },
                { title: "FULL TREATMENT CYCLE", desc: "Our bundles provide the complete duration of treatment required for sustainable results and recovery." },
                { title: "UNBEATABLE VALUE", desc: "Receive the pharmaceutical wisdom of our expert Vaidyas at up to 30% lower than individual prices." }
              ].map((benefit, i) => (
                <div key={i} className="space-y-4">
                  <div className="font-display text-xs font-bold tracking-[3px] text-saffron-light">{benefit.title}</div>
                  <p className="text-white/70 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 pt-16 border-t border-white/10">
              <p className="font-serif text-xl italic mb-8">"Let food be thy medicine and medicine be thy food, bundled for your ease."</p>
              <button 
                onClick={() => navigate('/contact')}
                className="font-display text-xs font-bold tracking-[4px] text-saffron-light hover:text-white transition-colors uppercase underline underline-offset-8"
              >
                CONSULT OUR DOCTORS BEFORE BUYING
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
