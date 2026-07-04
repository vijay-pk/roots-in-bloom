import { motion } from "framer-motion";

const items = [
  {
    name: "Amla",
    tag: "Indian Gooseberry",
    desc: "Vitamin-C rich fruit that strengthens follicles and preserves natural hair color.",
    emoji: "🫒",
    color: "oklch(0.75 0.14 130)",
  },
  {
    name: "Tulsi",
    tag: "Holy Basil",
    desc: "Cools the scalp, calms irritation and fights dandruff at the root.",
    emoji: "🌿",
    color: "oklch(0.55 0.12 148)",
  },
  {
    name: "Aloe Vera",
    tag: "Ghritakumari",
    desc: "Deep hydration and enzymes that revive dormant follicles.",
    emoji: "🌵",
    color: "oklch(0.72 0.14 145)",
  },
  {
    name: "Hibiscus",
    tag: "Japa Pushpa",
    desc: "Prevents premature graying and adds a natural, glossy shine.",
    emoji: "🌺",
    color: "oklch(0.62 0.20 25)",
  },
  {
    name: "Bhringraj",
    tag: "King of Herbs",
    desc: "Legendary Ayurvedic hair tonic — stimulates growth and reduces fall.",
    emoji: "🍃",
    color: "oklch(0.48 0.10 148)",
  },
  {
    name: "Neem",
    tag: "Nature's Purifier",
    desc: "Antibacterial and antifungal — keeps the scalp clean and balanced.",
    emoji: "🌱",
    color: "oklch(0.58 0.11 140)",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--leaf)]">The Formula</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Nine herbs. <em className="text-[color:var(--leaf)]">One ritual.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Slow-infused for weeks in cold-pressed coconut oil — never heated, never diluted.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              style={{ transformPerspective: 1000 }}
              className="group relative overflow-hidden rounded-3xl bg-card p-8 shadow-soft transition-shadow hover:shadow-bottle"
            >
              <div
                className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-50"
                style={{ background: it.color }}
              />
              <div
                className="grid h-14 w-14 place-items-center rounded-2xl text-3xl shadow-soft"
                style={{ background: `color-mix(in oklab, ${it.color} 18%, var(--cream))` }}
              >
                {it.emoji}
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{it.tag}</p>
                <h3 className="mt-1 text-2xl">{it.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
