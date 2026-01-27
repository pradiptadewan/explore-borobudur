export interface TourPackage {
  id: string;
  name: string;
  price: number;
  priceDouble?: number;
  duration: string;
  pax: number;
  desc: string;
  category: string;
  features?: string[];
  images: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export const siteConfig = {
  name: "Borobudur Adventure",
  description: "Sewa VW, Jeep, ATV, dan Rafting terbaik di Borobudur.",
  whatsappNumber: "6285801262682",
};

export const categories: Category[] = [
  { id: "vw", name: "VW Safari", image: "/images/vw-main.jpg" },
  { id: "jeep", name: "Jeep Adventure", image: "/images/jeep-main.png" },
  { id: "atv", name: "ATV Ride", image: "/images/atv-main.png" },
  { id: "rafting", name: "Rafting Elo", image: "/images/rafting-main.png" },
];

export const packages: Record<string, TourPackage[]> = {
  vw: [
    { 
      id: "vw-1", 
      name: "Short Time", 
      price: 400000, 
      duration: "2 Jam", 
      pax: 4, 
      desc: "Paket hemat berkeliling desa wisata Borobudur dengan VW Classic.", 
      category: "vw",
      images: ["/images/vw-main4.jpg", "/images/vw-main2.jpg", "/images/vw-main3.jpg"],
      features: ["1 Unit VW Safari", "2 Kunjungan Edukasi", "1 Kunjungan Destinasi", "Spot Foto Menarik"]
    },
    { 
      id: "vw-2", 
      name: "Medium Trip", 
      price: 500000, 
      duration: "3 Jam", 
      pax: 4, 
      desc: "Puas berkeliling desa dan mengunjungi berbagai sentra kerajinan lokal.", 
      category: "vw",
      images: ["/images/vw-main5.jpg", "/images/vw-main4.jpg", "/images/vw-main2.jpg"],
      features: ["1 Unit VW Safari", "3 Kunjungan Edukasi", "1 Kunjungan Destinasi", "Spot Foto Menarik"]
    },
    { 
      id: "vw-3", 
      name: "Sunrise Trip", 
      price: 650000, 
      duration: "3 Jam", 
      pax: 4, 
      desc: "Mengejar matahari terbit dengan latar belakang Pemandangan Alam.", 
      category: "vw",
      images: ["/images/vw-main2.jpg", "/images/vw-main3.jpg", "/images/vw-main4.jpg"],
      features: ["1 Unit VW Safari", "1 Spot Sunrise (Punthuk)", "2 Kunjungan Destinasi", "Spot Foto Menarik"]
    },
    { 
      id: "vw-4", 
      name: "Long Trip", 
      price: 700000, 
      duration: "4 Jam", 
      pax: 4, 
      desc: "Eksplorasi total Borobudur dari edukasi hingga destinasi alam.", 
      category: "vw",
      images: ["/images/vw-main4.jpg", "/images/vw-main3.jpg", "/images/vw-main2.jpg"],
      features: ["1 Unit VW Safari", "Kunjungan Edukasi Lengkap", "Kunjungan Destinasi Alam", "Spot Foto Menarik"]
    },
  ],
  jeep: [
     { 
       id: "jeep-short", 
       name: "Short Trip", 
       price: 400000, 
       duration: "1.5 Jam", 
       pax: 3, 
       desc: "Route visit madu & budidaya jamur serta berfoto dengan latar belakang sawah dan pegunungan.", 
       category: "jeep",
       images: ["/images/jeep1.png", "/images/jeep2.jpg", "/images/jeep3.jpg"],
       features: ["Visit Madu & Jamur", "View Sawah & Pegunungan", "Max 3 Pax/Jeep", "Driver Profesional"]
     },
     { 
       id: "jeep-medium", 
       name: "Medium Trip", 
       price: 500000, 
       duration: "3 Jam", 
       pax: 3, 
       desc: "Route sama dengan short trip di tambah wisata susur sungai yang memacu adrenalin.", 
       category: "jeep",
       images: ["/images/jeep2.jpg", "/images/jeep3.jpg", "/images/jeep1.png"],
       features: ["All Short Trip Features", "Wisata Susur Sungai", "Max 3 Pax/Jeep", "Driver Profesional"]
     },
     { 
       id: "jeep-long", 
       name: "Long Trip", 
       price: 750000, 
       duration: "5 Jam", 
       pax: 3, 
       desc: "Paket lengkap! Route susur sungai di tambah trek fun offroad yang lebih menantang.", 
       category: "jeep",
       images: ["/images/jeep3.jpg", "/images/jeep1.png", "/images/jeep2.jpg"],
       features: ["Route Susur Sungai", "Trek Fun Offroad", "Max 3 Pax/Jeep", "Durasi Lebih Lama"]
     },
     { 
       id: "jeep-sunrise", 
       name: "Sunrise Trip", 
       price: 650000, 
       duration: "5 Jam", 
       pax: 3, 
       desc: "Menikmati pagi hari dengan rute Punthuk Setumbu, Village Tour, dan Susur Sungai.", 
       category: "jeep",
       images: ["/images/jeep1.png", "/images/jeep3.jpg", "/images/jeep2.jpg"],
       features: ["Sunrise Punthuk Setumbu", "Village Tour", "Susur Sungai", "Max 3 Pax/Jeep"]
     },
  ],
  atv: [
    { 
      id: "atv-fast", 
      name: "Fast Track Package", 
      price: 350000, 
      priceDouble: 400000, 
      duration: "1 Jam Trip", 
      pax: 1, 
      desc: "Explore unpredictable tracks of the Sileng River. Conquer the great obstacles and challenges!", 
      category: "atv",
      images: ["/images/atv1.png","/images/atv2.png","/images/atv3.png"],
      features: [
        "Tour de Borobudur: Village & Paddy Field",
        "Menoreh View",
        "Explore Sileng River",
        "Inclusions: Guide, Photo/Video, First Aid"
      ]
    },
    { 
      id: "atv-family", 
      name: "Family Package", 
      price: 300000, 
      priceDouble: 350000,
      duration: "2 Jam Trip", 
      pax: 1, 
      desc: "Bring your family to explore the Borobudur area, enjoy greenery nature of Menoreh Hills.", 
      category: "atv",
      images: ["/images/atv2.png", "/images/atv3.png", "/images/atv1.png"],
      features: [
        "Tour de Borobudur: Village & Paddy Field",
        "Stop by 2 Home Industries",
        "Menoreh View",
        "Inclusions: Guide, Photo/Video, First Aid"
      ]
    },
    { 
      id: "atv-adventure", 
      name: "Adventure Package", 
      price: 400000, 
      priceDouble: 500000,
      duration: "3 Jam Trip", 
      pax: 1, 
      desc: "Get your adrenaline pumping while riding your ATV. Enjoy the thrill of an awe-inspiring exploration!", 
      category: "atv",
      images: ["/images/atv3.png", "/images/atv2.png", "/images/atv1.png"],
      features: [
        "Tour de Borobudur: Village & Paddy Field",
        "Stop by 2 Home Industries",
        "Explore Sileng River",
        "Inclusions: Guide, Photo/Video, First Aid"
      ]
    },
  ],
  rafting: [
     { 
       id: "rafting-a", 
       name: "Paket A (Complete)", 
       price: 650000, 
       duration: "2.5 Jam", 
       pax: 4, 
       desc: "Paket rafting terlengkap dengan fasilitas makan besar setelah pengarungan.", 
       category: "rafting",
       images: ["/images/rafting1.png", "/images/rafting2.jpg", "/images/rafting3.jpg"],
       features: ["Pemandu & Shuttle", "Kelapa Muda & Snack", "Makan Besar", "Asuransi"]
     },
     { 
       id: "rafting-b", 
       name: "Paket B (Medium)", 
       price: 575000, 
       duration: "2.5 Jam", 
       pax: 4, 
       desc: "Pilihan favorit! Fasilitas lengkap termasuk snack kelapa muda yang menyegarkan.", 
       category: "rafting",
       images: ["/images/rafting2.jpg", "/images/rafting3.jpg", "/images/rafting1.png"],
       features: ["Pemandu & Shuttle", "Kelapa Muda & Snack", "Asuransi", "Max 4 Pax/Boat"]
     },
     { 
       id: "rafting-c", 
       name: "Paket C (Basic)", 
       price: 475000, 
       duration: "2.5 Jam", 
       pax: 4, 
       desc: "Paket hemat untuk menikmati keseruan arung jeram Sungai Elo.", 
       category: "rafting",
       images: ["/images/rafting3.jpg", "/images/rafting1.png", "/images/rafting2.jpg"],
       features: ["Pemandu & Shuttle", "Asuransi", "Harga Hemat", "Max 4 Pax/Boat"]
     },
  ],
};

export const vwDestinations = [
  {
    title: "Candi Borobudur",
    subtitle: "Candi Buddha Terbesar",
    image: "/images/dest-edu/d1.jpg",
  },
  {
    title: "Svarga Bumi",
    subtitle: "Keindahan Persawahan",
    image: "/images/dest-edu/svarga.jpg",
  },
  {
    title: "Bukit Rhema",
    subtitle: "Gereja Ayam",
    image: "/images/dest-edu/rhema.jpg",
  },
  {
    title: "Lap. Tuksongo",
    subtitle: "Lapangan Dengan View Menoreh",
    image: "/images/dest-edu/lapT.jpg",
  },
  {
    title: "Mandala",
    subtitle: "Keindahan Sawah",
    image: "/images/dest-edu/mandala.jpg",
  },
  {
    title: "Watu Putih",
    subtitle: "Spot Foto Batu Putih",
    image: "/images/dest-edu/watup.jpg",
  },
  {
    title: "Taman Kelinci",
    subtitle: "Bermain dan memberi makan kelinci",
    image: "/images/dest-edu/tamank.jpg",
  },
  {
    title: "Junkyard",
    subtitle: "Spot Foto Ikonik",
    image: "/images/dest-edu/junky.jpg",
  },
];


export const vwEducations = [
  {
    title: "Budidaya Lebah Madu",
    subtitle: "Teknik ternak penghasil madu",
    image: "/images/dest-edu/madu.jpg",
  },
  {
    title: "Budidaya Jamur",
    subtitle: "Teknik pembuatan jamur",
    image: "/images/dest-edu/jamur.jpg",
  },
  {
    title: "Perah Susu Kambing Etawa",
    subtitle: "Proses pemerahan susu",
    image: "/images/dest-edu/susuperah.jpg",
  },
   {
    title: "Edukasi Gula Jawa",
    subtitle: "Pembuatan gula tradisional",
    image: "/images/dest-edu/gulajawa.jpg",
  },
  {
    title: "Edukasi Pati Aren",
    subtitle: "Teknik pengolahan pati alami",
    image: "/images/dest-edu/pati.jpg",
  },
  {
    title: "Edukasi Rengginang",
    subtitle: "Proses pembuatan camilan tradisional",
    image: "/images/dest-edu/rengginang.jpg",
  },
   {
    title: "Edukasi Tahu",
    subtitle: "Proses pembuatan tahu tradisional",
    image: "/images/dest-edu/tahu.jpg",
  },
  {
    title: "Edukasi Gerabah",
    subtitle: "Kerajinan tanah liat",
    image: "/images/dest-edu/gerabah.jpg",
  },
  {
    title: "Membatik",
    subtitle: "Seni membatik tradisional",
    image: "/images/dest-edu/batik.jpg",
  },
];