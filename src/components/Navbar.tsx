import { useEffect, useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface NavProps {
  onShowComingSoon: () => void;
}

const NAV_LINKS = [
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Hizmetler', href: '#services' },
  { label: 'Projeler', href: '#projects' },
  { label: 'İletişim', href: '#contact' },
];

export default function Navbar({ onShowComingSoon }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-glass ${
          scrolled
            ? 'bg-brand-dark/95 border-b border-brand-gold/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={onShowComingSoon} className="focus:outline-none">
            <img
              src={scrolled ? '/all_in_gold.svg' : '/allinwhite.svg'}
              alt="Zoey İnşaat"
              className="h-10 w-auto transition-all duration-500"
            />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm tracking-widest text-white/60 hover:text-brand-gold transition-colors duration-300 uppercase font-light"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+905306374169"
              className="flex items-center gap-2 text-xs text-brand-gold/80 hover:text-brand-gold transition-colors duration-300 tracking-wide"
            >
              <Phone size={12} />
              +90 530 637 41 69
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white/70 hover:text-brand-gold transition-colors"
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-brand-dark/98 nav-glass flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-5 right-6 text-white/60 hover:text-white"
          onClick={() => setMenuOpen(false)}
        >
          <X size={28} />
        </button>
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-2xl tracking-widest text-white/70 hover:text-brand-gold transition-colors duration-300 uppercase font-light"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-8 flex flex-col items-center gap-3">
            <a href="tel:+905306374169" className="flex items-center gap-2 text-brand-gold text-sm">
              <Phone size={14} /> +90 530 637 41 69
            </a>
            <a href="mailto:info@zoey.com.tr" className="flex items-center gap-2 text-brand-gold text-sm">
              <Mail size={14} /> info@zoey.com.tr
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
