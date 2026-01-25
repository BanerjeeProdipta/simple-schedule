import { create } from 'zustand';

type SelectionState = {
  isOpen: boolean;
  startDate: Date | null;
  endDate: Date | null;
  open: (start: Date, end: Date) => void;
  close: () => void;
};

export const useSelectionStore = create<SelectionState>((set) => ({
  isOpen: false,
  startDate: null,
  endDate: null,
  open: (start, end) =>
    set({
      isOpen: true,
      startDate: start,
      endDate: end,
    }),
  close: () =>
    set({
      isOpen: false,
      startDate: null,
      endDate: null,
    }),
}));
