import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri Dokumentasi | Borobudur Adventure",
  description: "Dokumentasi keseruan petualangan VW Safari, Jeep, ATV, dan Rafting di Borobudur.",
};

const galleryData = {
  vw: {
    title: "Classic VW Safari",
    description: "Momen estetik menyusuri pedesaan dan persawahan Borobudur.",
    images: [
      "/images/vw-ga1.jpg",
      "/images/vw-ga2.jpg",
      "/images/vw-ga3.jpg",
      "/images/vw-ga4.jpg",
      "/images/vw-ga5.jpg",
      "/images/vw-ga6.jpg",
    ]
  },
  jeep: {
    title: "Jeep Sunrise Explore",
    description: "Adrenalin dan keindahan matahari terbit di perbukitan Menoreh.",
    images: [
      "/images/jeep-ga1.jpg",
      "/images/jeep-ga2.jpg",
      "/images/jeep-ga3.jpg", 
      "/images/jeep-ga4.jpg",
    ]
  },
  atv: {
    title: "ATV Jungle Adventure",
    description: "Penjelajahan rute menantang menembus sungai dan lumpur.",
    images: [
      "/images/atv-ga4.jpg",
      "/images/atv-ga3.jpg",
      "/images/atv-ga2.jpg",
    ]
  },
  rafting: {
    title: "Elo River Rafting",
    description: "Keseruan basah-basahan menaklukkan jeram Sungai Elo.",
    images: [
      "/images/rafting-ga1.jpg",
      "/images/rafting-ga2.jpg",
      "/images/rafting-ga3.jpg",
      "/images/rafting-ga4.jpg",
    ]
  }
};

export default function GalleryPage() {
  return (
    <main className="bg-[#E5E7E1] min-h-screen text-[#2F3E2E] font-sans selection:bg-[#A3B18A] selection:text-white">
      
      <section className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery.jpg"
            alt="Gallery Hero Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-linear-to-b from-[#2F3E2E]/50 via-transparent to-[#E5E7E1]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-16">
          <span className="text-[#E5E7E1] font-bold tracking-[0.3em] text-xs uppercase block mb-4 drop-shadow-md">
            Dokumentasi
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#E5E7E1] mb-6 drop-shadow-xl">
            Galeri Petualangan
          </h1>
          <p className="text-[#E5E7E1]/90 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Kumpulan momen tak terlupakan dari para petualang yang telah menjelajahi keindahan Borobudur bersama kami.
          </p>
        </div>
      </section>

      {/* GALLERY SECTIONS */}
      {Object.entries(galleryData).map(([key, section], index) => (
        <section 
          key={key} 
          className={`py-16 sm:py-24 px-4 sm:px-6 ${index % 2 === 0 ? "bg-[#DaddD6]" : "bg-[#E5E7E1]"}`}
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-10 sm:mb-14 gap-4">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-0.5 w-8 bg-[#4A5D44]"></div>
                  <span className="text-[#4A5D44] font-bold tracking-[0.2em] text-xs uppercase">
                    {key.toUpperCase()} Gallery
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#2F3E2E] mb-2">
                  {section.title}
                </h2>
                <p className="text-[#586356] text-sm font-light">
                  {section.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {section.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative group overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-500 ${
                    // Membuat layout grid lebih dinamis
                    idx === 0 ? "lg:col-span-2 lg:row-span-2 aspect-video lg:aspect-auto" : "aspect-square"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${section.title} ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FOOTER CTA */}
      <section className="py-20 px-6 text-center bg-[#2F3E2E] text-[#E5E7E1]">
        <h2 className="text-2xl sm:text-3xl font-serif mb-6">
          Ingin Masuk ke Galeri Kami?
        </h2>
        <p className="text-[#A3B18A] text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
          Abadikan momen seru Anda saat berpetualang dan tag kami di media sosial.
        </p>
      </section>
    </main>
  );
}