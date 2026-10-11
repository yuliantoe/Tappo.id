import React from 'react';
import { Star, ShieldCheck, Truck } from 'lucide-react';

interface FooterProps {
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderModal }) => {
  return (
    <footer data-od-id="footer" className="border-t border-slate-200 bg-slate-50/70 pt-16 pb-24 lg:pb-16 text-xs text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Col 1: Wordmark & Info */}
          <div className="space-y-4 md:col-span-1">
            <a href="#" className="font-display text-[26px] font-black tracking-tight text-slate-900 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff5722] to-[#ff3d00] flex items-center justify-center text-white shadow-xs shrink-0">
                {/* NFC Contactless Logo */}
                <svg
                  className="w-5 h-5 text-white"
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
              <div className="flex items-center gap-1.5">
                <span>Tappo<span className="text-[#ff5722]">.id</span></span>
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-orange-100 text-[#ff5722]">
                  NFC
                </span>
              </div>
            </a>
            <p className="text-slate-500 text-xs leading-relaxed">
              Pelopor perangkat hardware Smart NFC & Dynamic QR Code untuk akselerasi ulasan Google Maps bintang 5 dan follower media sosial bisnis di Indonesia.
            </p>
            <div className="flex items-center gap-1.5 text-amber-500">
              <Star className="h-4 w-4 fill-amber-500" />
              <span className="text-slate-900 font-bold">4.9/5</span>
              <span className="text-slate-400">(3.400+ unit terpasang)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="font-bold text-slate-900 uppercase text-[11px] tracking-wider">
              Eksplorasi Fitur
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#simulator" className="hover:text-[#ff5722] transition-colors">
                  Simulator Tap Smartphone
                </a>
              </li>
              <li>
                <a href="#customizer" className="hover:text-[#ff5722] transition-colors">
                  Preview Desain & Logo Toko
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#ff5722] transition-colors">
                  Integrasi Google, WA & Sosmed
                </a>
              </li>
              <li>
                <a href="#solusi" className="hover:text-[#ff5722] transition-colors">
                  Alur & Cara Kerja
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-[#ff5722] transition-colors">
                  Studi Kasus & Testimoni
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Solusi Bisnis */}
          <div className="space-y-3">
            <div className="font-bold text-slate-900 uppercase text-[11px] tracking-wider">
              Solusi Industri
            </div>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-700">Kafe, Coffee Shop & Restoran</span>
              </li>
              <li>
                <span className="text-slate-700">Barbershop, Salon & Nail Art</span>
              </li>
              <li>
                <span className="text-slate-700">Klinik Kecantikan & Dokter Gigi</span>
              </li>
              <li>
                <span className="text-slate-700">Hotel, Villa & Homestay</span>
              </li>
              <li>
                <span className="text-slate-700">Car Wash, Bengkel & Showroom</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Kepercayaan & Jaminan */}
          <div className="space-y-3">
            <div className="font-bold text-slate-900 uppercase text-[11px] tracking-wider">
              Jaminan & Pengiriman
            </div>
            <div className="space-y-2 text-slate-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Garansi Resmi 1 Tahun Ganti Baru</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-[#ff5722] shrink-0" />
                <span>Kirim Seluruh Indonesia via JNE/SiCepat/J&T</span>
              </div>
            </div>
            <div className="pt-2 space-y-2">
              <button
                onClick={onOpenOrderModal}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-orange-50 text-[#ff5722] font-bold text-xs border border-orange-200 shadow-xs transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <span>Konsultasi Pemesanan</span>
              </button>
              <div className="text-[11px] text-slate-500 text-center">
                <span>Tersedia di: </span>
                <span className="font-bold text-[#EE4D2D]">Shopee</span> · 
                <span className="font-bold text-[#03AC0E]"> Tokopedia</span> · 
                <span className="font-bold text-slate-900"> TikTok</span> · 
                <span className="font-bold text-[#25D366]"> WA</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Quiet Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} tappo.id. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-700 transition-colors">Privasi & Keamanan Data</span>
            <span>·</span>
            <span className="hover:text-slate-700 transition-colors">Ketentuan Layanan</span>
            <span>·</span>
            <span className="hover:text-slate-700 transition-colors">Bebas Biaya Langganan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
