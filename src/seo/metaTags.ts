/**
 * Meta tags configuration for all pages in both languages
 */

export interface MetaTag {
  title: string;
  description: string;
}

export interface PageMeta {
  de: MetaTag;
  ru: MetaTag;
}

export const metaTags: Record<string, PageMeta> = {
  '/': {
    de: {
      title: 'Yuliia Cheporska Studio München | Laser, RedTouch & Nägel',
      description: 'Studio in München-Haidhausen (nahe Ostbahnhof). Laser-Haarentfernung (Alexandrit & Diodenlaser), RedTouch 675 nm, Icoone®️, Nagelstudio. Termin online.'
    },
    ru: {
      title: 'Студия Yuliia Cheporska Мюнхен | Лазер, RedTouch и Маникюр',
      description: 'Студия в Мюнхене-Хайдхаузен (рядом с Остбанхоф). Лазерная эпиляция (александрит и диодный лазер), RedTouch 675 нм, Icoone®️, маникюр. Запись онлайн.'
    }
  },
  '/laser-haarentfernung-muenchen': {
    de: {
      title: 'Laser-Haarentfernung München | Alexandrit & Diodenlaser',
      description: 'Laser Haarentfernung München: Alexandrit (755 nm) & Diodenlaser. Langanhaltende Reduktion, Kontaktkühlung, Ablauf & Zonen. Preise auf /preise.'
    },
    ru: {
      title: 'Лазерная эпиляция Мюнхен | Александрит и диодный лазер',
      description: 'Лазерная эпиляция Мюнхен: александрит (755 нм) и диодный лазер. Долговременное удаление волос, контактное охлаждение, этапы и зоны. Цены в /preis.'
    }
  },
  '/alexandrit-gegen-diodenlaser': {
    de: {
      title: 'Alexandrit vs. Diodenlaser – Unterschiede & Einsatz',
      description: 'Vergleich: Alexandrit vs. Diodenlaser – Wirkung, Komfort, Eignung je Haut/Haartyp, Sommer/Bräune, Sicherheit, Sitzungen. Praxis-FAQ & Empfehlungen.'
    },
    ru: {
      title: 'Александрит vs. диодный лазер – отличия и применение',
      description: 'Сравнение: александрит vs. диодный лазер – действие, комфорт, подходящий тип кожи/волос, лето/загар, безопасность, сеансы. FAQ и рекомендации.'
    }
  },
  '/preis': {
    de: {
      title: 'Preise – Yuliia Cheporska Studio München',
      description: 'Transparente Preise & Pakete: Laser-Haarentfernung, RedTouch 675 nm, Icoone®️, Maniküre & Pediküre. Alle Zonen & Angebote im Überblick.'
    },
    ru: {
      title: 'Цены – Студия Yuliia Cheporska Мюнхен',
      description: 'Прозрачные цены и пакеты: лазерная эпиляция, RedTouch 675 нм, Icoone®️, маникюр и педикюр. Все зоны и предложения в обзоре.'
    }
  },
  '/services': {
    de: {
      title: 'Leistungen – Laser, RedTouch, Icoone, Nägel | München',
      description: 'Alle Leistungen im Überblick: Laser-Haarentfernung, RedTouch 675 nm, Icoone®️, Maniküre & Pediküre. Jetzt passende Behandlung finden.'
    },
    ru: {
      title: 'Услуги – лазер, RedTouch, Icoone, маникюр | Мюнхен',
      description: 'Все услуги в обзоре: лазерная эпиляция, RedTouch 675 нм, Icoone®️, маникюр и педикюр. Найдите подходящую процедуру.'
    }
  },
  '/about': {
    de: {
      title: 'Über uns – Yuliia Cheporska Studio München',
      description: 'Studio & Team in München-Haidhausen. Meist gut verträgliche Behandlungen dank Kontaktkühlung. Kontakt, Anfahrt & Öffnungszeiten.'
    },
    ru: {
      title: 'О нас – Студия Yuliia Cheporska Мюнхен',
      description: 'Студия и команда в Мюнхене-Хайдхаузен. Обычно хорошо переносимые процедуры благодаря контактному охлаждению. Контакты, как добраться и часы работы.'
    }
  },
  '/manikuere-pedikuere-muenchen': {
    de: {
      title: 'Maniküre & Pediküre München | Yuliia Cheporska Studio',
      description: 'Maniküre & Pediküre in München-Haidhausen: präzise Pflege, saubere Form, Hygiene; Lack/Gel nach Wunsch. Termin online buchen.'
    },
    ru: {
      title: 'Маникюр и педикюр Мюнхен | Студия Yuliia Cheporska',
      description: 'Маникюр и педикюр в Мюнхене-Хайдхаузен: точный уход, аккуратная форма, гигиена; лак/гель по желанию. Запись онлайн.'
    }
  },
  '/redtouch-laser-muenchen': {
    de: {
      title: 'RedTouch 675 nm München – Hautbild & Pigment',
      description: 'RedTouch München: 675 nm, nicht-ablativ – Hautstruktur, feine Linien, Akne-Narben & ausgewählte Pigmentthemen. Meist kaum Downtime.'
    },
    ru: {
      title: 'RedTouch 675 нм Мюнхен – состояние кожи и пигментация',
      description: 'RedTouch Мюнхен: 675 нм, неабляционный – структура кожи, мелкие морщины, шрамы от акне и избранные проблемы с пигментацией. Практически без реабилитации.'
    }
  },
  '/icoone-laser-muenchen': {
    de: {
      title: 'Icoone®️ München – Bindegewebe & Hautbild',
      description: 'Icoone®️ München: wohltuende, mechanisch stimulierte Anwendungen für Bindegewebe & Hautbild. Planbar, ohne Downtime. Termin online.'
    },
    ru: {
      title: 'Icoone®️ Мюнхен – соединительная ткань и состояние кожи',
      description: 'Icoone®️ Мюнхен: приятные, механически стимулированные процедуры для соединительной ткани и состояния кожи. Предсказуемо, без реабилитации. Запись онлайн.'
    }
  },
  '/impressum': {
    de: {
      title: 'Impressum – Yuliia Cheporska Studio München',
      description: 'Anbieterkennzeichnung gemäß § 5 TMG: Anschrift, Kontakt und Verantwortliche des Studios in München-Haidhausen.'
    },
    ru: {
      title: 'Выходные данные – Студия Yuliia Cheporska Мюнхен',
      description: 'Выходные данные согласно § 5 TMG: адрес, контакты и ответственные лица студии в Мюнхене-Хайдхаузен.'
    }
  },
  '/datenschutzerklaerung': {
    de: {
      title: 'Datenschutzerklärung – Yuliia Cheporska Studio München',
      description: 'Datenschutzerklärung: Zwecke, Rechtsgrundlagen, Speicherdauer und Rechte der Betroffenen im Yuliia Cheporska Studio München.'
    },
    ru: {
      title: 'Политика конфиденциальности – Студия Yuliia Cheporska Мюнхен',
      description: 'Политика конфиденциальности: цели, правовые основания, срок хранения данных и права субъектов данных в студии Yuliia Cheporska Мюнхен.'
    }
  },
  '/kontakt': {
    de: {
      title: 'Kontakt – Yuliia Cheporska Studio München',
      description: 'Kontaktieren Sie uns: Elsässer Str. 33, 81667 München. Telefon, E-Mail, Instagram. Öffnungszeiten & Anfahrt.'
    },
    ru: {
      title: 'Контакты – Студия Yuliia Cheporska Мюнхен',
      description: 'Свяжитесь с нами: Elsässer Str. 33, 81667 Мюнхен. Телефон, электронная почта, Instagram. Часы работы и как добраться.'
    }
  },
  '/deka-geraeteverkauf': {
    de: {
      title: 'DEKA Laser Geräteverkauf München | Professionelle Lasersysteme',
      description: 'Professioneller Verkauf von DEKA Lasersystemen: Alexandrit, Dioden, Motus AX, RedTouch Pro. Beratung, Installation und Service für Beauty-Studios in München.'
    },
    ru: {
      title: 'Продажа лазерного оборудования DEKA Мюнхен | Профессиональные системы',
      description: 'Профессиональная продажа лазерных систем DEKA: александрит, диод, Motus AX, RedTouch Pro. Консультация, установка и обслуживание для салонов красоты в Мюнхене.'
    }
  },
  '/redtouch-pro': {
    de: {
      title: 'RedTouch Pro Laser München | Professionelle Hautbehandlung',
      description: 'RedTouch Pro 675nm: Professionelles Lasersystem für Hautstraffung, Pigmentierung und Hautverjüngung. DEKA Technologie für Beauty-Profis.'
    },
    ru: {
      title: 'RedTouch Pro лазер Мюнхен | Профессиональный уход за кожей',
      description: 'RedTouch Pro 675нм: Профессиональная лазерная система для подтяжки кожи, пигментации и омоложения. Технология DEKA для профессионалов красоты.'
    }
  },
  '/motus-pro': {
    de: {
      title: 'Motus Pro Laser München | DEKA Haarentfernungssystem',
      description: 'Motus Pro: Professionelles Alexandrit-Lasersystem von DEKA für dauerhafte Haarentfernung. Moveo-Technologie für schmerzfreie Behandlung.'
    },
    ru: {
      title: 'Motus Pro лазер Мюнхен | Система эпиляции DEKA',
      description: 'Motus Pro: Профессиональная александритовая лазерная система DEKA для долговременного удаления волос. Технология Moveo для безболезненной процедуры.'
    }
  },
  '/motus-ax': {
    de: {
      title: 'Motus AX Laser München | DEKA Alexandrit & Nd:YAG',
      description: 'Motus AX: Dual-Wellenlängen Lasersystem (Alexandrit 755nm + Nd:YAG 1064nm) von DEKA. Für alle Hauttypen und ganzjährige Behandlung.'
    },
    ru: {
      title: 'Motus AX лазер Мюнхен | DEKA александрит и Nd:YAG',
      description: 'Motus AX: Двухволновая лазерная система (александрит 755нм + Nd:YAG 1064нм) от DEKA. Для всех типов кожи и круглогодичных процедур.'
    }
  },
  '/physiq360': {
    de: {
      title: 'Physiq360 München | DEKA Body Contouring System',
      description: 'Physiq360: Innovatives Body-Contouring-System von DEKA. Elektromagnetische Muskelstimulation (STEP) für Körperformung und Muskelaufbau.'
    },
    ru: {
      title: 'Physiq360 Мюнхен | Система коррекции фигуры DEKA',
      description: 'Physiq360: Инновационная система коррекции фигуры от DEKA. Электромагнитная стимуляция мышц (STEP) для формирования тела и наращивания мышц.'
    }
  },
  '/again-cos': {
    de: {
      title: 'Again Cosmetics München | DEKA Kosmetikprodukte',
      description: 'Again Cosmetics: Professionelle Hautpflegeprodukte von DEKA. Ergänzende Pflege für optimale Behandlungsergebnisse.'
    },
    ru: {
      title: 'Again Cosmetics Мюнхен | Косметика DEKA',
      description: 'Again Cosmetics: Профессиональные средства по уходу за кожей от DEKA. Дополнительный уход для оптимальных результатов процедур.'
    }
  },
  '/deka': {
    de: {
      title: 'DEKA Event München | Laser Demonstrations & Schulungen',
      description: 'DEKA Event in München: Live-Demonstrationen von Lasersystemen, Schulungen und Beratung. Exklusive Einblicke in DEKA Technologie.'
    },
    ru: {
      title: 'DEKA Event Мюнхен | Демонстрация лазеров и обучение',
      description: 'DEKA Event в Мюнхене: Live-демонстрации лазерных систем, обучение и консультации. Эксклюзивный взгляд на технологию DEKA.'
    }
  },
  '/deka-day': {
    de: {
      title: 'DEKA Day München | Beauty Professional Event',
      description: 'DEKA Day in München: Ganztagesveranstaltung mit Laser-Vorführungen, Workshops und Networking für Beauty-Professionals.'
    },
    ru: {
      title: 'DEKA Day Мюнхен | Мероприятие для профессионалов красоты',
      description: 'DEKA Day в Мюнхене: Однодневное мероприятие с демонстрацией лазеров, воркшопами и нетворкингом для профессионалов индустрии красоты.'
    }
  },
  '/deka-anna': {
    de: {
      title: 'DEKA Anna München | Personal Beauty Consultation',
      description: 'DEKA Beratung mit Anna: Persönliche Beratung zu DEKA Lasersystemen und Behandlungsmöglichkeiten in München.'
    },
    ru: {
      title: 'DEKA Anna Мюнхен | Персональная консультация',
      description: 'Консультация DEKA с Анной: Персональная консультация по лазерным системам DEKA и возможностям процедур в Мюнхене.'
    }
  },
  '/deka-lera': {
    de: {
      title: 'DEKA Lera München | Expert Laser Consultation',
      description: 'DEKA Beratung mit Lera: Expertenberatung zu professionellen Lasersystemen und Beauty-Behandlungen in München.'
    },
    ru: {
      title: 'DEKA Lera Мюнхен | Экспертная консультация по лазерам',
      description: 'Консультация DEKA с Лерой: Экспертная консультация по профессиональным лазерным системам и процедурам красоты в Мюнхене.'
    }
  },
  '/deka-liudmila': {
    de: {
      title: 'DEKA Liudmila München | Professional Treatment Advice',
      description: 'DEKA Beratung mit Liudmila: Professionelle Beratung zu Laserbehandlungen und Hautpflege-Lösungen in München.'
    },
    ru: {
      title: 'DEKA Liudmila Мюнхен | Профессиональные советы по процедурам',
      description: 'Консультация DEKA с Людмилой: Профессиональные советы по лазерным процедурам и решениям по уходу за кожей в Мюнхене.'
    }
  }
};

/**
 * Get meta tags for a specific page and language
 */
export function getMetaTags(pathname: string, lang: 'de' | 'ru'): MetaTag {
  // Remove language prefix from pathname
  const pathWithoutLang = pathname.replace(/^\/(de|ru)/, '') || '/';

  // Get meta tags for this path
  const pageMeta = metaTags[pathWithoutLang];

  // Return appropriate language meta tags or default
  if (pageMeta && pageMeta[lang]) {
    return pageMeta[lang];
  }

  // Default fallback
  return metaTags['/'][lang];
}
