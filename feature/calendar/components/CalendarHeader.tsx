'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/feature/shared/button';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { buildCalendarUrl } from '@/utils/helpers/buildCalendarUrl';
import { CalendarView } from '@/utils/constants/calendar';
import { getPrevDate, getNextDate } from '@/utils/helpers/navigation';

const pathToViewMap: Record<string, CalendarView> = {
  month: 'month',
  week: 'week',
  day: 'day',
};

export function CalendarHeader() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();

  const today = new Date();

  const firstSegment = pathname.split('/')[1] || 'month';
  const view: CalendarView = pathToViewMap[firstSegment] || 'month';
  const year = params.year ? Number(params.year) : today.getFullYear();
  const month = params.month ? Number(params.month) : today.getMonth() + 1;
  const day = params.day ? Number(params.day) : today.getDate();

  const date = new Date(year, month - 1, day);

  const navigate = (d: Date, v: CalendarView = view) =>
    router.push(buildCalendarUrl(v, d));

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={() => navigate(new Date())}>
          Today
        </Button>

        <Button
          variant="ghost"
          size="icon"
          title={`Previous ${view}`}
          onClick={() => navigate(getPrevDate(view, date))}
        >
          <ChevronLeft />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          title={`Next ${view}`}
          onClick={() => navigate(getNextDate(view, date))}
        >
          <ChevronRight />
        </Button>

        <h2 className="text-lg font-semibold ml-2">
          {date.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </h2>
      </div>
      <div className="flex items-center">
        {Object.values(pathToViewMap).map((v) => {
          const isActive = view === v;

          return (
            <Button
              key={v}
              size="sm"
              className={`capitalize px-3 transition-all duration-200 
                first:rounded-l-md! rounded-none! last:rounded-r-md!
                ${
                  isActive
                    ? 'shadow-sm bg-primary'
                    : 'bg-muted text-gray-500! hover:bg-gray-300! hover:text-gray-700! transition'
                }`}
              onClick={() => navigate(date, v)}
            >
              {v}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
