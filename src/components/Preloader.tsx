import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let raf: number;
    const start = performance.now();
    const duration = 1500;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(onDone, 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-6 py-8 md:px-12"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.3em] text-mute">
        <span>manoj-kumar.dev</span>
        <span className="text-lime">portfolio / 2026</span>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-mute">
            PHP · Laravel · React
          </p>
          <h1 className="mt-3 text-4xl font-bold uppercase tracking-tight text-cream md:text-6xl">
            Manoj Kumar
          </h1>
          <p className="mt-2 font-serif text-2xl italic text-lime md:text-3xl">
            full-stack developer
          </p>
        </div>
        <div className="text-right font-mono text-7xl font-semibold leading-none text-cream tabular-nums md:text-9xl">
          {count}
          <span className="text-lime">%</span>
        </div>
      </div>

      <div className="h-px w-full bg-line">
        <motion.div
          className="h-full bg-lime"
          style={{ width: `${count}%` }}
        />
      </div>
    </motion.div>
  );
}
