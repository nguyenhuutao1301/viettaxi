import React from 'react';
import Icon from '@/components/ui/AppIcon';

const features = [
  {
    icon: 'BoltIcon',
    title: 'Đặt Xe Nhanh Chóng',
    desc: 'Đặt taxi trực tuyến chỉ trong vài giây. Không cần chờ đợi, không cần gọi điện.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Tài Xế Chuyên Nghiệp',
    desc: 'Tài xế có kinh nghiệm, lịch sự, được đào tạo bài bản và kiểm tra kỹ lưỡng.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: 'CurrencyDollarIcon',
    title: 'Giá Cả Minh Bạch',
    desc: 'Báo giá rõ ràng, không phụ phí ẩn. Bạn biết giá trước khi lên xe.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'An Toàn & Thoải Mái',
    desc: 'Xe sạch sẽ, được bảo dưỡng định kỳ. Hành trình an toàn là ưu tiên số một.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: 'ClockIcon',
    title: 'Phục Vụ 24/7',
    desc: 'Đặt xe bất cứ lúc nào, kể cả đêm khuya hay sáng sớm. Chúng tôi luôn sẵn sàng.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Phủ Khắp Toàn Quốc',
    desc: 'Hoạt động tại 63 tỉnh thành. Từ thành phố lớn đến vùng ngoại ô, chúng tôi có mặt.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-700 text-sm uppercase tracking-widest mb-3">
            Tại Sao Chọn Chúng Tôi
          </span>
          <h2 className="text-section-xl font-extrabold text-foreground mb-4">
            Tại Sao Chọn Dịch Vụ Taxi Của Chúng Tôi?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hơn 50.000 chuyến đi mỗi tháng tin tưởng sử dụng VietTaxi. Đây là lý do tại sao.
          </p>
        </div>

        {/* Bento Grid - asymmetric layout */}
        {/* 
          BENTO GRID AUDIT:
          Array has 6 cards: [FastBooking, ProDrivers, Pricing, Safe, 24/7, Nationwide]
          Row 1: [col-1: FastBooking cs-1] [col-2: ProDrivers cs-1] [col-3: Pricing cs-1]
          Row 2: [col-1: Safe cs-1] [col-2: 24/7 cs-1] [col-3: Nationwide cs-1]
          Placed 6/6 ✓
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group bg-white border border-border rounded-2xl p-6 hover:border-primary/30 hover:card-shadow transition-all duration-300 hover:-translate-y-0.5 ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}
              >
                <Icon name={feature.icon as any} size={24} />
              </div>
              <h3 className="font-800 text-foreground text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
