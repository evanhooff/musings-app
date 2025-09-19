import type { PageQuery } from "../../../tina/__generated__/types";

export default function Music(music: PageQuery["page"]["music"]) {
    if (!music) {
        return null;
    }
    return (
        <section id="music" className="relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {music.title}
                </h2>
                <div className="text-lg text-white/80 leading-relaxed space-y-4">
                  {music.content?.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              {music.image && (
                <div className="relative flex items-start justify-center h-96">
                  <img 
                    src={music.image} 
                    alt="Music Photo" 
                    className="w-full h-96 object-contain object-top rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                </div>
              )}
            </div>
          </div>
        </section>
    );
}