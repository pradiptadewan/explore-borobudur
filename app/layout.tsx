import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://exploreborobudur.id"),

  title: {
    default: "Paket Wisata Borobudur & Sewa VW Safari Murah 2026 | Explore Borobudur",
    template: "%s | VW Wisata Explore Borobudur Tour & Travel",
  },
  description:
    "Pusat layanan sewa VW Safari Borobudur, Jeep Tour, Rafting Sungai Elo, dan ATV Adventure. Booking mudah, harga resmi, dan pelayanan ramah.",

  alternates: {
    canonical: "/",
    languages: {
      'id-ID': '/',
    },
  },

  keywords: [
    "Sewa VW Borobudur",
    "Paket Wisata Borobudur 2026",
    "VW Safari Magelang",
    "Jeep Wisata Merapi",
    "Rafting Sungai Elo Murah",
    "ATV Borobudur",
    "Trip Jogja Magelang",
    "Explore Borobudur",
    "paket wisata borobudur",
    "sewa vw safari borobudur",
    "vw safari magelang",
    "jeep lava tour merapi",
    "rafting sungai elo",
    "atv borobudur",
    "wisata borobudur murah",
    "tour borobudur 2026",
    "explore borobudur",
  ],

  authors: [{ name: "Explore Borobudur Team", url: "https://exploreborobudur.id" }],
  creator: "Explore Borobudur",
  publisher: "Explore Borobudur",

  openGraph: {
    title: "Paket Wisata Borobudur & Sewa VW Safari Terbaik",
    description:
      "Nikmati sensasi keliling desa wisata Borobudur dengan VW Safari klasik. Cek harga promo terbaru disini!",
    url: "https://exploreborobudur.id",
    siteName: "Explore Borobudur",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/vw-main.jpg",
        width: 1200,
        height: 630,
        alt: "Wisata VW Safari Borobudur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sewa VW Safari & Paket Wisata Borobudur",
    description: "Layanan wisata terlengkap di Magelang: VW, Jeep, ATV, dan Rafting.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 9. Verifikasi Search Console (Ganti kodenya nanti)
  verification: {
    google: "KODE_VERIFIKASI_GOOGLE_CONSOLE_ANDA",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NKPH0XRX4E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NKPH0XRX4E', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body
        className={`${inter.className} ${playfair.variable} bg-[#E5E7E1] text-[#2F3E2E] antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
