// page.tsx
"use client";

import Link from 'next/link';

import { Button, Header, HomeSkeleton, Skeleton } from '@repo/ui';
import { useTimeBasedBackground } from '../hooks/useTimeBasedBackground';
import { cn } from '../lib/cn';
 
export default function Web() {
  const { backgroundClass, isLoaded } = useTimeBasedBackground();
  
  if (!isLoaded) {
    return <Skeleton />;
  }
  
  return (
    <>
      <Header>
        <h1 className="text-blue-400 text-xl m-0">Web</h1>
      </Header>
      <main className={cn(`grow transition-all duration-1000`, backgroundClass)}>
          <Button size="lg" color="secondary">
            <Link href="/sub">Page</Link>
          </Button>
      </main>
    </>
  );
}