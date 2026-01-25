'use client';

import { Dialog } from '.';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  startDate: Date;
  endDate: Date;
};

export function SelectionModal({
  isOpen,
  onClose,
  startDate,
  endDate,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <h2 className="mb-4 text-lg font-semibold">Selected Dates</h2>

      <div className="space-y-2 text-sm">
        <div>
          <span className="font-medium">Start:</span> {startDate.toDateString()}
        </div>
        <div>
          <span className="font-medium">End:</span> {endDate.toDateString()}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={onClose}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </Dialog>
  );
}
