import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLang } from '../hooks/useLang';

export default function Hero() {
  const { t, isRtl } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 30%, #1a0a3d 0%, #0E0327 60%, #070115 100%)' }}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />

      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(174,133,50,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Animated architectural SVG background */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <svg viewBox="0 0 1440 900" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <line x1="200" y1="900" x2="200" y2="200" stroke="#AE8532" strokeWidth="0.5" className="line-draw" />
          <line x1="400" y1="900" x2="400" y2="100" stroke="#AE8532" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '0.2s' }} />
          <line x1="720" y1="900" x2="720" y2="0" stroke="#AE8532" strokeWidth="1" className="line-draw" style={{ animationDelay: '0.4s' }} />
          <line x1="1040" y1="900" x2="1040" y2="100" stroke="#AE8532" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '0.2s' }} />
          <line x1="1240" y1="900" x2="1240" y2="200" stroke="#AE8532" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '0.4s' }} />
          <line x1="0" y1="500" x2="1440" y2="500" stroke="#AE8532" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '0.6s' }} />
          <line x1="0" y1="700" x2="1440" y2="700" stroke="#AE8532" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '0.8s' }} />
          <line x1="400" y1="500" x2="720" y2="100" stroke="#AE8532" strokeWidth="0.3" className="line-draw" style={{ animationDelay: '1.2s' }} />
          <line x1="720" y1="100" x2="1040" y2="500" stroke="#AE8532" strokeWidth="0.3" className="line-draw" style={{ animationDelay: '1.2s' }} />
          <path d="M 0 450 Q 200 250 400 450" stroke="#AE8532" strokeWidth="0.4" fill="none" className="line-draw" style={{ animationDelay: '1.4s' }} />
          <path d="M 1040 450 Q 1240 250 1440 450" stroke="#AE8532" strokeWidth="0.4" fill="none" className="line-draw" style={{ animationDelay: '1.4s' }} />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="transition-all duration-700"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(-20px)' }}
        >
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.4em] text-brand-gold/60 uppercase font-cinzel mb-8">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-brand-gold/50" />
            {t.hero.pre}
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-brand-gold/50" />
          </span>
        </div>

        <h1
          className="transition-all duration-1000 font-heading"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: '0.2s',
          }}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white/95 leading-[1.05]">
            {t.hero.line1}
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] text-gold-gradient mt-1">
            {t.hero.line2}
          </span>
        </h1>

        <p
          className="transition-all duration-1000 text-white/45 text-xl font-light mt-10 max-w-2xl mx-auto leading-relaxed font-display"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0.5s',
          }}
        >
          {t.hero.sub}
        </p>

        <div
          className="transition-all duration-1000 flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0.8s',
          }}
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-10 py-4 bg-brand-gold text-brand-dark text-sm font-semibold tracking-widest uppercase hover:bg-brand-gold-light transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">{t.hero.cta1}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold-light to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-brand-gold/20 text-white/60 text-sm font-light tracking-widest uppercase hover:border-brand-gold/50 hover:text-brand-gold transition-all duration-300"
          >
            {t.hero.cta2}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000"
        style={{ opacity: mounted ? 1 : 0, transitionDelay: '1.5s' }}
      >
        <span className="text-[10px] tracking-[0.4em] text-white/25 uppercase font-cinzel">{t.hero.scroll}</span>
        <div className="animate-bounce">
          <ArrowDown size={14} className="text-brand-gold/40" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
    </section>
  );
}
