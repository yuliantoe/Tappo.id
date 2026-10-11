/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesRow } from './components/ServicesRow';
import { MiddleHighlight } from './components/MiddleHighlight';
import { InteractiveTapSimulator } from './components/InteractiveTapSimulator';
import { MarketplaceChannels } from './components/MarketplaceChannels';
import { AgencySection } from './components/AgencySection';
import { ComparisonSection } from './components/ComparisonSection';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { BottomBanner } from './components/BottomBanner';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { BusinessCustomization } from './types';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<string>('Perangkat Smart NFC & QR');
  const [customizationData, setCustomizationData] = useState<BusinessCustomization | null>(null);

  const handleOpenOrderModal = (pkgName?: string) => {
    if (pkgName) {
      setSelectedPackage(pkgName);
    }
    setOrderModalOpen(true);
  };

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* 1. Navigation Bar */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section (with 3D Beanbag Characters & Warm Orange Theme) */}
        <Hero
          onOpenOrderModal={handleOpenOrderModal}
          onScrollToSimulator={handleScrollToSimulator}
        />

        {/* 3. "We Provide The Best Services" 4-Card Row */}
        <ServicesRow onSelectService={(service) => handleOpenOrderModal(`Layanan: ${service}`)} />

        {/* 4. "Simple Solutions!" Highlight Section with 3D Armchair Character */}
        <MiddleHighlight
          onOpenOrderModal={() => handleOpenOrderModal('Standee NFC & QR')}
          onScrollToSimulator={handleScrollToSimulator}
        />

        {/* 5. Interactive Smartphone NFC Simulator & Real Product Examples */}
        <InteractiveTapSimulator />

        {/* 5.5. Official Marketplace & WhatsApp Purchase Channels */}
        <MarketplaceChannels onOpenOrderModal={() => handleOpenOrderModal('Konsultasi Pemesanan')} />

        {/* 6. "Our Agency / Technology" Split Section with 3D Desk Illustration */}
        <AgencySection onOpenOrderModal={() => handleOpenOrderModal('Konsultasi Kustom Standee')} />

        {/* 7. Comparison: Traditional Print vs Tappo.id */}
        <ComparisonSection />

        {/* 8. "What Clients Say!" Testimonials Section */}
        <Testimonials />

        {/* 9. Frequently Asked Questions */}
        <Faq />

        {/* 10. "Ready to get started?" Orange Bottom Banner */}
        <BottomBanner onOpenOrderModal={() => handleOpenOrderModal('Pemesanan Smart NFC & QR')} />
      </main>

      {/* 11. Quiet Compliant Footer */}
      <Footer onOpenOrderModal={() => handleOpenOrderModal('Pemesanan Smart NFC & QR')} />

      {/* 12. WhatsApp Checkout & Inquiry Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialPackage={selectedPackage}
        customizationData={customizationData}
      />
    </div>
  );
}
