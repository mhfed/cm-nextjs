import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-md font-medium transition-colors',
          variant === 'default' &&
            'bg-transparent text-black hover:bg-gray-100',
          variant === 'primary' && 'bg-primary text-white hover:bg-primary/90',
          variant === 'secondary' &&
            'bg-secondary text-white hover:bg-secondary/90',
          variant === 'outline' && 'border border-gray-300 hover:bg-gray-50',
          size === 'sm' && 'px-3 py-1.5 text-sm',
          size === 'md' && 'px-4 py-2',
          size === 'lg' && 'px-6 py-3 text-lg',
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
