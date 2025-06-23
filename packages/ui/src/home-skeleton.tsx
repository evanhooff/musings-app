import React from "react";
import { NavigationSkeleton } from "./layout/Navigation";
import { FooterSkeleton } from "./layout/Footer";
import { cn } from "../lib/cn";
import { Skeleton } from "./skeleton";
import { homeLayout } from "./home-layout";
interface HomeProps {
  direction?: "ltr" | "rtl";
  className?: string;
}

const HomeSkeleton = ({
  direction = "ltr",
  className,
}: HomeProps) => {
  const style = homeLayout({
    direction,
    layout: direction === "rtl" ? "row" : "column",
  });

  return (
    <body className={cn(style, className)}>
      <NavigationSkeleton />
      <div className="grow">
        <Skeleton />
      </div>
      <FooterSkeleton />
    </body>
  );
};

export { HomeSkeleton };