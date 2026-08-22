import { createFileRoute, Link } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import { PRODUCT_PRICE, ORIGINAL_PRICE, SAVINGS_PERCENTAGE, AMAZON_PRODUCT_URL } from "@/lib/config";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  Check,
  ShieldCheck,
  Sparkles,
  Leaf,
  Droplets,
  Heart,
  Sun,
  Clock,
  Flame,
  ShowerHead,
  Users,
  Baby,
  Paintbrush,
  Package,
  MapPin,
  Calendar,
  FlaskConical,
  ShoppingCart,
} from "lucide-react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Prakrithi Roots Herbal Hair Oil | Natural Hair Oil from Kerala" },
      {
        name: "description",
        content:
          "Discover Prakrithi Roots Herbal Hair Oil, made with 12 traditional herbs infused in wood-pressed coconut oil. Explore its ingredients, benefits and how to use it.",
      },
      {
        property: "og:title",
        content: "Prakrithi Roots Ayurvedic Herbal Hair Oil (100ml)",
      },
      {
        property: "og:description",
        content:
          "Pure Ayurvedic hair oil with Amla, Bhringraj, Tulsi, Hibiscus & Aloe Vera. Free from parabens, mineral oils & artificial fragrance.",
      },
    ],
  }),
  component: ProductPage,
});

/* ──────────────────────────── DATA ──────────────────────────── */

const features = [
  {
    icon: Leaf,
    title: "12 Handcrafted Herbs",
    desc: "Amla, Bhringraj, Tulsi, Hibiscus, Curry Leaves, Aloe Vera & 6 more potent botanicals.",
  },
  {
    icon: Droplets,
    title: "Wood-Pressed Base",
    desc: "100% pure, unrefined Kerala coconut oil extracted slowly without extreme heat.",
  },
  {
    icon: Sparkles,
    title: "3-Week Slow Infusion",
    desc: "Traditional slow-cook method ensuring all herbal phyto-nutrients saturate every drop.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Harmful Chemicals",
    desc: "No mineral oils, no parabens, no silicones, no synthetic colors or fragrances.",
  },
];

const highlights = [
  "Reduces hair fall & strengthens root follicles",
  "Nourishes dry scalp and helps control dandruff",
  "Prevents premature greying and adds natural shine",
  "Suitable for both men and women of all hair types",
  "Handcrafted in small batches in Calicut, Kerala",
];

const ingredients = [
  { name: "Wood-Pressed Coconut Oil", tag: "The Base", desc: "Deeply nourishes scalp and strengthens hair from root to tip.", emoji: "🥥" },
  { name: "Amla", tag: "Indian Gooseberry", desc: "Rich in vitamin C — promotes hair growth and prevents premature greying.", emoji: "🫒", link: "/blog/amla-benefits-for-hair" },
  { name: "Indigo", tag: "Neela Amari", desc: "Naturally enhances hair color and supports scalp health.", emoji: "🪴" },
  { name: "Brahmi", tag: "Memory Herb", desc: "Strengthens hair roots and helps reduce hair fall and stress-related damage.", emoji: "🌿", link: "/blog/brahmi-benefits-for-hair" },
  { name: "Henna", tag: "Mehendi", desc: "Conditions the hair, adds natural shine, and improves texture.", emoji: "🍃" },
  { name: "Hibiscus", tag: "Japa Pushpa", desc: "Stimulates hair growth and helps prevent dandruff and hair thinning.", emoji: "🌺", link: "/blog/hibiscus-benefits-for-hair" },
  { name: "Tulsi", tag: "Holy Basil", desc: "Purifies the scalp and reduces itching and dandruff.", emoji: "🌱" },
  { name: "Bhringraj", tag: "King of Herbs", desc: "The legendary Ayurvedic tonic — promotes thick, healthy growth.", emoji: "🍀", link: "/blog/bhringraj-benefits-for-hair" },
  { name: "Aloe Vera", tag: "Ghritakumari", desc: "Soothes the scalp and hydrates dry, damaged hair.", emoji: "🌵" },
  { name: "Little Ironweed", tag: "Sahadevi", desc: "Supports scalp health and helps in reducing hair loss.", emoji: "🌾" },
  { name: "Curry Leaves", tag: "Karivepaku", desc: "Strengthens hair follicles and delays premature greying.", emoji: "🌿", link: "/blog/curry-leaves-for-hair" },
  { name: "Vetiver", tag: "Khus", desc: "Cools and calms the scalp while improving overall hair vitality.", emoji: "🌾" },
];

const benefitsData = [
  { title: "Hair Growth Support", desc: "Bhringraj and Amla work synergistically to awaken dormant hair follicles and encourage new growth.", icon: Sparkles },
  { title: "Reduces Hair Fall", desc: "Strengthens each strand from the root outward, reducing breakage and excessive shedding within weeks.", icon: ShieldCheck },
  { title: "Dandruff Control", desc: "Tulsi and Aloe Vera possess natural antibacterial properties that maintain a clean, flake-free scalp.", icon: Leaf },
  { title: "Prevents Premature Greying", desc: "Amla, Curry Leaves, and Indigo help retain natural hair pigmentation and delay greying.", icon: Sun },
  { title: "Deep Scalp Nourishment", desc: "Wood-pressed coconut oil base penetrates deep to hydrate, cool, and rebalance the scalp.", icon: Droplets },
  { title: "Natural Shine & Softness", desc: "Hibiscus and Henna lock in gloss and improve hair texture without heavy residue.", icon: Heart },
];

const processSteps = [
  { step: "01", title: "Herb Selection", desc: "Each of the 12 herbs is carefully sourced from trusted growers across Kerala and South India, ensuring purity and potency.", icon: Leaf },
  { step: "02", title: "Sun-Drying & Preparation", desc: "Fresh herbs are naturally sun-dried to preserve their active phytonutrients before the infusion process begins.", icon: Sun },
  { step: "03", title: "3-Week Slow Infusion", desc: "Dried herbs are slowly simmered in pure wood-pressed coconut oil over gentle heat for 3 weeks, allowing full extraction of botanical compounds.", icon: Clock },
  { step: "04", title: "Straining & Bottling", desc: "The infused oil is carefully strained through fine cloth and hand-poured into premium glass bottles, preserving freshness.", icon: FlaskConical },
];

const howToUseSteps = [
  { step: "01", icon: Flame, title: "Warm the Oil Gently", desc: "Pour 1–2 tablespoons into a heat-safe bowl. Warm using a double boiler method — never microwave." },
  { step: "02", icon: Sparkles, title: "Section & Massage Scalp", desc: "Part hair into sections. Apply oil directly on scalp and massage in circular motions for 5–10 minutes." },
  { step: "03", icon: Clock, title: "Coat Hair to Ends", desc: "Smooth remaining drops along the length of your hair to seal split ends and reduce frizz." },
  { step: "04", icon: ShowerHead, title: "Leave-in & Rinse", desc: "Leave for 45–60 minutes or overnight. Wash off with a mild, sulphate-free shampoo. Use 2–3 times a week." },
];

const suitability = [
  { label: "Women", desc: "All hair types — straight, wavy, curly, or coily", icon: Users },
  { label: "Men", desc: "Ideal for thinning hair, receding hairlines & dry scalp", icon: Users },
  { label: "Teens & Young Adults", desc: "Safe for ages 13+ with parental guidance", icon: Baby },
  { label: "Colored / Treated Hair", desc: "100% natural — safe on chemically treated hair", icon: Paintbrush },
  { label: "Sensitive Scalps", desc: "Free from harsh chemicals, gentle on delicate skin", icon: Heart },
  { label: "All Climates", desc: "Works beautifully in humid, dry, and cold conditions", icon: Sun },
];

const faqs = [
  { q: "How often should I use Prakrithi Roots?", a: "Two to three times a week. Apply on scalp, massage for 2–3 minutes, leave for 30 minutes and wash off with a mild shampoo." },
  { q: "Is it suitable for all hair types?", a: "Yes. The formula is balanced for men and women, curly to straight, oily to dry scalps." },
  { q: "When will I see results?", a: "Most customers notice reduced hair fall and a calmer scalp within 3–4 weeks of consistent use." },
  { q: "Does it contain any chemicals or artificial fragrances?", a: "Absolutely not. Prakrithi Roots is a 100% natural, chemical-free hair oil. We never use parabens, sulfates, silicones, mineral oil, or synthetic fragrances." },
  { q: "Can I use this oil if I have dandruff?", a: "Yes, ingredients like Aloe Vera and Tulsi possess natural antibacterial and soothing properties that help maintain a healthy, flake-free scalp." },
  { q: "Is it safe for chemically treated or colored hair?", a: "Yes, being 100% natural and free from harsh chemicals, it is perfectly safe to use on colored or treated hair. In fact, it deeply nourishes and repairs damaged hair strands." },
];

const reviews = [
  { name: "Anjali M.", place: "Bengaluru", text: "My hair fall reduced dramatically in 3 weeks. It smells like a real Kerala kitchen — warm and grounding.", rating: 5 },
  { name: "Rahul K.", place: "Kochi", text: "Non-sticky and light. I use it twice a week and my scalp finally feels calm.", rating: 5 },
  { name: "Priya S.", place: "Chennai", text: "Grandma-approved. This is the closest I've found to home-made naadan enna.", rating: 5 },
  { name: "Vishnu P.", place: "Calicut", text: "Beautiful bottle, honest formula. You can smell the tulsi and hibiscus from the first drop.", rating: 5 },
];

const productDetails = [
  { label: "Product Name", value: "Prakrithi Roots Herbal Hair Oil" },
  { label: "Volume", value: "100 ml" },
  { label: "Packaging", value: "Premium Glass Bottle" },
  { label: "Key Ingredients", value: "Coconut Oil, Amla, Bhringraj, Brahmi, Hibiscus, Tulsi, Aloe Vera, Henna, Indigo, Curry Leaves, Vetiver, Little Ironweed" },
  { label: "Shelf Life", value: "12 months from date of manufacture" },
  { label: "Manufactured By", value: "Loventra, Calicut, Kerala, India" },
  { label: "Suitable For", value: "Men & Women, All Hair Types" },
  { label: "Chemical Free", value: "No Parabens, No Silicones, No Mineral Oil, No Artificial Colors or Fragrances" },
  { label: "Cruelty Free", value: "Yes — Not tested on animals" },
  { label: "Vegan", value: "Yes — 100% plant-based ingredients" },
];

/* ──────────────────────── SECTION DIVIDER ──────────────────────── */

function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--leaf)] font-medium">{tag}</span>
      <h2 className="mt-2 text-3xl font-medium sm:text-4xl text-foreground">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

/* ──────────────────────── MAIN COMPONENT ──────────────────────── */

function ProductPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-20">

        {/* ── Breadcrumb ── */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-[color:var(--leaf)] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Product</span>
        </nav>

        {/* ══════════════════════════════════════════════════════════
            HERO — Product Image + Details
           ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Product Media */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center rounded-3xl glass p-8 sm:p-14 overflow-hidden border border-border/50"
          >
            <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-[color:var(--leaf)]/10 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-[oklch(0.85_0.14_148)]/15 blur-3xl" />
            <div className="relative z-10 flex flex-col items-center">
              <motion.img
                src="/prakrithi-roots-herbal-hair-oil-bottle.webp"
                alt="Prakrithi Roots Herbal Hair Oil bottle, 100ml"
                className="h-[360px] sm:h-[460px] w-auto object-contain animate-float-bottle"
                style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.25))" }}
              />
              <div className="mt-6 flex items-center gap-2 rounded-full bg-background/80 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground border border-border/60">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                In Stock • 100ml Authentic Glass Bottle
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--leaf)] mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              100% Ayurvedic Formula
            </div>
            <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-foreground leading-[1.15]">
              Prakrithi Roots <br />
              <span className="italic text-[color:var(--leaf)] font-display">Herbal Hair Oil</span>
            </h1>
            <p className="mt-2 text-sm font-medium text-[color:var(--leaf)]">
              For Men & Women • Supports Hair Growth & Reduces Hair Fall • 100 ml
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex text-amber-500">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-lg">{star}</span>
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">4.9 / 5.0</span>
              <span className="text-sm text-muted-foreground">• Verified Customer Favorite</span>
            </div>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-4xl font-semibold text-foreground">₹{PRODUCT_PRICE}</span>
              <span className="text-sm text-muted-foreground line-through">₹{ORIGINAL_PRICE}</span>
              <span className="rounded-full bg-[color:var(--leaf)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--leaf)]">
                Save {SAVINGS_PERCENTAGE}%
              </span>
            </div>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Prakrithi Roots Herbal Hair Oil is a natural herbal hair oil made with 12 carefully selected herbs infused in wood-pressed coconut oil. Crafted in Kerala, this traditional-inspired hair oil is designed to support a simple, nourishing hair-care routine.
            </p>
            <ul className="mt-6 space-y-2.5">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-foreground/90">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--leaf)]/15 text-[color:var(--leaf)]">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={AMAZON_PRODUCT_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full gradient-leaf px-8 py-4 text-base font-medium text-[color:var(--cream)] shadow-bottle transition-transform hover:scale-105"
              >
                <span>Buy Now on Amazon</span>
                <span className="text-lg">→</span>
              </a>
              <Link
                to="/ingredients"
                className="flex items-center justify-center rounded-full glass px-6 py-4 text-sm font-medium text-[color:var(--leaf)] transition hover:bg-white/80"
              >
                Explore Ingredients
              </Link>
            </div>
            <div className="mt-8 pt-6 border-t border-border flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[color:var(--leaf)]" />
                <span>Quality Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-[color:var(--leaf)]" />
                <span>Made in Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-[color:var(--leaf)]" />
                <span>Cruelty Free</span>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 1 — Introduction
           ══════════════════════════════════════════════════════════ */}
        <section id="introduction" className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--leaf)] mb-6">
              <Leaf className="h-3.5 w-3.5" />
              Rooted in Tradition
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-foreground leading-tight">
              Nature's answer to <em className="text-[color:var(--leaf)] font-display">modern hair problems</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Prakrithi Roots Herbal Hair Oil is a handcrafted Ayurvedic formulation born from the traditional Kerala practice of slow-cooking potent herbs in pure coconut oil. Each bottle carries the wisdom of generations — designed to reduce hair fall, nourish dry scalps, prevent premature greying, and restore your hair's natural strength and shine.
            </p>
            <p className="mt-4 text-base text-muted-foreground/80">
              Whether you're dealing with thinning hair, a sensitive scalp, or simply want a healthier, chemical-free hair care ritual — Prakrithi Roots is for you. Made for men and women of all hair types.
            </p>
          </motion.div>
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[color:var(--leaf)]/20 to-transparent" />
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2 — What Makes Prakrithi Roots Different?
           ══════════════════════════════════════════════════════════ */}
        <section id="what-makes-different" className="mt-28">
          <SectionHeader
            tag="Why Prakrithi Roots"
            title="What Makes Prakrithi Roots Herbal Hair Oil Different?"
            subtitle="Not all hair oils are made equal. Here's what sets us apart from mass-produced alternatives."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl flex flex-col items-start hover:shadow-soft transition"
                >
                  <div className="h-12 w-12 rounded-xl gradient-leaf flex items-center justify-center text-[color:var(--cream)] mb-4 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3 — 12 Natural Ingredients
           ══════════════════════════════════════════════════════════ */}
        <section id="ingredients" className="mt-28">
          <SectionHeader
            tag="The Formula"
            title="12 Natural Ingredients"
            subtitle="Every ingredient is chosen for a purpose — slow-infused for weeks in wood-pressed coconut oil."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ingredients.map((it, i) => (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group glass p-5 rounded-2xl flex items-start gap-4 hover:shadow-soft transition"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[color:var(--leaf)]/10 text-2xl">
                  {it.emoji}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{it.tag}</p>
                  <h3 className="text-base font-semibold text-foreground mt-0.5">
                    {it.link ? (
                      <Link to={it.link} className="hover:text-[color:var(--leaf)] transition underline decoration-[color:var(--leaf)]/30 underline-offset-4">
                        {it.name}
                      </Link>
                    ) : (
                      it.name
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/ingredients"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--leaf)] px-8 py-3.5 text-sm font-medium text-[color:var(--leaf)] transition hover:bg-[color:var(--leaf)] hover:text-[color:var(--cream)] shadow-sm"
            >
              Explore all 12 ingredients →
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4 — Benefits of the Herbal Hair Oil
           ══════════════════════════════════════════════════════════ */}
        <section id="benefits" className="mt-28">
          <SectionHeader
            tag="Why It Works"
            title="Benefits of the Herbal Hair Oil"
            subtitle="Consistent use delivers visible improvements — rooted results, felt in weeks."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsData.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass p-6 rounded-2xl hover:shadow-soft transition group"
                >
                  <div className="h-11 w-11 rounded-xl gradient-leaf flex items-center justify-center text-[color:var(--cream)] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/benefits"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--leaf)] px-8 py-3.5 text-sm font-medium text-[color:var(--leaf)] transition hover:bg-[color:var(--leaf)] hover:text-[color:var(--cream)] shadow-sm"
            >
              Explore the benefits of Prakrithi Roots Herbal Hair Oil →
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 5 — How the Hair Oil Is Made
           ══════════════════════════════════════════════════════════ */}
        <section id="how-its-made" className="mt-28">
          <SectionHeader
            tag="The Process"
            title="How the Hair Oil Is Made"
            subtitle="A 3-week ritual of patience and care — no shortcuts, no synthetics."
          />
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-[color:var(--leaf)]/40 via-[color:var(--leaf)]/20 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {processSteps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: idx * 0.12 }}
                    className="glass p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col sm:flex-row gap-6 items-start sm:ml-14"
                  >
                    {/* Step number badge — sits on timeline */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl gradient-leaf text-[color:var(--cream)] shadow-sm font-semibold text-lg sm:absolute sm:-left-[4.25rem] sm:top-6">
                      {item.step}
                    </div>
                    <div className="flex-1 sm:pl-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-5 w-5 text-[color:var(--leaf)]" />
                        <h3 className="text-xl sm:text-2xl font-medium text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-base">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 6 — How to Use Prakrithi Roots Hair Oil
           ══════════════════════════════════════════════════════════ */}
        <section id="how-to-use" className="mt-28">
          <SectionHeader
            tag="Ayurvedic Ritual"
            title="How to Use Prakrithi Roots Hair Oil"
            subtitle="A simple 4-step ritual for maximum absorption and root revitalization."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {howToUseSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass p-6 rounded-2xl flex gap-5 items-start hover:shadow-soft transition"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl gradient-leaf text-[color:var(--cream)] shadow-sm font-semibold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="h-4 w-4 text-[color:var(--leaf)]" />
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/how-to-use"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--leaf)] px-8 py-3.5 text-sm font-medium text-[color:var(--leaf)] transition hover:bg-[color:var(--leaf)] hover:text-[color:var(--cream)] shadow-sm"
            >
              Read the complete guide to using herbal hair oil →
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 7 — Who Can Use It?
           ══════════════════════════════════════════════════════════ */}
        <section id="who-can-use" className="mt-28">
          <SectionHeader
            tag="For Everyone"
            title="Who Can Use It?"
            subtitle="Prakrithi Roots is formulated to be gentle yet effective for all."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {suitability.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass p-5 rounded-2xl flex items-start gap-4 hover:shadow-soft transition"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--leaf)]/15 text-[color:var(--leaf)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{s.label}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 8 — Frequently Asked Questions
           ══════════════════════════════════════════════════════════ */}
        <section id="faq" className="mt-28">
          <SectionHeader
            tag="Questions"
            title="Frequently Asked Questions"
          />
          <div className="mx-auto max-w-3xl divide-y divide-[color:var(--border)] rounded-3xl bg-card px-2 shadow-soft">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="px-6">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-display text-lg">{f.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full gradient-leaf text-[color:var(--cream)]"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--leaf)] px-8 py-3.5 text-sm font-medium text-[color:var(--leaf)] transition hover:bg-[color:var(--leaf)] hover:text-[color:var(--cream)] shadow-sm"
            >
              View all frequently asked questions →
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 9 — Customer Reviews
           ══════════════════════════════════════════════════════════ */}
        <section id="reviews" className="mt-28">
          <SectionHeader
            tag="Loved By"
            title="Customer Reviews"
            subtitle="Real hair. Real stories. Hear from people who've experienced the Prakrithi Roots difference."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <motion.figure
                key={r.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative rounded-3xl bg-card p-8 shadow-soft"
              >
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <blockquote className="mt-4 font-display text-xl leading-snug">"{r.text}"</blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  — {r.name}, <span className="italic">{r.place}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 10 — Product Details
           ══════════════════════════════════════════════════════════ */}
        <section id="product-details" className="mt-28">
          <SectionHeader
            tag="Specifications"
            title="Product Details"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl rounded-3xl bg-card shadow-soft overflow-hidden"
          >
            <div className="divide-y divide-border">
              {productDetails.map((d, i) => (
                <div
                  key={d.label}
                  className={`flex flex-col sm:flex-row gap-2 sm:gap-0 px-6 py-4 ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}
                >
                  <div className="sm:w-1/3 flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{d.label}</span>
                  </div>
                  <div className="sm:w-2/3">
                    <span className="text-sm text-muted-foreground">{d.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 11 — Where to Buy
           ══════════════════════════════════════════════════════════ */}
        <section id="where-to-buy" className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl gradient-leaf p-8 sm:p-12 text-[color:var(--cream)] shadow-bottle relative overflow-hidden"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/90 mb-6">
                <ShoppingCart className="h-3.5 w-3.5" />
                Shop Now
              </div>
              <h2 className="text-3xl sm:text-4xl font-medium">Where to Buy Prakrithi Roots</h2>
              <p className="mt-4 text-white/80 leading-relaxed text-sm sm:text-base">
                Prakrithi Roots Herbal Hair Oil is currently available exclusively on Amazon India. Every bottle is handcrafted in small batches and shipped directly from Calicut, Kerala.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  <span>Free delivery on eligible orders</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Ships from Calicut, Kerala</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Freshly prepared batches</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={AMAZON_PRODUCT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[color:var(--cream)] px-8 py-3.5 text-base font-medium text-[color:var(--leaf)] transition hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Buy on Amazon India →
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/how-to-use" className="rounded-full bg-white/15 backdrop-blur px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/25">
                  How to Use →
                </Link>
                <Link to="/benefits" className="rounded-full bg-white/15 backdrop-blur px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/25">
                  Full Benefits
                </Link>
                <Link to="/our-story" className="rounded-full bg-white/15 backdrop-blur px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/25">
                  Our Story
                </Link>
                <Link to="/faq" className="rounded-full bg-white/15 backdrop-blur px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/25">
                  FAQ
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </PageLayout>
  );
}
