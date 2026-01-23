"use client";
import { useState } from "react";
import Image from "next/image";
import { Clock, Users, ArrowUpRight } from "lucide-react";
import BookingModal from "./BookingModal";
import { TourPackage } from "@/lib/data";

export default function PackageCard({ pkg }: { pkg: TourPackage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getImg = (cat: string) => {
    if(cat === 'vw') return "/images/vw-main.png";
    if(cat === 'jeep') return "/images/jeep-main.png";
    if(cat === 'atv') return "/images/atv-main.png";
    return "/images/rafting-main.png";
  }

  return (
    <>
      <div className="group bg-[#F7F8F6] rounded-sm overflow-hidden border border-[#DaddD6] hover:border-[#A3B18A] transition-all duration-500 hover:shadow-xl flex flex-col h-full">
        <div className="h-48 sm:h-56 md:h-64 relative overflow-hidden">
          <Image 
            src={getImg(pkg.category)} 
            alt={pkg.name} 
            fill 
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 bg-[#E5E7E1] px-3 sm:px-4 py-1.5 sm:py-2 text-[#2F3E2E] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            Start from IDR
          </div>
        </div>
        
        <div className="p-6 sm:p-8 flex flex-col grow">
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <h3 className="text-xl sm:text-2xl font-serif text-[#2F3E2E] leading-tight pr-2">{pkg.name}</h3>
            <ArrowUpRight className="text-[#A3B18A] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" size={20}/>
          </div>

          <p className="text-[#586356] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-light line-clamp-2 grow border-b border-[#DaddD6] pb-3 sm:pb-4">
            {pkg.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-[#2F3E2E] font-medium tracking-wide mb-6 sm:mb-8 uppercase">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#4A5D44] shrink-0"/> 
              <span>{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-[#4A5D44] shrink-0"/> 
              <span>Max {pkg.pax} Pax</span>
            </div>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-[#2F3E2E] font-serif text-lg sm:text-xl">
              <span className="text-sm sm:text-base">IDR</span> {pkg.price.toLocaleString('id-ID')} 
              <span className="text-xs font-sans text-[#586356] font-normal ml-1">/pack</span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-[#2F3E2E] text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#4A5D44] focus:bg-[#4A5D44] focus:outline-none focus:ring-2 focus:ring-[#4A5D44] focus:ring-offset-2 transition-all min-h-11 flex items-center justify-center"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <BookingModal 
        pkg={pkg} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}