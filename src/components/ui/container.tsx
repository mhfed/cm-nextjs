import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const containerVariants = cva(
  // Base styles
  'mx-auto w-full px-4 sm:px-6 lg:px-8',
  {
    variants: {
      // Size variants
      size: {
        xs: 'max-w-screen-xs', // 320px
        sm: 'max-w-screen-sm', // 640px
        md: 'max-w-screen-md', // 768px
        lg: 'max-w-screen-lg', // 1024px
        xl: 'max-w-screen-xl', // 1280px
        '2xl': 'max-w-screen-2xl', // 1536px
        full: 'max-w-full',
        default: 'max-w-7xl', // 1280px
      },
      // Padding variants
      padding: {
        none: 'px-0',
        sm: 'px-2 sm:px-4',
        default: 'px-4 sm:px-6 lg:px-8',
        lg: 'px-6 sm:px-8 lg:px-12',
      },
      // Responsive behavior
      responsive: {
        true: 'w-full',
        false: '',
      },
      // Center content
      center: {
        true: 'flex justify-center items-center',
        false: '',
      },
    },
    // Default variants
    defaultVariants: {
      size: 'default',
      padding: 'default',
      responsive: true,
      center: false,
    },
    // Compound variants for special cases
    compoundVariants: [
      {
        size: 'full',
        padding: 'none',
        className: 'max-w-full px-0',
      },
    ],
  }
)

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType
  fluid?: boolean
  children?: React.ReactNode
}

export function Container({
  className,
  size,
  padding,
  responsive,
  center,
  as: Component = 'div',
  fluid = false,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        containerVariants({
          size: fluid ? 'full' : size,
          padding,
          responsive,
          center,
        }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

// Type-safe prop values
export type ContainerSize = NonNullable<
  VariantProps<typeof containerVariants>['size']
>
export type ContainerPadding = NonNullable<
  VariantProps<typeof containerVariants>['padding']
>
