import CellComponent from '../shared/CellComponent';

interface Props {
  date: Date;
}

export function DayGrid({ date }: Props) {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="flex flex-col">
      {hours.map((hour) => {
        const cellDate = new Date(date);
        cellDate.setHours(hour, 0, 0, 0);

        return (
          <div
            key={hour}
            className="grid grid-cols-[12rem_1fr] gap-px not-last:mb-px"
          >
            <div className="flex items-center justify-center text-xs bg-white">
              {hour}:00
            </div>

            <CellComponent
              date={cellDate}
              cellHeight={2}
              index={hour}
              isMonthView={false}
            />
          </div>
        );
      })}
    </div>
  );
}
