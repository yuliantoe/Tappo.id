import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const testimonials = [
    {
      id: '1',
      name: 'Bramantyo Wicaksono',
      role: 'Head Barista & Co-Founder',
      business: 'Kopi Roastery Senayan',
      location: 'Jakarta',
      avatarColor: 'bg-amber-100 text-amber-700 border-amber-300',
      initials: 'BW',
      stars: 5,
      content:
        'Sebelumnya waiter kami sungkan minta review secara lisan. Setelah pasang standee akrilik di kasir dan meja utama, ulasan Google kami melonjak dari 42 menjadi 648 ulasan dalam 3 bulan!',
    },
    {
      id: '2',
      name: 'dr. Sherly Anggraeni',
      role: 'Medical Director',
      business: 'Glowderma Aesthetic Clinic',
      location: 'Surabaya',
      avatarColor: 'bg-orange-100 text-orange-700 border-orange-300',
      initials: 'SA',
      stars: 5,
      content:
        'Kami pilih varian standee kayu oak untuk meja konsultasi dokter. Pasien yang selesai treatment langsung tap kartu untuk konsultasi lanjutan via WhatsApp. Sangat rapi dan berkelas.',
    },
    {
      id: '3',
      name: 'Reza Fahlevi',
      role: 'Owner & Managing Partner',
      business: 'Kingsman Barbershop',
      location: 'Bandung',
      avatarColor: 'bg-purple-100 text-purple-700 border-purple-300',
      initials: 'RF',
      stars: 5,
      content:
        'Kami tempel di cermin tiap kursi potong rambut. Selesai potong rambut, customer langsung foto cermin dan tap untuk follow Instagram & TikTok kami. Follower bertambah ribuan secara organik!',
    },
    {
      id: '4',
      name: 'Made Suastika',
      role: 'General Manager',
      business: 'Villa Seminyak Sanctuary',
      location: 'Bali',
      avatarColor: 'bg-emerald-100 text-emerald-700 border-emerald-300',
      initials: 'MS',
      stars: 5,
      content:
        'Tamu asing sangat familiar dengan contactless tap. Rating bintang 5 kami di Google Maps dan TripAdvisor tembus sempurna, tamu baru datang dari pencarian lokal setiap minggu.',
    },
  ];

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimoni" data-od-id="testimonials" className="py-16 lg:py-24 bg-[#fff9f5] border-t border-orange-100/60 relative overflow-hidden">
      {/* Decorative dots from reference image */}
      <div className="absolute top-12 left-14 w-3.5 h-3.5 rounded-full bg-orange-400/25 pointer-events-none" />
      <div className="absolute bottom-16 right-16 w-4 h-4 rounded-full bg-orange-400/30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header matching "What Clients Say!" in the reference image */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Apa Kata <span className="text-[#ff5722]">Merchant Kami!</span>
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
            Ratusan pemilik bisnis telah membuktikan kenaikan rating dan kepercayaan pelanggan mereka.
          </p>
        </div>

        {/* Carousel / Cards Grid matching the 3-card layout with left/right arrows from image */}
        <div className="relative flex items-center justify-center gap-4">
          
          {/* Left Arrow Button matching reference */}
          <button
            onClick={handlePrev}
            className="hidden md:flex w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#ff5722] hover:border-[#ff5722] items-center justify-center shadow-md shadow-slate-200/50 transition-all cursor-pointer shrink-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {testimonials.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-200/60 hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Avatar & Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-full border-2 ${item.avatarColor} flex items-center justify-center font-bold text-xs shrink-0`}>
                      {item.initials}
                    </div>
                    <div className="truncate">
                      <h4 className="font-display font-bold text-sm text-slate-900 truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#ff5722] font-semibold truncate">
                        {item.business}
                      </p>
                      <p className="text-[10px] text-slate-400 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        <span>{item.location} · {item.role}</span>
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{item.content}"
                  </p>
                </div>

                {/* Rating 5 Stars matching bottom of cards in reference image */}
                <div className="pt-4 mt-4 border-t border-slate-50 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button matching reference */}
          <button
            onClick={handleNext}
            className="hidden md:flex w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#ff5722] hover:border-[#ff5722] items-center justify-center shadow-md shadow-slate-200/50 transition-all cursor-pointer shrink-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
};
