import React from 'react';
import Icon from '@/components/ui/AppIcon';

const pricingData = [
  {
    category: 'Taxi 4 Chỗ',
    icon: 'TruckIcon',
    color: 'text-primary',
    bg: 'bg-primary/10',
    rows: [
      { route: 'Nội thành (dưới 10km)', price: '150.000 – 200.000', unit: 'VND' },
      { route: 'Nội thành (10–30km)', price: '200.000 – 450.000', unit: 'VND' },
      { route: 'Ngoại thành (30–50km)', price: '450.000 – 700.000', unit: 'VND' },
      { route: 'Giá theo km', price: '15.000 – 18.000', unit: 'VND/km' },
    ],
  },
  {
    category: 'Taxi 7 Chỗ',
    icon: 'TruckIcon',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    rows: [
      { route: 'Nội thành (dưới 10km)', price: '180.000 – 250.000', unit: 'VND' },
      { route: 'Nội thành (10–30km)', price: '250.000 – 550.000', unit: 'VND' },
      { route: 'Ngoại thành (30–50km)', price: '550.000 – 850.000', unit: 'VND' },
      { route: 'Giá theo km', price: '20.000 – 23.000', unit: 'VND/km' },
    ],
  },
  {
    category: 'Taxi Sân Bay',
    icon: 'MapPinIcon',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    rows: [
      { route: 'Tân Sơn Nhất ↔ Quận 1', price: '250.000 – 300.000', unit: 'VND' },
      { route: 'Tân Sơn Nhất ↔ Bình Dương', price: '500.000 – 700.000', unit: 'VND' },
      { route: 'Nội Bài ↔ Hà Nội', price: '300.000 – 400.000', unit: 'VND' },
      { route: 'Đà Nẵng ↔ Trung tâm', price: '150.000 – 200.000', unit: 'VND' },
    ],
  },
  {
    category: 'Taxi Đường Dài',
    icon: 'GlobeAltIcon',
    color: 'text-green-700',
    bg: 'bg-green-50',
    rows: [
      { route: 'TP.HCM ↔ Bình Dương', price: '400.000 – 600.000', unit: 'VND' },
      { route: 'TP.HCM ↔ Vũng Tàu', price: '700.000 – 1.000.000', unit: 'VND' },
      { route: 'TP.HCM ↔ Đà Lạt', price: '1.500.000 – 2.000.000', unit: 'VND' },
      { route: 'Hà Nội ↔ Hải Phòng', price: '800.000 – 1.200.000', unit: 'VND' },
    ],
  },
];

export default function PricingTables() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-section-lg font-extrabold text-foreground mb-3">Bảng Giá Chi Tiết</h2>
          <p className="text-muted-foreground">
            Giá tham khảo. Giá thực tế có thể thay đổi theo tuyến đường và thời điểm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pricingData.map((table) => (
            <div
              key={table.category}
              className="bg-white border border-border rounded-2xl overflow-hidden card-shadow"
            >
              <div className="flex items-center gap-3 p-5 border-b border-border">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${table.bg}`}
                >
                  <Icon name={table.icon as any} size={20} className={table.color} />
                </div>
                <h3 className="font-800 text-foreground text-lg">{table.category}</h3>
              </div>
              <div className="divide-y divide-border">
                {table.rows.map((row) => (
                  <div
                    key={row.route}
                    className="flex items-center justify-between px-5 py-3.5 hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-foreground text-sm">{row.route}</span>
                    <div className="text-right">
                      <span className="font-700 text-primary text-sm">{row.price}</span>
                      <span className="text-muted-foreground text-xs ml-1">{row.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3 max-w-3xl mx-auto">
          <Icon
            name="InformationCircleIcon"
            size={20}
            className="text-amber-600 flex-shrink-0 mt-0.5"
          />
          <div>
            <p className="text-amber-800 text-sm font-600">Lưu ý:</p>
            <p className="text-amber-700 text-sm mt-1">
              Giá cuối có thể thay đổi tùy theo quãng đường thực tế, tuyến đường, tình trạng giao
              thông, phụ phí cầu đường và thời gian di chuyển. Liên hệ để được báo giá chính xác.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
