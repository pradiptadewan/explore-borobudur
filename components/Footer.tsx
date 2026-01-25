import Link from "next/link";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2F3E2E] text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif tracking-widest uppercase text-white">
              Explore <span className="italic font-light text-[#A3B18A]">Borobudur</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-light">
              Crafting timeless memories in the heart of Java. Experience nature, culture, and adventure with premium service.
            </p>
          </div>

          {/* Quick Links */}
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

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm font-light text-gray-300">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={16} className="text-[#A3B18A]" aria-hidden="true"/> 
                <a href="tel:+6285801262682" className="hover:text-white transition-colors" aria-label="Hubungi via Telepon">
                  +62 858 0126 2682
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={16} className="text-[#A3B18A]" aria-hidden="true"/> 
                <span>Jl. Badrawati, Borobudur, Magelang</span>
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 tracking-wide">
          <p>&copy; {new Date().getFullYear()} Borobudur Explore. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-serif italic">Licence to Live.</p>
        </div>
      </div>
    </footer>
  );
}