import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
const bottle = { url: "/bottle.png" };
import FloatingLeaves from "./FloatingLeaves";
import { PRODUCT_PRICE } from "../lib/config";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 80, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 80, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-20 sm:pt-28 animate-bg-shift">
      <FloatingLeaves />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-6 pb-16 sm:gap-8 lg:grid-cols-2 lg:gap-4">
        {/* Copy */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--leaf)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--leaf)]" />
            The Best Herbal Hair Oil
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-5 text-4xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl"
          >
            Prakrithi Roots
            <span className="block italic text-[color:var(--leaf)]">Herbal Hair Oil</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground lg:mx-0"
          >
            The best hair oil for men and women. Handcrafted from the hills of Kerala — Amla, Tulsi, Aloe Vera,
            Hibiscus & Bhringraj slow-infused in pure coconut oil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href="https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-full gradient-leaf px-7 py-3.5 text-sm font-medium text-[color:var(--cream)] shadow-bottle transition-transform hover:scale-105 sm:px-8 sm:py-4"
            >
              <span className="relative z-10">Shop Now — ₹{PRODUCT_PRICE}</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#story"
              className="rounded-full glass px-7 py-3.5 text-sm font-medium text-[color:var(--leaf)] transition hover:bg-white/70 sm:px-8 sm:py-4"
            >
              Discover the story →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-muted-foreground lg:justify-start"
          >
            <span>No Parabens</span><span className="opacity-40">•</span>
            <span>No Silicones</span><span className="opacity-40">•</span>
            <span>Cruelty Free</span>
          </motion.div>
        </div>

        {/* Bottle */}
        <motion.div
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
          className="relative mx-auto flex h-[340px] w-full items-center justify-center sm:h-[460px] lg:h-[560px]"
        >
          {/* Glow disc */}
          <div className="absolute h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.13_148/0.35),transparent_70%)] blur-2xl sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px]" />
          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-[color:var(--leaf)]/25 sm:h-[400px] sm:w-[400px] lg:h-[440px] lg:w-[440px]"
          />
          <div
            className="animate-float-bottle relative"
            style={{ filter: "drop-shadow(0 40px 40px oklch(0.30 0.07 148 / 0.5))" }}
          >
            <img
              src={bottle.url}
              alt="Prakrithi Roots Herbal Hair Oil"
              className="relative z-10 h-[300px] w-auto object-contain sm:h-[420px] lg:h-[520px]"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-[color:var(--leaf)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
