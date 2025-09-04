import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: "3rem",
        }}
      >
        <header>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/posts">Posts</Link>
        </header>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <main>{children}</main>
      </body>
    </html>
  );
}
