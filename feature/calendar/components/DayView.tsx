interface DayViewProps {
  date: Date;
}

export function DayView({ date }: DayViewProps) {
  return (
    <div className="border rounded-xl p-4 h-96">
      <h3 className="font-semibold mb-2">{date.toDateString()}</h3>
      <div className="text-sm text-muted-foreground">No events</div>
    </div>
  );
}
