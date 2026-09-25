import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile, projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-40" aria-labelledby="projects-heading">
      <SectionHeading index="04" eyebrow="Selected Work / Builds" title="Projects that" accent="made it to prod" id="projects-heading" />

      <div className="mt-20 space-y-24 md:space-y-32">
        {projects.map((project, i) => {
          const flip = i % 2 === 1;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid items-center gap-10 lg:grid-cols-12"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              {/* big index behind */}
              <span className="text-stroke pointer-events-none absolute -top-14 select-none font-mono text-[7rem] font-bold leading-none opacity-60 md:-top-20 md:text-[10rem] lg:opacity-100"
                style={{ [flip ? "right" as string : "left" as string]: 0 }}
              >
                {project.index}
              </span>

              {/* image */}
              <div className={`relative lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                <div
                  className="relative overflow-hidden rounded-2xl border border-line bg-panel transition-colors duration-500 group-hover:border-lime/30"
                  data-hover
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category}`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    itemProp="image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-20" />
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    itemProp="codeRepository"
                    className="absolute right-5 top-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-lime text-ink opacity-0 transition-all duration-500 hover:scale-110 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
                {/* corner tag */}
                <span className="absolute -bottom-4 left-6 rounded-full border border-line bg-panel px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-lime shadow-xl">
                  {project.category}
                </span>
              </div>

              {/* text */}
              <div className={`lg:col-span-5 ${flip ? "lg:order-1 lg:pr-6" : "lg:pl-6"}`}>
                <h3 itemProp="name" className="text-3xl font-bold tracking-tight text-cream md:text-4xl">{project.title}</h3>
                <p itemProp="description" className="mt-4 leading-relaxed text-mute">{project.description}</p>

                <ul itemProp="featureList" className="mt-6 space-y-2.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-mute">
                      <Sparkles className="h-3.5 w-3.5 shrink-0 text-lime" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      itemProp="operatingSystem"
                      className="rounded-full border border-line bg-panel/60 px-3 py-1.5 font-mono text-[11px] tracking-wide text-cream transition-colors hover:border-lime/50 hover:text-lime"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <meta itemProp="applicationCategory" content="WebApplication" />
                <meta itemProp="operatingSystem" content="Web" />
                <meta itemProp="offers" content="Free" />
              </div>
            </motion.article>
          );
        })}
      </div>

      <Reveal className="mt-24 flex justify-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 rounded-full border border-line bg-panel/60 px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-cream transition-all duration-300 hover:border-lime/60 hover:text-lime"
        >
          <GithubIcon className="h-4 w-4" />
          Explore more on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>
    </section>
  );
}
