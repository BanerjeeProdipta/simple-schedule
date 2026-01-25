'use client';

import { useSelectionStore } from '@/store/selection';
import { SelectionModal } from './modal';

const ModalRenderer = () => {
  const { isOpen, startDate, endDate, close } = useSelectionStore();

  if (!isOpen || !startDate || !endDate) return null;

  return (
    <SelectionModal
      isOpen={isOpen}
      onClose={close}
      startDate={startDate}
      endDate={endDate}
    />
  );
};

export default ModalRenderer;
