import { SilkBackground } from "./components/ui/silk-background-animation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sourcing from "./components/Sourcing";
import Education from "./components/Education";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { Award, ShieldCheck, FlaskConical, Leaf, ExternalLink } from "lucide-react";

export default function App() {
  return (
    <main className="relative perspective-1000 overflow-x-hidden">
      {/* Skip to content */}
      <a href="#hero" className="skip-link">Skip to content</a>

      <Navbar />
      <Hero />

      {/* Trust Bar — proof points, not just labels */}
      <section
        aria-label="Trust indicators"
        className="border-y border-kava-gold/10 px-12 py-10 bg-[#0B0D09] z-20"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kava-gold font-bold">Noble Sourcing</span>
              <p className="text-xs text-kava-muted leading-relaxed font-light">
                Hand-selected roots from small-holder Pacific family estates.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kava-gold font-bold">Lab Certified</span>
              <p className="text-xs text-kava-muted leading-relaxed font-light">
                COA available for every batch — tested for potency &amp; heavy metals.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kava-gold font-bold">The Tradition</span>
              <p className="text-xs text-kava-muted leading-relaxed font-light">
                A bridge between ancestral wisdom and modern ritual.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-kava-gold font-bold">Free Shipping</span>
              <p className="text-xs text-kava-muted leading-relaxed font-light">
                Free domestic shipping on orders over $75. Discreet, fast delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Sourcing />

      {/* Founder Quote */}
      <section aria-label="Heritage quote" className="py-40 bg-kava-bg relative overflow-hidden">
        <SilkBackground />
        
        {/* Seamless edge blending */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-kava-bg to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-kava-bg via-kava-bg/80 to-transparent z-10" />

        <div className="container mx-auto px-12 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-10"
          >
            <div className="text-kava-gold/40 mb-4 flex justify-center" aria-hidden="true">
              <Award size={40} strokeWidth={1} />
            </div>
            <blockquote>
              <h2 className="text-4xl md:text-6xl font-serif font-light text-kava-cream leading-[1.2] tracking-tight">
                "Kava is the{" "}
                <span className="italic text-kava-gold">breath of peace</span>{" "}
                that connects our islands. To share it is to share our family's heritage."
              </h2>
              <footer className="flex flex-col items-center gap-2 mt-10">
                <cite className="font-serif italic text-xl text-kava-gold not-italic">Chief Taniela</cite>
                <p className="text-kava-muted text-[10px] uppercase tracking-[0.4em] font-bold">
                  Espiritu Estate, Vanuatu
                </p>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <Education />

      {/* Product Collection */}
      <section id="products" aria-label="Shop our kava collection" className="py-32 bg-kava-bg">
        <div className="container mx-auto px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
            <div className="space-y-4">
              <span className="text-kava-gold font-semibold tracking-[0.3em] uppercase text-[10px] block">
                The Collection
              </span>
              <h2 className="text-5xl font-serif font-light text-kava-cream">
                The Ceremonial Series
              </h2>
              <p className="text-kava-muted font-light text-sm max-w-md leading-relaxed">
                Every product sourced from a single estate, single cultivar. 
                You'll always know exactly where your kava comes from — and who grew it.
              </p>
            </div>
            <div className="space-y-3 text-right">
              <button className="text-kava-gold font-bold text-[10px] tracking-[0.2em] uppercase border-b border-kava-gold/30 pb-2 hover:border-kava-gold transition-all cursor-pointer block">
                View Entire Collection →
              </button>
              {/* Subscription nudge — competitor best practice */}
              <p className="text-kava-muted/60 text-[9px] uppercase tracking-[0.15em]">
                Subscribe &amp; Save 15% on every order
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "VANUATU GOLD",
                type: "Traditional Root Powder",
                origin: "Espiritu Santo, Vanuatu",
                kavalactones: "8.4% Kavalactones",
                effect: "Heavy · Social · Grounding",
                price: "$45",
                sizesFrom: "From 250g",
                img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop",
                badge: "Best Seller",
              },
              {
                name: "ISLAND RHYTHM",
                type: "Instant Kava Powder",
                origin: "Taveuni, Fiji",
                kavalactones: "7.2% Kavalactones",
                effect: "Light · Euphoric · Social",
                price: "$38",
                sizesFrom: "From 100g",
                img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
                badge: "No Straining Needed",
              },
              {
                name: "BILO VESSEL",
                type: "Hand-Carved Coconut Bowl",
                origin: "Tonga",
                kavalactones: null,
                effect: "The traditional drinking vessel",
                price: "$22",
                sizesFrom: "Single · Set of 4",
                img: "https://images.unsplash.com/photo-1582719477323-956272332617?q=80&w=800&auto=format&fit=crop",
                badge: "Pairs with Any Kava",
              },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group cursor-pointer space-y-6"
              >
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-kava-dark/50 border border-kava-gold/10 group-hover:border-kava-gold/30 transition-all">
                  <img
                    src={item.img}
                    alt={`${item.name} — ${item.type}`}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-kava-bg to-transparent opacity-40" aria-hidden="true" />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-kava-gold/90 text-kava-bg text-[9px] uppercase tracking-[0.15em] font-bold px-3 py-1 rounded-sm">
                    {item.badge}
                  </div>
                </div>

                <div className="space-y-3 px-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-serif text-2xl text-kava-cream tracking-tight">{item.name}</h3>
                    <p className="font-light text-kava-gold text-lg">{item.price}</p>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-kava-muted font-bold">{item.type}</p>
                  {item.origin && (
                    <p className="text-[10px] text-kava-muted/60 font-light">{item.origin}</p>
                  )}
                  {item.kavalactones && (
                    <div className="flex gap-3 flex-wrap">
                      <span className="text-[9px] border border-kava-gold/20 text-kava-gold/70 px-2 py-1 rounded-sm uppercase tracking-[0.1em]">
                        {item.kavalactones}
                      </span>
                      <span className="text-[9px] border border-kava-gold/20 text-kava-gold/70 px-2 py-1 rounded-sm uppercase tracking-[0.1em]">
                        {item.effect}
                      </span>
                    </div>
                  )}
                  {!item.kavalactones && (
                    <span className="text-[9px] border border-kava-gold/20 text-kava-gold/70 px-2 py-1 rounded-sm uppercase tracking-[0.1em] inline-block">
                      {item.effect}
                    </span>
                  )}
                  <p className="text-[10px] text-kava-muted/50">{item.sizesFrom}</p>

                  {/* Add to Cart */}
                  <button
                    className="w-full mt-2 bg-kava-gold/10 border border-kava-gold/30 text-kava-gold text-[10px] uppercase tracking-widest font-bold py-3 rounded-sm hover:bg-kava-gold hover:text-kava-bg transition-all active:scale-95 cursor-pointer"
                    id={`add-to-cart-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lab transparency CTA — all competitors have this */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-10 border border-kava-gold/15 rounded-sm bg-kava-deep/50 grid grid-cols-1 md:grid-cols-3 gap-10 items-center"
          >
            <div className="flex items-center gap-4">
              <ShieldCheck size={24} className="text-kava-gold flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-kava-cream font-semibold text-sm">100% Noble Certified</p>
                <p className="text-kava-muted text-xs font-light">No Tudei. No stems. Pure lateral root only.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FlaskConical size={24} className="text-kava-gold flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-kava-cream font-semibold text-sm">Third-Party Lab Tested</p>
                <p className="text-kava-muted text-xs font-light">
                  Certificates of Analysis available for every batch.{" "}
                  <a href="#" className="text-kava-gold underline underline-offset-2 hover:no-underline" id="coa-link">
                    View COAs →
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Leaf size={24} className="text-kava-gold flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-kava-cream font-semibold text-sm">Direct Trade Sourcing</p>
                <p className="text-kava-muted text-xs font-light">
                  We pay farmers above market rate. Zero middlemen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews — social proof section */}
      <Reviews />

      <Footer />
    </main>
  );
}
