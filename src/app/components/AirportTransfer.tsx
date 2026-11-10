import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';

const features = [
  { icon: 'MapPinIcon', label: 'Đón tại cửa đến' },
  { icon: 'FlagIcon', label: 'Đưa đến sân bay' },
  { icon: 'EyeIcon', label: 'Theo dõi chuyến bay' },
  { icon: 'ArchiveBoxIcon', label: 'Hỗ trợ hành lý' },
  { icon: 'CurrencyDollarIcon', label: 'Giá cố định' },
  { icon: 'UserGroupIcon', label: 'Tài xế chuyên nghiệp' },
];

export default function AirportTransfer() {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] card-shadow-xl">
              <AppImage
                src="https://images.unsplash.com/photo-1506534334119-f3322cf80363"
                alt="Vietnam international airport terminal at golden hour, aircraft on tarmac, warm amber sky, professional airport environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 card-shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="ClockIcon" size={20} className="text-primary" variant="solid" />
                </div>
                <div>
                  <p className="font-800 text-foreground text-sm">Đúng Giờ</p>
                  <p className="text-muted-foreground text-xs">Cam kết 98.5%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7">
            <span className="inline-block text-primary font-700 text-sm uppercase tracking-widest mb-4">
              Dịch Vụ Sân Bay
            </span>
            <h2 className="text-section-xl font-extrabold text-foreground mb-5">
              Taxi Sân Bay Đáng Tin Cậy
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Đặt taxi 4 chỗ hoặc 7 chỗ đưa đón tại các sân bay lớn trên toàn Việt Nam. Đúng giờ,
              chuyên nghiệp, giá cố định — không lo phát sinh.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5 bg-muted rounded-xl p-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={f.icon as any} size={16} className="text-primary" variant="solid" />
                  </div>
                  <span className="text-foreground text-sm font-600">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-800 hover:bg-primary/90 transition-all green-glow"
              >
                <Icon name="MapPinIcon" size={18} variant="solid" />
                Đặt Taxi Sân Bay
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-7 py-3.5 rounded-xl font-700 hover:bg-primary/5 transition-colors"
              >
                <Icon name="PhoneIcon" size={18} variant="solid" />
                Gọi Ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
