export const slideInHorizontal = {
  enter: (direction: 'next' | 'prev') => ({
    x: direction === 'next' ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: 'next' | 'prev') => ({
    x: direction === 'next' ? -100 : 100,
    opacity: 0,
  }),
};
