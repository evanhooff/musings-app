import "../styles/global.css";
import '@repo/ui/css';

import { HomeSkeleton } from "@repo/ui";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <HomeSkeleton>{children}</HomeSkeleton>
    </html>
  );
}
