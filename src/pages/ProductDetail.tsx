/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  ArrowLeft, 
  Star, 
  Plus, 
  Minus, 
  CheckCircle, 
  Truck, 
  ShieldCheck, 
  Package,
  Share2,
  Heart,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS, REVIEWS } from '../constants';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function ProductDetail() {
  const { handle } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  
  const product = PRODUCTS.find(p => p.handle === handle);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [handle]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-text-dark mb-4">Product Not Found</h2>
        <p className="text-text-light mb-8">The Ayurvedic formulation you're looking for might have been moved.</p>
        <Link to="/" className="btn-primary">BACK TO HOME</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, qty);
    showToast(`${product.name} added to cart`);
  };

  return (
    <div className="bg-warm-white min-h-screen">
      {/* Breadcrumbs & Navigation */}
      <div className="max-w-[1300px] mx-auto px-6 py-6 border-b border-border">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-text-mid hover:text-saffron transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="font-display text-[11px] tracking-widest uppercase font-bold">Back</span>
          </button>
          <div className="flex items-center gap-4">
            <button className="text-text-mid hover:text-saffron transition-colors"><Share2 size={18} /></button>
            <button className="text-text-mid hover:text-saffron transition-colors"><Heart size={18} /></button>
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Image Gallery Area */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-square bg-[#F5EED8] rounded-3xl p-8 md:p-16 flex items-center justify-center sticky top-28 shadow-inner border border-border/30">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={product.img} 
                alt={product.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              {product.badge && (
                <div className={`absolute top-6 left-6 font-display text-[10px] tracking-[3px] px-3 py-2 rounded-sm uppercase text-white shadow-xl ${product.badge === 'gold' ? 'bg-gold' : 'bg-saffron'}`}>
                  {product.badgeText}
                </div>
              )}
            </div>
            
            {/* Trust Badges - Desktop only next to image */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl">
                <ShieldCheck size={20} className="text-deep-green" />
                <span className="text-[10px] font-display font-bold tracking-wider text-text-dark uppercase">QC Tested</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-border rounded-xl">
                <Truck size={20} className="text-deep-green" />
                <span className="text-[10px] font-display font-bold tracking-wider text-text-dark uppercase">Fast Shipping</span>
              </div>
            </div>
          </div>

          {/* Product Info Area */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="font-display text-[10px] tracking-[4px] text-saffron uppercase font-bold">{product.vendor}</div>
                <div className="w-1.5 h-1.5 rounded-full bg-border" />
                <div className="font-display text-[10px] tracking-[4px] text-text-light uppercase">{product.type}</div>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-dark leading-tight mb-2">
                {product.name}
              </h1>
              <div className="font-devanagari text-2xl text-sage mb-6">{product.hindi}</div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-saffron/10 rounded-full border border-saffron/20">
                  <Star size={16} className="text-gold fill-gold" />
                  <span className="font-display text-sm font-bold text-saffron">{product.rating}</span>
                </div>
                <span className="text-sm text-text-light font-medium">{product.reviews} Verified Reviews</span>
              </div>
            </div>

            <div className="flex items-baseline gap-6">
              <div className="flex flex-col">
                <span className="font-display text-4xl font-bold text-saffron">₹{product.price}</span>
                <span className="text-sm text-text-light font-medium">Incl. of all taxes</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl text-text-light line-through decoration-saffron/40">₹{product.mrp}</span>
                <span className="bg-deep-green text-white text-[10px] font-display px-2 py-0.5 rounded tracking-widest uppercase font-bold w-fit mt-1">
                  Save {Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
                </span>
              </div>
            </div>

            {/* Selection Block */}
            <div className="space-y-6 pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-display text-[10px] tracking-widest text-text-light uppercase font-bold">Pack Size</label>
                  <div className="px-4 py-3 bg-white border border-border rounded-xl font-sans text-text-dark font-medium cursor-default">
                    {product.size}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-display text-[10px] tracking-widest text-text-light uppercase font-bold">Category</label>
                  <div className="px-4 py-3 bg-white border border-border rounded-xl font-sans text-text-dark font-medium cursor-default">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center justify-between border-2 border-border rounded-xl px-4 py-4 sm:w-40 bg-white">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-text-mid hover:text-saffron p-1 transition-colors"><Minus size={18} /></button>
                  <span className="font-display text-xl font-bold min-w-[30px] text-center">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="text-text-mid hover:text-saffron p-1 transition-colors"><Plus size={18} /></button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary py-4 text-[11px] tracking-widest flex items-center justify-center gap-3 rounded-xl shadow-2xl shadow-saffron/30 hover:shadow-saffron/50 transition-all active:scale-95"
                >
                  <ShoppingBag size={20} /> ADD TO CART
                </button>
              </div>
            </div>

            {/* Information Tabs */}
            <div className="space-y-6 pt-6 border-t border-border">
              <div className="flex border-b border-border">
                {['details', 'ingredients', 'directions'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-display text-[10px] tracking-[4px] uppercase transition-all relative font-bold ${activeTab === tab ? 'text-saffron' : 'text-text-light hover:text-text-mid'}`}
                  >
                    {tab}
                    {activeTab === tab && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-6 right-6 h-0.5 bg-saffron" />}
                  </button>
                ))}
              </div>
              <div className="text-base leading-relaxed text-text-mid min-h-[100px] animate-in fade-in slide-in-from-top-2 duration-500">
                {activeTab === 'details' && (
                  <p className="bg-cream/40 p-6 rounded-2xl italic border-l-4 border-saffron/50">
                    {product.benefits || product.desc}
                  </p>
                )}
                {activeTab === 'ingredients' && (
                  <div className="bg-white border border-border p-6 rounded-2xl shadow-sm">
                    <p className="font-sans">
                      {product.ingredients || 'Concentrated extracts of purified Ayurvedic herbs processed according to traditional Shastric methods for maximum efficacy and bioavailability.'}
                    </p>
                  </div>
                )}
                {activeTab === 'directions' && (
                  <div className="flex items-start gap-4 p-6 bg-saffron/5 rounded-2xl border border-saffron/10">
                    <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center text-white shrink-0">
                      <CheckCircle size={20} />
                    </div>
                    <p className="font-sans italic">
                      {product.directions || 'Take as directed on the label or consult your Ayurvedic physician. Store in a cool, dry place away from direct sunlight.'}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
              <div className="flex flex-col items-center text-center gap-2 p-4 bg-cream/30 rounded-2xl">
                <CheckCircle size={24} className="text-sage" />
                <span className="text-[9px] font-display tracking-widest font-bold text-text-dark uppercase">Auth.</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 p-4 bg-cream/30 rounded-2xl">
                <Truck size={24} className="text-sage" />
                <span className="text-[9px] font-display tracking-widest font-bold text-text-dark uppercase">Express</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 p-4 bg-cream/30 rounded-2xl">
                <ShieldCheck size={24} className="text-sage" />
                <span className="text-[9px] font-display tracking-widest font-bold text-text-dark uppercase">GMP</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 p-4 bg-cream/30 rounded-2xl">
                <Package size={24} className="text-sage" />
                <span className="text-[9px] font-display tracking-widest font-bold text-text-dark uppercase">Eco</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <section className="bg-white py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="section-tag">Testimonials</span>
              <h2 className="section-title">Verified Reviews</h2>
              <div className="section-hindi">ग्राहकों के अनुभव</div>
            </div>
            <div className="bg-saffron/5 p-4 rounded-xl border border-saffron/10 flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-saffron">{product.rating}</div>
                <div className="text-[10px] font-display tracking-widest uppercase text-text-light font-bold">Avg Rating</div>
              </div>
              <div className="h-10 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <div className="flex gap-0.5 text-gold mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />)}
                </div>
                <div className="text-[10px] font-display tracking-widest uppercase text-text-light font-bold">100% Genuine</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-warm-white p-8 rounded-2xl border border-border relative group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center text-white font-display font-bold text-lg">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-text-dark leading-tight">{review.name}</h4>
                    <span className="text-xs text-text-light">{review.location}</span>
                  </div>
                </div>
                <div className="flex gap-0.5 text-gold mb-4">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-text-mid leading-relaxed italic">"{review.text}"</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-display tracking-widest uppercase text-text-light font-bold">{review.date}</span>
                  <div className="flex items-center gap-2 text-[10px] text-sage font-bold">
                    <CheckCircle size={14} /> VERIFIED PURCHASE
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="bg-cream/40 py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Explore More</span>
            <h2 className="section-title">Related Ayurvedic Formulations</h2>
            <div className="section-hindi">संबंधित आयुर्वेदिक उत्पाद</div>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-6">
            {PRODUCTS.filter(p => p.category === product.category && p.handle !== product.handle).slice(0, 4).map((rp) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={rp.handle} 
                onClick={() => navigate(`/product/${rp.handle}`)}
                className="bg-white border border-border rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer relative shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[3/4] md:aspect-[4/3] bg-gradient-to-br from-[#F5EED8] to-[#EDE4C8] flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={rp.img} 
                    alt={rp.name} 
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out p-1 md:p-4"
                  />
                </div>
                <div className="p-3 md:p-6 flex-1 flex flex-col">
                  <div className="font-display text-[7px] md:text-[9px] tracking-[1.5px] text-saffron uppercase mb-0.5 md:mb-1.5">{rp.vendor} · {rp.type}</div>
                  <h3 className="font-serif text-sm md:text-xl font-bold text-text-dark leading-tight mb-0.5 md:mb-1 transition-colors group-hover:text-saffron truncate md:whitespace-normal">{rp.name}</h3>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-display text-base md:text-2xl font-bold text-saffron">₹{rp.price}</span>
                    <button className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-cream border border-border rounded-full hover:bg-saffron hover:text-white transition-all group/btn">
                      <ArrowRight size={16} className="md:w-5 md:h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
