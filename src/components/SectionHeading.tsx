import Reveal from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  accent?: string;
};

export default function SectionHeading({ index, eyebrow, title, accent }: Props) {
  return (
    <div>
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.25em] text-lime">[ {index} ]</span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-mute">{eyebrow}</span>
          <span className="h-px flex-1 bg-line" />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.95] tracking-tight text-cream">
          {title}{" "}
          {accent && (
            <span className="font-serif font-normal normal-case italic tracking-normal text-lime">
              {accent}
            </span>
          )}
        </h2>
      </Reveal>
    </div>
  );
}
