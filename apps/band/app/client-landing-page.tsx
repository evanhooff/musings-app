'use client';

import { useTina } from "tinacms/dist/react";
import About from './components/About';
import Hero from './components/Hero';
import Music from './components/music/Music';
import Tour from './components/Tour';
import Contact from './components/Contact';
import SoundcloudPlayer from "./components/music/SoundcloudPlayer";
import Nav from "./components/Nav";
import Album from "./components/photo/Album";
import type { AlbumWithThumbnail } from "../lib/immich";
import type { PageQuery } from "../tina/__generated__/types";
import type { SoundcloudPlaylist } from "soundcloud.ts";
import type { NavElement } from "./components/Nav";
import { HeaderText } from "./components/HeaderText";

export interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
  playlist?: SoundcloudPlaylist | null;
  albums?: AlbumWithThumbnail[] | null;
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

  const navSections: NavElement[] = [
    hero && { id: "hero", title: "Home" },
    agenda && { id: "agenda", title: "Agenda" },
    props.albums && props.albums.length > 0 && { id: "photos", title: "Fotos" },
    music && { id: "music", title: "Music" },
    contact && { id: "contact", title: "Contact" },
  ].filter((section): section is NavElement => !!section);


  if (!isValid) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">No content available</div>
      </div>
    );
  }
  return (
    <div>
      <Nav sections={navSections} />
      <header id="hero">
        {/* Hero Section */}
        {hero && 
          <Hero {...hero} />
        }
      </header>

      {/* Tour Section */}
      { agenda && 
        <Tour {...agenda} />
      }

      {/* Photos Section */}
      { props.albums && props.albums.length > 0 &&
        <section id="photos" className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto">
            
            <HeaderText text="Foto Album" />
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div
                  id="photos"
                  className="flex flex-wrap justify-center items-stretch gap-8"
                >
                {props.albums?.map((album, idx) => (
                    <Album key={album.id ?? idx} album={album} />
                ))}
                </div>
            </div>
          </div>
        </section>
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
    </div>
  );
}