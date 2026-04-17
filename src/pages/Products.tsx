/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  ChevronRight, 
  Filter, 
  Search, 
  Grid2X2, 
  List, 
  ChevronDown,
  Star,
  CheckCircle,
  X,
  Plus
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function Products() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchesCat && matchesSearch && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'a-z') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy, priceRange]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
    setPriceRange([0, 5000]);
  };

  return (
    <div className="bg-warm-white min-h-screen">
      {/* Top Banner Static */}
      <div className="bg-deep-green h-[260px] md:h-[340px] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://static.wixstatic.com/media/7fa905_a72e7fd972044735820c213f2e8ab26f~mv2.jpg" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.5]"
            alt="Product Banner"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-deep-green/60 to-warm-white/20" />
        </div>
        
        <div className="relative h-full z-10 flex flex-col items-center justify-center text-center px-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-saffron-light/60 font-display text-[10px] tracking-[4px] uppercase mb-4"
          >
            <Link to="/" className="hover:text-saffron-light transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-saffron-light">All Products</span>
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white mb-2 leading-tight"
          >
            Divya Medicine
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-devanagari text-2xl text-saffron-light/80"
          >
            शुद्ध और प्रामाणिक जड़ी-बूटियाँ
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters - Responsive */}
          <aside className={`lg:w-1/4 fixed lg:relative inset-0 z-[100] lg:z-auto bg-white lg:bg-transparent transition-transform duration-300 lg:translate-x-0 ${showFiltersMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
            <div className="h-full lg:h-auto overflow-y-auto lg:overflow-visible p-6 lg:p-0">
              <div className="flex items-center justify-between mb-8 lg:hidden">
                <h3 className="font-serif text-2xl font-bold">Filters</h3>
                <button onClick={() => setShowFiltersMobile(false)}><X size={24} /></button>
              </div>

              {/* Categories */}
              <div className="mb-10 space-y-6">
                <div className="flex items-center justify-between group cursor-pointer">
                  <h4 className="font-display text-[11px] font-bold tracking-[3px] text-text-dark uppercase">Categories</h4>
                  <ChevronDown size={14} className="text-text-light" />
                </div>
                <div className="space-y-4">
                  <button 
                    onClick={() => setSelectedCategory('all')}
                    className={`flex items-center justify-between w-full text-sm font-medium transition-colors ${selectedCategory === 'all' ? 'text-saffron' : 'text-text-mid hover:text-saffron'}`}
                  >
                    All Products
                    <span className="text-[10px] bg-cream px-2 py-0.5 rounded-full">{PRODUCTS.length}</span>
                  </button>
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center justify-between w-full text-sm font-medium transition-colors ${selectedCategory === cat.id ? 'text-saffron' : 'text-text-mid hover:text-saffron'}`}
                    >
                      {cat.name}
                      <span className="text-[10px] bg-cream px-2 py-0.5 rounded-full">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-10 space-y-6">
                <h4 className="font-display text-[11px] font-bold tracking-[3px] text-text-dark uppercase">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-cream border border-border rounded-lg p-2">
                       <span className="text-[10px] text-text-light block uppercase tracking-widest font-bold mb-1">From</span>
                       <span className="font-bold text-sm">₹0</span>
                    </div>
                    <div className="flex-1 bg-cream border border-border rounded-lg p-2">
                       <span className="text-[10px] text-text-light block uppercase tracking-widest font-bold mb-1">To</span>
                       <span className="font-bold text-sm">₹5000</span>
                    </div>
                  </div>
                  <input 
                    type="range" min="0" max="5000" step="100" 
                    className="w-full h-1.5 bg-cream rounded-lg appearance-none cursor-pointer accent-saffron"
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  />
                </div>
              </div>

              {/* Best Seller Section Added to Match UI Image */}
              <div className="mb-10 space-y-6">
                <h4 className="font-display text-[11px] font-bold tracking-[3px] text-text-dark uppercase">Best Seller</h4>
                <div className="space-y-4">
                  {PRODUCTS.slice(0, 3).map(p => (
                    <Link key={p.handle} to={`/product/${p.handle}`} className="flex items-center gap-4 group">
                      <div className="w-16 h-16 bg-cream rounded-xl overflow-hidden shrink-0 border border-border group-hover:border-saffron transition-all">
                        <img src={p.img} alt={p.name} className="w-full h-full object-contain p-2" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-text-dark line-clamp-1 group-hover:text-saffron transition-colors uppercase tracking-wider">{p.name}</h5>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-bold text-saffron text-xs">₹{p.price}</span>
                          {p.mrp && <span className="text-[10px] text-text-light line-through decoration-saffron/20">₹{p.mrp}</span>}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

               {/* Availability */}
               <div className="mb-10 space-y-6">
                <h4 className="font-display text-[11px] font-bold tracking-[3px] text-text-dark uppercase">Availability</h4>
                <div className="space-y-3">
                  {['In Stock', 'Includes Offers'].map(item => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 border border-border rounded flex items-center justify-center group-hover:border-saffron transition-colors">
                        <div className="w-2.5 h-2.5 bg-saffron rounded-sm opacity-0 group-hover:opacity-20" />
                      </div>
                      <span className="text-sm text-text-mid">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset */}
              <button 
                onClick={resetFilters}
                className="w-full py-4 border-2 border-text-dark text-text-dark font-display text-[10px] font-bold tracking-[4px] uppercase hover:bg-text-dark hover:text-white transition-all rounded-xl mb-12"
              >
                Clear All filters
              </button>

              {/* Promo Card */}
              <div className="p-8 bg-sage rounded-[32px] text-white relative overflow-hidden shadow-xl shadow-sage/10">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 -mr-12 -mt-12 rounded-full" />
                <h4 className="font-serif text-2xl font-bold mb-2">35% OFF</h4>
                <p className="text-white/70 text-[10px] tracking-widest font-bold uppercase mb-6">On All Wellness Kits</p>
                <Link to="/products" className="inline-flex items-center gap-2 font-display text-[10px] tracking-widest font-bold uppercase hover:gap-4 transition-all">
                  Shop Now <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content Side */}
          <div className="lg:w-3/4">
            
            {/* Toolbar */}
            <div className="bg-white border border-border rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setShowFiltersMobile(true)}
                  className="lg:hidden flex items-center gap-2 font-display text-[10px] font-bold tracking-widest text-text-dark uppercase"
                >
                  <Filter size={16} /> Filters
                </button>
                <div className="hidden sm:flex items-center gap-2 text-text-light font-display text-[10px] font-bold tracking-widest uppercase">
                   Showing <span className="text-text-dark">{filteredProducts.length}</span> of {PRODUCTS.length} products
                </div>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="flex-1 sm:flex-initial relative group">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light group-focus-within:text-saffron transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search medicines..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-cream rounded-xl pl-12 pr-4 py-3 text-sm focus:border-saffron border border-transparent outline-none"
                  />
                </div>
                <div className="flex items-center bg-cream rounded-xl p-1 shrink-0">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-saffron' : 'text-text-light hover:text-text-dark'}`}
                  >
                    <Grid2X2 size={18} />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-saffron' : 'text-text-light hover:text-text-dark'}`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8' : 'space-y-6'}>
                {filteredProducts.map((p) => (
                  <motion.div 
                    layout
                    key={p.handle}
                    className={`bg-white rounded-2xl md:rounded-[32px] overflow-hidden border border-border group hover:shadow-2xl hover:shadow-saffron/5 transition-all duration-500 flex ${viewMode === 'list' ? 'flex-row items-center' : 'flex-col'}`}
                  >
                    {/* Image Area */}
                    <Link to={`/product/${p.handle}`} className={`relative bg-cream/30 overflow-hidden flex items-center justify-center ${viewMode === 'list' ? 'w-[120px] h-[120px] md:w-[240px] md:h-[240px]' : 'aspect-square'}`}>
                      <img 
                        src={p.img} 
                        alt={p.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                      />
                      {p.mrp && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-[9px] font-bold px-2 py-1 rounded-full shadow-lg">
                           Save {Math.round(((p.mrp - p.price) / p.mrp) * 100)}%
                        </div>
                      )}
                    </Link>

                    {/* Info Area */}
                    <div className={`p-4 md:p-8 flex flex-col h-full ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="mb-auto">
                        <div className="flex items-center gap-1 mb-2">
                           {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-saffron text-saffron" />)}
                           <span className="text-[9px] text-text-light font-bold translate-y-0.5 ml-1">(4.8)</span>
                        </div>
                        <Link to={`/product/${p.handle}`} className="block font-serif text-sm md:text-xl font-bold text-text-dark mb-1 group-hover:text-saffron transition-colors line-clamp-2 md:line-clamp-1">
                          {p.name}
                        </Link>
                        <div className="flex items-center gap-1.5 text-sage mb-3">
                          <CheckCircle size={10} />
                          <span className="text-[10px] md:text-xs font-medium truncate uppercase tracking-widest">{p.category}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
                        <div className="flex flex-col">
                          <span className="font-display text-lg md:text-2xl font-bold text-saffron">₹{p.price}</span>
                          {p.mrp && <span className="text-[10px] md:text-sm text-text-light line-through decoration-saffron/20 group-hover:decoration-saffron/50 transition-all">₹{p.mrp}</span>}
                        </div>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            addToCart(p, 1);
                            showToast(`${p.name} added to cart`);
                          }}
                          className={`${viewMode === 'list' ? 'px-8' : 'w-10 h-10 md:w-14 md:h-14'} bg-cream text-deep-green border border-border rounded-xl md:rounded-2xl flex items-center justify-center hover:bg-saffron hover:text-white hover:border-saffron transition-all group/btn`}
                        >
                          {viewMode === 'list' ? <span className="font-display text-[10px] font-bold tracking-[3px] uppercase">Add to Cart</span> : <Plus size={20} className="group-hover/btn:scale-125 transition-transform" />}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-32 text-center bg-cream/40 rounded-[40px] border border-dashed border-border">
                  <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mx-auto mb-8 text-text-light">
                    <Search size={40} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold mb-4">No Medicines Found</h3>
                  <p className="text-text-mid mb-8 max-w-sm mx-auto">We couldn't find any products matching your current filters. Try resetting your search or price range.</p>
                  <button onClick={resetFilters} className="btn-primary px-10 py-4 font-bold tracking-widest text-xs">RESET ALL FILTERS</button>
              </div>
            )}
            
            {/* Newsletter Mini */}
            <div className="mt-20 p-8 md:p-16 bg-cream rounded-[40px] border border-border overflow-hidden relative group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-saffron/10 rounded-full group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                  <span className="font-display text-[10px] tracking-[4px] font-bold text-saffron uppercase mb-2 block">Stay Inspired</span>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-text-dark">Pure Wellness in Your Inbox</h3>
                  <p className="text-text-mid max-w-sm text-sm">Join our herbal community for exclusive health tips, Vedic wisdom, and early access to new formulations.</p>
                </div>
                <div className="flex-1 w-full relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white border border-border rounded-full py-5 px-8 outline-none focus:border-saffron shadow-sm"
                  />
                  <button className="absolute right-2 top-2 bottom-2 bg-text-dark text-white px-10 rounded-full font-display text-[10px] font-bold tracking-[4px] uppercase hover:bg-saffron transition-all">Join</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
