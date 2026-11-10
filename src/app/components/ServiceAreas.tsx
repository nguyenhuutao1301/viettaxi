import React from 'react';
import Icon from '@/components/ui/AppIcon';

const areas = [
  { name: 'TP. Hồ Chí Minh', slug: '/taxi-ho-chi-minh', tag: 'Phổ biến' },
  { name: 'Hà Nội', slug: '/taxi-ha-noi', tag: 'Phổ biến' },
  { name: 'Đà Nẵng', slug: '/taxi-da-nang', tag: '' },
  { name: 'Bình Dương', slug: '/taxi-binh-duong', tag: '' },
  { name: 'Đồng Nai', slug: '/taxi-dong-nai', tag: '' },
  { name: 'Bà Rịa – Vũng Tàu', slug: '/taxi-vung-tau', tag: '' },
  { name: 'Cần Thơ', slug: '/taxi-can-tho', tag: '' },
  { name: 'Hải Phòng', slug: '/taxi-hai-phong', tag: '' },
  { name: 'Nha Trang', slug: '/taxi-nha-trang', tag: '' },
  { name: 'Vinh', slug: '/taxi-vinh', tag: '' },
  { name: 'Huế', slug: '/taxi-hue', tag: '' },
  { name: 'Quảng Ninh', slug: '/taxi-quang-ninh', tag: '' },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-16 lg:py-24 bg-muted relative overflow-hidden">
      {/* Background map hint */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 800 600" className="w-full h-full" fill="none">
          <path
            d="M400 50 L600 200 L650 400 L500 550 L300 500 L150 350 L200 150 Z"
            fill="var(--primary)"
          />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-700 text-sm uppercase tracking-widest mb-3">
            Khu Vực Hoạt Động
          </span>
          <h2 className="text-section-xl font-extrabold text-foreground mb-4">
            Taxi Dịch Vụ Khắp Việt Nam
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hoạt động tại 63 tỉnh thành. Chọn khu vực của bạn để xem thông tin chi tiết.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {areas?.map((area) => (
            <a
              key={area?.slug}
              href={area?.slug}
              className="group bg-white rounded-xl p-4 text-center border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 card-shadow hover:card-shadow-lg hover:-translate-y-0.5 relative"
            >
              {area?.tag && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] font-700 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {area?.tag}
                </span>
              )}
              <Icon
                name="MapPinIcon"
                size={20}
                className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform"
                variant="solid"
              />
              <p className="text-foreground font-700 text-sm leading-tight">{area?.name}</p>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm mb-4">
            Không thấy khu vực của bạn? Liên hệ với chúng tôi.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-xl font-700 hover:bg-primary/5 transition-colors"
          >
            <Icon name="PhoneIcon" size={16} variant="solid" />
            Liên Hệ Ngay
          </a>
        </div>
      </div>
    </section>
  );
}
