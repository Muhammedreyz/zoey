import { useReveal } from '../hooks/useReveal';
import { useLang } from '../hooks/useLang';
import { MapPin, Maximize, Calendar } from 'lucide-react';
import { ReactNode } from 'react';

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

function getProjects(lang: string): Project[] {
  if (lang === 'tr') return [
    { title: 'Zoey Residence', subtitle: 'Premium Ya\u015Fam Alan\u0131', category: 'Konut', location: '\u0130stanbul, T\u00FCrkiye', area: '12.500 m\u00B2', year: '2024', description: 'Modern mimarinin zarif \u00E7izgileriyle \u015Fekillenen, 48 daireden olu\u015Fan l\u00FCks konut projesi. Do\u011Fal ta\u015F cephe kaplamalar\u0131, ak\u0131ll\u0131 ev sistemleri ve peyzaj tasar\u0131m\u0131yla ya\u015Fam kalitesini en \u00FCst seviyeye ta\u015F\u0131yoruz.', features: ['Ak\u0131ll\u0131 Ev Sistemleri', 'Do\u011Fal Ta\u015F Cephe', 'Yeralt\u0131 Otopark', 'Peyzaj & Havuz'] },
    { title: 'Zoey Business Park', subtitle: 'A+ S\u0131n\u0131f\u0131 Ofis Kompleksi', category: 'Ticari', location: 'Ankara, T\u00FCrkiye', area: '28.000 m\u00B2', year: '2025', description: 'S\u00FCrd\u00FCr\u00FClebilir tasar\u0131m ilkeleriyle in\u015Fa edilen, LEED sertifikas\u0131 hedefleyen A+ s\u0131n\u0131f\u0131 ofis kompleksi. \u00C7ift cidarl\u0131 cam cephe, ye\u015Fil \u00E7at\u0131 uygulamas\u0131 ve enerji verimli mekanik sistemlerle donat\u0131lm\u0131\u015Ft\u0131r.', features: ['LEED Sertifikal\u0131', '\u00C7ift Cidarl\u0131 Cephe', 'Ye\u015Fil \u00C7at\u0131', 'EV \u015Earj \u0130stasyonlar\u0131'] },
  ];
  if (lang === 'de') return [
    { title: 'Zoey Residence', subtitle: 'Premium Wohnanlage', category: 'Wohnen', location: 'Istanbul, T\u00FCrkei', area: '12.500 m\u00B2', year: '2024', description: 'Ein luxuri\u00F6ses Wohnprojekt mit 48 Wohnungen, gepr\u00E4gt von eleganten Linien moderner Architektur. Natursteinfassaden, Smart-Home-Systeme und Landschaftsdesign.', features: ['Smart Home', 'Natursteinfassade', 'Tiefgarage', 'Pool & Garten'] },
    { title: 'Zoey Business Park', subtitle: 'A+ B\u00FCrokomplex', category: 'Gewerbe', location: 'Ankara, T\u00FCrkei', area: '28.000 m\u00B2', year: '2025', description: 'Ein A+ B\u00FCrokomplex mit nachhaltigen Designprinzipien, der eine LEED-Zertifizierung anstrebt. Doppelwandige Glasfassade und energieeffiziente mechanische Systeme.', features: ['LEED-zertifiziert', 'Doppelfassade', 'Gr\u00FCndach', 'EV-Ladestationen'] },
  ];
  if (lang === 'ru') return [
    { title: 'Zoey Residence', subtitle: '\u041F\u0440\u0435\u043C\u0438\u0443\u043C \u0416\u0438\u043B\u044C\u0451', category: '\u0416\u0438\u043B\u044C\u0451', location: '\u0421\u0442\u0430\u043C\u0431\u0443\u043B, \u0422\u0443\u0440\u0446\u0438\u044F', area: '12.500 m\u00B2', year: '2024', description: '\u0420\u043E\u0441\u043A\u043E\u0448\u043D\u044B\u0439 \u0436\u0438\u043B\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u0438\u0437 48 \u043A\u0432\u0430\u0440\u0442\u0438\u0440 \u0441 \u044D\u043B\u0435\u0433\u0430\u043D\u0442\u043D\u043E\u0439 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043E\u0439. \u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u043C\u0435\u043D\u044C, \u0443\u043C\u043D\u044B\u0439 \u0434\u043E\u043C \u0438 \u043B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D.', features: ['\u0423\u043C\u043D\u044B\u0439 \u0414\u043E\u043C', '\u041A\u0430\u043C\u0435\u043D\u043D\u044B\u0439 \u0424\u0430\u0441\u0430\u0434', '\u041F\u043E\u0434\u0437\u0435\u043C\u043D\u0430\u044F \u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430', '\u0411\u0430\u0441\u0441\u0435\u0439\u043D & \u0421\u0430\u0434'] },
    { title: 'Zoey Business Park', subtitle: '\u041E\u0444\u0438\u0441\u043D\u044B\u0439 \u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 A+', category: '\u041A\u043E\u043C\u043C\u0435\u0440\u0446\u0438\u044F', location: '\u0410\u043D\u043A\u0430\u0440\u0430, \u0422\u0443\u0440\u0446\u0438\u044F', area: '28.000 m\u00B2', year: '2025', description: '\u041E\u0444\u0438\u0441\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u043A\u043B\u0430\u0441\u0441\u0430 A+ \u0441 \u0443\u0441\u0442\u043E\u0439\u0447\u0438\u0432\u044B\u043C \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C, \u043D\u0430\u0446\u0435\u043B\u0435\u043D\u043D\u044B\u0439 \u043D\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E LEED. \u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0441\u0442\u0435\u043A\u043B\u044F\u043D\u043D\u044B\u0439 \u0444\u0430\u0441\u0430\u0434 \u0438 \u044D\u043D\u0435\u0440\u0433\u043E\u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B.', features: ['LEED', '\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u0424\u0430\u0441\u0430\u0434', '\u0417\u0435\u043B\u0451\u043D\u0430\u044F \u041A\u0440\u044B\u0448\u0430', 'EV \u0417\u0430\u0440\u044F\u0434\u043A\u0430'] },
  ];
  if (lang === 'ar') return [
    { title: 'Zoey Residence', subtitle: '\u0645\u0633\u0627\u0643\u0646 \u0641\u0627\u062E\u0631\u0629', category: '\u0633\u0643\u0646\u064A', location: '\u0625\u0633\u0637\u0646\u0628\u0648\u0644\u060C \u062A\u0631\u0643\u064A\u0627', area: '12.500 m\u00B2', year: '2024', description: '\u0645\u0634\u0631\u0648\u0639 \u0633\u0643\u0646\u064A \u0641\u0627\u062E\u0631 \u064A\u0636\u0645 48 \u0634\u0642\u0629 \u0628\u062A\u0635\u0645\u064A\u0645 \u0645\u0639\u0645\u0627\u0631\u064A \u0639\u0635\u0631\u064A \u0623\u0646\u064A\u0642. \u0648\u0627\u062C\u0647\u0627\u062A \u062D\u062C\u0631 \u0637\u0628\u064A\u0639\u064A \u0648\u0623\u0646\u0638\u0645\u0629 \u0645\u0646\u0632\u0644 \u0630\u0643\u064A \u0648\u062A\u0635\u0645\u064A\u0645 \u0645\u0646\u0627\u0638\u0631 \u0637\u0628\u064A\u0639\u064A\u0629.', features: ['\u0645\u0646\u0632\u0644 \u0630\u0643\u064A', '\u062D\u062C\u0631 \u0637\u0628\u064A\u0639\u064A', '\u0645\u0648\u0627\u0642\u0641 \u062A\u062D\u062A \u0627\u0644\u0623\u0631\u0636', '\u0645\u0633\u0628\u062D & \u062D\u062F\u0627\u0626\u0642'] },
    { title: 'Zoey Business Park', subtitle: '\u0645\u062C\u0645\u0639 \u0645\u0643\u0627\u062A\u0628 A+', category: '\u062A\u062C\u0627\u0631\u064A', location: '\u0623\u0646\u0642\u0631\u0629\u060C \u062A\u0631\u0643\u064A\u0627', area: '28.000 m\u00B2', year: '2025', description: '\u0645\u062C\u0645\u0639 \u0645\u0643\u0627\u062A\u0628 \u0641\u0626\u0629 A+ \u0628\u0645\u0628\u0627\u062F\u0626 \u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0645\u0633\u062A\u062F\u0627\u0645\u060C \u064A\u0633\u0639\u0649 \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0634\u0647\u0627\u062F\u0629 LEED. \u0648\u0627\u062C\u0647\u0629 \u0632\u062C\u0627\u062C\u064A\u0629 \u0645\u0632\u062F\u0648\u062C\u0629 \u0648\u0623\u0646\u0638\u0645\u0629 \u0645\u064A\u0643\u0627\u0646\u064A\u0643\u064A\u0629 \u0645\u0648\u0641\u0631\u0629 \u0644\u0644\u0637\u0627\u0642\u0629.', features: ['LEED', '\u0648\u0627\u062C\u0647\u0629 \u0645\u0632\u062F\u0648\u062C\u0629', '\u0633\u0642\u0641 \u0623\u062E\u0636\u0631', '\u0634\u062D\u0646 EV'] },
  ];
  return [
    { title: 'Zoey Residence', subtitle: 'Premium Living', category: 'Residential', location: 'Istanbul, Turkey', area: '12,500 m\u00B2', year: '2024', description: 'A luxury residential project of 48 apartments shaped by elegant lines of modern architecture. Natural stone cladding, smart home systems, and landscape design elevate living quality.', features: ['Smart Home', 'Natural Stone', 'Underground Parking', 'Pool & Gardens'] },
    { title: 'Zoey Business Park', subtitle: 'A+ Class Office Complex', category: 'Commercial', location: 'Ankara, Turkey', area: '28,000 m\u00B2', year: '2025', description: 'An A+ class office complex built with sustainable design principles, targeting LEED certification. Double-wall glass facade, green roof, and energy-efficient mechanical systems.', features: ['LEED Certified', 'Double Facade', 'Green Roof', 'EV Charging'] },
  ];
}

export default function Projects() {
  const { ref, visible } = useReveal();
  const { t, lang, isRtl } = useLang();
  const projects = getProjects(lang);

  return (
    <section id="projects" className="bg-brand-dark py-28 lg:py-40 overflow-hidden relative" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 20% 50%, rgba(174,133,50,0.03) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16 lg:mb-20`}>
          <div className="flex items-center gap-4 mb-5">
            <span className="w-10 h-px bg-brand-gold/60" />
            <span className="text-xs tracking-[0.4em] text-brand-gold/60 uppercase font-light">{t.projects.tag}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-heading">
              {t.projects.h1}<br /><span className="text-gold-gradient">{t.projects.h2}</span>
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">{t.projects.sub}</p>
          </div>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {projects.map((project, i) => (
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
      className={`grid lg:grid-cols-2 gap-0 items-stretch reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`relative overflow-hidden border border-brand-gold/10 group ${isReversed ? 'lg:order-2' : ''}`} style={{ minHeight: '380px' }}>
        <div className="absolute inset-0 blueprint-grid opacity-20" />
        <div className="absolute inset-0"
          style={{ background: index === 0 ? 'linear-gradient(135deg, rgba(174,133,50,0.06) 0%, rgba(14,3,39,0.95) 100%)' : 'linear-gradient(225deg, rgba(174,133,50,0.06) 0%, rgba(14,3,39,0.95) 100%)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-35 group-hover:opacity-50 transition-opacity duration-700">
          {index === 0 ? <ResidenceIllustration /> : <BusinessIllustration />}
        </div>
        <div className="absolute top-5 left-5 z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-dark/80 border border-brand-gold/25 text-brand-gold text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm font-cinzel">
            {project.category}
          </span>
        </div>
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-brand-gold/30" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-brand-gold/30" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-brand-gold/30" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-brand-gold/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>

      <div className={`flex flex-col justify-center p-8 lg:p-12 border border-brand-gold/10 ${isReversed ? 'lg:order-1 lg:border-r-0' : 'lg:border-l-0'}`}
        style={{ background: 'rgba(18,6,48,0.4)' }}
      >
        <div className="text-[10px] tracking-[0.2em] text-brand-gold/40 uppercase font-light mb-2">{project.subtitle}</div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight font-heading">
          {project.title}
        </h3>
        <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-brand-gold/8">
          <MetaItem icon={<MapPin size={13} />} label={project.location.split(',')[0]} />
          <MetaItem icon={<Maximize size={13} />} label={project.area} />
          <MetaItem icon={<Calendar size={13} />} label={project.year} />
        </div>
        <p className="text-white/40 leading-relaxed font-light mb-8 text-[15px]">{project.description}</p>
        <div className="grid grid-cols-2 gap-3">
          {project.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 bg-brand-gold/50 rotate-45 flex-shrink-0" />
              <span className="text-white/55 text-sm font-light">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetaItem({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-brand-gold/50">
      {icon}
      <span className="text-white/70 text-sm font-light">{label}</span>
    </div>
  );
}

function ResidenceIllustration() {
  return (
    <svg viewBox="0 0 500 400" fill="none" className="w-4/5 h-4/5">
      <rect x="100" y="100" width="300" height="250" stroke="#AE8532" strokeWidth="1" />
      <rect x="130" y="60" width="240" height="50" stroke="#AE8532" strokeWidth="0.7" />
      {[0, 1, 2, 3].map(row => [0, 1, 2, 3, 4].map(col => (
        <rect key={`${row}-${col}`} x={120 + col * 58} y={120 + row * 55} width="28" height="38" fill="rgba(174,133,50,0.08)" stroke="#AE8532" strokeWidth="0.4" />
      )))}
      <rect x="215" y="290" width="70" height="60" fill="rgba(174,133,50,0.06)" stroke="#AE8532" strokeWidth="0.8" />
      <line x1="50" y1="350" x2="450" y2="350" stroke="#AE8532" strokeWidth="0.4" strokeDasharray="4 6" />
    </svg>
  );
}

function BusinessIllustration() {
  return (
    <svg viewBox="0 0 500 400" fill="none" className="w-4/5 h-4/5">
      <rect x="80" y="80" width="140" height="280" stroke="#AE8532" strokeWidth="1" />
      <rect x="260" y="120" width="160" height="240" stroke="#AE8532" strokeWidth="0.8" />
      <rect x="220" y="180" width="40" height="60" stroke="#AE8532" strokeWidth="0.5" fill="rgba(174,133,50,0.03)" />
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <line key={`f1-${i}`} x1="80" y1={120 + i * 35} x2="220" y2={120 + i * 35} stroke="#AE8532" strokeWidth="0.25" />
      ))}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <line key={`f2-${i}`} x1="260" y1={155 + i * 38} x2="420" y2={155 + i * 38} stroke="#AE8532" strokeWidth="0.25" />
      ))}
      {[0, 1, 2, 3].map(col => (
        <line key={`v1-${col}`} x1={110 + col * 30} y1="80" x2={110 + col * 30} y2="360" stroke="#AE8532" strokeWidth="0.25" />
      ))}
      {[0, 1, 2, 3, 4].map(col => (
        <line key={`v2-${col}`} x1={285 + col * 30} y1="120" x2={285 + col * 30} y2="360" stroke="#AE8532" strokeWidth="0.25" />
      ))}
      <line x1="40" y1="360" x2="460" y2="360" stroke="#AE8532" strokeWidth="0.4" strokeDasharray="4 6" />
    </svg>
  );
}
