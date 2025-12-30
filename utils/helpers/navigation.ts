import { CalendarView } from '@/utils/constants/calendar';

function clampDay(year: number, month: number, day: number): number {
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  return Math.min(day, lastDayOfMonth);
}

function getSunday(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay(); // 0 = Sunday
  d.setDate(d.getDate() - day);
  return d;
}

export function getPrevDate(view: CalendarView, date: Date): Date {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  switch (view) {
    case 'day':
      return new Date(date.getTime() - 86400000); // -1 day in ms
    case 'week':
      const sunday = getSunday(date);
      sunday.setDate(sunday.getDate() - 7);
      return sunday;
    case 'month':
      month -= 1;
      if (month < 0) {
        month = 11;
        year -= 1;
      }
      day = clampDay(year, month, day);
      return new Date(year, month, day);
  }
}

export function getNextDate(view: CalendarView, date: Date): Date {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  switch (view) {
    case 'day':
      return new Date(date.getTime() + 86400000); // +1 day in ms
    case 'week': {
      const sunday = getSunday(date);
      sunday.setDate(sunday.getDate() + 7);
      return sunday;
    }
    case 'month':
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
      day = clampDay(year, month, day);
      return new Date(year, month, day);
  }
}
