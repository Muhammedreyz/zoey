import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-dark py-24 lg:py-36 overflow-hidden relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(174,133,50,0.3), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 30% 50%, rgba(174,133,50,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — contact info */}
          <div className={`reveal-left ${visible ? 'visible' : ''}`}>
            <span className="text-xs tracking-[0.4em] text-brand-gold/60 uppercase font-light block mb-4">
              İletişim
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Projenizi<br />
              <span className="text-gold-gradient">Konuşalım</span>
            </h2>
            <div className="w-16 h-px bg-brand-gold mb-10" />

            <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
              Hayalinizdeki projeyi birlikte şekillendirmek için bizimle iletişime geçin.
              Uzmanlarımız en kısa sürede sizinle iletişim kuracak.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <a
                href="tel:+905306374169"
                className="group flex items-start gap-5 hover:opacity-80 transition-opacity duration-300"
              >
                <div className="w-12 h-12 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-brand-gold transition-colors duration-300 group-hover:bg-brand-gold/10">
                  <Phone size={18} className="text-brand-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-brand-gold/50 uppercase font-light mb-1">Telefon</div>
                  <div className="text-white text-lg tracking-wide">+90 530 637 41 69</div>
                </div>
              </a>

              <a
                href="mailto:info@zoey.com.tr"
                className="group flex items-start gap-5 hover:opacity-80 transition-opacity duration-300"
              >
                <div className="w-12 h-12 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 group-hover:border-brand-gold transition-colors duration-300 group-hover:bg-brand-gold/10">
                  <Mail size={18} className="text-brand-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-brand-gold/50 uppercase font-light mb-1">E-posta</div>
                  <div className="text-white text-lg tracking-wide">info@zoey.com.tr</div>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-brand-gold/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-gold" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-brand-gold/50 uppercase font-light mb-1">Konum</div>
                  <div className="text-white/70 font-light">Türkiye</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={`reveal-right ${visible ? 'visible' : ''}`}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-16 h-16 border border-brand-gold/40 flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-brand-gold" />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Mesajınız Alındı
                </h3>
                <p className="text-white/50 font-light">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs tracking-widest text-brand-gold/50 uppercase font-light mb-2">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/4 border border-white/10 px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-brand-gold/60 transition-colors duration-300 text-sm"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                    placeholder="Ad Soyad"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-brand-gold/50 uppercase font-light mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white/4 border border-white/10 px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-brand-gold/60 transition-colors duration-300 text-sm"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                    placeholder="+90 5xx xxx xx xx"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-brand-gold/50 uppercase font-light mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/4 border border-white/10 px-4 py-3 text-white placeholder-white/25 focus:outline-none focus:border-brand-gold/60 transition-colors duration-300 text-sm resize-none"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                    placeholder="Projeniz hakkında bize bilgi verin..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-brand-gold text-brand-dark py-4 text-sm font-semibold tracking-widest uppercase hover:bg-brand-gold-light transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 gold-glow hover:scale-[1.02]"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Mesaj Gönder
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
