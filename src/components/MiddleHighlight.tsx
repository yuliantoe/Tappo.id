import React from 'react';
import { PhoneCall, Palette, Truck, CheckCircle2, MessageCircle } from 'lucide-react';

interface MiddleHighlightProps {
  onOpenOrderModal?: () => void;
  onScrollToSimulator?: () => void;
}

export const MiddleHighlight: React.FC<MiddleHighlightProps> = () => {
  const steps = [
    {
      num: '1',
      icon: PhoneCall,
      title: 'Hubungi Kami & Konsultasi',
      desc: 'Kirimkan nama usaha dan link Google Maps / WA / sosmed Anda ke tim kami.',
    },
    {
      num: '2',
      icon: Palette,
      title: 'Desain Mockup Custom Gratis',
      desc: 'Tim grafis kami siapkan preview cetak logo toko Anda sebelum diproduksi.',
    },
    {
      num: '3',
      icon: Truck,
      title: 'Proses Cetak & Kirim Cepat',
      desc: 'Standee diproduksi dengan chip NTAG216 berkualitas tinggi dan dikirim aman.',
    },
    {
      num: '4',
      icon: CheckCircle2,
      title: 'Langsung Pakai di Meja Kasir',
      desc: 'Tanpa baterai, tanpa instalasi aplikasi, pelanggan cukup 1 tap contactless.',
    },
  ];

  return (
    <section id="solusi" data-od-id="solutions-highlight" className="py-16 lg:py-24 bg-[#fff5ee] relative overflow-hidden">
      {/* Decorative floating dots */}
      <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-orange-400/20 pointer-events-none" />
      <div className="absolute bottom-10 left-12 w-3 h-3 rounded-full bg-orange-400/30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Armchair Character Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-950/10 border-4 border-white bg-white">
                <img
                  src="/src/assets/images/illustration_3d_armchair_1791204416701.jpg"
                  alt="3D Character relaxing on orange armchair using tablet"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating speech bubble badge */}
              <div className="absolute -top-3 -right-3 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-orange-100 flex items-center gap-2 text-xs font-bold text-slate-800">
                <MessageCircle className="w-4 h-4 text-[#ff5722] fill-[#ff5722]" />
                <span>1 Tap Review!</span>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Solutions list matching reference image */}
          <div className="lg:col-span-7 flex flex-col items-start text-left lg:pl-6">
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Solusi <span className="text-[#ff5722]">Praktis & Mudah!</span>
            </h2>

            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Kami memahami kesibukan operasional toko Anda. Karena itu, seluruh proses mulai dari setting link hingga cetak kami tangani secara tuntas.
            </p>

            {/* 4 Step Items with Orange Circular Icons */}
            <div className="mt-8 space-y-5 w-full">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff5722] text-white flex items-center justify-center shrink-0 font-bold shadow-md shadow-orange-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-slate-900">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
