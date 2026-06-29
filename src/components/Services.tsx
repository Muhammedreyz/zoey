import { useReveal } from '../hooks/useReveal';
import { useLang } from '../hooks/useLang';
import { Building2, HardHat, Layers, Ruler, Wrench, BarChart3 } from 'lucide-react';
import { ReactNode } from 'react';

const ICONS: ReactNode[] = [
  <Building2 size={26} />,
  <Layers size={26} />,
  <HardHat size={26} />,
  <Wrench size={26} />,
  <Ruler size={26} />,
  <BarChart3 size={26} />,
];

export default function Services() {
  const { ref, visible } = useReveal();
  const { t, isRtl } = useLang();

  return (
    <section id="services" className="relative py-28 lg:py-40 overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}
      style={{ background: 'linear-gradient(180deg, #0E0327 0%, #120630 50%, #0E0327 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(174,133,50,0.25), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 80% 50%, rgba(174,133,50,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16 lg:mb-20`}>
          <div className="flex items-center gap-4 mb-5">
            <span className="w-10 h-px bg-brand-gold/60" />
            <span className="text-xs tracking-[0.4em] text-brand-gold/60 uppercase font-light">
              {t.services.tag}
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {t.services.h1}<br />
              <span className="text-gold-gradient">{t.services.h2}</span>
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              {t.services.sub}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-gold/8 border border-brand-gold/8">
          {t.services.items.map((svc, i) => (
            <div
              key={i}
              className="group relative p-8 lg:p-10 bg-brand-dark hover:bg-brand-gold/[0.03] transition-all duration-500 overflow-hidden"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.7s ease ${i * 100}ms, transform 0.7s ease ${i * 100}ms, background 0.5s ease`,
              }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-brand-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
              <div className="text-brand-gold/80 mb-5 transition-transform duration-300 group-hover:-translate-y-1">
                {ICONS[i]}
              </div>
              <div className="text-[10px] tracking-[0.2em] text-brand-gold/30 uppercase font-light mb-3">
                {svc.tag}
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-brand-gold transition-colors duration-300">
                {svc.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(174,133,50,0.25), transparent)' }}
      />
    </section>
  );
}
