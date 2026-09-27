// ---------------------------------------------------------------------------
// Single source of truth for company / contact details.
// Update these values before deploying — nothing else in the codebase
// needs to change.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'Rizxon Technologies',
  shortName: 'Rizxon',
  tagline: 'Software engineered for the businesses that run on relationships.',
  email: 'hello@rizxontechnologies.com',
  phoneDisplay: '+91 98765 43210',
  // WhatsApp number in international format, digits only, no + or spaces.
  whatsappNumber: '919876543210',
  whatsappPrefill:
    "Hi Rizxon, I'd like to talk about a CRM / software project.",
  address: 'Hyderabad, India — working with clients worldwide',
  linkedin: 'https://linkedin.com/company/rizxon-technologies',
  twitter: 'https://twitter.com/rizxontech'
};

export const whatsappHref = () =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    SITE.whatsappPrefill
  )}`;

export const mailHref = (subject = 'Project enquiry') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
