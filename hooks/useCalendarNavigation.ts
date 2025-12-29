'use client';

import { CalendarView } from '@/utils/constants/calendar';
import { buildCalendarUrl } from '@/utils/helpers/buildCalendarUrl';
import { useRouter } from 'next/navigation';

export function useCalendarNavigation() {
  const router = useRouter();

  const navigate = (view: CalendarView, date: Date) => {
    router.push(buildCalendarUrl(view, date));
  };

  return { navigate };
}
