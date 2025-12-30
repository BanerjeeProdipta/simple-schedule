import WeekdayHeader from './WeekdayHeader';
import { WeekGrid } from './WeekGrid';

interface Props {
  date: Date;
}

export function WeekView({ date }: Props) {
  return (
    <div className="overflow-hidden bg-muted">
      <WeekdayHeader weekView date={date} />
      <WeekGrid date={date} />
    </div>
  );
}
