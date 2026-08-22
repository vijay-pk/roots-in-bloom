import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
const bottle = { url: "/prakrithi-roots-herbal-hair-oil-bottle.webp" };

const benefits = [
  { title: "Hair Growth Support", desc: "Awakens dormant follicles with Bhringraj + Amla." },
  { title: "Reduces Hair Fall", desc: "Strengthens each strand from the root outward." },
  { title: "Nourishes Scalp", desc: "Cools, hydrates and rebalances with Tulsi + Aloe." },
  { title: "Natural Shine", desc: "Hibiscus locks in gloss without a heavy residue." },
  { title: "Strengthens Roots", desc: "Coconut-infused herbs seep deep into follicles." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-20 sm:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 sm:gap-16 lg:grid-cols-2">
        {/* Sticky bottle */}
        <div className="relative flex justify-center lg:sticky lg:top-32">
          <div className="absolute h-56 w-56 rounded-full gradient-leaf opacity-20 blur-3xl sm:h-80 sm:w-80" />
          <motion.img
            src={bottle.url}
            alt="Prakrithi Roots bottle"
            className="relative h-[280px] w-auto object-contain animate-float-bottle sm:h-[400px] lg:h-[480px]"
            style={{ filter: "drop-shadow(0 40px 40px oklch(0.30 0.07 148 / 0.5))" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            loading="lazy"
          />
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--leaf)]">Why Prakrithi</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Rooted results,<br />
            <em className="text-[color:var(--leaf)]">felt in weeks.</em>
          </h2>

          <ul className="mt-10 space-y-4">
            {benefits.map((b, i) => (
              <motion.li
                key={b.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-4 rounded-2xl p-4 transition hover:bg-white/50"
              >
                <motion.div
                  className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full gradient-leaf text-[color:var(--cream)] shadow-soft"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 2c4 4 6 8 6 12a6 6 0 1 1-12 0c0-4 2-8 6-12z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-display text-xl">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/#shop" className="inline-flex items-center gap-3 rounded-full glass px-8 py-4 text-sm font-medium text-[color:var(--leaf)] shadow-soft transition hover:bg-white/70 hover:scale-105">
              View Product <span aria-hidden>→</span>
            </a>
            <Link
              to="/benefits"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--leaf)] px-8 py-4 text-sm font-medium text-[color:var(--leaf)] transition hover:bg-[color:var(--leaf)] hover:text-[color:var(--cream)] shadow-sm"
            >
              See All Benefits
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
