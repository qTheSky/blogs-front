import React, { MouseEvent, ReactNode } from 'react';
import { Button } from './Button';

interface ModalProps {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, isOpen, children, onClose }) => {
  if (!isOpen) return null;

  const handleClick = (e: MouseEvent) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 outline-none focus:outline-none"
      onClick={onClose}
    >
      <div
        className="relative w-auto max-w-lg mx-auto my-6 p-6 bg-white border-0 rounded-lg shadow-lg"
        onClick={handleClick}
      >
        <div className="text-xl font-semibold">{title}</div>
        <hr className="my-4" />
        <div>{children}</div>
        <hr className="my-4" />
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};
