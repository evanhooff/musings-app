import type { PageQuery } from "../../tina/__generated__/types";
import { HeaderText } from "./HeaderText";

export default function Contact(contact: PageQuery["page"]["contact"]) {
    if (!contact) {
        return null;
    }
    return (
        <section id="contact" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            
            <HeaderText text={contact.title} />

            
            <div className="mb-12">
              <a 
                href={`mailto:${contact.email}`}
                className="text-2xl text-white hover:text-blue-400 transition-colors duration-300"
              >
                {contact.email}
              </a>
            </div>
            
            { contact.social &&
              <div className="flex justify-center space-x-8">

                {contact.social.soundcloud && (
                  <a 
                    href={contact.social.soundcloud}
                    className="text-white/70 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    <span className="text-2xl">🎵</span>
                  </a>
                )}
                {contact.social.youtube && (
                  <a 
                    href={contact.social.youtube}
                    className="text-white/70 hover:text-orange-400 transition-colors duration-300 transform hover:scale-110"
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