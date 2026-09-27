import { useEffect, useRef } from 'react';
import { revealOnEnter } from '../../hooks/useScrollProgress.js';

const STATS = [
  { value: '12', label: 'Years combined founding-team engineering experience' },
  { value: '4', label: 'Industry-specific CRMs built, deployed and maintained' },
  { value: '99.9%', label: 'Uptime across production client platforms in the last 12 months' },
  { value: '<24h', label: 'Median response time on support tickets' }
];

export default function Stats() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) revealOnEnter(ref.current.querySelectorAll('.reveal'), { stagger: 0.08 });
  }, []);

  return (
    <section id="stats" className="section stats" ref={ref}>
      <div className="stats__grid">
        {STATS.map((s) => (
          <div key={s.label} className="stats__item reveal">
            <span className="stats__value">{s.value}</span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
