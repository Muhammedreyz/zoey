import { useReveal } from '../hooks/useReveal';
import { MapPin, Maximize, Calendar } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  category: string;
  location: string;
  area: string;
  year: string;
  description: string;
  features: string[];
}

const PROJECTS: Project[] = [
  {
    title: 'Zoey Residence',
    subtitle: 'Premium Yaşam Alanı',
    category: 'Konut',
    location: 'İstanbul, Türkiye',
    area: '12.500 m\u00B2',
    year: '2024',
    description: 'Modern mimarinin zarif çizgileriyle şekillenen, 48 daireden oluşan lüks konut projesi. Doğal taş cephe kaplamaları, akıllı ev sistemleri ve peyzaj tasarımıyla yaşam kalitesini en üst seviyeye taşıyoruz.',
    features: ['Akıllı Ev Sistemleri', 'Doğal Taş Cephe', 'Yeraltı Otopark', 'Peyzaj & Havuz'],
  },
  {
    title: 'Zoey Business Park',
    subtitle: 'A+ Sınıfı Ofis Kompleksi',
    category: 'Ticari',
    location: 'Ankara, Türkiye',
    area: '28.000 m\u00B2',
    year: '2025',
    description: 'Sürdürülebilir tasarım ilkeleriyle inşa edilen, LEED sertifikası hedefleyen A+ sınıfı ofis kompleksi. Çift cidarlı cam cephe, yeşil çatı uygulaması ve enerji verimli mekanik sistemlerle donatılmıştır.',
    features: ['LEED Sertifikalı', 'Çift Cidarlı Cephe', 'Yeşil Çatı', 'EV Şarj İstasyonları'],
  },
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
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16 lg:mb-20`}>
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
              Her projemiz, mühendislik hassasiyeti ve estetik duyarlılığın
              mükemmel uyumunu yansıtır.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, visible }: { project: Project; index: number; visible: boolean }) {
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 lg:gap-0 items-stretch reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Visual panel */}
      <div
        className={`relative overflow-hidden border border-brand-gold/15 group ${isReversed ? 'lg:order-2' : ''}`}
        style={{ minHeight: '400px' }}
      >
        {/* Blueprint background */}
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div
          className="absolute inset-0"
          style={{
            background: index === 0
              ? 'linear-gradient(135deg, rgba(174,133,50,0.08) 0%, rgba(14,3,39,0.95) 100%)'
              : 'linear-gradient(225deg, rgba(174,133,50,0.08) 0%, rgba(14,3,39,0.95) 100%)',
          }}
        />

        {/* Architectural SVG illustration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-700">
          {index === 0 ? <ResidenceIllustration /> : <BusinessIllustration />}
        </div>

        {/* Category badge */}
        <div className="absolute top-6 left-6 z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-dark/80 border border-brand-gold/30 text-brand-gold text-xs tracking-widest uppercase backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Corner marks */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-brand-gold/40" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-brand-gold/40" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-brand-gold/40" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-brand-gold/40" />

        {/* Hover shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>

      {/* Info panel */}
      <div
        className={`flex flex-col justify-center p-8 lg:p-12 border border-brand-gold/15 ${isReversed ? 'lg:order-1 lg:border-r-0' : 'lg:border-l-0'}`}
        style={{ background: 'rgba(18,6,48,0.5)' }}
      >
        <div className="text-xs tracking-widest text-brand-gold/50 uppercase font-light mb-2">
          {project.subtitle}
        </div>
        <h3
          className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {project.title}
        </h3>

        {/* Meta */}
        <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-brand-gold/10">
          <MetaItem icon={<MapPin size={14} />} label="Konum" value={project.location.split(',')[0]} />
          <MetaItem icon={<Maximize size={14} />} label="Alan" value={project.area} />
          <MetaItem icon={<Calendar size={14} />} label="Yıl" value={project.year} />
        </div>

        <p className="text-white/45 leading-relaxed font-light mb-8">
          {project.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3">
          {project.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 bg-brand-gold/60 rotate-45 flex-shrink-0" />
              <span className="text-white/60 text-sm font-light">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetaItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5 text-brand-gold/50">
        {icon}
        <span className="text-[10px] tracking-widest uppercase font-light">{label}</span>
      </div>
      <span className="text-white/80 text-sm font-medium">{value}</span>
    </div>
  );
}

function ResidenceIllustration() {
  return (
    <svg viewBox="0 0 500 400" fill="none" className="w-4/5 h-4/5">
      {/* Main building */}
      <rect x="100" y="100" width="300" height="250" stroke="#AE8532" strokeWidth="1.2" />
      <rect x="130" y="60" width="240" height="50" stroke="#AE8532" strokeWidth="0.8" />
      {/* Windows grid */}
      {[0, 1, 2, 3].map(row =>
        [0, 1, 2, 3, 4].map(col => (
          <rect
            key={`${row}-${col}`}
            x={120 + col * 58}
            y={120 + row * 55}
            width="30"
            height="40"
            fill="rgba(174,133,50,0.1)"
            stroke="#AE8532"
            strokeWidth="0.5"
          />
        ))
      )}
      {/* Entrance */}
      <rect x="215" y="290" width="70" height="60" fill="rgba(174,133,50,0.08)" stroke="#AE8532" strokeWidth="1" />
      <path d="M215 290 L250 265 L285 290" stroke="#AE8532" strokeWidth="0.8" fill="none" />
      {/* Ground line */}
      <line x1="50" y1="350" x2="450" y2="350" stroke="#AE8532" strokeWidth="0.5" strokeDasharray="4 6" />
      {/* Dimension */}
      <line x1="100" y1="370" x2="400" y2="370" stroke="#AE8532" strokeWidth="0.5" />
      <line x1="100" y1="365" x2="100" y2="375" stroke="#AE8532" strokeWidth="0.8" />
      <line x1="400" y1="365" x2="400" y2="375" stroke="#AE8532" strokeWidth="0.8" />
      <text x="250" y="388" fill="#AE8532" fontSize="9" textAnchor="middle" fontFamily="monospace" opacity="0.5">45.00 m</text>
    </svg>
  );
}

function BusinessIllustration() {
  return (
    <svg viewBox="0 0 500 400" fill="none" className="w-4/5 h-4/5">
      {/* Tower 1 */}
      <rect x="80" y="80" width="140" height="280" stroke="#AE8532" strokeWidth="1.2" />
      {/* Tower 2 */}
      <rect x="260" y="120" width="160" height="240" stroke="#AE8532" strokeWidth="1" />
      {/* Connector */}
      <rect x="220" y="180" width="40" height="60" stroke="#AE8532" strokeWidth="0.6" fill="rgba(174,133,50,0.05)" />
      {/* Tower 1 floors */}
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <line key={`f1-${i}`} x1="80" y1={120 + i * 35} x2="220" y2={120 + i * 35} stroke="#AE8532" strokeWidth="0.3" />
      ))}
      {/* Tower 2 floors */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <line key={`f2-${i}`} x1="260" y1={155 + i * 38} x2="420" y2={155 + i * 38} stroke="#AE8532" strokeWidth="0.3" />
      ))}
      {/* Glass curtain wall pattern - Tower 1 */}
      {[0, 1, 2, 3].map(col => (
        <line key={`v1-${col}`} x1={110 + col * 30} y1="80" x2={110 + col * 30} y2="360" stroke="#AE8532" strokeWidth="0.3" />
      ))}
      {/* Glass curtain wall pattern - Tower 2 */}
      {[0, 1, 2, 3, 4].map(col => (
        <line key={`v2-${col}`} x1={285 + col * 30} y1="120" x2={285 + col * 30} y2="360" stroke="#AE8532" strokeWidth="0.3" />
      ))}
      {/* Roof features */}
      <rect x="120" y="60" width="60" height="20" stroke="#AE8532" strokeWidth="0.6" fill="rgba(174,133,50,0.05)" />
      <rect x="310" y="100" width="60" height="20" stroke="#AE8532" strokeWidth="0.6" fill="rgba(174,133,50,0.05)" />
      {/* Ground */}
      <line x1="40" y1="360" x2="460" y2="360" stroke="#AE8532" strokeWidth="0.5" strokeDasharray="4 6" />
      {/* Trees */}
      <circle cx="50" cy="345" r="12" stroke="#AE8532" strokeWidth="0.4" fill="rgba(174,133,50,0.03)" />
      <circle cx="450" cy="345" r="12" stroke="#AE8532" strokeWidth="0.4" fill="rgba(174,133,50,0.03)" />
      {/* Dimension */}
      <line x1="80" y1="380" x2="420" y2="380" stroke="#AE8532" strokeWidth="0.5" />
      <line x1="80" y1="375" x2="80" y2="385" stroke="#AE8532" strokeWidth="0.8" />
      <line x1="420" y1="375" x2="420" y2="385" stroke="#AE8532" strokeWidth="0.8" />
      <text x="250" y="396" fill="#AE8532" fontSize="9" textAnchor="middle" fontFamily="monospace" opacity="0.5">68.00 m</text>
    </svg>
  );
}
