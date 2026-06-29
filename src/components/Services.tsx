import { useReveal } from '../hooks/useReveal';
import { useLang } from '../hooks/useLang';
import { Building2, HardHat, Layers, Ruler, Wrench, BarChart3 } from 'lucide-react';
import { ReactNode } from 'react';

const ICONS: ReactNode[] = [
  <Building2 size={28} />,
  <Layers size={28} />,
  <HardHat size={28} />,
  <Wrench size={28} />,
  <Ruler size={28} />,
  <BarChart3 size={28} />,
];

export default function Services() {
  const { ref, visible } = useReveal();
  const { t, isRtl } = useLang();

  return (
    <section id="services" className="relative py-28 lg:py-40 overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}
      style={{ background: 'linear-gradient(180deg, #0E0327 0%, #0a0220 50%, #0E0327 100%)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(174,133,50,0.25), transparent)' }}
      />

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-32 w-64 h-64 rounded-full opacity-[0.02]"
          style={{ background: 'radial-gradient(circle, #AE8532, transparent 70%)' }}
        />
        <div className="absolute bottom-20 -right-32 w-96 h-96 rounded-full opacity-[0.015]"
          style={{ background: 'radial-gradient(circle, #AE8532, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-20 lg:mb-24`}>
          <div className="flex items-center gap-4 mb-5">
            <span className="w-10 h-px bg-brand-gold/60" />
            <span className="text-xs tracking-[0.4em] text-brand-gold/60 uppercase font-light">
              {t.services.tag}
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-heading">
              {t.services.h1}<br />
              <span className="text-gold-gradient">{t.services.h2}</span>
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed font-display">
              {t.services.sub}
            </p>
          </div>
        </div>

        {/* Services - staggered card layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {t.services.items.map((svc, i) => (
            <div
              key={i}
              className={`group relative ${i === 1 || i === 4 ? 'lg:translate-y-8' : ''}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? (i === 1 || i === 4 ? 'translateY(32px)' : 'translateY(0)')
                  : 'translateY(50px)',
                transition: `opacity 0.8s ease ${i * 120}ms, transform 0.8s ease ${i * 120}ms`,
              }}
            >
              <div className="relative h-full p-8 lg:p-9 rounded-sm overflow-hidden transition-all duration-500 border border-brand-gold/[0.06] hover:border-brand-gold/20"
                style={{ background: 'linear-gradient(145deg, rgba(174,133,50,0.04) 0%, rgba(14,3,39,0.8) 50%, rgba(10,2,32,0.95) 100%)' }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(174,133,50,0.06) 0%, transparent 70%)' }}
                />

                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                {/* Icon container */}
                <div className="relative w-14 h-14 mb-7 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-sm border border-brand-gold/15 group-hover:border-brand-gold/30 transition-colors duration-500"
                    style={{ background: 'linear-gradient(135deg, rgba(174,133,50,0.08) 0%, transparent 100%)' }}
                  />
                  <div className="relative text-brand-gold/90 group-hover:text-brand-gold transition-colors duration-300">
                    {ICONS[i]}
                  </div>
                </div>

                {/* Tag */}
                <div className="text-[9px] tracking-[0.25em] text-brand-gold/35 uppercase font-cinzel mb-3">
                  {svc.tag}
                </div>

                {/* Title */}
                <h3 className="text-white text-[1.15rem] font-semibold mb-4 group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-white/35 text-sm leading-[1.7] font-light group-hover:text-white/50 transition-colors duration-500">
                  {svc.desc}
                </p>

                {/* Bottom corner accent */}
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-brand-gold/10 group-hover:border-brand-gold/25 transition-colors duration-500" />
              </div>
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
