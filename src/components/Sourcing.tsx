import type { ElementType } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Beaker, Leaf, TreePine } from "lucide-react";

interface FeatureProps {
  icon: ElementType;
  title: string;
  description: string;
  id: string;
}

const Feature = ({ icon: Icon, title, description, id }: FeatureProps) => (
  <div id={id} className="flex flex-col gap-6 p-10 bg-kava-bg border border-kava-gold/10 rounded-sm hover:border-kava-gold/40 transition-all group relative overflow-hidden cursor-pointer">
    <div className="absolute top-0 right-0 w-24 h-24 bg-kava-gold/5 rounded-full translate-x-12 -translate-y-12 blur-2xl group-hover:bg-kava-gold/10 transition-all" aria-hidden="true"></div>
    <div className="w-12 h-12 border border-kava-gold/30 rounded-full flex items-center justify-center text-kava-gold group-hover:text-kava-gold/80 transition-colors duration-300" aria-hidden="true">
      <Icon size={20} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-display font-medium tracking-tight text-kava-cream">{title}</h3>
    <p className="text-kava-muted text-sm leading-relaxed font-light">{description}</p>
  </div>
);

const Sourcing = () => {
  return (
    <section id="sourcing" aria-label="Our sourcing story" className="py-32 bg-kava-bg border-t border-kava-gold/10 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-sm overflow-hidden aspect-[4/5] border border-kava-gold/20 p-2 bg-kava-dark group"
          >
            <div className="w-full h-full relative overflow-hidden">
                <img
                  src="/cave.jpg"
                  alt="Majestic cave with sunlight streaming into a clear pool"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                  loading="lazy"
                />
            </div>
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-kava-gold/40 z-10" aria-hidden="true"></div>
          </motion.div>

          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-kava-gold font-semibold tracking-[0.3em] uppercase text-[10px] block">The Sourcing Story</span>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-kava-cream leading-[1.1]">
                Honoring the Land, <br />
                Nurturing the <span className="italic text-kava-gold">Spirit.</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-lg text-kava-muted font-light leading-relaxed max-w-xl">
              <p>
                TAMAVA started as a promise to the elders of the South Pacific—to share kava's gift with the world without sacrificing its soul.
              </p>
              <p>
                We partner directly with family estates across Vanuatu and Fiji, bypassing middlemen to ensure that every gram of kava contributes back to the communities that cultivate it.
              </p>
              
              <div className="pt-10 border-t border-kava-gold/10 flex flex-wrap gap-12">
                <div className="space-y-1">
                  <div className="text-3xl font-light text-kava-gold">100%</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-kava-muted">Estate Grown</div>
                </div>
                <div className="w-[1px] h-12 bg-kava-gold/10 hidden sm:block" aria-hidden="true" />
                <div className="space-y-1">
                  <div className="text-3xl font-light text-kava-gold">5,000+</div>
                  <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-kava-muted">Farmers Partnered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="quality" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature
            id="f-noble"
            icon={ShieldCheck}
            title="Noble Certified"
            description="We only source pure Noble varieties, aged for at least 5 years to ensure the perfect kavalactone profile."
          />
          <Feature
            id="f-lab"
            icon={Beaker}
            title="Lab Tested"
            description="Every batch is third-party tested for purity, potency, and the absence of heavy metals or contaminants."
          />
          <Feature
            id="f-sust"
            icon={Leaf}
            title="Sustainable"
            description="Our regenerative farming practices protect the lush biodiversity of the islands for future generations."
          />
          <Feature
            id="f-conn"
            icon={TreePine}
            title="Native Rooted"
            description="Processed using traditional methods that preserve the natural integrity and cultural power of the plant."
          />
        </div>
      </div>
    </section>
  );
};

export default Sourcing;
