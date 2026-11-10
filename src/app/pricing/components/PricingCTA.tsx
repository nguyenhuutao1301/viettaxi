import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';

export default function PricingCTA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-primary rounded-3xl p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
          <div className="relative z-10">
            <h2 className="text-section-lg font-extrabold text-white mb-4">
              Nhận Báo Giá Miễn Phí
            </h2>
            <p className="text-white/75 text-lg mb-8 max-w-md mx-auto">
              Liên hệ ngay để nhận báo giá chính xác cho tuyến đường của bạn. Đội ngũ sẵn sàng 24/7.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-800 hover:bg-white/90 transition-all card-shadow"
              >
                <Icon name="MapPinIcon" size={20} variant="solid" />
                Đặt Xe Ngay
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-700 hover:bg-white/10 transition-colors"
              >
                <Icon name="PhoneIcon" size={20} variant="solid" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
