import { useState, useEffect } from 'react';
import { LangProvider } from '../hooks/useLang';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import WhyZoey from './WhyZoey';
import Contact from './Contact';
import Footer from './Footer';

interface MainWebsiteProps {
  onShowComingSoon: () => void;
}

export default function MainWebsite({ onShowComingSoon }: MainWebsiteProps) {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <LangProvider>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}
      <div
        className="min-h-screen bg-brand-dark"
        style={{
          opacity: splashDone ? 1 : 0,
          transition: 'opacity 0.8s ease 0.2s',
        }}
      >
        <Navbar onShowComingSoon={onShowComingSoon} />
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyZoey />
        <Contact />
        <Footer />
      </div>
    </LangProvider>
  );
}

function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 2200),
      setTimeout(() => setPhase(5), 2800),
      setTimeout(() => onDone(), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, #1a0a3d 0%, #0E0327 55%, #070115 100%)',
        opacity: phase >= 5 ? 0 : 1,
        transition: 'opacity 0.6s ease',
        pointerEvents: phase >= 5 ? 'none' : 'auto',
      }}
    >
      {/* Geometric ring behind logo */}
      <div
        className="absolute"
        style={{
          width: '340px', height: '340px',
          opacity: phase >= 1 ? 0.08 : 0,
          transition: 'opacity 1.5s ease',
        }}
      >
        <svg viewBox="0 0 340 340" fill="none" className="w-full h-full animate-spin-slow">
          <circle cx="170" cy="170" r="165" stroke="#AE8532" strokeWidth="0.5" strokeDasharray="6 10" />
          <circle cx="170" cy="170" r="140" stroke="#AE8532" strokeWidth="0.3" />
          <polygon points="170,20 320,95 320,245 170,320 20,245 20,95" stroke="#AE8532" strokeWidth="0.4" fill="none" />
        </svg>
      </div>

      {/* Logo SVG */}
      <div
        className="relative z-10"
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'scale(1)' : 'scale(0.8)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <img
          src="/all_in_gold.svg"
          alt="Zoey"
          className="splash-logo"
          style={{
            width: 'min(240px, 50vw)',
            height: 'auto',
            filter: phase >= 2
              ? 'drop-shadow(0 0 40px rgba(174,133,50,0.4)) drop-shadow(0 0 80px rgba(174,133,50,0.15))'
              : 'drop-shadow(0 0 0px rgba(174,133,50,0))',
            transition: 'filter 1.2s ease',
          }}
        />
      </div>

      {/* Gold line */}
      <div
        className="relative z-10 mt-8"
        style={{
          width: '120px', height: '1px',
          background: 'linear-gradient(90deg, transparent, #AE8532, transparent)',
          transform: phase >= 2 ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Tagline */}
      <div
        className="relative z-10 mt-6"
        style={{
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? 'translateY(0)' : 'translateY(12px)',
          transition: 'all 0.8s ease',
        }}
      >
        <span className="font-cinzel text-[10px] tracking-[0.5em] text-brand-gold/50 uppercase">
          İnşaat & Müteahhitlik
        </span>
      </div>

      {/* Loading bar */}
      <div
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
        style={{
          width: '160px', height: '1px',
          background: 'rgba(174,133,50,0.15)',
          opacity: phase >= 2 ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <div
          className="h-full bg-brand-gold/60"
          style={{
            width: phase >= 4 ? '100%' : phase >= 3 ? '60%' : phase >= 2 ? '20%' : '0%',
            transition: 'width 0.8s ease',
          }}
        />
      </div>
    </div>
  );
}
