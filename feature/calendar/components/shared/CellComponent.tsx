'use client';

import { isToday, isSameMonth } from 'date-fns';
import { useCellDrag } from '../../hooks/useCellDrag';

interface Props {
  date: Date;
  cellHeight: number;
  isMonthView?: boolean;
  index: number; // unique global index
}

export default function CellComponent({
  date,
  cellHeight,
  isMonthView,
  index,
}: Props) {
  const ref = useCellDrag(index);

  const today = new Date();
  const isCurrentMonth = isSameMonth(date, today);
  const isTodayFlag = isToday(date);

  // Base classes
  const className = [
    'flex w-full h-full items-center justify-center text-sm cursor-pointer transition select-none',
    'bg-background', // default background
    !isCurrentMonth && 'opacity-50 text-gray-500', // faded out-of-month
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={className} style={{ height: `${cellHeight}rem` }}>
      {isMonthView ? (
        <span
          className={`flex w-8 h-8 items-center justify-center ${
            isTodayFlag ? 'bg-primary text-white rounded-full' : ''
          }`}
        >
          {date.getDate()}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}
