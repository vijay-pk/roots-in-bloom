import { motion } from "framer-motion";

const Leaf = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
    <path
      d="M32 4 C 52 12, 60 30, 50 52 C 38 62, 18 58, 8 42 C 4 26, 14 10, 32 4 Z"
      fill="url(#leafGrad)"
      opacity="0.85"
    />
    <path d="M32 8 C 30 22, 30 40, 30 56" stroke="oklch(0.32 0.08 148)" strokeWidth="1" fill="none" opacity="0.5" />
    <defs>
      <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="oklch(0.62 0.11 148)" />
        <stop offset="100%" stopColor="oklch(0.32 0.08 148)" />
      </linearGradient>
    </defs>
  </svg>
);

export default function FloatingLeaves() {
  const leaves = [
    { top: "8%", left: "6%", size: 42, delay: 0, dur: 14 },
    { top: "18%", left: "88%", size: 34, delay: 2, dur: 11 },
    { top: "62%", left: "4%", size: 52, delay: 1, dur: 16 },
    { top: "75%", left: "92%", size: 38, delay: 3, dur: 13 },
    { top: "40%", left: "12%", size: 26, delay: 4, dur: 10 },
    { top: "35%", left: "82%", size: 30, delay: 1.5, dur: 12 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {leaves.map((l, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: l.top, left: l.left, width: l.size, height: l.size }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 20, -10, 0],
          }}
          transition={{ duration: l.dur, delay: l.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Leaf className="h-full w-full" />
        </motion.div>
      ))}
      {/* Sunlight blurs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[oklch(0.9_0.12_82)] opacity-40 blur-3xl animate-sun-pulse" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[oklch(0.72_0.13_148)] opacity-25 blur-3xl animate-sun-pulse" style={{ animationDelay: "3s" }} />
      {/* Pollen particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute h-1 w-1 rounded-full bg-[oklch(0.85_0.12_82)]"
          style={{ top: `${(i * 37) % 100}%`, left: `${(i * 53) % 100}%` }}
          animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 6 + (i % 5), delay: i * 0.4, repeat: Infinity }}
        />
      ))}
    </div>
  );
}
