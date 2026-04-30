import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kava-bg pt-16 pb-16 border-t border-kava-gold/10 relative overflow-hidden" role="contentinfo">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-kava-gold/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Brand */}
          <div className="flex flex-col items-center text-center space-y-8 lg:col-span-1">
            <a href="/" className="block" aria-label="TAMAVA — Home">
              <img src="/logo.png" alt="TAMAVA KAVA Logo" className="h-32 w-auto object-contain" />
            </a>
            <p className="text-kava-muted font-light leading-relaxed text-sm max-w-xs">
              Bringing the ceremonial calm of the South Pacific to your home. 
              100% Noble certified, sustainably sourced, rooted in tradition.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#" aria-label="Follow TAMAVA on Instagram" className="w-10 h-10 border border-kava-gold/20 rounded-full flex items-center justify-center text-kava-muted hover:border-kava-gold hover:text-kava-gold transition-all cursor-pointer">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Follow TAMAVA on Facebook" className="w-10 h-10 border border-kava-gold/20 rounded-full flex items-center justify-center text-kava-muted hover:border-kava-gold hover:text-kava-gold transition-all cursor-pointer">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Follow TAMAVA on Twitter" className="w-10 h-10 border border-kava-gold/20 rounded-full flex items-center justify-center text-kava-muted hover:border-kava-gold hover:text-kava-gold transition-all cursor-pointer">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <nav aria-label="Shop navigation">
            <h4 className="font-bold text-kava-gold mb-10 uppercase tracking-[0.3em] text-[10px]">Shop</h4>
            <ul className="space-y-5 text-kava-muted font-light text-sm tracking-tight">
              <li><a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">Traditional Root Powder</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">Instant Kava</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">Starter Kits</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">Coconut Bowls &amp; Accessories</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">Wholesale &amp; Bulk</a></li>
            </ul>
          </nav>

          {/* Learn */}
          <nav aria-label="Learn navigation">
            <h4 className="font-bold text-kava-gold mb-10 uppercase tracking-[0.3em] text-[10px]">Learn</h4>
            <ul className="space-y-5 text-kava-muted font-light text-sm tracking-tight">
              <li><a href="#education" className="hover:text-kava-gold transition-colors cursor-pointer">The Kava Guide</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">Noble vs Tudei Kava</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">Lab Reports (COAs)</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">FAQs</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">Contact Us</a></li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h4 className="font-bold text-kava-gold mb-6 uppercase tracking-[0.3em] text-[10px]">Join the Circle</h4>
              <p className="text-kava-muted font-light text-sm leading-relaxed">
                Get harvest updates, kava rituals, and <strong className="text-kava-gold font-semibold">10% off</strong> your first order.
              </p>
            </div>
            <div className="flex gap-2">
              <label htmlFor="newsletter-input" className="sr-only">Email address</label>
              <input
                type="email"
                placeholder="Your email"
                className="bg-kava-dark border border-kava-gold/20 rounded-sm px-5 py-4 text-xs flex-grow focus:border-kava-gold transition-colors text-kava-cream outline-none"
                id="newsletter-input"
                autoComplete="email"
              />
              <button
                id="newsletter-btn"
                aria-label="Subscribe to newsletter"
                className="bg-kava-gold text-kava-bg px-5 py-4 rounded-sm hover:brightness-110 transition-all font-bold cursor-pointer active:scale-95"
              >
                <Mail size={16} strokeWidth={2.5} />
              </button>
            </div>
            <p className="text-kava-muted/40 text-[9px]">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* FDA Disclaimer — mandatory for all kava retailers */}
        <div className="py-8 border-t border-kava-gold/5 mb-8">
          <p className="text-kava-muted/40 text-[9px] leading-relaxed text-center max-w-4xl mx-auto">
            * These statements have not been evaluated by the Food and Drug Administration. TAMAVA products are not intended to diagnose, treat, cure, or prevent any disease. 
            Not for use by persons under 18 years of age. Do not use if pregnant or nursing. If you have or suspect you may have a medical condition, or are taking any medications, 
            consult your health care provider before using this product. The FDA advises that a potential risk of rare, but severe, liver injury may be associated with kava-containing dietary supplements.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-kava-gold/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-kava-muted/40 text-[10px] uppercase tracking-[0.2em] font-bold">
            © 2026 TAMAVA KAVA. ALL RIGHTS RESERVED.
          </p>
          <nav aria-label="Legal links" className="flex flex-wrap justify-center gap-12 text-[9px] uppercase tracking-[0.2em] font-bold text-kava-muted/60">
            <a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">Privacy Policy</a>
            <a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">Terms of Service</a>
            <a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">FDA Disclosure</a>
            <a href="#" className="hover:text-kava-gold transition-colors cursor-pointer">Shipping Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
