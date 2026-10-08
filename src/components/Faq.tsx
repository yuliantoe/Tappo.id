import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apakah semua smartphone pelanggan bisa menggunakan tappo.id?',
      a: 'Ya! Untuk iPhone (iPhone 7 hingga generasi terbaru) dan hampir semua smartphone Android menengah hingga flagship sudah memiliki fitur NFC bawaan aktif otomatis. Khusus smartphone model lama yang belum memiliki sensor NFC, pelanggan tetap dapat memindai Dynamic QR Code resolusi tinggi yang tercetak di standee menggunakan kamera biasa.',
    },
    {
      q: 'Apakah standee ini membutuhkan baterai atau harus dicharge listrik?',
      a: 'Sama sekali TIDAK membutuhkan baterai ataupun listrik! Chip NFC menggunakan teknologi pasif induksi elektromagnetik yang ditenagai oleh gelombang radio smartphone pelanggan saat didekatkan. Standee akan berfungsi selamanya tanpa perlu perawatan baterai.',
    },
    {
      q: 'Bagaimana jika nanti link Google Maps, akun sosmed, atau nomor WhatsApp saya berganti?',
      a: 'Tenang saja! Khusus paket Business Pro dan Multi-Cabang, kami menyediakan dashboard Dynamic Link gratis. Anda bisa mengubah tautan tujuan (misal ganti dari Google Review ke link promo WhatsApp atau ganti URL jika toko pindah lokasi) kapan saja tanpa perlu mencetak kartu atau membeli standee baru.',
    },
    {
      q: 'Berapa lama proses pembuatan standee custom dengan logo usaha saya?',
      a: 'Proses produksi memakan waktu 1 hingga 2 hari kerja setelah Anda mengonfirmasi desain mockup yang dikirimkan oleh tim grafis kami via WhatsApp. Setelah selesai, produk langsung dikirim dengan bubble wrap tebal dan asuransi pengiriman.',
    },
    {
      q: 'Apakah standee aman dibersihkan dengan cairan pembersih meja atau disemprot alkohol?',
      a: 'Sangat aman! Material akrilik dan kayu solid kami dilapisi coating proteksi anti gores dan anti air (waterproof). Standee tahan terhadap tumpahan kuah makanan, kopi, sirup, serta aman dibersihkan dengan lap sanitizer setiap hari.',
    },
    {
      q: 'Bagaimana cara pemesanan dan pengiriman data toko saya?',
      a: 'Cukup klik tombol "Pesan Sekarang" atau "Pesan via WhatsApp", lalu kirimkan Nama Bisnis dan Link Google Maps / WhatsApp / Media Sosial Anda ke CS kami. Tim kami akan menyiapkan mockup preview sebelum dicetak.',
    },
  ];

  return (
    <section data-od-id="faq-section" className="py-16 lg:py-24 bg-[#fffbf8] border-t border-orange-100/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#ff5722] mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="h-4 w-4" />
            <span>Tanya Jawab Seputar Produk</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Pertanyaan yang <span className="text-[#ff5722]">Sering Diajukan</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm">
            Semua hal yang perlu Anda ketahui sebelum melengkapi meja usaha Anda dengan tappo.id.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-orange-50/40 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#ff5722] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
