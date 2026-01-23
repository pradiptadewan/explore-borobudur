"use client";
import { useState } from "react";
import { X, Loader2, Calendar, User, Hash } from "lucide-react";
import { siteConfig, TourPackage } from "@/lib/data";

interface BookingModalProps {
  pkg: TourPackage;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ pkg, isOpen, onClose }: BookingModalProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    pax: pkg.pax,
    qty: 1,
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const total = pkg.price * formData.qty;
      const message = `Halo, saya ingin memesan paket wisata:\n\n` +
        `📦 *Paket:* ${pkg.name} (${pkg.category.toUpperCase()})\n` +
        `👤 *Nama:* ${formData.name}\n` +
        `📅 *Tanggal:* ${formData.date}\n` +
        `👥 *Jumlah Orang:* ${formData.pax}\n` +
        `🚙 *Jumlah Unit:* ${formData.qty}\n` +
        `💰 *Estimasi Total:* Rp ${total.toLocaleString('id-ID')}\n\n` +
        `Mohon info ketersediaannya. Terima kasih.`;

      const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
      
      setLoading(false);
      window.open(waUrl, "_blank");
      onClose();
    }, 1500);
  };

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

            {/* Input Date */}
            <div className="relative">
              <label className="text-xs font-bold uppercase tracking-wider text-[#586356] mb-1 block">Travel Date</label>
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
                    onChange={(e) => setFormData({...formData, pax: Number(e.target.value)})} 
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#586356] mb-1 block">Unit Qty</label>
                <div className="flex items-center border-b border-[#A3B18A] py-2">
                   <Hash size={16} className="text-[#4A5D44] mr-3" />
                   <input 
                    type="number" 
                    min="1" 
                    value={formData.qty} 
                    className="w-full bg-transparent text-[#2F3E2E] focus:outline-none text-sm"
                    onChange={(e) => setFormData({...formData, qty: Number(e.target.value)})} 
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