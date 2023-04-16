import React, { forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface IFieldProps {
  label?: string;
  error?: FieldError;
}
type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;
type IField = TypeInputPropsField;

export const Field = forwardRef<HTMLInputElement, IField>(
  ({ error, type = 'text', style, label, ...rest }, ref) => {
    return (
      <div className="flex flex-col" style={style}>
        {label && (
          <label className="text-gray-500" htmlFor={label?.split(' ')[0]}>
            {label}
          </label>
        )}
        <input
          className="outline-0 border-b-2 border-b-gray-300"
          id={label?.split(' ')[0]}
          ref={ref}
          type={type}
          {...rest}
        />
        {error && <div className="text-red-600">{error.message}</div>}
      </div>
    );
  }
);

Field.displayName = 'Field';
