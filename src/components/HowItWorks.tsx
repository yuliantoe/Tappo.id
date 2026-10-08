import React from 'react';
import { Smartphone, Zap, Award, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenOrderModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenOrderModal }) => {
  const steps = [
    {
      number: '01',
      title: 'Letakkan di Meja Kasir atau Meja Makan',
      description:
        'Standee siap pakai langsung saat paket tiba. Desain elegan yang meningkatkan nilai estetika interior tempat usaha Anda.',
      icon: Award,
    },
    {
      number: '02',
      title: 'Pelanggan Menempelkan HP (Tap NFC) atau Scan QR',
      description:
        'Hanya butuh 0.3 detik. Chip NTAG216 langsung memicu sensor smartphone tanpa perlu buka browser atau mengetik alamat URL toko.',
      icon: Smartphone,
    },
    {
      number: '03',
      title: 'Halaman Google Review / WA Terbuka Seketika',
      description:
        'Pelanggan langsung memberikan rating 5 bintang atau chat WhatsApp dalam hitungan detik saat rasa puas mereka sedang di puncaknya.',
      icon: Zap,
    },
  ];

  return (
    <section id="cara-kerja" className="py-16 lg:py-24 border-t border-white/10 bg-[#080c14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Alur Penggunaan Sangat Sederhana
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Cara Kerja: Dari Pelanggan Datang Hingga Review Terposting
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Tanpa aplikasi tambahan, tanpa sambungan bluetooth rumit, dan tanpa baterai sama sekali.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-slate-900/50 border border-white/10 p-7 flex flex-col justify-between hover:border-amber-400/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-amber-400/80">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-medium">
                  {step.number === '01' && '✓ Plug and play tanpa instalasi'}
                  {step.number === '02' && '✓ Kompatibel iOS & Android aktif'}
                  {step.number === '03' && '✓ Pelanggan langsung ulas saat berada di kasir / meja'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-6 py-3 text-xs font-semibold text-white border border-white/15 transition-all cursor-pointer"
          >
            <span>Mulai Pasang di Bisnis Anda Sekarang</span>
            <ArrowRight className="h-4 w-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
