import React from 'react';
import { Star, Zap, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal?: (packageName?: string) => void;
  onScrollToSimulator?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="beranda" data-od-id="hero-section" className="relative overflow-hidden bg-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative floating orange dots/bubbles from the reference image */}
      <div className="absolute top-12 left-10 w-4 h-4 rounded-full bg-orange-400/40 pointer-events-none" />
      <div className="absolute top-28 left-20 w-2.5 h-2.5 rounded-full bg-orange-300/60 pointer-events-none" />
      <div className="absolute top-16 right-24 w-5 h-5 rounded-full bg-orange-400/30 pointer-events-none" />
      <div className="absolute top-44 right-12 w-3 h-3 rounded-full bg-orange-300/50 pointer-events-none" />
      <div className="absolute bottom-16 right-36 w-6 h-6 rounded-full bg-orange-400/25 pointer-events-none" />
      <div className="absolute bottom-24 left-1/3 w-3 h-3 rounded-full bg-orange-400/35 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and CTAs matching reference layout */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Headline with key highlighted word in warm orange */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
              Tingkatkan{' '}
              <span className="text-[#ff5722] underline decoration-orange-200 decoration-wavy decoration-2">
                Ulasan & Rating
              </span>{' '}
              untuk Bisnis Anda
            </h1>

            {/* Subtext description */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Teknologi Smart NFC Tap & QR Standee otomatis mengarahkan pelanggan offline ke Google Review bintang 5, chat WhatsApp, dan media sosial dalam 2 detik tanpa repot mengetik URL.
            </p>

            {/* Official Price & Purchase Channels Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-orange-50/90 via-amber-50/80 to-emerald-50/90 border border-orange-200/80 shadow-xs w-full max-w-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-orange-200/50">
                <span className="text-xs font-bold text-slate-800">Harga Resmi:</span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#ff5722] bg-white px-2.5 py-0.5 rounded-full border border-orange-200 shadow-2xs">
                    Kartu Tap Rp 49K
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#ff5722] bg-white px-2.5 py-0.5 rounded-full border border-orange-200 shadow-2xs">
                    Standee Akrilik Rp 68K
                  </span>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap items-center justify-between gap-1 text-[11px] text-slate-600 font-medium">
                <span>Dapat dibeli di:</span>
                <div className="flex items-center gap-2 font-bold">
                  <a href="#marketplace" className="text-[#EE4D2D] hover:underline">Shopee</a>
                  <span>·</span>
                  <a href="#marketplace" className="text-[#03AC0E] hover:underline">Tokopedia</a>
                  <span>·</span>
                  <a href="#marketplace" className="text-slate-900 hover:underline">TikTok Shop</a>
                  <span>·</span>
                  <a href="#marketplace" className="text-[#25D366] hover:underline">WhatsApp</a>
                </div>
              </div>
            </div>

            {/* Clean unboxed proof markers */}
            <div className="mt-8 pt-6 border-t border-slate-100 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700">
                <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span>3.400+ Merchant Aktif</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <Zap className="h-3.5 w-3.5 text-orange-500" />
                <span>Response &lt; 0.3 Detik</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Garansi 1 Tahun</span>
              </span>
            </div>

          </div>

          {/* Right Column: 3D Illustration matching reference image style */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Subtle warm glow background behind the 3D illustration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/40 via-amber-100/30 to-transparent rounded-3xl blur-2xl -z-10" />

            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src="/src/assets/images/hero_3d_characters_beanbags_1791204397105.jpg"
                alt="3D Illustration customer and business owner using smart NFC review"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-3xl shadow-xl shadow-orange-950/10 hover:scale-102 transition-transform duration-500"
              />

              {/* Floating review rating chip */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3.5 border border-orange-100 shadow-xl shadow-orange-900/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  G
                </div>
                <div>
                  <div className="flex text-amber-400 gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-800">5.0 Star Rating Booster</span>
                </div>
              </div>

              {/* Floating contactless badge */}
              <div className="absolute -top-3 -right-3 bg-white rounded-full px-4 py-2 border border-orange-100 shadow-lg text-[11px] font-bold text-[#ff5722] flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5722] animate-ping" />
                <span>100% Tanpa Baterai</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
