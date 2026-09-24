import { GraduationCap, Languages } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education, languages } from "../data";

export default function Education() {
  return (
    <section className="relative mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-36">
      <SectionHeading index="06" eyebrow="Background / Credentials" title="Education &" accent="languages" />

      <div className="mt-16 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="group flex h-full flex-col justify-between border border-line bg-panel/40 p-8 transition-colors duration-500 hover:border-lime/40 md:p-10" data-hover>
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-ink text-lime">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="font-mono text-xs tracking-[0.2em] text-dim">{education.period}</span>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold tracking-tight text-cream md:text-3xl">{education.degree}</h3>
              <p className="mt-3 font-serif text-xl italic text-mute">{education.school}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group flex h-full flex-col justify-between border border-line bg-panel/40 p-8 transition-colors duration-500 hover:border-lime/40 md:p-10" data-hover>
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-line bg-ink text-lime">
                <Languages className="h-6 w-6" />
              </div>
              <span className="font-mono text-xs tracking-[0.2em] text-dim">02 languages</span>
            </div>
            <div className="mt-12 space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-baseline justify-between border-b border-line/60 pb-4">
                  <span className="text-2xl font-bold tracking-tight text-cream md:text-3xl">{lang.name}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-lime">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
