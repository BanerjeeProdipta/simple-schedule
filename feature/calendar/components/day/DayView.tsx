import { DayGrid } from './DayGrid';
import DayHeader from './DayHeader';

interface Props {
  date: Date;
}

export function DayView({ date }: Props) {
  return (
    <div className="overflow-hidden bg-muted">
      <DayHeader date={date} />
      <DayGrid date={date} />
    </div>
  );
}
