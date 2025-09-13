import type { PageQuery } from "../../tina/__generated__/types";

export default function About(about: PageQuery["page"]["about"]) {
    if (!about) {
        return null;
    }
    return (
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
    );
}