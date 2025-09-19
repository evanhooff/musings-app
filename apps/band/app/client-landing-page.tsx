'use client';

import { useTina } from "tinacms/dist/react";
import type { PageQuery } from "../tina/__generated__/types";
import { useEffect } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Music from './components/music/Music';
import Tour from './components/Tour';
import Contact from './components/Contact';
import { SoundcloudPlaylist } from "soundcloud.ts";
import SoundcloudPlayer from "./components/music/SoundcloudPlayer";
import Nav from "./components/Nav";

export interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
  playlist?: SoundcloudPlaylist | null;
}

export default function ClientLandingPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  // Custom hook to extract page sections from data
  function usePageSections(data: ClientPageProps['data']) {
    if (!data || !data.page) {
      return {
        hero: null,
        about: null,
        music: null,
        agenda: null,
        contact: null,
        isValid: false,
      };
    }
    const { hero, about, music, agenda, contact, musicPlayer } = data.page;
    return { hero, about, music, agenda, contact, musicPlayer, isValid: true };
  }

  const { hero, about, music, agenda, contact, musicPlayer, isValid } = usePageSections(data);

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
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Nav {...data} />
      <header>
        {/* Hero Section */}
        {hero && 
          <Hero {...hero} />
        }
      </header>

      {/* Tour Section */}
      { agenda && 
        <Tour {...agenda} />
      }

      <section id="music" className="bg-gradient-to-b from-black to-gray-900">
        { music && 
          <Music {...music} />
        }
        { props.playlist && 
          <SoundcloudPlayer playlist={props.playlist} content={musicPlayer} />
        }
      </section>

      {/* About Section */}
      { about &&
        <About {...about} />
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
    </main>
  );
}