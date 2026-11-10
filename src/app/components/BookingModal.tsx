'use client';
import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface BookingModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function BookingModal({ isOpen: externalIsOpen, onClose }: BookingModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalOpen;
  const handleClose = onClose || (() => setInternalOpen(false));

  const [selectedVehicle, setSelectedVehicle] = useState('4-seat');
  const [formData, setFormData] = useState({ pickup: '', destination: '', phone: '', notes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative z-10 bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border px-5 py-4 flex items-center justify-between rounded-t-3xl sm:rounded-t-3xl z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon name="MapPinIcon" size={18} className="text-primary" variant="solid" />
            </div>
            <h2 className="font-800 text-foreground text-lg">Đặt Xe Của Bạn</h2>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"
            aria-label="Đóng"
          >
            <Icon name="XMarkIcon" size={18} />
          </button>
        </div>

        <div className="p-5">
          {!submitted ? (
            <>
              {/* Vehicle Selector */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { id: '4-seat', label: 'Taxi 4 Chỗ', sub: '1–4 hành khách' },
                  { id: '7-seat', label: 'Taxi 7 Chỗ', sub: '1–7 hành khách' },
                ].map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVehicle(v.id)}
                    className={`p-3 rounded-xl border-2 text-sm font-700 transition-all ${
                      selectedVehicle === v.id
                        ? 'border-primary bg-primary/8 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/40'
                    }`}
                  >
                    <div>{v.label}</div>
                    <div className="text-xs font-500 opacity-70">{v.sub}</div>
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
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
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
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
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
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
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <textarea
                  placeholder="Ghi chú thêm"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted text-foreground text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
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
                      Xác Nhận Đặt Xe
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircleIcon" size={36} variant="solid" className="text-primary" />
              </div>
              <h3 className="font-800 text-foreground text-xl mb-2">Đặt Xe Thành Công!</h3>
              <p className="text-muted-foreground text-sm mb-5">
                Đội ngũ của chúng tôi sẽ liên hệ để xác nhận chuyến đi trong vài phút.
              </p>
              <div className="bg-muted rounded-xl p-4 text-left text-sm space-y-2 mb-5">
                <div className="flex items-center gap-2">
                  <Icon name="MapPinIcon" size={14} className="text-primary" variant="solid" />
                  <span className="font-600 text-foreground">{formData.pickup}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="FlagIcon" size={14} className="text-accent" variant="solid" />
                  <span className="font-600 text-foreground">{formData.destination}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    name="PhoneIcon"
                    size={14}
                    className="text-muted-foreground"
                    variant="solid"
                  />
                  <span className="font-600 text-foreground">{formData.phone}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+84901234567"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white text-sm font-700"
                >
                  <Icon name="PhoneIcon" size={14} variant="solid" />
                  Gọi Hỗ Trợ
                </a>
                <button
                  onClick={handleClose}
                  className="py-3 rounded-xl border border-border text-foreground text-sm font-700 hover:bg-muted transition-colors"
                >
                  Đóng
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
