"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "VW Safari", href: "/vw" },
    { name: "Jeep", href: "/jeep" },
    { name: "ATV", href: "/atv" },
    { name: "Rafting", href: "/rafting" },
  ];

  // Logic warna dynamic: Putih di atas (Hero), Dark Olive saat scroll
  const navBg = scrolled ? "bg-[#E5E7E1]/90 backdrop-blur-md shadow-sm" : "bg-transparent";
  const textColor = scrolled || pathname !== "/" ? "text-[#2F3E2E]" : "text-[#E5E7E1]";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${navBg} py-4 md:py-6`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
      <Link
        href="/"
        className={`flex flex-col text-xl font-serif font-bold tracking-wider uppercase transition-colors ${textColor}`}
      >
        <span>Explore</span>
        <span className="italic font-light opacity-80 leading-none">
          Borobudur
        </span>
      </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-xs font-bold tracking-[0.2em] uppercase hover:opacity-60 transition-all ${textColor} ${pathname === link.href ? "underline decoration-2 underline-offset-4" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${textColor}`}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#2F3E2E] transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col justify-center items-center space-y-8`}>
        {links.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            onClick={() => setIsOpen(false)} 
            className="text-xl font-serif text-[#E5E7E1] tracking-widest uppercase hover:text-[#A3B18A] transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-[#E5E7E1]">
           <X size={32} />
        </button>
      </div>
    </nav>
  );
}