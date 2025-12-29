'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function AnimationWrapper({
  children,
  duration = 200,
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  const pathname = usePathname();
  const prevDate = useRef<Date | null>(null);
  const [direction, setDirection] = useState<'prev' | 'next' | null>(null);

  const extractDate = (path: string): Date | null => {
    const segments = path.split('/').filter(Boolean);
    const year = segments[1] ? Number(segments[1]) : NaN;
    const month = segments[2] ? Number(segments[2]) : NaN;
    const day = segments[3] ? Number(segments[3]) : 1;

    if (isNaN(year) || isNaN(month)) return null;
    return new Date(year, month - 1, day);
  };

  useEffect(() => {
    const date = extractDate(pathname);
    if (!date || !prevDate.current) {
      prevDate.current = date;
      return;
    }

    const id = requestAnimationFrame(() => {
      const newDirection =
        date.getTime() > prevDate.current!.getTime() ? 'next' : 'prev';
      setDirection(newDirection);

      setTimeout(() => setDirection(null), duration);
      prevDate.current = date;
    });

    return () => cancelAnimationFrame(id);
  }, [pathname, duration]);

  return (
    <div
      className={
        direction === 'next'
          ? 'slide-left'
          : direction === 'prev'
          ? 'slide-right'
          : ''
      }
    >
      {children}
    </div>
  );
}
