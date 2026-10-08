import React from 'react';
import { Star, MessageCircle, Share2, QrCode, ArrowRight } from 'lucide-react';

interface ServicesRowProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesRow: React.FC<ServicesRowProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'google-review',
      badgeColor: 'bg-amber-400 text-slate-950',
      icon: Star,
      title: 'Google Review Bintang 5',
      description: 'Mengarahkan pelanggan langsung ke form bintang 5 Google Maps tanpa repot mencari nama toko.',
    },
    {
      id: 'whatsapp-chat',
      badgeColor: 'bg-emerald-500 text-white',
      icon: MessageCircle,
      title: 'WhatsApp Direct',
      description: 'Kirim pesan template otomatis untuk reservasi meja, pemesanan katering, atau customer care kasir.',
    },
    {
      id: 'viral-social',
      badgeColor: 'bg-purple-500 text-white',
      icon: Share2,
      title: 'Viral Social (IG/TikTok)',
      description: 'Tingkatkan jumlah pengikut Instagram, Facebook, dan video viral TikTok toko Anda secara organik.',
    },
    {
      id: 'smart-hub',
      badgeColor: 'bg-[#ff5722] text-white',
      icon: QrCode,
      title: 'Dynamic Smart Hub',
      description: 'Halaman multi-link cerdas yang tautan tujuannya dapat diubah kapan saja tanpa perlu beli kartu baru.',
    },
  ];

  return (
    <section id="layanan" data-od-id="services-row" className="py-16 lg:py-20 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching "We Provide The Best Services" in the reference image */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Kami Hadirkan Layanan <span className="text-[#ff5722]">Terbaik</span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
            Solusi praktis dan otomatis untuk mempercepat pertumbuhan reputasi dan pelanggan bisnis offline Anda.
          </p>
        </div>

        {/* 4 Clean White Cards Grid matching the reference cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Distinct Color Icon Badge Header from the reference image */}
                  <div className={`w-12 h-12 rounded-xl ${service.badgeColor} flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-50">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 group-hover:text-[#ff5722] transition-colors cursor-pointer"
                  >
                    <span>Pelajari Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
