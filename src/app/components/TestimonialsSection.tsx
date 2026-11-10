import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
  {
    name: 'Nguyễn Thị Lan',
    location: 'TP. Hồ Chí Minh',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_13aed8945-1763297963817.png',
    avatarAlt: 'Vietnamese woman smiling, professional headshot, neutral light background',
    rating: 5,
    text: 'Đặt xe rất dễ dàng. Tài xế đến đúng giờ, xe sạch sẽ và thoải mái. Sẽ tiếp tục sử dụng dịch vụ này.',
    service: 'Taxi 4 Chỗ',
  },
  {
    name: 'Trần Văn Minh',
    location: 'Hà Nội',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a8c57267-1763295329115.png',
    avatarAlt: 'Vietnamese man professional headshot, warm smile, light background',
    rating: 5,
    text: 'Tôi thường xuyên đặt taxi sân bay qua VietTaxi. Tài xế luôn đúng giờ, thân thiện và biết đường rất tốt.',
    service: 'Taxi Sân Bay',
  },
  {
    name: 'Phạm Thị Hương',
    location: 'Đà Nẵng',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_13aed8945-1763297963817.png',
    avatarAlt: 'Vietnamese woman with warm smile, casual professional photo, soft background',
    rating: 5,
    text: 'Dịch vụ taxi 7 chỗ rất phù hợp cho cả gia đình tôi. Xe rộng rãi, sạch sẽ, tài xế rất nhiệt tình.',
    service: 'Taxi 7 Chỗ',
  },
  {
    name: 'Lê Hoàng Nam',
    location: 'Bình Dương',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_149425572-1772996388369.png',
    avatarAlt: 'Young Vietnamese professional man, casual smart attire, natural light',
    rating: 5,
    text: 'Đặt xe đường dài từ Bình Dương về Cần Thơ. Giá cả hợp lý, tài xế kinh nghiệm, chuyến đi rất thoải mái.',
    service: 'Taxi Đường Dài',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-700 text-sm uppercase tracking-widest mb-3">
            Đánh Giá Khách Hàng
          </span>
          <h2 className="text-section-xl font-extrabold text-foreground mb-4">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Hơn 50.000 chuyến đi thành công. Đây là chia sẻ từ khách hàng thực của chúng tôi.
          </p>
        </div>

        {/* 
           TESTIMONIALS GRID AUDIT:
           Array has 4 cards: [Lan, Minh, Huong, Nam]
           Row 1: [col-1: Lan cs-1] [col-2: Minh cs-1] [col-3: Huong cs-1] [col-4: Nam cs-1]
           Placed 4/4 ✓
          */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials?.map((t) => (
            <div
              key={t?.name}
              className="bg-white rounded-2xl p-6 card-shadow hover:card-shadow-lg transition-all hover:-translate-y-0.5 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t?.rating })?.map((_, i) => (
                  <Icon key={i} name="StarIcon" size={16} variant="solid" className="text-accent" />
                ))}
              </div>

              {/* Service badge */}
              <span className="inline-block bg-primary/10 text-primary text-xs font-700 px-2.5 py-1 rounded-full mb-4 self-start">
                {t?.service}
              </span>

              {/* Quote */}
              <p className="text-foreground text-sm leading-relaxed flex-1 mb-5 italic">
                &ldquo;{t?.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                    src={t?.avatar}
                    alt={t?.avatarAlt}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-700 text-foreground text-sm">{t?.name}</p>
                  <p className="text-muted-foreground text-xs">{t?.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
