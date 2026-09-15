import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NavLinkItem, ButtonLink } from './Button';

const navLinks = [
  { to: '/learn', label: 'Learn' },
  { to: '/legal-help', label: 'Legal Help' },
  { to: '/dictionary', label: 'Legal Dictionary' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? 'shadow-card' : ''
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-16">
        <Link to="/" aria-label="Legal Literacy India home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLinkItem key={link.to} {...link} />
          ))}
        </div>

        <div className="hidden lg:block">
          <ButtonLink to="/legal-help" variant="primary" className="text-sm">
            Get Started
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-navy/8 bg-white">
          <div className="container-wide py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-3 text-ink-light font-medium hover:bg-navy/5 hover:text-navy rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/legal-help"
              className="btn-primary mt-2 mx-4"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
