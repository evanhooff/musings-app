import type { PageQuery } from "../../tina/__generated__/types";

export default function agenda(agenda: PageQuery["page"]["agenda"]) {
    if (!agenda) {
        return null;
    }
    return (
        <section id="agenda" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {agenda.title}
            </h2>
            { agenda?.dates && 
            
              <div className="space-y-4">
                {agenda.dates.map((show, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between hover:bg-white/10 transition-all duration-300"
                  >
                    { show && 
                      <div className="mb-4 md:mb-0">
                        <div className="text-purple-400 font-bold text-lg">{show.date} {show.walkInTime}</div>
                        <div className="text-xl font-semibold text-white">{show.venue} @ {show.city}</div>
                        <div className="text-white/70">Starttijd: {show.showTime} - {show.duration}</div>
                      </div>
                    }
                    {show && show.eventUrl && (
                      <a
                        href={show.eventUrl}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105"
                      >
                        Meer info
                      </a>
                    )}
                  {show && show.image && (
                    <div className="relative flex items-start justify-center h-96">
                      <img 
                        src={show.image} 
                        alt="Event Poster" 
                        className="w-full h-96 object-contain object-top rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                      />
                      
                    </div>
                  )}
                  {show && show.photoLink && (
                    <a
                      href={show.eventUrl}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      Meer foto's
                    </a>
                  )}
                  </div>
                ))}
              </div>
            }
          </div>
        </section>
    );
}