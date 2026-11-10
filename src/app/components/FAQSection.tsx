'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';

const faqs = [
  {
    q: 'Làm thế nào để đặt taxi trực tuyến?',
    a: 'Điền thông tin điểm đón, điểm đến, chọn loại xe và nhập số điện thoại vào biểu mẫu đặt xe. Nhấn "Đặt Xe Ngay" và đội ngũ của chúng tôi sẽ liên hệ xác nhận trong vài phút.',
  },
  {
    q: 'Sự khác biệt giữa taxi 4 chỗ và taxi 7 chỗ là gì?',
    a: 'Taxi 4 chỗ phù hợp cho 1–4 hành khách, lý tưởng cho đi lại trong thành phố. Taxi 7 chỗ phù hợp cho 1–7 hành khách, sức chứa hành lý lớn hơn, lý tưởng cho gia đình, nhóm bạn hoặc chuyến đi sân bay.',
  },
  {
    q: 'Tôi có thể đặt xe trước không?',
    a: 'Có, bạn có thể đặt xe trước nhiều ngày. Chỉ cần điền thông tin chuyến đi và thời gian mong muốn vào phần ghi chú khi đặt xe.',
  },
  {
    q: 'Bạn có dịch vụ đưa đón sân bay không?',
    a: 'Có. Chúng tôi cung cấp dịch vụ đưa đón tại tất cả các sân bay lớn ở Việt Nam với giá cố định, theo dõi chuyến bay và hỗ trợ hành lý.',
  },
  {
    q: 'Tôi có thể đặt taxi cho chuyến đi đường dài không?',
    a: 'Có. Chúng tôi cung cấp dịch vụ taxi liên tỉnh đi khắp Việt Nam. Vui lòng liên hệ để nhận báo giá cụ thể cho tuyến đường của bạn.',
  },
  {
    q: 'Giá cước taxi tại Việt Nam là bao nhiêu?',
    a: 'Giá taxi 4 chỗ từ 15.000 VND/km, taxi 7 chỗ từ 20.000 VND/km. Dịch vụ sân bay có giá cố định từ 250.000 VND. Giá cuối phụ thuộc vào quãng đường và tuyến đường.',
  },
  {
    q: 'Tôi có thể yêu cầu loại xe cụ thể không?',
    a: 'Bạn có thể chọn taxi 4 chỗ hoặc 7 chỗ. Nếu có yêu cầu đặc biệt về dòng xe, vui lòng ghi chú khi đặt xe hoặc liên hệ trực tiếp.',
  },
  {
    q: 'Dịch vụ taxi có hoạt động 24/7 không?',
    a: 'Có. Chúng tôi hoạt động 24 giờ mỗi ngày, 7 ngày mỗi tuần, kể cả ngày lễ. Bạn có thể đặt xe bất cứ lúc nào.',
  },
  {
    q: 'Làm thế nào để liên hệ với tài xế?',
    a: `Sau khi đặt xe thành công, chúng tôi sẽ gửi thông tin liên hệ của tài xế qua SMS hoặc gọi điện. Bạn cũng có thể liên hệ tổng đài ${siteConfig.contact.phone} để được hỗ trợ.`,
  },
  {
    q: 'Tôi có thể hủy đặt xe không?',
    a:
      'Có. Bạn có thể hủy đặt xe miễn phí trước 30 phút so với giờ đón. Vui lòng liên hệ tổng đài ' +
      siteConfig.contact.phone +
      ' để hủy chuyến.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-700 text-sm uppercase tracking-widest mb-3">
            Câu Hỏi Thường Gặp
          </span>
          <h2 className="text-section-xl font-extrabold text-foreground mb-4">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Không tìm thấy câu trả lời? Gọi cho chúng tôi theo số {siteConfig.contact.phone}.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs?.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                openIndex === i ? 'border-primary/30 bg-primary/3' : 'border-border bg-white'
              }`}
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
                  className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    openIndex === i ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                  }`}
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
