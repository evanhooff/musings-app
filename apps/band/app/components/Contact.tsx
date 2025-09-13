import type { PageQuery } from "../../tina/__generated__/types";

export default function Contact(contact: PageQuery["page"]["contact"]) {
    if (!contact) {
        return null;
    }
    return (
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
    );
}