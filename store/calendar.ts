import { CalendarView } from '@/utils/constants/calendar';
import { create } from 'zustand';

interface CalendarState {
  currentDate: Date;
  view: CalendarView;

  setDate: (date: Date) => void;
  setView: (view: CalendarView) => void;
}

export const useCalendarStore = create<CalendarState>((set) => ({
  currentDate: new Date(),
  view: 'month',

  setDate: (date) => set({ currentDate: date }),
  setView: (view) => set({ view }),
}));
