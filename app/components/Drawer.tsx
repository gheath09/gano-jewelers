'use client';

import { useEffect, useRef } from 'react';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function Drawer({ open, onClose, title, description }: DrawerProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
      // Move focus into the drawer for keyboard accessibility
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="drawer-backdrop"
        onClick={onClose}
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <button ref={closeBtnRef} className="drawer-close-btn" onClick={onClose} aria-label="Close panel">
          CLOSE &nbsp;&#x2715;
        </button>

        <div className="drawer-divider" />

        <h2 className="drawer-title">{title}</h2>

        <p className="drawer-body">{description}</p>

        <div className="drawer-divider" style={{ marginTop: 'auto' }} />
      </div>
    </>
  );
}
