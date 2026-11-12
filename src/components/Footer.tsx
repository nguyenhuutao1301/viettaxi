import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';

const footerLinks = {
  company: {
    title: 'Công Ty',
    links: [
      { label: 'Về Chúng Tôi', href: '/about' },
      { label: 'Liên Hệ', href: '/contact' },
      { label: 'Tuyển Dụng', href: '/careers' },
    ],
  },
  services: {
    title: 'Dịch Vụ',
    links: [
      { label: 'Taxi 4 Chỗ', href: '/taxi-4-cho' },
      { label: 'Taxi 7 Chỗ', href: '/taxi-7-cho' },
      { label: 'Taxi Sân Bay', href: '/taxi-san-bay' },
      { label: 'Taxi Đường Dài', href: '/taxi-duong-dai' },
    ],
  },
  areas: {
    title: 'Khu Vực',
    links: [
      { label: 'Hà Nội', href: '/taxi-ha-noi' },
      { label: 'TP. Hồ Chí Minh', href: '/taxi-ho-chi-minh' },
      { label: 'Đà Nẵng', href: '/taxi-da-nang' },
      { label: 'Bình Dương', href: '/taxi-binh-duong' },
    ],
  },
  support: {
    title: 'Hỗ Trợ',
    links: [
      { label: 'Hướng Dẫn Đặt Xe', href: '/booking-guide' },
      { label: 'Câu Hỏi Thường Gặp', href: '#faq' },
      { label: 'Điều Khoản', href: '/terms' },
      { label: 'Chính Sách Bảo Mật', href: '/privacy' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-6">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column - spans 2 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <AppLogo size={36} />
              <span className="font-extrabold text-xl text-white">VietTaxi</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Dịch vụ đặt xe taxi chuyên nghiệp tại Việt Nam. Nhanh chóng, an toàn, minh bạch.
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Icon name="PhoneIcon" size={15} variant="solid" className="text-accent" />
                {siteConfig.contact.phone}
              </a>
              <a
                href="mailto:support@viettaxi.vn"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Icon name="EnvelopeIcon" size={15} className="text-accent" />
                support@viettaxi.vn
              </a>
              <div className="flex items-start gap-2">
                <Icon name="MapPinIcon" size={15} className="text-accent mt-0.5 flex-shrink-0" />
                <span>123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks)?.map((section) => (
            <div key={section?.title}>
              <h4 className="text-white font-700 text-sm mb-4 uppercase tracking-wider">
                {section?.title}
              </h4>
              <ul className="space-y-2.5">
                {section?.links?.map((link) => (
                  <li key={link?.label}>
                    <Link
                      href={link?.href}
                      className="text-white/55 text-sm hover:text-white transition-colors"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-white/40 text-sm">© 2026 VietTaxi. Bảo lưu mọi quyền.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
              Bảo Mật
            </a>
            <span className="text-white/20">·</span>
            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">
              Điều Khoản
            </a>
            <span className="text-white/20">·</span>
            <a
              href={'https://zalo.me/' + siteConfig.contact.phone}
              className="text-white/40 hover:text-white transition-colors text-sm"
            >
              Zalo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
