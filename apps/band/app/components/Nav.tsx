'use client';

import { useEffect } from 'react';
import { ClientPageProps } from '../client-landing-page';

export default function ClientLandingPage(data: ClientPageProps['data']) {
    
  const { hero, about, music, tour, contact } = data.page;
  
  useEffect(() => {
    // Only run if data exists
    if (!data || !data.page) return;

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
  }, [data]);

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MISSES MONDAY
            </div>
            <div className="hidden md:flex space-x-8">
                  <a
                    href={`#tour`}
                    className="text-white/70 hover:text-white transition-colors duration-300 hover:text-purple-400"
                  >
                    Agenda
                  </a>
                  <a
                    href={`#contact`}
                    className="text-white/70 hover:text-white transition-colors duration-300 hover:text-purple-400"
                  >
                    Contact
                  </a>
            </div>
          </div>
        </div>
      </nav>
  );
}

