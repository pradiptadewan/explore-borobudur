import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Camera, Mountain, Zap, Droplets } from "lucide-react";
import { JSX } from "react";
import { packages, categories, TourPackage, siteConfig } from "@/lib/data";
import PackageCard from "@/components/PackageCard";
import DestinationHighlights from "@/components/vw/DestinationHighlights";
import EducationInsight from "@/components/vw/EducationInsight";

interface PageProps {
  params: Promise<{ category: string }>;
}

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
    image: "/images/vw-main.png",
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
    title: "Jeep Wisata Merapi & Borobudur",
    subtitle: "ADVENTURE OFFROAD",
    description: "Paket wisata Jeep Sunrise Punthuk Setumbu dan Lava Tour. Rasakan sensasi offroad membelah sungai dan hutan dengan armada Jeep 4x4 yang tangguh dan driver berpengalaman.",
    image: "/images/jeep-main.png",
    icon: <Mountain className="w-8 h-8 text-[#E8ECE9]" />,
    color: "bg-[#6B705C]",
    details: [
      "Sunrise Punthuk Setumbu",
      "Offroad Sungai Elo/Progo",
      "Wisata Alam & Edukasi",
    ],
    keywords: ["Jeep Wisata Borobudur", "Sewa Jeep Magelang", "Punthuk Setumbu Sunrise", "Offroad Borobudur"],
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
    title: "Rafting Sungai Elo Magelang",
    subtitle: "WISATA AIR SERU",
    description: "Paket Rafting Sungai Elo murah fasilitas lengkap. Arung jeram grade wisata aman untuk pemula. Nikmati kesegaran air sungai dan keindahan alam Magelang.",
    image: "/images/rafting-main.png",
    icon: <Droplets className="w-8 h-8 text-[#E8ECE9]" />,
    color: "bg-[#5F6F65]",
    details: [
      "Makan Siang Prasmanan",
      "Asuransi & P3K",
      "Transport Lokal & Kamar Bilas",
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

  return (
    <main className="bg-[#E5E7E1] min-h-screen text-[#2F3E2E] font-sans overflow-x-hidden">
      {/* FIX 1: Tinggi section diperbesar menjadi min-h-[75vh] agar teks memiliki ruang 
        untuk turun ke bawah, menjauhi area navbar yang fixed di atas.
      */}
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

        {/* FIX 2: Ditambahkan 'pt-32' (padding top) sebagai safety margin 
          agar konten tidak pernah menabrak navbar meskipun layar di-resize.
        */}
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

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#E5E7E1]">
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
              {params.category === 'atv' 
                ? " Tersedia ATV Single dan Tandem." 
                : " Harga sudah termasuk driver, BBM, dan armada."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {categoryPackages.map((pkg: TourPackage) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {params.category === "vw" && (
        <>
          <DestinationHighlights />
          <EducationInsight />
        </>
      )}

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#DaddD6]">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2F3E2E] mb-4 sm:mb-6">
            Butuh Bantuan Memilih Paket?
          </h2>
          <p className="text-[#586356] text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-xl mx-auto font-light">
            Konsultasikan rencana liburan Anda di Borobudur bersama kami. Gratis konsultasi itinerary dan rekomendasi hotel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20Admin,%20saya%20mau%20booking%20paket%20${detail.title}`}
              className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#2F3E2E] text-[#E5E7E1] text-xs font-bold rounded-full tracking-[0.2em] uppercase hover:bg-[#4A5D44] focus:bg-[#4A5D44] transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 min-h-11 flex items-center justify-center"
            >
              Chat WhatsApp
            </Link>
            <Link
              href="/"
              className="px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-[#2F3E2E] text-[#2F3E2E] text-xs font-bold rounded-full tracking-[0.2em] uppercase hover:bg-[#2F3E2E] hover:text-[#E5E7E1] transition-all min-h-11 flex items-center justify-center"
            >
              Menu Utama
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}