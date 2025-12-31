import { WEEKDAYS } from '@/utils/constants/calendar';
import { isToday } from 'date-fns';

interface Props {
  date: Date;
}

const DayHeader = ({ date }: Props) => {
  const dayIndex = date.getDay();
  const today = isToday(date);

  return (
    <div className="grid grid-cols-[12rem_1fr] not-last:mb-px">
      {/* Fixed first column for time */}
      <div className="bg-background" />

      {/* Day column */}
      <div className="bg-background text-xs font-medium text-center py-2">
        <div>{WEEKDAYS[dayIndex]}</div>

        <div className="text-sm font-normal">
          <span
            className={`flex items-center justify-center w-8 h-8 mx-auto ${
              today ? 'bg-primary text-white rounded-full' : ''
            }`}
          >
            {date.getDate()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DayHeader;
