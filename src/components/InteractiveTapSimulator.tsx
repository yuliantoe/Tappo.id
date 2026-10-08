import React, { useState } from 'react';
import { TargetPlatform } from '../types';
import { Star, MessageCircle, Instagram, Check, ThumbsUp, MapPin, Send, QrCode, Smartphone, Sparkles } from 'lucide-react';

export const InteractiveTapSimulator: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<TargetPlatform>('google');
  const [selectedHardware, setSelectedHardware] = useState<number>(0);
  const [isTapped, setIsTapped] = useState<boolean>(true);
  const [starCount, setStarCount] = useState<number>(5);
  const [reviewSubmitted, setReviewSubmitted] = useState<boolean>(false);
  const [waMessageSent, setWaMessageSent] = useState<boolean>(false);

  const hardwareExamples = [
    {
      id: 'dual-nfc-qr-black',
      title: 'Kartu Tap NFC & QR - Black Edition',
      badge: 'Desain "Review Us on Google"',
      description: 'Kartu hitam elegan dengan logo Google, 5 bintang emas, ikon Tap your phone NFC di sisi kiri dan Scan QR code di sisi kanan.',
      image: '/src/assets/images/nfc_card_black_google_qr_1791379823355.jpg',
      specs: ['Chip NFC NTAG216 Aktif', 'Dynamic QR Code Presisi', 'Logo Google & 5 Bintang Emas'],
    },
    {
      id: 'dual-nfc-qr-blue',
      title: 'Kartu Tap NFC & QR - Blue Ocean',
      badge: '"Bantu Kami Dengan Google Review"',
      description: 'Model dual tone biru-putih dengan teks bahasa Indonesia ramah pelanggan, dilengkapi simbol Tap your phone NFC dan Scan QR code.',
      image: '/src/assets/images/nfc_card_blue_google_qr_1791379844767.jpg',
      specs: ['Desain Dual Tone Biru Putih', 'Tap Phone NFC + Scan QR Code', 'Tahan Tumpahan Air & Minyak'],
    },
    {
      id: 'acrylic-standee-google',
      title: 'Standee Akrilik Meja Google Review',
      badge: '"Bantu Kami Dengan Google Review"',
      description: 'Standee vertikal akrilik dengan header lengkung biru, logo Google besar, 5 bintang emas, instruksi Tap to Scan NFC dan kode QR meja kasir.',
      image: '/src/assets/images/standee_akrilik_google_bantu_kami_1791380227812.jpg',
      specs: ['Bahan Akrilik Kristal Bening 3mm', 'Desain Resmi "Bantu Kami Dengan Google Review"', 'NFC Tap to Scan + Dynamic QR Code'],
    },
  ];

  const handleTriggerTap = (platform: TargetPlatform) => {
    setSelectedPlatform(platform);
    setIsTapped(false);
    setReviewSubmitted(false);
    setWaMessageSent(false);
    
    setTimeout(() => {
      setIsTapped(true);
    }, 280);
  };

  return (
    <section id="simulator" data-od-id="tap-simulator" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#ff5722] mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contoh Nyata Perangkat & Simulasi</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Contoh Produk <span className="text-[#ff5722]">Tap Card NFC & QR Code</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Lihat contoh fisik kartu NFC & standee QR Code di bawah, serta rasakan langsung bagaimana layar smartphone pelanggan terbuka otomatis dalam sekejap saat disentuhkan.
          </p>
        </div>

        {/* 3 Physical Product Gallery Cards (NFC Tap Card & QR Code Examples) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {hardwareExamples.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedHardware(idx)}
              className={`rounded-3xl border p-4 bg-white transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                selectedHardware === idx
                  ? 'border-[#ff5722] shadow-xl shadow-orange-500/15 ring-2 ring-orange-500/20'
                  : 'border-slate-200/80 hover:border-orange-200 hover:shadow-lg'
              }`}
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#ff5722] shadow-sm">
                    {item.badge}
                  </div>
                </div>

                <div className="mb-1">
                  <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-[#ff5722] transition-colors truncate">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              {/* Specs pill badges */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {item.specs.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[10px] font-semibold bg-orange-50 text-slate-700 px-2 py-0.5 rounded-md"
                  >
                    ✓ {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Platform Selector Tabs */}
        <div className="text-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-orange-50/80 border border-orange-100 gap-1 overflow-x-auto max-w-full shadow-xs">
            <button
              onClick={() => handleTriggerTap('google')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedPlatform === 'google'
                  ? 'bg-[#ff5722] text-white shadow-md shadow-orange-500/25'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Star className="h-3.5 w-3.5 fill-current" />
              <span>Google Review Bintang 5</span>
            </button>

            <button
              onClick={() => handleTriggerTap('whatsapp')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedPlatform === 'whatsapp'
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <MessageCircle className="h-3.5 w-3.5 fill-current" />
              <span>WhatsApp Chat</span>
            </button>

            <button
              onClick={() => handleTriggerTap('instagram')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedPlatform === 'instagram'
                  ? 'bg-purple-500 text-white shadow-md shadow-purple-500/25'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Instagram className="h-3.5 w-3.5" />
              <span>Instagram Follow</span>
            </button>

            <button
              onClick={() => handleTriggerTap('tiktok')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedPlatform === 'tiktok'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <span className="font-bold text-xs">d</span>
              <span>TikTok Profile</span>
            </button>
          </div>
        </div>

        {/* Interactive Workspace: Real Product Showcase on Left, Smartphone Simulator on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Focused Card of the Selected Real Hardware */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#fff9f5] border border-orange-100 w-full shadow-xl shadow-orange-950/5">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-orange-200/50">
                <span className="text-xs font-bold text-slate-800">
                  {hardwareExamples[selectedHardware].title}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  NFC & QR Code Aktif
                </span>
              </div>

              {/* Main Photo of Selected Product */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-orange-100 shadow-sm mb-4">
                <img
                  src={hardwareExamples[selectedHardware].image}
                  alt={hardwareExamples[selectedHardware].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="text-xs text-slate-600 leading-relaxed">
                  {hardwareExamples[selectedHardware].description}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Pilih model lain di atas untuk membandingkan</span>
                  <div className="flex gap-1.5">
                    {hardwareExamples.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedHardware(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          selectedHardware === i ? 'bg-[#ff5722] w-6' : 'bg-slate-300'
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100 text-xs text-slate-700 w-full flex items-start gap-3">
              <ThumbsUp className="h-5 w-5 text-[#ff5722] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block mb-0.5">Dual Mode: Tap NFC & Scan QR Code</span>
                <p className="text-slate-600 leading-relaxed">
                  Pengguna iPhone & Android terbaru cukup menempelkan HP ke chip NFC. Jika ada pengunjung yang menggunakan ponsel lama tanpa NFC, mereka tetap bisa scan QR Code kamera.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Smartphone Screen Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-[310px] sm:w-[330px] rounded-[42px] bg-slate-900 p-3.5 border-4 border-slate-800 shadow-2xl shadow-orange-950/15">
              
              {/* Phone Speaker Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* Screen Area */}
              <div className="relative h-[560px] w-full rounded-[30px] bg-slate-50 overflow-hidden pt-8 text-slate-900 flex flex-col justify-between">
                
                {/* Instant NFC Banner popup */}
                <div className="px-3 pt-2">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-300">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <div className="text-[11px] truncate">
                      <span className="font-bold text-slate-900 block">NFC / QR Terdeteksi</span>
                      <span className="text-slate-500">Membuka tautan ulasan...</span>
                    </div>
                  </div>
                </div>

                {/* Main Screen Content based on selected platform */}
                <div className="p-3.5 flex-1 flex flex-col justify-center">
                  
                  {/* Google Review Screen */}
                  {selectedPlatform === 'google' && (
                    <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-xl">
                      <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-[#ff5722] text-white font-bold flex items-center justify-center text-xs">
                          G
                        </div>
                        <div className="truncate">
                          <div className="font-bold text-xs text-slate-900">Kopi Nusantara Senja</div>
                          <div className="text-[10px] text-slate-500 flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-red-500" />
                            <span>Jl. Senopati No. 42, Jaksel</span>
                          </div>
                        </div>
                      </div>

                      <div className="py-4 text-center">
                        <div className="text-xs text-slate-600 mb-2 font-medium">Beri Penilaian untuk Toko Ini</div>
                        <div className="flex justify-center gap-2 my-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => setStarCount(star)}
                              className="p-1 cursor-pointer transition-transform hover:scale-115 active:scale-95"
                            >
                              <Star
                                className={`h-6 w-6 ${
                                  star <= starCount
                                    ? 'text-amber-400 fill-amber-400'
                                    : 'text-slate-200'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                        <span className="text-[11px] text-amber-600 font-bold">
                          {starCount === 5 ? 'Luar Biasa! (Sangat Puas)' : `${starCount} Bintang`}
                        </span>
                      </div>

                      {!reviewSubmitted ? (
                        <div className="space-y-2">
                          <textarea
                            rows={2}
                            readOnly
                            value="Tempatnya nyaman, kopinya enak, dan pelayanan kasirnya ramah sekali!"
                            className="w-full rounded-xl bg-slate-50 border border-slate-200 p-2 text-xs text-slate-700 resize-none focus:outline-none"
                          />
                          <button
                            onClick={() => setReviewSubmitted(true)}
                            className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-colors cursor-pointer shadow-sm"
                          >
                            Posting Ulasan Google
                          </button>
                        </div>
                      ) : (
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in">
                          <Check className="h-5 w-5 text-emerald-600 mx-auto mb-1" />
                          <div className="text-xs font-bold text-emerald-800">Ulasan Berhasil Diposting!</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">Rating toko Anda naik di Google Maps</div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* WhatsApp Screen */}
                  {selectedPlatform === 'whatsapp' && (
                    <div className="rounded-2xl bg-white border border-slate-200 p-3 shadow-xl">
                      <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-white">
                          WA
                        </div>
                        <div className="text-xs">
                          <div className="font-bold text-slate-900">CS Kopi Senja</div>
                          <div className="text-[10px] text-emerald-600 font-medium">Online</div>
                        </div>
                      </div>

                      <div className="py-4 space-y-3">
                        <div className="bg-slate-100 text-slate-800 text-xs p-2.5 rounded-xl max-w-[85%]">
                          Halo! Selamat datang di Kopi Senja. Ada yang bisa kami bantu?
                        </div>

                        <div className="bg-emerald-500 text-white text-xs p-2.5 rounded-xl ml-auto max-w-[85%] shadow-xs">
                          Halo Admin, saya sedang di meja 05 ingin pesan croissant tambahan & minta bill ya.
                        </div>
                      </div>

                      {!waMessageSent ? (
                        <button
                          onClick={() => setWaMessageSent(true)}
                          className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer hover:bg-emerald-500 shadow-sm"
                        >
                          <Send className="h-3.5 w-3.5" />
                          <span>Kirim Pesan WhatsApp</span>
                        </button>
                      ) : (
                        <div className="p-2.5 rounded-xl bg-emerald-50 text-center text-emerald-700 font-bold text-xs">
                          Pesan Terkirim ke Kasir! ✓
                        </div>
                      )}
                    </div>
                  )}

                  {/* Instagram Screen */}
                  {selectedPlatform === 'instagram' && (
                    <div className="rounded-2xl bg-white border border-slate-200 p-3.5 shadow-xl text-center">
                      <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 mx-auto">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-slate-900 font-bold text-sm">
                          KS
                        </div>
                      </div>
                      <div className="font-bold text-xs text-slate-900 mt-2">@kopisenja.official</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Artisan Coffee & Eatery Jakarta</div>
                      
                      <div className="flex justify-center gap-4 my-3 text-xs">
                        <div><span className="font-bold block text-slate-900">1.4K</span><span className="text-slate-400 text-[10px]">Posts</span></div>
                        <div><span className="font-bold block text-slate-900">28.4K</span><span className="text-slate-400 text-[10px]">Followers</span></div>
                        <div><span className="font-bold block text-slate-900">410</span><span className="text-slate-400 text-[10px]">Following</span></div>
                      </div>

                      <button className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 cursor-pointer shadow-sm">
                        Followed! ✓
                      </button>
                    </div>
                  )}

                  {/* TikTok Screen */}
                  {selectedPlatform === 'tiktok' && (
                    <div className="rounded-2xl bg-white border border-slate-200 p-3.5 shadow-xl text-center">
                      <div className="w-14 h-14 rounded-full bg-slate-900 mx-auto flex items-center justify-center text-white font-bold">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                        </svg>
                      </div>
                      <div className="font-bold text-xs text-slate-900 mt-2">@kopisenjareview</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Behind the beans & daily vibes</div>
                      
                      <div className="flex justify-center gap-4 my-3 text-xs">
                        <div><span className="font-bold block text-slate-900">142</span><span className="text-slate-400 text-[10px]">Following</span></div>
                        <div><span className="font-bold block text-slate-900">94.2K</span><span className="text-slate-400 text-[10px]">Followers</span></div>
                        <div><span className="font-bold block text-slate-900">1.2M</span><span className="text-slate-400 text-[10px]">Likes</span></div>
                      </div>

                      <button className="w-full py-2.5 rounded-xl bg-[#fe2c55] text-white font-bold text-xs hover:bg-[#e0264b] cursor-pointer shadow-sm">
                        Follow TikTok
                      </button>
                    </div>
                  )}

                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="h-5 flex items-center justify-center pb-2">
                  <div className="w-24 h-1 bg-slate-300 rounded-full" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
