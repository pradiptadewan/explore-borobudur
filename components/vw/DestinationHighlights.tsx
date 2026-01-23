import Image from "next/image";
import { vwDestinations } from "@/lib/data";

export default function DestinationHighlights() {
  return (
    <section className="py-16 px-4 bg-[#F7F8F4]">
      <div className="container mx-auto">
        <h2 className="text-center text-sm tracking-[0.4em] font-semibold text-[#4A5D44] mb-12">
          DESTINATIONS HIGHLIGHTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {vwDestinations.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="relative w-40 h-40 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#2F3E2E]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#586356]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
