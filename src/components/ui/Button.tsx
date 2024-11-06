import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'; // Example variants
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 font-medium rounded ${
      variant === 'primary' ? 'bg-blue-500 text-white' : 'border border-gray-300 text-gray-700'
    }`}
  />
);