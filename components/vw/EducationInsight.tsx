import Image from "next/image";
import { vwEducations } from "@/lib/data";

export default function EducationInsight() {
  return (
    <section className="py-20 px-4 bg-[#EDEFE8]">
      <div className="container mx-auto">
        <h2 className="text-center text-sm tracking-[0.4em] font-semibold text-[#4A5D44] mb-14">
          EDUCATION & INSIGHT
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vwEducations.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8F4] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-44">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-[#2F3E2E] mb-1">
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
