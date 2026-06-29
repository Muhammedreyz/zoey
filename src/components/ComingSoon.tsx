import { useEffect, useRef, useState } from 'react';
import { Mail } from 'lucide-react';

type LangCode = 'tr' | 'de' | 'en' | 'ru' | 'ar';

interface LangContent {
  eyebrow: string;
  headline: string[];
  sub: string;
  soon: string;
}

const T: Record<LangCode, LangContent> = {
  tr: {
    eyebrow: 'Bakım Modu',
    headline: ['Yeni Web Sitemiz', 'Çok Yakında'],
    sub: 'Sizi daha iyi karşılamak için çalışmalarımız sürüyor.',
    soon: 'Yakında',
  },
  de: {
    eyebrow: 'Wartungsmodus',
    headline: ['Unsere neue Website', 'Kommt Bald'],
    sub: 'Wir arbeiten daran, Sie besser zu empfangen.',
    soon: 'Demnächst',
  },
  en: {
    eyebrow: 'Maintenance Mode',
    headline: ['Our New Website', 'Coming Soon'],
    sub: 'We are working hard to welcome you better.',
    soon: 'Coming Soon',
  },
  ru: {
    eyebrow: 'Техническое обслуживание',
    headline: ['Наш новый сайт', 'Скоро Открывается'],
    sub: 'Мы работаем над тем, чтобы встретить вас лучше.',
    soon: 'Скоро',
  },
  ar: {
    eyebrow: 'وضع الصيانة',
    headline: ['موقعنا الجديد', 'قادم قريباً'],
    sub: 'نعمل بجد لنستقبلكم بشكل أفضل.',
    soon: 'قريباً',
  },
};

const LANG_LABELS: Record<LangCode, string> = { tr: 'TR', de: 'DE', en: 'EN', ru: 'RU', ar: 'AR' };

function detectLang(): LangCode {
  const l = navigator.language.toLowerCase().split('-')[0];
  if (l === 'tr') return 'tr';
  if (l === 'de') return 'de';
  if (l === 'ru') return 'ru';
  if (l === 'ar') return 'ar';
  return 'en';
}

/* Unique ID counter for particle keys */
let pid = 0;
interface Pt { id: number; x: number; y: number; size: number; dur: number; delay: number; opacity: number }

function makePt(): Pt {
  return {
    id: pid++,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    dur: Math.random() * 8 + 6,
    delay: Math.random() * 6,
    opacity: Math.random() * 0.3 + 0.05,
  };
}

const DOTS: Pt[] = Array.from({ length: 40 }, makePt);

export default function ComingSoon() {
  const [lang, setLang] = useState<LangCode>('en');
  const [phase, setPhase] = useState(0); // 0→nothing, 1→logo, 2→line, 3→text, 4→sub, 5→contact
  const [textKey, setTextKey] = useState(0);
  const [textFade, setTextFade] = useState(true);
  const lineRef = useRef<HTMLDivElement>(null);

  /* Initial animation sequence */
  useEffect(() => {
    setLang(detectLang());
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => {
        if (lineRef.current) lineRef.current.classList.add('active');
      }, 900),
      setTimeout(() => setPhase(3), 1300),
      setTimeout(() => setPhase(4), 1800),
      setTimeout(() => setPhase(5), 2200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  function switchLang(code: LangCode) {
    if (code === lang) return;
    setTextFade(false);
    setTimeout(() => {
      setLang(code);
      setTextKey(k => k + 1);
      setTextFade(true);
    }, 280);
  }

  const t = T[lang];
  const isRtl = lang === 'ar';

  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center select-none"
      style={{ background: 'radial-gradient(ellipse 120% 100% at 50% -10%, #1a0a3d 0%, #0E0327 55%, #070115 100%)' }}
    >
      {/* ── Ambient orb ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          width: '90vmin', height: '90vmin',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(174,133,50,0.055) 0%, transparent 65%)',
          borderRadius: '50%',
        }}
      />

      {/* ── Rotating geometric ring ── */}
      <div
        className="absolute pointer-events-none orb-rotate"
        style={{ top: '50%', left: '50%', width: '80vmin', height: '80vmin', transform: 'translate(-50%,-50%)' }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full opacity-[0.06]" fill="none">
          <circle cx="200" cy="200" r="195" stroke="#AE8532" strokeWidth="0.6" strokeDasharray="8 12" />
          <circle cx="200" cy="200" r="170" stroke="#AE8532" strokeWidth="0.3" />
          <line x1="5" y1="200" x2="395" y2="200" stroke="#AE8532" strokeWidth="0.4" />
          <line x1="200" y1="5" x2="200" y2="395" stroke="#AE8532" strokeWidth="0.4" />
          <line x1="62" y1="62" x2="338" y2="338" stroke="#AE8532" strokeWidth="0.3" strokeDasharray="4 8" />
          <line x1="338" y1="62" x2="62" y2="338" stroke="#AE8532" strokeWidth="0.3" strokeDasharray="4 8" />
          <polygon points="200,30 370,140 370,260 200,370 30,260 30,140" stroke="#AE8532" strokeWidth="0.4" fill="none" />
        </svg>
      </div>

      {/* ── Static dots ── */}
      {DOTS.map(d => (
        <div
          key={d.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            background: '#AE8532',
            opacity: d.opacity,
            animation: `pulse ${d.dur}s ease-in-out ${d.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* ── Scan line ── */}
      <div
        className="scan-line absolute top-0 bottom-0 w-px pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(174,133,50,0.4), transparent)' }}
      />

      {/* ── Corner brackets ── */}
      <CornerBrackets />

      {/* ── Top border line ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(174,133,50,0.6) 50%, transparent 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(174,133,50,0.3) 50%, transparent 100%)' }}
      />

      {/* ── Language switcher ── */}
      <div className="absolute top-6 right-6 z-20 flex gap-1.5">
        {(Object.keys(LANG_LABELS) as LangCode[]).map(code => (
          <button
            key={code}
            onClick={() => switchLang(code)}
            className={`px-2.5 py-1 text-[10px] tracking-widest font-cinzel border transition-all duration-300 ${
              lang === code
                ? 'lang-active border-brand-gold/60 text-brand-gold-light'
                : 'border-brand-gold/10 text-white/30 hover:border-brand-gold/30 hover:text-white/60'
            }`}
          >
            {LANG_LABELS[code]}
          </button>
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-2xl">

        {/* Logo */}
        <div
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'translateY(0) scale(1)' : 'translateY(-16px) scale(0.96)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <img
            src="/beyaz_yazi.svg"
            alt="Zoey İnşaat"
            className="logo-pulse mx-auto"
            style={{ width: 'min(340px, 72vw)', height: 'auto' }}
          />
        </div>

        {/* Divider line */}
        <div className="relative my-10 w-full max-w-xs flex items-center gap-4">
          <div
            ref={lineRef}
            className="line-expand flex-1 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #AE8532 40%, #C69A49, #AE8532 60%, transparent)' }}
          />
          {/* Diamond center ornament */}
          <div
            style={{
              opacity: phase >= 2 ? 1 : 0,
              transition: 'opacity 0.6s ease 0.4s',
              flexShrink: 0,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="1" y="1" width="10" height="10" transform="rotate(45 6 6)" fill="#AE8532" />
            </svg>
          </div>
          <div
            className="line-expand flex-1 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, #AE8532 40%, #C69A49, #AE8532 60%, transparent)',
              transitionDelay: '0.15s',
            }}
            ref={el => { if (el && phase >= 2) setTimeout(() => el.classList.add('active'), 150); }}
          />
        </div>

        {/* Text block — language-aware */}
        <div
          key={textKey}
          className={isRtl ? 'rtl w-full' : 'w-full'}
          style={{
            opacity: textFade ? 1 : 0,
            transition: 'opacity 0.28s ease',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              opacity: phase >= 3 ? 1 : 0,
              transform: phase >= 3 ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <span className="font-cinzel text-[10px] tracking-[0.45em] text-brand-gold/50 uppercase">
              {t.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              opacity: phase >= 3 ? 1 : 0,
              transform: phase >= 3 ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s',
            }}
          >
            <h1
              className="font-display mt-4 leading-none"
              style={{ fontSize: 'clamp(2.6rem, 8vw, 5.5rem)', fontWeight: 300 }}
            >
              <span className="block text-white/90">{t.headline[0]}</span>
              <span
                className="block text-gold-gradient font-display italic"
                style={{ fontWeight: 400, marginTop: '0.05em' }}
              >
                {t.headline[1]}
              </span>
            </h1>
          </div>

          {/* Sub */}
          <div
            style={{
              opacity: phase >= 4 ? 1 : 0,
              transform: phase >= 4 ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <p className="mt-7 font-display text-lg text-white/40 font-light tracking-wide leading-relaxed italic">
              {t.sub}
            </p>
          </div>
        </div>

        {/* Second divider */}
        <div
          className="mt-10 w-32 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(174,133,50,0.4), transparent)',
            opacity: phase >= 4 ? 1 : 0,
            transition: 'opacity 0.8s ease 0.2s',
          }}
        />

        {/* Contact */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-10"
          style={{
            opacity: phase >= 5 ? 1 : 0,
            transform: phase >= 5 ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <ContactItem icon={<Mail size={12} />} href="mailto:info@zoey.com.tr" label="info@zoey.com.tr" />
        </div>
      </div>

      {/* ── "Soon" watermark ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-cinzel text-[9px] tracking-[0.5em] text-white/12 uppercase"
        style={{ letterSpacing: '0.6em', whiteSpace: 'nowrap' }}
      >
        {T[lang].soon} &nbsp;·&nbsp; Zoey İnşaat
      </div>
    </div>
  );
}

function ContactItem({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-2.5 transition-all duration-300"
      style={{ color: 'rgba(255,255,255,0.45)' }}
      onMouseEnter={e => (e.currentTarget.style.color = '#C69A49')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
    >
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:border-brand-gold/60 flex-shrink-0"
        style={{ borderColor: 'rgba(174,133,50,0.25)', color: '#AE8532' }}
      >
        {icon}
      </div>
      <span className="font-cinzel text-[11px] tracking-widest">{label}</span>
    </a>
  );
}

function CornerBrackets() {
  const cls = "absolute pointer-events-none opacity-30";
  const s = "w-8 h-8";
  return (
    <>
      <div className={`${cls} top-5 left-5 ${s} border-t border-l`} style={{ borderColor: '#AE8532' }} />
      <div className={`${cls} top-5 right-5 ${s} border-t border-r`} style={{ borderColor: '#AE8532' }} />
      <div className={`${cls} bottom-5 left-5 ${s} border-b border-l`} style={{ borderColor: '#AE8532' }} />
      <div className={`${cls} bottom-5 right-5 ${s} border-b border-r`} style={{ borderColor: '#AE8532' }} />
    </>
  );
}
