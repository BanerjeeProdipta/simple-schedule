import { useRef, useEffect } from 'react';

/**
 * Global drag state and cells registry
 */
let isDragging = false;
let dragStartIndex = -1;
const cells: HTMLElement[] = [];

/**
 * Hook returns a ref to attach to each cell.
 * Drag selection updates all cells in the global `cells` array.
 */
export function useCellDrag(index: number) {
  const ref = useRef<HTMLDivElement>(null);

  /** Toggle selection based on start/end indices */
  function updateSelection(fromIdx: number, toIdx: number) {
    const start = Math.min(fromIdx, toIdx);
    const end = Math.max(fromIdx, toIdx);

    for (let i = 0; i < cells.length; i++) {
      const el = cells[i];
      if (!el) continue;

      el.classList.toggle('bg-blue-300', i >= start && i <= end);
    }
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Register cell
    cells[index] = el;

    const handlePointerDown = (e: PointerEvent) => {
      e.preventDefault();
      isDragging = true;
      dragStartIndex = index;
      updateSelection(dragStartIndex, dragStartIndex);
    };

    const handlePointerEnter = () => {
      if (!isDragging) return;
      updateSelection(dragStartIndex, index);
    };

    const handlePointerUp = () => {
      isDragging = false;
      dragStartIndex = -1;
    };

    el.addEventListener('pointerdown', handlePointerDown);
    el.addEventListener('pointerenter', handlePointerEnter);
    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      el.removeEventListener('pointerdown', handlePointerDown);
      el.removeEventListener('pointerenter', handlePointerEnter);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, [index]);

  return ref;
}
