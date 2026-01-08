import { isToday as isTodayFn, isSameMonth as isSameMonthFn } from 'date-fns';

interface Props {
  date: Date;
  cellHeight: number;
  isMonthView?: boolean;
}

export function DayCellComponent({ date, cellHeight, isMonthView }: Props) {
  const today = new Date();
  const isToday = isTodayFn(date);
  const isCurrentMonth = isSameMonthFn(date, today);

  let cellClass =
    'flex w-full h-full items-center justify-center text-sm cursor-pointer bg-background hover:bg-gray-50 transition';

  if (!isCurrentMonth) cellClass += ' bg-gray-50 text-gray-500';

  return (
    <div className={cellClass} style={{ height: `${cellHeight}rem` }}>
      {isMonthView ? (
        <span
          className={`flex items-center justify-center w-8 h-8 ${
            isToday ? 'bg-primary text-white rounded-full' : ''
          }`}
        >
          {date.getDate()}
        </span>
      ) : (
        ''
      )}
    </div>
  );
}
