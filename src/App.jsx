import React, { useState } from 'react';
import PromoBanner from './components/PromoBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Keunggulan from './components/Keunggulan';
import AlurBelajar from './components/AlurBelajar';
import PaketBiaya from './components/PaketBiaya';
import Armada from './components/Armada';
import Testimoni from './components/Testimoni';
import FormPendaftaran from './components/FormPendaftaran';
import LokasiMap from './components/LokasiMap';
import Faq from './components/Faq';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedTransmisi, setSelectedTransmisi] = useState('');

  const handleSelectPackage = (packageName, transmisi) => {
    setSelectedPackage(packageName);
    if (transmisi) {
      setSelectedTransmisi(transmisi);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <PromoBanner />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Keunggulan />
        <AlurBelajar />
        <PaketBiaya onSelectPackage={handleSelectPackage} />
        <Armada />
        <Testimoni />
        <FormPendaftaran 
          selectedPackage={selectedPackage} 
          selectedTransmisi={selectedTransmisi} 
        />
        <LokasiMap />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileBar />
    </div>
  );
}
