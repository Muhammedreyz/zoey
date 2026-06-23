import { useReveal } from '../hooks/useReveal';
import { Building2, HardHat, Layers, Ruler, Wrench, BarChart3 } from 'lucide-react';
import { ReactNode } from 'react';

interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
  tag: string;
}

const SERVICES: Service[] = [
  {
    icon: <Building2 size={28} />,
    title: 'Konut İnşaatı',
    desc: 'Tek aile konutlarından büyük yerleşim komplekslerine kadar her ölçekte, yüksek kalite standartlarında konut projeleri geliştiriyoruz.',
    tag: 'Residential',
  },
  {
    icon: <Layers size={28} />,
    title: 'Ticari Yapılar',
    desc: 'Ofis binaları, alışveriş merkezleri ve karma kullanımlı yapılarda mühendislik çözümleri sunuyoruz.',
    tag: 'Commercial',
  },
  {
    icon: <HardHat size={28} />,
    title: 'Endüstriyel Projeler',
    desc: 'Fabrika, depo ve sanayi tesisleri inşaatında güçlü altyapı ve uzman proje yönetimi sağlıyoruz.',
    tag: 'Industrial',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Yenileme & Tadilat',
    desc: 'Mevcut yapıları modern standartlara yükseltmek için kapsamlı yenileme ve tadilat hizmetleri sunuyoruz.',
    tag: 'Renovation',
  },
  {
    icon: <Ruler size={28} />,
    title: 'Proje Tasarımı',
    desc: 'Mimari tasarımdan mühendislik hesaplamalarına uzanan entegre proje geliştirme süreçlerini yönetiyoruz.',
    tag: 'Design',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Proje Yönetimi',
    desc: 'Başlangıçtan teslimata tüm süreçleri izliyor, bütçe ve zaman yönetiminde şeffaflığı ön planda tutuyoruz.',
    tag: 'Management',
  },
];

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="bg-brand-dark-3 py-24 lg:py-36 overflow-hidden relative">
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(174,133,50,0.3), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 80% 50%, rgba(174,133,50,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16 lg:mb-20`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-px bg-brand-gold" />
            <span className="text-xs tracking-[0.4em] text-brand-gold/60 uppercase font-light">
              Hizmetlerimiz
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Her Projede<br />
              <span className="text-gold-gradient">Üstün Kalite</span>
            </h2>
            <p className="text-white/45 text-lg font-light leading-relaxed">
              Geniş hizmet yelpazemizle, fikrin doğuşundan projenin teslimına kadar
              her adımda yanınızdayız.
            </p>
          </div>
        </div>

        {/* Services grid — asymmetric layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-brand-gold/10">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={i} svc={svc} delay={i * 100} visible={visible} />
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(174,133,50,0.3), transparent)' }}
      />
    </section>
  );
}

function ServiceCard({ svc, delay, visible }: { svc: Service; delay: number; visible: boolean }) {
  return (
    <div
      className="group relative p-8 border-b border-r border-brand-gold/10 hover:bg-brand-gold/5 transition-all duration-500 overflow-hidden reveal"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {/* Gold left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

      <div className="text-brand-gold mb-5 transition-transform duration-300 group-hover:-translate-y-1">
        {svc.icon}
      </div>
      <div className="text-xs tracking-widest text-brand-gold/40 uppercase font-light mb-2">
        {svc.tag}
      </div>
      <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-brand-gold transition-colors duration-300">
        {svc.title}
      </h3>
      <p className="text-white/45 text-sm leading-relaxed font-light">
        {svc.desc}
      </p>
    </div>
  );
}
