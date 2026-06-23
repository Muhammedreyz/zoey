import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-3 border-t border-brand-gold/15">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <img
              src="/renkli_yazi.svg"
              alt="Zoey İnşaat"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/35 text-sm font-light leading-relaxed mt-4">
              Hayalleri kalıcı eserlere dönüştürüyor,<br />
              geleceği birlikte inşa ediyoruz.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-brand-gold/60 uppercase font-light mb-5">
              Hızlı Bağlantılar
            </h4>
            <nav className="space-y-3">
              {['Hakkımızda', 'Hizmetler', 'Projeler', 'İletişim'].map(item => (
                <button
                  key={item}
                  onClick={() => document.querySelector(`#${item === 'Hakkımızda' ? 'about' : item === 'Hizmetler' ? 'services' : item === 'Projeler' ? 'projects' : 'contact'}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-white/40 hover:text-brand-gold transition-colors duration-300 text-sm font-light tracking-wide"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] text-brand-gold/60 uppercase font-light mb-5">
              İletişim
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+905306374169"
                className="flex items-center gap-3 text-white/40 hover:text-brand-gold transition-colors duration-300 text-sm font-light"
              >
                <Phone size={13} className="text-brand-gold/60 flex-shrink-0" />
                +90 530 637 41 69
              </a>
              <a
                href="mailto:info@zoey.com.tr"
                className="flex items-center gap-3 text-white/40 hover:text-brand-gold transition-colors duration-300 text-sm font-light"
              >
                <Mail size={13} className="text-brand-gold/60 flex-shrink-0" />
                info@zoey.com.tr
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-light tracking-wide">
            &copy; {currentYear} Zoey İnşaat & Müteahhitlik. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-4 h-px bg-brand-gold/30" />
            <span className="text-brand-gold/30 text-xs font-light tracking-widest uppercase">
              Zoey İnşaat
            </span>
            <span className="w-4 h-px bg-brand-gold/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}
