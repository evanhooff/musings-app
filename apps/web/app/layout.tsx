import "../styles/global.css";
import '@repo/ui/css';

import { HomeSkeleton } from "@repo/ui";

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  const direction = "ltr"; // This can be dynamically set based on user preference or locale

  return (
    <html lang="en">
      <head></head>
      <HomeSkeleton direction={direction}>{children}</HomeSkeleton>
    </html>
  );
}
