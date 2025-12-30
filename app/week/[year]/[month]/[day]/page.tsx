import { WeekView } from '@/feature/calendar/components/week/WeekView';

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

  return <WeekView date={date} />;
}
