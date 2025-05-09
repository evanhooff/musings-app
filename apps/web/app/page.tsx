"use client";

// import { Button } from "@repo/ui";
import Link from 'next/link';

import styles from "../styles/index.module.css";
import { tv } from 'tailwind-variants';
import Header from '../components/Header';
 
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

export default function Web() {
  return (
    <>
      <Header>
        <h1 className="text-blue-400 text-xl m-0">Web</h1>
      </Header>
      <main>
        <div>
          {/* <Button
            className={button({ size: 'sm', color: 'secondary' })}
            onClick={() => console.log("Pressed!")}>Text</Button> */}
            <Link href="/sub" className={button({ size: 'sm', color: 'secondary' })}>Page</Link>
        </div>
      </main>
    </>
  );
}
