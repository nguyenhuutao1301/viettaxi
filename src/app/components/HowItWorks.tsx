import React from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    step: '01',
    icon: 'MapPinIcon',
    title: 'Nhập Thông Tin Chuyến Đi',
    desc: 'Điền điểm đón, điểm đến và thông tin liên hệ của bạn vào biểu mẫu đặt xe.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    step: '02',
    icon: 'TruckIcon',
    title: 'Chọn Loại Xe',
    desc: 'Lựa chọn taxi 4 chỗ hoặc 7 chỗ phù hợp với số lượng hành khách và hành lý.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    step: '03',
    icon: 'CheckCircleIcon',
    title: 'Xác Nhận Đặt Xe',
    desc: 'Nhập số điện thoại và xác nhận. Đội ngũ sẽ liên hệ để xác nhận chuyến đi.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-700 text-sm uppercase tracking-widest mb-3">
            Quy Trình Đặt Xe
          </span>
          <h2 className="text-section-xl font-extrabold text-white mb-4">
            Đặt Xe Chỉ 3 Bước Đơn Giản
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Quy trình đặt xe nhanh gọn, dễ dàng. Chỉ mất chưa đến 1 phút.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] right-[-50%] h-0.5 bg-white/20 z-0" />
              )}

              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors text-center">
                <div className="text-white/30 font-900 text-5xl leading-none mb-4 font-extrabold">
                  {step.step}
                </div>
                <div
                  className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon name={step.icon as any} size={28} className={step.color} variant="solid" />
                </div>
                <h3 className="font-800 text-white text-lg mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-800 text-base hover:bg-white/90 transition-all card-shadow"
          >
            <Icon name="BoltIcon" size={20} variant="solid" />
            Đặt Xe Ngay Bây Giờ
          </a>
        </div>
      </div>
    </section>
  );
}
