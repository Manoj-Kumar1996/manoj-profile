import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
      <SectionHeading index="02" eyebrow="Capabilities / Toolbox" title="The full-stack" accent="arsenal" />

      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (gi % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden border border-line bg-panel/40 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-lime/40 hover:bg-panel"
            data-hover
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-20"
              style={{ background: "#c8f542" }}
            />
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-ink text-lime">
                <group.icon className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-dim">0{gi + 1}</span>
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-cream">{group.title}</h3>
            <p className="mt-1.5 text-sm text-mute">{group.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line bg-ink/60 px-3 py-1.5 font-mono text-[11px] tracking-wide text-mute transition-colors duration-300 hover:border-lime/50 hover:text-lime"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* filler card */}
        <Reveal delay={0.2} className="flex">
          <div className="flex w-full flex-col justify-between border border-lime/25 bg-lime-dim p-7">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-lime">// philosophy</p>
            <p className="mt-6 text-2xl font-medium leading-snug text-cream">
              Right tool for the job —{" "}
              <span className="font-serif italic text-lime">Laravel</span> for heavy lifting,{" "}
              <span className="font-serif italic text-lime">React</span> for delight,{" "}
              <span className="font-serif italic text-lime">SEO</span> for growth.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
