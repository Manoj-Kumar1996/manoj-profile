import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { CheckCircle2, FileSearch, Gauge, Globe } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { auditChecks, auditScores, seoCapabilities } from "../data";

const R = 56;
const C = 2 * Math.PI * R;

function SeoGauge({ value }: { value: number }) {
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
    <div ref={ref} className="relative h-36 w-36 shrink-0">
      <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
        <circle cx="70" cy="70" r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="10" />
        <motion.circle
          cx="70" cy="70" r={R} fill="none" stroke="#c8f542" strokeWidth="10" strokeLinecap="round"
          strokeDasharray={C}
          initial={{ strokeDashoffset: C }}
          whileInView={{ strokeDashoffset: C * (1 - value / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-4xl font-semibold tabular-nums text-cream">{display}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-lime">SEO score</span>
      </div>
    </div>
  );
}

export default function SeoSection() {
  const gauges = auditScores.filter((s) => s.label !== "SEO");

  return (
    <section id="seo" className="relative border-t border-line bg-panel/20">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeading index="05" eyebrow="SEO / Performance" title="Built to be" accent="found" />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* capabilities */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="max-w-lg text-lg leading-relaxed text-mute">
                Most developers stop at "it works." I ship with{" "}
                <span className="text-cream">search engines in the room</span> — auditing and fixing the
                technical details that decide whether a site gets indexed, crawled and ranked.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {seoCapabilities.map((cap, i) => (
                <Reveal key={cap} delay={0.04 * i} y={16}>
                  <div className="flex items-center gap-3 border-b border-line/60 py-3 text-sm text-mute transition-colors hover:text-cream">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-lime/80" />
                    {cap}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-mute">
                <FileSearch className="h-3.5 w-3.5 text-lime" /> Google Search Console
              </span>
              <span className="flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-mute">
                <Gauge className="h-3.5 w-3.5 text-lime" /> Core Web Vitals
              </span>
              <span className="flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-mute">
                <Globe className="h-3.5 w-3.5 text-lime" /> Schema.org
              </span>
            </Reveal>
          </div>

          {/* audit card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
                {/* window chrome */}
                <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 font-mono text-[11px] tracking-wider text-dim">
                    seo-audit — <span className="text-lime">client-site.com</span>
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-8">
                    <SeoGauge value={100} />
                    <div className="min-w-[200px] flex-1 space-y-4">
                      {gauges.map((g, i) => (
                        <div key={g.label}>
                          <div className="mb-1.5 flex justify-between font-mono text-[11px] uppercase tracking-[0.15em]">
                            <span className="text-mute">{g.label}</span>
                            <span className="text-cream">{g.value}</span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                            <motion.div
                              className="h-full rounded-full bg-lime"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${g.value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.4, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="my-7 h-px bg-line" />

                  <div className="space-y-3">
                    {auditChecks.map((check, i) => (
                      <motion.div
                        key={check.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 + i * 0.12, duration: 0.5 }}
                        className="flex items-center justify-between rounded-lg border border-line/70 bg-ink/50 px-4 py-3"
                      >
                        <span className="flex items-center gap-3 text-sm text-mute">
                          <CheckCircle2 className="h-4 w-4 text-lime" />
                          {check.label}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-lime">
                          {check.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
