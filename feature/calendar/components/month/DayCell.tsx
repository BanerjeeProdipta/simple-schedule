import { DayCell } from '@/types';

interface Props {
  day: DayCell;
  height: number;
}

export function DayCellComponent({ day, height }: Props) {
  let cellClass =
    'flex w-full h-full items-center justify-center text-sm cursor-pointer bg-background';

  if (!day.currentMonth) cellClass += ' bg-gray-50 text-gray-500';

  const isToday = day.isToday;

  return (
    <div className={cellClass} style={{ height: `${height}rem` }}>
      <span
        className={`flex items-center justify-center w-8 h-8 ${
          isToday ? 'bg-primary text-white rounded-full' : ''
        }`}
      >
        {day.date.getDate()}
      </span>
    </div>
  );
}
