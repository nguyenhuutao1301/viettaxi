import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactHero() {
  return (
    <section className="bg-primary py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 px-4 py-2 rounded-full text-white text-sm font-700 mb-6">
          <Icon name="PhoneIcon" size={16} variant="solid" />
          Liên Hệ Với Chúng Tôi
        </div>
        <h1 className="text-section-xl font-extrabold text-white mb-4">
          Chúng Tôi Luôn Sẵn Sàng Hỗ Trợ
        </h1>
        <p className="text-white/75 text-lg max-w-xl mx-auto">
          Đặt xe, hỏi giá hay cần hỗ trợ — đội ngũ VietTaxi luôn sẵn sàng 24/7.
        </p>
      </div>
    </section>
  );
}
