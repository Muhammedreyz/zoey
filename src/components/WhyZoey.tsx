import { useReveal } from '../hooks/useReveal';
import { useLang } from '../hooks/useLang';
import { Shield, Clock, Award, Users, Lightbulb, Handshake } from 'lucide-react';
import { ReactNode } from 'react';

const VALUE_ICONS: ReactNode[] = [
  <Shield size={18} />, <Clock size={18} />, <Award size={18} />,
  <Users size={18} />, <Lightbulb size={18} />, <Handshake size={18} />,
];

export default function WhyZoey() {
  const { ref, visible } = useReveal();
  const { t, isRtl } = useLang();

  const marqueeItems = [...t.whyZoey.values, ...t.whyZoey.values];

  return (
    <section
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #120630 0%, #0E0327 100%)' }}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] blueprint-grid" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center`}>
          <span className="text-xs tracking-[0.4em] text-brand-gold/60 uppercase font-light block mb-5">
            {t.whyZoey.tag}
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {t.whyZoey.h1}<br />
            <span className="text-gold-gradient">{t.whyZoey.h2}</span>
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden py-6">
        <div className="flex gap-0 whitespace-nowrap" style={{ animation: 'marquee 30s linear infinite' }}>
          {marqueeItems.map((label, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-3 px-8 border-r border-brand-gold/10 text-white/40 hover:text-brand-gold transition-colors duration-300">
              <span className="text-brand-gold/50">{VALUE_ICONS[i % 6]}</span>
              <span className="text-sm tracking-[0.15em] uppercase font-light">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-3 gap-px bg-brand-gold/8">
          {t.whyZoey.blocks.map((item, i) => (
            <div
              key={i}
              className={`bg-brand-dark p-10 lg:p-12 group hover:bg-brand-gold/[0.03] transition-all duration-500 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className="text-6xl font-bold text-brand-gold/8 group-hover:text-brand-gold/15 transition-colors duration-500 mb-5 leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                0{i + 1}
              </div>
              <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-brand-gold transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
              <div className="mt-8 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
