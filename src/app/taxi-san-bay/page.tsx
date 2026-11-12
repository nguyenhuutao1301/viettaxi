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
  title: 'Taxi sân bay | VietTaxi - Đón khách đúng giờ',
  description:
    'Taxi sân bay VietTaxi - Dịch vụ đưa đón sân bay nhanh chóng, tiện lợi và an toàn với tài xế chuyên nghiệp 24/7.',
};

const highlights = [
  'Đón khách đúng giờ, theo lịch bay và thời gian thực',
  'Hỗ trợ chở gia đình, nhóm bạn, khách doanh nghiệp',
  'Phù hợp đường dài, sân bay nội địa và quốc tế',
  'Bảo đảm xe sạch, tài xế chuyên nghiệp và lịch trình rõ ràng',
];

const serviceBenefits = [
  {
    icon: 'ClockIcon',
    title: 'Đúng giờ',
    text: 'Theo dõi thời gian bay và đưa đón đúng lịch trình, giảm stress cho khách hàng.',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'An toàn',
    text: 'Tài xế được kiểm tra kỹ, xe sạch sẽ và quy trình vận hành rõ ràng.',
  },
  {
    icon: 'UsersIcon',
    title: 'Tiện nghi',
    text: 'Không gian rộng rãi cho hành lý và người đi cùng, di chuyển thoải mái.',
  },
  {
    icon: 'WalletIcon',
    title: 'Giá minh bạch',
    text: 'Thông tin chi phí rõ ràng trước khi khởi hành, không phát sinh thêm.',
  },
];

const pricing = [
  { label: 'Sân bay nội thành', value: 'Từ 250.000đ' },
  { label: 'Điểm ưu tiên theo thời gian', value: 'Tùy tuyến và thời điểm' },
  { label: 'Chuyến có nhiều hành lý / nhóm lớn', value: 'Theo báo giá thực tế' },
];

export default function TaxiSanBayPage() {
  return (
    <>
      <Header />

      <main className="bg-background text-foreground">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <AppImage
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
              alt="Taxi sân bay VietTaxi"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-950/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/25 via-primary/10 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="max-w-xl text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-700 uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  Taxi sân bay
                </span>

                <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                  Đưa Đón <span className="text-accent">Sân Bay</span> Nhanh Chóng
                </h1>

                <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
                  Dịch vụ taxi sân bay VietTaxi giúp bạn di chuyển thuận tiện, đúng giờ và an toàn
                  giữa sân bay và trung tâm thành phố, phù hợp cho cá nhân, gia đình và doanh
                  nghiệp.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#booking"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-800 text-primary-foreground transition hover:bg-primary/90"
                  >
                    <Icon name="CheckCircleIcon" size={18} variant="solid" />
                    Đặt xe ngay
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-6 py-3 text-sm font-700 text-white transition hover:bg-white/10"
                  >
                    <Icon name="PhoneIcon" size={18} variant="solid" />
                    Gọi {siteConfig.contact.phone}
                  </a>
                </div>

                <div className="mt-8 grid max-w-md grid-cols-2 gap-4 text-sm text-white/80">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-800 text-white">24/7</div>
                    <div className="mt-1">Hỗ trợ</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-800 text-white">A1</div>
                    <div className="mt-1">Chất lượng</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white p-6 text-left shadow-2xl backdrop-blur-sm">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon name="MapPinIcon" size={22} className="text-primary" variant="solid" />
                  </div>
                  <div>
                    <h2 className="text-xl font-800 text-foreground">Taxi sân bay</h2>
                    <p className="text-sm text-muted-foreground">Đón khách đúng giờ và tiện lợi</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-border bg-muted p-3">
                    <div className="mb-1 text-xs font-700 uppercase tracking-[0.15em] text-muted-foreground">
                      Điểm đón
                    </div>
                    <div className="text-sm font-600 text-foreground">
                      Sân bay / địa điểm của bạn
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-muted p-3">
                    <div className="mb-1 text-xs font-700 uppercase tracking-[0.15em] text-muted-foreground">
                      Điểm đến
                    </div>
                    <div className="text-sm font-600 text-foreground">
                      Trung tâm thành phố / khu vực mong muốn
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border bg-muted p-3">
                    <div className="mb-1 text-xs font-700 uppercase tracking-[0.15em] text-muted-foreground">
                      Số điện thoại
                    </div>
                    <div className="text-sm font-600 text-foreground">
                      Xác nhận đặt xe nhanh chóng
                    </div>
                  </div>
                </div>

                <a
                  href="#booking"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-800 text-primary-foreground transition hover:bg-primary/90"
                >
                  <Icon name="CheckCircleIcon" size={18} variant="solid" />
                  Đặt xe ngay
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-700 uppercase tracking-[0.2em] text-primary">
              Tại sao chọn dịch vụ sân bay
            </p>
            <h2 className="mt-3 text-3xl font-800 text-foreground sm:text-4xl">
              Thoải mái, an tâm và đúng giờ
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceBenefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon name={item.icon} size={22} className="text-primary" variant="solid" />
                </div>
                <h3 className="mb-2 text-lg font-800 text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-muted/60 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-700 uppercase tracking-[0.2em] text-primary">Lợi ích</p>
                <h2 className="mt-3 text-3xl font-800 text-foreground sm:text-4xl">
                  Phù hợp cho mọi hành trình bay
                </h2>
                <ul className="mt-6 space-y-4">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base text-muted-foreground"
                    >
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon name="CheckIcon" size={14} variant="solid" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-border bg-white p-6 shadow-sm">
                <div className="mb-5 text-center">
                  <p className="text-sm font-700 uppercase tracking-[0.2em] text-primary">
                    Bảng giá tham khảo
                  </p>
                  <h3 className="mt-2 text-2xl font-800 text-foreground">Taxi sân bay</h3>
                </div>
                <div className="space-y-3">
                  {pricing.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-border bg-muted px-4 py-3"
                    >
                      <span className="text-sm font-600 text-foreground">{item.label}</span>
                      <span className="text-sm font-800 text-primary">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[30px] border border-border bg-white p-6 shadow-lg sm:p-8">
            <div className="mb-6 text-center">
              <p className="text-sm font-700 uppercase tracking-[0.2em] text-primary">Đặt xe</p>
              <h2 className="mt-3 text-3xl font-800 text-foreground sm:text-4xl">
                Đặt Taxi Sân Bay Cho Chuyến Đi Của Bạn
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
