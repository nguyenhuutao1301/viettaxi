'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const vehicles = [
  {
    id: '4-seat',
    name: 'Taxi 4 Chỗ',
    tagline: 'Thoải mái cho cá nhân & nhóm nhỏ',
    image: 'https://images.unsplash.com/photo-1567096391207-5c87f48b0610',
    imageAlt:
      'Modern silver sedan taxi parked on clean Vietnamese street, bright daylight, professional clean vehicle',
    capacity: '1–4 hành khách',
    features: [
      'Phù hợp 1–4 hành khách',
      'Nội thất thoải mái, sạch sẽ',
      'Điều hòa không khí',
      'Tài xế chuyên nghiệp',
      'Phù hợp đi trong thành phố',
    ],

    price: 'Từ 15.000 VND/km',
    badge: 'Phổ biến nhất',
    badgeColor: 'bg-accent text-accent-foreground',
    cta: 'Chọn Taxi 4 Chỗ',
  },
  {
    id: '7-seat',
    name: 'Taxi 7 Chỗ',
    tagline: 'Rộng rãi cho gia đình & nhóm lớn',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c247ccb8-1774534650786.png',
    imageAlt:
      'Modern black MPV minivan taxi on Vietnamese highway, spacious family vehicle, bright daylight',
    capacity: '1–7 hành khách',
    features: [
      'Phù hợp 1–7 hành khách',
      'Không gian rộng rãi',
      'Điều hòa không khí',
      'Sức chứa hành lý lớn',
      'Lý tưởng cho gia đình & nhóm',
    ],

    price: 'Từ 20.000 VND/km',
    badge: 'Tốt nhất cho nhóm',
    badgeColor: 'bg-primary text-primary-foreground',
    cta: 'Chọn Taxi 7 Chỗ',
  },
];

export default function VehicleSelection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-700 text-sm uppercase tracking-widest mb-3">
            Chọn Phương Tiện
          </span>
          <h2 className="text-section-xl font-extrabold text-foreground mb-4">
            Xe Phù Hợp Với Mọi Nhu Cầu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chọn loại taxi phù hợp với số lượng hành khách và hành lý của bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {vehicles?.map((vehicle) => (
            <div
              key={vehicle?.id}
              onClick={() => setSelected(vehicle?.id)}
              className={`group bg-white rounded-3xl overflow-hidden card-shadow cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:card-shadow-xl ${
                selected === vehicle?.id ? 'ring-2 ring-primary ring-offset-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <AppImage
                  src={vehicle?.image}
                  alt={vehicle?.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span
                  className={`absolute top-4 left-4 text-xs font-700 px-3 py-1.5 rounded-full ${vehicle?.badgeColor}`}
                >
                  {vehicle?.badge}
                </span>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-800 text-xl">{vehicle?.name}</p>
                  <p className="text-white/80 text-sm">{vehicle?.capacity}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4">{vehicle?.tagline}</p>

                <ul className="space-y-2.5 mb-6">
                  {vehicle?.features?.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="CheckIcon" size={12} className="text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="font-700 text-primary text-base">{vehicle?.price}</span>
                  <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-700 hover:bg-primary/90 transition-all green-glow">
                    {vehicle?.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
