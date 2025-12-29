import { CalendarView } from '@/utils/constants/calendar';

export interface CalendarPageParams {
  view: CalendarView;
  year: string;
  month: string;
  day: string;
}

export interface CalendarPageProps {
  params: CalendarPageParams;
}

export interface DayCell {
  date: Date;
  currentMonth: boolean;
  isToday: boolean;
  height: number;
}
