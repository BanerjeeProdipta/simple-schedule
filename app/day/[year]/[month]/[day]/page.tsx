import { DayView } from '@/feature/calendar/components/day/DayView';

export default async function WeekPage({
  params,
}: {
  params: Promise<{ year: string; month: string; day: string }>;
}) {
  const { year, month, day } = await params;

  const yearNum = Number(year);
  const monthNum = Number(month);
  const dayNum = Number(day);

  const date = new Date(yearNum, monthNum - 1, dayNum);

  return <DayView date={date} />;
}
