import * as React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'default' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'icon';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = 'default', size = 'md', className, type = 'button', ...props },
    ref
  ) {
    const variants: Record<ButtonVariant, string> = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
      ghost: 'text-gray-600 hover:bg-gray-100',
    };

    const sizes: Record<ButtonSize, string> = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      icon: 'h-10 w-10 p-0',
    };

    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'inline-flex items-center justify-center rounded-xl font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
          'disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
