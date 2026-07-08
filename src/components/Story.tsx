import { motion } from "framer-motion";

export default function Story() {
  const words = "Rooted in Kerala. Grown from grandmother's recipes. Bottled with intention.".split(" ");
  return (
    <section id="story" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--leaf)]">Our Story</span>
        <h2 className="mt-6 font-display text-4xl leading-tight text-balance sm:text-6xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="mr-3 inline-block"
            >
              {w === "grandmother's" || w === "Kerala." || w === "intention." ? (
                <em className="text-[color:var(--leaf)]">{w}</em>
              ) : (
                w
              )}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground"
        >
          For generations, families in Kerala have simmered herbs in coconut oil under the sun.
          Prakrithi Roots keeps that ritual alive — no shortcuts, no synthetics, just the slow
          patience of nature.
        </motion.p>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { k: "12", v: "Herbs" },
            { k: "100%", v: "Natural" },
            { k: "0", v: "Chemicals" },
            { k: "3wk", v: "Slow-infused" },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl glass p-6"
            >
              <div className="font-display text-4xl text-[color:var(--leaf)]">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
