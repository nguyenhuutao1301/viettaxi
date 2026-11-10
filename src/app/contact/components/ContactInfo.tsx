import React from 'react';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';

const contactItems = [
  {
    icon: 'PhoneIcon',
    label: 'Hotline',
    value: siteConfig.contact.phone,
    sub: 'Hoạt động 24/7',
    href: `tel:${siteConfig.contact.phone}`,
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'support@viettaxi.vn',
    sub: 'Phản hồi trong 2 giờ',
    href: 'mailto:support@viettaxi.vn',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: 'ChatBubbleLeftIcon',
    label: 'Zalo',
    value: siteConfig.contact.zalo,
    sub: 'Chat trực tiếp',
    href: siteConfig.contact.zalo,
    color: 'bg-blue-50 text-blue-500',
  },
  {
    icon: 'MapPinIcon',
    label: 'Địa Chỉ',
    value: '123 Nguyễn Huệ, Quận 1',
    sub: 'TP. Hồ Chí Minh',
    href: 'https://maps.google.com',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: 'ClockIcon',
    label: 'Giờ Làm Việc',
    value: 'Thứ 2 – Chủ Nhật',
    sub: '24 giờ / 7 ngày',
    href: null,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: 'BuildingOfficeIcon',
    label: 'Văn Phòng HN',
    value: '456 Hoàn Kiếm, Hà Nội',
    sub: 'Văn phòng đại diện',
    href: 'https://maps.google.com',
    color: 'bg-green-50 text-green-600',
  },
];

export default function ContactInfo() {
  return (
    <section className="py-16 lg:py-20 bg-muted">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-section-lg font-extrabold text-foreground mb-3">Thông Tin Liên Hệ</h2>
          <p className="text-muted-foreground">Nhiều kênh liên hệ để phục vụ bạn tốt nhất.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {contactItems.map((item) => {
            const content = (
              <div className="bg-white rounded-2xl p-5 card-shadow hover:card-shadow-lg transition-all hover:-translate-y-0.5 flex items-start gap-4 h-full">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}
                >
                  <Icon name={item.icon as any} size={22} variant="solid" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-600 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="font-800 text-foreground text-base">{item.value}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{item.sub}</p>
                </div>
              </div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
