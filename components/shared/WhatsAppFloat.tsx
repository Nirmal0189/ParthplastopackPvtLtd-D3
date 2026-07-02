'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hello%20Parth%20Plasto%20Pack%2C%20I%27m%20interested%20in%20your%20packaging%20products.%20Please%20share%20details."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors">
        <MessageCircle size={24} fill="white" />
      </div>

      {/* Tooltip */}
      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="glass-strong rounded-lg px-3 py-2 text-sm font-medium text-dark whitespace-nowrap shadow-lg">
          Chat with us!
        </div>
      </div>
    </motion.a>
  );
}
