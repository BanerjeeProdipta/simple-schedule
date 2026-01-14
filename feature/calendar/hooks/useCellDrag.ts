'use client';

import { useRef, useEffect } from 'react';
import { useSelectionStore } from '@/store/selection';

let isDragging = false;
let dragStartIndex = -1;
let dragEndIndex = -1;
const cells: Array<HTMLDivElement | null> = [];

export function useCellDrag(index: number, date: Date) {
  const ref = useRef<HTMLDivElement>(null);
  const openSelection = useSelectionStore((s) => s.open);

  function updateSelection(fromIdx: number, toIdx: number) {
    const start = Math.min(fromIdx, toIdx);
    const end = Math.max(fromIdx, toIdx);

    cells.forEach((el, i) => {
      if (!el) return;
      el.classList.toggle('bg-blue-300', i >= start && i <= end);
    });
  }

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    cells[index] = el;

    const handlePointerDown = (e: PointerEvent) => {
      e.preventDefault();
      isDragging = true;
      dragStartIndex = index;
      dragEndIndex = index;
      updateSelection(index, index);
    };

    const handlePointerEnter = () => {
      if (!isDragging) return;
      dragEndIndex = index;
      updateSelection(dragStartIndex, dragEndIndex);
    };

    const handlePointerUp = () => {
      if (!isDragging) return;
      isDragging = false;

      const start = Math.min(dragStartIndex, dragEndIndex);
      const end = Math.max(dragStartIndex, dragEndIndex);

      const startDate = cells[start]?.dataset.date
        ? new Date(cells[start]!.dataset.date!)
        : date;

      const endDate = cells[end]?.dataset.date
        ? new Date(cells[end]!.dataset.date!)
        : date;

      openSelection(startDate, endDate);

      dragStartIndex = -1;
      dragEndIndex = -1;
    };

    el.addEventListener('pointerdown', handlePointerDown);
    el.addEventListener('pointerenter', handlePointerEnter);
    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      cells[index] = null;
      el.removeEventListener('pointerdown', handlePointerDown);
      el.removeEventListener('pointerenter', handlePointerEnter);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, [index, date, openSelection]);

  return { ref };
}
