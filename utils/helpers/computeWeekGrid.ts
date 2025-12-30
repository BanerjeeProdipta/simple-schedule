import { DayCell } from '@/types';
import { normalizeDate, isToday } from '.';

export function computeWeekGrid(date: Date): DayCell[] {
  const anchorMonth = date.getMonth();
  const sunday = normalizeDate(date);
  sunday.setDate(sunday.getDate() - sunday.getDay());

  return Array.from({ length: 7 }, (_, i) => {
    const d = normalizeDate(new Date(sunday));
    d.setDate(sunday.getDate() + i);

    return {
      date: d,
      isToday: isToday(d),
      currentMonth: d.getMonth() === anchorMonth,
      height: 3,
    };
  });
}
