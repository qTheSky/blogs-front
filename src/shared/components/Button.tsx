import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="rounded-sm bg-[#F8346B] text-white transition-colors duration-300
      hover:bg-white hover:text-[#F8346B] hover:border-[#F8346B]
      border border-transparent shadow-lg "
      onClick={onClick}
    >
      {children}
    </button>
  );
};
