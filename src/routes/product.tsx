import { createFileRoute, Link } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import { PRODUCT_PRICE, ORIGINAL_PRICE, SAVINGS_PERCENTAGE } from "@/lib/config";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Sparkles, Leaf, Droplets, Heart } from "lucide-react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Prakrithi Roots Ayurvedic Herbal Hair Oil (100ml) | 100% Natural" },
      {
        name: "description",
        content:
          "Buy Prakrithi Roots Herbal Hair Oil handcrafted in Kerala. Slow-infused with 12 Ayurvedic herbs in pure cold-pressed coconut oil. Reduces hair fall & promotes natural hair growth.",
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

function ProductPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-[color:var(--leaf)] transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground font-medium">Product</span>
        </nav>

        {/* Main Product Hero */}
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
                src="/bottle.png"
                alt="Prakrithi Roots Ayurvedic Herbal Hair Oil 100ml"
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
              A time-honored blend of 12 Ayurvedic botanicals slow-cooked in pure coconut oil over gentle heat. Formulated to target hair thinning, nourish sensitive scalps, and promote strong root revitalization.
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
                href="https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947"
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

        {/* Feature Grid */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--leaf)] font-medium">
              Why Prakrithi Roots
            </span>
            <h2 className="mt-2 text-3xl font-medium sm:text-4xl">What Makes Our Hair Oil Special</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="glass p-6 rounded-2xl flex flex-col items-start hover:shadow-soft transition">
                  <div className="h-12 w-12 rounded-xl gradient-leaf flex items-center justify-center text-[color:var(--cream)] mb-4 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Route Navigation Cards */}
        <div className="mt-20 rounded-3xl gradient-leaf p-8 sm:p-12 text-[color:var(--cream)] shadow-bottle">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-medium">Ready to experience pure hair transformation?</h2>
            <p className="mt-4 text-white/80 leading-relaxed text-sm sm:text-base">
              Learn how our ritual works, explore the hand-picked herbs, or read about our journey from home remedies to a trusted brand.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/how-to-use" className="rounded-full bg-[color:var(--cream)] px-6 py-2.5 text-sm font-medium text-[color:var(--leaf)] transition hover:scale-105">
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
        </div>
      </div>
    </PageLayout>
  );
}
