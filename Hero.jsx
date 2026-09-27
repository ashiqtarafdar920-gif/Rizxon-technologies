import { useEffect, useRef } from 'react';
import { revealOnEnter } from '../../hooks/useScrollProgress.js';
import { whatsappHref } from '../../config/site.js';
import Button from '../ui/Button.jsx';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) revealOnEnter(ref.current.querySelectorAll('.reveal'), { stagger: 0.12 });
  }, []);

  return (
    <section id="top" className="section hero" ref={ref}>
      <div className="hero__content">
        <p className="hero__eyebrow reveal">Rizxon Technologies</p>
        <h1 className="hero__title reveal">
          CRM platforms built around how Real Estate, Restaurant, Travel and Wealth
          businesses actually work.
        </h1>
        <p className="hero__sub reveal">
          We design and engineer the systems your operations run on — from lead capture
          to compliance-ready audit trails — then support them like our own reputation
          depends on it. Because it does.
        </p>
        <div className="hero__actions reveal">
          <Button href={whatsappHref()} variant="whatsapp" target="_blank" rel="noopener noreferrer">
            Talk to us on WhatsApp
          </Button>
          <Button href="#custom-software" variant="ghost">
            See what we build
          </Button>
        </div>

        <dl className="hero__facts reveal">
          <div>
            <dt>4</dt>
            <dd>Industry CRMs in active use</dd>
          </div>
          <div>
            <dt>10+</dt>
            <dd>Custom platforms shipped to production</dd>
          </div>
          <div>
            <dt>24/7</dt>
            <dd>Engineering support on live systems</dd>
          </div>
        </dl>
      </div>

      <div className="hero__scrollcue" aria-hidden="true">
        <span />
        <p>Scroll to see the platform evolve</p>
      </div>
    </section>
  );
}
