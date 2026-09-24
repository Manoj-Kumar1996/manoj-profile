import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Terminal, X } from "lucide-react";
import { profile } from "../data";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "SEO", href: "#seo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-line bg-ink/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-12">
          <a href="#top" className="group flex items-center gap-3" data-hover>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel text-lime transition-colors group-hover:border-lime/50">
              <Terminal className="h-4 w-4" />
            </span>
            <span className="font-mono text-sm font-medium tracking-widest text-cream">
              manoj<span className="text-lime">.dev</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative font-mono text-xs uppercase tracking-[0.2em] text-mute transition-colors hover:text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-transform duration-300 hover:scale-[1.04]"
            >
              Hire Me
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel text-cream lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[80] flex flex-col bg-ink/95 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-mono text-sm tracking-widest text-cream">
                manoj<span className="text-lime">.dev</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-panel text-cream"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {[...links, { label: "Contact", href: "#contact" }].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline gap-4 border-b border-line py-5"
                >
                  <span className="font-mono text-xs text-lime">0{i + 1}</span>
                  <span className="text-4xl font-bold uppercase tracking-tight text-cream transition-colors group-hover:text-lime">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </div>
            <div className="px-8 pb-10 font-mono text-xs uppercase tracking-[0.2em] text-mute">
              {profile.email} · {profile.phone}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
