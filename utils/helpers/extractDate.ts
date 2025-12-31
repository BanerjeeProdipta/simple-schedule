import { parse, isValid } from 'date-fns';

export function extractDate(path: string): Date | null {
  const parts = path.split('/');

  if (parts.length < 5) return null;

  const dateStr = `${parts[1]}-${parts[2]}-${parts[3]}`;
  const date = parse(dateStr, 'yyyy-MM-dd', new Date());

  return isValid(date) ? date : null;
}
