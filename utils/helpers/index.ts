export function normalizeDate(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function isToday(date: Date): boolean {
  return normalizeDate(date).getTime() === normalizeDate(new Date()).getTime();
}

import { DayCell } from '@/types';

interface GenerateGridOptions {
  startDate: Date; // first date in the grid
  totalCells: number; // number of cells to generate
  anchorMonth?: number; // used for currentMonth flag
  rowHeight?: number; // optional height for UI
}

export function generateDateGrid({
  startDate,
  totalCells,
  anchorMonth,
  rowHeight = 6,
}: GenerateGridOptions): DayCell[] {
  const cells: DayCell[] = new Array(totalCells);

  for (let i = 0; i < totalCells; i++) {
    const d = normalizeDate(new Date(startDate));
    d.setDate(d.getDate() + i);

    cells[i] = {
      date: d,
      isToday: isToday(d),
      currentMonth:
        anchorMonth !== undefined ? d.getMonth() === anchorMonth : true,
      height: rowHeight,
    };
  }

  return cells;
}
