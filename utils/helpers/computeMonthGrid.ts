import { DayCell } from '@/types';

export const computeMonthGrid = (
  date: Date,
  totalGridHeight = 28,
  cols = 7
): DayCell[] => {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDay = firstDayOfMonth.getDay(); // 0=Sun
  const totalDays = lastDayOfMonth.getDate();
  const prevMonthLastDay = new Date(year, month, 0).getDate();

  const totalCells = startDay + totalDays;
  const rows = totalCells <= 28 ? 4 : totalCells <= 35 ? 5 : 6;

  // precompute today timestamp once
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayTime = today.getTime();

  const dayCellHeight = totalGridHeight / rows;

  const cells: DayCell[] = new Array(rows * cols);

  for (let i = 0; i < rows * cols; i++) {
    let dayNum: number;
    let dayMonth: number = month;
    let currentMonth = true;

    if (i < startDay) {
      // previous month
      dayNum = prevMonthLastDay - startDay + i + 1;
      dayMonth = month - 1;
      currentMonth = false;
    } else if (i >= startDay + totalDays) {
      // next month
      dayNum = i - startDay - totalDays + 1;
      dayMonth = month + 1;
      currentMonth = false;
    } else {
      dayNum = i - startDay + 1;
    }

    const cellDate = new Date(year, dayMonth, dayNum);
    cellDate.setHours(0, 0, 0, 0);
    const isToday = cellDate.getTime() === todayTime;

    cells[i] = { date: cellDate, currentMonth, isToday, height: dayCellHeight };
  }

  return cells;
};
