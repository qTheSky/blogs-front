import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="rounded-md bg-pink-500 text-white hover:bg-pink-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
