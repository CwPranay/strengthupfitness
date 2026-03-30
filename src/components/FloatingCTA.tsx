
"use client";

import { MessageCircle, Phone } from "lucide-react";

export function FloatingCTA() {
  return (
    <>
      {/* Floating WhatsApp for all devices */}
      <a
        href="https://wa.me/918879741567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform md:bottom-10"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-8 h-8 fill-white" />
      </a>

      {/* Sticky Call CTA on mobile only */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-primary z-[70] flex shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
        <a 
          href="tel:8879741567" 
          className="flex-1 flex items-center justify-center space-x-3 text-background font-black uppercase tracking-widest italic"
        >
          <Phone className="w-6 h-6 fill-background" />
          <span>Call Us Now</span>
        </a>
      </div>
    </>
  );
}
