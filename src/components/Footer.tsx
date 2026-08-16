import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden glass-dark text-[color:var(--cream)]">
      {/* Root SVG */}
      <svg
        className="absolute inset-x-0 top-0 h-24 w-full"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,0 Q300,80 600,30 T1200,50 L1200,0 Z"
          fill="var(--cream)"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--cream)]/15">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2c4 4 6 8 6 12a6 6 0 1 1-12 0c0-4 2-8 6-12z" />
                </svg>
              </span>
              <span className="font-display text-2xl">Prakrithi Roots</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Handcrafted Ayurvedic hair oil, slow-infused in Calicut, Kerala. Made with love & care.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/product" className="hover:text-white transition">Product</Link></li>
              <li><Link to="/ingredients" className="hover:text-white transition">Ingredients</Link></li>
              <li><Link to="/benefits" className="hover:text-white transition">Benefits</Link></li>
              <li><Link to="/how-to-use" className="hover:text-white transition">How to Use</Link></li>
              <li><Link to="/our-story" className="hover:text-white transition">Our Story</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="/results" className="hover:text-white transition">Results</Link></li>
              <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/50">Contact & Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="mailto:prakrithiroots@gmail.com" className="hover:text-white transition">prakrithiroots@gmail.com</a></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-white transition">Shipping Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition">Refund Policy</Link></li>
              <li className="pt-4">
                <a href="https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947" target="_blank" rel="noreferrer" className="inline-block rounded-full bg-[color:var(--cream)] px-5 py-2 text-[color:var(--leaf)] font-medium shadow-soft transition hover:scale-105">
                  Buy on Amazon →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Prakrithi Roots. All rights reserved.</span>
          <span>Made with 🌿 in Kerala</span>
        </div>
      </div>
    </footer>
  );
}
