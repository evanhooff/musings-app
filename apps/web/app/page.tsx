"use client";

// import { Button } from "@repo/ui";
import Link from "next/link";

// import { performRequest } from "../lib/datocms";

// const PAGE_CONTENT_QUERY = `
//   query Page {
//     page {
//       title
//       structuredText {
//         value
//       }
//     }
//   }`;

import styles from "../styles/index.module.css";
import { tv } from 'tailwind-variants';
import { Button, ContentSkeleton, Header } from '@repo/ui';
 
const button = tv({
  base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-green-500 text-white'
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

export default async function Web() {
  // const page = await performRequest(PAGE_CONTENT_QUERY);
  // console.log(page);
  const direction = "ltr"; // This can be dynamically set based on user preference or locale
  return (
    <ContentSkeleton direction={direction}>
      <Header>
        <h1 className="text-blue-400 text-xl m-0">Web</h1>
      </Header>
      <main>
        <div>
          <Button onClick={() => console.log("Pressed!")}>UI Button</Button>
          {/* <Button
            className={button({ size: 'sm', color: 'secondary' })}
            onClick={() => console.log("Pressed!")}>Text</Button> */}
            <Link href="/sub" className={button({ size: 'sm', color: 'secondary' })}>Page</Link>
        </div>
      </main>
    </ContentSkeleton>
  );
}
