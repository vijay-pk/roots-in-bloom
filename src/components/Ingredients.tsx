import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const items = [
  {
    name: "Wood-Pressed Coconut Oil",
    tag: "The Base",
    desc: "Deeply nourishes the scalp and strengthens hair from root to tip.",
    emoji: "🥥",
    color: "oklch(0.88 0.06 90)",
  },
  {
    name: "Amla",
    tag: "Indian Gooseberry",
    desc: "Rich in vitamin C — promotes hair growth and prevents premature greying.",
    emoji: "🫒",
    color: "oklch(0.75 0.14 130)",
  },
  {
    name: "Indigo",
    tag: "Neela Amari",
    desc: "Naturally enhances hair color and supports scalp health.",
    emoji: "🪴",
    color: "oklch(0.45 0.12 250)",
  },
  {
    name: "Brahmi",
    tag: "Memory Herb",
    desc: "Strengthens hair roots and helps reduce hair fall and stress-related damage.",
    emoji: "🌿",
    color: "oklch(0.58 0.11 150)",
  },
  {
    name: "Henna",
    tag: "Mehendi",
    desc: "Conditions the hair, adds natural shine, and improves texture.",
    emoji: "🍃",
    color: "oklch(0.55 0.14 60)",
  },
  {
    name: "Hibiscus",
    tag: "Japa Pushpa",
    desc: "Stimulates hair growth and helps prevent dandruff and hair thinning.",
    emoji: "🌺",
    color: "oklch(0.62 0.20 25)",
  },
  {
    name: "Tulsi",
    tag: "Holy Basil",
    desc: "Purifies the scalp and reduces itching and dandruff.",
    emoji: "🌱",
    color: "oklch(0.55 0.12 148)",
  },
  {
    name: "Bhringraj",
    tag: "King of Herbs",
    desc: "The legendary Ayurvedic tonic — promotes thick, healthy growth.",
    emoji: "🍀",
    color: "oklch(0.48 0.10 148)",
  },
  {
    name: "Aloe Vera",
    tag: "Ghritakumari",
    desc: "Soothes the scalp and hydrates dry, damaged hair.",
    emoji: "🌵",
    color: "oklch(0.72 0.14 145)",
  },
  {
    name: "Little Ironweed",
    tag: "Sahadevi",
    desc: "Supports scalp health and helps in reducing hair loss.",
    emoji: "🌾",
    color: "oklch(0.60 0.10 135)",
  },
  {
    name: "Curry Leaves",
    tag: "Karivepaku",
    desc: "Strengthens hair follicles and delays premature greying.",
    emoji: "🌿",
    color: "oklch(0.52 0.13 140)",
  },
  {
    name: "Vetiver",
    tag: "Khus",
    desc: "Cools and calms the scalp while improving overall hair vitality.",
    emoji: "🌾",
    color: "oklch(0.55 0.09 100)",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--leaf)]">The Formula</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            Twelve herbs. <em className="text-[color:var(--leaf)]">One ritual.</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Slow-infused for weeks in wood-pressed coconut oil — never heated, never diluted.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
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

        <div className="mt-16 flex justify-center">
          <Link
            to="/ingredients"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--leaf)] px-8 py-3.5 text-sm font-medium text-[color:var(--leaf)] transition hover:bg-[color:var(--leaf)] hover:text-[color:var(--cream)] shadow-sm"
          >
            Learn More About Our Ingredients
          </Link>
        </div>
      </div>
    </section>
  );
}
