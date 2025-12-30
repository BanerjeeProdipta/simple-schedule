import { DayCell } from '@/types';
import { generateDateGrid } from '.';

export const computeMonthGrid = (
  date: Date,
  totalGridHeight = 28,
  cols = 7
): DayCell[] => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDay = firstDayOfMonth.getDay(); // Sunday = 0
  const totalDays = lastDayOfMonth.getDate();

  const totalCellsCount = startDay + totalDays;
  const rows = totalCellsCount <= 28 ? 4 : totalCellsCount <= 35 ? 5 : 6;

  // Anchor start date for grid (Sunday before month start)
  const gridStartDate = new Date(year, month, 1 - startDay);

  return generateDateGrid({
    startDate: gridStartDate,
    totalCells: rows * cols,
    anchorMonth: month,
    rowHeight: totalGridHeight / rows,
  });
};
