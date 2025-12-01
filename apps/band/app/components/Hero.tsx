import { useState } from "react";
import type { PageQuery } from "../../tina/__generated__/types";
import { HeaderText } from "./HeaderText";

export default function Hero(hero: PageQuery["page"]["hero"]) {
    if (!hero) {
        return null;
    }
    return (
       <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-custom">
      
                {/* Animated Background Pattern */}
                {hero.headerImage ? (
                <div className="absolute inset-0 z-0">
                  <img
                  src={hero.headerImage}
                  alt="Header"
                  className="w-full h-full object-cover"
                  style={{ position: "absolute", inset: 0, zIndex: 0 }}
                  />
                </div>
                ) : (
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
                   {hero.title && (
                    <HeaderText size={1} text={hero.title} className="bg-clip-text animate-fade-in-up delay-300" gradient={false} />
                   )}
                   
                   <p className="text-xl md:text-2xl tracking-widest uppercase text-white/80 mb-12 animate-fade-in-up delay-500">
                     {hero.subtitle}
                   </p>
       
                   {/* CTA Button */}
                   {hero.ctaLink && 
                   <div className="w-full flex justify-end">
                    <a
                      href={hero.ctaLink}
                      className="button-53 transition-all duration-300 animate-fade-in delay-700"
                    >
                      {hero.ctaText}
                    </a>
                    </div>
                   }
                 </div>
            </section>
    );
}