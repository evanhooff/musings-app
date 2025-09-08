import { useState, useEffect } from 'react';
import type { ClientPageProps } from '../client-landing-page';

interface LandingPageProps extends ClientPageProps {
  isLoading?: boolean;
}

export default function LandingPage({ data, variables, query, isLoading }: LandingPageProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

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
              {['Home', 'About', 'Music', 'Tour', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:text-purple-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {hero && 
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          {hero.backgroundVideo && (
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-30"
                onLoadedData={() => setIsVideoLoaded(true)}
              >
                <source src={hero.backgroundVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
            </div>
          )}

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            {/* Logo */}
            {hero.logoImage && (
              <div className="mb-8 animate-fade-in">
                <img 
                  src={hero.logoImage} 
                  alt="Misses Monday Logo" 
                  className="w-48 h-48 mx-auto object-contain filter drop-shadow-2xl"
                />
              </div>
            )}

            {/* Hero Text */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in-up delay-300">
              {hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 animate-fade-in-up delay-500">
              {hero.subtitle}
            </p>

            {/* CTA Button */}
            <a
              href={hero.ctaLink}
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-700"
            >
              {hero.ctaText}
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>
      }

      {/* About Section */}
      { about &&
        <section id="about" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {about.title}
                </h2>
                <div className="text-lg text-white/80 leading-relaxed space-y-4">
                  {about.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              {about.image && (
                <div className="relative">
                  <img 
                    src={about.image} 
                    alt="Band Photo" 
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </div>
              )}
            </div>
          </div>
        </section>
      }

      {/* Music Section */}
      { music?.tracks && 
        <section id="music" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {music.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {music.tracks.map((track, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    {track?.coverImage && (
                      <img 
                        src={track.coverImage} 
                        alt={track.title}
                        className="w-full h-48 object-cover rounded-xl mb-4"
                      />
                    )}
                    <h3 className="text-xl font-bold mb-2 text-white">{track?.title}</h3>
                    <p className="text-white/70 mb-4">{track?.description}</p>
                    {track?.audioUrl && (
                      <audio 
                        controls 
                        className="w-full"
                        style={{ filter: 'invert(1)' }}
                      >
                        <source src={track.audioUrl} type="audio/mpeg" />
                      </audio>
                    )}
                  </div>
              ))}
            </div>
          </div>
        </section>
      }

      {/* Tour Section */}
      { tour && 
        <section id="tour" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {tour.title}
            </h2>
            { tour?.dates && 
            
              <div className="space-y-4">
                {tour.dates.map((show, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between hover:bg-white/10 transition-all duration-300"
                  >
                    { show && 
                      <div className="flex-1 mb-4 md:mb-0">
                        <div className="text-purple-400 font-bold text-lg">{show.date}</div>
                        <div className="text-xl font-semibold text-white">{show.venue}</div>
                        <div className="text-white/70">{show.city}</div>
                      </div>
                    }
                    {show && show.ticketUrl && (
                      <a
                        href={show.ticketUrl}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        Get Tickets
                      </a>
                    )}
                  </div>
                ))}
              </div>
            }
          </div>
        </section>
      }

      {/* Contact Section */}
      { contact &&
        <section id="contact" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {contact.title}
            </h2>
            
            <div className="mb-12">
              <a 
                href={`mailto:${contact.email}`}
                className="text-2xl text-white hover:text-purple-400 transition-colors duration-300"
              >
                {contact.email}
              </a>
            </div>
            
            { contact.social &&
              <div className="flex justify-center space-x-8">
                {contact.social.instagram && (
                  <a 
                    href={contact.social.instagram}
                    className="text-white/70 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <span className="text-2xl">📱</span>
                  </a>
                )}
                {contact.social.spotify && (
                  <a 
                    href={contact.social.spotify}
                    className="text-white/70 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <span className="text-2xl">🎵</span>
                  </a>
                )}
                {contact.social.youtube && (
                  <a 
                    href={contact.social.youtube}
                    className="text-white/70 hover:text-red-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <span className="text-2xl">📺</span>
                  </a>
                )}
                {contact.social.facebook && (
                  <a 
                    href={contact.social.facebook}
                    className="text-white/70 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <span className="text-2xl">👥</span>
                  </a>
                )}
              </div>
            }
          </div>
        </section>
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