import * as React from "react";
import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/src/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-12 py-8 flex items-center justify-between",
        isScrolled ? "bg-kava-bg/90 backdrop-blur-md py-4 border-b border-kava-gold/10" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-12">
        <a href="/" className="text-2xl font-bold tracking-[0.2em] uppercase text-kava-gold">
          Tamava
        </a>
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.15em] font-medium text-kava-cream/80">
          <a href="#sourcing" className="hover:text-kava-gold transition-colors">Shop</a>
          <a href="#quality" className="hover:text-kava-gold transition-colors">Our Story</a>
          <a href="#education" className="hover:text-kava-gold transition-colors">The Science</a>
          <a href="#" className="hover:text-kava-gold transition-colors">Wholesale</a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button id="cart-button" className="w-10 h-10 border border-kava-gold/30 rounded-full flex items-center justify-center text-kava-cream cursor-pointer hover:border-kava-gold transition-all relative">
          <ShoppingCart size={16} strokeWidth={1.5} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-kava-gold rounded-full"></span>
        </button>
        <button id="nav-cta" className="hidden lg:block bg-kava-gold hover:bg-kava-gold/90 text-kava-bg px-8 py-3 rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all active:scale-95">
          Order Now
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
