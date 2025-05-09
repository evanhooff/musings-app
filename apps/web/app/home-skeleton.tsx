import React from "react";
import { NavigationSkeleton } from "../components/Navigation";
import { FooterSkeleton } from "../components/Footer";
import { homeLayout } from "./layout";

export const HomeSkeleton = ({
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