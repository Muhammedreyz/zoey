import { useReveal } from '../hooks/useReveal';
import { Shield, Clock, Award, Users, Lightbulb, Handshake } from 'lucide-react';

const VALUES = [
  { icon: <Shield size={20} />, label: 'Güven & Şeffaflık' },
  { icon: <Clock size={20} />, label: 'Zamanında Teslim' },
  { icon: <Award size={20} />, label: 'Kalite Güvencesi' },
  { icon: <Users size={20} />, label: 'Uzman Ekip' },
  { icon: <Lightbulb size={20} />, label: 'Yenilikçi Çözümler' },
  { icon: <Handshake size={20} />, label: 'Müşteri Odaklılık' },
  { icon: <Shield size={20} />, label: 'Güven & Şeffaflık' },
  { icon: <Clock size={20} />, label: 'Zamanında Teslim' },
  { icon: <Award size={20} />, label: 'Kalite Güvencesi' },
  { icon: <Users size={20} />, label: 'Uzman Ekip' },
  { icon: <Lightbulb size={20} />, label: 'Yenilikçi Çözümler' },
  { icon: <Handshake size={20} />, label: 'Müşteri Odaklılık' },
];

export default function WhyZoey() {
  const { ref, visible } = useReveal();

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #120630 0%, #0E0327 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-5 blueprint-grid"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center`}>
          <span className="text-xs tracking-[0.4em] text-brand-gold/60 uppercase font-light block mb-4">
            Neden Zoey?
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Farkımız,<br />
            <span className="text-gold-gradient">Detaylara Verdiğimiz Önem</span>
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-6">
        <div
          className="flex gap-0 whitespace-nowrap"
          style={{ animation: 'marquee 25s linear infinite' }}
        >
          {VALUES.map((v, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-8 border-r border-brand-gold/15 text-white/50 hover:text-brand-gold transition-colors duration-300"
            >
              <span className="text-brand-gold/60">{v.icon}</span>
              <span className="text-sm tracking-widest uppercase font-light">{v.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature blocks */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-3 gap-px bg-brand-gold/10">
          {[
            {
              num: '01',
              title: 'Baştan Sona Sahiplik',
              desc: 'Projenizin her aşamasında tek muhatap biziz. Süreci tam olarak yönetiyor, sizi gereksiz streslerden koruyoruz.',
            },
            {
              num: '02',
              title: 'Kalite Kontrol Sistemi',
              desc: 'İnşaat süreçlerini uluslararası kalite standartlarına göre izliyor, her aşamada titiz denetimler gerçekleştiriyoruz.',
            },
            {
              num: '03',
              title: 'Bütçe Disiplini',
              desc: 'Proje bütçenizi sürpriz maliyetlerden koruyoruz. Şeffaf fiyatlandırma ve ayrıntılı raporlamayı taahhüt ediyoruz.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-brand-dark p-10 group hover:bg-brand-gold/5 transition-all duration-500 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className="text-6xl font-bold text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors duration-500 mb-4 leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {item.num}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-brand-gold transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed font-light">{item.desc}</p>
              <div className="mt-6 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
