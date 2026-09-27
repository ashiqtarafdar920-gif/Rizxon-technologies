import { useEffect, useState } from 'react';
import { whatsappHref } from '../../config/site.js';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-fab ${visible ? 'is-visible' : ''}`}
      aria-label="Chat with Rizxon Technologies on WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.02 3C9.38 3 4 8.36 4 15c0 2.34.65 4.53 1.78 6.4L4 29l7.8-1.74A11.9 11.9 0 0 0 16.02 27C22.66 27 28 21.64 28 15S22.66 3 16.02 3Zm6.8 17.2c-.3.83-1.5 1.55-2.4 1.7-.63.1-1.44.14-2.3-.13-.53-.16-1.2-.38-2.1-.75-3.68-1.52-6.06-5.15-6.24-5.4-.18-.24-1.49-1.94-1.49-3.7 0-1.75.94-2.6 1.28-2.96.33-.35.72-.44.96-.44h.7c.22 0 .53-.03.83.62.3.66 1.03 2.25 1.12 2.41.1.17.16.36.03.6-.13.24-.2.4-.4.6-.2.22-.42.5-.6.66-.2.18-.4.38-.18.75.24.36 1.05 1.66 2.26 2.68 1.55 1.3 2.86 1.72 3.24 1.9.38.2.6.16.82-.1.24-.27.98-1.1 1.24-1.48.26-.37.52-.3.87-.18.36.12 2.3 1.06 2.7 1.25.4.2.66.3.76.46.1.16.1.9-.2 1.72Z" />
      </svg>
      <span className="whatsapp-fab__label">Chat on WhatsApp</span>
    </a>
  );
}
