import { useEffect, useRef } from 'react';
import { revealOnEnter } from '../../hooks/useScrollProgress.js';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function VerticalSection({ data, reverse = false }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) revealOnEnter(ref.current.querySelectorAll('.reveal'), { stagger: 0.08 });
  }, []);

  return (
    <section id={data.id} className={`section vertical ${reverse ? 'vertical--reverse' : ''}`} ref={ref}>
      <div className="vertical__panel reveal" style={{ '--accent': data.color }}>
        <SectionHeading kicker={data.kicker} title={data.title} accent={data.color} />
        <p className="vertical__desc reveal">{data.description}</p>

        <ul className="vertical__features">
          {data.features.map((f) => (
            <li key={f} className="reveal">
              <span className="vertical__bullet" style={{ background: data.color }} />
              {f}
            </li>
          ))}
        </ul>

        <div className="vertical__metric reveal">
          <span className="vertical__metric-value" style={{ color: data.color }}>
            {data.metric.value}
          </span>
          <span className="vertical__metric-label">{data.metric.label}</span>
        </div>
      </div>
    </section>
  );
}
