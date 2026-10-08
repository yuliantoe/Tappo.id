import React from 'react';
import { Sparkles } from 'lucide-react';

interface BottomBannerProps {
  onOpenOrderModal?: () => void;
}

export const BottomBanner: React.FC<BottomBannerProps> = () => {
  return (
    <section data-od-id="bottom-banner" className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#ff5722] via-[#ff6b35] to-[#f4511e] p-8 sm:p-12 text-white shadow-2xl shadow-orange-500/20 text-center flex flex-col items-center justify-center">
          
          {/* Subtle decorative background circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-black/10 rounded-full blur-xl pointer-events-none" />

          {/* Text Content */}
          <div className="z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Standee NFC & Dynamic QR Bergaransi</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Siap Melejitkan Ulasan & Omset Toko Anda?
            </h2>
            <p className="mt-2 text-white/90 text-sm sm:text-base">
              Dapatkan perangkat NFC ulasan pintar untuk tempat usaha Anda. Otomatisasi ulasan Google Maps bintang 5 dan percepat pertumbuhan toko Anda sekarang.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
