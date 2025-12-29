import { CalendarView } from '@/utils/constants/calendar';

export function buildCalendarUrl(view: CalendarView, date: Date) {
  return `/${view}/${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;
}
