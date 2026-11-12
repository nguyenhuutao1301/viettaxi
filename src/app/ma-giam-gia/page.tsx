import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/app/components/FloatingContactButtons';
import MobileBottomBar from '@/app/components/MobileBottomBar';
import BookingModal from '@/app/components/BookingModal';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Mã giảm giá taxi | VietTaxi',
  description:
    'Khám phá các chương trình ưu đãi và mã giảm giá taxi VietTaxi. Đặt xe nhanh, tiết kiệm chi phí và trải nghiệm dịch vụ tốt hơn.',
};

const promoCards = [
  {
    title: 'Ưu đãi mới khách',
    subtitle: 'Giảm 10% cho lần đặt xe đầu tiên',
    badge: 'HOT',
    text: 'Dành cho khách hàng mới đặt xe qua website hoặc hotline.',
  },
  {
    title: 'Khuyến mãi nhóm gia đình',
    subtitle: 'Giảm 5% cho đơn từ 2 xe',
    badge: 'FAMILY',
    text: 'Phù hợp dành cho chuyến đi gia đình, tiệc cưới, đoàn đi cùng lúc.',
  },
  {
    title: 'Ưu đãi sân bay',
    subtitle: 'Giảm 8% cho chuyến sân bay',
    badge: 'AIRPORT',
    text: 'Tối ưu cho khách đi công tác hoặc du lịch cần di chuyển đúng giờ.',
  },
  {
    title: 'Khách hàng thân thiết',
    subtitle: 'Điều kiện tích lũy mã ưu đãi theo mỗi chuyến',
    badge: 'VIP',
    text: 'Hỗ trợ thêm ưu đãi với các đơn đặt xe thường xuyên.',
  },
];

const steps = [
  'Chọn loại xe phù hợp với nhu cầu di chuyển',
  'Nhập thông tin đặt xe và số điện thoại',
  'Nhận ưu đãi trực tiếp khi xác nhận đơn',
  'Theo dõi đơn hàng và nhận hỗ trợ nhanh chóng',
];

export default function MaGiamGiaPage() {
  return (
    <>
      <Header />

      <main className="bg-background text-foreground">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <AppImage
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt="Mã giảm giá taxi"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-950/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/25 via-primary/10 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-2xl text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-700 uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Mã giảm giá
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Tiết Kiệm <span className="text-accent">Hơn Mỗi Chuyến Đi</span>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                Khám phá các chương trình ưu đãi dành cho taxi 4 chỗ, 7 chỗ và dịch vụ sân bay. Đặt
                xe nhanh, an toàn và tiết kiệm chi phí ngay hôm nay.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#promo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-800 text-primary-foreground transition hover:bg-primary/90"
                >
                  <Icon name="TicketIcon" size={18} variant="solid" />
                  Xem ưu đãi
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-sm font-700 text-white transition hover:bg-white/10"
                >
                  <Icon name="PhoneIcon" size={18} variant="solid" />
                  Gọi {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="promo" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-700 uppercase tracking-[0.2em] text-primary">Khuyến mãi</p>
            <h2 className="mt-3 text-3xl font-800 text-foreground sm:text-4xl">
              Ưu đãi đang áp dụng
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {promoCards.map((promo) => (
              <div
                key={promo.title}
                className="rounded-[28px] border border-border bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-800 uppercase tracking-[0.15em] text-primary">
                    {promo.badge}
                  </span>
                  <Icon name="TagIcon" size={20} className="text-primary" variant="solid" />
                </div>
                <h3 className="text-xl font-800 text-foreground">{promo.title}</h3>
                <p className="mt-2 text-base font-700 text-primary">{promo.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{promo.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-muted/60 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-700 uppercase tracking-[0.2em] text-primary">
                  Cách dùng
                </p>
                <h2 className="mt-3 text-3xl font-800 text-foreground sm:text-4xl">
                  Đặt xe nhanh hơn với ưu đãi ngay
                </h2>
                <ul className="mt-6 space-y-4">
                  {steps.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-base text-muted-foreground"
                    >
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-800 text-primary-foreground">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-border bg-white p-6 shadow-sm">
                <div className="mb-5 text-center">
                  <p className="text-sm font-700 uppercase tracking-[0.2em] text-primary">
                    Ưu đãi đặc biệt
                  </p>
                  <h3 className="mt-2 text-2xl font-800 text-foreground">
                    Mã áp dụng cho mọi dịch vụ
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-4 text-center">
                    <div className="text-xs font-700 uppercase tracking-[0.2em] text-primary">
                      Code
                    </div>
                    <div className="mt-2 text-3xl font-900 tracking-[0.2em] text-foreground">
                      VIETTAXI10
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-muted px-4 py-3 text-sm font-600 text-foreground">
                    Áp dụng cho lần đặt xe đầu tiên hoặc đơn trên 500.000đ.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[30px] border border-border bg-white p-6 shadow-lg sm:p-8">
            <div className="mb-6 text-center">
              <p className="text-sm font-700 uppercase tracking-[0.2em] text-primary">
                Đặt xe ngay
              </p>
              <h2 className="mt-3 text-3xl font-800 text-foreground sm:text-4xl">
                Nhận ưu đãi và đặt xe thuận tiện
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-3 rounded-2xl bg-primary px-5 py-4 text-sm font-800 text-primary-foreground transition hover:bg-primary/90"
              >
                <Icon name="PhoneIcon" size={18} variant="solid" />
                Gọi ngay: {siteConfig.contact.phone}
              </a>
              <a
                href="/"
                className="flex items-center justify-center gap-3 rounded-2xl border border-border bg-muted px-5 py-4 text-sm font-800 text-foreground transition hover:bg-background"
              >
                <Icon name="ArrowRightIcon" size={18} variant="solid" />
                Về trang chủ
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactButtons />
      <MobileBottomBar />
      <BookingModal />
    </>
  );
}
