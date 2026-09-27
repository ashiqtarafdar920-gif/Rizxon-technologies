import { useEffect, useRef, useState } from 'react';
import CanvasRoot from './components/canvas/CanvasRoot.jsx';
import Loader from './components/ui/Loader.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import WhatsAppButton from './components/layout/WhatsAppButton.jsx';
import Hero from './components/sections/Hero.jsx';
import VerticalSection from './components/sections/VerticalSection.jsx';
import CustomSoftware from './components/sections/CustomSoftware.jsx';
import Stats from './components/sections/Stats.jsx';
import Process from './components/sections/Process.jsx';
import Contact from './components/sections/Contact.jsx';
import { VERTICALS } from './data/verticals.js';
import { useScrollProgress } from './hooks/useScrollProgress.js';

export default function App() {
  const rootRef = useRef(null);
  const [booted, setBooted] = useState(false);
  useScrollProgress(rootRef);

  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="scroll-root" ref={rootRef}>
      <Loader hidden={booted} />
      <CanvasRoot />
      <Navbar />

      <main>
        <Hero />
        {VERTICALS.map((v, i) => (
          <VerticalSection key={v.id} data={v} reverse={i % 2 === 1} />
        ))}
        <CustomSoftware />
        <Stats />
        <Process />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
