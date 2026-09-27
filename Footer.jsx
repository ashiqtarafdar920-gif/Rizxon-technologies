import { SITE } from '../../config/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{SITE.shortName}</span>
          <p>{SITE.address}</p>
        </div>

        <div className="footer__cols">
          <div>
            <h3>Products</h3>
            <a href="#real-estate">Real Estate CRM</a>
            <a href="#restaurant">Restaurant CRM</a>
            <a href="#travel">Travel CRM</a>
            <a href="#wealth-management">Wealth Management CRM</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#custom-software">Custom Development</a>
            <a href="#process">How we work</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Reach us</h3>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={`tel:${SITE.phoneDisplay.replace(/\s+/g, '')}`}>{SITE.phoneDisplay}</a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
