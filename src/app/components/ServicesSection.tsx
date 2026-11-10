import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const services = [
  {
    id: 'taxi-4',
    name: 'Taxi 4 Chỗ',
    desc: 'Phương tiện thoải mái cho cá nhân và nhóm nhỏ di chuyển trong thành phố.',
    image: 'https://images.unsplash.com/photo-1653730621698-8ca2162faaf2',
    imageAlt: 'Clean modern silver sedan taxi, professional driver, bright daylight city street',
    href: '/taxi-4-cho',
  },
  {
    id: 'taxi-7',
    name: 'Taxi 7 Chỗ',
    desc: 'Xe rộng rãi dành cho gia đình và nhóm lớn, sức chứa hành lý cao.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_16289fb9f-1767121056565.png',
    imageAlt: 'Spacious black MPV minivan, family taxi, professional transportation',
    href: '/taxi-7-cho',
  },
  {
    id: 'airport',
    name: 'Đưa Đón Sân Bay',
    desc: 'Dịch vụ đưa đón tại các sân bay lớn. Đúng giờ, chuyên nghiệp, cố định giá.',
    image: 'https://images.unsplash.com/photo-1692865852997-fe5732b303da',
    imageAlt:
      'Airport terminal exterior at sunset, aircraft on tarmac, warm golden light, Vietnam airport',
    href: '/taxi-san-bay',
  },
  {
    id: 'city',
    name: 'Taxi Nội Thành',
    desc: 'Di chuyển nhanh chóng trong thành phố. Biết đường, đúng giờ, giá hợp lý.',
    image: 'https://images.unsplash.com/photo-1578022146221-519bebaa5e41',
    imageAlt: 'Aerial view of Vietnamese city at dusk, illuminated streets, modern urban skyline',
    href: '/dat-taxi',
  },
  {
    id: 'intercity',
    name: 'Taxi Đường Dài',
    desc: 'Di chuyển liên tỉnh an toàn, tiện nghi. Đặt trước, giá cố định, không lo phát sinh.',
    image: 'https://images.unsplash.com/photo-1718462283531-520e649c4d52',
    imageAlt: 'Scenic Vietnamese highway through mountains, lush green landscape, clear blue sky',
    href: '/taxi-duong-dai',
  },
  {
    id: 'private',
    name: 'Xe Riêng',
    desc: 'Dịch vụ xe riêng cao cấp cho doanh nhân và sự kiện cá nhân. Kín đáo, chuyên nghiệp.',
    image: 'https://images.unsplash.com/photo-1691118715233-dbb8248506ba',
    imageAlt:
      'Luxury black sedan car interior, premium leather seats, elegant professional vehicle',
    href: '/dat-taxi',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-700 text-sm uppercase tracking-widest mb-3">
            Dịch Vụ
          </span>
          <h2 className="text-section-xl font-extrabold text-foreground mb-4">
            Dịch Vụ Taxi Của Chúng Tôi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Đa dạng dịch vụ đáp ứng mọi nhu cầu di chuyển của bạn trên khắp Việt Nam.
          </p>
        </div>

        {/* 
           SERVICES GRID AUDIT:
           Array has 6 cards: [Taxi4, Taxi7, Airport, City, Intercity, Private]
           Row 1: [col-1: Taxi4 cs-1] [col-2: Taxi7 cs-1] [col-3: Airport cs-1]
           Row 2: [col-1: City cs-1] [col-2: Intercity cs-1] [col-3: Private cs-1]
           Placed 6/6 ✓
          */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="group bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden">
                <AppImage
                  src={service?.image}
                  alt={service?.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-800 text-foreground text-lg mb-2">{service?.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service?.desc}
                </p>
                <a
                  href={service?.href}
                  className="inline-flex items-center gap-2 text-primary font-700 text-sm hover:gap-3 transition-all"
                >
                  Đặt Ngay
                  <Icon name="ArrowRightIcon" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
