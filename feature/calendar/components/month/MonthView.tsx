import { MonthGrid } from './MonthGrid';
import WeekdayHeader from './WeekdayHeader';

interface Props {
  date: Date;
}

export function MonthView({ date }: Props) {
  return (
    <div className="overflow-hidden bg-muted">
      <WeekdayHeader />
      <MonthGrid date={date} />
    </div>
  );
}
