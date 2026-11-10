'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';

type FormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  pickup: string;
  destination: string;
  vehicle: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    subject: 'booking',
    pickup: '',
    destination: '',
    vehicle: '4-seat',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left */}
          <div className="lg:col-span-4">
            <h2 className="text-section-lg font-extrabold text-foreground mb-4">Gửi Tin Nhắn</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Điền thông tin và chúng tôi sẽ liên hệ lại trong vòng 30 phút. Hoặc gọi ngay để được
              phục vụ nhanh hơn.
            </p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-2xl font-800 hover:bg-primary/90 transition-all green-glow mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Icon name="PhoneIcon" size={20} variant="solid" />
              </div>
              <div>
                <p className="text-xs text-white/70">Hotline 24/7</p>
                <p className="text-lg font-800">{siteConfig.contact.phone}</p>
              </div>
            </a>
            <a
              href={siteConfig.contact.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-500 text-white px-6 py-4 rounded-2xl font-800 hover:bg-blue-600 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Icon name="ChatBubbleLeftIcon" size={20} />
              </div>
              <div>
                <p className="text-xs text-white/70">Chat ngay</p>
                <p className="text-lg font-800">Zalo</p>
              </div>
            </a>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-border rounded-3xl p-6 lg:p-8 card-shadow space-y-4"
              >
                {/* Subject */}
                <div>
                  <label className="block text-foreground text-sm font-700 mb-1.5">
                    Loại yêu cầu
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  >
                    <option value="booking">Đặt xe</option>
                    <option value="quote">Yêu cầu báo giá</option>
                    <option value="support">Hỗ trợ khách hàng</option>
                    <option value="complaint">Phản hồi / Khiếu nại</option>
                    <option value="partnership">Hợp tác kinh doanh</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-foreground text-sm font-700 mb-1.5">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground text-sm font-700 mb-1.5">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder={siteConfig.contact.phone}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-foreground text-sm font-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>

                {/* Pickup + Destination (shown for booking) */}
                {formData.subject === 'booking' || formData.subject === 'quote' ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-foreground text-sm font-700 mb-1.5">
                        Điểm đón
                      </label>
                      <div className="relative">
                        <Icon
                          name="MapPinIcon"
                          size={14}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
                          variant="solid"
                        />
                        <input
                          type="text"
                          name="pickup"
                          placeholder="Nhập điểm đón"
                          value={formData.pickup}
                          onChange={handleChange}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-foreground text-sm font-700 mb-1.5">
                        Điểm đến
                      </label>
                      <div className="relative">
                        <Icon
                          name="FlagIcon"
                          size={14}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-accent"
                          variant="solid"
                        />
                        <input
                          type="text"
                          name="destination"
                          placeholder="Nhập điểm đến"
                          value={formData.destination}
                          onChange={handleChange}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Vehicle (shown for booking/quote) */}
                {(formData.subject === 'booking' || formData.subject === 'quote') && (
                  <div>
                    <label className="block text-foreground text-sm font-700 mb-1.5">Loại xe</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: '4-seat', label: 'Taxi 4 Chỗ' },
                        { id: '7-seat', label: 'Taxi 7 Chỗ' },
                      ].map((v) => (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, vehicle: v.id })}
                          className={`py-2.5 rounded-xl border-2 text-sm font-700 transition-all ${
                            formData.vehicle === v.id
                              ? 'border-primary bg-primary/8 text-primary'
                              : 'border-border text-muted-foreground hover:border-primary/40'
                          }`}
                        >
                          {v.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-foreground text-sm font-700 mb-1.5">Tin nhắn</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Nhập nội dung tin nhắn của bạn..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-800 text-base hover:bg-primary/90 transition-all green-glow disabled:opacity-70 flex items-center justify-center gap-2"
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
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <Icon name="PaperAirplaneIcon" size={20} variant="solid" />
                      Gửi Tin Nhắn
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="bg-white border border-border rounded-3xl p-10 card-shadow text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon name="CheckCircleIcon" size={36} variant="solid" className="text-primary" />
                </div>
                <h3 className="font-800 text-foreground text-2xl mb-3">Gửi Thành Công!</h3>
                <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                  Cảm ơn bạn đã liên hệ. Đội ngũ VietTaxi sẽ phản hồi trong vòng 30 phút qua số điện
                  thoại <span className="font-700 text-primary">{formData.phone}</span>.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href="tel:+84901234567"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-700 text-sm"
                  >
                    <Icon name="PhoneIcon" size={16} variant="solid" />
                    Gọi Ngay
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        subject: 'booking',
                        pickup: '',
                        destination: '',
                        vehicle: '4-seat',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-xl font-700 text-sm hover:bg-muted transition-colors"
                  >
                    Gửi Tin Nhắn Khác
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
