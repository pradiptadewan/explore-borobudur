"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  ShieldCheck,
  Star,
  Zap,
  Droplets,
  Mountain,
  Play,
  Utensils,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { JSX, useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import VideoCarousel from "@/components/VideoCarousel";

interface RestoPackage {
  id: number;
  name: string;
  price: string;
  menu: string[];
  image: string;
}

interface FeatureData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: string[];
  icon: JSX.Element;
  color: string;
  details: string[];
}

const restoPackages: RestoPackage[] = [
  {
    id: 1,
    name: "Paket 1",
    price: "IDR 30.000 / pax",
    image: "/images/buffet.webp",
    menu: [
      "Nasi Putih",
      "Pecel Sayur",
      "Telur Dadar",
      "Mie Goreng",
      "Tempe Tepung",
      "Kerupuk",
      "Buah",
      "Teh",
    ],
  },
  {
    id: 2,
    name: "Paket 2",
    price: "IDR 35.000 / pax",
    image: "/images/buffet.webp",
    menu: [
      "Nasi Putih",
      "Sup Bakso",
      "Ayam Goreng",
      "Tahu Goreng",
      "Sambal",
      "Kerupuk",
      "Buah",
      "Teh",
    ],
  },
  {
    id: 3,
    name: "Paket 3",
    price: "IDR 40.000 / pax",
    image: "/images/buffet.webp",
    menu: [
      "Nasi Putih",
      "Sayur Lodeh",
      "Lele / Ayam",
      "Bihun Goreng",
      "Bakwan",
      "Krupuk",
      "Buah",
      "Teh",
    ],
  },
  {
    id: 4,
    name: "Paket 4",
    price: "IDR 40.000 / pax",
    image: "/images/buffet.webp",
    menu: [
      "Nasi Putih",
      "Soto Betawi",
      "Bergedel",
      "Kerupuk",
      "Buah",
      "Teh",
      "Kopi",
    ],
  },
  {
    id: 5,
    name: "Paket 5",
    price: "IDR 45.000 / pax",
    image: "/images/buffet.webp",
    menu: [
      "Nasi Putih",
      "Ayam Bakar",
      "Oseng Buncis",
      "Mie Lethek",
      "Tempe Goreng",
      "Krupuk",
      "Sambal",
      "Buah",
      "Teh",
      "Kopi",
    ],
  },
  {
    id: 6,
    name: "Paket 6",
    price: "IDR 50.000 / pax",
    image: "/images/buffet.webp",
    menu: [
      "Nasi Putih",
      "Nila Bakar",
      "Ca Sayur Bakso",
      "Mie Lethek",
      "Tahu/Tempe",
      "Krupuk",
      "Sambal",
      "Buah",
      "Teh",
      "Kopi",
    ],
  },
  {
    id: 7,
    name: "Paket 7",
    price: "IDR 55.000 / pax",
    image: "/images/buffet.webp",
    menu: [
      "Nasi Putih",
      "Sup Iga Sapi",
      "Mie Goreng",
      "Bergedel",
      "Tempe Goreng",
      "Krupuk",
      "Buah",
      "Sambel",
      "Teh",
      "Kopi",
    ],
  },
];

const featuresData: FeatureData[] = [
  {
    id: "vw",
    title: "Sewa VW Safari Borobudur",
    subtitle: "WISATA HITS MAGELANG",
    description:
      "Paket wisata terpopuler berkeliling desa wisata Borobudur menggunakan mobil VW klasik. Kunjungi sentra UMKM Rengginang, Madu, Batik, dan berfoto dengan latar Pegunungan Menoreh yang instagramable.",
    image: "/images/vw-main11.jpg",
    stats: ["Mobil Klasik", "Edukasi UMKM", "Spot Instagramable"],
    icon: <Camera className="w-6 h-6 text-[#E8ECE9]" />,
    color: "bg-[#4A5D44]",
    details: [
      "Trip Desa Wisata & Persawahan",
      "Kunjungan Home Industri UMKM",
      "Driver Sekaligus Tour Guide",
      "Unit VW Terawat & Bersih",
    ],
  },
  {
    id: "jeep",
    title: "Parang Menoreh Jeep",
    subtitle: "4X4 OFFROAD EXPERIENCE",
    description:
      "Jelajahi keindahan alam Borobudur dengan Jeep 4x4. Pilihan rute lengkap mulai dari Short Trip edukasi (Madu & Jamur), Susur Sungai yang memacu adrenalin, hingga Trek Fun Offroad dan Sunrise di Punthuk Setumbu.",
    image: "/images/jeep-main.png",
    stats: ["Short/Medium/Long Trip", "Susur Sungai", "Sunrise"],
    icon: <Mountain className="w-6 h-6 text-[#E8ECE9]" />,
    color: "bg-[#6B705C]",
    details: [
      "Armada Jeep 4x4 Prima (Max 3 Pax)",
      "Wisata Susur Sungai & Fun Offroad",
      "Visit Edukasi Madu & Jamur",
      "Sunrise Punthuk Setumbu",
    ],
  },
  {
    id: "atv",
    title: "ATV Adventure Menoreh",
    subtitle: "EXTREME SPORT",
    description:
      "Taklukkan rute Sungai Sileng yang tak terduga! Nikmati petualangan ATV melintasi sawah, desa wisata, dan dua kunjungan industri rumahan. Pilihan paket Single, Double, hingga Sunrise tersedia untuk memacu adrenalin Anda.",
    image: "/images/atv-main.png",
    stats: ["Fast Track", "Family Trip", "Adventure"],
    icon: <Zap className="w-6 h-6 text-[#E8ECE9]" />,
    color: "bg-[#584B3F]",
    details: [
      "Explore Sileng River & Paddy Field",
      "Stop by 2 Home Industries",
      "Guide, Photo/Video & First Aid",
      "Safety Gear (Helm & Boots)",
    ],
  },
  {
    id: "rafting",
    title: "Rafting Sungai Elo",
    subtitle: "WISATA AIR SERU",
    description:
      "Arung jeram Sungai Elo Grade 2-3 yang aman bagi pemula. Paket lengkap dengan fasilitas makan besar, snack kelapa muda, dan asuransi. Satu perahu untuk maksimal 4 peserta dengan pemandu profesional.",
    image: "/images/rafting-main.png",
    stats: ["Grade II–III", "Max 4 Pax/Boat", "Makan Besar"],
    icon: <Droplets className="w-6 h-6 text-[#E8ECE9]" />,
    color: "bg-[#5F6F65]",
    details: [
      "Pemandu Profesional & Shuttle",
      "Kelapa Muda & Snack",
      "Makan Besar",
      "Asuransi Cover",
    ],
  },
];

const FeatureItem = ({ item, index }: { item: FeatureData; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <section
      id={item.id}
      className={`py-16 sm:py-20 md:py-32 px-4 sm:px-6 transition-colors duration-700 overflow-hidden ${
        isEven ? "bg-[#E5E7E1]" : "bg-[#DaddD6]"
      }`}
    >
      <div
        className={`container mx-auto flex flex-col gap-8 sm:gap-12 md:gap-20 ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-[#2F3E2E] transform translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rounded-sm transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1"></div>
            <div className="relative h-70 sm:h-100 md:h-112 lg:h-150 w-full overflow-hidden shadow-xl rounded-sm bg-[#E5E7E1]">
              <Image
                src={item.image}
                alt={`Paket Wisata ${item.title} Murah`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 grayscale-[0.1] group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-linear-to-t from-[#2F3E2E] via-[#2F3E2E]/60 to-transparent pt-16 sm:pt-24 flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
                {item.stats.map((stat, i) => (
                  <span
                    key={i}
                    className="whitespace-nowrap text-[#E5E7E1] text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase border border-[#E5E7E1]/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full backdrop-blur-md"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div
              className={`p-2.5 sm:p-3 rounded-full ${item.color} shadow-lg text-white ring-2 sm:ring-4 ring-[#E5E7E1]/50`}
            >
              {item.icon}
            </div>
            <h3 className="text-[#586356] font-bold text-[10px] sm:text-xs tracking-[0.3em] uppercase border-b-2 border-[#586356]/20 pb-1">
              {item.subtitle}
            </h3>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#2F3E2E] mb-4 sm:mb-6 leading-tight">
            {item.title}
          </h2>

          <p className="text-[#4A5D44] text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 font-light">
            {item.description}
          </p>

          <div className="mb-8 sm:mb-10 pl-4 sm:pl-6 border-l-2 border-[#2F3E2E]/20">
            <ul className="space-y-3 sm:space-y-4">
              {item.details.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 sm:gap-4 text-[#2F3E2E] group/item"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4A5D44] shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase group-hover/item:text-[#4A5D44] transition-colors">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href={`/${item.id}`}
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 bg-[#2F3E2E] text-[#E5E7E1] text-xs font-bold rounded-full tracking-[0.2em] uppercase hover:bg-[#4A5D44] focus:bg-[#4A5D44] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-center min-h-11 flex items-center justify-center"
              aria-label={`Cek Harga Promo ${item.title}`}
            >
              Cek Harga Promo
            </Link>
            <Link
              href={`/${item.id}`}
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 border-2 border-[#2F3E2E] text-[#2F3E2E] text-xs font-bold rounded-full tracking-[0.2em] uppercase hover:bg-[#2F3E2E] hover:text-[#E5E7E1] transition-all duration-300 text-center min-h-11 flex items-center justify-center"
              aria-label={`Detail Itinerary ${item.title}`}
            >
              Detail Itinerary
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const RestoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev + 1 > restoPackages.length - itemsPerPage ? 0 : prev + 1
    );
  }, [itemsPerPage]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? restoPackages.length - itemsPerPage : prev - 1
    );
  }, [itemsPerPage]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth < 640) setItemsPerPage(1);
        else if (window.innerWidth < 1024) setItemsPerPage(2);
        else setItemsPerPage(3);
      }, 200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-20 md:py-32 bg-[#2F3E2E] text-[#E5E7E1] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-[#A3B18A] rounded-full text-[#2F3E2E]">
                <Utensils size={20} />
              </div>
              <h3 className="text-[#A3B18A] font-bold text-xs tracking-[0.3em] uppercase">
                Joglo Dhepis Resto
              </h3>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Cita Rasa Lezat <br />
              <span className="text-[#A3B18A] italic">Harga Bersahabat</span>
            </h2>

            <p className="text-[#E5E7E1]/80 text-base md:text-lg leading-relaxed mb-8 font-light">
              Lengkapi wisata Anda dengan hidangan lezat di Joglo Dhepis. Kami
              melayani pemesanan rombongan, prasmanan, reuni, hingga acara
              gathering kantor dengan kapasitas luas dan suasana Joglo yang
              asri.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Kapasitas 50+ Pax",
                "Karaoke",
                "Proyektor",
                "Sound System",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A3B18A]"></div>
                  <span className="text-sm font-medium tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div
              className="relative w-60 sm:w-72 aspect-9/16 group cursor-pointer"
              onClick={togglePlay}
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#A3B18A]/30 via-[#588157]/20 to-[#3A5A40]/30 rounded-3xl blur-xl scale-105"></div>

              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[#A3B18A] rounded-tl-2xl z-10"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-[#A3B18A] rounded-tr-2xl z-10"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-[#A3B18A] rounded-bl-2xl z-10"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[#A3B18A] rounded-br-2xl z-10"></div>

              <div className="relative bg-linear-to-br from-[#2F3E2E] via-[#1A231A] to-[#0F150F] rounded-3xl overflow-hidden shadow-2xl border border-[#A3B18A]/30">
                <div className="relative m-3 rounded-2xl overflow-hidden">
                  <video
                    ref={videoRef}
                    src="/videos/video-resto.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="object-cover w-full h-full opacity-95"
                  >
                    <track kind="captions" srcLang="id" label="Indonesia" />
                  </video>

                  <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                </div>

                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all z-20">
                    <div className="relative">
                      <div className="absolute inset-0 w-20 h-20 -translate-x-3 -translate-y-3 bg-[#A3B18A]/20 rounded-full animate-ping"></div>

                      <button
                        className="relative w-14 h-14 bg-linear-to-br from-[#A3B18A] to-[#588157] rounded-full flex items-center justify-center pl-1 text-white hover:scale-110 hover:shadow-2xl hover:shadow-[#A3B18A]/50 transition-all duration-300 border-2 border-white/20"
                        aria-label="Play Video"
                      >
                        <Play fill="currentColor" size={22} />
                      </button>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-10">
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="w-12 h-0.5 bg-linear-to-r from-[#A3B18A] to-transparent mb-3"></div>

                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/90 mb-1">
                      Event & Gathering
                    </p>
                    <p className="text-[10px] tracking-wider uppercase text-[#A3B18A]/80 font-medium">
                      Luxury Experience
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none z-30 skew-x-12"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative border-t border-[#E5E7E1]/10 pt-12">
          <div className="flex justify-between items-end mb-8">
            <div>
              <strong>
                <p className="text-[#D4AF37] text-sm mb-2">
                  * Minimum Order 15 Pax
                </p>
              </strong>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#E5E7E1]">
                Pilihan Paket Menu
              </h3>
              <p className="text-[#A3B18A] text-sm mt-2">
                Geser untuk melihat menu lainnya
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-3 border border-[#A3B18A]/50 rounded-full hover:bg-[#A3B18A] hover:text-[#2F3E2E] transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 border border-[#A3B18A]/50 rounded-full hover:bg-[#A3B18A] hover:text-[#2F3E2E] transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden -mx-4 px-4 py-4">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {restoPackages.map((paket) => (
                <motion.div
                  key={paket.id}
                  className={`shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`}
                >
                  <div className="relative h-full rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-2xl bg-[#1A231A] border border-[#A3B18A]/20">
                    <div className="relative h-48 sm:h-52 w-full">
                      <Image
                        src={paket.image}
                        alt={paket.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#1A231A] via-[#1A231A]/30 to-transparent"></div>

                      <div className="absolute bottom-4 left-6 z-10">
                        <h4 className="font-serif text-2xl sm:text-3xl text-[#E5E7E1] drop-shadow-md mb-1">
                          {paket.name}
                        </h4>
                        <p className="text-[#A3B18A] font-bold text-sm sm:text-base tracking-wide drop-shadow-md">
                          {paket.price}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col h-[calc(100%-12rem)] sm:h-[calc(100%-13rem)]">
                      <div className="grow mb-8">
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                          {paket.menu.map((menuItem, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-[#E5E7E1]/80 text-[11px] sm:text-xs font-light group/item"
                            >
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-[#A3B18A] shrink-0"></span>
                              <span>{menuItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={`https://wa.me/6285801262682?text=Halo%20Joglo%20Dhepis,%20saya%20mau%20pesan%20${paket.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 border border-[#E5E7E1]/30 text-[#E5E7E1] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] rounded-full text-center hover:bg-[#A3B18A] hover:text-[#1A231A] hover:border-[#A3B18A] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                        aria-label={`Pesan ${paket.name} via WhatsApp`}
                      >
                        View & Order
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function HomeView() {
  return (
    <main className="bg-[#E5E7E1] min-h-screen text-[#2F3E2E] font-sans selection:bg-[#A3B18A] selection:text-white overflow-x-hidden scroll-smooth">
      <section className="relative min-h-screen md:min-h-dvh w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/candi22.jpg"
            alt="Wisata Candi Borobudur dan Sewa VW Safari Magelang"
            fill
            sizes="100vw"
            className="object-cover object-center md:object-[center_30%] scale-100 md:scale-110"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-linear-to-b from-[#2F3E2E]/40 via-[#2F3E2E]/20 to-[#4A5D44]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-20 pt-16 sm:pt-20 md:pt-24 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-[#E5E7E1] leading-[1.1] mb-4 sm:mb-6 drop-shadow-2xl font-serif tracking-tight"
          >
            PAKET WISATA <br />
            <span className="italic text-[#A3B18A] font-light">
              BOROBUDUR
            </span>{" "}
            TERBAIK
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-[#E5E7E1]/90 mb-8 sm:mb-10 leading-relaxed max-w-lg drop-shadow-md font-light px-4 sm:px-0"
          >
            Explore keindahan Magelang dengan layanan Sewa VW Safari Borobudur,
            Jeep Sunrise, dan Rafting Sungai Elo. Pengalaman liburan tak
            terlupakan menanti Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <Link
              href="#vw"
              className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#E5E7E1]/10 backdrop-blur-sm border-2 border-[#E5E7E1]/50 text-[#E5E7E1] font-bold rounded-full hover:bg-[#E5E7E1] hover:text-[#2F3E2E] hover:border-[#E5E7E1] transition-all flex items-center justify-center gap-3 uppercase tracking-[0.15em] text-xs hover:scale-105 active:scale-100 duration-300 min-h-11"
              aria-label="Lihat Pilihan Paket Wisata"
            >
              Lihat Paket
            </Link>
            <Link
              href="https://wa.me/6285801262682?text=Halo%20Explore%20Borobudur,%20saya%20tertarik%20dengan%20paket%20wisata%20anda"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#4A5D44] text-white font-bold rounded-full hover:bg-[#3A4A35] transition-all flex items-center justify-center uppercase tracking-[0.15em] text-xs shadow-xl hover:shadow-[#A3B18A]/30 hover:scale-105 active:scale-100 duration-300 min-h-11"
              aria-label="Booking Paket Wisata via WhatsApp"
            >
              Booking WhatsApp
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 bg-[#E5E7E1]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-12 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#2F3E2E] tracking-[0.2em] uppercase mb-3 sm:mb-4">
              Kenapa Memilih Kami?
            </h2>
            <div className="h-px w-12 sm:w-16 bg-[#4A5D44] opacity-30"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-start gap-8 sm:gap-12 md:gap-24">
            <div className="w-full md:w-1/2 md:sticky md:top-24">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2F3E2E] mb-4 sm:mb-6 leading-tight font-serif">
                SOLUSI LIBURAN <br />{" "}
                <span className="text-[#4A5D44] italic font-light">
                  DI MAGELANG
                </span>
              </h2>
              <p className="text-[#4A5D44] text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 font-light">
                Kami menyediakan armada VW Safari terawat, Jeep 4x4 tangguh,
                ATV, dan peralatan Rafting standar internasional. Prioritas kami
                adalah keselamatan dan kepuasan wisatawan.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Terpercaya",
                    sub: "Ratusan Tamu Puas",
                  },
                  {
                    icon: Star,
                    title: "Layanan Premium",
                    sub: "Fasilitas Lengkap",
                  },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="p-4 sm:p-6 bg-[#DaddD6] rounded-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  >
                    <feature.icon
                      className="text-[#4A5D44] mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500 ease-out"
                      size={28}
                    />
                    <h3 className="font-bold text-[#2F3E2E] tracking-wide uppercase text-xs sm:text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-[#586356] uppercase tracking-wider">
                      {feature.sub}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-3 px-6 sm:px-8 py-2.5 sm:py-3 border-b-2 border-[#2F3E2E]/30 text-[#2F3E2E] text-xs font-bold tracking-[0.25em] uppercase hover:text-[#4A5D44] hover:border-[#4A5D44] transition-all group min-h-11"
                  aria-label="Lihat Gallery Wisata"
                >
                  Lihat Gallery Wisata{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative group">
              <div className="relative h-75 sm:h-96 md:h-144 w-full overflow-hidden shadow-2xl rounded-sm z-10">
                <Image
                  src="/images/nature-2.png"
                  alt="Pemandangan Alam Wisata Borobudur"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale-[0.15] sepia-[0.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                  loading="lazy"
                />
              </div>
              <div className="hidden md:block absolute -bottom-12 -left-12 h-72 w-64 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[6px] border-[#E5E7E1] z-20 hover:z-30 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                <Image
                  src="/images/nature-2.png"
                  alt="Detail Paket Wisata VW Safari"
                  fill
                  sizes="256px"
                  className="object-cover grayscale-[0.1]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#DaddD6] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#4A5D44]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2F3E2E]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <span className="p-2 bg-[#4A5D44] rounded-full text-white">
                  <Play size={16} fill="currentColor" />
                </span>
                <span className="text-[#4A5D44] font-bold tracking-[0.25em] text-xs uppercase">
                  Video Tour
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2F3E2E] mb-6 leading-tight">
                Intip Keseruan <br />
                <span className="italic font-light opacity-80">
                  Liburan Bareng Kami
                </span>
              </h2>

              <p className="text-[#4A5D44] text-base md:text-lg leading-relaxed mb-8 font-light max-w-lg mx-auto md:mx-0">
                Tonton cuplikan perjalanan seru mengelilingi desa wisata
                Borobudur dan pacu adrenalin Anda sekarang.
              </p>

              <div className="hidden md:flex gap-4">
                <div className="h-px w-24 bg-[#2F3E2E]/20 self-center"></div>
                <span className="text-xs font-serif italic text-[#2F3E2E]/60">
                  Explore Borobudur ID
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <VideoCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="py-12 sm:py-16 md:py-20 bg-[#E5E7E1] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 text-center"
        >
          <span className="text-[#4A5D44] font-bold tracking-[0.4em] text-[10px] uppercase block mb-2 sm:mb-3">
            Destinasi Favorit
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#2F3E2E]">
            Pilihan Paket Wisata Terbaik
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0">
          {featuresData.map((item, index) => (
            <FeatureItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      <RestoSection />

      <section className="relative py-24 sm:py-32 md:py-40 px-4 sm:px-6 bg-[#2F3E2E] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/nature-1.png"
            alt="Pemandangan Akhir Pekan di Borobudur"
            fill
            sizes="100vw"
            className="object-cover grayscale scale-105"
            loading="lazy"
            quality={75}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#1A231A] via-[#2F3E2E]/90 to-[#2F3E2E]/50"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto relative z-10 text-center"
        >
          <span className="text-[#A3B18A] font-bold tracking-[0.3em] uppercase text-xs mb-4 sm:mb-6 block">
            Jadwalkan Liburan Anda
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#E5E7E1] mb-6 sm:mb-8 font-serif leading-tight font-medium">
            RASAKAN PENGALAMAN <br />
            <span className="italic text-[#A3B18A] font-light">
              WISATA TAK TERLUPAKAN
            </span>
          </h2>
          <p className="text-[#A3B18A] text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 sm:mb-12 font-light leading-relaxed opacity-80 px-4 sm:px-0">
            Booking paket Sewa VW, Jeep, atau Rafting sekarang. Harga spesial
            untuk rombongan dan agen travel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="https://wa.me/6285801262682?text=Halo%20Admin,%20mau%20tanya%20paket%20wisata%20borobudur"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 sm:px-12 py-3.5 sm:py-4 bg-[#E5E7E1] text-[#2F3E2E] text-xs font-bold rounded-full tracking-[0.25em] uppercase hover:bg-white transition-all hover:scale-105 active:scale-100 shadow-2xl hover:shadow-[#E5E7E1]/20 min-h-11 flex items-center justify-center"
              aria-label="Hubungi Admin via WhatsApp"
            >
              Hubungi Kami Sekarang
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}