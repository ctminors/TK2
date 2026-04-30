import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="hero" aria-label="Welcome to TAMAVA" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-kava-bg px-6">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1920&auto=format&fit=crop"
          alt="Lush Pacific island landscape evoking the origins of TAMAVA kava"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-kava-bg/90 via-kava-bg/40 to-kava-bg" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,15,10,0.8)_100%)]" aria-hidden="true" />
      </div>

      {/* Atmospheric Accents */}
      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-kava-gold/10 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-kava-dark rounded-full blur-[150px] opacity-50" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-40 text-center">
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
              100% Noble Certified &nbsp;·&nbsp; Lab Tested &nbsp;·&nbsp; Direct from Vanuatu &amp; Fiji
            </motion.span>

            <h1 className="text-6xl sm:text-7xl md:text-9xl font-serif font-light text-kava-cream leading-tight tracking-tighter">
              Calm. Rooted.<br />
              <span className="italic font-normal text-kava-gold">Connected.</span>
            </h1>
          </div>

          <p className="max-w-xl mx-auto text-lg sm:text-xl text-kava-muted font-light leading-relaxed">
            Noble Kava sourced directly from family estates in the South Pacific —
            third-party lab tested for purity, potency, and your peace of mind.
          </p>

          {/* Dual CTAs — critical conversion element missing from original */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#products"
              id="hero-cta-primary"
              className="bg-kava-gold text-kava-bg px-10 py-4 font-bold text-[11px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all cursor-pointer rounded-sm"
            >
              Shop the Harvest
            </a>
            <a
              href="#education"
              id="hero-cta-secondary"
              className="border border-kava-gold/40 text-kava-gold px-10 py-4 font-bold text-[11px] uppercase tracking-widest hover:border-kava-gold transition-all cursor-pointer rounded-sm"
            >
              New to Kava? Start Here
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Kava Bowl Visual */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center z-30"
        aria-hidden="true"
      >
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[350px] bg-[#1d1a14] shadow-[20px_40px_80px_rgba(0,0,0,0.8)] rounded-sm transform -rotate-12 border-l-[12px] border-[#2c261e] border-y border-r border-black/40">
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-30"></div>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-white/5"></div>
        </div>
        <div className="relative w-[450px] h-[450px] rounded-full border-[16px] border-[#2c1e14] bg-[#1a120b] shadow-[0_40px_100px_rgba(0,0,0,0.9),inset_0_0_60px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-3 rounded-full bg-linear-to-br from-[#7a6348] to-[#54412c] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
            <motion.div
              animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]"
            />
            <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)] animate-pulse pointer-events-none"></div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-kava-muted/50 text-[9px] uppercase tracking-[0.3em]">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-kava-gold/30"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
