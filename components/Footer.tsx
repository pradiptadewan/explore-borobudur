import Link from "next/link";
import { Phone, MapPin, Instagram, Facebook, ExternalLink } from "lucide-react";

export default function Footer() {
  const googleMapsUrl = "https://maps.app.goo.gl/RkL1M3bcVtXnx9hZA?g_st=ic"; 
  
  const googleMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.269783443423!2d110.20140727591963!3d-7.600049675730312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8cf009a7d697%3A0xdd4f1f26856791b!2sCandi%20Borobudur!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

  return (
    <footer className="bg-[#2F3E2E] text-white pt-16 sm:pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 text-center md:text-left">
          
          <div className="space-y-4">
            <h2 className="text-3xl font-serif tracking-widest uppercase text-white">
              Explore <span className="italic font-light text-[#A3B18A]">Borobudur</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-light">
              Penyedia layanan paket wisata Borobudur terbaik dan terpercaya. Kami melayani Sewa VW Safari, Jeep Adventure, ATV Menoreh, dan Rafting Sungai Elo di Magelang dengan pelayanan premium.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-white">Paket Wisata</h3>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              <li>
                <Link href="/vw" aria-label="Sewa VW Safari Borobudur Murah" className="hover:text-white transition-colors hover:tracking-wide duration-300">
                  Sewa VW Borobudur
                </Link>
              </li>
              <li>
                <Link href="/jeep" aria-label="Paket Jeep Sunrise Punthuk Setumbu" className="hover:text-white transition-colors hover:tracking-wide duration-300">
                  Jeep Wisata Sunrise
                </Link>
              </li>
              <li>
                <Link href="/atv" aria-label="Sewa ATV di Borobudur Magelang" className="hover:text-white transition-colors hover:tracking-wide duration-300">
                  Sewa ATV Adventure
                </Link>
              </li>
              <li>
                <Link href="/rafting" aria-label="Paket Rafting Sungai Elo Magelang" className="hover:text-white transition-colors hover:tracking-wide duration-300">
                  Rafting Sungai Elo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-white">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={16} className="text-[#A3B18A] shrink-0" aria-hidden="true"/> 
                <a href="tel:+6285801262682" className="hover:text-white transition-colors" aria-label="Hubungi Admin Wisata Borobudur">
                  +62 858 0126 2682
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin size={16} className="text-[#A3B18A] shrink-0 mt-1" aria-hidden="true"/> 
                <span>Jl. Badrawati, Kawasan Candi Borobudur, Magelang, Jawa Tengah, Indonesia</span>
              </li>
              <li className="flex justify-center md:justify-start gap-4 mt-4 text-white">
                 <a href="https://www.instagram.com/joglodhepis_homestayandresto?igsh=eGhyMXBhdXBubGFw" aria-label="Instagram Explore Borobudur" className="hover:text-[#A3B18A] transition-colors">
                    <Instagram size={20} aria-hidden="true"/>
                 </a>
                 <a href="https://www.facebook.com/share/1EZu6GQp9h/?mibextid=wwXIfr" aria-label="Facebook Explore Borobudur" className="hover:text-[#A3B18A] transition-colors">
                    <Facebook size={20} aria-hidden="true"/>
                 </a>
              </li>
            </ul>
          </div>

          <div className="w-full h-full min-h-62.5 md:min-h-50 rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
            <iframe 
              src={googleMapsEmbedSrc}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              title="Lokasi Kantor Wisata VW Safari dan Rafting Borobudur"
            ></iframe>

            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors"
              aria-label="Buka Lokasi Wisata di Google Maps"
            >
              <div className="bg-[#2F3E2E] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100 scale-100">
                <ExternalLink size={14} />
                Buka Maps
              </div>
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 tracking-wide">
          <p>© {new Date().getFullYear()} Explore Borobudur & VW Safari Magelang. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-serif italic">Licence to Live.</p>
        </div>
      </div>
    </footer>
  );
}