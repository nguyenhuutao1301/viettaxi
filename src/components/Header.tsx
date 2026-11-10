'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Trang Chủ', href: '/' },
  { label: 'Taxi 4 Chỗ', href: '/taxi-4-cho' },
  { label: 'Taxi 7 Chỗ', href: '/taxi-7-cho' },
  { label: 'Đưa Đón Sân Bay', href: '/taxi-san-bay' },
  { label: 'Bảng Giá', href: '/pricing' },
  { label: 'Khu Vực', href: '#service-areas' },
  { label: 'Liên Hệ', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-border card-shadow'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <AppLogo size={36} />
              <span
                className={`font-extrabold text-xl tracking-tight transition-colors ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                VietTaxi
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-600 transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
                    isScrolled ? 'text-foreground' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+84901234567"
                className={`flex items-center gap-2 text-sm font-700 transition-colors ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                <Icon name="PhoneIcon" size={16} variant="solid" className="text-accent" />
                {siteConfig.contact.phone}
              </a>
              <Link
                href="#booking"
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-700 hover:bg-primary/90 transition-all green-glow"
              >
                Đặt Xe Ngay
              </Link>
            </div>

            {/* Mobile Right */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:+84901234567"
                className={`p-2.5 rounded-xl transition-colors ${
                  isScrolled ? 'text-primary bg-primary/10' : 'text-white bg-white/20'
                }`}
                aria-label="Gọi ngay"
              >
                <Icon name="PhoneIcon" size={20} variant="solid" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2.5 rounded-xl transition-colors ${
                  isScrolled ? 'text-foreground bg-muted' : 'text-white bg-white/20'
                }`}
                aria-label="Mở menu"
              >
                <Icon name="Bars3Icon" size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col animate-scale-in">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <AppLogo size={32} />
                <span className="font-extrabold text-lg text-foreground">VietTaxi</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-muted text-foreground"
                aria-label="Đóng menu"
              >
                <Icon name="XMarkIcon" size={20} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground font-600 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="p-4 border-t border-border space-y-3">
              <a
                href="tel:+84901234567"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-primary text-primary font-700"
              >
                <Icon name="PhoneIcon" size={18} variant="solid" />
                {siteConfig.contact.phone}
              </a>
              <Link
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 rounded-xl bg-primary text-primary-foreground font-700"
              >
                Đặt Xe Ngay
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
