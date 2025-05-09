"use client";
import Link from "next/link";
import Layout from "./layout";
import { Header, buttonStyle } from "@repo/ui";

export default function Page() {
  return (
    <Layout>
      <Header>
        <h1 className="text-blue-400 text-xl m-0">Page</h1>
      </Header>
      <main>
        <div>
          {/* <Button
            className={button({ size: 'sm', color: 'secondary' })}
            onClick={() => console.log("Pressed!")}>Text</Button> */}
          <Link href="/" className={buttonStyle({ size: 'md', color: 'primary' })}>Home</Link>
        </div>
      </main>
    </Layout>
  );
}
