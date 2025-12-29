import { useMemo } from 'react';

export function useMonthGridLayout(
  daysLength: number,
  totalGridHeight = 28,
  cols = 7
) {
  return useMemo(() => {
    const rows = daysLength / cols;
    const dayCellHeight = totalGridHeight / rows;

    return {
      rows,
      dayCellHeight,
    };
  }, [daysLength, totalGridHeight, cols]);
}
