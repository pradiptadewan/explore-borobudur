import { Metadata } from "next";
import HomeView from "@/components/views/HomeView";

export const metadata: Metadata = {
  title: "Sewa VW Safari Borobudur & Paket Wisata Adventure Terlengkap",
  description:
    "Pusat reservasi Sewa VW Safari Borobudur, Jeep Lava Tour Merapi, Rafting Sungai Elo, dan ATV. Dapatkan penawaran harga terbaik untuk liburan keluarga dan gathering kantor.",
  alternates: {
    canonical: "https://exploreborobudur.id",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Explore Borobudur",
    "image": "https://exploreborobudur.id/images/vw-main.jpg",
    "description":
      "Pusat layanan sewa VW Safari Borobudur, Jeep Tour, Rafting Sungai Elo, dan ATV Adventure. Booking mudah dan harga resmi.",
    "url": "https://exploreborobudur.id",
    "telephone": "+6285801262682",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Badrawati, Borobudur",
      "addressLocality": "Magelang",
      "addressRegion": "Jawa Tengah",
      "postalCode": "56553",
      "addressCountry": "ID",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-7.6078738",
      "longitude": "110.2037513",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "00:00",
      "closes": "23:59",
    },
    "priceRange": "IDR 400.000 - IDR 1.500.000",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeView />
    </>
  );
}