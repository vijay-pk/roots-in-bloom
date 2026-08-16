import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/product", label: "Product" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/benefits", label: "Benefits" },
  { href: "/how-to-use", label: "How to Use" },
  { href: "/our-story", label: "Our Story" },
  { href: "/blog", label: "Blog" },
  { href: "/results", label: "Results" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full gradient-leaf shadow-glow transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[color:var(--cream)]" fill="currentColor">
              <path d="M12 2c4 4 6 8 6 12a6 6 0 1 1-12 0c0-4 2-8 6-12z" />
            </svg>
          </span>
          <span className="font-display text-lg tracking-tight">Prakrithi <span className="text-[color:var(--leaf)]">Roots</span></span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className="relative text-sm text-foreground/80 transition hover:text-[color:var(--leaf)] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[color:var(--leaf)] after:transition-all hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947"
            target="_blank"
            rel="noreferrer"
            className="rounded-full gradient-leaf px-4 py-2 text-xs sm:text-sm font-medium text-[color:var(--cream)] shadow-soft transition-transform hover:scale-105"
          >
            Shop Now
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full glass lg:hidden text-foreground hover:text-[color:var(--leaf)] transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mx-4 mt-2 rounded-2xl glass p-5 shadow-bottle lg:hidden flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-foreground hover:text-[color:var(--leaf)] hover:bg-[color:var(--leaf)]/10 rounded-lg transition"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-border">
            <a
              href="https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947"
              target="_blank"
              rel="noreferrer"
              className="block text-center rounded-full gradient-leaf py-2.5 text-sm font-medium text-[color:var(--cream)]"
            >
              Buy on Amazon →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
