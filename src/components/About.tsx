import { useReveal, useCountUp } from '../hooks/useReveal';

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
      <div className="text-4xl md:text-5xl font-bold text-brand-gold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
        {count}{suffix}
      </div>
      <div className="text-xs tracking-widest text-white/40 uppercase mt-2 font-light">{label}</div>
    </div>
  );
}

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="bg-brand-dark py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

          {/* Left */}
          <div className={`reveal ${visible ? 'visible' : ''}`} ref={ref}>
            <span className="text-xs tracking-[0.4em] text-brand-gold/60 uppercase font-light block mb-4">
              Hakkımızda
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Türkiye'nin<br />
              <span className="text-gold-gradient">Güvenilir</span><br />
              İnşaat Partneri
            </h2>
            <div className="w-16 h-px bg-brand-gold mb-8" />
            <p className="text-white/55 leading-relaxed text-lg mb-6 font-light">
              Zoey İnşaat, yılların deneyimi ve uzman kadrosuyla konut, ticari ve endüstriyel
              projelerde en yüksek kalite standartlarını sunar. Her projemize mühendislik
              hassasiyeti ve estetik duyarlılığıyla yaklaşıyoruz.
            </p>
            <p className="text-white/40 leading-relaxed font-light">
              Müşterilerimizin hayallerini somut gerçekliklere dönüştürmek için alanının
              en iyileriyle çalışıyor; güven, şeffaflık ve mükemmeliyeti her adımda ilke
              ediniyoruz.
            </p>
          </div>

          {/* Right — decorative architectural diagram */}
          <div className={`reveal-right ${visible ? 'visible' : ''} relative`}>
            <div
              className="relative aspect-square max-w-sm mx-auto rounded-none overflow-hidden border border-brand-gold/15"
              style={{ background: 'linear-gradient(135deg, #1a0a3d 0%, #0E0327 100%)' }}
            >
              {/* Blueprint overlay */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-30" fill="none">
                <line x1="0" y1="50" x2="400" y2="50" stroke="#AE8532" strokeWidth="0.5" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="#AE8532" strokeWidth="0.5" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="#AE8532" strokeWidth="0.5" />
                <line x1="0" y1="200" x2="400" y2="200" stroke="#AE8532" strokeWidth="1" />
                <line x1="0" y1="250" x2="400" y2="250" stroke="#AE8532" strokeWidth="0.5" />
                <line x1="0" y1="300" x2="400" y2="300" stroke="#AE8532" strokeWidth="0.5" />
                <line x1="0" y1="350" x2="400" y2="350" stroke="#AE8532" strokeWidth="0.5" />
                <line x1="50" y1="0" x2="50" y2="400" stroke="#AE8532" strokeWidth="0.5" />
                <line x1="100" y1="0" x2="100" y2="400" stroke="#AE8532" strokeWidth="0.5" />
                <line x1="150" y1="0" x2="150" y2="400" stroke="#AE8532" strokeWidth="0.5" />
                <line x1="200" y1="0" x2="200" y2="400" stroke="#AE8532" strokeWidth="1" />
                <line x1="250" y1="0" x2="250" y2="400" stroke="#AE8532" strokeWidth="0.5" />
                <line x1="300" y1="0" x2="300" y2="400" stroke="#AE8532" strokeWidth="0.5" />
                <line x1="350" y1="0" x2="350" y2="400" stroke="#AE8532" strokeWidth="0.5" />
                {/* Building silhouette */}
                <rect x="80" y="150" width="240" height="200" fill="rgba(174,133,50,0.08)" stroke="#AE8532" strokeWidth="1" />
                <rect x="130" y="100" width="140" height="60" fill="rgba(174,133,50,0.05)" stroke="#AE8532" strokeWidth="0.8" />
                <rect x="175" y="60" width="50" height="50" fill="rgba(174,133,50,0.05)" stroke="#AE8532" strokeWidth="0.6" />
                {/* Windows */}
                <rect x="100" y="170" width="25" height="30" fill="rgba(174,133,50,0.15)" stroke="#AE8532" strokeWidth="0.5" />
                <rect x="145" y="170" width="25" height="30" fill="rgba(174,133,50,0.15)" stroke="#AE8532" strokeWidth="0.5" />
                <rect x="230" y="170" width="25" height="30" fill="rgba(174,133,50,0.15)" stroke="#AE8532" strokeWidth="0.5" />
                <rect x="275" y="170" width="25" height="30" fill="rgba(174,133,50,0.15)" stroke="#AE8532" strokeWidth="0.5" />
                <rect x="100" y="220" width="25" height="30" fill="rgba(174,133,50,0.15)" stroke="#AE8532" strokeWidth="0.5" />
                <rect x="145" y="220" width="25" height="30" fill="rgba(174,133,50,0.15)" stroke="#AE8532" strokeWidth="0.5" />
                <rect x="230" y="220" width="25" height="30" fill="rgba(174,133,50,0.15)" stroke="#AE8532" strokeWidth="0.5" />
                <rect x="275" y="220" width="25" height="30" fill="rgba(174,133,50,0.15)" stroke="#AE8532" strokeWidth="0.5" />
                {/* Door */}
                <rect x="175" y="300" width="50" height="50" fill="rgba(174,133,50,0.1)" stroke="#AE8532" strokeWidth="0.8" />
                {/* Dimension lines */}
                <line x1="80" y1="370" x2="320" y2="370" stroke="#AE8532" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="80" y1="365" x2="80" y2="375" stroke="#AE8532" strokeWidth="0.8" />
                <line x1="320" y1="365" x2="320" y2="375" stroke="#AE8532" strokeWidth="0.8" />
                <text x="200" y="385" fill="#AE8532" fontSize="10" textAnchor="middle" fontFamily="monospace" opacity="0.6">24.00 m</text>
              </svg>
              {/* Gold corner marks */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-brand-gold/60" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-brand-gold/60" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-brand-gold/60" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-brand-gold/60" />
            </div>
            {/* Floating tag */}
            <div className="absolute -bottom-4 -right-4 bg-brand-gold px-4 py-2 text-brand-dark text-xs font-bold tracking-widest uppercase">
              Mükemmellik
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="border-t border-brand-gold/15 border-b pt-12 pb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatItem target={15} suffix="+" label="Yıl Deneyim" enabled={visible} />
            <StatItem target={120} suffix="+" label="Tamamlanan Proje" enabled={visible} />
            <StatItem target={98} suffix="%" label="Müşteri Memnuniyeti" enabled={visible} />
            <StatItem target={50} suffix="+" label="Uzman Kadro" enabled={visible} />
          </div>
        </div>
      </div>
    </section>
  );
}
