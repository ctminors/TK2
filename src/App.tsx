import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sourcing from "./components/Sourcing";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { CheckCircle2, FlaskConical, Award, Globe } from "lucide-react";

export default function App() {
  return (
    <main className="relative perspective-1000 overflow-x-hidden">
      <Navbar />
      
      <Hero />
      
      {/* Bottom Trust Bar - Now at top below Hero */}
      <section className="border-y border-kava-gold/10 px-12 py-10 bg-[#0B0D09] z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kava-gold font-bold">Sourcing</span>
              <p className="text-xs text-kava-muted leading-relaxed font-light">Direct trade from local Pacific family estates.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kava-gold font-bold">Noble Status</span>
              <p className="text-xs text-kava-muted leading-relaxed font-light">100% Certified Noble. Pure kava root only.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kava-gold font-bold">Lab Tested</span>
              <p className="text-xs text-kava-muted leading-relaxed font-light">COA available for every hand-sorted batch.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kava-gold font-bold">Potency</span>
              <p className="text-xs text-kava-muted leading-relaxed font-light">High Kavalactone profile (8.4% avg).</p>
            </div>
          </div>
        </div>
      </section>

      <Sourcing />

      {/* Quote Section - Refined Theme */}
      <section className="py-40 bg-kava-bg relative overflow-hidden">
        <div className="container mx-auto px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto space-y-10"
            >
                <div className="text-kava-gold/40 mb-4 flex justify-center">
                    <Award size={40} strokeWidth={1} />
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-light text-kava-cream leading-[1.2] tracking-tight">
                  "Kava is the <span className="italic text-kava-gold">breath of peace</span> that connects our islands. To share it is to share our family's heritage."
                </h2>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-[1px] bg-kava-gold/30 mb-2"></div>
                    <p className="font-serif italic text-xl text-kava-gold">Chief Taniela</p>
                    <p className="text-kava-muted text-[10px] uppercase tracking-[0.4em] font-bold">Espiratui Estate, Vanuatu</p>
                </div>
            </motion.div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-kava-gold/5" />
      </section>

      <Education />

      {/* Featured Collection Preview - Dark Mode */}
      <section className="py-32 bg-kava-bg">
        <div className="container mx-auto px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
                <div className="space-y-4">
                    <span className="text-kava-gold font-semibold tracking-[0.3em] uppercase text-[10px] block">Curated Selection</span>
                    <h2 className="text-5xl font-serif font-light text-kava-cream">The Ceremonial Series</h2>
                </div>
                <button className="text-kava-gold font-bold text-[10px] tracking-[0.2em] uppercase border-b border-kava-gold/30 pb-2 hover:border-kava-gold transition-all">
                    View Entire Ritual
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { name: "VANUATU GOLD", type: "Ceremonial Root", price: "$45", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop" },
                    { name: "ISLAND RHYTHM", type: "Instant Kava", price: "$38", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" },
                    { name: "BILO VESSEL", type: "Hand-carved Coconut", price: "$22", img: "https://images.unsplash.com/photo-1582719477323-956272332617?q=80&w=800&auto=format&fit=crop" }
                ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer space-y-8"
                    >
                        <div className="relative aspect-[4/5] rounded-sm overflow-hidden p-2 bg-kava-dark/50 border border-kava-gold/10 group-hover:border-kava-gold/30 transition-all">
                            <img 
                              src={item.img} 
                              alt={item.name} 
                              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-kava-bg to-transparent opacity-40" />
                        </div>
                        <div className="space-y-2 px-1">
                            <div className="flex justify-between items-baseline">
                                <h3 className="font-serif text-2xl text-kava-cream tracking-tight">{item.name}</h3>
                                <p className="font-light text-kava-gold text-lg">{item.price}</p>
                            </div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-kava-muted font-bold">{item.type}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
