import "../styles/global.css";
import '@repo/ui/css';

import { HomeLayout, HomeSkeleton } from "@repo/ui";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const direction = "ltr"; // This can be dynamically set based on user preference or locale

  return (
    <html lang="en">
      <head></head>
      <Suspense fallback={<HomeSkeleton direction={direction} />}>
        <HomeLayout direction={direction}>
          {children}
        </HomeLayout>
      </Suspense>
    </html>
  );
}
