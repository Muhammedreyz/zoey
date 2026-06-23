import { useReveal } from '../hooks/useReveal';
import { Clock } from 'lucide-react';

const PLACEHOLDER_PROJECTS = [
  { title: 'Lüks Rezidans Kompleksi', category: 'Konut', location: 'İstanbul', size: 'large' },
  { title: 'Ofis Kuleleri Projesi', category: 'Ticari', location: 'Ankara', size: 'small' },
  { title: 'Endüstriyel Tesis', category: 'Endüstriyel', location: 'İzmir', size: 'small' },
  { title: 'Karma Kullanım Yapısı', category: 'Karma', location: 'İstanbul', size: 'medium' },
  { title: 'Villa Projesi', category: 'Konut', location: 'Bodrum', size: 'medium' },
  { title: 'Alışveriş Merkezi', category: 'Ticari', location: 'Bursa', size: 'large' },
];

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="bg-brand-dark py-24 lg:py-36 overflow-hidden relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 20% 50%, rgba(174,133,50,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-px bg-brand-gold" />
            <span className="text-xs tracking-[0.4em] text-brand-gold/60 uppercase font-light">
              Projelerimiz
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Tamamlanan<br />
              <span className="text-gold-gradient">Eserlerimiz</span>
            </h2>
            <p className="text-white/45 text-lg font-light leading-relaxed">
              Proje görselleri yakında burada yer alacak. Her biri özenle inşa edilmiş
              çalışmalarımızı sizlerle paylaşmayı sabırsızlıkla bekliyoruz.
            </p>
          </div>
        </div>

        {/* Masonry-style placeholder grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLACEHOLDER_PROJECTS.map((project, i) => (
            <ProjectPlaceholder key={i} project={project} delay={i * 80} visible={visible} />
          ))}
        </div>

        {/* Coming soon notice */}
        <div
          className={`reveal ${visible ? 'visible' : ''} mt-12 flex items-center justify-center gap-4 py-6 border border-brand-gold/15`}
          style={{ transitionDelay: '600ms' }}
        >
          <Clock size={16} className="text-brand-gold/60" />
          <span className="text-xs tracking-[0.3em] text-brand-gold/50 uppercase font-light">
            Proje görselleri çok yakında eklenecek
          </span>
          <Clock size={16} className="text-brand-gold/60" />
        </div>
      </div>
    </section>
  );
}

interface PlaceholderProject {
  title: string;
  category: string;
  location: string;
  size: string;
}

function ProjectPlaceholder({
  project,
  delay,
  visible,
}: {
  project: PlaceholderProject;
  delay: number;
  visible: boolean;
}) {
  const heights: Record<string, string> = {
    large: 'h-72',
    medium: 'h-56',
    small: 'h-48',
  };

  return (
    <div
      className="group relative overflow-hidden border border-brand-gold/10 hover:border-brand-gold/30 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms, border-color 0.5s ease`,
      }}
    >
      {/* Shimmer placeholder */}
      <div
        className={`${heights[project.size] || 'h-56'} shimmer-card relative overflow-hidden`}
        style={{ background: 'rgba(174,133,50,0.04)' }}
      >
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 opacity-30 blueprint-grid" />

        {/* Center icon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-14 h-14 border border-brand-gold/30 flex items-center justify-center mb-3 group-hover:border-brand-gold/60 transition-colors duration-300">
            <svg viewBox="0 0 28 28" className="w-7 h-7" fill="none">
              <rect x="4" y="8" width="20" height="16" stroke="#AE8532" strokeWidth="1" opacity="0.5" />
              <rect x="8" y="4" width="12" height="6" stroke="#AE8532" strokeWidth="1" opacity="0.5" />
              <line x1="11" y1="16" x2="17" y2="16" stroke="#AE8532" strokeWidth="1" opacity="0.5" />
              <line x1="14" y1="13" x2="14" y2="19" stroke="#AE8532" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
          <span className="text-xs text-brand-gold/40 tracking-widest uppercase font-light">
            Görsel Yakında
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Card info */}
      <div className="p-5 bg-brand-dark border-t border-brand-gold/10">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs tracking-widest text-brand-gold/50 uppercase font-light">
            {project.category}
          </span>
          <span className="text-xs text-white/30 font-light">{project.location}</span>
        </div>
        <h3 className="text-white font-medium text-base group-hover:text-brand-gold transition-colors duration-300">
          {project.title}
        </h3>
      </div>
    </div>
  );
}
