'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { siteConfig } from '@/config/site';

export default function FloatingContactButtons() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed right-4 bottom-24 lg:bottom-8 z-40 hidden sm:flex flex-col items-end gap-3">
      {expanded && (
        <>
          {/* Phone */}
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl card-shadow-lg hover:bg-primary/90 transition-all animate-scale-in text-sm font-700"
            title="Gọi ngay"
          >
            <Icon name="PhoneIcon" size={18} variant="solid" />
            <span className="whitespace-nowrap">{siteConfig.contact.phone}</span>
          </a>

          {/* Zalo */}
          <a
            href={siteConfig.contact.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2.5 rounded-xl card-shadow-lg hover:bg-blue-600 transition-all animate-scale-in text-sm font-700"
            title="Chat Zalo"
          >
            <Icon name="ChatBubbleLeftIcon" size={18} />
            <span>Zalo</span>
          </a>

          {/* Messenger */}
          <a
            href={`sms:${siteConfig.contact.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2.5 rounded-xl card-shadow-lg hover:bg-indigo-600 transition-all animate-scale-in text-sm font-700"
            title="Messenger"
          >
            <Icon name="ChatBubbleOvalLeftIcon" size={18} />
            <span>Messenger</span>
          </a>
        </>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full card-shadow-xl hover:bg-primary/90 transition-all animate-pulse-green flex items-center justify-center"
        aria-label="Liên hệ"
      >
        <Icon name={expanded ? 'XMarkIcon' : 'PhoneIcon'} size={24} variant="solid" />
      </button>
    </div>
  );
}
