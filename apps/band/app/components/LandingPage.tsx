import { useState, useEffect } from 'react';
import type { ClientPageProps } from '../client-landing-page';
import About from './About';
import Hero from './Hero';
import Music from './Music';
import Tour from './Tour';
import Contact from './Contact';
import SoundCloudPlayer from './SoundcloudPlayer';
import SoundcloudIFrame from './SoundcloudIFrame';

interface LandingPageProps extends ClientPageProps {
  isLoading?: boolean;
}

export default function LandingPage({ data }: LandingPageProps) {
  // Custom hook to extract page sections from data
  function usePageSections(data: LandingPageProps['data']) {
    if (!data || !data.page) {
      return {
        hero: null,
        about: null,
        music: null,
        tour: null,
        contact: null,
        isValid: false,
      };
    }
    const { hero, about, music, tour, contact } = data.page;
    return { hero, about, music, tour, contact, isValid: true };
  }

  const { hero, about, music, tour, contact, isValid } = usePageSections(data);

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


  if (!isValid) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">No content available</div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MISSES MONDAY
            </div>
            <div className="hidden md:flex space-x-8">
              {Object.entries({ home: hero, about, music, tour, contact })
                .filter(([_, section]) => section && Object.keys(section).length > 0)
                .map(([key]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    className="text-white/70 hover:text-white transition-colors duration-300 hover:text-purple-400"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {hero && 
        <Hero {...hero} />
      }

      {/* About Section */}
      { about &&
        <About {...about} />
      }

      {/* Music Section */}
      <section id="music" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        { music?.tracks && 
          <Music {...music} />
        }
        
        <SoundcloudIFrame url="https://soundcloud.com/missesmondaymusic/sets/misses-monday-studio" 
          height={550} 
          color="#c27aff" />
      </section>

      {/* Tour Section */}
      { tour && 
        <Tour {...tour} />
      }

      {/* Contact Section */}
      { contact &&
        <Contact {...contact} />
      }

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-white/50">
          <p>&copy; 2024 Misses Monday. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}