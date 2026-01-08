import { computeMonthGrid } from '@/utils/helpers/computeMonthGrid';

import { DayCell } from '@/types';
import CellComponent from '../shared/CellComponent';

interface Props {
  date: Date;
}

export function MonthGrid({ date }: Props) {
  const days: DayCell[] = computeMonthGrid(date);

  return (
    <div className="relative overflow-hidden">
      <div className="grid grid-cols-7 gap-px w-full h-full">
        {days.map((day, i) => (
          <CellComponent
            key={day.date.toISOString()}
            date={day.date}
            cellHeight={day.cellHeight}
            index={i}
            isMonthView
          />
        ))}
      </div>
    </div>
  );
}
