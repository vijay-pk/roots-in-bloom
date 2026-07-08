import { motion } from "framer-motion";

const reviews = [
  { name: "Anjali M.", place: "Bengaluru", text: "My hair fall reduced dramatically in 3 weeks. It smells like a real Kerala kitchen — warm and grounding.", rating: 5 },
  { name: "Rahul K.", place: "Kochi", text: "Non-sticky and light. I use it twice a week and my scalp finally feels calm.", rating: 5 },
  { name: "Priya S.", place: "Chennai", text: "Grandma-approved. This is the closest I've found to home-made naadan enna.", rating: 5 },
  { name: "Vishnu P.", place: "Calicut", text: "Beautiful bottle, honest formula. You can smell the tulsi and hibiscus from the first drop.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--leaf)]">Loved by</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">Real hair. Real stories.</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl bg-card p-8 shadow-soft"
            >
              <div className="flex gap-1 text-[color:var(--gold)]">
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
      </div>
    </section>
  );
}
