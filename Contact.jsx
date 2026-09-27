import { useEffect, useRef, useState } from 'react';
import { revealOnEnter } from '../../hooks/useScrollProgress.js';
import { SITE, whatsappHref, mailHref } from '../../config/site.js';
import Button from '../ui/Button.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (ref.current) revealOnEnter(ref.current.querySelectorAll('.reveal'), { stagger: 0.08 });
  }, []);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    // No backend is wired up in this starter — this opens the visitor's
    // mail client pre-filled with their message. Replace with a POST to
    // your own API or a form service (see README) for production use.
    const subject = `Project enquiry from ${form.name || 'website visitor'}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `${mailHref(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="contact__intro reveal">
        <SectionHeading kicker="Get in touch" title="Tell us what you're building." />
        <p>
          The fastest way to reach us is WhatsApp — most conversations start there and turn
          into a scoping call within a day.
        </p>

        <div className="contact__actions">
          <Button href={whatsappHref()} variant="whatsapp" target="_blank" rel="noopener noreferrer">
            Message us on WhatsApp
          </Button>
          <Button href={mailHref()} variant="ghost">
            {SITE.email}
          </Button>
        </div>

        <p className="contact__meta">{SITE.phoneDisplay} &middot; {SITE.address}</p>
      </div>

      <form className="contact__form reveal" onSubmit={submit}>
        <label>
          Name
          <input required value={form.name} onChange={update('name')} type="text" name="name" autoComplete="name" />
        </label>
        <label>
          Email
          <input required value={form.email} onChange={update('email')} type="email" name="email" autoComplete="email" />
        </label>
        <label>
          Project details
          <textarea
            required
            value={form.message}
            onChange={update('message')}
            name="message"
            rows={4}
            placeholder="What are you trying to build or fix?"
          />
        </label>
        <Button as="button" type="submit" variant="primary">
          Send enquiry
        </Button>
      </form>
    </section>
  );
}
