import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-kava-bg pt-32 pb-16 border-t border-kava-gold/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-kava-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-8">
            <a href="/" className="text-3xl font-bold tracking-[0.2em] uppercase text-kava-gold block">
              Tamava
            </a>
            <p className="text-kava-muted font-light leading-relaxed text-sm">
              Bringing the rhythmic serenity of the South Pacific to your home. Sustainably sourced, Noble certified, rooted in tradition.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-kava-gold/20 rounded-full flex items-center justify-center text-kava-muted hover:border-kava-gold hover:text-kava-gold transition-all">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 border border-kava-gold/20 rounded-full flex items-center justify-center text-kava-muted hover:border-kava-gold hover:text-kava-gold transition-all">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 border border-kava-gold/20 rounded-full flex items-center justify-center text-kava-muted hover:border-kava-gold hover:text-kava-gold transition-all">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-kava-gold mb-10 uppercase tracking-[0.3em] text-[10px]">Shop</h4>
            <ul className="space-y-5 text-kava-muted font-light text-sm tracking-tight">
              <li><a href="#" className="hover:text-kava-gold transition-colors">Bulk Roots</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors">Instant Kava</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors">Starter Kits</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors">Coconut Bowls</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-kava-gold mb-10 uppercase tracking-[0.3em] text-[10px]">Support</h4>
            <ul className="space-y-5 text-kava-muted font-light text-sm tracking-tight">
              <li><a href="#" className="hover:text-kava-gold transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-kava-gold transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
                <h4 className="font-bold text-kava-gold mb-6 uppercase tracking-[0.3em] text-[10px]">Newsletter</h4>
                <p className="text-kava-muted font-light text-sm leading-relaxed">Join our mailing list for exclusive harvesting updates and rituals.</p>
            </div>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-kava-dark border border-kava-gold/20 rounded-sm px-5 py-4 text-xs flex-grow outline-none focus:border-kava-gold transition-colors text-kava-cream"
                id="newsletter-input"
              />
              <button id="newsletter-btn" className="bg-kava-gold text-kava-bg px-5 py-4 rounded-sm hover:brightness-110 transition-all font-bold">
                <Mail size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-kava-gold/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-kava-muted/40 text-[10px] uppercase tracking-[0.2em] font-bold">
            © 2026 TAMAVA KAVA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-[9px] uppercase tracking-[0.2em] font-bold text-kava-muted/60">
            <a href="#" className="hover:text-kava-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-kava-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-kava-gold transition-colors">FDA Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
