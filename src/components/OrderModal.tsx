import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Copy, Check, Sparkles, Send } from 'lucide-react';
import { BusinessCustomization } from '../types';
import { createWhatsAppUrl } from '../config/whatsapp';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
  customizationData?: BusinessCustomization | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialPackage = 'Paket Business Pro',
  customizationData = null,
}) => {
  const [selectedPackage, setSelectedPackage] = useState<string>(initialPackage);
  const [businessName, setBusinessName] = useState<string>('');
  const [industry, setIndustry] = useState<string>('Kafe & Restoran');
  const [linkDestination, setLinkDestination] = useState<string>('Google Maps Review (Bintang 5)');
  const [mapsUrl, setMapsUrl] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('');
  const [deliveryCity, setDeliveryCity] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (initialPackage) {
      setSelectedPackage(initialPackage);
    }
    if (customizationData) {
      setBusinessName(customizationData.businessName);
      setIndustry(customizationData.industry);
    }
  }, [initialPackage, customizationData]);

  if (!isOpen) return null;

  // Build formatted WhatsApp message
  const generatedMessage = `Halo Admin tappo.id! 👋
Saya ingin memesan / konsultasi Smart NFC Tap & QR Review untuk bisnis saya:

📦 Pilihan Model/Kebutuhan: ${selectedPackage}
🏢 Nama Usaha: ${businessName || '-'}
📂 Kategori Usaha: ${industry}
🎯 Target Tautan: ${linkDestination}
🔗 Link Toko/Maps: ${mapsUrl || '(Mohon dibantu buatkan/disetupkan)'}

👤 Nama Pemesan: ${customerName || '-'}
📱 Nomor WhatsApp: ${whatsappNumber || '-'}
📍 Kota Pengiriman: ${deliveryCity || '-'}

Mohon info ketersediaan stok, konsultasi logo toko, dan preview desain mockup sebelum cetak ya. Terima kasih! 🙏`;

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = createWhatsAppUrl(generatedMessage);
    window.location.href = waUrl;
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Tutup form pemesanan"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5722] mb-1">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Pemesanan Smart NFC & QR</span>
          </div>
          <h3 className="font-display text-2xl font-extrabold text-slate-900">
            Form Pemesanan & Konsultasi
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Isi data di bawah untuk langsung terhubung dengan Admin WhatsApp resmi tappo.id.
          </p>
          <div className="mt-2.5 flex items-center gap-2 flex-wrap">
            <a
              href={createWhatsAppUrl('Halo Admin tappo.id! 👋 Saya ingin konsultasi pemesanan perangkat ulasan langsung.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-600" />
              <span>Chat WhatsApp Langsung</span>
            </a>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-orange-50/70 border border-orange-200/60 flex items-center justify-between flex-wrap gap-2 text-[11px]">
            <span className="text-slate-600 font-medium">Pilihan Marketplace:</span>
            <div className="flex items-center gap-2 font-bold">
              <a href="https://shopee.co.id/search?keyword=tappo.id" target="_blank" rel="noopener noreferrer" className="text-[#EE4D2D] hover:underline">Shopee</a>
              <span>·</span>
              <a href="https://www.tokopedia.com/search?q=tappo.id" target="_blank" rel="noopener noreferrer" className="text-[#03AC0E] hover:underline">Tokopedia</a>
              <span>·</span>
              <a href="https://www.tiktok.com/search?q=tappo.id" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline">TikTok Shop</a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSendWhatsapp} className="space-y-4 text-xs">
          
          {/* Model / Requirements Selection */}
          <div>
            <label className="block font-bold text-slate-700 mb-1.5">
              Pilihan Pemesanan / Kebutuhan
            </label>
            <select
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#ff5722] focus:bg-white focus:outline-none"
            >
              <option value="Kartu Tap NFC & QR - Black Edition (Rp 49.000)">
                Kartu Tap NFC & QR - Black Edition (Rp 49.000 / 49K)
              </option>
              <option value="Kartu Tap NFC & QR - Blue Ocean (Rp 49.000)">
                Kartu Tap NFC & QR - Blue Ocean (Rp 49.000 / 49K)
              </option>
              <option value="Standee Akrilik Meja Google Review (Rp 68.000)">
                Standee Akrilik Meja Google Review (Rp 68.000 / 68K)
              </option>
              <option value="Order Kustom / Grosir Multi-Cabang">
                Order Kustom / Grosir Multi-Cabang
              </option>
            </select>
          </div>

          {/* Business Name & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1.5">
                Nama Bisnis / Toko *
              </label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Contoh: Kopi Roastery Senopati"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#ff5722] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1.5">
                Kategori Usaha
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#ff5722] focus:bg-white focus:outline-none"
              >
                <option value="Kafe & Restoran">Kafe & Restoran</option>
                <option value="Barbershop & Salon">Barbershop & Salon</option>
                <option value="Klinik Kecantikan & Dokter">Klinik Kecantikan & Dokter</option>
                <option value="Hotel & Villa">Hotel & Villa</option>
                <option value="Bengkel & Cuci Mobil">Bengkel & Cuci Mobil</option>
                <option value="Toko Retail & Butik">Toko Retail & Butik</option>
                <option value="Lainnya">Kategori Lainnya</option>
              </select>
            </div>
          </div>

          {/* Target Link Focus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1.5">
                Fokus Tautan Utama
              </label>
              <select
                value={linkDestination}
                onChange={(e) => setLinkDestination(e.target.value)}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#ff5722] focus:bg-white focus:outline-none"
              >
                <option value="Google Maps Review (Bintang 5)">Google Maps Review (Bintang 5)</option>
                <option value="Chat WhatsApp Langsung">Chat WhatsApp Langsung</option>
                <option value="Instagram Follow & Profil">Instagram Follow & Profil</option>
                <option value="TikTok Profile">TikTok Profile</option>
                <option value="Multi Social (All-in-One Link)">Multi Social (All-in-One Link)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1.5">
                Link Google Maps / Sosmed (Opsional)
              </label>
              <input
                type="text"
                value={mapsUrl}
                onChange={(e) => setMapsUrl(e.target.value)}
                placeholder="https://maps.app.goo.gl/... (bisa menyusul)"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#ff5722] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Customer Name & WA */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1.5">
                Nama Anda *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Nama Anda"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#ff5722] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1.5">
                No. WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                placeholder="0812xxxxxxx"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#ff5722] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1.5">
                Kota Pengiriman *
              </label>
              <input
                type="text"
                required
                value={deliveryCity}
                onChange={(e) => setDeliveryCity(e.target.value)}
                placeholder="Contoh: Jakarta / Surabaya"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:border-[#ff5722] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Message Preview Box */}
          <div className="pt-2">
            <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
              <span>Preview Pesan WhatsApp yang akan dikirim:</span>
              <button
                type="button"
                onClick={handleCopyText}
                className="text-[#ff5722] hover:text-[#ea4a16] font-semibold flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                <span>{copied ? 'Tersalin!' : 'Salin Teks'}</span>
              </button>
            </div>
            <pre className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono whitespace-pre-wrap max-h-28 overflow-y-auto">
              {generatedMessage}
            </pre>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 space-y-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>Kirim Pesanan ke WhatsApp</span>
              <Send className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 text-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer text-xs"
            >
              Kembali ke Halaman
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
