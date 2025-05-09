import "../styles/global.css";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { tv } from "tailwind-variants";

const homeLayout = tv({
    base: "flex flex-col min-h-screen bg-gray-100",
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
        className: 'bg-green-100 text-green-700 dark:text-green-800' // You can also use "className"
      },
      {
        direction: 'rtl',
        layout: 'row',
        className: 'bg-green-100 text-green-700 dark:text-green-800' // You can also use "className"
      }
    ],
    defaultVariants: {
      direction: "ltr",
    },
});

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  const direction = "rtl"; // This can be dynamically set based on user preference or locale
  const style = homeLayout({direction});
  return (
    <html lang="en">
      <head></head>
      <body className={style}>  
        <Navigation />
        <div className="grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
