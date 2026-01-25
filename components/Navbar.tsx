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

  const textColor = isOpen
    ? "text-[#E5E7E1]"
    : scrolled
    ? "text-[#2F3E2E]"
    : "text-[#E5E7E1]";

  const navBg = isOpen
    ? "bg-transparent" 
    : scrolled
    ? "bg-[#E5E7E1]/90 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  const links = [
    { name: "Home", href: "/" },
    { name: "VW Safari", href: "/vw" },
    { name: "Jeep", href: "/jeep" },
    { name: "ATV", href: "/atv" },
    { name: "Rafting", href: "/rafting" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-colors duration-300 ease-in-out ${navBg} py-4 md:py-6`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`relative z-50 flex flex-col text-xl font-serif font-bold tracking-wider uppercase transition-colors duration-300 ${textColor}`}
          >
            <span>Explore</span>
            <span className="italic font-light opacity-80 leading-none">
              Borobudur
            </span>
          </Link>

          <div className="hidden md:flex space-x-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold tracking-[0.2em] uppercase hover:opacity-60 transition-all ${
                  scrolled ? "text-[#2F3E2E]" : "text-[#E5E7E1]"
                } ${
                  pathname === link.href
                    ? "underline decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-50 md:hidden transition-colors duration-300 ${textColor} focus:outline-none`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#2F3E2E] flex flex-col justify-center items-center space-y-8 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-full"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-serif text-[#E5E7E1] tracking-widest uppercase hover:text-[#A3B18A] transition-colors hover:scale-105 transform duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}