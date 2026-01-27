"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import VideoPlayer from "./VideoPlayer";

const videoSlides = [
  {
    id: 1,
    src: "/videos/video2.mp4",
    poster: "/images/vw-main.jpg",
    title: "VW Safari Tour",
  },
  {
    id: 2,
    src: "/videos/video.mp4",
    poster: "/images/vw-main.png",
    title: "VW Safari Tour",
  },
];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === videoSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative flex items-center justify-center gap-4 sm:gap-8 w-full max-w-lg">
        
        <button
          onClick={prevSlide}
          className="hidden md:flex p-3 bg-[#E5E7E1]/80 backdrop-blur text-[#2F3E2E] rounded-full hover:bg-[#4A5D44] hover:text-white transition-all shadow-lg z-10 hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="relative w-70 sm:w-[320px] aspect-9/16 rounded-[2.5rem] border-8 border-[#2F3E2E] shadow-2xl bg-black overflow-hidden ring-4 ring-[#2F3E2E]/20 transform md:-rotate-2 hover:rotate-0 transition-transform duration-500 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <VideoPlayer
                src={videoSlides[currentIndex].src}
                poster={videoSlides[currentIndex].poster}
              />
              
              <div className="absolute top-6 left-0 right-0 text-center pointer-events-none z-20">
                 <span className="bg-black/40 backdrop-blur-sm text-white/90 text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                    {videoSlides[currentIndex].title}
                 </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextSlide}
          className="hidden md:flex p-3 bg-[#E5E7E1]/80 backdrop-blur text-[#2F3E2E] rounded-full hover:bg-[#4A5D44] hover:text-white transition-all shadow-lg z-10 hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex items-center gap-6 mt-8 md:mt-10">
        <button
          onClick={prevSlide}
          className="md:hidden p-2.5 bg-[#E5E7E1] text-[#2F3E2E] rounded-full shadow-md active:scale-95"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {videoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-[#4A5D44]"
                  : "w-2.5 bg-[#2F3E2E]/30 hover:bg-[#4A5D44]/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="md:hidden p-2.5 bg-[#E5E7E1] text-[#2F3E2E] rounded-full shadow-md active:scale-95"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}