import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://exploreborobudur.id'),
  title: {
    default: "Paket Wisata Borobudur & Sewa VW Safari Murah 2025 | Explore Borobudur",
    template: "%s | Explore Borobudur Tour & Travel",
  },
  description: "Penyedia jasa sewa VW Safari Borobudur terbaik, paket Jeep Sunrise Punthuk Setumbu, Rafting Sungai Elo, dan ATV Adventure. Harga termurah, fasilitas lengkap, dan guide ramah.",
  keywords: [
    "Sewa VW Borobudur", 
    "Wisata Borobudur", 
    "Paket Wisata Magelang", 
    "Jeep Wisata Borobudur", 
    "Sunrise Punthuk Setumbu", 
    "Rafting Sungai Elo", 
    "Sewa VW Murah Jogja", 
    "Explore Borobudur"
  ],
  authors: [{ name: "Explore Borobudur Team" }],
  creator: "Explore Borobudur",
  publisher: "Explore Borobudur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Paket Wisata Borobudur & Sewa VW Safari Terbaik",
    description: "Nikmati sensasi keliling desa wisata Borobudur dengan VW Safari klasik. Booking sekarang untuk pengalaman liburan tak terlupakan.",
    url: 'https://exploreborobudur.id',
    siteName: 'Explore Borobudur',
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} ${playfair.variable} bg-[#E5E7E1] text-[#2F3E2E] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}