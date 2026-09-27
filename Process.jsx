import { useEffect, useRef } from 'react';
import { revealOnEnter } from '../../hooks/useScrollProgress.js';
import { CUSTOM_SOFTWARE } from '../../data/verticals.js';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function Process() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) revealOnEnter(ref.current.querySelectorAll('.reveal'), { stagger: 0.08 });
  }, []);

  return (
    <section id="process" className="section process" ref={ref}>
      <SectionHeading kicker="How we work" title="Five stages, no black box." align="center" />

      <ol className="process__list">
        {CUSTOM_SOFTWARE.process.map((p, i) => (
          <li key={p.step} className="process__item reveal">
            <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3>{p.step}</h3>
              <p>{p.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
