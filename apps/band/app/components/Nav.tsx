'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export interface NavElement {
  id: string;
  title: string;
}

export default function Nav({ sections }: { sections: NavElement[] | null }) {
  
  useEffect(() => {
    // Smooth scroll for navigation
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = (e.target as HTMLAnchorElement).getAttribute('href');
      if (target) {
        document.querySelector(target)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, [sections]);

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-serif text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              <Link href="/">
              MISSES MONDAY
              </Link>
            </div>
            {sections && sections.length > 0 &&
              <div className="hidden md:flex space-x-8">
                    {sections?.map((section: { id: string; title: string }) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="text-white/70 hover:text-white transition-colors duration-300 hover:text-blue-400"
                      >
                        {section.title}
                      </a>
                    ))}
              </div>
            }
          </div>
        </div>
      </nav>
  );
}

