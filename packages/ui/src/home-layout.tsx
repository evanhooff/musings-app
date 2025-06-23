import React from "react";
import { Navigation } from "./layout/Navigation";
import { Footer } from "./layout/Footer";
import { tv } from "tailwind-variants";
import { cn } from "../lib/cn";

export const homeLayout = tv({
    slots: {  
        base: "flex min-h-screen",
        container: "grow flex flex-col"
    },
  variants: {
    direction: {
      ltr: {
        base: "text-left",
      },
      rtl: {
        base: "text-right",
      }
    },
    layout: {
      column: {
        base: "flex-col",
      },
      row: {
        base: "flex-row",
      }
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
  className?: string;
}


const HomeLayout = ({
  children,
  direction = "ltr",
  className,
}: HomeProps) => {
  const style = homeLayout({
    direction,
    layout: direction === "rtl" ? "row" : "column",
  });

  return (
    <body className={cn(style.base(), className)}>
      <Navigation />
      <div className={style.container()}>
        {children}
      </div>
      <Footer />
    </body>
  );
};

export { HomeLayout };