import { MonthView } from '@/feature/calendar/components/month';

export default async function MonthPage({
  params,
}: {
  params: Promise<{ year: string; month: string; day: string }>;
}) {
  const { year, month, day } = await params;

  const yearNum = Number(year);
  const monthNum = Number(month);
  const dayNum = Number(day);

  const date = new Date(yearNum, monthNum - 1, dayNum);

  return <MonthView date={date} />;
}
