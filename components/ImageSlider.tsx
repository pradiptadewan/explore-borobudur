"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  alt: string;
}

export default function ImageSlider({ images, alt }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2350);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={`${img}-${index}`}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`${alt} - slide ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      ))}
      
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                i === currentIndex ? "bg-white w-3" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}