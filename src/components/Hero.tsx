import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark blueprint-grid"
    >
      {/* Ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(174,133,50,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Animated architectural SVG background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 900" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Vertical pillars */}
          <line x1="200" y1="900" x2="200" y2="200" stroke="#AE8532" strokeWidth="0.5" className="line-draw" />
          <line x1="400" y1="900" x2="400" y2="100" stroke="#AE8532" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '0.2s' }} />
          <line x1="720" y1="900" x2="720" y2="0" stroke="#AE8532" strokeWidth="1" className="line-draw" style={{ animationDelay: '0.4s' }} />
          <line x1="1040" y1="900" x2="1040" y2="100" stroke="#AE8532" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '0.2s' }} />
          <line x1="1240" y1="900" x2="1240" y2="200" stroke="#AE8532" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '0.4s' }} />
          {/* Horizontal beams */}
          <line x1="0" y1="500" x2="1440" y2="500" stroke="#AE8532" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '0.6s' }} />
          <line x1="0" y1="700" x2="1440" y2="700" stroke="#AE8532" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '0.8s' }} />
          {/* Diagonal braces */}
          <line x1="200" y1="200" x2="400" y2="100" stroke="#AE8532" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '1s' }} />
          <line x1="1040" y1="100" x2="1240" y2="200" stroke="#AE8532" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '1s' }} />
          <line x1="400" y1="500" x2="720" y2="100" stroke="#AE8532" strokeWidth="0.3" className="line-draw" style={{ animationDelay: '1.2s' }} />
          <line x1="720" y1="100" x2="1040" y2="500" stroke="#AE8532" strokeWidth="0.3" className="line-draw" style={{ animationDelay: '1.2s' }} />
          {/* Corner arcs */}
          <path d="M 0 450 Q 200 250 400 450" stroke="#AE8532" strokeWidth="0.4" fill="none" className="line-draw" style={{ animationDelay: '1.4s' }} />
          <path d="M 1040 450 Q 1240 250 1440 450" stroke="#AE8532" strokeWidth="0.4" fill="none" className="line-draw" style={{ animationDelay: '1.4s' }} />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Pre-headline */}
        <div
          className="transition-all duration-700"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(-20px)' }}
        >
          <span className="inline-flex items-center gap-3 text-xs tracking-[0.5em] text-brand-gold/60 uppercase font-light mb-8">
            <span className="w-8 h-px bg-brand-gold/40" />
            Zoey İnşaat & Müteahhitlik
            <span className="w-8 h-px bg-brand-gold/40" />
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="transition-all duration-1000"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: '0.2s',
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Hayalleri
          </span>
          <span
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-gold-gradient"
          >
            İnşa Ediyoruz
          </span>
        </h1>

        {/* Sub */}
        <p
          className="transition-all duration-1000 text-white/50 text-lg sm:text-xl font-light mt-8 max-w-2xl mx-auto leading-relaxed"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0.5s',
          }}
        >
          Konut, ticari ve endüstriyel projelerde mükemmeliyeti ve kalıcılığı esas alarak
          inşa ediyoruz. Her proje, bir mirasa dönüşür.
        </p>

        {/* CTAs */}
        <div
          className="transition-all duration-1000 flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0.8s',
          }}
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-brand-gold text-brand-dark text-sm font-semibold tracking-widest uppercase hover:bg-brand-gold-light transition-all duration-300 gold-glow hover:scale-105"
          >
            İletişime Geç
          </button>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border border-white/20 text-white/70 text-sm font-light tracking-widest uppercase hover:border-brand-gold/60 hover:text-brand-gold transition-all duration-300"
          >
            Projelerimiz
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000"
        style={{ opacity: mounted ? 1 : 0, transitionDelay: '1.5s' }}
      >
        <span className="text-xs tracking-[0.3em] text-white/30 uppercase">Keşfet</span>
        <div className="animate-bounce">
          <ArrowDown size={16} className="text-brand-gold/50" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
    </section>
  );
}
