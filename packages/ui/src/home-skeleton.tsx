import React from "react";
import { Navigation, NavigationSkeleton } from "./layout/Navigation";
import { Footer, FooterSkeleton } from "./layout/Footer";
import { tv } from "tailwind-variants";

export const homeLayout = tv({
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

interface HomeProps {
  children: React.ReactNode;
  direction?: "ltr" | "rtl";
}


const HomeSkeleton = ({
  children,
  direction = "ltr",
}: HomeProps) => {
  const style = homeLayout({
    direction,
    layout: direction === "rtl" ? "row" : "column",
  });

  return (
    <body className={style}>
      <Navigation />
      <div className="grow">{children}</div>
      <Footer />
    </body>
  );
};

export { HomeSkeleton };