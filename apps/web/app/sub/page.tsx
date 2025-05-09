"use client";

import { Button } from "@repo/ui";
import Link from "next/link";
import { ReactNode } from "react";

import { tv } from 'tailwind-variants';
import Layout from "./layout";
import Header from "../../components/Header";
 
const button = tv({
  base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-purple-500 text-white'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg'
    }
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1'
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
});

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
        <Link href="/" className={button({ size: 'md', color: 'primary' })}>Home</Link>
        </div>
      </main>
    </Layout>
  );
}
