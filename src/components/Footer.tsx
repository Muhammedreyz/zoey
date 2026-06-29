import { Mail } from 'lucide-react';
import { useLang } from '../hooks/useLang';

export default function Footer() {
  const { t, isRtl } = useLang();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: t.nav.about, id: 'about' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.contact, id: 'contact' },
  ];

  return (
    <footer className="border-t border-brand-gold/10" dir={isRtl ? 'rtl' : 'ltr'}
      style={{ background: 'linear-gradient(180deg, #0E0327 0%, #080118 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <img src="/all_in_gold.svg" alt="Zoey İnşaat" className="h-11 w-auto mb-5" />
            <p className="text-white/30 text-sm font-light leading-relaxed mt-4 whitespace-pre-line">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-brand-gold/50 uppercase font-light mb-5">
              {t.footer.links}
            </h4>
            <nav className="space-y-3">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => document.querySelector(`#${item.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-white/35 hover:text-brand-gold transition-colors duration-300 text-sm font-light tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] text-brand-gold/50 uppercase font-light mb-5">
              {t.footer.contact}
            </h4>
            <a
              href="mailto:info@zoey.com.tr"
              className="flex items-center gap-3 text-white/35 hover:text-brand-gold transition-colors duration-300 text-sm font-light"
            >
              <Mail size={13} className="text-brand-gold/50 flex-shrink-0" />
              info@zoey.com.tr
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-gold/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs font-light tracking-wide">
            &copy; {currentYear} {t.footer.copy}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-brand-gold/20" />
            <span className="text-brand-gold/25 text-[10px] font-light tracking-[0.3em] uppercase font-cinzel">
              Zoey
            </span>
            <span className="w-6 h-px bg-brand-gold/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
