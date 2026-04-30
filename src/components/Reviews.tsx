import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcus T.",
    location: "Portland, OR",
    rating: 5,
    text: "I've tried six different kava brands and TAMAVA is in a completely different league. The Vanuatu Gold hits fast, clean, and lasts. Zero muddy aftertaste. This is my daily wind-down now.",
  },
  {
    name: "Leilani K.",
    location: "Honolulu, HI",
    rating: 5,
    text: "As someone who grew up drinking kava at family ceremonies, finding TAMAVA felt like coming home. The sourcing is real — you can taste the difference. Highly recommend the traditional root.",
  },
  {
    name: "James R.",
    location: "Austin, TX",
    rating: 5,
    text: "I was nervous to try kava — the education section on this site answered every question I had before I even ordered. The starter kit arrived beautifully packaged. Already on my second bag.",
  },
  {
    name: "Sofia M.",
    location: "Miami, FL",
    rating: 5,
    text: "I switched from alcohol to kava six months ago and it has genuinely changed my life. TAMAVA's Island Rhythm instant is perfect — just mix and go. The COA on the website sealed the deal for me.",
  },
];

const StarRow = ({ count }: { count: number }) => (
  <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={12} className="fill-kava-gold text-kava-gold" />
    ))}
  </div>
);

import SpotlightBackground from "./ui/spotlight-background";

const Reviews = () => {
  return (
    <section
      id="reviews"
      aria-label="Customer reviews"
      className="pt-32 pb-16 bg-kava-deep border-t border-kava-gold/10 overflow-hidden relative"
    >
      <SpotlightBackground>
        <div className="container mx-auto px-6 md:px-12 relative z-30">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4"
          >
            <span className="text-kava-gold uppercase tracking-[0.4em] text-[10px] font-bold block">
              From Our Community
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-kava-cream">
              What People Are Saying
            </h2>
            <div className="w-24 h-[1px] bg-kava-gold/30 mx-auto" aria-hidden="true" />
            <p className="text-kava-muted font-light max-w-xl mx-auto text-lg">
              Over 2,000 verified reviews. Real people, real results.
            </p>
          </motion.div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, i) => (
              <motion.article
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="p-10 bg-kava-bg/40 backdrop-blur-md border border-kava-gold/10 rounded-sm hover:border-kava-gold/30 transition-all space-y-6"
                aria-label={`Review by ${review.name}`}
              >
                <StarRow count={review.rating} />
                <blockquote>
                  <p className="text-kava-cream/90 font-light leading-relaxed text-base">
                    "{review.text}"
                  </p>
                </blockquote>
                <footer className="flex items-center gap-4 pt-4 border-t border-kava-gold/10">
                  <div
                    className="w-8 h-8 rounded-full bg-kava-gold/20 flex items-center justify-center text-kava-gold font-serif text-sm"
                    aria-hidden="true"
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <cite className="text-kava-gold text-sm font-semibold not-italic">
                      {review.name}
                    </cite>
                    <p className="text-kava-muted text-[10px] uppercase tracking-[0.2em]">
                      {review.location}
                    </p>
                  </div>
                </footer>
              </motion.article>
            ))}
          </div>

          {/* Aggregate rating callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center space-y-3"
          >
            <div className="flex justify-center gap-1" aria-label="4.9 out of 5 stars average">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="fill-kava-gold text-kava-gold" />
              ))}
            </div>
            <p className="text-kava-muted text-sm">
              <span className="text-kava-gold font-semibold text-xl">4.9 / 5</span> &nbsp;·&nbsp; 2,100+ verified reviews
            </p>
          </motion.div>
        </div>
      </SpotlightBackground>
    </section>
  );
};

export default Reviews;
