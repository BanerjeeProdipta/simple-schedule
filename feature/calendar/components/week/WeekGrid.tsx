import { computeWeekGrid } from '@/utils/helpers/computeWeekGrid';
import CellComponent from '../shared/CellComponent';
import React from 'react';

interface Props {
  date: Date;
}

export function WeekGrid({ date }: Props) {
  const weekDates = computeWeekGrid(date); // 7 days
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="grid grid-cols-[12rem_repeat(7,1fr)] gap-px">
      {/* Hour labels */}
      {hours.map((hour) => (
        <React.Fragment key={hour}>
          <div
            key={`hour-${hour}`}
            className="flex items-center justify-center text-xs bg-white"
          >
            {hour}:00
          </div>

          {/* Day columns */}
          {weekDates.map((day, dayIndex) => {
            const cellDate = new Date(day.date);
            cellDate.setHours(hour, 0, 0, 0);

            const index = dayIndex * 24 + hour;

            return (
              <CellComponent
                key={`${cellDate.toISOString()}`}
                date={cellDate}
                cellHeight={day.cellHeight}
                index={index}
              />
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
}
