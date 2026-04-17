/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  ShoppingBag, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Zap, 
  Star, 
  BadgeCheck, 
  Truck, 
  ShieldCheck, 
  Clock, 
  Users,
  Send,
  Leaf,
  FlaskConical,
  BookOpen,
  ArrowRight,
  Flame,
  History
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCTS, CATEGORIES, BUNDLES, REVIEWS } from "../constants";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { useModal } from "../context/ModalContext";

export default function Home() {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const { openProductModal } = useModal();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 0,
      title: "Nature's Finest Healing Herbs",
      hindi: "प्रकृति की औषधि — शरीर की शक्ति",
      tag: "Ancient Wisdom · Modern Healing",
      desc: "5,000 years of Ayurvedic science, distilled into pure, authentic formulations from the sacred Haridwar ashram.",
      mobileImg: "https://static.wixstatic.com/media/7fa905_83606040e6b74b6c8e216043fa787ffa~mv2.jpg",
      desktopImg: "https://static.wixstatic.com/media/7fa905_2f0c8f7dad6f4d808491381513cdc46c~mv2.jpg"
    },
    {
      id: 1,
      title: "Swarna Bhasma Enriched Formulas",
      hindi: "स्वर्ण भस्म — आयुर्वेद का सोना",
      tag: "Gold Bhasma Series",
      desc: "Premium gold ash infused remedies for joint pain, respiratory health and immunity — rare Vedic medicine revived.",
      mobileImg: "https://static.wixstatic.com/media/7fa905_45a91fbcb0b648ac9a6fd6e507724b99~mv2.jpg",
      desktopImg: "https://static.wixstatic.com/media/7fa905_a72e7fd972044735820c213f2e8ab26f~mv2.jpg"
    },
    {
      id: 2,
      title: "Complete Ayurvedic Wellness",
      hindi: "संपूर्ण आयुर्वेदिक आरोग्य",
      tag: "Vedic Essentials",
      desc: "Explore our curated collection of ancient remedies and pooja essentials designed for modern physical and spiritual balance.",
      mobileImg: "https://static.wixstatic.com/media/7fa905_83606040e6b74b6c8e216043fa787ffa~mv2.jpg",
      desktopImg: "https://static.wixstatic.com/media/7fa905_82bf72c52dd04dccb75e26274fd2ebc3~mv2.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[600px] bg-black overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map((slide, i) => i === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0">
                <picture>
                  <source media="(max-width: 767px)" srcSet={slide.mobileImg} />
                  <img 
                    src={slide.desktopImg} 
                    alt="" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-60"
                  />
                </picture>
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              
              <div className="relative h-full max-w-[1300px] mx-auto px-6 flex flex-col justify-center gap-4">
                <motion.span 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-display text-[10px] md:text-xs tracking-[4px] text-saffron-light uppercase"
                >
                  {slide.tag}
                </motion.span>
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl"
                >
                  {slide.title}
                </motion.h1>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="font-devanagari text-lg md:text-2xl text-saffron-light"
                >
                  {slide.hindi}
                </motion.div>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-sm md:text-base text-white/70 max-w-lg leading-relaxed mt-2"
                >
                  {slide.desc}
                </motion.p>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex flex-wrap gap-3 mt-6"
                >
                  <Link 
                    to="/products"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <ShoppingBag size={14} /> SHOP NOW
                  </Link>
                  <button className="hidden sm:inline-flex btn-outline text-white border-white/30 hover:border-white">
                    OUR HERITAGE
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 transition-all duration-300 rounded-full ${i === currentSlide ? 'w-8 bg-saffron' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-deep-green py-4 px-6 border-b border-white/5">
        <div className="max-w-[1300px] mx-auto overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-[600px] md:min-w-0 md:justify-center gap-8 md:gap-14 text-[#D4C9A0]">
            <div className="flex items-center gap-3 shrink-0">
              <Truck size={18} className="text-saffron-light" />
              <div className="flex flex-col">
                <span className="font-display text-[9px] tracking-wider text-[#EDE0C0] leading-tight">FREE SHIPPING</span>
                <span className="text-[9px] opacity-70 leading-tight">On orders above ₹499</span>
              </div>
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <div className="flex items-center gap-3 shrink-0">
              <BadgeCheck size={18} className="text-saffron-light" />
              <div className="flex flex-col">
                <span className="font-display text-[9px] tracking-wider text-[#EDE0C0] leading-tight">GMP CERTIFIED</span>
                <span className="text-[9px] opacity-70 leading-tight">Authentic Formulations</span>
              </div>
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <div className="flex items-center gap-3 shrink-0">
              <ShieldCheck size={18} className="text-saffron-light" />
              <div className="flex flex-col">
                <span className="font-display text-[9px] tracking-wider text-[#EDE0C0] leading-tight">SECURE PAYMENT</span>
                <span className="text-[9px] opacity-70 leading-tight">100% Payment Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section id="categories" className="bg-warm-white py-16 md:py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="section-tag">Shop by Condition</span>
            <h2 className="section-title">Heal the Root Cause</h2>
            <div className="section-hindi">रोग नहीं, कारण का उपचार</div>
            <div className="section-divider" />
          </div>
          
          <div className="relative group">
            <button 
              onClick={() => {
                const el = document.getElementById('category-scroll');
                if (el) el.scrollBy({ left: -200, behavior: 'smooth' });
              }}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-border rounded-full shadow-lg flex items-center justify-center text-text-mid hover:text-saffron opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('category-scroll');
                if (el) el.scrollBy({ left: 200, behavior: 'smooth' });
              }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white border border-border rounded-full shadow-lg flex items-center justify-center text-text-mid hover:text-saffron opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
            >
              <ChevronRight size={20} />
            </button>

            <div 
              id="category-scroll"
              className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar pb-4 md:px-4"
            >
              {CATEGORIES.map((cat) => (
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  key={cat.id} 
                  className="flex flex-col items-center gap-3 shrink-0 cursor-pointer text-center w-[100px] md:w-[130px]"
                >
                  <div className="w-[80px] h-[80px] md:w-[110px] md:h-[110px] bg-cream border border-border rounded-full overflow-hidden flex items-center justify-center relative group hover:border-saffron transition-all shadow-sm">
                    <img 
                      src={cat.img} 
                      alt={cat.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display text-[9px] md:text-[10px] font-bold tracking-wider text-text-dark uppercase">{cat.name}</span>
                    <span className="font-devanagari text-[10px] md:text-[11px] text-text-light">{cat.hindi}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-cream py-16 md:py-20 px-0 md:px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-10 md:mb-14 px-6 md:px-0">
            <span className="section-tag">Divya Pharmacy</span>
            <h2 className="section-title">Authentic Formulations</h2>
            <div className="section-hindi">प्रामाणिक आयुर्वेदिक औषधियाँ</div>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-6">
            {PRODUCTS.slice(0, 12).map((product) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={product.handle} 
                onClick={() => navigate(`/product/${product.handle}`)}
                className="bg-white border border-border rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer relative shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {product.badge && (
                  <div className={`absolute top-2 left-2 md:top-4 md:left-4 z-10 font-display text-[7px] md:text-[9px] tracking-[1.5px] px-1.5 py-0.5 md:px-2.5 md:py-1.5 rounded-sm uppercase text-white shadow-lg ${product.badge === 'gold' ? 'bg-gold' : 'bg-saffron'}`}>
                    {product.badgeText}
                  </div>
                )}
                <div className="aspect-[3/4] md:aspect-[4/3] bg-gradient-to-br from-[#F5EED8] to-[#EDE4C8] flex items-center justify-center relative overflow-hidden">
                  <motion.img 
                    layoutId={`product-img-${product.handle}`}
                    src={product.img} 
                    alt={product.name} 
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out p-1 md:p-4"
                  />
                  <div 
                    onClick={(e) => { e.stopPropagation(); addToCart(product); showToast(`${product.name} added to cart`); }}
                    className="absolute -bottom-12 left-0 right-0 bg-deep-green text-white text-center py-3 md:py-4 font-display text-[8px] md:text-[10px] tracking-[2px] group-hover:bottom-0 transition-all duration-300 hover:bg-saffron cursor-pointer"
                  >
                    QUICK ADD
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <div className="font-display text-[7px] md:text-[9px] tracking-[1.5px] text-saffron uppercase mb-0.5 md:mb-1.5">{product.vendor} · {product.type}</div>
                  <h3 className="font-serif text-sm md:text-xl font-bold text-text-dark leading-tight mb-0.5 md:mb-1 transition-colors group-hover:text-saffron truncate md:whitespace-normal">{product.name}</h3>
                  <div className="font-devanagari text-[9px] md:text-sm text-text-light mb-2 md:mb-4">{product.hindi}</div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1 md:gap-2">
                        <span className="font-display text-base md:text-2xl font-bold text-saffron">₹{product.price}</span>
                        <span className="text-[10px] md:text-sm text-text-light line-through decoration-saffron/30">₹{product.mrp}</span>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate(`/product/${product.handle}`); }}
                      className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-cream border border-border rounded-full hover:bg-saffron hover:text-white transition-all group/btn"
                    >
                      <ArrowRight size={16} className="md:w-5 md:h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pooja Essentials Section */}
      <section id="pooja-essentials" className="bg-white py-16 md:py-20 px-0 md:px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-10 md:mb-14 px-6 md:px-0">
            <span className="section-tag">Aastha Series</span>
            <h2 className="section-title">Pooja Essentials</h2>
            <div className="section-hindi">पवित्र पूजन सामग्री — आस्था का प्रतीक</div>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-6">
            {PRODUCTS.filter(p => p.category === 'pooja').map((product) => (
              <motion.div 
                whileHover={{ y: -8 }}
                key={product.handle} 
                onClick={() => navigate(`/product/${product.handle}`)}
                className="bg-white border border-border rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer relative shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {product.badge && (
                  <div className={`absolute top-2 left-2 md:top-4 md:left-4 z-10 font-display text-[7px] md:text-[9px] tracking-[1.5px] px-1.5 py-0.5 md:px-2.5 md:py-1.5 rounded-sm uppercase text-white shadow-lg ${product.badge === 'gold' ? 'bg-gold' : 'bg-saffron'}`}>
                    {product.badgeText}
                  </div>
                )}
                <div className="aspect-[3/4] md:aspect-[4/3] bg-gradient-to-br from-[#F5EED8] to-[#EDE4C8] flex items-center justify-center relative overflow-hidden">
                  <motion.img 
                    layoutId={`product-img-${product.handle}`}
                    src={product.img} 
                    alt={product.name} 
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out p-1 md:p-4"
                  />
                  <div 
                    onClick={(e) => { e.stopPropagation(); addToCart(product); showToast(`${product.name} added to cart`); }}
                    className="absolute -bottom-12 left-0 right-0 bg-deep-green text-white text-center py-3 md:py-4 font-display text-[8px] md:text-[10px] tracking-[2px] group-hover:bottom-0 transition-all duration-300 hover:bg-saffron cursor-pointer"
                  >
                    QUICK ADD
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <div className="font-display text-[7px] md:text-[9px] tracking-[1.5px] text-saffron uppercase mb-0.5 md:mb-1.5">{product.vendor} · {product.type}</div>
                  <h3 className="font-serif text-sm md:text-xl font-bold text-text-dark leading-tight mb-0.5 md:mb-1 transition-colors group-hover:text-saffron truncate md:whitespace-normal">{product.name}</h3>
                  <div className="font-devanagari text-[9px] md:text-sm text-text-light mb-2 md:mb-4">{product.hindi}</div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1 md:gap-2">
                        <span className="font-display text-base md:text-2xl font-bold text-saffron">₹{product.price}</span>
                        <span className="text-[10px] md:text-sm text-text-light line-through decoration-saffron/30">₹{product.mrp}</span>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate(`/product/${product.handle}`); }}
                      className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-cream border border-border rounded-full hover:bg-saffron hover:text-white transition-all group/btn"
                    >
                      <ArrowRight size={16} className="md:w-5 md:h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section id="bundles" className="bg-deep-green py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag text-saffron-light">Value Packs</span>
            <h2 className="section-title text-white">Complete Health Bundles</h2>
            <div className="section-hindi text-saffron-light">संपूर्ण आरोग्य पैकेज — अधिक बचत</div>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BUNDLES.map((bundle) => (
              <motion.div 
                whileHover={{ scale: 1.02 }}
                key={bundle.name} 
                className="bg-white/5 border border-saffron/30 rounded-xl p-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-saffron/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 font-display text-[9px] tracking-widest text-saffron-light uppercase mb-3">
                    <Zap size={10} /> {bundle.tag}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-white mb-2">{bundle.name}</h3>
                  <div className="font-devanagari text-sm text-saffron-light mb-6">{bundle.hindi}</div>
                  
                  <div className="flex mb-6 -space-x-4">
                    {bundle.imgs.map((img, i) => (
                      <img key={i} src={img} referrerPolicy="no-referrer" className="w-16 h-16 rounded-lg border-2 border-deep-green bg-white p-1 object-contain shadow-lg" alt="" />
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {bundle.products.map(p => (
                      <span key={p} className="text-[10px] bg-white/10 text-[#D4C9A0] px-3 py-1 rounded-full border border-white/10">{p}</span>
                    ))}
                  </div>

                  <div className="flex items-end gap-3 mb-6">
                    <span className="font-display text-3xl font-bold text-saffron-light">₹{bundle.price}</span>
                    <span className="text-sm text-[#7A7060] line-through mb-1">₹{bundle.original}</span>
                    <span className="bg-saffron text-white text-[9px] tracking-wider font-display px-2 py-1 rounded-full mb-1">SAVE {bundle.save}%</span>
                  </div>

                  <button className="w-full btn-primary flex items-center justify-center gap-2">
                    <ShoppingBag size={14} /> ADD BUNDLE TO CART
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (The Divya Difference) */}
      <section id="about" className="bg-cream py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-14">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">The Divya Difference</h2>
            <div className="section-hindi">दिव्य फार्मेसी की विशेषता</div>
            <div className="section-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FlaskConical, title: "GMP Certified Manufacturing", desc: "State-of-the-art facility in Haridwar adhering to WHO-GMP and AYUSH standards with rigorous quality control." },
              { icon: Leaf, title: "Ethically Sourced Herbs", desc: "Herbs collected sustainably from Himalayan forests and certified organic farms — never adulterated." },
              { icon: BookOpen, title: "Ancient Textual Authority", desc: "Every formula referenced from Charaka Samhita, Ashtanga Hridayam and other classical Ayurvedic texts." },
              { icon: Users, title: "Expert Vaidya Team", desc: "80+ resident Ayurvedic physicians at Patanjali Yogpeeth — consult freely before purchase." },
              { icon: BadgeCheck, title: "No Artificial Additives", desc: "Zero fillers, binders, artificial colors or preservatives. What's on the label is what's in the bottle." },
              { icon: Truck, title: "Worldwide Shipping", desc: "Authentic Ayurveda delivered across India and to 60+ countries with temperature-controlled packaging." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-warm-white border border-border rounded-lg p-8 text-center hover:border-saffron hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-saffron-pale rounded-full flex items-center justify-center text-saffron mx-auto mb-6">
                  <item.icon size={24} />
                </div>
                <h4 className="font-display text-sm font-semibold text-text-dark mb-3 tracking-wide uppercase">{item.title}</h4>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Summary */}
      <section className="py-24 px-6 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div>
                <span className="section-tag text-deep-green mb-4">Establishing Truth</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                  Who We <span className="text-saffron">Are</span>
                </h2>
                <div className="font-devanagari text-2xl text-sage mb-6">
                  दिव्य योग मन्दिर (ट्रस्ट) — १९९५ से सेवा में
                </div>
              </div>
              
              <div className="space-y-6 text-text-mid leading-relaxed">
                <p>
                  Divya Yog Mandir Trust was founded by Swami Ramdev Ji and Acharya Balkrishna Ji in 1995. Formed to meet the global demand for Yoga and Ayurveda, the Trust provides the necessary framework to advance these ancient sciences for the welfare of humanity.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Yoga Renaissance", "Ayurvedic Science", "Vedic Gurukuls", "National Service"].map(tag => (
                    <span key={tag} className="text-[10px] font-bold tracking-[2px] uppercase bg-cream px-3 py-1 rounded-full text-text-light border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link 
                  to="/about-us" 
                  className="inline-flex items-center gap-6 group"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border border-deep-green/20 flex items-center justify-center group-hover:border-deep-green transition-all duration-500">
                      <div className="w-12 h-12 bg-deep-green text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <History size={20} />
                      </div>
                    </div>
                    {/* Pulsing ring on hover */}
                    <div className="absolute inset-0 rounded-full bg-deep-green/10 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-[10px] font-bold tracking-[3px] text-text-light uppercase group-hover:text-deep-green transition-colors">Our Founding</span>
                    <span className="font-serif text-xl font-bold text-text-dark border-b border-transparent group-hover:border-deep-green transition-all pb-1">Read Our Full History</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&q=80" 
                  alt="Ancient Wisdom" 
                  className="rounded-2xl h-48 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1599443015574-be5fe8a05efd?w=400&q=80" 
                  alt="Herbal Heritage" 
                  className="rounded-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80" 
                  alt="Yoga Practice" 
                  className="rounded-2xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1574635831518-e3979412ec78?w=400&q=80" 
                  alt="Ashram Living" 
                  className="rounded-2xl h-48 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 px-6 bg-cream/30 overflow-hidden">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl">
                <img 
                  src="https://static.wixstatic.com/media/7fa905_b04dae25fc224d2884f855af452655f3~mv2.jpg" 
                  alt="Ancient Herbs" 
                  className="w-full h-auto aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-saffron opacity-10 rounded-full blur-3xl" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-deep-green opacity-5 rounded-full blur-2xl" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-deep-green text-white rounded-full flex items-center justify-center shrink-0">
                    <Star size={24} className="fill-saffron text-saffron" />
                  </div>
                  <div>
                    <h5 className="font-serif text-xl font-bold text-text-dark leading-tight">Authentic Ayurveda</h5>
                    <p className="text-xs text-text-light uppercase tracking-widest font-display font-bold">Haridwar Heritage</p>
                  </div>
                </div>
                <p className="text-sm text-text-mid leading-relaxed italic">
                  "Our mission is to bring the sacred science of life to every household, bridging the gap between ancient wisdom and modern standards of purity."
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="section-tag text-saffron mb-4">The Divya Legacy</span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-dark mb-6 leading-tight">
                  Preserving 5,000 Years of <span className="text-deep-green">Vedic Wisdom</span>
                </h2>
                <div className="font-devanagari text-2xl text-sage mb-8">
                  दिव्य फार्मेसी — ऋषि मुनियों की परंपरा का आधुनिक रूप
                </div>
              </div>

              <div className="space-y-6 text-text-mid leading-relaxed">
                <p>
                  Rooted in the sacred banks of Mother Ganga in Haridwar, Divya Pharmacy stands as a global beacon of authentic Ayurvedic manufacturing. Since its inception under Patanjali Yogpeeth, we have pioneered the revival of traditional herbal medicine.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-cream border border-border rounded-lg flex items-center justify-center text-saffron shrink-0">
                      <Leaf size={18} />
                    </div>
                    <div>
                      <h4 className="font-display text-[10px] font-bold tracking-widest text-text-dark uppercase mb-1">Pure Sourcing</h4>
                      <p className="text-xs">Sustainably collected Himalayan herbs and minerals.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-cream border border-border rounded-lg flex items-center justify-center text-saffron shrink-0">
                      <FlaskConical size={18} />
                    </div>
                    <div>
                      <h4 className="font-display text-[10px] font-bold tracking-widest text-text-dark uppercase mb-1">Modern Science</h4>
                      <p className="text-xs">Global standards at Patanjali Research Institute.</p>
                    </div>
                  </div>
                </div>
                <p>
                  Guided by the vision of Swami Ramdev and Acharya Balkrishna, we provide over 2,000 unique formulations, ranging from classical Churnas and Vatis to premium Swarna Bhasma enriched remedies, all crafted to restore the body's natural balance.
                </p>
              </div>

              <div className="pt-8 text-left">
                <Link 
                  to="/about-us"
                  className="inline-flex items-center gap-6 group bg-white/40 hover:bg-white p-2 pr-10 rounded-full border border-border/50 hover:border-saffron transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-deep-green text-white rounded-full flex items-center justify-center group-hover:bg-saffron transition-all duration-500 shadow-lg">
                      <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform duration-500" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-[10px] font-bold tracking-[4px] text-text-light uppercase group-hover:text-saffron transition-colors">Legacy of Healing</span>
                    <span className="font-serif text-xl font-bold text-text-dark">Read Our Story</span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-br from-deep-green to-[#2a4a2c] py-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        <div className="max-w-2xl mx-auto relative z-10">
          <span className="section-tag text-saffron-light mb-4">Stay Connected</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">Ancient Knowledge, Your Inbox</h2>
          <p className="text-[#A0B8A0] mb-10 leading-relaxed">Get Ayurvedic health tips, product launches and exclusive offers delivered weekly.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-transparent border-b-2 border-saffron/50 py-3 px-1 text-white placeholder-white/40 focus:border-saffron-light outline-none transition-all"
            />
            <button className="btn-primary flex items-center justify-center gap-2">
              <Send size={14} /> SUBSCRIBE
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
