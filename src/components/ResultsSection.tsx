import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, ZoomIn, X } from "lucide-react";
import { PRODUCT_PRICE } from "@/lib/config";

interface ResultItem {
  id: string;
  name: string;
  location: string;
  title: string;
  concern: string;
  duration: string;
  rating: number;
  imageSrc: string;
  alt: string;
  story: string;
  highlights: string[];
}

const RESULTS: ResultItem[] = [
  {
    id: "person-2",
    name: "Personal Journey / Founder",
    location: "Calicut, Kerala",
    title: "Frontal Bald Patch & Hairline Regrowth",
    concern: "Severe Bald Patch & Hair Thinning",
    duration: "Consistent Ayurvedic Ritual",
    rating: 5,
    imageSrc: "/results/person-2.jpeg",
    alt: "Before and After comparison showing full bald patch regrowth on temple",
    story:
      "After being diagnosed with health challenges and severe hormonal hair fall, a round bald patch developed near the front hairline. With regular massage of our handcrafted 12-herb Ayurvedic oil, new baby hairs sprouted and completely covered the affected patch with strong, healthy roots.",
    highlights: [
      "100% visible follicle reactivation on bald patch",
      "Restored thick, natural dark hairline",
      "No chemical side effects or scalp irritation",
    ],
  },
  {
    id: "person-1",
    name: "Customer Transformation",
    location: "Kerala, India",
    title: "Hair Density, Texture & Volume Restoration",
    concern: "Excessive Shedding & Frizzy Thinning",
    duration: "8-12 Weeks Regular Application",
    rating: 5,
    imageSrc: "/results/person-1.jpeg",
    alt: "Before and After comparison showing enhanced hair density, length, and texture",
    story:
      "Struggling with heavy daily shedding and dry, frizzy strands. Slow-infused Amla, Bhringraj, and pure coconut oil deeply nourished the hair cuticles, resulting in richer pigmentation, significantly reduced hair fall, and fuller, thicker hair volume from root to ends.",
    highlights: [
      "Significant reduction in daily hair fall",
      "Fuller, bouncier hair volume and defined texture",
      "Deeply moisturized scalp and natural healthy shine",
    ],
  },
];

export default function ResultsSection() {
  const [zoomImage, setZoomImage] = useState<ResultItem | null>(null);

  return (
    <section id="results" className="relative py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--leaf)] mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            Real Photo Evidence
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-foreground leading-tight">
            Real Transformations. <br />
            <span className="italic text-[color:var(--leaf)] font-display">Unfiltered Results.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Real before and after pictures from consistent use of Prakrithi Roots Herbal Hair Oil. 100% natural, slow-infused in Kerala.
          </p>
        </div>

        {/* 2 Persons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {RESULTS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl glass p-6 sm:p-8 border border-border/70 shadow-soft flex flex-col justify-between group hover:border-[color:var(--leaf)]/40 transition-all"
            >
              <div>
                {/* Header & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                      <span className="flex items-center gap-1 text-[11px] font-medium bg-[color:var(--leaf)]/15 text-[color:var(--leaf)] px-2.5 py-0.5 rounded-full">
                        <ShieldCheck className="h-3 w-3" /> Real Photo
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                  </div>

                  <div className="flex text-amber-500 text-sm">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>

                {/* Real Combined Before/After Image Container */}
                <div
                  onClick={() => setZoomImage(item)}
                  className="relative rounded-2xl overflow-hidden bg-black/5 border border-border/70 aspect-[4/3] sm:aspect-[16/11] mb-6 cursor-pointer group/img"
                  title="Click to view full size"
                >
                  <img
                    src={item.imageSrc}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                  />

                  {/* Left Pill: BEFORE */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-white/20 shadow-md">
                    ← Before
                  </div>

                  {/* Right Pill: AFTER */}
                  <div className="absolute top-3 right-3 bg-[color:var(--leaf)]/90 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-white/20 shadow-md">
                    After →
                  </div>

                  {/* Hover to Zoom indicator */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-background/90 backdrop-blur text-foreground px-4 py-2 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-lg">
                      <ZoomIn className="h-4 w-4 text-[color:var(--leaf)]" /> Click to Enlarge
                    </div>
                  </div>
                </div>

                {/* Case Story Details */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-foreground">{item.title}</h4>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic border-l-2 border-[color:var(--leaf)] pl-3">
                    "{item.story}"
                  </p>

                  <div className="space-y-2 pt-2">
                    {item.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90">
                        <CheckCircle2 className="h-4 w-4 text-[color:var(--leaf)] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>Concern: {item.concern}</span>
                <span className="font-medium text-[color:var(--leaf)]">{item.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl text-center border border-border/60">
            <div className="font-display text-4xl text-[color:var(--leaf)] font-bold">92%</div>
            <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Reduced Hair Fall in 3 Weeks</p>
          </div>
          <div className="glass p-6 rounded-2xl text-center border border-border/60">
            <div className="font-display text-4xl text-[color:var(--leaf)] font-bold">88%</div>
            <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">New Baby Hairs on Thinning Areas</p>
          </div>
          <div className="glass p-6 rounded-2xl text-center border border-border/60">
            <div className="font-display text-4xl text-[color:var(--leaf)] font-bold">100%</div>
            <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Natural Ayurvedic Ingredients</p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center rounded-3xl gradient-leaf p-8 sm:p-12 text-[color:var(--cream)] shadow-bottle">
          <h3 className="text-2xl sm:text-3xl font-medium">Ready to start your own hair recovery?</h3>
          <p className="mt-2 text-white/85 text-sm sm:text-base max-w-lg mx-auto">
            Order your 100ml authentic bottle handcrafted in Kerala.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[color:var(--cream)] px-8 py-3.5 text-sm font-medium text-[color:var(--leaf)] shadow-soft transition hover:scale-105"
            >
              Buy on Amazon — ₹{PRODUCT_PRICE} →
            </a>
            <Link
              to="/product"
              className="rounded-full bg-white/15 backdrop-blur px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/25"
            >
              View Product Details
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-background rounded-3xl overflow-hidden shadow-2xl border border-border"
          >
            <div className="p-4 sm:p-6 flex items-center justify-between border-b border-border">
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-foreground">{zoomImage.name}</h3>
                <p className="text-xs text-muted-foreground">{zoomImage.title}</p>
              </div>
              <button
                onClick={() => setZoomImage(null)}
                className="p-2 rounded-full glass hover:bg-black/10 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 flex justify-center bg-black/5">
              <img
                src={zoomImage.imageSrc}
                alt={zoomImage.alt}
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
