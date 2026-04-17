/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ShoppingBag, 
  Search as SearchIcon, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  Star,
  CheckCircle,
  Truck,
  ShieldCheck,
  Package,
  MapPin,
  CreditCard,
  Gift,
  ArrowLeft,
  Zap
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { useDrawer } from '../context/DrawerContext';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { useToast } from '../context/ToastContext';
import { Link, useNavigate } from 'react-router-dom';
import { BUNDLES } from '../constants';

export default function GlobalComponents() {
  const { selectedProduct, closeProductModal } = useModal();
  const { isCartOpen, closeCart, isCheckoutOpen, openCheckout, closeCheckout } = useDrawer();
  const { isSearchOpen, closeSearch, searchQuery, setSearchQuery, searchResults } = useSearch();
  const { cart, updateQty, removeFromCart, totalItems, totalPrice, addToCart, clearCart } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();
  
  const [modalQty, setModalQty] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [address, setAddress] = useState({ name: '', phone: '', email: '', street: '', city: '', zip: '' });

  const handleAddToCartFromModal = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, modalQty);
      showToast(`${selectedProduct.name} added to cart`);
      closeProductModal();
      setModalQty(1);
    }
  };

  return (
    <>
      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-[1100]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSearch}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-white border-b border-border shadow-2xl px-6 py-4"
            >
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 relative">
                  <SearchIcon size={18} className="text-text-light absolute left-4" />
                  <input 
                    autoFocus
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search medicines..." 
                    className="w-full bg-cream rounded-xl py-2.5 pl-11 pr-11 text-base font-sans outline-none border border-transparent focus:border-saffron transition-all"
                  />
                  <button onClick={closeSearch} className="absolute right-4 text-text-light hover:text-saffron transition-colors">
                    <X size={20} />
                  </button>
                </div>

                <div className="mt-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
                  {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
                      {searchResults.map(p => (
                        <div 
                          key={p.handle}
                          onClick={() => { closeSearch(); navigate(`/product/${p.handle}`); }}
                          className="flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-saffron hover:bg-saffron-pale transition-all cursor-pointer group"
                        >
                          <div className="w-16 h-16 bg-cream rounded-lg overflow-hidden shrink-0">
                            <img src={p.img} alt={p.name} referrerPolicy="no-referrer" className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-serif text-base font-semibold text-text-dark truncate">{p.name}</h4>
                            <div className="font-display text-[9px] text-saffron uppercase tracking-widest">{p.category}</div>
                            <div className="font-display text-sm font-bold text-saffron mt-1">₹{p.price}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : searchQuery.trim() ? (
                    <div className="text-center py-10">
                      <p className="text-text-light">No results found for "{searchQuery}"</p>
                    </div>
                  ) : (
                    <div className="text-center py-10 opacity-40">
                      <SearchIcon size={48} className="mx-auto mb-4" />
                      <p className="font-display text-xs tracking-[4px] uppercase">Search Products</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-[1200]">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCart}
              className="absolute inset-0 bg-black/50"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-warm-white shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-border flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <ShoppingBag size={22} className="text-saffron" />
                  <h2 className="font-serif text-2xl font-bold text-text-dark">Your Cart</h2>
                  <span className="bg-saffron/10 text-saffron px-2 py-0.5 rounded text-xs font-bold">{totalItems}</span>
                </div>
                <button onClick={closeCart} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-cream transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                {cart.length > 0 ? (
                  cart.map(item => (
                    <div key={item.handle} className="flex gap-4 group">
                      <div className="w-20 h-20 bg-cream rounded-lg p-2 shrink-0">
                        <img src={item.img} alt={item.name} referrerPolicy="no-referrer" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2 overflow-hidden">
                          <h3 className="font-serif text-base font-semibold text-text-dark truncate">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.handle)} className="text-text-light hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="text-xs text-text-light">{item.size}</div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-3 border border-border rounded-full px-3 py-1">
                            <button onClick={() => updateQty(item.handle, -1)} className="text-text-mid hover:text-saffron transition-colors"><Minus size={12} /></button>
                            <span className="font-display text-sm min-w-[20px] text-center">{item.qty}</span>
                            <button onClick={() => updateQty(item.handle, 1)} className="text-text-mid hover:text-saffron transition-colors"><Plus size={12} /></button>
                          </div>
                          <div className="font-display text-base font-bold text-saffron">₹{item.price * item.qty}</div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="h-full flex flex-col items-center justify-center gap-4 text-text-light opacity-50">
                    <ShoppingBag size={64} strokeWidth={1} />
                    <p className="font-display text-xs tracking-[4px] uppercase text-center">Your cart is empty</p>
                    <button 
                      onClick={closeCart}
                      className="btn-outline mt-2"
                    >
                      BROWSE PRODUCTS
                    </button>
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 bg-white border-t border-border shrink-0 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-text-mid">
                      <span>Subtotal</span>
                      <span>₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm text-text-mid">
                      <span>Shipping</span>
                      <span className={totalPrice >= 499 ? 'text-deep-green font-bold' : ''}>
                        {totalPrice >= 499 ? 'FREE' : '₹50'}
                      </span>
                    </div>
                    <div className="flex justify-between font-display text-lg font-bold text-text-dark pt-2 border-t border-dashed border-border">
                      <span>Total Amount</span>
                      <span className="text-saffron text-xl">₹{totalPrice + (totalPrice >= 499 ? 0 : 50)}</span>
                    </div>
                  </div>
                  <button 
                    onClick={openCheckout}
                    className="w-full btn-primary flex items-center justify-center gap-3"
                  >
                    PROCEED TO CHECKOUT <ArrowRight size={16} />
                  </button>
                  <p className="text-[10px] text-center text-text-light">
                    Safe & Secure Payments · Pan India Delivery
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[1300] flex items-end md:items-center justify-center overflow-y-auto p-0 md:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProductModal}
              className="absolute inset-0"
            />
            <motion.div 
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-warm-white rounded-t-3xl md:rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[95vh]"
            >
              <button 
                onClick={closeProductModal} 
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur border border-border/50 rounded-full text-text-mid hover:text-saffron transition-all"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 bg-[#F5EED8] p-8 md:p-12 flex items-center justify-center overflow-hidden shrink-0">
                <motion.img 
                  layoutId={`product-img-${selectedProduct.handle}`}
                  src={selectedProduct.img} 
                  alt={selectedProduct.name} 
                  className="w-full h-full max-h-[300px] md:max-h-[400px] object-contain" 
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="space-y-6">
                  <div>
                    <div className="font-display text-[9px] tracking-[3px] text-saffron uppercase mb-2">{selectedProduct.vendor} · {selectedProduct.type}</div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-dark leading-tight">{selectedProduct.name}</h2>
                    <div className="font-devanagari text-lg text-sage mt-1">{selectedProduct.hindi}</div>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-saffron/10 rounded">
                        <Star size={14} className="text-gold fill-gold" />
                        <span className="font-display text-sm font-bold text-saffron">{selectedProduct.rating}</span>
                      </div>
                      <span className="text-sm text-text-light">{selectedProduct.reviews} Verified Reviews</span>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl font-bold text-saffron">₹{selectedProduct.price}</span>
                    <span className="text-lg text-text-light line-through decoration-saffron/40">₹{selectedProduct.mrp}</span>
                    <span className="bg-deep-green text-white text-[10px] font-display px-2 py-1 rounded tracking-wider uppercase font-bold">
                      {Math.round(((selectedProduct.mrp - selectedProduct.price) / selectedProduct.mrp) * 100)}% OFF
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-y border-border py-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-[10px] text-text-light tracking-wider uppercase">Pack Size</span>
                      <span className="font-sans font-medium text-text-dark">{selectedProduct.size}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-[10px] text-text-light tracking-wider uppercase">Category</span>
                      <span className="font-sans font-medium text-text-dark">{selectedProduct.category.charAt(0).toUpperCase() + selectedProduct.category.slice(1)}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex border-b border-border">
                      {['details', 'ingredients', 'directions'].map(tab => (
                        <button 
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-4 py-2 font-display text-[10px] tracking-wider uppercase transition-all relative ${activeTab === tab ? 'text-saffron' : 'text-text-light'}`}
                        >
                          {tab}
                          {activeTab === tab && <motion.div layoutId="tab-active" className="absolute bottom-0 left-4 right-4 h-0.5 bg-saffron" />}
                        </button>
                      ))}
                    </div>
                    <div className="text-sm leading-relaxed text-text-mid animate-in fade-in slide-in-from-top-2 duration-300">
                      {activeTab === 'details' && (
                        <p>{selectedProduct.benefits || selectedProduct.desc}</p>
                      )}
                      {activeTab === 'ingredients' && (
                        <p className="bg-cream/50 p-4 rounded-lg">{selectedProduct.ingredients || 'Pure Ayurvedic herbs as per classical formulation.'}</p>
                      )}
                      {activeTab === 'directions' && (
                        <p className="italic border-l-4 border-saffron/30 pl-4 py-2">{selectedProduct.directions || 'Follow label instructions or consult an Ayurvedic physician.'}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <div className="flex items-center justify-between border-2 border-border rounded-lg px-4 py-3 sm:w-32">
                      <button onClick={() => setModalQty(Math.max(1, modalQty - 1))} className="text-text-mid hover:text-saffron transition-colors"><Minus size={16} /></button>
                      <span className="font-display text-lg font-bold min-w-[24px] text-center">{modalQty}</span>
                      <button onClick={() => setModalQty(modalQty + 1)} className="text-text-mid hover:text-saffron transition-colors"><Plus size={16} /></button>
                    </div>
                    <button 
                      onClick={handleAddToCartFromModal}
                      className="flex-1 btn-primary py-4 text-sm flex items-center justify-center gap-3 rounded-lg shadow-xl shadow-saffron/20"
                    >
                      <ShoppingBag size={18} /> ADD TO CART
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pb-4">
                    <div className="flex items-center gap-2 text-[10px] text-sage">
                      <CheckCircle size={14} /> 100% AUTHENTIC
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-sage">
                      <Truck size={14} /> EXPRESS DELIVERY
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-sage">
                      <ShieldCheck size={14} /> GMP CERTIFIED
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-sage">
                      <Package size={14} /> ECO PACKAGING
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Checkout Modal */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-[1400] flex items-center justify-center p-0 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCheckout}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-warm-white md:rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full md:h-auto md:max-h-[90vh]"
            >
              <div className="p-6 border-b border-border flex items-center justify-between shrink-0 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center text-white">
                    <CheckCircle size={24} />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-text-dark">Checkout</h2>
                </div>
                <button onClick={closeCheckout} className="text-text-mid hover:text-saffron transition-colors">
                  <X size={24} />
                </button>
              </div>

              {!isSuccess ? (
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                  {/* Progress Bar */}
                  <div className="flex items-center mb-10 px-4">
                    {[1, 2, 3].map(step => (
                      <React.Fragment key={step}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${checkoutStep >= step ? 'bg-saffron text-white' : 'bg-cream text-text-light'}`}>
                          {step}
                        </div>
                        {step < 3 && <div className={`flex-1 h-1 mx-2 rounded transition-colors ${checkoutStep > step ? 'bg-saffron' : 'bg-cream'}`} />}
                      </React.Fragment>
                    ))}
                  </div>

                  {checkoutStep === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <h3 className="section-title text-xl text-left mb-4">Shipping Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input 
                          placeholder="Full Name" 
                          className="w-full bg-white border border-border rounded-lg p-3 outline-none focus:border-saffron"
                          value={address.name} onChange={e => setAddress({...address, name: e.target.value})}
                        />
                        <input 
                          placeholder="Phone Number" 
                          className="w-full bg-white border border-border rounded-lg p-3 outline-none focus:border-saffron"
                          value={address.phone} onChange={e => setAddress({...address, phone: e.target.value})}
                        />
                        <div className="md:col-span-2">
                          <input 
                            placeholder="Email Address" 
                            className="w-full bg-white border border-border rounded-lg p-3 outline-none focus:border-saffron"
                            value={address.email} onChange={e => setAddress({...address, email: e.target.value})}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <input 
                            placeholder="Street Address" 
                            className="w-full bg-white border border-border rounded-lg p-3 outline-none focus:border-saffron"
                            value={address.street} onChange={e => setAddress({...address, street: e.target.value})}
                          />
                        </div>
                        <input 
                          placeholder="City" 
                          className="w-full bg-white border border-border rounded-lg p-3 outline-none focus:border-saffron"
                          value={address.city} onChange={e => setAddress({...address, city: e.target.value})}
                        />
                        <input 
                          placeholder="ZIP Code" 
                          className="w-full bg-white border border-border rounded-lg p-3 outline-none focus:border-saffron"
                          value={address.zip} onChange={e => setAddress({...address, zip: e.target.value})}
                        />
                      </div>

                      {/* Bundle Upsell */}
                      <div className="mt-10 p-6 bg-deep-green rounded-2xl text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-saffron opacity-20 -mr-16 -mt-16 rounded-full group-hover:scale-110 transition-transform duration-700" />
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 font-display text-[9px] tracking-widest text-saffron-light uppercase mb-2 font-bold">
                            <Zap size={12} className="fill-saffron" /> Recommended Upgrade
                          </div>
                          <h4 className="font-serif text-xl font-bold mb-1">{BUNDLES[0].name}</h4>
                          <p className="text-xs text-white/70 mb-4 line-clamp-1">Includes {BUNDLES[0].products.join(', ')}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-baseline gap-2">
                              <span className="font-display text-xl font-bold text-saffron-light">₹{BUNDLES[0].price}</span>
                              <span className="text-xs text-white/40 line-through">₹{BUNDLES[0].original}</span>
                            </div>
                            <button className="bg-white text-deep-green px-4 py-2 rounded-lg font-display text-[10px] font-bold tracking-widest hover:bg-saffron hover:text-white transition-all uppercase">
                              Upgrade Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {checkoutStep === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <h3 className="section-title text-xl text-left mb-4">Payment Selection</h3>
                      <div className="space-y-3">
                        {['Cash on Delivery', 'Credit / Debit Card', 'UPI (PhonePe/Google Pay)'].map((method, i) => (
                          <label key={method} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white cursor-pointer hover:border-saffron transition-colors">
                            <input type="radio" name="payment" defaultChecked={i === 0} className="w-5 h-5 accent-saffron" />
                            <div className="flex-1">
                              <div className="font-bold text-text-dark">{method}</div>
                              <div className="text-xs text-text-light">{i === 0 ? 'Pay when you receive the medicines' : 'Secure payment with encryption'}</div>
                            </div>
                            {i === 1 && <CreditCard size={20} className="text-text-light" />}
                          </label>
                        ))}
                      </div>
                      <div className="bg-saffron-pale p-4 rounded-xl flex items-center gap-3">
                        <Gift size={20} className="text-saffron" />
                        <span className="text-sm font-medium text-saffron">Apply promo code for extra 10% OFF</span>
                        <ArrowRight size={16} className="text-saffron ml-auto" />
                      </div>
                    </div>
                  )}

                  {checkoutStep === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <h3 className="section-title text-xl text-left mb-4">Order Summary</h3>
                      <div className="bg-white border border-border rounded-xl p-6 space-y-4">
                        {cart.map(item => (
                          <div key={item.handle} className="flex justify-between items-center text-sm">
                            <span className="text-text-dark">{item.name} × {item.qty}</span>
                            <span className="font-bold">₹{item.price * item.qty}</span>
                          </div>
                        ))}
                        <div className="pt-4 border-t border-dashed border-border flex justify-between font-bold text-lg text-saffron">
                          <span>Final Total</span>
                          <span>₹{totalPrice + (totalPrice >= 499 ? 0 : 50)}</span>
                        </div>
                      </div>
                      <div className="p-4 bg-deep-green/5 rounded-xl flex gap-3">
                        <MapPin size={20} className="text-deep-green shrink-0" />
                        <div className="text-sm">
                          <div className="font-bold text-deep-green">Delivery to:</div>
                          <div className="text-text-mid">{address.name}, {address.street}, {address.city} - {address.zip}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-12 text-center animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-deep-green text-white rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-deep-green/20">
                    <CheckCircle size={48} strokeWidth={2.5} />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-text-dark mb-4">Jai Bharat! Order Placed.</h2>
                  <p className="text-text-light mb-8 max-w-sm">Thank you for choosing Divya Pharmacy. Your healing journey begins. Order ID: #DIVYA-{Math.floor(Math.random() * 90000 + 10000)}</p>
                  <button 
                    onClick={() => { closeCheckout(); setIsSuccess(false); setCheckoutStep(1); }}
                    className="btn-primary"
                  >
                    CONTINUE HEALING
                  </button>
                </div>
              )}

              {!isSuccess && (
                <div className="p-6 bg-white border-t border-border flex gap-4 shrink-0">
                  {checkoutStep > 1 && (
                    <button 
                      onClick={() => setCheckoutStep(prev => prev - 1)}
                      className="w-12 h-12 flex items-center justify-center border border-border rounded-sm text-text-mid hover:text-saffron transition-colors"
                    >
                      <ArrowLeft size={20} />
                    </button>
                  )}
                  <button 
                    disabled={checkoutStep === 1 && (!address.name || !address.phone)}
                    onClick={() => {
                      if (checkoutStep < 3) {
                        setCheckoutStep(prev => prev + 1);
                      } else {
                        setIsSuccess(true);
                        clearCart();
                        showToast('Order confirmed successfully!');
                      }
                    }}
                    className="flex-1 btn-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {checkoutStep === 3 ? 'PLACE SECURE ORDER' : 'CONTINUE TO PAYMENT'} <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
