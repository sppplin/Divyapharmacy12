/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DrawerContextType {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const openCart = () => { setIsCartOpen(true); setIsCheckoutOpen(false); };
  const closeCart = () => setIsCartOpen(false);
  
  const openCheckout = () => { setIsCheckoutOpen(true); setIsCartOpen(false); };
  const closeCheckout = () => setIsCheckoutOpen(false);

  return (
    <DrawerContext.Provider value={{ 
      isCartOpen, openCart, closeCart, 
      isCheckoutOpen, openCheckout, closeCheckout 
    }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
}
