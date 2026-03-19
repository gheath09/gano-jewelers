'use client';

import { useEffect, useRef } from 'react';

export default function Sparkles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const MAX_ACTIVE = 4;

    const addSparkle = () => {
      const el = document.createElement('div');
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 3 + 2; // 2–5 px
      const duration = Math.random() * 1000 + 900; // 900–1900 ms

      el.className = 'sparkle-dot';
      el.style.left = `${x}%`;
      el.style.top = `${y}%`;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.animation = `sparkleIn ${duration}ms ease-in-out forwards`;

      container.appendChild(el);
      activeRef.current++;

      setTimeout(() => {
        el.remove();
        activeRef.current--;
      }, duration);
    };

    const schedule = () => {
      if (activeRef.current < MAX_ACTIVE) {
        addSparkle();
      }
      const nextDelay = Math.random() * 2800 + 1800; // 1.8 – 4.6 s
      timerRef.current = setTimeout(schedule, nextDelay);
    };

    // Staggered start so first sparkles feel organic
    timerRef.current = setTimeout(schedule, 1200);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    />
  );
}
