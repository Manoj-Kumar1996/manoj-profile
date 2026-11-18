import { useState, type FormEvent } from "react";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data";

const EMAILJS_SERVICE_ID = "service_4im87ph";
const EMAILJS_TEMPLATE_ID = "template_2aohvvb";
const EMAILJS_PUBLIC_KEY = "vXAGIRqtCUvBPDSu6";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India · Remote worldwide",
  },
];

export default function Contact() {
  const year = new Date().getFullYear();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSend(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  return (
    <footer id="contact" className="relative border-t border-line bg-panel/20">
      <div className="mx-auto max-w-[1440px] px-6 pt-28 md:px-12 md:pt-40">
        <SectionHeading index="07" eyebrow="Contact / Say hello" title="Have a project" accent="in mind?" />

        {/* lead form */}
        <Reveal className="mt-14">
          <form
            onSubmit={handleSend}
            className="grid gap-5 border border-line bg-panel/40 p-6 md:grid-cols-2 md:p-10"
          >
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-dim">Your name *</span>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full border border-line bg-ink/60 px-4 py-3.5 font-mono text-sm text-cream placeholder:text-dim focus:border-lime focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-dim">Email *</span>
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full border border-line bg-ink/60 px-4 py-3.5 font-mono text-sm text-cream placeholder:text-dim focus:border-lime focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-dim">Phone / WhatsApp</span>
              <input
                type="tel"
                name="phone"
                placeholder="+91 00000 00000"
                className="w-full border border-line bg-ink/60 px-4 py-3.5 font-mono text-sm text-cream placeholder:text-dim focus:border-lime focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-dim">Budget (₹ INR, optional)</span>
              <input
                type="text"
                name="budget"
                placeholder="e.g. ₹50,000"
                className="w-full border border-line bg-ink/60 px-4 py-3.5 font-mono text-sm text-cream placeholder:text-dim focus:border-lime focus:outline-none"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-dim">What do you need? *</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your website project — pages, features, timeline..."
                className="w-full resize-y border border-line bg-ink/60 px-4 py-3.5 font-mono text-sm text-cream placeholder:text-dim focus:border-lime focus:outline-none"
              />
            </label>
            <div className="flex flex-wrap items-center gap-4 md:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-lime px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-transform duration-300 hover:scale-[1.04] disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <Send className="h-3.5 w-3.5 animate-pulse" /> Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
              {status === "sent" && (
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-lime">
                  ✓ Message sent — reply within 24 hours
                </span>
              )}
              {status === "error" && (
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-red-400">
                  Failed to send — email {profile.email} directly
                </span>
              )}
              {status === "idle" && (
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim">
                  Replies within 24 hours
                </span>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal className="mt-14">
          <a
            href={`mailto:${profile.email}`}
            className="group block border-y border-line py-10 transition-colors duration-500 hover:bg-panel/50 md:py-14"
            data-hover
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <span className="text-[clamp(1.6rem,5.5vw,4.5rem)] font-bold uppercase leading-none tracking-tight text-cream transition-colors duration-300 group-hover:text-lime">
                Let's build something
              </span>
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-lime text-ink transition-transform duration-500 group-hover:rotate-45 md:h-24 md:w-24">
                <ArrowUpRight className="h-7 w-7 md:h-10 md:w-10" />
              </span>
            </div>
            <p className="mt-4 font-mono text-sm tracking-[0.1em] text-mute md:text-base">
              {profile.email}
            </p>
          </a>
        </Reveal>

        {/* channels */}
        <div className="grid gap-4 py-16 md:grid-cols-3">
          {channels.map((c, i) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <Reveal key={c.label} delay={0.08 * i}>
                <Wrapper
                  {...(c.href ? { href: c.href } : {})}
                  className="group flex h-full items-center gap-5 border border-line bg-panel/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-lime/40"
                  data-hover
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line bg-ink text-lime">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-dim">
                      {c.label}
                    </span>
                    <span className="mt-1 block truncate text-sm font-medium text-cream">{c.value}</span>
                  </span>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>

        {/* bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line py-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-dim">
            © {year} Manoj Kumar <span className="text-lime">/</span> Full-Stack Developer{" "}
            <a href="/privacy.html" className="ml-2 underline decoration-lime/40 transition-colors hover:text-lime">
              Privacy
            </a>
          </p>

          <div className="flex items-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel text-mute transition-all duration-300 hover:border-lime/60 hover:text-lime"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel text-mute transition-all duration-300 hover:border-lime/60 hover:text-lime"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="ml-2 flex h-11 items-center gap-2 rounded-full bg-lime px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-ink transition-transform duration-300 hover:scale-105"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Top
            </button>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-dim">
            PHP · Laravel · React <span className="text-lime">·</span> Built with React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
