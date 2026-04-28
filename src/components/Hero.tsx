import { motion } from "motion/react";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-kava-bg px-6">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1920&auto=format&fit=crop"
          alt="Atmospheric Pacific Scene"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Deep, moody gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-kava-bg/90 via-kava-bg/40 to-kava-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,15,10,0.8)_100%)]" />
      </div>

      {/* Atmospheric Accents */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-kava-gold/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-kava-dark rounded-full blur-[150px] opacity-50" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
           className="max-w-4xl mx-auto space-y-12"
        >
          <div className="space-y-6">
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="text-kava-gold uppercase text-[10px] sm:text-xs font-bold block"
            >
              The Purest Pacific Ritual
            </motion.span>
            
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-serif font-light text-kava-cream leading-tight tracking-tighter">
              Calm. Rooted.<br />
              <span className="italic font-normal text-kava-gold">Connected.</span>
            </h1>
          </div>

          <p className="max-w-xl mx-auto text-lg sm:text-xl text-kava-muted font-light leading-relaxed">
            Ethically sourced Noble Kava from the volcanic soils of the South Pacific. 
            A centuries-old bridge to community and inner peace, lab-verified for purity.
          </p>

        </motion.div>
      </div>

      {/* Traditional Kava Bowl with TK Foam Art */}
      <motion.div 
        initial={{ opacity: 0, x: 100, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center z-30"
      >
          {/* Stylized Vintage Book */}
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[350px] bg-[#1d1a14] shadow-[20px_40px_80px_rgba(0,0,0,0.8)] rounded-sm transform -rotate-12 border-l-[12px] border-[#2c261e] border-y border-r border-black/40">
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-30"></div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-white/5"></div>
          </div>

          {/* Kava Bowl (Coconut Shell) */}
          <div className="relative w-[450px] h-[450px] rounded-full border-[16px] border-[#2c1e14] bg-[#1a120b] shadow-[0_40px_100px_rgba(0,0,0,0.9),inset_0_0_60px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden group">
              {/* Liquid Surface */}
              <div className="absolute inset-3 rounded-full bg-linear-to-br from-[#7a6348] to-[#54412c] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
                  {/* Surface movement shimmer */}
                  <motion.div 
                    animate={{ 
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" 
                  />
                  
                   {/* Rim highlight */}
                  <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none"></div>
              </div>
          </div>

          {/* Steam / Atmosphere */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)] animate-pulse pointer-events-none"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
