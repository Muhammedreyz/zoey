import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LangCode = 'tr' | 'de' | 'en' | 'ru' | 'ar';

interface Translations {
  nav: { about: string; services: string; projects: string; contact: string };
  hero: { pre: string; line1: string; line2: string; sub: string; cta1: string; cta2: string; scroll: string };
  about: {
    tag: string; h1: string; h2: string; h3: string;
    p1: string; p2: string; badge: string;
    stat1: string; stat2: string; stat3: string; stat4: string;
  };
  services: {
    tag: string; h1: string; h2: string; sub: string;
    items: { title: string; desc: string; tag: string }[];
  };
  projects: { tag: string; h1: string; h2: string; sub: string };
  whyZoey: {
    tag: string; h1: string; h2: string;
    values: string[];
    blocks: { title: string; desc: string }[];
  };
  contact: {
    tag: string; h1: string; h2: string; sub: string;
    email: string; location: string; locationVal: string;
    formName: string; formNamePh: string;
    formPhone: string; formPhonePh: string;
    formMsg: string; formMsgPh: string;
    send: string; sending: string; sent: string; sentSub: string;
  };
  footer: { tagline: string; links: string; contact: string; copy: string };
}

const translations: Record<LangCode, Translations> = {
  tr: {
    nav: { about: 'Hakkımızda', services: 'Hizmetler', projects: 'Projeler', contact: 'İletişim' },
    hero: {
      pre: 'Zoey İnşaat & Müteahhitlik',
      line1: 'Hayalleri',
      line2: 'İnşa Ediyoruz',
      sub: 'Konut, ticari ve endüstriyel projelerde mükemmeliyeti ve kalıcılığı esas alarak inşa ediyoruz. Her proje, bir mirasa dönüşür.',
      cta1: 'İletişime Geç',
      cta2: 'Projelerimiz',
      scroll: 'Keşfet',
    },
    about: {
      tag: 'Hakkımızda',
      h1: "Türkiye'nin", h2: 'Güvenilir', h3: 'İnşaat Partneri',
      p1: 'Zoey İnşaat, yılların deneyimi ve uzman kadrosuyla konut, ticari ve endüstriyel projelerde en yüksek kalite standartlarını sunar. Her projemize mühendislik hassasiyeti ve estetik duyarlılığıyla yaklaşıyoruz.',
      p2: 'Müşterilerimizin hayallerini somut gerçekliklere dönüştürmek için alanının en iyileriyle çalışıyor; güven, şeffaflık ve mükemmeliyeti her adımda ilke ediniyoruz.',
      badge: 'Mükemmellik',
      stat1: 'Yıl Deneyim', stat2: 'Tamamlanan Proje', stat3: 'Müşteri Memnuniyeti', stat4: 'Uzman Kadro',
    },
    services: {
      tag: 'Hizmetlerimiz', h1: 'Her Projede', h2: 'Üstün Kalite',
      sub: 'Geniş hizmet yelpazemizle, fikrin doğuşundan projenin teslimine kadar her adımda yanınızdayız.',
      items: [
        { title: 'Konut İnşaatı', desc: 'Tek aile konutlarından büyük yerleşim komplekslerine kadar her ölçekte, yüksek kalite standartlarında konut projeleri geliştiriyoruz.', tag: 'Residential' },
        { title: 'Ticari Yapılar', desc: 'Ofis binaları, alışveriş merkezleri ve karma kullanımlı yapılarda mühendislik çözümleri sunuyoruz.', tag: 'Commercial' },
        { title: 'Endüstriyel Projeler', desc: 'Fabrika, depo ve sanayi tesisleri inşaatında güçlü altyapı ve uzman proje yönetimi sağlıyoruz.', tag: 'Industrial' },
        { title: 'Yenileme & Tadilat', desc: 'Mevcut yapıları modern standartlara yükseltmek için kapsamlı yenileme ve tadilat hizmetleri sunuyoruz.', tag: 'Renovation' },
        { title: 'Proje Tasarımı', desc: 'Mimari tasarımdan mühendislik hesaplamalarına uzanan entegre proje geliştirme süreçlerini yönetiyoruz.', tag: 'Design' },
        { title: 'Proje Yönetimi', desc: 'Başlangıçtan teslimata tüm süreçleri izliyor, bütçe ve zaman yönetiminde şeffaflığı ön planda tutuyoruz.', tag: 'Management' },
      ],
    },
    projects: { tag: 'Projelerimiz', h1: 'Tamamlanan', h2: 'Eserlerimiz', sub: 'Her projemiz, mühendislik hassasiyeti ve estetik duyarlılığın mükemmel uyumunu yansıtır.' },
    whyZoey: {
      tag: 'Neden Zoey?', h1: 'Farkımız,', h2: 'Detaylara Verdiğimiz Önem',
      values: ['Güven & Şeffaflık', 'Zamanında Teslim', 'Kalite Güvencesi', 'Uzman Ekip', 'Yenilikçi Çözümler', 'Müşteri Odaklılık'],
      blocks: [
        { title: 'Baştan Sona Sahiplik', desc: 'Projenizin her aşamasında tek muhatap biziz. Süreci tam olarak yönetiyor, sizi gereksiz streslerden koruyoruz.' },
        { title: 'Kalite Kontrol Sistemi', desc: 'İnşaat süreçlerini uluslararası kalite standartlarına göre izliyor, her aşamada titiz denetimler gerçekleştiriyoruz.' },
        { title: 'Bütçe Disiplini', desc: 'Proje bütçenizi sürpriz maliyetlerden koruyoruz. Şeffaf fiyatlandırma ve ayrıntılı raporlamayı taahhüt ediyoruz.' },
      ],
    },
    contact: {
      tag: 'İletişim', h1: 'Projenizi', h2: 'Konuşalım',
      sub: 'Hayalinizdeki projeyi birlikte şekillendirmek için bizimle iletişime geçin. Uzmanlarımız en kısa sürede sizinle iletişim kuracak.',
      email: 'E-posta', location: 'Konum', locationVal: 'Türkiye',
      formName: 'Adınız Soyadınız', formNamePh: 'Ad Soyad',
      formPhone: 'Telefon', formPhonePh: '+90 5xx xxx xx xx',
      formMsg: 'Mesajınız', formMsgPh: 'Projeniz hakkında bize bilgi verin...',
      send: 'Mesaj Gönder', sending: 'Gönderiliyor...',
      sent: 'Mesajınız Alındı', sentSub: 'En kısa sürede sizinle iletişime geçeceğiz.',
    },
    footer: {
      tagline: 'Hayalleri kalıcı eserlere dönüştürüyor,\ngeleceği birlikte inşa ediyoruz.',
      links: 'Hızlı Bağlantılar', contact: 'İletişim',
      copy: 'Zoey İnşaat & Müteahhitlik. Tüm hakları saklıdır.',
    },
  },
  de: {
    nav: { about: 'Über Uns', services: 'Leistungen', projects: 'Projekte', contact: 'Kontakt' },
    hero: {
      pre: 'Zoey Bau & Auftragnehmer',
      line1: 'Wir Bauen',
      line2: 'Ihre Träume',
      sub: 'Wir bauen Wohn-, Gewerbe- und Industrieprojekte mit höchster Qualität und Beständigkeit. Jedes Projekt wird zu einem Vermächtnis.',
      cta1: 'Kontakt',
      cta2: 'Unsere Projekte',
      scroll: 'Entdecken',
    },
    about: {
      tag: 'Über Uns',
      h1: 'Ihr', h2: 'Zuverlässiger', h3: 'Baupartner',
      p1: 'Zoey Bau bietet mit jahrelanger Erfahrung und einem Expertenteam höchste Qualitätsstandards in Wohn-, Gewerbe- und Industrieprojekten.',
      p2: 'Um die Träume unserer Kunden in konkrete Realitäten umzusetzen, arbeiten wir mit den Besten der Branche zusammen.',
      badge: 'Exzellenz',
      stat1: 'Jahre Erfahrung', stat2: 'Abgeschlossene Projekte', stat3: 'Kundenzufriedenheit', stat4: 'Experten',
    },
    services: {
      tag: 'Unsere Leistungen', h1: 'Bei Jedem Projekt', h2: 'Höchste Qualität',
      sub: 'Mit unserem breiten Leistungsspektrum begleiten wir Sie von der Idee bis zur Übergabe.',
      items: [
        { title: 'Wohnungsbau', desc: 'Vom Einfamilienhaus bis zum großen Wohnkomplex entwickeln wir Wohnprojekte höchster Qualität.', tag: 'Residential' },
        { title: 'Gewerbebauten', desc: 'Bürogebäude, Einkaufszentren und gemischt genutzte Gebäude mit technischer Expertise.', tag: 'Commercial' },
        { title: 'Industrieprojekte', desc: 'Starke Infrastruktur und professionelles Projektmanagement für Fabriken und Lagerhallen.', tag: 'Industrial' },
        { title: 'Renovierung', desc: 'Umfassende Renovierungs- und Modernisierungsdienstleistungen für bestehende Gebäude.', tag: 'Renovation' },
        { title: 'Projektplanung', desc: 'Integrierte Projektentwicklung von der Architektur bis zur technischen Berechnung.', tag: 'Design' },
        { title: 'Projektmanagement', desc: 'Transparente Budget- und Zeitplanung von Anfang bis Ende.', tag: 'Management' },
      ],
    },
    projects: { tag: 'Projekte', h1: 'Abgeschlossene', h2: 'Werke', sub: 'Jedes unserer Projekte spiegelt die perfekte Harmonie von Ingenieurskunst und ästhetischer Sensibilität wider.' },
    whyZoey: {
      tag: 'Warum Zoey?', h1: 'Unser Unterschied,', h2: 'Liebe zum Detail',
      values: ['Vertrauen & Transparenz', 'Pünktliche Lieferung', 'Qualitätssicherung', 'Expertenteam', 'Innovative Lösungen', 'Kundenorientierung'],
      blocks: [
        { title: 'Volle Verantwortung', desc: 'In jeder Phase Ihres Projekts sind wir Ihr einziger Ansprechpartner.' },
        { title: 'Qualitätskontrolle', desc: 'Wir überwachen nach internationalen Standards und führen in jeder Phase sorgfältige Prüfungen durch.' },
        { title: 'Budgetdisziplin', desc: 'Wir schützen Ihr Projektbudget vor überraschenden Kosten mit transparenter Preisgestaltung.' },
      ],
    },
    contact: {
      tag: 'Kontakt', h1: 'Lassen Sie Uns', h2: 'Reden',
      sub: 'Kontaktieren Sie uns, um Ihr Traumprojekt gemeinsam zu gestalten.',
      email: 'E-Mail', location: 'Standort', locationVal: 'Türkei',
      formName: 'Ihr Name', formNamePh: 'Vor- und Nachname',
      formPhone: 'Telefon', formPhonePh: '+49 xxx xxx xxxx',
      formMsg: 'Ihre Nachricht', formMsgPh: 'Erzählen Sie uns von Ihrem Projekt...',
      send: 'Nachricht Senden', sending: 'Wird gesendet...',
      sent: 'Nachricht Erhalten', sentSub: 'Wir werden uns in Kürze bei Ihnen melden.',
    },
    footer: {
      tagline: 'Wir verwandeln Träume in bleibende Werke\nund bauen gemeinsam die Zukunft.',
      links: 'Schnelllinks', contact: 'Kontakt',
      copy: 'Zoey Bau & Auftragnehmer. Alle Rechte vorbehalten.',
    },
  },
  en: {
    nav: { about: 'About', services: 'Services', projects: 'Projects', contact: 'Contact' },
    hero: {
      pre: 'Zoey Construction & Contracting',
      line1: 'Building',
      line2: 'Your Dreams',
      sub: 'We build residential, commercial, and industrial projects with excellence and permanence. Every project becomes a legacy.',
      cta1: 'Get in Touch',
      cta2: 'Our Projects',
      scroll: 'Discover',
    },
    about: {
      tag: 'About Us',
      h1: 'Your', h2: 'Trusted', h3: 'Construction Partner',
      p1: 'Zoey Construction offers the highest quality standards in residential, commercial, and industrial projects with years of experience and expert staff.',
      p2: 'We work with the best in the field to transform our clients\' dreams into concrete realities, upholding trust, transparency, and excellence at every step.',
      badge: 'Excellence',
      stat1: 'Years Experience', stat2: 'Completed Projects', stat3: 'Client Satisfaction', stat4: 'Expert Staff',
    },
    services: {
      tag: 'Our Services', h1: 'Superior Quality', h2: 'In Every Project',
      sub: 'With our wide range of services, we are by your side from concept to delivery.',
      items: [
        { title: 'Residential Construction', desc: 'From single-family homes to large residential complexes, we develop housing projects of the highest quality.', tag: 'Residential' },
        { title: 'Commercial Buildings', desc: 'Engineering solutions for office buildings, shopping centers, and mixed-use developments.', tag: 'Commercial' },
        { title: 'Industrial Projects', desc: 'Strong infrastructure and expert project management for factories and warehouses.', tag: 'Industrial' },
        { title: 'Renovation', desc: 'Comprehensive renovation and modernization services to bring existing structures to modern standards.', tag: 'Renovation' },
        { title: 'Project Design', desc: 'Integrated project development from architectural design to engineering calculations.', tag: 'Design' },
        { title: 'Project Management', desc: 'Monitoring all processes from start to delivery with transparent budget and time management.', tag: 'Management' },
      ],
    },
    projects: { tag: 'Projects', h1: 'Completed', h2: 'Works', sub: 'Each of our projects reflects the perfect harmony of engineering precision and aesthetic sensitivity.' },
    whyZoey: {
      tag: 'Why Zoey?', h1: 'Our Difference,', h2: 'Attention to Detail',
      values: ['Trust & Transparency', 'On-Time Delivery', 'Quality Assurance', 'Expert Team', 'Innovative Solutions', 'Client Focus'],
      blocks: [
        { title: 'Full Ownership', desc: 'We are your single point of contact at every stage of your project.' },
        { title: 'Quality Control', desc: 'We monitor according to international standards and conduct meticulous inspections at every stage.' },
        { title: 'Budget Discipline', desc: 'We protect your project budget from surprise costs with transparent pricing and detailed reporting.' },
      ],
    },
    contact: {
      tag: 'Contact', h1: "Let's Talk", h2: 'About Your Project',
      sub: 'Contact us to shape your dream project together. Our experts will reach out to you shortly.',
      email: 'Email', location: 'Location', locationVal: 'Turkey',
      formName: 'Your Name', formNamePh: 'Full Name',
      formPhone: 'Phone', formPhonePh: '+1 xxx xxx xxxx',
      formMsg: 'Your Message', formMsgPh: 'Tell us about your project...',
      send: 'Send Message', sending: 'Sending...',
      sent: 'Message Received', sentSub: 'We will contact you shortly.',
    },
    footer: {
      tagline: 'Transforming dreams into lasting works,\nbuilding the future together.',
      links: 'Quick Links', contact: 'Contact',
      copy: 'Zoey Construction & Contracting. All rights reserved.',
    },
  },
  ru: {
    nav: { about: 'О Нас', services: 'Услуги', projects: 'Проекты', contact: 'Контакт' },
    hero: {
      pre: 'Zoey Строительство & Подряд',
      line1: 'Строим',
      line2: 'Ваши Мечты',
      sub: 'Мы строим жилые, коммерческие и промышленные проекты с высочайшим качеством. Каждый проект становится наследием.',
      cta1: 'Связаться',
      cta2: 'Наши Проекты',
      scroll: 'Узнать',
    },
    about: {
      tag: 'О Нас',
      h1: 'Ваш', h2: 'Надёжный', h3: 'Строительный Партнёр',
      p1: 'Zoey Строительство предлагает высочайшие стандарты качества в жилых, коммерческих и промышленных проектах.',
      p2: 'Мы работаем с лучшими специалистами отрасли, чтобы воплотить мечты наших клиентов в реальность.',
      badge: 'Совершенство',
      stat1: 'Лет Опыта', stat2: 'Завершённых Проектов', stat3: 'Удовлетворённость', stat4: 'Экспертов',
    },
    services: {
      tag: 'Наши Услуги', h1: 'Высшее Качество', h2: 'В Каждом Проекте',
      sub: 'С нашим широким спектром услуг мы рядом с вами от идеи до сдачи проекта.',
      items: [
        { title: 'Жилое Строительство', desc: 'От частных домов до крупных жилых комплексов высочайшего качества.', tag: 'Residential' },
        { title: 'Коммерческие Здания', desc: 'Инженерные решения для офисных зданий и торговых центров.', tag: 'Commercial' },
        { title: 'Промышленные Проекты', desc: 'Мощная инфраструктура и профессиональное управление проектами.', tag: 'Industrial' },
        { title: 'Реновация', desc: 'Комплексные услуги по ремонту и модернизации существующих зданий.', tag: 'Renovation' },
        { title: 'Проектирование', desc: 'Интегрированная разработка проектов от архитектуры до инженерных расчётов.', tag: 'Design' },
        { title: 'Управление Проектами', desc: 'Прозрачное управление бюджетом и сроками от начала до конца.', tag: 'Management' },
      ],
    },
    projects: { tag: 'Проекты', h1: 'Завершённые', h2: 'Работы', sub: 'Каждый наш проект отражает идеальную гармонию инженерной точности и эстетики.' },
    whyZoey: {
      tag: 'Почему Zoey?', h1: 'Наше Отличие,', h2: 'Внимание к Деталям',
      values: ['Доверие & Прозрачность', 'Своевременная Сдача', 'Гарантия Качества', 'Команда Экспертов', 'Инновационные Решения', 'Клиентоориентированность'],
      blocks: [
        { title: 'Полная Ответственность', desc: 'На каждом этапе вашего проекта мы — ваш единственный контакт.' },
        { title: 'Контроль Качества', desc: 'Мы следим по международным стандартам и проводим тщательные проверки на каждом этапе.' },
        { title: 'Бюджетная Дисциплина', desc: 'Мы защищаем бюджет вашего проекта от неожиданных расходов.' },
      ],
    },
    contact: {
      tag: 'Контакт', h1: 'Давайте', h2: 'Обсудим Ваш Проект',
      sub: 'Свяжитесь с нами, чтобы вместе создать проект вашей мечты.',
      email: 'Эл. почта', location: 'Местоположение', locationVal: 'Турция',
      formName: 'Ваше Имя', formNamePh: 'Имя Фамилия',
      formPhone: 'Телефон', formPhonePh: '+7 xxx xxx xxxx',
      formMsg: 'Ваше Сообщение', formMsgPh: 'Расскажите о вашем проекте...',
      send: 'Отправить', sending: 'Отправка...',
      sent: 'Сообщение Получено', sentSub: 'Мы свяжемся с вами в ближайшее время.',
    },
    footer: {
      tagline: 'Превращаем мечты в вечные произведения,\nвместе строим будущее.',
      links: 'Быстрые Ссылки', contact: 'Контакт',
      copy: 'Zoey Строительство & Подряд. Все права защищены.',
    },
  },
  ar: {
    nav: { about: 'من نحن', services: 'الخدمات', projects: 'المشاريع', contact: 'اتصل بنا' },
    hero: {
      pre: 'زوي للإنشاء والمقاولات',
      line1: 'نبني',
      line2: 'أحلامكم',
      sub: 'نبني المشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة والاستدامة. كل مشروع يصبح إرثاً.',
      cta1: 'تواصل معنا',
      cta2: 'مشاريعنا',
      scroll: 'اكتشف',
    },
    about: {
      tag: 'من نحن',
      h1: 'شريككم', h2: 'الموثوق', h3: 'في البناء',
      p1: 'تقدم زوي للإنشاءات أعلى معايير الجودة في المشاريع السكنية والتجارية والصناعية بخبرة سنوات وفريق متخصص.',
      p2: 'نعمل مع أفضل المتخصصين لتحويل أحلام عملائنا إلى واقع ملموس.',
      badge: 'التميّز',
      stat1: 'سنوات خبرة', stat2: 'مشاريع مكتملة', stat3: 'رضا العملاء', stat4: 'خبير متخصص',
    },
    services: {
      tag: 'خدماتنا', h1: 'جودة عالية', h2: 'في كل مشروع',
      sub: 'بمجموعة خدماتنا الواسعة، نرافقكم من الفكرة حتى التسليم.',
      items: [
        { title: 'البناء السكني', desc: 'من المنازل العائلية إلى المجمعات السكنية الكبيرة بأعلى معايير الجودة.', tag: 'Residential' },
        { title: 'المباني التجارية', desc: 'حلول هندسية للمباني المكتبية ومراكز التسوق والمشاريع متعددة الاستخدام.', tag: 'Commercial' },
        { title: 'المشاريع الصناعية', desc: 'بنية تحتية قوية وإدارة مشاريع احترافية للمصانع والمستودعات.', tag: 'Industrial' },
        { title: 'التجديد', desc: 'خدمات تجديد وتحديث شاملة لرفع المباني القائمة للمعايير الحديثة.', tag: 'Renovation' },
        { title: 'التصميم', desc: 'تطوير متكامل للمشاريع من التصميم المعماري إلى الحسابات الهندسية.', tag: 'Design' },
        { title: 'إدارة المشاريع', desc: 'إدارة شفافة للميزانية والجدول الزمني من البداية حتى النهاية.', tag: 'Management' },
      ],
    },
    projects: { tag: 'المشاريع', h1: 'أعمالنا', h2: 'المنجزة', sub: 'كل مشروع يعكس التناغم المثالي بين الدقة الهندسية والحساسية الجمالية.' },
    whyZoey: {
      tag: 'لماذا زوي؟', h1: 'ما يميّزنا،', h2: 'الاهتمام بالتفاصيل',
      values: ['الثقة والشفافية', 'التسليم في الوقت', 'ضمان الجودة', 'فريق خبراء', 'حلول مبتكرة', 'التركيز على العميل'],
      blocks: [
        { title: 'المسؤولية الكاملة', desc: 'في كل مرحلة من مشروعكم، نحن جهة الاتصال الوحيدة.' },
        { title: 'مراقبة الجودة', desc: 'نراقب وفق المعايير الدولية ونجري فحوصات دقيقة في كل مرحلة.' },
        { title: 'انضباط الميزانية', desc: 'نحمي ميزانية مشروعكم من التكاليف المفاجئة بتسعير شفاف.' },
      ],
    },
    contact: {
      tag: 'اتصل بنا', h1: 'لنتحدث', h2: 'عن مشروعكم',
      sub: 'تواصلوا معنا لتشكيل مشروع أحلامكم معاً.',
      email: 'البريد الإلكتروني', location: 'الموقع', locationVal: 'تركيا',
      formName: 'الاسم الكامل', formNamePh: 'الاسم واللقب',
      formPhone: 'الهاتف', formPhonePh: '+xxx xxx xxxx',
      formMsg: 'رسالتكم', formMsgPh: 'أخبرونا عن مشروعكم...',
      send: 'إرسال الرسالة', sending: 'جارٍ الإرسال...',
      sent: 'تم استلام الرسالة', sentSub: 'سنتواصل معكم في أقرب وقت.',
    },
    footer: {
      tagline: 'نحوّل الأحلام إلى أعمال خالدة\nونبني المستقبل معاً.',
      links: 'روابط سريعة', contact: 'اتصل بنا',
      copy: 'زوي للإنشاء والمقاولات. جميع الحقوق محفوظة.',
    },
  },
};

interface LangContextType {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: Translations;
  isRtl: boolean;
}

const LangContext = createContext<LangContextType>({
  lang: 'tr',
  setLang: () => {},
  t: translations.tr,
  isRtl: false,
});

export function useLang() {
  return useContext(LangContext);
}

function detectLang(): LangCode {
  const l = (navigator.language || 'tr').toLowerCase().split('-')[0];
  if (l === 'tr') return 'tr';
  if (l === 'de') return 'de';
  if (l === 'ru') return 'ru';
  if (l === 'ar') return 'ar';
  return 'en';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangCode>('tr');

  useEffect(() => {
    setLang(detectLang());
  }, []);

  const value: LangContextType = {
    lang,
    setLang,
    t: translations[lang],
    isRtl: lang === 'ar',
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const LANG_LABELS: Record<LangCode, string> = { tr: 'TR', de: 'DE', en: 'EN', ru: 'RU', ar: 'AR' };
export type { LangCode, Translations };
