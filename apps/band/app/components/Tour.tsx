import type { PageQuery } from "../../tina/__generated__/types";
import { HeaderText } from "./HeaderText";

export default function agenda(agenda: PageQuery["page"]["agenda"]) {
    if (!agenda) {
        return null;
    }
    return (
        <section id="agenda" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            
            <HeaderText text={agenda.title} />
            { agenda?.dates && 
            
              <div className="space-y-4">
                {agenda.dates.map((show, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between hover:bg-white/10 transition-all duration-300"
                  >
                    { show && show.date &&
                      <div className="mb-4 md:mb-0">
                        <div className="text-blue-400 font-bold text-lg">
                            {new Date(show.date).toLocaleDateString("nl-NL", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })} - {show.walkInTime}
                        </div>
                        <div className="text-xl font-semibold text-white">{show.venue} @ {show.city}</div>
                        <div className="text-white/70">Starttijd: {show.showTime} - {show.duration}</div>
                      </div>
                    }
                
                    {show && (show.eventUrl || show.photoLink) && (
                      <div className="flex flex-col gap-2 text-center">
                        {show.eventUrl && (
                          <a
                            href={show.eventUrl}
                            target="_blank"
                            className="button-51"
                          >
                            Meer info
                          </a>
                        )}
                        {show.photoLink && (
                          <a
                            href={`album/${show.photoLink}`}
                            className="button-51"
                          >
                            Foto's
                          </a>
                        )}
                      </div>
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
                  </div>
                ))}
              </div>
            }
          </div>
        </section>
    );
}