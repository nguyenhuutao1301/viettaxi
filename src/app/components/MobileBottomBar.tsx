'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import BookingModal from './BookingModal';
import { siteConfig } from '@/config/site';

export default function MobileBottomBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white border-t border-border safe-area-pb">
        <div className="flex items-stretch h-16">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 text-primary border-r border-border"
          >
            <Icon name="PhoneIcon" size={22} variant="solid" className="text-primary" />
            <span className="text-xs font-700 text-primary">Gọi Ngay</span>
          </a>
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-primary text-primary-foreground"
          >
            <Icon name="MapPinIcon" size={22} variant="solid" />
            <span className="text-xs font-800">Đặt Xe</span>
          </button>
        </div>
      </div>
      {showModal && <BookingModal onClose={() => setShowModal(false)} isOpen={showModal} />}
    </>
  );
}
