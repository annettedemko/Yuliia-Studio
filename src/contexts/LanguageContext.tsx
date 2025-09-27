import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'de' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  de: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Über uns',
    'nav.services': 'Leistungen',
    'nav.pricing': 'Preise',
    'nav.contact': 'Kontakt',

    // DEKA Page
    'deka.title': 'DEKA Technologien',
    'deka.subtitle': 'Revolutionäre Lösungen für Beauty und Ästhetik',
    'deka.description': 'Entdecken Sie die innovativen DEKA Technologien für professionelle Behandlungen in der Ästhetik und Dermatologie.',
    'deka.hero.title': 'Beauty Congress',
    'deka.hero.subtitle': 'Ihr Schritt in die Zukunft',
    'deka.hero.description': 'Erleben Sie die revolutionäre DEKA Technologie hautnah.',
    'deka.hero.features': 'Innovation • Sicherheit • Erfolg',
    'deka.hero.button': 'Jetzt anmelden',
    'deka.hero.button2': 'Mehr erfahren',

    // Technologies Section
    'deka.technologies.title': 'Unsere DEKA Technologien',
    'deka.technologies.subtitle': 'Modernste Geräte für optimale Behandlungsergebnisse',

    // Individual Technology Cards
    'deka.motus.title': 'Motus AX',
    'deka.motus.description': 'Revolutionäre Alexandrit-Laser-Technologie für schmerzfreie Haarentfernung',

    'deka.again.title': 'Again cos',
    'deka.again.description': 'Kompakte Alexandrit-Laser-Lösung für professionelle Haarentfernung',

    'deka.physiq.title': 'PHYSIQ 360',
    'deka.physiq.description': 'Innovative Körperformung und Muskelaufbau mit elektromagnetischer Stimulation',

    'deka.redtouch.title': 'RedTouch PRO',
    'deka.redtouch.description': 'Professionelle LED-Therapie für Hautverjüngung und Regeneration',

    // Benefits Section
    'deka.benefits.title': 'Warum DEKA wählen?',
    'deka.benefits.quality': 'Höchste Qualität',
    'deka.benefits.quality.desc': 'Made in Italy - Premium Qualität und Zuverlässigkeit',
    'deka.benefits.innovation': 'Innovation',
    'deka.benefits.innovation.desc': 'Neueste Technologien und kontinuierliche Weiterentwicklung',
    'deka.benefits.safety': 'Sicherheit',
    'deka.benefits.safety.desc': 'Zertifizierte Geräte mit höchsten Sicherheitsstandards',
    'deka.benefits.results': 'Ergebnisse',
    'deka.benefits.results.desc': 'Nachgewiesene Wirksamkeit und zufriedene Kunden',

    // Contact Section
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Vereinbaren Sie noch heute Ihren Termin',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.address': 'Adresse',
    'contact.book': 'Jetzt Termin buchen',
    'contact.call': 'Anrufen',
    'contact.send-email': 'E-Mail schreiben',

    // Common
    'common.learn-more': 'Mehr erfahren',
    'common.book-appointment': 'Termin buchen',
    'common.contact-us': 'Kontaktieren Sie uns',

    // Form
    'form.register': 'Jetzt Registrieren',
    'form.firstname': 'Vorname',
    'form.lastname': 'Nachname',
    'form.email': 'E-Mail',
    'form.phone': 'Telefon',
    'form.select-event': 'Veranstaltung auswählen',
    'form.submit': 'Anmeldung absenden',

    // Event Section
    'events.title': 'Kommende Veranstaltungen',
    'events.when': 'Wann',
    'events.where': 'Wo',

    // Benefits Section
    'benefits.title': 'Warum sind diese Geräte für Sie unverzichtbar?',
    'benefits.growth': 'Neue Kundschaft gewinnen',
    'benefits.growth.desc': 'Innovative Behandlungen wirken wie ein Magnet für moderne Kunden',
    'benefits.income': 'Umsatz steigern',
    'benefits.income.desc': 'Hochwertige Behandlungen bedeuten höhere Preise und zufriedenere Kunden',
    'benefits.knowledge': 'Fachwissen erweitern',
    'benefits.knowledge.desc': 'Bleiben Sie auf dem neuesten Stand der Technik',
    'benefits.retention': 'Bestehende Kunden langfristig binden',
    'benefits.retention.desc': 'Beeindruckende Resultate sorgen dafür, dass sie immer wiederkommen',
    'benefits.safety': 'Mit Sicherheit arbeiten',
    'benefits.safety.desc': 'Zertifizierte, geprüfte und bewährte Technologie',

    // Registration Form
    'registration.title': 'Jetzt registrieren',
    'registration.subtitle': 'Sichern Sie sich Ihren Platz',

    // Devices Section
    'devices.title': 'Deka Geräte',
    'devices.subtitle': 'Professionelle Technologie für Ihren Erfolg',

    // Congress Features Section
    'congress.title': 'Auf dem Deka Beauty Congress können Sie:',
    'congress.features.test': 'die Geräte selbst testen und ihre Einzigartigkeit erleben',
    'congress.features.presentations': 'spannende Präsentationen hören und umfassende Informationen erhalten',
    'congress.features.learning': 'konkrete Tipps bekommen, wie Sie ein eigenes Studio eröffnen',
    'congress.features.networking': 'erfahren, wie Sie Geräte clever leasen und ab dem ersten Tag Gewinn erzielen',
    'congress.partner.title': 'Deka – das sind nicht einfach Geräte. Das ist Ihr Wachstumspartner.',
    'congress.partner.description': 'Jede Anschaffung ist eine Investition, die Tag für Tag für Sie arbeitet und sich schneller auszahlt, als Sie denken.',
    'congress.partner.highlight': '🌸 Deka Beauty Congress – weil Ihre Kundschaft das Beste verdient und Ihr Business mehr Erfolg!',
    'congress.partner.cta': 'Seien Sie dabei und werden Sie Teil der Zukunft der apparativen Kosmetik.',

    // Events Section
    'events.upcoming.title': 'Kommende Veranstaltungen',
    'events.upcoming.subtitle': 'Besuchen Sie unsere exklusiven Beauty Events und erleben Sie die Deka Technologie hautnah',
    'events.no-events': 'Aktuell sind keine Veranstaltungen geplant. Schauen Sie bald wieder vorbei!',
    'events.select-event': 'Veranstaltung auswählen:',
    'events.select-placeholder': 'Bitte wählen Sie eine Veranstaltung',

    // Form Messages
    'form.captcha.title': 'Anti-Roboter-Verifizierung',
    'form.captcha.click': 'Hier klicken',
    'form.captcha.provider': 'FriendlyCaptcha',
    'form.success': 'Ihre Anmeldung wurde erfolgreich versendet!',
    'form.error': 'Fehler:',

    // DEKA Day Page Specific
    'deka-day.hero.title': 'Beauty Day',
    'deka-day.hero.subtitle': 'Exklusive Technologie erleben',
    'deka-day.hero.description': 'Entdecken Sie die Zukunft der Schönheitsbehandlung.',
    'deka-day.hero.features': 'Professionell • Innovativ • Erfolgreich',
    'deka-day.hero.button': 'Jetzt Registrieren',
    'deka-day.hero.button2': 'Mehr erfahren',
    'deka-day.benefits.income': 'Umsatz deutlich steigern',
    'deka-day.benefits.income.desc': 'Jedes Gerät ist ein Werkzeug für regelmäßige Einnahmen',
    'deka-day.form.title': 'Registrieren',

    // Anna Page Specific
    'anna.hero.title': 'Exclusive Event',
    'anna.hero.subtitle': 'Premium Beauty Experience',
    'anna.hero.description': 'Erleben Sie die Elite der Kosmetiktechnologie.',
    'anna.hero.features': 'Exklusiv • Präzise • Transformativ',
    'anna.hero.button': 'Jetzt Registrieren',
    'anna.hero.button2': 'Mehr erfahren',
    'anna.form.title': 'Registrieren',

    // Common UI
    'ui.loading': 'Wird geladen...',
    'ui.submitting': 'Wird gesendet...',
    'ui.select-placeholder': 'Bitte wählen...',
    'ui.no-events': 'Keine Veranstaltungen verfügbar'
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.pricing': 'Цены',
    'nav.contact': 'Контакты',

    // DEKA Page
    'deka.title': 'Технологии DEKA',
    'deka.subtitle': 'Революционные решения для красоты и эстетики',
    'deka.description': 'Откройте для себя инновационные технологии DEKA для профессиональных процедур в эстетике и дерматологии.',
    'deka.hero.title': 'Beauty Congress',
    'deka.hero.subtitle': 'Ваш шаг в будущее',
    'deka.hero.description': 'Испытайте революционную технологию DEKA на себе.',
    'deka.hero.features': 'Инновации • Безопасность • Успех',
    'deka.hero.button': 'Зарегистрироваться сейчас',
    'deka.hero.button2': 'Узнать больше',

    // Technologies Section
    'deka.technologies.title': 'Наши технологии DEKA',
    'deka.technologies.subtitle': 'Современнейшее оборудование для оптимальных результатов процедур',

    // Individual Technology Cards
    'deka.motus.title': 'Motus AX',
    'deka.motus.description': 'Революционная александритовая лазерная технология для безболезненного удаления волос',

    'deka.again.title': 'Again cos',
    'deka.again.description': 'Компактное александритовое лазерное решение для профессионального удаления волос',

    'deka.physiq.title': 'PHYSIQ 360',
    'deka.physiq.description': 'Инновационная коррекция фигуры и наращивание мышц с электромагнитной стимуляцией',

    'deka.redtouch.title': 'RedTouch PRO',
    'deka.redtouch.description': 'Профессиональная LED-терапия для омоложения и регенерации кожи',

    // Benefits Section
    'deka.benefits.title': 'Почему выбирают DEKA?',
    'deka.benefits.quality': 'Высочайшее качество',
    'deka.benefits.quality.desc': 'Сделано в Италии - премиальное качество и надежность',
    'deka.benefits.innovation': 'Инновации',
    'deka.benefits.innovation.desc': 'Новейшие технологии и непрерывное развитие',
    'deka.benefits.safety': 'Безопасность',
    'deka.benefits.safety.desc': 'Сертифицированное оборудование с высочайшими стандартами безопасности',
    'deka.benefits.results': 'Результаты',
    'deka.benefits.results.desc': 'Доказанная эффективность и довольные клиенты',

    // Contact Section
    'contact.title': 'Контакты',
    'contact.subtitle': 'Запишитесь на прием уже сегодня',
    'contact.phone': 'Телефон',
    'contact.email': 'Электронная почта',
    'contact.address': 'Адрес',
    'contact.book': 'Записаться на прием',
    'contact.call': 'Позвонить',
    'contact.send-email': 'Написать письмо',

    // Common
    'common.learn-more': 'Узнать больше',
    'common.book-appointment': 'Записаться на прием',
    'common.contact-us': 'Свяжитесь с нами',

    // Form
    'form.register': 'Зарегистрироваться сейчас',
    'form.firstname': 'Имя',
    'form.lastname': 'Фамилия',
    'form.email': 'Электронная почта',
    'form.phone': 'Телефон',
    'form.select-event': 'Выберите мероприятие',
    'form.submit': 'Отправить заявку',

    // Event Section
    'events.title': 'Предстоящие мероприятия',
    'events.when': 'Когда',
    'events.where': 'Где',

    // Benefits Section
    'benefits.title': 'Почему эти устройства незаменимы для вас?',
    'benefits.growth': 'Привлечение новых клиентов',
    'benefits.growth.desc': 'Инновационные процедуры работают как магнит для современных клиентов',
    'benefits.income': 'Увеличение дохода',
    'benefits.income.desc': 'Высококачественные процедуры означают более высокие цены и довольных клиентов',
    'benefits.knowledge': 'Расширение знаний',
    'benefits.knowledge.desc': 'Оставайтесь в курсе последних технологий',
    'benefits.retention': 'Долгосрочное удержание клиентов',
    'benefits.retention.desc': 'Впечатляющие результаты заставляют их возвращаться снова и снова',
    'benefits.safety': 'Работа с уверенностью',
    'benefits.safety.desc': 'Сертифицированные, проверенные и испытанные технологии',

    // Registration Form
    'registration.title': 'Зарегистрироваться сейчас',
    'registration.subtitle': 'Забронируйте свое место',

    // Devices Section
    'devices.title': 'Оборудование Deka',
    'devices.subtitle': 'Профессиональные технологии для вашего успеха',

    // Congress Features Section
    'congress.title': 'На Deka Beauty Congress вы сможете:',
    'congress.features.test': 'самостоятельно протестировать оборудование и ощутить его уникальность',
    'congress.features.presentations': 'послушать увлекательные презентации и получить исчерпывающую информацию',
    'congress.features.learning': 'получить конкретные советы по открытию собственной студии',
    'congress.features.networking': 'узнать, как грамотно взять оборудование в лизинг и получать прибыль с первого дня',
    'congress.partner.title': 'Deka – это не просто оборудование. Это ваш партнёр роста.',
    'congress.partner.description': 'Каждое приобретение – это инвестиция, которая работает на вас день за днём и окупается быстрее, чем вы думаете.',
    'congress.partner.highlight': '🌸 Deka Beauty Congress – потому что ваши клиенты заслуживают лучшего, а ваш бизнес больше успеха!',
    'congress.partner.cta': 'Присоединяйтесь к нам и станьте частью будущего аппаратной косметологии.',

    // Events Section
    'events.upcoming.title': 'Предстоящие мероприятия',
    'events.upcoming.subtitle': 'Посетите наши эксклюзивные beauty-события и испытайте технологии Deka на себе',
    'events.no-events': 'В настоящее время мероприятия не запланированы. Заходите к нам снова!',
    'events.select-event': 'Выберите мероприятие:',
    'events.select-placeholder': 'Пожалуйста, выберите мероприятие',

    // Form Messages
    'form.captcha.title': 'Верификация от роботов',
    'form.captcha.click': 'Нажмите здесь',
    'form.captcha.provider': 'FriendlyCaptcha',
    'form.success': 'Ваша заявка была успешно отправлена!',
    'form.error': 'Ошибка:',

    // DEKA Day Page Specific
    'deka-day.hero.title': 'Beauty Day',
    'deka-day.hero.subtitle': 'Испытайте эксклюзивные технологии',
    'deka-day.hero.description': 'Откройте для себя будущее косметических процедур.',
    'deka-day.hero.features': 'Профессионально • Инновационно • Успешно',
    'deka-day.hero.button': 'Зарегистрироваться сейчас',
    'deka-day.hero.button2': 'Узнать больше',
    'deka-day.benefits.income': 'Значительно увеличить доход',
    'deka-day.benefits.income.desc': 'Каждое устройство — это инструмент для регулярного дохода',
    'deka-day.form.title': 'Регистрация',

    // Anna Page Specific
    'anna.hero.title': 'Эксклюзивное мероприятие',
    'anna.hero.subtitle': 'Премиальный beauty-опыт',
    'anna.hero.description': 'Испытайте элиту косметических технологий.',
    'anna.hero.features': 'Эксклюзивно • Точно • Трансформирующе',
    'anna.hero.button': 'Зарегистрироваться сейчас',
    'anna.hero.button2': 'Узнать больше',
    'anna.form.title': 'Регистрация',

    // Common UI
    'ui.loading': 'Загрузка...',
    'ui.submitting': 'Отправляется...',
    'ui.select-placeholder': 'Пожалуйста, выберите...',
    'ui.no-events': 'Мероприятия недоступны'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'ru')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};