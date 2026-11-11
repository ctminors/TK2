import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Leaf,
  Sprout,
  Truck,
  HeartHandshake,
  ClipboardList,
  MailCheck,
  Landmark,
  PackageCheck,
  Coffee,
  Store,
  Users,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SilkBackground } from "../components/ui/silk-background-animation";

// TODO(Tamava): replace with the real wholesale product list (names, pack sizes,
// and minimums). Prices stay off the page; they're confirmed on the invoice.
// Each `id` becomes a form field named `qty-<id>`; the order sheet adds a
// column for each new one automatically.
export const WHOLESALE_PRODUCTS = [
  {
    id: "root-powder-1kg",
    name: "Noble Kava Root Powder",
    detail: "Traditional grind · strain and serve",
    pack: "1 kg bag",
  },
  {
    id: "root-powder-varietal-1",
    name: "Noble Kava Root Powder Varietal 1",
    detail: "Traditional grind · strain and serve",
    pack: "1 kg bag",
  },
  {
    id: "instant-powder-varietal-2",
    name: "Instant Noble Kava Powder Varietal 2",
    detail: "Fine powder · mixes straight into water",
    pack: "1 kg bag",
  },
];

// Google Apps Script web app that appends each order to the order sheet and
// emails it. Set in Vercel → Settings → Environment Variables (and .env.local).
const ORDER_SHEET_URL = import.meta.env.VITE_ORDER_SHEET_URL;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const inputBase =
  "[color-scheme:dark] bg-kava-deep/60 border border-kava-gold/20 rounded-sm px-4 py-3 text-sm text-kava-cream placeholder:text-kava-muted/50 focus:outline-2 focus:outline-kava-gold focus:outline-offset-2 focus:border-kava-gold/60 transition-colors";
const inputClass = `w-full ${inputBase}`;
const labelClass = "block text-[10px] uppercase tracking-[0.2em] font-bold text-kava-muted mb-2";

function OrderForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data: Record<string, string> = {};
    new FormData(form).forEach((v, k) => (data[k] = String(v)));

    const hasProduct = WHOLESALE_PRODUCTS.some((p) => Number(data[`qty-${p.id}`] || 0) > 0);
    if (!hasProduct) {
      setFormError("Add a quantity for at least one product.");
      return;
    }
    setFormError("");
    setStatus("sending");

    try {
      if (!ORDER_SHEET_URL) throw new Error("VITE_ORDER_SHEET_URL is not set");
      // Apps Script doesn't send CORS headers, so this is a "no-cors" simple
      // request: the order is delivered, but the response can't be read. A
      // network failure still throws and shows the error message.
      await fetch(ORDER_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(data),
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="border border-kava-gold/30 bg-kava-gold/5 rounded-sm p-12 text-center space-y-4">
        <MailCheck size={36} strokeWidth={1} className="text-kava-gold mx-auto" aria-hidden="true" />
        <h3 className="font-serif text-3xl text-kava-cream">Tankyu tumas. Your order is in.</h3>
        <p className="text-kava-muted font-light max-w-md mx-auto leading-relaxed">
          We'll review it and email you to confirm, with your invoice attached. Nothing is charged until you've
          seen and approved it.
        </p>
      </div>
    );
  }

  return (
    <form name="wholesale-order" onSubmit={handleSubmit} className="space-y-14">
      <p className="hidden">
        <label>
          Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {/* Products */}
      <fieldset className="space-y-4">
        <legend className="font-serif text-2xl text-kava-cream mb-6">1. What would you like?</legend>
        {WHOLESALE_PRODUCTS.map((p) => (
          <div
            key={p.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-kava-gold/10 hover:border-kava-gold/25 bg-kava-dark/40 rounded-sm px-6 py-5 transition-colors"
          >
            <div>
              <p className="text-kava-cream font-medium">{p.name}</p>
              <p className="text-xs text-kava-muted font-light mt-1">
                {p.detail} · <span className="text-kava-gold/80">{p.pack}</span>
              </p>
            </div>
            <label className="flex items-center gap-3 shrink-0">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-kava-muted">Qty</span>
              <input
                type="number"
                name={`qty-${p.id}`}
                min={0}
                step={1}
                inputMode="numeric"
                placeholder="0"
                aria-label={`Quantity of ${p.name}, ${p.pack}`}
                className={`${inputBase} w-24 text-center`}
              />
            </label>
          </div>
        ))}
        <p className="text-xs text-kava-muted/70 font-light">
          Pricing and minimums are confirmed on your invoice. All products come in 1 kg bags. Anything special? Tell us in the notes.
        </p>
      </fieldset>

      {/* Business details */}
      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <legend className="font-serif text-2xl text-kava-cream mb-6 md:col-span-2">2. Who's it for?</legend>
        <div>
          <label htmlFor="business" className={labelClass}>Business name</label>
          <input id="business" name="business" required autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <label htmlFor="contact" className={labelClass}>Contact name</label>
          <input id="contact" name="contact" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="address" className={labelClass}>Delivery or shipping address</label>
          <textarea
            id="address"
            name="address"
            required
            rows={2}
            autoComplete="street-address"
            className={inputClass}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="notes" className={labelClass}>Notes</label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Loading dock, gate code, a product you'd like us to stock…"
            className={inputClass}
          />
        </div>
      </fieldset>

      <div className="space-y-4">
        {formError && (
          <p role="alert" className="text-sm text-kava-gold">{formError}</p>
        )}
        {status === "error" && (
          <p role="alert" className="text-sm text-kava-gold">
            Something went wrong sending your order. Please try again in a moment.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full sm:w-auto bg-kava-gold text-kava-bg px-12 py-4 font-bold text-[11px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all cursor-pointer rounded-sm disabled:opacity-60 disabled:cursor-wait"
        >
          {status === "sending" ? "Sending…" : "Send my order"}
        </button>
        <p className="text-xs text-kava-muted/70 font-light">
          No payment is taken here. We'll email you to confirm and send an invoice, payable by ACH bank transfer.
        </p>
      </div>
    </form>
  );
}

export default function Wholesale() {
  return (
    <main className="relative overflow-x-hidden">
      <a href="#wholesale-hero" className="skip-link">Skip to content</a>
      <Navbar />

      {/* Hero */}
      <section
        id="wholesale-hero"
        aria-label="Tamava wholesale"
        className="relative min-h-[90vh] flex items-end overflow-hidden bg-kava-bg"
      >
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/wholesale-hero.webp" type="image/webp" />
            <img
              src="/wholesale-hero.jpg"
              alt="Rows of kava plants on a hillside farm above a bay in Vanuatu at sunset"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 bg-linear-to-b from-kava-bg/70 via-transparent via-55% to-kava-bg" aria-hidden="true" />
          <div className="absolute inset-0 bg-linear-to-r from-kava-bg/80 via-kava-bg/30 to-transparent" aria-hidden="true" />
        </div>

        <div className="container mx-auto relative z-10 px-6 md:px-12 pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl space-y-8"
          >
            <span className="text-kava-gold uppercase text-[10px] sm:text-xs font-bold tracking-[0.4em] block">
              Wholesale &nbsp;·&nbsp; Noble Kava from Vanuatu
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-kava-cream leading-[1.05] tracking-tight">
              From the island gardens<br />
              <span className="italic text-kava-gold">to your shell.</span>
            </h1>
            <p className="max-w-xl text-lg text-kava-cream/80 font-light leading-relaxed">
              Noble kava straight from local farms in Vanuatu, for the bars, cafés and shops that pour it. Every
              order helps fund community projects through the Smol Haos Toilet Project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#order"
                className="bg-kava-gold text-kava-bg px-10 py-4 font-bold text-[11px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-sm text-center"
              >
                Start a wholesale order
              </a>
              <a
                href="#how-it-works"
                className="border border-kava-gold/40 text-kava-gold px-10 py-4 font-bold text-[11px] uppercase tracking-widest hover:border-kava-gold transition-all rounded-sm text-center"
              >
                How it works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Tamava */}
      <section aria-labelledby="why-heading" className="py-32 bg-kava-bg">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-20 space-y-4">
            <span className="text-kava-gold font-semibold tracking-[0.3em] uppercase text-[10px] block">Why Tamava</span>
            <h2 id="why-heading" className="text-4xl md:text-5xl font-serif font-light text-kava-cream leading-tight">
              Kava the way Vanuatu drinks it.
            </h2>
            <p className="text-kava-muted font-light leading-relaxed">
              In Vanuatu, kava isn't a trend. It's the end of the working day, the start of every ceremony and the
              thing neighbours share when there's something to settle. We bring that same kava to your counter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Leaf,
                title: "Noble varieties only",
                body: "The traditional cultivars ni-Vanuatu growers have prized for generations, chosen for a clear, steady calm. Never tudei.",
              },
              {
                icon: Sprout,
                title: "Straight from local farms",
                body: "Grown by local farming families in Vanuatu's volcanic soil and bought from them directly, so more of every order stays on the islands.",
              },
              {
                icon: Truck,
                title: "Hand-delivered in Palm Beach County",
                body: "Local orders arrive with a member of our team, not a courier. Everywhere else, we ship your order straight to you.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="border border-kava-gold/10 hover:border-kava-gold/30 bg-kava-dark/30 rounded-sm p-10 space-y-5 transition-colors"
              >
                <Icon size={28} strokeWidth={1.25} className="text-kava-gold" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-kava-cream">{title}</h3>
                <p className="text-sm text-kava-muted font-light leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smol Haos */}
      <section aria-labelledby="smol-haos-heading" className="py-40 bg-kava-deep relative overflow-hidden">
        <SilkBackground />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-kava-deep to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-kava-deep to-transparent z-10" />

        <div className="container mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="space-y-8">
            <span className="text-kava-gold font-semibold tracking-[0.3em] uppercase text-[10px] block">
              Every order gives back
            </span>
            <h2 id="smol-haos-heading" className="text-4xl md:text-6xl font-serif font-light text-kava-cream leading-[1.1]">
              Good kava builds<br />
              <span className="italic text-kava-gold">good villages.</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.15 }} className="space-y-6">
            <p className="text-kava-cream/90 font-light text-lg leading-relaxed">
              Proceeds from Tamava wholesale orders support community projects in Vanuatu through the{" "}
              <span className="text-kava-gold">Smol Haos Toilet Project</span>, a US 501(c)(3) nonprofit working
              alongside communities on the island of Tanna.
            </p>
            <p className="text-kava-muted font-light leading-relaxed">
              In Bislama, a <em className="font-serif text-kava-cream">smol haos</em>, a "little house", is a
              toilet. Clean, safe sanitation is where healthier families, safer schools and stronger villages
              begin. When your customers order another shell, they're helping build them.
            </p>
            <a
              href="https://smolhaostoiletproject.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-kava-gold font-bold text-[10px] tracking-[0.2em] uppercase border-b border-kava-gold/30 pb-2 hover:border-kava-gold transition-all"
            >
              Meet the Smol Haos Toilet Project
              <ExternalLink size={12} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Who it's for */}
      <section aria-labelledby="partners-heading" className="py-32 bg-kava-bg">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-16 space-y-4">
            <span className="text-kava-gold font-semibold tracking-[0.3em] uppercase text-[10px] block">Who we supply</span>
            <h2 id="partners-heading" className="text-4xl md:text-5xl font-serif font-light text-kava-cream leading-tight">
              Built for the places people gather.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              { icon: Users, title: "Kava bars & nakamals", body: "Consistent noble kava for the regulars who notice the difference." },
              { icon: Coffee, title: "Cafés & tea houses", body: "An alcohol-free evening menu with a real story behind every shell." },
              { icon: Store, title: "Wellness retailers", body: "Shelf-ready kava with an origin your customers can feel good about." },
            ].map(({ icon: Icon, title, body }) => (
              <motion.div key={title} {...fadeUp} className="flex gap-5">
                <Icon size={24} strokeWidth={1.25} className="text-kava-gold shrink-0 mt-1" aria-hidden="true" />
                <div className="space-y-2">
                  <h3 className="text-kava-cream font-semibold">{title}</h3>
                  <p className="text-sm text-kava-muted font-light leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" aria-labelledby="how-heading" className="py-32 bg-kava-deep border-y border-kava-gold/10">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="max-w-2xl mb-20 space-y-4">
            <span className="text-kava-gold font-semibold tracking-[0.3em] uppercase text-[10px] block">How it works</span>
            <h2 id="how-heading" className="text-4xl md:text-5xl font-serif font-light text-kava-cream leading-tight">
              Four steps from farm to counter.
            </h2>
          </motion.div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: ClipboardList, title: "Send your order", body: "Pick your products and quantities below. It takes about two minutes." },
              { icon: MailCheck, title: "We confirm & invoice", body: "We review your order and email you a confirmation with your invoice." },
              { icon: Landmark, title: "Pay by ACH", body: "Settle the invoice by bank transfer. No card fees, no surprises." },
              { icon: PackageCheck, title: "Delivered or shipped", body: "Hand-delivered across Palm Beach County on our delivery day. Everywhere else, we ship it to you." },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.li
                key={title}
                {...fadeUp}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <span className="font-serif text-4xl text-kava-gold/40" aria-hidden="true">0{i + 1}</span>
                  <Icon size={22} strokeWidth={1.25} className="text-kava-gold" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl text-kava-cream">{title}</h3>
                <p className="text-sm text-kava-muted font-light leading-relaxed">{body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Order form */}
      <section id="order" aria-labelledby="order-heading" className="py-32 bg-kava-bg">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <motion.div {...fadeUp} className="space-y-6 lg:sticky lg:top-32 self-start">
            <span className="text-kava-gold font-semibold tracking-[0.3em] uppercase text-[10px] block">Wholesale order</span>
            <h2 id="order-heading" className="text-4xl md:text-5xl font-serif font-light text-kava-cream leading-tight">
              Pour something <span className="italic text-kava-gold">worth sharing.</span>
            </h2>
            <p className="text-kava-muted font-light leading-relaxed">
              Tell us what you need and where it's going. We'll take it from there, and a little of Vanuatu goes
              back to Vanuatu with every order.
            </p>
            <div className="flex items-center gap-3 text-kava-gold/80 text-xs">
              <HeartHandshake size={18} strokeWidth={1.25} aria-hidden="true" />
              <span>Proceeds support the Smol Haos Toilet Project</span>
            </div>
          </motion.div>
          <OrderForm />
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="py-32 bg-kava-deep border-t border-kava-gold/10">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h2 id="faq-heading" className="text-4xl font-serif font-light text-kava-cream mb-12">Questions, answered.</h2>
          <div className="divide-y divide-kava-gold/10 border-y border-kava-gold/10">
            {[
              {
                q: "Where do you deliver?",
                a: "We hand-deliver across Palm Beach County, and every local order goes out on the same delivery day. We'll confirm the date when we send your invoice. Outside Palm Beach County, we ship your order instead, and shipping is added to your invoice.",
              },
              {
                q: "How do I pay?",
                a: "Once we've confirmed your order we email an invoice, payable by ACH bank transfer. Nothing is charged through this page.",
              },
              {
                q: "What's the difference between noble and tudei kava?",
                a: "Noble varieties are the traditional cultivars drunk every day in Vanuatu, known for a clear, even feeling. Tudei (\"two-day\") varieties are stronger and longer-lasting, and aren't what we sell.",
              },
              {
                q: "Is there a minimum order?",
                a: "Tell us what you need and we'll confirm quantities and pricing on your invoice before anything is final.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group py-6">
                <summary className="flex justify-between items-center cursor-pointer list-none text-kava-cream font-medium hover:text-kava-gold transition-colors">
                  {q}
                  <ArrowRight size={16} className="text-kava-gold transition-transform group-open:rotate-90 shrink-0 ml-4" aria-hidden="true" />
                </summary>
                <p className="mt-4 text-sm text-kava-muted font-light leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
