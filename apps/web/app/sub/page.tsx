"use client";
import Link from "next/link";
import { Header, buttonStyle, ContentSkeleton } from "@repo/ui";

export default function Page() {
  const direction = "ltr"; // This can be dynamically set based on user preference or locale
  return (
    <ContentSkeleton direction={direction}>
      <Header>
        <h1 className="text-blue-400 text-xl m-0">Page</h1>
      </Header>
      <main>
        <div>
          {/* <Button
            className={button({ size: 'sm', color: 'secondary' })}
            onClick={() => console.log("Pressed!")}>Text</Button> */}
          <Link
            href="/"
            className={buttonStyle({ size: "md", color: "primary" })}
          >
            Home
          </Link>
        </div>
      </main>
    </ContentSkeleton>
  );
}
