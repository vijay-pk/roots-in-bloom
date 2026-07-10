import { motion } from "framer-motion";
import { getRouteApi } from "@tanstack/react-router";
const bottle = { url: "/bottle.png" };

const route = getRouteApi("__root__");

export default function ShopCTA() {
  const loaderData = route.useLoaderData() as any;
  const price = loaderData?.price || "299";
  return (
    <section id="shop" className="relative py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] gradient-leaf p-8 text-[color:var(--cream)] shadow-bottle sm:rounded-[2.5rem] sm:p-16"
        >
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[oklch(0.9_0.12_82)] opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[oklch(0.85_0.14_148)] opacity-20 blur-3xl" />

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] opacity-70">Limited batch • 100ml</span>
              <h2 className="mt-4 text-3xl sm:text-5xl">
                Bring the ritual<br />home today.
              </h2>
              <p className="mt-4 max-w-md text-white/80">
                Each bottle is hand-filled and numbered in Calicut. Free shipping across India on your first order.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[color:var(--cream)] px-6 py-3.5 text-sm font-medium text-[color:var(--leaf)] shadow-soft transition-transform hover:scale-105 sm:px-8 sm:py-4"
                >
                  Buy on Amazon — ₹{price}
                </a>
                <a
                  href="mailto:prakrithiroots@gmail.com"
                  className="rounded-full border border-white/40 px-6 py-3.5 text-sm font-medium text-white/90 transition hover:bg-white/10 sm:px-8 sm:py-4"
                >
                  Contact us
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <motion.img
                src={bottle.url}
                alt="Prakrithi Roots bottle"
                className="h-[260px] w-auto object-contain animate-float-bottle sm:h-[400px]"
                style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.35))" }}
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
