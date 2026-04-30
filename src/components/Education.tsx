import type { ElementType } from "react";
import { motion } from "motion/react";
import { Coffee, Shell, Droplets, Wind } from "lucide-react";

interface StepProps {
  number: string;
  icon: ElementType;
  title: string;
  text: string;
}

const Step = ({ number, icon: Icon, title, text }: StepProps) => (
  <div className="flex gap-8 items-start">
    <div
      className="flex-shrink-0 w-10 h-10 rounded-full border border-kava-gold/30 flex items-center justify-center text-kava-gold font-serif italic text-lg shadow-[0_0_15px_rgba(212,175,55,0.1)]"
      aria-hidden="true"
    >
      {number}
    </div>
    <div className="space-y-2">
      <div className="flex items-center gap-3 text-kava-gold">
        <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
        <span className="font-bold text-[10px] uppercase tracking-[0.2em]">{title}</span>
      </div>
      <p className="text-kava-muted text-sm font-light leading-relaxed">{text}</p>
    </div>
  </div>
);

const Education = () => {
  return (
    <section
      id="education"
      aria-label="Kava education guide"
      className="py-32 bg-kava-deep text-kava-cream overflow-hidden relative border-b border-kava-gold/10"
    >
      {/* Seamless transition from animated section above */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-kava-bg to-transparent z-20 pointer-events-none" />
      {/* Decorative Gradient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kava-gold/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-kava-dark rounded-full blur-[80px] pointer-events-none" aria-hidden="true"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <span className="text-kava-gold uppercase tracking-[0.4em] text-[10px] font-bold">
            New to Kava?
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-light">The Kava Guide</h2>
          <div className="w-24 h-[1px] bg-kava-gold/30 mx-auto" aria-hidden="true"></div>
          <p className="text-lg text-kava-muted font-light max-w-2xl mx-auto leading-relaxed">
            Kava isn't just a drink — it's a 3,000-year-old Pacific tradition of calm, community, and connection. 
            Here's everything you need to know before your first shell.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12">
            <Step
              number="1"
              icon={Shell}
              title="The Vessel — Bilo"
              text="Traditionally served in a 'Bilo' (half coconut shell). The simplicity of the vessel is intentional — kava is about slowing down, not dressing up."
            />
            <Step
              number="2"
              icon={Droplets}
              title="Kavalactones — The Active Compounds"
              text="Kavalactones are what give kava its signature effect: relaxed body, clear mind. Look for Noble varieties with 6–10% kavalactone content for the best experience."
            />
            <Step
              number="3"
              icon={Wind}
              title="The Ritual"
              text="Clap once before drinking, finish your shell in one go, then clap three times. This simple act connects you to centuries of Pacific community tradition."
            />
            <Step
              number="4"
              icon={Coffee}
              title="The Taste"
              text="Earthy, peppery, slightly bitter. If it tingles your tongue, that's the kavalactones — a sign of potency. It's an acquired taste that becomes a ritual all its own."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative p-10 md:p-16 bg-kava-dark/60 rounded-sm border border-kava-gold/20 backdrop-blur-md shadow-2xl"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-kava-gold/40" aria-hidden="true"></div>
            <h3 className="text-3xl font-serif font-light mb-2 text-kava-gold italic">
              How to Prepare Traditional Kava
            </h3>
            <p className="text-kava-muted text-sm mb-10 font-light">
              The classic straining method. Takes 10 minutes, lasts all evening.
            </p>
            <ol className="space-y-10 list-none" aria-label="Kava preparation steps">
              <li className="flex gap-6 items-start">
                <div className="w-1 h-8 bg-kava-gold/30 mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-kava-cream/90 font-light leading-relaxed">
                  Add <strong className="text-kava-gold font-semibold">2–4 tablespoons</strong> of kava root powder to your straining bag.
                </p>
              </li>
              <li className="flex gap-6 items-start">
                <div className="w-1 h-8 bg-kava-gold/30 mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-kava-cream/90 font-light leading-relaxed">
                  Submerge the bag in <strong className="text-kava-gold font-semibold">8–12oz of warm water</strong> (not boiling — heat degrades kavalactones).
                </p>
              </li>
              <li className="flex gap-6 items-start">
                <div className="w-1 h-8 bg-kava-gold/30 mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-kava-cream/90 font-light leading-relaxed">
                  Knead and squeeze for <strong className="text-kava-gold font-semibold">5–10 minutes</strong> until the water turns a rich, earthy brown.
                </p>
              </li>
              <li className="flex gap-6 items-start">
                <div className="w-1 h-8 bg-kava-gold/30 mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-kava-cream/90 font-light leading-relaxed">
                  Serve chilled or at room temperature in a coconut bowl. <strong className="text-kava-gold font-semibold">Drink on an empty stomach</strong> for full effect.
                </p>
              </li>
            </ol>

            <div className="mt-16 pt-8 border-t border-kava-gold/10 space-y-4">
              <p className="text-kava-gold/80 text-sm font-medium italic tracking-wide leading-loose uppercase text-[10px]">
                "Wait 20 minutes before your second shell. Let the kavalactones settle. Patience is the first step of the journey."
              </p>
              {/* Reverse tolerance education — competitor best practice */}
              <p className="text-kava-muted text-xs font-light leading-relaxed">
                <span className="text-kava-gold font-semibold">First time?</span> Kava has a reverse tolerance effect — new users may need 2–3 sessions before feeling the full effect. This is normal. Stick with it.
              </p>
            </div>
          </motion.div>
        </div>

        {/* FDA Disclaimer - required by all competitors */}
        <div className="mt-20 p-6 border border-kava-gold/10 rounded-sm bg-kava-bg/50">
          <p className="text-kava-muted/60 text-[10px] leading-relaxed text-center">
            * These statements have not been evaluated by the Food and Drug Administration. TAMAVA products are not intended to diagnose, treat, cure, or prevent any disease. 
            Not for use by persons under 18. Do not use if pregnant or nursing. Consult a physician before use if you have liver problems or take medications. 
            The FDA advises that a potential risk of rare, but severe, liver injury may be associated with kava-containing dietary supplements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
