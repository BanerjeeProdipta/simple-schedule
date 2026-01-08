import { DayCellComponent } from '../shared/DayCell';

interface Props {
  date: Date;
}

export function DayGrid({ date }: Props) {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const day = { date: date, cellHeight: 2 };

  return (
    <>
      {hours.map((hour) => (
        <div
          key={hour}
          className="grid grid-cols-[12rem_1fr] gap-px not-last:mb-px"
        >
          <div className="flex items-center justify-center text-xs bg-white">
            {hour}:00
          </div>

          <DayCellComponent date={day.date} cellHeight={day.cellHeight} />
        </div>
      ))}
    </>
  );
}
