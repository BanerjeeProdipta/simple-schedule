export function extractDate(path: string) {
  const [, , year, month, day] = path.split('/');
  return new Date(+year, +month - 1, +day);
}
