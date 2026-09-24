import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { BadgeCheck, Briefcase, Compass, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, stats } from "../data";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="group border border-line bg-panel/40 p-6 transition-colors duration-500 hover:border-lime/40 md:p-8">
      <div className="font-mono text-5xl font-semibold tabular-nums text-cream md:text-6xl">
        {display}
        <span className="text-lime">{suffix}</span>
      </div>
      <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mute">{label}</div>
    </div>
  );
}

const facts = [
  { icon: Briefcase, label: "Role", value: profile.role },
  { icon: MapPin, label: "Location", value: "India · Remote-friendly" },
  { icon: Compass, label: "Focus", value: "Laravel apps · React UIs · Technical SEO" },
  { icon: BadgeCheck, label: "Track Record", value: "50+ client websites shipped" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading index="01" eyebrow="About / Profile" title="Code that" accent="ships & ranks" />
            <Reveal delay={0.15} className="mt-10 space-y-4">
              {facts.map((f) => (
                <div key={f.label} className="flex items-center gap-4 border border-line bg-panel/40 px-5 py-4">
                  <f.icon className="h-4 w-4 shrink-0 text-lime" />
                  <span className="w-28 shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-dim">
                    {f.label}
                  </span>
                  <span className="text-sm text-cream">{f.value}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-2xl font-medium leading-snug text-cream md:text-[2.1rem] md:leading-[1.35]">
              I'm a <span className="font-serif italic text-lime">full-stack developer</span> who builds
              database-driven applications with <span className="text-lime">Laravel</span> backends and{" "}
              <span className="text-lime">React</span> frontends — e-commerce, real estate, healthcare and
              service platforms that stay fast, secure and searchable.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl leading-relaxed text-mute">
              Across <span className="text-cream">50+ client projects</span>, I've handled the complete
              lifecycle — backend architecture, database design, third-party API and payment gateway
              integration, responsive frontends, and deployment. A specialty of mine is{" "}
              <span className="text-cream">technical & on-page SEO</span>: fixing metadata, heading
              structures, canonicals, indexing and crawlability issues so applications perform for users{" "}
              <span className="font-serif italic text-lime">and</span> search engines.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-3 md:gap-4 xl:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.08 * i}>
                <Stat {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
