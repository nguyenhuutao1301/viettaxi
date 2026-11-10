import React from 'react';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const pricingPlans = [
  {
    id: 'taxi-4',
    name: 'Taxi 4 Chỗ',
    price: 'Từ 11.000',
    unit: 'VND/km',
    desc: 'Phù hợp cho cá nhân và nhóm nhỏ',
    features: [
      '1–4 hành khách',
      'Nội thành & ngoại thành',
      'Điều hòa không khí',
      'Tài xế chuyên nghiệp',
      'Đặt trước hoặc tức thì',
    ],
    cta: 'Đặt Taxi 4 Chỗ',
    highlight: false,
  },
  {
    id: 'taxi-7',
    name: 'Taxi 7 Chỗ',
    price: 'Từ 13.000',
    unit: 'VND/km',
    desc: 'Lý tưởng cho gia đình và nhóm lớn',
    features: [
      '1–7 hành khách',
      'Hành lý lớn',
      'Điều hòa không khí',
      'Ghế ngồi rộng rãi',
      'Đặt trước hoặc tức thì',
    ],
    cta: 'Đặt Taxi 7 Chỗ',
    highlight: true,
  },
  {
    id: 'airport',
    name: 'Đưa Đón Sân Bay',
    price: 'Từ 250.000',
    unit: 'VND/chuyến',
    desc: 'Cố định giá, không lo phát sinh',
    features: [
      'Đón tại cửa đến',
      'Theo dõi chuyến bay',
      'Hỗ trợ hành lý',
      'Giá cố định',
      'Đúng giờ đảm bảo',
    ],
    cta: 'Đặt Sân Bay',
    highlight: false,
  },
  {
    id: 'intercity',
    name: 'Taxi Đường Dài',
    price: 'Báo giá',
    unit: 'theo yêu cầu',
    desc: 'Di chuyển liên tỉnh, liên hệ để có giá tốt nhất',
    features: [
      'Toàn quốc',
      'Giá cố định',
      'Nhiều điểm dừng',
      'Tài xế kinh nghiệm',
      'Đặt trước 24h',
    ],
    cta: 'Liên Hệ Báo Giá',
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-700 text-sm uppercase tracking-widest mb-3">
            Bảng Giá
          </span>
          <h2 className="text-section-xl font-extrabold text-foreground mb-4">
            Giá Taxi Đơn Giản & Minh Bạch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Không phụ phí ẩn. Bạn biết giá trước khi lên xe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {pricingPlans?.map((plan) => (
            <div
              key={plan?.id}
              className={`rounded-2xl p-6 flex flex-col transition-all hover:-translate-y-0.5 ${
                plan?.highlight
                  ? 'bg-primary text-primary-foreground green-glow ring-2 ring-primary ring-offset-2'
                  : 'bg-white border border-border card-shadow hover:card-shadow-lg'
              }`}
            >
              {plan?.highlight && (
                <span className="inline-block bg-accent text-accent-foreground text-xs font-700 px-3 py-1 rounded-full mb-4 self-start">
                  Được chọn nhiều nhất
                </span>
              )}
              <h3
                className={`font-800 text-lg mb-1 ${plan?.highlight ? 'text-white' : 'text-foreground'}`}
              >
                {plan?.name}
              </h3>
              <p
                className={`text-sm mb-4 ${plan?.highlight ? 'text-white/70' : 'text-muted-foreground'}`}
              >
                {plan?.desc}
              </p>
              <div className="mb-5">
                <span
                  className={`text-3xl font-extrabold ${plan?.highlight ? 'text-white' : 'text-primary'}`}
                >
                  {plan?.price}
                </span>
                <span
                  className={`text-sm ml-1 ${plan?.highlight ? 'text-white/70' : 'text-muted-foreground'}`}
                >
                  {plan?.unit}
                </span>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan?.features?.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Icon
                      name="CheckIcon"
                      size={14}
                      className={plan?.highlight ? 'text-accent' : 'text-primary'}
                    />
                    <span className={plan?.highlight ? 'text-white/85' : 'text-foreground'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`block text-center py-3 rounded-xl font-700 text-sm transition-all ${
                  plan?.highlight
                    ? 'bg-white text-primary hover:bg-white/90'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90 green-glow'
                }`}
              >
                {plan?.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3 max-w-3xl mx-auto">
          <Icon
            name="InformationCircleIcon"
            size={20}
            className="text-amber-600 flex-shrink-0 mt-0.5"
          />
          <div>
            <p className="text-amber-800 text-sm font-600">Lưu ý về giá cước:</p>
            <p className="text-amber-700 text-sm mt-1">
              Giá cuối có thể thay đổi tùy theo quãng đường, tuyến đường, tình trạng giao thông và
              thời gian di chuyển.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-800 text-base hover:bg-primary/90 transition-all green-glow"
          >
            <Icon name="CalculatorIcon" size={20} />
            Xem Bảng Giá Chi Tiết
          </Link>
        </div>
      </div>
    </section>
  );
}
