"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full group cursor-pointer" onClick={toggleMute}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        poster={poster}
      >
        Browser Anda tidak mendukung tag video.
      </video>

      <div className="absolute bottom-6 right-6 z-20">
        <div className="bg-black/50 backdrop-blur-md p-2.5 rounded-full text-white hover:bg-black/70 transition-all shadow-lg border border-white/20">
          {isMuted ? (
            <VolumeX size={20} />
          ) : (
            <Volume2 size={20} />
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/80 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-6 left-6 text-white pointer-events-none z-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-1 drop-shadow-md">
          Experience
        </p>
        <p className="font-serif italic text-lg drop-shadow-md">
          Borobudur Explore
        </p>
      </div>

      {isMuted && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-xs font-bold tracking-widest uppercase border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Tap untuk Suara
            </div>
        </div>
      )}
    </div>
  );
}