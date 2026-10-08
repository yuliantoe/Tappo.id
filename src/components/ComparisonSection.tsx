import React from 'react';
import { X, Check } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Kemudahan Pelanggan Memberi Ulasan',
      traditional: 'Pelanggan harus buka Google Maps, ketik nama toko, cari profil, baru tulis ulasan (Banyak yang malas).',
      tappo: 'Cukup 1 Tap HP langsung terbuka form bintang 5 dalam 1 detik. Tanpa repot ketik URL!',
    },
    {
      feature: 'Tingkat Konversi Pelanggan Jadi Reviewer',
      traditional: 'Sangat rendah (Hanya 1% - 3% pelanggan yang benar-benar menulis review saat sampai di rumah).',
      tappo: 'Tinggi (18% - 35% pengunjung langsung memberikan ulasan saat duduk atau membayar di kasir).',
    },
    {
      feature: 'Daya Tahan & Ketahanan Fisik',
      traditional: 'Kertas print mudah lecek, menguning, basah kena kuah/kopi, dan tampak murahan di mata pelanggan.',
      tappo: 'Akrilik cor & kayu solid tahan air, anti minyak, mudah disemprot alkohol desinfektan, awet bertahun-tahun.',
    },
    {
      feature: 'Fleksibilitas Mengganti Tautan Link',
      traditional: 'Jika link promo atau nomor WA berganti, harus cetak ulang kertas dari awal (boros biaya percetakan).',
      tappo: 'Dynamic URL: Link tujuan bisa diubah sewaktu-waktu dari dashboard tanpa perlu beli kartu baru!',
    },
    {
      feature: 'Kesan Brand & Prestise Toko',
      traditional: 'Terlihat seperti warung konvensional biasa tanpa sentuhan teknologi.',
      tappo: 'Terlihat sangat modern, profesional, dan meyakinkan di mata pelanggan generasi modern & turis.',
    },
  ];

  return (
    <section data-od-id="comparison-section" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#ff5722] mb-2">
            Perbandingan Nyata
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Kenapa Standee Kertas Konvensional <span className="text-[#ff5722]">Kalah Telak?</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Mengapa ribuan pemilik kafe, klinik, dan salon beralih ke Smart tappo.id.
          </p>
        </div>

        {/* Table / Grid Comparison */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider">
            <div className="p-4 md:col-span-4 text-slate-600">Parameter Ulasan</div>
            <div className="p-4 md:col-span-4 text-rose-600 border-t md:border-t-0 md:border-l border-slate-200">
              Cara Kertas Biasa / Manual
            </div>
            <div className="p-4 md:col-span-4 text-[#ff5722] border-t md:border-t-0 md:border-l border-slate-200 bg-orange-50/60">
              tappo.id (Smart NFC + QR)
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 sm:gap-4 items-center">
                <div className="md:col-span-4 font-bold text-slate-900">
                  {item.feature}
                </div>

                <div className="md:col-span-4 flex items-start gap-2 text-slate-500 leading-relaxed md:pl-2">
                  <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>

                <div className="md:col-span-4 flex items-start gap-2 text-slate-800 font-semibold leading-relaxed md:pl-2 bg-orange-50/40 md:py-2 md:rounded-xl">
                  <Check className="h-4 w-4 text-[#ff5722] shrink-0 mt-0.5" />
                  <span>{item.tappo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
