import { useEffect, useState } from 'react';
import { SITE } from '../../config/site.js';

const LINKS = [
  { href: '#real-estate', label: 'Real Estate' },
  { href: '#restaurant', label: 'Restaurant' },
  { href: '#travel', label: 'Travel' },
  { href: '#wealth-management', label: 'Wealth' },
  { href: '#custom-software', label: 'Custom Dev' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#top" className="navbar__logo">
          <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true">
            <path d="M32 6 L56 20 V44 L32 58 L8 44 V20 Z" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="32" cy="32" r="8" fill="currentColor" />
          </svg>
          {SITE.shortName}
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="#contact" className="btn btn--ghost btn--small">
            Contact
          </a>
        </div>

        <button
          className={`navbar__burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
