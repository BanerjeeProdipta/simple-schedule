import { DayCellComponent } from '../month/DayCell';
import { computeWeekGrid } from '@/utils/helpers/computeWeekGrid';

interface Props {
  date: Date;
}

export function WeekGrid({ date }: Props) {
  const weekDates = computeWeekGrid(date);
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <>
      {hours.map((hour) => (
        <div
          key={`hour-${hour}`}
          className="grid grid-cols-8 gap-px not-last:mb-px"
        >
          <div className="flex items-center justify-center text-xs text-center px-1 gap-px bg-white">
            {hour}:00
          </div>
          {weekDates.map((day) => {
            return (
              <DayCellComponent
                key={day.date.toISOString()}
                day={day}
                height={day.height}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}
