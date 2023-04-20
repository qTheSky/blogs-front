// useModal.tsx
import { useState, useCallback } from 'react';

interface UseModalResult {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModal = (): UseModalResult => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return { isModalOpen, openModal, closeModal };
};
