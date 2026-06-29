import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLang } from '../hooks/useLang';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { ref, visible } = useReveal();
  const { t, isRtl } = useLang();
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
    <section id="contact" className="bg-brand-dark py-28 lg:py-40 overflow-hidden relative" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(174,133,50,0.25), transparent)' }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 30% 50%, rgba(174,133,50,0.03) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className={`reveal-left ${visible ? 'visible' : ''}`}>
            <span className="inline-flex items-center gap-3 text-xs tracking-[0.4em] text-brand-gold/60 uppercase font-light mb-5">
              <span className="w-8 h-px bg-brand-gold/40" />
              {t.contact.tag}
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8 font-heading"
            >
              {t.contact.h1}<br />
              <span className="text-gold-gradient">{t.contact.h2}</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-brand-gold to-transparent mb-10" />

            <p className="text-white/45 text-lg font-light leading-relaxed mb-12 font-display">
              {t.contact.sub}
            </p>

            <div className="space-y-6">
              <a href="mailto:info@zoey.com.tr" className="group flex items-start gap-5 hover:opacity-80 transition-opacity duration-300">
                <div className="w-12 h-12 border border-brand-gold/20 flex items-center justify-center flex-shrink-0 group-hover:border-brand-gold/50 transition-colors duration-300 group-hover:bg-brand-gold/5">
                  <Mail size={18} className="text-brand-gold/80" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-brand-gold/40 uppercase font-light mb-1">{t.contact.email}</div>
                  <div className="text-white/80 text-lg tracking-wide font-light">info@zoey.com.tr</div>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-brand-gold/80" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-brand-gold/40 uppercase font-light mb-1">{t.contact.location}</div>
                  <div className="text-white/60 font-light">{t.contact.locationVal}</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`reveal-right ${visible ? 'visible' : ''}`}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="w-16 h-16 border border-brand-gold/30 flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-brand-gold" />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3 font-heading">
                  {t.contact.sent}
                </h3>
                <p className="text-white/50 font-light">{t.contact.sentSub}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] text-brand-gold/40 uppercase font-light mb-2">
                    {t.contact.formName} *
                  </label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange} required
                    className="w-full border border-brand-gold/10 px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/40 transition-colors duration-300 text-sm font-light"
                    style={{ background: 'rgba(174,133,50,0.03)' }}
                    placeholder={t.contact.formNamePh}
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] text-brand-gold/40 uppercase font-light mb-2">
                    {t.contact.formPhone}
                  </label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full border border-brand-gold/10 px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/40 transition-colors duration-300 text-sm font-light"
                    style={{ background: 'rgba(174,133,50,0.03)' }}
                    placeholder={t.contact.formPhonePh}
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] text-brand-gold/40 uppercase font-light mb-2">
                    {t.contact.formMsg} *
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={6}
                    className="w-full border border-brand-gold/10 px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-brand-gold/40 transition-colors duration-300 text-sm resize-none font-light"
                    style={{ background: 'rgba(174,133,50,0.03)' }}
                    placeholder={t.contact.formMsgPh}
                  />
                </div>
                <button
                  type="submit" disabled={sending}
                  className="w-full bg-brand-gold text-brand-dark py-4 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-brand-gold-light transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      {t.contact.send}
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
