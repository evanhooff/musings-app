import { useState } from "react";
import type { PageQuery } from "../../tina/__generated__/types";

export default function Hero(hero: PageQuery["page"]["hero"]) {
    if (!hero) {
        return null;
    }
    return (
       <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
                {/* Animated Background Pattern */}
                {!hero.headerImage && (
                  <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
                  </div>
                )}
       
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
                   {hero.ctaLink && 
                    <a
                      href={hero.ctaLink}
                      className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-700"
                    >
                      {hero.ctaText}
                    </a>
                   }
                 </div>
            </section>
    );
}