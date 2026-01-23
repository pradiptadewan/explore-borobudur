import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Camera, Mountain, Zap, Droplets } from "lucide-react";
import { JSX } from "react";
import { packages, categories, TourPackage, Category, siteConfig } from "@/lib/data";
import PackageCard from "@/components/PackageCard";

// 1. UBAH INTERFACE MENJADI PROMISE
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
}> = {
  vw: {
    title: "Classic VW Safari",
    subtitle: "KENANGAN ABADI",
    description: "Nikmati semilir angin pagi pedesaan Borobudur. Perjalanan santai menyusuri lorong waktu dengan mobil klasik, melewati persawahan hijau yang menyejukkan mata dan menyapa keramahtamahan warga lokal.",
    image: "/images/vw-main.png",
    icon: <Camera className="w-8 h-8 text-[#E8ECE9]" />,
    color: "bg-[#4A5D44]",
    details: [
      "Spot Foto Balkondes & Sawah",
      "Edukasi Home Industri",
      "Driver Ramah & Berpengalaman",
    ],
  },
  jeep: {
    title: "Jeep Sunrise Explore",
    subtitle: "PESONA PAGI",
    description: "Saksikan matahari terbit dari spot terbaik di Menoreh. Rasakan sejuknya kabut pagi dan pacu adrenalin Anda menembus jalur sungai yang menyegarkan. Kombinasi sempurna antara ketenangan dan tantangan.",
    image: "/images/jeep-main.png",
    icon: <Mountain className="w-8 h-8 text-[#E8ECE9]" />,
    color: "bg-[#6B705C]",
    details: [
      "Sunrise Punthuk Setumbu",
      "Offroad Sungai & Hutan",
      "Coffee Break di Alam Terbuka",
    ],
  },
  atv: {
    title: "ATV Jungle Trek",
    subtitle: "JELAJAH ALAM",
    description: "Jelajahi sisi liar Borobudur. Kendalikan ATV Anda melewati hutan pinus yang rimbun dan jalur tanah yang seru. Aktivitas fisik yang menyenangkan di tengah udara segar pegunungan.",
    image: "/images/atv-main.png",
    icon: <Zap className="w-8 h-8 text-[#E8ECE9]" />,
    color: "bg-[#584B3F]",
    details: [
      "Pemandu Profesional",
      "Perlengkapan Keamanan",
      "Dokumentasi Video Aksi",
    ],
  },
  rafting: {
    title: "Elo River Rafting",
    subtitle: "KESEGARAN AIR",
    description: "Segarkan pikiran dengan jernihnya air Sungai Elo. Arung jeram grade pemula yang aman namun tetap seru. Tertawa lepas bersama sahabat sambil menikmati relief alam bebatuan sungai yang eksotis.",
    image: "/images/rafting-main.png",
    icon: <Droplets className="w-8 h-8 text-[#E8ECE9]" />,
    color: "bg-[#5F6F65]",
    details: [
      "Termasuk Makan Siang",
      "Asuransi & Tim Penyelamat",
      "Fasilitas Bilas Bersih",
    ],
  },
};

// 2. TAMBAHKAN AWAIT DI METADATA
export async function generateMetadata(props: PageProps) {
  const params = await props.params; // Await disini
  const cat = categories.find((c: Category) => c.id === params.category);
  const detail = cat ? categoryDetails[params.category] : null;
  return {
    title: detail ? `${detail.title} | ${siteConfig.name}` : "Paket Wisata",
    description: detail?.description || `Pilih paket ${cat?.name || ""} yang sesuai dengan kebutuhan liburan Anda.`,
  };
}

// 3. UBAH COMPONENT JADI ASYNC DAN AWAIT PARAMS
export default async function CategoryPage(props: PageProps) {
  const params = await props.params; // Await disini

  const categoryPackages = packages[params.category];
  const categoryInfo = categories.find((c: Category) => c.id === params.category);
  const detail = categoryDetails[params.category];

  if (!categoryPackages || !categoryInfo || !detail) return notFound();

  return (
    <main className="bg-[#E5E7E1] min-h-screen text-[#2F3E2E] font-sans overflow-x-hidden">
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={detail.image}
            alt={detail.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-linear-to-b from-[#2F3E2E]/50 via-[#2F3E2E]/30 to-[#4A5D44]/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-20 h-full flex flex-col justify-end pb-8 sm:pb-12 md:pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#E5E7E1] hover:text-white mb-6 sm:mb-8 transition-colors group w-fit"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base font-semibold tracking-wide">Kembali</span>
          </Link>

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
              <span className="text-[#4A5D44] font-bold tracking-[0.3em] text-xs uppercase">
                Fasilitas & Layanan
              </span>
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
                Pilih Paket Anda
              </h2>
            </div>
            <p className="text-[#586356] text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl font-light">
              Pilih paket yang sesuai dengan kebutuhan dan budget Anda. Semua paket sudah termasuk driver, BBM, dan dokumentasi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {categoryPackages.map((pkg: TourPackage) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#DaddD6]">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#2F3E2E] mb-4 sm:mb-6">
            Siap Memulai Petualangan?
          </h2>
          <p className="text-[#586356] text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-xl mx-auto font-light">
            Hubungi kami sekarang untuk reservasi atau konsultasi paket yang sesuai dengan kebutuhan Anda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#2F3E2E] text-[#E5E7E1] text-xs font-bold rounded-full tracking-[0.2em] uppercase hover:bg-[#4A5D44] focus:bg-[#4A5D44] focus:outline-none focus:ring-2 focus:ring-[#4A5D44] focus:ring-offset-2 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 min-h-11 flex items-center justify-center"
            >
              Hubungi via WhatsApp
            </Link>
            <Link
              href="/"
              className="px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-[#2F3E2E] text-[#2F3E2E] text-xs font-bold rounded-full tracking-[0.2em] uppercase hover:bg-[#2F3E2E] hover:text-[#E5E7E1] focus:bg-[#2F3E2E] focus:text-[#E5E7E1] focus:outline-none focus:ring-2 focus:ring-[#2F3E2E] focus:ring-offset-2 transition-all min-h-11 flex items-center justify-center"
            >
              Lihat Paket Lainnya
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}