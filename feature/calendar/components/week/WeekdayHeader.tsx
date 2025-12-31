import { isSameMonth as isSameMonthFn, isToday as isTodayFn } from 'date-fns';
import { WEEKDAYS } from '@/utils/constants/calendar';
import { computeWeekGrid } from '@/utils/helpers/computeWeekGrid';
import clsx from 'clsx';

interface Props {
  date: Date;
}

const WeekdayHeader = ({ date }: Props) => {
  const weekDates = computeWeekGrid(date);

  return (
    <div className="grid grid-cols-[12rem_repeat(7,1fr)] gap-px my-px">
      {/* first fixed column for time */}
      <div className="bg-background" />

      {weekDates.map((day) => {
        const dayIndex = day.date.getDay();
        const isCurrentMonth = isSameMonthFn(day.date, date); // compare to anchor date month
        const isToday = isTodayFn(day.date);

        return (
          <div
            key={day.date.toISOString()}
            className={clsx(
              isCurrentMonth ? 'bg-background' : 'bg-gray-50',
              'text-xs font-medium text-center py-2'
            )}
          >
            <div>{WEEKDAYS[dayIndex]}</div>

            <div className="text-sm font-normal">
              <span
                className={`flex items-center justify-center w-8 h-8 mx-auto ${
                  isToday ? 'bg-primary text-white rounded-full' : ''
                }`}
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
