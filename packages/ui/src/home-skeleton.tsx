import React from "react";
import { NavigationSkeleton } from "./components/Navigation";
import { FooterSkeleton } from "./components/Footer";
import { tv } from "tailwind-variants";

const homeLayout = tv({
    base: "flex min-h-screen",
    variants: {
        direction: {
          ltr: "text-left",
          rtl: "text-right",
        },
        layout: {
          column: "flex-col",
          row: "flex-row",
        }
    },
    compoundVariants: [
      {
        direction: 'ltr',
        layout: 'column',
        class: 'bg-gray-100'
      },
      {
        direction: 'rtl',
        layout: 'row',
        class: 'bg-green-100'
      }
    ],
    defaultVariants: {
      direction: "ltr",
      layout: "column",
    },
});


const HomeSkeleton = ({
  children,
  direction = "ltr",
}: {
  children: React.ReactNode;
  direction?: "ltr" | "rtl";
}) => {
  const style = homeLayout({
    direction,
    layout: direction === "rtl" ? "row" : "column",
  });

  return (
    <div className={style}>
      <NavigationSkeleton />
      <div className="grow">{children}</div>
      <FooterSkeleton />
    </div>
  );
};

export { HomeSkeleton };