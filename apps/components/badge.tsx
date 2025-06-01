import * as React from "react";
import { cn, tv, type VariantProps } from "tailwind-variants";

const badgeVariants = tv({
  slots: {
    base: [
      "absolute",
      "text-xs",
      "font-bold",
      "text-white",
      "rounded-full",
      "flex",
      "items-center",
      "justify-center",
      "bg-blue",
    ],
  },
  variants: {
    variant: {
      primary: {
        base: ["h-4", "w-4", "top-[-0.5rem]", "right-[-0.5rem]"],
      },
      small: {
        base: ["h-2", "w-2", "top-[-0.035rem]", "right-[-0.2rem]", "border"],
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  count?: number;
  showZero?: boolean;
  hideCount?: boolean;
}

export const Badge = ({
  className,
  children,
  count,
  showZero,
  variant,
  hideCount,
  ...props
}: BadgeProps) => {
  const styles = badgeVariants({ variant: variant });

  const badgeCount = count ?? 0;
  const showBadgeCount = !hideCount && (badgeCount > 0 || showZero);
  const showDot = badgeCount > 0 && hideCount;

  return (
    <div className="relative" {...props}>
      {showBadgeCount && (
        <div className={styles.base()}>
          {badgeCount > 9 ? "+" : badgeCount}
        </div>
      )}
      {showDot && <div className={styles.base()}></div>}
      {children}
    </div>
  );
};
