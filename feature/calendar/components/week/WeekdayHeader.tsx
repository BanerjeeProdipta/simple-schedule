import { WEEKDAYS } from '@/utils/constants/calendar';
import { computeWeekGrid } from '@/utils/helpers/computeWeekGrid';
import clsx from 'clsx';

interface Props {
  weekView?: boolean;
  date: Date;
}

const WeekdayHeader = ({ weekView = false, date }: Props) => {
  const weekDates = computeWeekGrid(date);

  return (
    <div
      className={`grid ${
        weekView ? 'grid-cols-8' : 'grid-cols-7'
      } gap-px my-px`}
    >
      {weekView && <div className="bg-background" />}

      {weekDates.map((day) => {
        const dayIndex = day.date.getDay();

        return (
          <div
            key={day.date.toISOString()}
            className={clsx(
              day.currentMonth ? 'bg-background' : 'bg-gray-50',
              'text-xs font-medium text-center py-2'
            )}
          >
            <div>{WEEKDAYS[dayIndex]}</div>

            <div className="text-sm font-normal">
              <span
                className={`flex items-center justify-center w-8 h-8 mx-auto
                  ${day.isToday ? 'bg-primary text-white rounded-full' : ''}
                `}
              >
                {day.date.getDate()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeekdayHeader;
