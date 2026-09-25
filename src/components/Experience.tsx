import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line bg-panel/20" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeading index="03" eyebrow="Career / Timeline" title="Where I've" accent="shipped code" id="experience-heading" />

        <div className="mt-16">
          {experience.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group grid gap-8 border-t border-line py-12 transition-colors duration-500 last:border-b hover:bg-panel/40 md:py-16 lg:grid-cols-12 lg:gap-6"
              itemScope
              itemType="https://schema.org/JobPosting"
            >
              {/* left meta */}
              <div className="lg:col-span-3 lg:pl-4">
                <div className="font-mono text-sm text-lime">[ {job.index} ]</div>
                <time itemProp="datePosted" className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-mute" dateTime={job.period}>{job.period}</time>
                <div className="mt-1.5 inline-block rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
                  {job.type}
                </div>
              </div>

              {/* content */}
              <div className="lg:col-span-9 lg:pr-4" itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 itemProp="title" className="text-3xl font-bold tracking-tight text-cream transition-colors group-hover:text-lime md:text-4xl">
                    {job.role}
                  </h3>
                  <span itemProp="name" className="font-serif text-xl italic text-mute">{job.company}</span>
                </div>

                <ul itemProp="description" className="mt-8 grid gap-x-10 gap-y-3.5 md:grid-cols-2">
                  {job.points.map((point) => (
                    <li key={point.slice(0, 24)} className="flex items-start gap-3 text-sm leading-relaxed text-mute">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      itemProp="skills"
                      className="rounded-full border border-line bg-ink/60 px-3 py-1.5 font-mono text-[11px] tracking-wide text-mute"
                    >
                      {tag}
                    </span>
                  ))}
                  <ArrowUpRight className="ml-auto h-5 w-5 text-dim transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-dim">
            total — <span className="text-lime">4+ years</span> of production development
          </p>
        </Reveal>
      </div>
    </section>
  );
}
