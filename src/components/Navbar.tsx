import { useEffect, useState } from "react";

const links = [
  { href: "/#story", label: "Story" },
  { href: "/#ingredients", label: "Ingredients" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 sm:py-3" : "py-3 sm:py-6"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 sm:py-3 ${
          scrolled
            ? "glass shadow-soft mx-3 sm:mx-auto"
            : "bg-transparent"
        }`}
      >
        <a href="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full gradient-leaf shadow-glow transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[color:var(--cream)]" fill="currentColor">
              <path d="M12 2c4 4 6 8 6 12a6 6 0 1 1-12 0c0-4 2-8 6-12z" />
            </svg>
          </span>
          <span className="font-display text-lg tracking-tight">Prakrithi <span className="text-[color:var(--leaf)]">Roots</span></span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-foreground/75 transition hover:text-[color:var(--leaf)] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[color:var(--leaf)] after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947"
          target="_blank"
          rel="noreferrer"
          className="rounded-full gradient-leaf px-5 py-2 text-sm font-medium text-[color:var(--cream)] shadow-soft transition-transform hover:scale-105"
        >
          Shop Now
        </a>
      </nav>
    </header>
  );
}
