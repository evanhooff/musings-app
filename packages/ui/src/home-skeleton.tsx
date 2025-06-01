import React from "react";
import { Navigation } from "./layout/Navigation";
import { Footer } from "./layout/Footer";

interface HomeProps {
  children: React.ReactNode;
}

const HomeSkeleton = ({
  children,
}: HomeProps) => {
  return (
    <body className="flex flex-col min-h-screen">
      <Navigation />
      <div className="grow">{children}</div>
      <Footer />
    </body>
  );
};

export { HomeSkeleton };