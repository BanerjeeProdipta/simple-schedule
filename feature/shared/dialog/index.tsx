'use client';

import { useEffect, useRef } from 'react';

export function Dialog({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          dialogRef.current?.close();
        }
      }}
      className="
        fixed left-1/2 top-1/2 
        -translate-x-1/2 -translate-y-1/2
        rounded-lg p-0
        backdrop:bg-black/40
      "
    >
      <div className="p-6">{children}</div>
    </dialog>
  );
}
