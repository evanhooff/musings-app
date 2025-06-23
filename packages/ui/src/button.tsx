import { tv, VariantProps } from "tailwind-variants";
import "../styles/ui.css";
import { cn } from "../lib/cn";

export const buttonStyle = tv({
  base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-purple-500 text-white'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg'
    }
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1'
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
});
type ButtonVariants = VariantProps<typeof buttonStyle>;

export interface ButtonProps
  extends ButtonVariants {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className, size, color, ...props }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...props} className={cn(buttonStyle({ size, color, className }))}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
