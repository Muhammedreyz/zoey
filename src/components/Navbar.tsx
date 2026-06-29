import { useEffect, useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { useLang, LANG_LABELS, LangCode } from '../hooks/useLang';

interface NavProps {
  onShowComingSoon: () => void;
}

export default function Navbar({ onShowComingSoon }: NavProps) {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_LINKS = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

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
          <button onClick={onShowComingSoon} className="focus:outline-none">
            <img
              src={scrolled ? '/all_in_gold.svg' : '/allinwhite.svg'}
              alt="Zoey İnşaat"
              className="h-10 w-auto transition-all duration-500"
            />
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-[13px] tracking-[0.15em] text-white/60 hover:text-brand-gold transition-colors duration-300 uppercase font-light"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1 mr-3">
              {(Object.keys(LANG_LABELS) as LangCode[]).map(code => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-1 text-[9px] tracking-widest font-cinzel transition-all duration-300 ${
                    lang === code
                      ? 'text-brand-gold border border-brand-gold/50 bg-brand-gold/10'
                      : 'text-white/30 border border-transparent hover:text-white/50'
                  }`}
                >
                  {LANG_LABELS[code]}
                </button>
              ))}
            </div>
            <a
              href="mailto:info@zoey.com.tr"
              className="flex items-center gap-2 text-xs text-brand-gold/80 hover:text-brand-gold transition-colors duration-300 tracking-wide"
            >
              <Mail size={12} />
              info@zoey.com.tr
            </a>
          </div>

          <button
            className="lg:hidden text-white/70 hover:text-brand-gold transition-colors"
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
          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 mt-6">
            {(Object.keys(LANG_LABELS) as LangCode[]).map(code => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 text-[10px] tracking-widest font-cinzel transition-all duration-300 ${
                  lang === code
                    ? 'text-brand-gold border border-brand-gold/50 bg-brand-gold/10'
                    : 'text-white/30 border border-brand-gold/10 hover:text-white/50'
                }`}
              >
                {LANG_LABELS[code]}
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-col items-center gap-3">
            <a href="mailto:info@zoey.com.tr" className="flex items-center gap-2 text-brand-gold text-sm">
              <Mail size={14} /> info@zoey.com.tr
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
