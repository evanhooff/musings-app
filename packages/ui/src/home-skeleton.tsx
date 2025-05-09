import React from "react";
import { Navigation, NavigationSkeleton } from "./components/Navigation";
import { Footer, FooterSkeleton } from "./components/Footer";
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
      <Navigation />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
};

export { HomeSkeleton };