'use client';

import { useSelectionStore } from '@/store/selection';
import { Modal } from '.';

const ModalRenderer = () => {
  const { isOpen, startDate, endDate, close } = useSelectionStore();

  if (!isOpen || !startDate || !endDate) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      startDate={startDate}
      endDate={endDate}
    />
  );
};

export default ModalRenderer;
