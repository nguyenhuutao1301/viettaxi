import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function PricingHero() {
  return (
    <section className="bg-primary py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 px-4 py-2 rounded-full text-white text-sm font-700 mb-6">
          <Icon name="CurrencyDollarIcon" size={16} variant="solid" />
          Bảng Giá Cước Taxi
        </div>
        <h1 className="text-section-xl font-extrabold text-white mb-5">
          Giá Taxi Đơn Giản & Minh Bạch
        </h1>
        <p className="text-white/75 text-lg max-w-xl mx-auto mb-8">
          Không phụ phí ẩn. Biết giá trước khi lên xe. Dịch vụ chuyên nghiệp với giá hợp lý nhất.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { value: '15.000 VND', label: 'Taxi 4 chỗ từ' },
            { value: '20.000 VND', label: 'Taxi 7 chỗ từ' },
            { value: '250.000 VND', label: 'Sân bay từ' },
          ]?.map((s) => (
            <div
              key={s?.label}
              className="bg-white/15 border border-white/25 rounded-2xl px-5 py-3 text-center"
            >
              <p className="text-white font-800 text-xl">{s?.value}</p>
              <p className="text-white/65 text-xs mt-0.5">{s?.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
