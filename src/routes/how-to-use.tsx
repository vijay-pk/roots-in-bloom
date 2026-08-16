import { createFileRoute, Link } from "@tanstack/react-router";
import PageLayout from "@/components/PageLayout";
import { Sparkles, Clock, Flame, ShowerHead } from "lucide-react";

export const Route = createFileRoute("/how-to-use")({
  head: () => ({
    meta: [
      { title: "How to Use Herbal Hair Oil for Maximum Growth | Prakrithi Roots" },
      {
        name: "description",
        content:
          "Step-by-step guide on how to apply Prakrithi Roots Ayurvedic hair oil. Learn warming methods, scalp massage techniques, and optimal leave-in durations for best results.",
      },
    ],
  }),
  component: HowToUsePage,
});

const steps = [
  {
    step: "01",
    icon: Flame,
    title: "Warm the Oil Gently (Optional)",
    description:
      "Pour a small amount (1-2 tablespoons) into a small heat-safe bowl and place it in warm water (double boiler method). Warm oil penetrates deeper into the scalp cuticle.",
    tip: "Do not microwave or heat directly over a high flame to preserve delicate botanical nutrients.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "Section & Massage Scalp",
    description:
      "Part your hair in sections. Use your fingertips to apply oil directly onto the scalp. Gently massage in circular motions for 5 to 10 minutes to stimulate blood circulation to the hair follicles.",
    tip: "Avoid aggressive rubbing with nails; use soft finger pads.",
  },
  {
    step: "03",
    icon: Clock,
    title: "Coat Hair Strands to Ends",
    description:
      "Smooth a few remaining drops along the length of your hair down to the tips to seal split ends, reduce frizz, and lock in moisture.",
    tip: "Pay extra attention to dry or damaged ends.",
  },
  {
    step: "04",
    icon: ShowerHead,
    title: "Leave-in & Gentle Rinse",
    description:
      "Leave the oil on for a minimum of 45–60 minutes, or overnight for intensive deep nourishment. Wash off thoroughly using a mild, sulphate-free shampoo.",
    tip: "Use 2–3 times a week consistently for at least 4–8 weeks for noticeable results.",
  },
];

function HowToUsePage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--leaf)] font-medium">
            Ayurvedic Ritual
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-medium text-foreground">
            How to Use Prakrithi Roots Oil
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Follow this simple step-by-step ritual to maximize absorption and stimulate strong root rejuvenation.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass p-6 sm:p-8 rounded-2xl relative overflow-hidden transition hover:shadow-soft flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl gradient-leaf text-[color:var(--cream)] shadow-sm font-semibold text-lg">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-[color:var(--leaf)]" />
                    <h2 className="text-xl sm:text-2xl font-medium text-foreground">{item.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                    {item.description}
                  </p>
                  <div className="rounded-xl bg-[color:var(--leaf)]/10 px-4 py-2.5 text-xs sm:text-sm text-[color:var(--leaf)] font-medium">
                    💡 <strong>Tip:</strong> {item.tip}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center rounded-3xl gradient-leaf p-8 sm:p-10 text-[color:var(--cream)] shadow-bottle">
          <h3 className="text-2xl sm:text-3xl font-medium">Ready to start your hair ritual?</h3>
          <p className="mt-2 text-white/80 text-sm sm:text-base max-w-lg mx-auto">
            Start experiencing the traditional Kerala hair care ritual handcrafted with 100% natural herbs.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[color:var(--cream)] px-7 py-3 text-sm font-medium text-[color:var(--leaf)] transition hover:scale-105"
            >
              Order on Amazon →
            </a>
            <Link
              to="/product"
              className="rounded-full bg-white/15 backdrop-blur px-6 py-3 text-sm font-medium text-white transition hover:bg-white/25"
            >
              View Product Details
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
