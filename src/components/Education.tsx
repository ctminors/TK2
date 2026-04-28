import * as React from "react";
import { motion } from "motion/react";
import { Coffee, Shell, Droplets, Wind } from "lucide-react";

interface StepProps {
  number: string;
  icon: React.ElementType;
  title: string;
  text: string;
}

const Step = ({ number, icon: Icon, title, text }: StepProps) => (
  <div className="flex gap-8 items-start">
    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-kava-gold/30 flex items-center justify-center text-kava-gold font-serif italic text-lg shadow-[0_0_15px_rgba(212,175,55,0.1)]">
      {number}
    </div>
    <div className="space-y-2">
      <div className="flex items-center gap-3 text-kava-gold">
        <Icon size={16} strokeWidth={1.5} />
        <span className="font-bold text-[10px] uppercase tracking-[0.2em]">{title}</span>
      </div>
      <p className="text-kava-muted text-sm font-light leading-relaxed">{text}</p>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="py-32 bg-kava-deep text-kava-cream overflow-hidden relative border-b border-kava-gold/10">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kava-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-kava-dark rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <span className="text-kava-gold uppercase tracking-[0.4em] text-[10px] font-bold">Bridging Worlds</span>
          <h2 className="text-5xl md:text-6xl font-serif font-light">The Kava Guide</h2>
          <div className="w-24 h-[1px] bg-kava-gold/30 mx-auto"></div>
          <p className="text-lg text-kava-muted font-light max-w-2xl mx-auto leading-relaxed">
            New to the ritual? Kava isn't just a drink; it's a centuries-old bridge to community and inner peace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12">
            <Step 
              number="1"
              icon={Shell}
              title="Traditional Vessel"
              text="Historically served in a 'Bilo' (half coconut shell), representing the simplicity and earthy nature of the drink."
            />
            <Step 
              number="2"
              icon={Droplets}
              title="Kavalactones"
              text="The active compounds responsible for the 'root-lift'—the unique feeling of being simultaneously relaxed and alert."
            />
            <Step 
              number="3"
              icon={Wind}
              title="The Ritual"
              text="Clap once, drink in one go, and clap three times to show respect to the plant and those you are with."
            />
            <Step 
              number="4"
              icon={Coffee}
              title="Flavor Profile"
              text="Earthy, peppery, and slightly bitter. It's an acquired taste that signals the potency of the medicine."
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative p-16 bg-kava-dark/60 rounded-sm border border-kava-gold/20 backdrop-blur-md shadow-2xl"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-kava-gold/40"></div>
            <h3 className="text-3xl font-serif font-light mb-10 text-kava-gold italic">The Preparation</h3>
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-1 h-8 bg-kava-gold/30 mt-1" />
                <p className="text-lg text-kava-cream/90 font-light leading-relaxed">Mix 2-3 tablespoons with 8-12oz of warm water.</p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-1 h-8 bg-kava-gold/30 mt-1" />
                <p className="text-lg text-kava-cream/90 font-light leading-relaxed">Squeeze through a straining bag for 5-10 minutes.</p>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-1 h-8 bg-kava-gold/30 mt-1" />
                <p className="text-lg text-kava-cream/90 font-light leading-relaxed">Serve chilled or at room temperature in a coconut bowl.</p>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-kava-gold/10">
               <p className="text-kava-gold/80 text-sm font-medium italic tracking-wide leading-loose uppercase text-[10px]">
                "Wait 20 minutes before your second shell to let the kavalactones settle. Patience is the first step of the journey."
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
