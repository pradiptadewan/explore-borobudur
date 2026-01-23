// lib/data.ts

export interface TourPackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  pax: number;
  desc: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const siteConfig = {
  name: "Borobudur Adventure",
  description: "Sewa VW, Jeep, ATV, dan Rafting terbaik di Borobudur.",
  whatsappNumber: "628123456789",
};

// DATA DENGAN LINK GAMBAR BARU (ACTIVE)
export const categories: Category[] = [
  { id: "vw", name: "VW Safari", image: "https://images.unsplash.com/photo-1580228833446-5606f227b61f?q=80&w=800&auto=format&fit=crop" },
  { id: "jeep", name: "Jeep Adventure", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop" },
  { id: "atv", name: "ATV Ride", image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=800&auto=format&fit=crop" },
  { id: "rafting", name: "Rafting Elo", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=800&auto=format&fit=crop" },
];

export const packages: Record<string, TourPackage[]> = {
  vw: [
    { id: "vw-1", name: "Short Time", price: 400000, duration: "2 Jam", pax: 4, desc: "Keliling desa wisata sekitar Borobudur, spot foto sawah.", category: "vw" },
    { id: "vw-2", name: "Medium Trip", price: 500000, duration: "3 Jam", pax: 4, desc: "Kunjungan ke home industri (madu/rengginang) + spot foto.", category: "vw" },
    { id: "vw-3", name: "Sunrise Trip", price: 650000, duration: "3 Jam", pax: 4, desc: "Menikmati sunrise Punthuk Setumbu + keliling desa.", category: "vw" },
    { id: "vw-4", name: "Long Trip", price: 700000, duration: "4 Jam", pax: 4, desc: "Paket lengkap eksplorasi desa wisata dan edukasi.", category: "vw" },
  ],
  jeep: [
     { id: "jeep-1", name: "Short Jeep", price: 450000, duration: "2 Jam", pax: 4, desc: "Menjelajah rute menantang di kaki bukit Menoreh.", category: "jeep" },
  ],
  atv: [
     { id: "atv-1", name: "ATV Fun", price: 300000, duration: "1 Jam", pax: 1, desc: "Seru-seruan main lumpur dengan ATV matic.", category: "atv" },
  ],
  rafting: [
     { id: "rafting-1", name: "Rafting Elo", price: 750000, duration: "2.5 Jam", pax: 6, desc: "Arung jeram sungai Elo grade 2-3, aman untuk pemula.", category: "rafting" },
  ],
};