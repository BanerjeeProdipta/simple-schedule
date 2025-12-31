import { startOfMonth, endOfMonth, getDay, subDays, addDays } from 'date-fns';
import { DayCell } from '@/types';

export const computeMonthGrid = (
  date: Date,
  totalGridHeight = 28,
  cols = 7
): DayCell[] => {
  const firstDayOfMonth = startOfMonth(date);
  const lastDayOfMonth = endOfMonth(date);

  const startDay = getDay(firstDayOfMonth); // 0 = Sunday
  const totalDays = lastDayOfMonth.getDate();

  const totalCellsCount = startDay + totalDays;
  const rows = totalCellsCount <= 28 ? 4 : totalCellsCount <= 35 ? 5 : 6;

  const rowHeight = totalGridHeight / rows;

  const gridStartDate = subDays(firstDayOfMonth, startDay);

  const cells: DayCell[] = Array.from({ length: rows * cols }, (_, i) => {
    const d = addDays(gridStartDate, i);

    return {
      date: d,
      cellHeight: rowHeight,
    };
  });

  return cells;
};
