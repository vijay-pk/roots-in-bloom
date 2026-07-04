import { motion } from "framer-motion";
import bottle from "@/assets/bottle.asset.json";

export default function ShopCTA() {
  return (
    <section id="shop" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] gradient-leaf p-10 text-[color:var(--cream)] shadow-bottle sm:p-16"
        >
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[oklch(0.9_0.12_82)] opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[oklch(0.85_0.14_148)] opacity-20 blur-3xl" />

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] opacity-70">Limited batch • 100ml</span>
              <h2 className="mt-4 text-4xl sm:text-5xl">
                Bring the ritual<br />home today.
              </h2>
              <p className="mt-4 max-w-md text-white/80">
                Each bottle is hand-filled and numbered in Calicut. Free shipping across India on your first order.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://amzn.in/d/03o8vO5r"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[color:var(--cream)] px-8 py-4 text-sm font-medium text-[color:var(--leaf)] shadow-soft transition-transform hover:scale-105"
                >
                  Buy on Amazon — ₹325
                </a>
                <a
                  href="mailto:prakrithiroots@gmail.com"
                  className="rounded-full border border-white/40 px-8 py-4 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  Contact us
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <motion.img
                src={bottle.url}
                alt="Prakrithi Roots bottle"
                className="h-[400px] w-auto object-contain animate-float-bottle"
                style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.35))" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
