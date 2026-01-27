import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Camera, Mountain, Zap, Droplets, AlertTriangle, MessageCircle } from "lucide-react";
import { JSX } from "react";
import { packages, categories, TourPackage, siteConfig } from "@/lib/data";
import PackageCard from "@/components/PackageCard";
import DestinationHighlights from "@/components/vw/DestinationHighlights";
import EducationInsight from "@/components/vw/EducationInsight";

interface PageProps {
  params: Promise<{ category: string }>;
}

const UNAVAILABLE_CATEGORIES: string[] = [];

const atvPromoImages = [
  {
    id: "atv-fast-track",
    image: "/images/atv-fas.jpg",
    alt: "Fast Track Adventure Package",
    name: "Fast Track Package"
  },
  {
    id: "atv-adventure",
    image: "/images/atv-adv.jpg",
    alt: "ATV Adventure Package",
    name: "ATV Adventure Package"
  },
  {
    id: "atv-family",
    image: "/images/atv-fam.jpg",
    alt: "Family Package ATV",
    name: "Family Package"
  },
  {
    id: "atv-sunrise",
    image: "/images/atv-sun.jpg",
    alt: "Sunrise ATV Package",
    name: "Sunrise Package"
  }
];

const categoryDetails: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: JSX.Element;
  color: string;
  details: string[];
  keywords: string[];
}> = {
  vw: {
    title: "Sewa VW Safari Borobudur",
    subtitle: "CLASSIC TRIP MAGELANG",
    description: "Layanan sewa VW Safari Borobudur terbaik untuk keliling desa wisata. Rute melewati persawahan, candi, dan pegunungan Menoreh. Cocok untuk foto prewedding, keluarga, dan gathering kantor.",
    image: "/images/vw-main2.jpg",
    icon: <Camera className="w-8 h-8 text-[#E8ECE9]" />,
    color: "bg-[#4A5D44]",
    details: [
      "Spot Foto Instagramable",
      "Kunjungan UMKM & Kerajinan",
      "Wisata Alam & Persawahan",
      "Armada VW Klasik Terawat",
    ],
    keywords: ["Sewa VW Borobudur", "VW Safari Magelang", "Tiket VW Borobudur", "Paket Wisata VW Jogja"],
  },
  jeep: {
    title: "Parang Menoreh Jeep Adventure",
    subtitle: "4X4 OFFROAD EXPERIENCE",
    description: "Jelajahi keindahan alam Borobudur dengan Jeep 4x4. Pilihan rute lengkap mulai dari Short Trip edukasi, Susur Sungai yang seru, hingga Trek Fun Offroad dan Sunrise.",
    image: "/images/jeep-main.png",
    icon: <Mountain className="w-8 h-8 text-[#E8ECE9]" />,
    color: "bg-[#6B705C]",
    details: [
      "Armada Jeep 4x4 Prima",
      "Wisata Susur Sungai",
      "Fun Offroad Track",
      "Sunrise Punthuk Setumbu"
    ],
    keywords: ["Jeep Wisata Borobudur", "Sewa Jeep Magelang", "Parang Menoreh Jeep", "Offroad Borobudur"],
  },
  atv: {
    title: "ATV Adventure Menoreh",
    subtitle: "EXTREME SPORT",
    description: "Sewa ATV di Borobudur dengan track menantang. Jelajahi hutan pinus, sungai, dan lumpur di kaki bukit Menoreh. Aktivitas outdoor seru untuk memacu adrenalin.",
    image: "/images/atv-main.png",
    icon: <Zap className="w-8 h-8 text-[#E8ECE9]" />,
    color: "bg-[#584B3F]",
    details: [
      "Safety Gear (Helm & Boots)",
      "Pemandu ATV Professional",
      "Dokumentasi Keseruan",
    ],
    keywords: ["Sewa ATV Borobudur", "ATV Magelang", "Wisata Adventure Jogja", "Outbound Borobudur"],
  },
  rafting: {
    title: "Paket Rafting Sungai Elo",
    subtitle: "WISATA AIR SERU",
    description: "Arung jeram Sungai Elo grade 2-3 yang aman bagi pemula. NB: 1 Kapal isi 4 Peserta. Dokumentasi +150rb (Max 5 Paket).",
    image: "/images/rafting-main.png",
    icon: <Droplets className="w-8 h-8 text-[#E8ECE9]" />,
    color: "bg-[#5F6F65]",
    details: [
      "Pemandu Profesional",
      "Shuttle Transport",
      "Asuransi Cover",
      "Kelapa Muda & Snack",
    ],
    keywords: ["Rafting Sungai Elo", "Arung Jeram Magelang", "Paket Rafting Murah", "Wisata Air Borobudur"],
  },
};

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  
  const validCategory = categories.find(c => c.id === params.category);
  const detail = categoryDetails[params.category];
  
  if (!validCategory || !detail) return { title: "Paket Wisata Tidak Ditemukan" };

  return {
    title: `${detail.title} Murah & Fasilitas Lengkap 2025 | Explore Borobudur`,
    description: detail.description,
    keywords: detail.keywords,
    openGraph: {
      title: detail.title,
      description: detail.description,
      images: [detail.image],
    },
    alternates: {
        canonical: `https://exploreborobudur.id/${params.category}`,
    },
  };
}

export default async function CategoryPage(props: PageProps) {
  const params = await props.params;

  const validCategory = categories.find(c => c.id === params.category);
  const categoryPackages = packages[params.category];
  const detail = categoryDetails[params.category];

  if (!validCategory || !categoryPackages || !detail) return notFound();

  const isUnavailable = UNAVAILABLE_CATEGORIES.includes(params.category);
  const isAtv = params.category === "atv";

  return (
    <main className={`min-h-screen font-sans overflow-x-hidden flex flex-col ${isAtv ? "bg-[#1a1a1a] text-[#E5E7E1]" : "bg-[#E5E7E1] text-[#2F3E2E]"}`}>
      
      {isUnavailable && (
        <div className="relative z-50 w-full bg-[#7f1d1d] text-[#E5E7E1] pt-32 pb-10 px-6 shadow-2xl border-b-8 border-[#2F3E2E]">
          <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-4">
            <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-2 animate-pulse" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-widest uppercase leading-tight">
              PAKET BELUM TERSEDIA / SOLD OUT
            </h3>
            <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-2xl leading-relaxed font-light">
              Mohon maaf, layanan untuk kategori <strong className="font-bold text-white border-b border-white/30 pb-0.5">{detail.title}</strong> sedang tidak tersedia saat ini. 
              Silakan hubungi kami untuk informasi jadwal ketersediaan selanjutnya.
            </p>
            <div className="pt-4">
              <Link
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Admin,%20apakah%20paket%20${detail.title}%20sudah%20tersedia?`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E5E7E1] text-[#7f1d1d] text-xs sm:text-sm font-bold rounded-full uppercase tracking-[0.15em] hover:bg-white hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
              >
                <MessageCircle className="w-5 h-5" />
                Tanya Ketersediaan
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className={`flex-1 w-full relative ${isUnavailable ? "grayscale opacity-50 pointer-events-none select-none" : ""}`}>
        
        <section className="relative min-h-[75vh] sm:min-h-[85vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={detail.image}
              alt={`Wisata ${detail.title}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-linear-to-b from-[#2F3E2E]/50 via-[#2F3E2E]/30 to-[#4A5D44]/60"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-20 h-full flex flex-col justify-end pt-32 pb-8 sm:pb-12 md:pb-16">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className={`p-3 sm:p-4 rounded-full ${detail.color} shadow-lg text-white ring-2 sm:ring-4 ring-[#E5E7E1]/50`}>
                {detail.icon}
              </div>
              <span className="text-[#E5E7E1] font-bold text-xs sm:text-sm tracking-[0.3em] uppercase">
                {detail.subtitle}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#E5E7E1] mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
              {detail.title}
            </h1>

            <p className="text-[#E5E7E1]/90 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light drop-shadow-md">
              {detail.description}
            </p>
          </div>
        </section>

        {isAtv ? (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
            <div className="container mx-auto">
              <div className="flex items-center gap-3 mb-8 sm:mb-12 justify-center">
                <div className="h-0.75 w-12 bg-linear-to-r from-[#E5E7E1] to-[#E5E7E1]/50 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#E5E7E1] tracking-tight uppercase">
                  Pilihan Paket ATV
                </h2>
                <div className="h-0.75 w-12 bg-linear-to-r from-[#E5E7E1]/50 to-[#E5E7E1] rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                {atvPromoImages.map((item) => (
                  <div key={item.id} className="flex flex-col group">
                    <div className="relative aspect-9/16 sm:aspect-4/5 w-full overflow-hidden rounded-xl shadow-2xl border-2 border-[#E5E7E1]/20">
                      <Image 
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={true}
                      />
                    </div>
                    <Link
                      href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Admin,%20saya%20ingin%20booking%20paket%20${encodeURIComponent(item.name)}%20(ID:%20${item.id})`}
                      className="mt-6 w-full bg-[#E5E7E1] hover:bg-white text-[#1a1a1a] py-4 rounded-lg font-bold text-center text-lg uppercase tracking-widest shadow-lg hover:shadow-xl hover:shadow-white/10 transition-all flex items-center justify-center gap-3 transform active:scale-95"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Book Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
            <div className="container mx-auto">
              <div className="mb-12 sm:mb-16">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-0.75 w-12 bg-linear-to-r from-[#4A5D44] to-[#A3B18A] rounded-full"></div>
                  <h2 className="text-[#4A5D44] font-bold tracking-[0.3em] text-xs uppercase">
                    Fasilitas & Keunggulan
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {detail.details.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 sm:p-6 bg-[#DaddD6] rounded-sm hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#4A5D44] shrink-0 group-hover:scale-150 transition-transform"></div>
                      <span className="text-sm sm:text-base font-semibold text-[#2F3E2E] tracking-wide">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 sm:mb-12">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="h-0.75 w-12 bg-linear-to-r from-[#4A5D44] to-[#A3B18A] rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2F3E2E] tracking-tight">
                    Daftar Harga Paket {detail.title}
                  </h2>
                </div>
                <p className="text-[#586356] text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl font-light">
                  Berikut adalah pilihan paket wisata {detail.title} yang tersedia. Hubungi kami untuk penawaran harga rombongan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {categoryPackages.map((pkg: TourPackage) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          </section>
        )}

        {params.category === "vw" && (
          <>
            <DestinationHighlights />
            <EducationInsight />
          </>
        )}

        <section className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 ${isAtv ? "bg-[#252525]" : "bg-[#DaddD6]"}`}>
          <div className="container mx-auto text-center">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6 ${isAtv ? "text-[#E5E7E1]" : "text-[#2F3E2E]"}`}>
              Butuh Bantuan Memilih Paket?
            </h2>
            <p className={`text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-xl mx-auto font-light ${isAtv ? "text-[#E5E7E1]/80" : "text-[#586356]"}`}>
              Konsultasikan rencana liburan Anda di Borobudur bersama kami. Gratis konsultasi itinerary dan rekomendasi hotel.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Admin,%20saya%20mau%20booking%20paket%20${detail.title}`}
                className={`px-8 sm:px-10 py-3.5 sm:py-4 text-[#E5E7E1] text-xs font-bold rounded-full tracking-[0.2em] uppercase hover:bg-[#4A5D44] focus:bg-[#4A5D44] transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 min-h-11 flex items-center justify-center ${isAtv ? "bg-[#4A5D44]" : "bg-[#2F3E2E]"}`}
              >
                Chat WhatsApp
              </Link>
              <Link
                href="/"
                className={`px-8 sm:px-10 py-3.5 sm:py-4 border-2 text-xs font-bold rounded-full tracking-[0.2em] uppercase transition-all min-h-11 flex items-center justify-center ${isAtv ? "border-[#E5E7E1] text-[#E5E7E1] hover:bg-[#E5E7E1] hover:text-[#1a1a1a]" : "border-[#2F3E2E] text-[#2F3E2E] hover:bg-[#2F3E2E] hover:text-[#E5E7E1]"}`}
              >
                Menu Utama
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}