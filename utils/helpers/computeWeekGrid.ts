import { DayCell } from '@/types';
import { startOfWeek, addDays } from 'date-fns';

export function computeWeekGrid(date: Date): DayCell[] {
  const weekStart = startOfWeek(date, { weekStartsOn: 0 }); // Sunday

  return Array.from({ length: 7 }, (_, i): DayCell => {
    const d = addDays(weekStart, i);

    return {
      date: d,
      cellHeight: 2,
    };
  });
}
