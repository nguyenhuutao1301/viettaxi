'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';

const vehicleTypes = [
  { id: '4-seat', label: 'Taxi 4 Chỗ', icon: 'TruckIcon', desc: '1–4 hành khách' },
  { id: '7-seat', label: 'Taxi 7 Chỗ', icon: 'TruckIcon', desc: '1–7 hành khách' },
];

export default function HeroSection() {
  const [selectedVehicle, setSelectedVehicle] = useState('4-seat');
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    phone: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="relative min-h-screen flex flex-col"
      style={{ minHeight: '100svh' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1554713581-e00542e94535"
          alt="Modern taxi driving through illuminated Vietnamese city streets at night, warm orange street lights reflecting on wet road"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Scrim */}
        <div className="absolute inset-0 hero-scrim" />
        {/* Green tint overlay */}
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-20 pb-8 lg:pt-28 lg:pb-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Hero Text */}
            <div className="lg:col-span-6 xl:col-span-7 text-white">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 px-3 py-1.5 rounded-full text-xs font-700 uppercase tracking-wider text-white mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Hoạt động 24/7 trên toàn quốc
              </div>

              <h1 className="text-hero-xl font-extrabold text-white mb-6 leading-tight">
                Đặt Taxi Tại Việt Nam –{' '}
                <span className="text-accent">Nhanh, An Toàn & Tin Cậy</span>
              </h1>

              <p className="text-lg lg:text-xl text-white/85 leading-relaxed mb-8 max-w-xl">
                Đặt taxi 4 chỗ hoặc 7 chỗ trực tuyến chỉ trong vài giây. Tài xế chuyên nghiệp, giá
                minh bạch và đón khách thuận tiện khắp Việt Nam.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-6">
                {[
                  { value: '50,000+', label: 'Chuyến đi/tháng' },
                  { value: '4.9★', label: 'Đánh giá trung bình' },
                  { value: '63', label: 'Tỉnh thành' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-2xl font-800 text-white leading-none">{stat.value}</span>
                    <span className="text-xs text-white/60 mt-0.5 font-500">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Booking Card */}
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="bg-white rounded-3xl card-shadow-xl p-6 lg:p-8">
                {!submitted ? (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon
                          name="MapPinIcon"
                          size={20}
                          className="text-primary"
                          variant="solid"
                        />
                      </div>
                      <div>
                        <h2 className="font-800 text-foreground text-lg leading-tight">
                          Đặt Xe Của Bạn
                        </h2>
                        <p className="text-muted-foreground text-xs">
                          Điền thông tin để đặt xe ngay
                        </p>
                      </div>
                    </div>

                    {/* Vehicle Selector */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {vehicleTypes.map((v) => (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setSelectedVehicle(v.id)}
                          className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all text-sm font-700 ${
                            selectedVehicle === v.id
                              ? 'border-primary bg-primary/8 text-primary'
                              : 'border-border text-muted-foreground hover:border-primary/40'
                          }`}
                        >
                          <Icon
                            name="TruckIcon"
                            size={22}
                            className={
                              selectedVehicle === v.id ? 'text-primary' : 'text-muted-foreground'
                            }
                          />

                          <span>{v.label}</span>
                          <span className="text-xs font-500 opacity-70">{v.desc}</span>
                        </button>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      {/* Pickup */}
                      <div className="relative">
                        <Icon
                          name="MapPinIcon"
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
                          variant="solid"
                        />
                        <input
                          type="text"
                          placeholder="Điểm đón *"
                          required
                          value={formData.pickup}
                          onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                          className="w-full pl-9 pr-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>

                      {/* Destination */}
                      <div className="relative">
                        <Icon
                          name="FlagIcon"
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-accent"
                          variant="solid"
                        />
                        <input
                          type="text"
                          placeholder="Điểm đến *"
                          required
                          value={formData.destination}
                          onChange={(e) =>
                            setFormData({ ...formData, destination: e.target.value })
                          }
                          className="w-full pl-9 pr-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <Icon
                          name="PhoneIcon"
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                          variant="solid"
                        />
                        <input
                          type="tel"
                          placeholder="Số điện thoại *"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                      </div>

                      {/* Notes */}
                      <textarea
                        placeholder="Ghi chú thêm (tùy chọn)"
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-800 text-base hover:bg-primary/90 transition-all green-glow disabled:opacity-70 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Đang xử lý...
                          </>
                        ) : (
                          <>
                            <Icon name="CheckCircleIcon" size={20} variant="solid" />
                            Đặt Xe Ngay
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-2 text-center">
                        <div className="flex-1 h-px bg-border" />
                        <span className="text-muted-foreground text-xs">hoặc</span>
                        <div className="flex-1 h-px bg-border" />
                      </div>

                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-primary text-primary font-700 text-sm hover:bg-primary/5 transition-colors"
                      >
                        <Icon name="PhoneIcon" size={16} variant="solid" />
                        Gọi Ngay: {siteConfig.contact.phone}
                      </a>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name="CheckCircleIcon"
                        size={36}
                        variant="solid"
                        className="text-primary"
                      />
                    </div>
                    <h3 className="font-800 text-foreground text-xl mb-2">Đặt Xe Thành Công!</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Cảm ơn bạn. Đội ngũ của chúng tôi sẽ liên hệ để xác nhận chuyến đi.
                    </p>
                    <div className="bg-muted rounded-xl p-4 text-left text-sm space-y-2 mb-6">
                      <div className="flex items-center gap-2">
                        <Icon
                          name="MapPinIcon"
                          size={14}
                          className="text-primary"
                          variant="solid"
                        />
                        <span className="text-foreground font-600">{formData.pickup}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="FlagIcon" size={14} className="text-accent" variant="solid" />
                        <span className="text-foreground font-600">{formData.destination}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon
                          name="PhoneIcon"
                          size={14}
                          className="text-muted-foreground"
                          variant="solid"
                        />
                        <span className="text-foreground font-600">{formData.phone}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-white text-sm font-700"
                      >
                        <Icon name="PhoneIcon" size={14} variant="solid" />
                        Gọi Hỗ Trợ
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ pickup: '', destination: '', phone: '', notes: '' });
                        }}
                        className="py-2.5 rounded-xl border border-border text-foreground text-sm font-700 hover:bg-muted transition-colors"
                      >
                        Đóng
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative z-10 flex justify-center pb-6">
        <div className="flex flex-col items-center gap-1 text-white/50 text-xs font-500">
          <span>Cuộn xuống để xem thêm</span>
          <Icon name="ChevronDownIcon" size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
