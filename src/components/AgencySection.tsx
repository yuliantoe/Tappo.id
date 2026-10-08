import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface AgencySectionProps {
  onOpenOrderModal: () => void;
}

export const AgencySection: React.FC<AgencySectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section data-od-id="tech-advantages" className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Decorative dots from reference image */}
      <div className="absolute top-16 right-20 w-4 h-4 rounded-full bg-orange-400/20 pointer-events-none" />
      <div className="absolute bottom-20 left-16 w-3 h-3 rounded-full bg-orange-400/30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Description and Orange Button */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-slate-900 leading-tight">
              Keunggulan <span className="text-[#ff5722]">Teknologi Kami</span>
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              Kami percaya pada kekuatan reputasi dan data ulasan pelanggan. Perangkat tappo.id dirancang dengan chip NFC resmi NXP NTAG216 berkecepatan tinggi yang merespons dalam sekejap tanpa hambatan koneksi.
            </p>

            <div className="mt-6 space-y-3 w-full text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-orange-100 text-[#ff5722] flex items-center justify-center font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Meningkatkan ulasan sukarela pelanggan dibanding meminta manual secara lisan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-orange-100 text-[#ff5722] flex items-center justify-center font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Material akrilik tebal & kayu solid tahan air, kuah dan minyak</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-orange-100 text-[#ff5722] flex items-center justify-center font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Tautan dinamis bebas diganti kapan saja tanpa cetak ulang</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 rounded-xl bg-[#ff5722] hover:bg-[#ea4a16] px-8 py-3.5 text-xs font-bold text-white shadow-lg shadow-orange-500/25 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <span>Konsultasi Desain & Kustom Logo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 3D desk illustration with growth analytics matching reference image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-950/10 border-4 border-slate-50 bg-white">
                <img
                  src="/src/assets/images/illustration_3d_desk_growth_1791204431892.jpg"
                  alt="3D Desk illustration review growth analytics"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Metric popup card */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                  +400%
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Pertumbuhan Ulasan</div>
                  <div className="text-[11px] text-slate-500">Rata-rata Merchant dalam 60 Hari</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
