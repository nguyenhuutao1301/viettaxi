import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactInfo from '@/app/contact/components/ContactInfo';
import ContactForm from '@/app/contact/components/ContactForm';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Liên Hệ — VietTaxi',
  description:
    'Liên hệ với VietTaxi để đặt xe, hỗ trợ khách hàng hoặc hợp tác kinh doanh. Hotline ' +
    siteConfig.contact.phone +
    ' hoạt động 24/7.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
