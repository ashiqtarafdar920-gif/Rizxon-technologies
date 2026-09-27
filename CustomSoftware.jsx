import { useEffect, useRef } from 'react';
import { revealOnEnter } from '../../hooks/useScrollProgress.js';
import { CUSTOM_SOFTWARE } from '../../data/verticals.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import { whatsappHref } from '../../config/site.js';
import Button from '../ui/Button.jsx';

export default function CustomSoftware() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) revealOnEnter(ref.current.querySelectorAll('.reveal'), { stagger: 0.08 });
  }, []);

  return (
    <section id="custom-software" className="section custom-software" ref={ref}>
      <div className="custom-software__panel reveal" style={{ '--accent': CUSTOM_SOFTWARE.color }}>
        <SectionHeading kicker={CUSTOM_SOFTWARE.kicker} title={CUSTOM_SOFTWARE.title} accent={CUSTOM_SOFTWARE.color} />
        <p className="custom-software__desc reveal">{CUSTOM_SOFTWARE.description}</p>

        <div className="custom-software__stack reveal">
          {CUSTOM_SOFTWARE.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>

        <Button href={whatsappHref()} variant="whatsapp" target="_blank" rel="noopener noreferrer" className="reveal">
          Scope a project with us
        </Button>
      </div>
    </section>
  );
}
