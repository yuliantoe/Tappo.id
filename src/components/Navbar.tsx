import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { createWhatsAppUrl, DEFAULT_ORDER_MESSAGE } from '../config/whatsapp';

interface NavbarProps {
  onOpenOrderModal: (packageName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header data-od-id="navbar" className="sticky top-0 z-40 w-full border-b border-orange-100 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand logo with authentic NFC contactless symbol and tappo.id wordmark */}
        <a href="#" className="font-display text-3xl sm:text-[34px] font-black tracking-tight text-slate-900 hover:opacity-95 transition-opacity flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#ff5722] via-[#ff6a3d] to-[#ff3d00] flex items-center justify-center text-white shadow-md shadow-orange-500/25 shrink-0">
            {/* Authentic NFC Contactless Waves Logo */}
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-label="NFC Contactless Logo"
            >
              <path d="M5 8.5a6.5 6.5 0 0 1 0 7" />
              <path d="M8.5 6a10.5 10.5 0 0 1 0 12" />
              <path d="M12 3.5a14.5 14.5 0 0 1 0 17" />
              <path d="M15.5 1a18.5 18.5 0 0 1 0 22" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <span>Tappo<span className="text-[#ff5722]">.id</span></span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-100 text-[#ff5722] border border-orange-200/60">
              NFC
            </span>
          </div>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a href="#beranda" className="text-[#ff5722] hover:text-[#ff5722] transition-colors">
            Beranda
          </a>
          <a href="#layanan" className="hover:text-[#ff5722] transition-colors">
            Layanan
          </a>
          <a href="#solusi" className="hover:text-[#ff5722] transition-colors">
            Cara Kerja
          </a>
          <a href="#simulator" className="hover:text-[#ff5722] transition-colors">
            Simulator & Produk
          </a>
          <a href="#marketplace" className="hover:text-[#ff5722] transition-colors font-bold text-orange-600">
            Harga (49K & 68K)
          </a>
          <a href="#testimoni" className="hover:text-[#ff5722] transition-colors">
            Testimoni
          </a>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="flex items-center gap-3">
          <a
            href={createWhatsAppUrl(DEFAULT_ORDER_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#ff5722] hover:bg-[#ea4a16] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/25 transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4 fill-white" />
            <span>Pesan via WA</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-orange-100 bg-white px-4 py-5 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2.5 text-sm font-semibold text-slate-700">
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#ff5722] transition-colors"
            >
              Beranda
            </a>
            <a
              href="#layanan"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#ff5722] transition-colors"
            >
              Layanan Utama
            </a>
            <a
              href="#solusi"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#ff5722] transition-colors"
            >
              Solusi & Alur
            </a>
            <a
              href="#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#ff5722] transition-colors"
            >
              Simulator & Produk
            </a>
            <a
              href="#marketplace"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg bg-orange-50 text-orange-600 font-bold transition-colors"
            >
              Harga Resmi (49K & 68K)
            </a>
            <a
              href="#testimoni"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#ff5722] transition-colors"
            >
              Apa Kata Klien
            </a>
            <div className="pt-2">
              <a
                href={createWhatsAppUrl(DEFAULT_ORDER_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-[#ff5722] hover:bg-[#ea4a16] py-3 text-xs font-bold text-white shadow-md transition-colors cursor-pointer"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>Pesan via WA</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
