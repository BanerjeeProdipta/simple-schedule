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
  cellHeight: number;
}

export interface GenerateGridOptions {
  startDate: Date;
  totalCells: number;
  anchorMonth?: number;
  rowHeight?: number;
}
