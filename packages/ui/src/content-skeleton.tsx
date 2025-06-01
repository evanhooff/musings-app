import React from "react";
import { tv } from "tailwind-variants";

export const layoutStyle = tv({
    base: "flex",
    variants: {
        direction: {
          ltr: "text-left",
          rtl: "text-right column-reverse",
        },
    },
    compoundVariants: [
      {
        direction: 'ltr',
        class: 'bg-gray-100'
      },
      {
        direction: 'rtl',
        class: 'bg-green-100'
      }
    ],
    defaultVariants: {
      direction: "ltr",
    },
});

interface LayoutProps {
  children: React.ReactNode;
  direction?: "ltr" | "rtl";
}


const ContentSkeleton = ({
  children,
  direction = "ltr",
}: LayoutProps) => {
  const style = layoutStyle({
    direction,
  });

  return (
      <div className={style}>{children}</div>
  );
};

export { ContentSkeleton };