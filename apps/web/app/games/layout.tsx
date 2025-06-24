"use client";

import Link from 'next/link';

import { Button, Header, HomeSkeleton, Skeleton } from '@repo/ui';
import { cn } from '@repo/ui/lib';
import { useTimeBasedBackground } from '../../hooks/useTimeBasedBackground';

interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  const { backgroundClass, isLoaded } = useTimeBasedBackground();
  
  if (!isLoaded) {
    return <Skeleton />;
  }

  const layoutCss = "grow flex flex-col";
  const styleCss = "text-white";
  const backgroundCSS = "transition-all duration-1000";
  
  return (
    <>
      <Header>
        <h1 className="text-blue-400 text-xl m-0">Games</h1>
      </Header>
      <main className={cn(layoutCss, styleCss, backgroundCSS, backgroundClass)}>
        {children}
      </main>
    </>
  );
}