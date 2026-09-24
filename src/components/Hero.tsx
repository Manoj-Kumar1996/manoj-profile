import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Asterisk, Download, Mail, MapPin } from "lucide-react";
import { profile } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 2.2 } },
};
const item = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
};

const chips = [
  { label: "Laravel", className: "-left-8 top-10", delay: "0s", rot: "-6deg" },
  { label: "React.js", className: "-right-6 top-1/3", delay: "0.8s", rot: "4deg" },
  { label: "MySQL", className: "-left-6 bottom-24", delay: "1.6s", rot: "3deg" },
  { label: "Inertia.js", className: "-right-8 bottom-8", delay: "2.3s", rot: "-4deg" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* vertical grid lines */}
      <div className="pointer-events-none absolute inset-0 mx-auto flex max-w-[1440px] justify-between px-6 md:px-12">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="h-full w-px bg-line/60" />
        ))}
      </div>

      {/* glow */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(circle, #c8f542 0%, transparent 65%)" }}
      />

      <motion.div
        style={{ y: yText, opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-6 pt-32 md:px-12"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          {/* availability */}
          <motion.div variants={item} className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-panel/70 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-lime animate-ping-soft" />
              <span className="relative h-2 w-2 rounded-full bg-lime" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-mute">
              Available for freelance & full-time
            </span>
          </motion.div>

          {/* headline */}
          <h1 className="font-bold uppercase leading-[0.88] tracking-[-0.03em] text-cream">
            <motion.span variants={item} className="block text-[clamp(3.2rem,11.5vw,9.5rem)]">
              Manoj
            </motion.span>
            <motion.span variants={item} className="block text-[clamp(3.2rem,11.5vw,9.5rem)]">
              Kumar<span className="text-lime">.</span>
            </motion.span>
            <motion.span
              variants={item}
              className="mt-4 flex items-center gap-4 text-[clamp(1.6rem,4.5vw,3.4rem)] tracking-normal"
            >
              <Asterisk className="h-[0.9em] w-[0.9em] shrink-0 text-lime" />
              <span className="font-serif font-normal normal-case italic text-lime">full-stack</span>
              <span className="text-stroke">developer</span>
            </motion.span>
          </h1>

          {/* copy */}
          <motion.p variants={item} className="mt-8 max-w-xl text-base leading-relaxed text-mute md:text-lg">
            <span className="text-cream">4+ years</span> crafting production web applications with{" "}
            <span className="text-cream">PHP, Laravel, React.js & MySQL</span> — from database architecture
            and secure APIs to payment gateways, pixel-perfect UIs and{" "}
            <span className="text-cream">SEO that actually ranks</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-transform duration-300 hover:scale-[1.04]"
            >
              View Selected Work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-2 rounded-full border border-line bg-panel/60 px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cream transition-colors duration-300 hover:border-lime/60 hover:text-lime"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
            <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-dim">
              <MapPin className="h-3.5 w-3.5 text-lime" /> {profile.location} · IST (UTC +5:30)
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* portrait */}
      <motion.div
        style={{ y: yImg }}
        initial={{ opacity: 0, scale: 0.92, rotate: 8 }}
        animate={{ opacity: 1, scale: 1, rotate: 4 }}
        transition={{ duration: 1.2, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-6 top-28 z-[5] hidden w-[240px] md:block md:right-12 lg:w-[300px] xl:w-[340px]"
      >
        <div
            className="group relative overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(200,245,66,0.12),0_40px_80px_-20px_rgba(0,0,0,0.95)] transition-shadow duration-700 hover:shadow-[0_0_0_1px_rgba(200,245,66,0.35),0_40px_100px_-20px_rgba(0,0,0,0.95)]"
            data-hover
          >
            <img
              src="/images/manoj-kumar.png"
              alt="Manoj Kumar — Full-Stack Developer"
              className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
            {/* lime gradient vignette at bottom */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink via-ink/60 to-transparent px-4 pb-3 pt-16 font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="text-lime">$ whoami</span>
              <span className="text-cream/80">manoj_kumar</span>
            </div>
          </div>
        {chips.map((c) => (
          <span
            key={c.label}
            style={{ animationDelay: c.delay, ["--rot" as string]: c.rot }}
            className={`animate-floaty absolute ${c.className} rounded-full border border-line bg-panel/90 px-4 py-2 font-mono text-[11px] tracking-wider text-cream shadow-lg backdrop-blur`}
          >
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-lime align-middle" />
            {c.label}
          </span>
        ))}
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="relative z-10 mx-auto mb-6 mt-16 flex w-full max-w-[1440px] items-center justify-between px-6 font-mono text-[11px] uppercase tracking-[0.3em] text-dim md:px-12"
      >
        <span>scroll to explore</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-lime"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
        <span className="hidden md:inline">est. 2021 — present</span>
      </motion.div>

      {/* hidden resume anchor for semantics */}
      <a href="#contact" className="sr-only">
        <Download /> Download resume
      </a>
    </section>
  );
}
