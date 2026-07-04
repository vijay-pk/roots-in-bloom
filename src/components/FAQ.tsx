import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  { q: "How often should I use Prakrithi Roots?", a: "Two to three times a week. Apply on scalp, massage for 2–3 minutes, leave for 30 minutes and wash off with a mild shampoo." },
  { q: "Is it suitable for all hair types?", a: "Yes. The formula is balanced for men and women, curly to straight, oily to dry scalps." },
  { q: "When will I see results?", a: "Most customers notice reduced hair fall and a calmer scalp within 3–4 weeks of consistent use." },
  { q: "What's inside — and what's not?", a: "Coconut oil, Amla, Indigo, Bhringraj, Brahmi, Hibiscus, Aloe Vera, Henna, Tulsi, Curry leaves & other natural herbs. No parabens, no silicones, no mineral oil, no artificial colors." },
  { q: "Where is it made?", a: "Slow-infused and bottled by Loventra in Calicut, Kerala, India." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--leaf)]">Questions</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">Ask us anything.</h2>
        </div>

        <div className="mt-12 divide-y divide-[color:var(--border)] rounded-3xl bg-card px-2 shadow-soft">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="px-6">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
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
      </div>
    </section>
  );
}
