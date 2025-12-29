import { WEEKDAYS } from '@/utils/constants/calendar';

const WeekdayHeader = () => {
  return (
    <div className="grid grid-cols-7 gap-px my-px">
      {WEEKDAYS.map((day) => (
        <div
          key={day}
          className="text-xs font-medium text-center py-2 bg-background"
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default WeekdayHeader;
