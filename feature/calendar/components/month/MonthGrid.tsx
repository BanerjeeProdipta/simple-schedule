import { computeMonthGrid } from '@/utils/helpers/computeMonthGrid';
import { DayCellComponent } from '../shared/DayCell';
import { DayCell } from '@/types';

interface Props {
  date: Date;
}

export function MonthGrid({ date }: Props) {
  const days: DayCell[] = computeMonthGrid(date);

  return (
    <div className="relative overflow-hidden">
      <div className="grid grid-cols-7 gap-px w-full h-full">
        {days.map((day) => (
          <DayCellComponent
            key={day.date.toISOString()}
            date={day.date}
            cellHeight={day.cellHeight}
            isMonthView={true}
          />
        ))}
      </div>
    </div>
  );
}
