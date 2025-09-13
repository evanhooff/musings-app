import { useState } from "react";
import type { PageQuery } from "../../tina/__generated__/types";

export default async function Music(music: PageQuery["page"]["music"]) {
    
    if (!music || !music.tracks) {
        return null;
    }
    const [activeTrack, setActiveTrack] = useState<number | null>(null);
    return (
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
    );
}