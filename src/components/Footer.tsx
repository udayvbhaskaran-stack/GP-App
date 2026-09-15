import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const footerLinks = [
  { to: '/privacy', label: 'Privacy' },
  { to: '/about', label: 'Disclaimer' },
  { to: '/sources', label: 'Sources' },
  { to: '/about', label: 'About' },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-navy/8 bg-white">
      <div className="container-wide py-10">
        <div className="flex flex-col md:flex-row gap-8 md:items-start md:justify-between">
          <div className="max-w-md">
            <Logo />
            <p className="mt-4 text-sm text-ink-light leading-relaxed">
              This website is an educational project designed to improve basic legal literacy.
              It does not provide legal advice and does not replace advice from a qualified legal
              professional. Laws and procedures can change, and information may not apply to every
              individual situation.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="section-label">Navigate</span>
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm text-ink-light hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-navy/5">
          <p className="text-xs text-ink-muted">
            Created as part of a Cambridge IGCSE Global Perspectives Team Project investigating
            legal literacy and access to the justice system in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
