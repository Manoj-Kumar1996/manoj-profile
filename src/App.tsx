import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SeoSection from "./components/SeoSection";
import Education from "./components/Education";
import Contact from "./components/Contact";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { profile } from "./data";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-lime"
      style={{ scaleX }}
    />
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="noise relative min-h-screen bg-ink text-cream">
      <GoogleAnalytics />
      <Cursor />
      <ScrollProgress />

      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />

      <main>
        <Hero />
        <Marquee items={profile.stack} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SeoSection />
        <Education />
        <Marquee
          slow
          items={["Let's work together", "Available for projects", "PHP / Laravel", "React.js", "Technical SEO"]}
        />
        <Contact />
      </main>
    </div>
  );
}
