import Link from "next/link";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2F3E2E] text-white pt-16 sm:pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        
        {/* Grid Layout: 1 kolom (HP) -> 2 kolom (Tablet) -> 4 kolom (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 text-center md:text-left">
          
          {/* 1. Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif tracking-widest uppercase text-white">
              Explore <span className="italic font-light text-[#A3B18A]">Borobudur</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-light">
              Crafting timeless memories in the heart of Java. Experience nature, culture, and adventure with premium service.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-white">Discover</h3>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              <li>
                <Link href="/vw" aria-label="Lihat Paket VW Safari Tour" className="hover:text-white transition-colors hover:tracking-wide duration-300">
                  VW Safari Tour
                </Link>
              </li>
              <li>
                <Link href="/jeep" aria-label="Lihat Paket Jeep Sunrise" className="hover:text-white transition-colors hover:tracking-wide duration-300">
                  Jeep Sunrise
                </Link>
              </li>
              <li>
                <Link href="/atv" aria-label="Lihat Paket ATV Adventure" className="hover:text-white transition-colors hover:tracking-wide duration-300">
                  ATV Adventure
                </Link>
              </li>
              <li>
                <Link href="/rafting" aria-label="Lihat Paket River Rafting" className="hover:text-white transition-colors hover:tracking-wide duration-300">
                  River Rafting
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={16} className="text-[#A3B18A] shrink-0" aria-hidden="true"/> 
                <a href="tel:+6285801262682" className="hover:text-white transition-colors" aria-label="Hubungi via Telepon">
                  +62 858 0126 2682
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin size={16} className="text-[#A3B18A] shrink-0 mt-1" aria-hidden="true"/> 
                <span>Jl. Badrawati, Borobudur, Magelang, Jawa Tengah</span>
              </li>
              <li className="flex justify-center md:justify-start gap-4 mt-4 text-white">
                 <a href="#" aria-label="Kunjungi Instagram Explore Borobudur" className="hover:text-[#A3B18A] transition-colors">
                    <Instagram size={20} aria-hidden="true"/>
                 </a>
                 <a href="#" aria-label="Kunjungi Facebook Explore Borobudur" className="hover:text-[#A3B18A] transition-colors">
                    <Facebook size={20} aria-hidden="true"/>
                 </a>
              </li>
            </ul>
          </div>

          {/* 4. Google Maps (UPDATED) */}
          <div className="w-full h-full min-h-62.5 md:min-h-50 rounded-xl overflow-hidden shadow-lg border border-white/10 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.5719103085635!2d110.20234459999999!3d-7.621470099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8da6da1e3db1%3A0x45f8ac5872eae9f0!2sVw%20Tour%20dan%20Homestay%20Resto%20Borobudur!5e0!3m2!1sid!2sid!4v1769495601824!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              // HAPUS filter grayscale/opacity agar selalu berwarna
              className="absolute inset-0 w-full h-full"
              title="Lokasi VW Tour dan Homestay Resto Borobudur"
            ></iframe>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 tracking-wide">
          <p>© {new Date().getFullYear()} Borobudur Explore. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-serif italic">Licence to Live.</p>
        </div>
      </div>
    </footer>
  );
}