import { Link } from 'react-router-dom';
import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  to: string;
}

export const RedirectLink: React.FC<IProps> = ({ children, to }) => {
  return <Link to={to}>{children}</Link>;
};
