import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const articles = [
  {
    slug: '/blog/dat-taxi-online-viet-nam',
    category: 'Hướng Dẫn',
    title: 'Cách Đặt Taxi Trực Tuyến tại Việt Nam',
    desc: 'Hướng dẫn chi tiết từng bước để đặt taxi nhanh chóng và an toàn qua internet.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_4d2059ca6-1789021512134.png',
    imageAlt:
      'Person using smartphone to book taxi online, bright modern interior, Vietnamese city background',
    date: '05/09/2026',
    readTime: '3 phút đọc',
  },
  {
    slug: '/blog/taxi-4-cho-vs-7-cho',
    category: 'So Sánh',
    title: 'Taxi 4 Chỗ hay 7 Chỗ: Nên Chọn Loại Nào?',
    desc: 'Phân tích ưu nhược điểm của từng loại xe giúp bạn đưa ra lựa chọn phù hợp nhất.',
    image: 'https://images.unsplash.com/photo-1708823338902-0b8a2246e1ed',
    imageAlt: 'Two different size cars side by side on Vietnamese road, daylight comparison shot',
    date: '28/08/2026',
    readTime: '4 phút đọc',
  },
  {
    slug: '/blog/gia-cuoc-taxi-viet-nam',
    category: 'Giá Cước',
    title: 'Giá Cước Taxi tại Việt Nam Năm 2026',
    desc: 'Tổng hợp giá cước taxi tại các thành phố lớn. So sánh và lời khuyên tiết kiệm chi phí.',
    image: 'https://images.unsplash.com/photo-1549875291-d97f3f00081b',
    imageAlt: 'Vietnamese dong currency bills on table with calculator, financial planning concept',
    date: '20/08/2026',
    readTime: '5 phút đọc',
  },
  {
    slug: '/blog/taxi-san-bay-ho-chi-minh',
    category: 'Sân Bay',
    title: 'Cách Tốt Nhất Di Chuyển Từ Sân Bay Tân Sơn Nhất',
    desc: 'Hướng dẫn đầy đủ về các lựa chọn di chuyển từ sân bay Tân Sơn Nhất vào trung tâm TP.HCM.',
    image: 'https://images.unsplash.com/photo-1713763237509-42a9dbfdb7c5',
    imageAlt:
      'Ho Chi Minh City airport exterior, passengers with luggage, taxi pickup area, bright daylight',
    date: '12/08/2026',
    readTime: '4 phút đọc',
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-primary font-700 text-sm uppercase tracking-widest mb-3">
              Blog
            </span>
            <h2 className="text-section-lg font-extrabold text-foreground">
              Cẩm Nang Du Lịch Taxi
            </h2>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-700 text-sm hover:gap-3 transition-all flex-shrink-0"
          >
            Xem tất cả bài viết
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles?.map((article) => (
            <a
              key={article?.slug}
              href={article?.slug}
              className="group bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-lg transition-all hover:-translate-y-0.5 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <AppImage
                  src={article?.image}
                  alt={article?.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground text-xs font-700 px-2.5 py-1 rounded-full">
                    {article?.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-800 text-foreground text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article?.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
                  {article?.desc}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                  <span>{article?.date}</span>
                  <span className="flex items-center gap-1">
                    <Icon name="ClockIcon" size={12} />
                    {article?.readTime}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
