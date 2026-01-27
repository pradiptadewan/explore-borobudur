"use client";
import { useState } from "react";
import { X, Loader2, Calendar, User, Hash, Clock } from "lucide-react"; // Ditambah icon Clock
import { siteConfig, TourPackage } from "@/lib/data";

interface BookingModalProps {
  pkg: TourPackage;
  isOpen: boolean;
  onClose: () => void;
}

// Opsi jam yang tersedia
const availableTimes = [
  "04:30 (Sunrise)",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00"
];

export default function BookingModal({ pkg, isOpen, onClose }: BookingModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: availableTimes[1], // Default jam 08:00
    pax: pkg.pax,
    qty: 1,
  });

  if (!isOpen) return null;

  // LOGIC: Mengatur jumlah orang dan otomatis update minimal unit
  const handlePaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPax = parseInt(e.target.value) || 0;
    
    // Hitung minimal unit yang dibutuhkan (1 unit max 4 orang)
    // Contoh: 5 orang / 4 = 1.25 -> dibulatkan ke atas jadi 2 unit
    const minUnitsRequired = Math.ceil(newPax / 4);

    setFormData((prev) => ({
      ...prev,
      pax: newPax,
      // Jika unit saat ini kurang dari yang dibutuhkan, update unitnya
      // Jika unit saat ini sudah lebih (misal user mau 2 unit untuk 2 orang), biarkan saja
      qty: prev.qty < minUnitsRequired ? minUnitsRequired : prev.qty
    }));
  };

  // LOGIC: Mengatur jumlah unit, mencegah user input di bawah kebutuhan
  const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQty = parseInt(e.target.value) || 1;
    const minUnitsRequired = Math.ceil(formData.pax / 4);

    // Validasi: Tidak boleh kurang dari kebutuhan kapasitas
    if (newQty < minUnitsRequired) {
      // Opsional: Bisa kasih alert atau biarkan value tetap di minUnitsRequired
      return; 
    }

    setFormData({ ...formData, qty: newQty });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

      const total = pkg.price * formData.qty;
      const message = `Halo, saya ingin memesan paket wisata:\n\n` +
        `📦 *Paket:* ${pkg.name} (${pkg.category.toUpperCase()})\n` +
        `👤 *Nama:* ${formData.name}\n` +
        `📅 *Tanggal:* ${formData.date}\n` +
        `⏰ *Jam:* ${formData.time}\n` + // Ditambahkan ke pesan WA
        `👥 *Jumlah Orang:* ${formData.pax}\n` +
        `🚙 *Jumlah Unit:* ${formData.qty}\n` +
        `💰 *Estimasi Total:* Rp ${total.toLocaleString('id-ID')}\n\n` +
        `Mohon info ketersediaannya. Terima kasih.`;

      const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      setLoading(false);
      window.open(waUrl, "_blank");
      onClose();
  };

  // Hitung min unit untuk atribut input 'min'
  const minQtyAllowed = Math.ceil(formData.pax / 4);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2F3E2E]/60 backdrop-blur-sm transition-opacity">
      {/* Modal Container */}
      <div className="bg-[#E5E7E1] w-full max-w-md rounded-sm shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
        
        {/* Header Image/Pattern */}
        <div className="h-2 bg-[#2F3E2E] w-full"></div>
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-[#586356] hover:text-[#2F3E2E] transition-colors bg-white/50 p-1 rounded-full"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <div className="mb-8 text-center">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4A5D44] block mb-2">
              Reservation
            </span>
            <h2 className="text-2xl font-serif text-[#2F3E2E]">{pkg.name}</h2>
            <div className="h-px w-12 bg-[#2F3E2E] mx-auto mt-4 opacity-20"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Name */}
            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-wider text-[#586356] mb-1 block">Full Name</label>
              <div className="flex items-center border-b border-[#A3B18A] py-2">
                <User size={16} className="text-[#4A5D44] mr-3" />
                <input 
                  required 
                  type="text" 
                  className="w-full bg-transparent text-[#2F3E2E] focus:outline-none placeholder-[#A3B18A]/70 text-sm"
                  placeholder="Your Name"
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Input Date */}
                <div className="relative">
                <label className="text-xs font-bold uppercase tracking-wider text-[#586356] mb-1 block">Date</label>
                <div className="flex items-center border-b border-[#A3B18A] py-2">
                    <Calendar size={16} className="text-[#4A5D44] mr-3" />
                    <input 
                    required 
                    type="date" 
                    className="w-full bg-transparent text-[#2F3E2E] focus:outline-none text-sm"
                    onChange={(e) => setFormData({...formData, date: e.target.value})} 
                    />
                </div>
                </div>

                {/* Input Time (New Feature) */}
                <div className="relative">
                <label className="text-xs font-bold uppercase tracking-wider text-[#586356] mb-1 block">Time</label>
                <div className="flex items-center border-b border-[#A3B18A] py-2">
                    <Clock size={16} className="text-[#4A5D44] mr-3" />
                    <select 
                        required
                        className="w-full bg-transparent text-[#2F3E2E] focus:outline-none text-sm appearance-none cursor-pointer"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                    >
                        {availableTimes.map((time) => (
                            <option key={time} value={time} className="bg-[#E5E7E1] text-[#2F3E2E]">
                                {time}
                            </option>
                        ))}
                    </select>
                </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#586356] mb-1 block">Guests</label>
                <div className="flex items-center border-b border-[#A3B18A] py-2">
                   <User size={16} className="text-[#4A5D44] mr-3" />
                   <input 
                    type="number" 
                    min="1" 
                    value={formData.pax} 
                    className="w-full bg-transparent text-[#2F3E2E] focus:outline-none text-sm"
                    onChange={handlePaxChange}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#586356] mb-1 block">
                    Units <span className="text-[10px] lowercase font-normal opacity-70">(max 4 pax/unit)</span>
                </label>
                <div className="flex items-center border-b border-[#A3B18A] py-2">
                   <Hash size={16} className="text-[#4A5D44] mr-3" />
                   <input 
                    type="number" 
                    min={minQtyAllowed} // Mencegah klik panah bawah melewati batas
                    value={formData.qty} 
                    className="w-full bg-transparent text-[#2F3E2E] focus:outline-none text-sm"
                    onChange={handleQtyChange} // Menggunakan handler baru
                  />
                </div>
              </div>
            </div>

            <button 
              disabled={loading} 
              type="submit" 
              className="w-full bg-[#2F3E2E] hover:bg-[#4A5D44] text-white text-xs font-bold tracking-[0.2em] uppercase py-4 rounded-sm mt-6 flex justify-center items-center transition-all shadow-lg hover:shadow-xl"
            >
              {loading ? <Loader2 className="animate-spin mr-2" size={18} /> : "Confirm via WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}