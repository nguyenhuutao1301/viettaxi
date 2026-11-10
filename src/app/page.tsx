import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import VehicleSelection from '@/app/components/VehicleSelection';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import HowItWorks from '@/app/components/HowItWorks';
import ServicesSection from '@/app/components/ServicesSection';
import PricingSection from '@/app/components/PricingSection';
import ServiceAreas from '@/app/components/ServiceAreas';
import AirportTransfer from '@/app/components/AirportTransfer';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import FAQSection from '@/app/components/FAQSection';
import BlogSection from '@/app/components/BlogSection';
import FloatingContactButtons from '@/app/components/FloatingContactButtons';
import MobileBottomBar from '@/app/components/MobileBottomBar';
import BookingModal from '@/app/components/BookingModal';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VehicleSelection />
        <WhyChooseUs />
        <HowItWorks />
        <ServicesSection />
        <PricingSection />
        <ServiceAreas />
        <AirportTransfer />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
      <FloatingContactButtons />
      <MobileBottomBar />
      <BookingModal />
    </>
  );
}
