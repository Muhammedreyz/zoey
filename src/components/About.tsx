import { useReveal, useCountUp } from '../hooks/useReveal';
import { useLang } from '../hooks/useLang';

interface StatProps {
  target: number;
  suffix: string;
  label: string;
  enabled: boolean;
}

function StatItem({ target, suffix, label, enabled }: StatProps) {
  const count = useCountUp(target, 2000, enabled);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-brand-gold font-heading">
        {count}{suffix}
      </div>
      <div className="text-[11px] tracking-[0.2em] text-white/40 uppercase mt-3 font-light">{label}</div>
    </div>
  );
}

export default function About() {
  const { ref, visible } = useReveal();
  const { t, isRtl } = useLang();

  return (
    <section id="about" className="bg-brand-dark py-28 lg:py-40 overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">
          <div className={`reveal ${visible ? 'visible' : ''}`} ref={ref}>
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.4em] text-brand-gold/60 uppercase font-light mb-5">
              <span className="w-8 h-px bg-brand-gold/40" />
              {t.about.tag}
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-8 font-heading"
            >
              {t.about.h1}<br />
              <span className="text-gold-gradient">{t.about.h2}</span><br />
              {t.about.h3}
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-brand-gold to-transparent mb-8" />
            <p className="text-white/50 leading-[1.8] text-lg mb-6 font-light">
              {t.about.p1}
            </p>
            <p className="text-white/35 leading-[1.8] font-light">
              {t.about.p2}
            </p>
          </div>

          <div className={`reveal-right ${visible ? 'visible' : ''} relative`}>
            <div
              className="relative aspect-square max-w-sm mx-auto overflow-hidden border border-brand-gold/10"
              style={{ background: 'linear-gradient(135deg, rgba(26,10,61,0.8) 0%, rgba(14,3,39,0.9) 100%)' }}
            >
              <div className="absolute inset-0 blueprint-grid opacity-20" />
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-40" fill="none">
                <rect x="80" y="150" width="240" height="200" stroke="#AE8532" strokeWidth="0.8" fill="rgba(174,133,50,0.03)" />
                <rect x="130" y="100" width="140" height="60" stroke="#AE8532" strokeWidth="0.6" fill="rgba(174,133,50,0.02)" />
                <rect x="175" y="60" width="50" height="50" stroke="#AE8532" strokeWidth="0.5" fill="rgba(174,133,50,0.02)" />
                {[0, 1, 2, 3].map(row =>
                  [0, 1, 2, 3].map(col => (
                    <rect key={`${row}-${col}`} x={100 + col * 55} y={170 + row * 45} width="22" height="28" fill="rgba(174,133,50,0.08)" stroke="#AE8532" strokeWidth="0.4" />
                  ))
                )}
                <rect x="175" y="300" width="50" height="50" fill="rgba(174,133,50,0.06)" stroke="#AE8532" strokeWidth="0.6" />
                <line x1="80" y1="370" x2="320" y2="370" stroke="#AE8532" strokeWidth="0.4" strokeDasharray="4 4" />
                <text x="200" y="390" fill="#AE8532" fontSize="9" textAnchor="middle" fontFamily="monospace" opacity="0.4">24.00 m</text>
              </svg>
              <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-brand-gold/40" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-brand-gold/40" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-brand-gold/40" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-brand-gold/40" />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-brand-gold px-5 py-2.5 text-brand-dark text-[10px] font-bold tracking-[0.2em] uppercase">
              {t.about.badge}
            </div>
          </div>
        </div>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="border-t border-brand-gold/10 border-b border-b-brand-gold/10 pt-14 pb-14"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatItem target={15} suffix="+" label={t.about.stat1} enabled={visible} />
            <StatItem target={120} suffix="+" label={t.about.stat2} enabled={visible} />
            <StatItem target={98} suffix="%" label={t.about.stat3} enabled={visible} />
            <StatItem target={50} suffix="+" label={t.about.stat4} enabled={visible} />
          </div>
        </div>
      </div>
    </section>
  );
}
