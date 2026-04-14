"use client";

import { servicesMenu, businessInfo } from "@/lib/data";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ReservationFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter(); // To clear the URL
  const [selectedService, setSelectedService] = useState("");
  const [reservationDate, setReservationDate] = useState<Date | null>(null);
  const [reservationTime, setReservationTime] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      for (const cat of servicesMenu) {
        for (const item of cat.items) {
          const fullValue = `${item.name}${item.duration ? ` (${item.duration})` : ""} — ${item.price}`;
          if (item.name === serviceParam || fullValue === serviceParam) {
            setSelectedService(fullValue);
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
            return;
          }
        }
      }
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!reservationDate || !reservationTime) {
      alert("Veuillez sélectionner une date et une heure.");
      return;
    }
    const f = e.target as HTMLFormElement;
    const name = (f.querySelector('#rdv-name') as HTMLInputElement).value;
    const phone = (f.querySelector('#rdv-phone') as HTMLInputElement).value;
    const msg = (f.querySelector('#rdv-msg') as HTMLTextAreaElement).value;

    // Phone validation (+212 or 0 followed by 9 digits)
    const phoneRegex = /^(?:\+212|0)([5-7])\d{8}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      alert("Veuillez entrer un numéro de téléphone valide (ex: 0612345678).");
      return;
    }

    const formattedDate = reservationDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    const text = encodeURIComponent(
      `Bonjour ${businessInfo.name} !\n\nDemande de RDV :\n- Nom: ${name}\n- Téléphone: ${phone}\n- Service: ${selectedService}\n- Date: ${formattedDate}\n- Heure: ${reservationTime}${msg ? `\n- Message: ${msg}` : ""}`
    );
    
    // Open WhatsApp
    window.open(`https://wa.me/${businessInfo.phoneRaw}?text=${text}`, '_blank');

    // 1. Reset Form Visuals
    f.reset();
    setReservationDate(null);
    setReservationTime("");
    setSelectedService("");

    // 2. Clear URL parameters without reloading page
    router.replace(window.location.pathname + "#contact");
  };

  // --- CALENDAR LOGIC (Monday start) ---
  const daysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = (date: Date) => {
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return day === 0 ? 6 : day - 1; // 0=Mon, 6=Sun
  };
  
  const generateDays = () => {
    const days = [];
    const prevMonthLastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate();
    const firstDayIndex = firstDayOfMonth(currentMonth);
    const totalDays = daysInMonth(currentMonth);

    // Previous month days to fill the grid
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, current: false });
    }
    // Current month days
    for (let i = 1; i <= totalDays; i++) {
      days.push({ day: i, current: true });
    }
    return days;
  };

  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] ml-1">Nom complet</label>
          <input
            id="rdv-name"
            type="text"
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-secondary focus:bg-white/10 transition-all outline-none placeholder:text-white/10"
            placeholder="Ex: Sarah Martin"
          />
        </div>
        <div className="space-y-3">
          <label className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] ml-1">Téléphone</label>
          <input
            id="rdv-phone"
            type="tel"
            required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-secondary focus:bg-white/10 transition-all outline-none placeholder:text-white/10"
            placeholder="Ex: 06 12 34 56 78"
          />
        </div>
      </div>

      {/* CUSTOM AGENDA SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* DATE PICKER */}
        <div className="space-y-5">
          <label className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] ml-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(197,160,89,0.5)]"></span> Date souhaitée
          </label>
          
          <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl shadow-inner">
            <div className="flex items-center justify-between mb-8">
              <button 
                type="button"
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                className="text-white/40 hover:text-secondary p-2 rounded-full hover:bg-white/5 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <span className="text-white font-serif text-xl capitalize font-medium tracking-wider">
                {currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
              </span>
              <button 
                type="button"
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                className="text-white/40 hover:text-secondary p-2 rounded-full hover:bg-white/5 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-4">
              {['LU', 'MA', 'ME', 'JE', 'VE', 'SA', 'DI'].map((d, i) => (
                <span key={i} className="text-[8px] text-white/20 font-black tracking-widest">{d}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {generateDays().map((d, i) => {
                const dayDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d.day);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                const isPast = dayDate < today && d.current;
                const isClosed = businessInfo.closedDays.includes(dayDate.getDay()) && d.current;
                const isSelected = reservationDate?.getDate() === d.day && reservationDate?.getMonth() === currentMonth.getMonth() && d.current;
                const isToday = new Date().getDate() === d.day && new Date().getMonth() === currentMonth.getMonth() && d.current;
                
                return (
                  <button
                    key={`${currentMonth.getMonth()}-${i}`}
                    type="button"
                    disabled={!d.current || isPast || isClosed}
                    onClick={() => setReservationDate(dayDate)}
                    className={`
                      aspect-square rounded-full text-[11px] transition-all flex items-center justify-center relative
                      ${!d.current || isPast || isClosed ? 'text-white/5 cursor-default' : 'text-white/60 hover:bg-secondary/20 hover:text-white'}
                      ${isSelected ? 'bg-secondary text-white shadow-[0_0_20px_rgba(197,160,89,0.4)] scale-110' : ''}
                      ${isToday && !isSelected ? 'text-secondary font-bold underline decoration-2 underline-offset-4' : ''}
                    `}
                  >
                    {d.day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* TIME PICKER */}
        <div className="space-y-5">
          <label className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] ml-1 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(197,160,89,0.5)]"></span> Créneau horaire
          </label>
          
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time, i) => {
              const [hours, minutes] = time.split(':').map(Number);
              const now = new Date();
              const isTodaySelected = reservationDate && 
                reservationDate.getDate() === now.getDate() && 
                reservationDate.getMonth() === now.getMonth() && 
                reservationDate.getFullYear() === now.getFullYear();
              
              const isTimePast = isTodaySelected && 
                (hours < now.getHours() || (hours === now.getHours() && minutes <= now.getMinutes()));

              return (
                <button
                  key={i}
                  type="button"
                  disabled={isTimePast}
                  onClick={() => setReservationTime(time)}
                  className={`
                    py-5 rounded-2xl text-[10px] font-bold tracking-[0.2em] transition-all border
                    ${isTimePast ? 'opacity-10 cursor-not-allowed border-transparent' : 
                      reservationTime === time 
                        ? 'bg-secondary border-secondary text-white shadow-xl scale-[1.02]' 
                        : 'bg-white/5 border-white/10 text-white/40 hover:border-secondary/40 hover:text-white hover:bg-white/[0.08]'}
                  `}
                >
                  {time}
                </button>
              );
            })}
          </div>

          <div className="mt-8 p-6 bg-secondary/[0.03] border border-secondary/10 rounded-[1.5rem] flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20 shadow-inner">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p className="text-[8px] uppercase text-white/30 font-black tracking-[0.4em] mb-1">Résumé du RDV</p>
              <p className="text-white text-base font-serif italic tracking-wide">
                {!reservationDate ? "Sélectionnez vos dates" : reservationDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                {reservationTime ? ` à ${reservationTime}` : ""}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Selection */}
      <div className="space-y-3">
        <label className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] ml-1">Choix du soin signature</label>
        <div className="relative group">
          <select
            required
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-6 pr-10 py-5 text-white focus:border-secondary transition-all outline-none appearance-none cursor-pointer text-sm font-medium tracking-wide"
          >
            <option value="" className="bg-[#1a1815]">Sélectionner un service</option>
            {servicesMenu.map((cat, catIdx) => (
              <optgroup key={`${cat.category}-${catIdx}`} label={cat.category} className="bg-[#1a1815] text-secondary font-serif">
                {cat.items.map((item, itemIdx) => {
                  const val = `${item.name}${item.duration ? ` (${item.duration})` : ""} — ${item.price}`;
                  return (
                    <option key={`${catIdx}-${itemIdx}`} value={val} className="text-white/80 py-2">
                      {item.name} — {item.price}
                    </option>
                  );
                })}
              </optgroup>
            ))}
          </select>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] ml-1">Notes ou préférences (optionnel)</label>
        <textarea
          id="rdv-msg"
          rows={3}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-white focus:border-secondary transition-all outline-none resize-none placeholder:text-white/10 text-sm"
          placeholder="Ex: J'ai une peau sensible, j'aimerais un créneau au calme..."
        ></textarea>
      </div>

      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-secondary text-white py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.4em] shadow-[0_15px_40px_-10px_rgba(197,160,89,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(197,160,89,0.5)] transition-all flex items-center justify-center gap-4 relative overflow-hidden group/btn"
      >
        <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
        <span className="relative z-10">Confirmer la demande</span>
        <svg  className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </motion.button>
    </form>
  );
}

export function ReservationForm() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-white/20 uppercase tracking-widest text-xs">Initialisation de l'agenda...</div>}>
      <ReservationFormContent />
    </Suspense>
  );
}
