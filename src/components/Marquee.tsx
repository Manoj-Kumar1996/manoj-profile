import { Asterisk } from "lucide-react";

type Props = {
  items: string[];
  slow?: boolean;
  className?: string;
};

export default function Marquee({ items, slow = false, className = "" }: Props) {
  const Row = () => (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-10">
          <span className="whitespace-nowrap font-mono text-sm uppercase tracking-[0.3em] text-mute">
            {item}
          </span>
          <Asterisk className="h-4 w-4 shrink-0 text-lime" />
        </div>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden border-y border-line bg-panel/50 py-5 ${className}`}>
      <div className={`flex w-max ${slow ? "animate-marquee-slow" : "animate-marquee"}`}>
        <Row />
        <Row />
      </div>
    </div>
  );
}
