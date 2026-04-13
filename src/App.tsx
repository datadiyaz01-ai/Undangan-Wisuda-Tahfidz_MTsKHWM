/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Send, 
  Heart, 
  Wallet, 
  MessageCircle, 
  Info,
  ChevronDown,
  BookOpen,
  Users,
  AlertCircle,
  ListChecks
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Refs for scrolling
  const homeRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);
  const rundownRef = useRef<HTMLDivElement>(null);
  const graduatesRef = useRef<HTMLDivElement>(null);
  const rsvpRef = useRef<HTMLDivElement>(null);
  const infaqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active tab based on scroll position
      const scrollPos = window.scrollY + 100;
      if (infaqRef.current && scrollPos >= infaqRef.current.offsetTop) {
        setActiveTab("infaq");
      } else if (rsvpRef.current && scrollPos >= rsvpRef.current.offsetTop) {
        setActiveTab("rsvp");
      } else if (graduatesRef.current && scrollPos >= graduatesRef.current.offsetTop) {
        setActiveTab("graduates");
      } else if (rundownRef.current && scrollPos >= rundownRef.current.offsetTop) {
        setActiveTab("rundown");
      } else if (eventRef.current && scrollPos >= eventRef.current.offsetTop) {
        setActiveTab("event");
      } else {
        setActiveTab("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>, tab: string) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen pb-24 selection:bg-gold/30 bg-main">
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 bg-emerald-950/60 pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section 
        ref={homeRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="inline-block p-1 rounded-full bg-white/10 border border-gold/50 mb-4 animate-float overflow-hidden">
            <img 
              src="https://pbs.twimg.com/profile_images/843655984895610881/k_-_aRs5_400x400.jpg" 
              alt="Logo MTs KH A Wahab Muhsin" 
              className="w-16 h-16 object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <h2 className="font-display text-gold tracking-[0.2em] text-sm md:text-base uppercase">
            Undangan Digital
          </h2>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
            Wisuda <br />
            <span className="text-gold italic">Tahfidz</span>
          </h1>

          <div className="mt-4 flex justify-center gap-2">
            <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-[10px] text-gold uppercase tracking-widest">Wisudawan</span>
            <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-[10px] text-gold uppercase tracking-widest">Wisudawati</span>
          </div>
          
          <div className="w-24 h-1 bg-gold mx-auto my-6"></div>
          
          <p className="text-lg md:text-xl font-medium max-w-md mx-auto text-emerald-50">
            MTs KH A Wahab Muhsin
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="glass-card py-4 px-6 rounded-2xl border-gold/20 mt-8 max-w-sm mx-auto shadow-xl"
          >
            <p className="text-xs uppercase tracking-widest text-gold/80 mb-1">Kepada Yth.</p>
            <p className="text-lg font-serif font-bold">Bapak/Ibu Orang Tua/Wali</p>
            <p className="text-sm text-emerald-100/80">Calon Wisudawan & Wisudawati Tahfidz</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12"
          >
            <p className="text-sm uppercase tracking-widest text-gold/80 mb-2">Save the Date</p>
            <p className="text-2xl font-serif">Sabtu, 18 April 2026</p>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 cursor-pointer"
          onClick={() => scrollTo(eventRef, "event")}
        >
          <ChevronDown className="w-8 h-8 text-gold/50" />
        </motion.div>
      </section>

      {/* Event Details Section */}
      <section 
        ref={eventRef}
        className="relative py-20 px-6 z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto glass-card rounded-3xl p-8 md:p-12 shadow-2xl border border-gold/20"
        >
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl font-bold mb-2">Waktu & Tempat</h3>
            <p className="text-gold/80 italic mb-4">Mengharap kehadiran Bapak/Ibu Orang Tua/Wali</p>
            <div className="p-5 bg-emerald-900/40 rounded-2xl border border-gold/20 shadow-inner">
              <p className="text-sm text-emerald-50 leading-relaxed font-medium">
                "Sebuah kehormatan bagi kami untuk menyambut Bapak/Ibu Orang Tua/Wali Calon Wisudawan & Wisudawati Tahfidz dalam momen bersejarah ini."
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-emerald-800/50 text-gold">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Tanggal</h4>
                <p className="text-emerald-100/80">Sabtu, 18 April 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-emerald-800/50 text-gold">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Waktu</h4>
                <p className="text-emerald-100/80">08.00 WIB - Selesai</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-emerald-800/50 text-gold">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Tempat</h4>
                <p className="text-emerald-100/80">Aula SMK KH A Wahab Muhsin</p>
                <p className="text-xs text-emerald-100/50 mt-1">Jl. KH. Wahab Muhsin, Tasikmalaya</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Rundown Section */}
      <section 
        ref={rundownRef}
        className="relative py-20 px-6 z-10"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 md:p-10 shadow-2xl border border-gold/20"
          >
            <div className="text-center mb-10">
              <ListChecks className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-3xl font-bold mb-2">Susunan Acara</h3>
              <p className="text-gold/80 italic">Rundown Wisuda Tahfidz</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gold/30">
                    <th className="py-4 px-4 text-gold font-bold uppercase tracking-wider text-xs w-12">NO</th>
                    <th className="py-4 px-4 text-gold font-bold uppercase tracking-wider text-xs w-32">WAKTU</th>
                    <th className="py-4 px-4 text-gold font-bold uppercase tracking-wider text-xs">ACARA</th>
                    <th className="py-4 px-4 text-gold font-bold uppercase tracking-wider text-xs">KETERANGAN</th>
                  </tr>
                </thead>
                <tbody className="text-emerald-50">
                  {[
                    { no: 1, time: "07:00–08:00", event: "Registrasi Peserta dan Tamu Undangan", note: "Sie. Humas dan Sie. Tamu" },
                    { no: 2, time: "08:00–08:10", event: "Pembukaan", note: "MC" },
                    { no: 3, time: "08:10–08:20", event: "Pembacaan ayat suci Al-Quran", note: "Pajri Maulana, M.Pd" },
                    { no: 4, time: "08:20–08:25", event: "Pembacaan SK", note: "Dudi Ahmad Syaekhu, M.M.Pd" },
                    { no: 5, time: "08:25–10:30", event: "Prosesi Wisuda", note: "Sie. Acara" },
                    { no: 6, time: "10:30–11:00", event: "Sambutan-sambutan", note: (
                      <ul className="list-decimal list-inside space-y-1 text-xs">
                        <li>E. Anwar Sanusi, S.Ag (Kepala Madrasah)</li>
                        <li>KH. Drs. T. Musthafa KF (Ketua Komite)</li>
                        <li>KH. Dr. Aam Abdussalam, M.Pd (Ketua Yayasan)</li>
                        <li>Dr. Asep Bahria, M.Pd (Kepala Kemenag)</li>
                      </ul>
                    )},
                    { no: 7, time: "11:00–11:10", event: "Do’a", note: "H. Mamat Rahmatilah" },
                    { no: 8, time: "Selesai", event: "Tutup", note: "MC" },
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-gold/10 hover:bg-gold/5 transition-colors">
                      <td className="py-4 px-4 text-sm font-mono text-gold/70">{item.no}</td>
                      <td className="py-4 px-4 text-sm font-medium text-emerald-100">{item.time}</td>
                      <td className="py-4 px-4 text-sm font-bold">{item.event}</td>
                      <td className="py-4 px-4 text-xs text-emerald-100/70">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Graduates List Section */}
      <section 
        ref={graduatesRef}
        className="relative py-20 px-6 z-10"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 md:p-10 shadow-2xl border border-gold/20"
          >
            <div className="text-center mb-10">
              <Users className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-3xl font-bold mb-2">Daftar Wisudawan</h3>
              <p className="text-gold/80 italic">Calon Wisudawan & Wisudawati Tahfidz</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gold/30">
                    <th className="py-4 px-4 text-gold font-bold uppercase tracking-wider text-xs w-16">NO</th>
                    <th className="py-4 px-4 text-gold font-bold uppercase tracking-wider text-xs">NAMA</th>
                  </tr>
                </thead>
                <tbody className="text-emerald-50">
                  {[
                    "ABDURAHMAN ALI MUZAKKI", "ALI SYARIATI PERMANA", "ALWAWI ZATNIKA", "ARDA ROUDATUL JANNAH",
                    "ASHRI AZIZATUL ADAWIYAH", "AZMIRA DWIFA AZZAIDY", "DINDA SALMA SALSABILA", "FAHIRA ANINDIA",
                    "FEBRIAN JALIL HALIM ADIN PUTRA", "HASYA AULIANI FITRIYAH", "HIMMAH NURUL AZMI", "HUSNA HANIFAH MUSAWA",
                    "INTAN NUR'AINI", "KHOLIK HAKIKI", "KIRANA AZZAHRA IMANIAR", "M MASDAR FAUZAN", "MAZIYA NADWAH FUAD",
                    "MOHAMAD NIZAM IBRAHIM", "MUHAMAD RIFKI MAULANA PUTRA", "MUHAMMAD ADI FIRMANSYAH",
                    "MUHAMMAD FAEYZA FAYYADH HADDAYA", "MUHAMMAD FATHIR RAMADHAN", "MUHAMMAD KEANU ROFFIQ",
                    "MUHAMMAD RAIHAN NABAWI", "MUMTAAZ AZKA KHIYARI", "NASYWAN FAIZ RAHMAT", "NAUFAL AFKAR IDLAN",
                    "NAYLA SRI ANJANI", "NAYSHILA ALYA FITRI", "NIDAAN KHOFIYYA GUNAWAN", "QYRANNI AZ ZAHRA",
                    "RAI BANI ALFIAN", "RAISHA NAHLATUL FATIHAH", "RASIKAH NUR FAUZIYAH", "REZA RISTIAWAN",
                    "RIPANDI YUDISTIRA", "SAGARA CIKAL SUNDANIS", "SALSABILA KHOIRUNNISA", "SALWA FITRI AWALIYAH",
                    "SASKIA BILQIS ZILVANA", "SASKIA HANIFATUN NIDA", "SELLA AVARIELLA RAMADYANI",
                    "SELLI SHAKILA RAMADYANI", "SILFIYA AGUS SALIM", "SITI ROBIAH ADAWIAH", "ULFA SOLIHATUN NISSA",
                    "YUSUF APRIZAL ZAKI", "ZAENAL MUBAROK", "ZAHWA ADELIA PUTRI", "ZHAFARA AZALEA KHOIRUNNISA",
                    "ZULFA NUR RAHMA MAULIDA", "ZULFAN ABDUL FATAH"
                  ].map((name, index) => (
                    <tr key={index} className="border-b border-gold/10 hover:bg-gold/5 transition-colors">
                      <td className="py-3 px-4 text-sm font-mono text-gold/70">{index + 1}</td>
                      <td className="py-3 px-4 text-sm font-medium tracking-wide">{name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RSVP Section */}
      <section 
        ref={rsvpRef}
        className="relative py-20 px-6 z-10"
      >
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 border-dashed border-2 border-gold/30 shadow-2xl"
          >
            <Send className="w-12 h-12 text-gold mx-auto mb-6" />
            <h3 className="font-serif text-3xl font-bold mb-4">Konfirmasi Kehadiran</h3>
            <p className="text-emerald-100/80 mb-6 leading-relaxed">
              Mohon konfirmasikan kehadiran Bapak/Ibu Orang Tua/Wali melalui tautan di bawah ini untuk membantu kami dalam persiapan acara.
            </p>
            
            <div className="flex items-center justify-center gap-3 p-4 bg-emerald-900/40 rounded-2xl border border-gold/30 mb-8 max-w-sm mx-auto">
              <AlertCircle className="w-5 h-5 text-gold shrink-0" />
              <p className="text-xs text-emerald-50 font-medium text-left">
                Jumlah pendamping wisudawan/wisudawati yang boleh masuk ke ruangan <span className="text-gold font-bold">hanya 2 orang</span>.
              </p>
            </div>
            <a 
              href="https://forms.gle/QT1N1GK82mRkM5n19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-emerald-950 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Isi Form Konfirmasi
              <Send className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Infaq Section */}
      <section 
        ref={infaqRef}
        className="relative py-20 px-6 z-10"
      >
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-2xl"
          >
            {/* Decorative background icon */}
            <Heart className="absolute -right-10 -bottom-10 w-40 h-40 text-gold/5 pointer-events-none" />
            
            <div className="text-center mb-10">
              <Wallet className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-3xl font-bold mb-2">Infaq Jariyah</h3>
              <p className="text-emerald-100/80 italic leading-relaxed">Salurkan infaq terbaik Anda untuk mendukung kegiatan Wisuda Tahfidz Calon Wisudawan & Wisudawati</p>
            </div>

            <div className="bg-emerald-900/40 rounded-2xl p-6 border border-gold/20 mb-8 text-center">
              <p className="text-xs uppercase tracking-widest text-gold/60 mb-2">Nomor Rekening</p>
              <p className="text-2xl font-mono font-bold tracking-wider mb-1">016101056740507</p>
              <p className="text-lg font-medium text-emerald-100">a.n Roby Nurtsani</p>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText("016101056740507");
                  alert("Nomor rekening berhasil disalin!");
                }}
                className="mt-4 text-xs text-gold hover:underline flex items-center justify-center gap-1 mx-auto"
              >
                Salin Nomor Rekening
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-emerald-100/60 mb-4">Konfirmasi bukti transfer:</p>
              <a 
                href="https://wa.me/6282116804860?text=Assalamualaikum,%20saya%20ingin%20konfirmasi%20infaq%20Wisuda%20Tahfidz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-full transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Bendahara
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 text-center z-10 opacity-60">
        <p className="text-sm">
          &copy; 2026 MTs KH A Wahab Muhsin <br />
          Wisuda Tahfidz Calon Wisudawan & Wisudawati <br />
          Digital Invitation by AIS
        </p>
      </footer>

      {/* Bottom Navigation Bar (Mobile Shortcuts) */}
      <motion.nav 
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
        className="fixed bottom-6 left-1/2 w-[92%] max-w-md z-50"
      >
        <div className="bg-emerald-950/90 backdrop-blur-2xl border border-gold/40 rounded-full p-2 flex items-center justify-around shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <NavButton 
            icon={<BookOpen className="w-4 h-4" />} 
            label="Wisuda" 
            active={activeTab === "home"} 
            onClick={() => scrollTo(homeRef, "home")} 
          />
          <NavButton 
            icon={<MapPin className="w-4 h-4" />} 
            label="Lokasi" 
            active={activeTab === "event"} 
            onClick={() => scrollTo(eventRef, "event")} 
          />
          <NavButton 
            icon={<ListChecks className="w-4 h-4" />} 
            label="Acara" 
            active={activeTab === "rundown"} 
            onClick={() => scrollTo(rundownRef, "rundown")} 
          />
          <NavButton 
            icon={<Users className="w-4 h-4" />} 
            label="Daftar" 
            active={activeTab === "graduates"} 
            onClick={() => scrollTo(graduatesRef, "graduates")} 
          />
          <NavButton 
            icon={<Send className="w-4 h-4" />} 
            label="Hadir" 
            active={activeTab === "rsvp"} 
            onClick={() => scrollTo(rsvpRef, "rsvp")} 
          />
          <NavButton 
            icon={<Wallet className="w-4 h-4" />} 
            label="Infaq" 
            active={activeTab === "infaq"} 
            onClick={() => scrollTo(infaqRef, "infaq")} 
          />
        </div>
      </motion.nav>
    </div>
  );
}

function NavButton({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 px-4 py-2.5 rounded-full transition-all duration-300 ${
        active ? "text-gold bg-emerald-800/40 shadow-inner" : "text-emerald-100/50 hover:text-emerald-100"
      }`}
    >
      <div className={`${active ? "scale-110" : "scale-100"} transition-transform duration-300`}>
        {icon}
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-widest ${active ? "opacity-100" : "opacity-70"}`}>{label}</span>
    </button>
  );
}
