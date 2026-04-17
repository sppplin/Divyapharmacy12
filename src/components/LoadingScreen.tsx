/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center p-6"
    >
      <div className="relative">
        {/* Decorative Pulsing Ring */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.5, opacity: [0, 0.2, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeOut" 
          }}
          className="absolute inset-0 bg-saffron rounded-full blur-2xl"
        />
        
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="w-24 h-24 mb-6">
            <img 
              src="https://divyayoga.com/wp-content/uploads/2022/03/Logo.webp" 
              alt="Divya Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="text-center">
            <motion.h2 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-xl font-bold text-text-dark tracking-widest uppercase"
            >
              Divya Pharmacy
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="font-devanagari text-lg text-saffron mt-1"
            >
              दिव्य फार्मेसी
            </motion.div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-12 w-48 h-[2px] bg-border relative overflow-hidden rounded-full">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-saffron"
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.2 }}
            className="mt-6 font-display text-[9px] tracking-[4px] text-text-light uppercase"
          >
            Ancient Wisdom · Modern Standards
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
