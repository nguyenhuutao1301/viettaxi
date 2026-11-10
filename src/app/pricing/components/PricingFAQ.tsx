'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    q: 'Giá cước có bao gồm phí cầu đường không?',
    a: 'Phí cầu đường và phí giữ xe tại sân bay không bao gồm trong giá cước cơ bản. Các khoản phí này sẽ được tính thêm và thông báo rõ trước chuyến đi.',
  },
  {
    q: 'Tôi có thể nhận hóa đơn VAT không?',
    a: 'Có. Vui lòng yêu cầu hóa đơn VAT khi đặt xe hoặc liên hệ bộ phận kế toán sau khi hoàn thành chuyến đi.',
  },
  {
    q: 'Có phụ phí ban đêm không?',
    a: 'Có phụ phí từ 23:00 đến 5:00 sáng, thường khoảng 10–15% so với giá ban ngày. Tài xế sẽ thông báo trước khi bắt đầu chuyến đi.',
  },
  {
    q: 'Thanh toán bằng hình thức nào?',
    a: 'Chúng tôi chấp nhận thanh toán tiền mặt (VND), chuyển khoản ngân hàng và các ví điện tử phổ biến như MoMo, ZaloPay, VNPay.',
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-section-lg font-extrabold text-foreground text-center mb-10">
          Câu Hỏi Về Giá Cước
        </h2>
        <div className="space-y-3">
          {faqs?.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${openIndex === i ? 'border-primary/30 bg-white' : 'border-border bg-white'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span
                  className={`font-700 text-sm sm:text-base ${openIndex === i ? 'text-primary' : 'text-foreground'}`}
                >
                  {faq?.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === i ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}
                >
                  <Icon name={openIndex === i ? 'MinusIcon' : 'PlusIcon'} size={16} />
                </div>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq?.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
