import { MonthView } from '@/feature/calendar/components/month';

export default async function Home({
  params,
}: {
  params?: Promise<{ year?: string; month?: string; day?: string }>;
}) {
  const resolvedParams = params ? await params : {};
  const { year, month, day } = resolvedParams;

  const today = new Date();
  const yearNum = year ? Number(year) : today.getFullYear();
  const monthNum = month ? Number(month) : today.getMonth() + 1;
  const dayNum = day ? Number(day) : today.getDate();

  const date = new Date(yearNum, monthNum - 1, dayNum);

  return <MonthView date={date} />;
}
