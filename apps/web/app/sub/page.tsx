"use client";
import Link from "next/link";
import Layout from "./../layout";
import { Button, Header, buttonStyle } from "@repo/ui";

export default function Page() {
  return (
    <>
      <Header>
        <h1 className="text-blue-400 text-xl m-0">Page</h1>
      </Header>
      <main>
        <div>
          <Button className="bg-green-500">
            <Link href="/">Home</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
