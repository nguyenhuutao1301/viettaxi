import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingHero from '@/app/pricing/components/PricingHero';
import PricingTables from '@/app/pricing/components/PricingTables';
import PricingFAQ from '@/app/pricing/components/PricingFAQ';
import PricingCTA from '@/app/pricing/components/PricingCTA';

export const metadata = {
  title: 'Bảng Giá Taxi — VietTaxi',
  description:
    'Xem bảng giá taxi 4 chỗ, 7 chỗ, sân bay và đường dài tại Việt Nam. Giá minh bạch, không phụ phí ẩn.',
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PricingHero />
        <PricingTables />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </>
  );
}
