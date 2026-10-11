import React from 'react';
import { ShoppingBag, MessageCircle, ExternalLink, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { createWhatsAppUrl } from '../config/whatsapp';

interface MarketplaceChannelsProps {
  onOpenOrderModal?: () => void;
}

export const MarketplaceChannels: React.FC<MarketplaceChannelsProps> = ({ onOpenOrderModal }) => {
  const channels = [
    {
      id: 'shopee',
      name: 'Shopee',
      tagline: 'Gratis Ongkir Xtra & Voucher',
      description: 'Pesan melalui marketplace Shopee dengan proteksi garansi pembeli dan opsi COD.',
      badge: 'Populer',
      badgeColor: 'bg-orange-100 text-[#EE4D2D]',
      accentColor: 'border-[#EE4D2D]/30 hover:border-[#EE4D2D] hover:shadow-orange-500/10',
      btnBg: 'bg-[#EE4D2D] hover:bg-[#d83f20] text-white',
      link: 'https://shopee.co.id/search?keyword=tappo.id',
      icon: (
        <div className="w-10 h-10 rounded-2xl bg-[#EE4D2D] text-white flex items-center justify-center shadow-md shadow-orange-500/20 shrink-0 font-display font-black text-lg">
          S
        </div>
      ),
    },
    {
      id: 'tokopedia',
      name: 'Tokopedia',
      tagline: 'Bebas Ongkir & GoPay Cashback',
      description: 'Transaksi aman di Tokopedia dengan verifikasi merchant resmi dan promo berkala.',
      badge: 'Official Store',
      badgeColor: 'bg-emerald-100 text-[#03AC0E]',
      accentColor: 'border-[#03AC0E]/30 hover:border-[#03AC0E] hover:shadow-emerald-500/10',
      btnBg: 'bg-[#03AC0E] hover:bg-[#02950c] text-white',
      link: 'https://www.tokopedia.com/search?q=tappo.id',
      icon: (
        <div className="w-10 h-10 rounded-2xl bg-[#03AC0E] text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0 font-display font-black text-lg">
          T
        </div>
      ),
    },
    {
      id: 'tiktok',
      name: 'TikTok Shop',
      tagline: 'Diskon Live & Checkout Cepat',
      description: 'Temukan etalase produk di TikTok, tonton demo tap real-time, dan klaim kupon diskon live.',
      badge: 'Trending',
      badgeColor: 'bg-slate-100 text-slate-900',
      accentColor: 'border-slate-300 hover:border-slate-900 hover:shadow-slate-500/10',
      btnBg: 'bg-slate-900 hover:bg-slate-800 text-white',
      link: 'https://www.tiktok.com/search?q=tappo.id',
      icon: (
        <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shadow-md shadow-black/20 shrink-0 font-display font-black text-lg">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.14z" />
          </svg>
        </div>
      ),
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp CS',
      tagline: 'Fast Response & Konsultasi Gratis',
      description: 'Chat langsung ke 0851-5974-6119 untuk konsultasi mockup logo toko dan preview link ulasan.',
      badge: 'Direct CS',
      badgeColor: 'bg-emerald-100 text-emerald-800',
      accentColor: 'border-emerald-400/40 hover:border-[#25D366] hover:shadow-emerald-500/15',
      btnBg: 'bg-[#25D366] hover:bg-[#20ba5a] text-white',
      link: createWhatsAppUrl('Halo Admin tappo.id! 👋 Saya ingin beli Kartu Tap NFC (49K) / Standee Akrilik (68K). Mohon info lengkapnya.'),
      icon: (
        <div className="w-10 h-10 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0">
          <MessageCircle className="w-5 h-5 fill-white" />
        </div>
      ),
    },
  ];

  return (
    <section id="marketplace" data-od-id="marketplace-section" className="py-16 bg-[#fffaf5] border-t border-orange-100/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100/90 text-[#ff5722] text-xs font-bold mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tersedia di Marketplace & WhatsApp Resmi</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Pilihan Jalur Pembelian <span className="text-[#ff5722]">Mudah & Aman</span>
          </h2>

          {/* Pricing Highlight Pill */}
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-orange-200/80 shadow-xs">
            <span className="text-xs font-bold text-slate-600">Harga Resmi:</span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-700">Kartu Tap NFC</span>
              <span className="font-display text-sm font-extrabold text-[#ff5722] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                Rp 49.000 (49K)
              </span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-700">Standee Akrilik Meja</span>
              <span className="font-display text-sm font-extrabold text-[#ff5722] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                Rp 68.000 (68K)
              </span>
            </div>
          </div>

          <p className="mt-4 text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
            Dapatkan produk resmi tappo.id di platform e-commerce pilihan Anda dengan promo gratis ongkir atau langsung via WhatsApp admin untuk penyiapan instan ulasan Google bisnis Anda.
          </p>
        </div>

        {/* 4 Marketplace Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {channels.map((ch) => (
            <div
              key={ch.id}
              className={`rounded-3xl bg-white border p-6 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl group ${ch.accentColor}`}
            >
              <div>
                {/* Header card */}
                <div className="flex items-center justify-between mb-4">
                  {ch.icon}
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full ${ch.badgeColor}`}>
                    {ch.badge}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-[#ff5722] transition-colors">
                  {ch.name}
                </h3>
                
                <p className="text-[11px] font-bold text-orange-600 mb-2">
                  {ch.tagline}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {ch.description}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={ch.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-2.5 px-4 text-xs font-bold transition-all shadow-sm active:scale-98 cursor-pointer ${ch.btnBg}`}
                >
                  <span>Beli di {ch.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Guarantee Markers */}
        <div className="mt-10 pt-8 border-t border-orange-100 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-slate-600 font-medium text-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Chip NTAG216 Asli & Bergaransi 1 Tahun</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#ff5722]" />
            <span>Pengiriman Aman ke Seluruh Indonesia</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-indigo-600" />
            <span>Ready Stock Siap Dikirim Setiap Hari</span>
          </div>
        </div>

      </div>
    </section>
  );
};
