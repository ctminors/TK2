import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#sourcing", label: "Shop" },
    { href: "#quality", label: "Our Story" },
    { href: "#education", label: "The Science" },
    { href: "#", label: "Wholesale" },
  ];

  return (
    <motion.nav
      id="navbar"
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 flex items-center justify-between",
        isScrolled ? "bg-kava-bg/90 backdrop-blur-md py-3 border-b border-kava-gold/10" : "bg-transparent py-5"
      )}
    >
      <div className="flex items-center gap-12">
        <a href="/" className="flex items-center" aria-label="TAMAVA — Home">
          <img src="/logo.png" alt="TAMAVA KAVA Logo" className="h-20 w-auto object-contain" />
        </a>
        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.15em] font-medium text-kava-cream/80">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-kava-gold transition-colors cursor-pointer">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button
          id="cart-button"
          aria-label="Shopping cart"
          className="w-10 h-10 border border-kava-gold/30 rounded-full flex items-center justify-center text-kava-cream cursor-pointer hover:border-kava-gold transition-all relative"
        >
          <ShoppingCart size={16} strokeWidth={1.5} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-kava-gold rounded-full" aria-hidden="true"></span>
        </button>
        <button
          id="nav-cta"
          className="hidden lg:block bg-kava-gold hover:bg-kava-gold/90 text-kava-bg px-8 py-3 rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all active:scale-95 cursor-pointer"
        >
          Order Now
        </button>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          className="md:hidden w-10 h-10 border border-kava-gold/30 rounded-full flex items-center justify-center text-kava-cream cursor-pointer hover:border-kava-gold transition-all"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-kava-bg/95 backdrop-blur-md border-b border-kava-gold/10 md:hidden"
        >
          <div className="flex flex-col py-6 px-6 gap-6 text-[11px] uppercase tracking-[0.15em] font-medium text-kava-cream/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-kava-gold transition-colors cursor-pointer py-2"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="bg-kava-gold hover:bg-kava-gold/90 text-kava-bg px-8 py-3 rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all active:scale-95 cursor-pointer mt-2">
              Order Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
