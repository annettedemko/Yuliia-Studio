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
      description: 'Laser-Haarentfernung München-Haidhausen: Alexandrit (755 nm) & Diodenlaser mit Kontaktkühlung. Langanhaltende Reduktion für alle Zonen. Ablauf, FAQ & Preise.'
    },
    ru: {
      title: 'Лазерная эпиляция Мюнхен | Александрит и диодный лазер',
      description: 'Лазерная эпиляция Мюнхен-Хайдхаузен: александрит (755 нм) и диодный лазер с контактным охлаждением. Долговременное удаление волос для всех зон. Этапы, FAQ и цены.'
    }
  },
  '/alexandrit-gegen-diodenlaser': {
    de: {
      title: 'Alexandrit vs. Diodenlaser – Unterschiede & Einsatz',
      description: 'Vergleich Alexandrit vs. Diodenlaser: Wirkung, Komfort, Eignung nach Haut- und Haartyp, Sommer/Bräune, Sicherheit und Sitzungsanzahl. Praxis-FAQ & Empfehlungen.'
    },
    ru: {
      title: 'Александрит vs. диодный лазер – отличия и применение',
      description: 'Сравнение: александрит vs. диодный лазер – действие, комфорт, подходящий тип кожи и волос, лето/загар, безопасность, количество сеансов. FAQ и рекомендации.'
    }
  },
  '/preis': {
    de: {
      title: 'Preise & Pakete – Yuliia Cheporska Studio München-Haidhausen',
      description: 'Transparente Preise inkl. MwSt.: Laser-Haarentfernung, RedTouch 675 nm, Icoone®️, Maniküre & Pediküre. Alle Zonen, Pakete und Abonnements im Überblick.'
    },
    ru: {
      title: 'Цены и пакеты – Студия Yuliia Cheporska Мюнхен-Хайдхаузен',
      description: 'Прозрачные цены вкл. НДС: лазерная эпиляция, RedTouch 675 нм, Icoone®️, маникюр и педикюр. Все зоны, пакеты и абонементы в обзоре. Запись онлайн.'
    }
  },
  '/services': {
    de: {
      title: 'Leistungen – Laser, RedTouch, Icoone & Nägel | München',
      description: 'Alle Leistungen im Überblick: Laser-Haarentfernung (Alexandrit & Diodenlaser), RedTouch 675 nm Hautverjüngung, Icoone®️ Bodyforming, Maniküre & Pediküre München.'
    },
    ru: {
      title: 'Услуги – лазер, RedTouch, Icoone и маникюр | Мюнхен',
      description: 'Все услуги в обзоре: лазерная эпиляция (александрит и диодный лазер), RedTouch 675 нм омоложение кожи, Icoone®️ коррекция фигуры, маникюр и педикюр Мюнхен.'
    }
  },
  '/about': {
    de: {
      title: 'Über uns – Yuliia Cheporska Studio München-Haidhausen',
      description: 'Ihr Beauty-Studio in München-Haidhausen nahe Ostbahnhof. Zertifizierte Lasertechnologie, individueller Ansatz, meist gut verträgliche Behandlungen. Team & Kontakt.'
    },
    ru: {
      title: 'О нас – Студия Yuliia Cheporska в Мюнхене-Хайдхаузен',
      description: 'Ваша студия красоты в Мюнхене-Хайдхаузен рядом с Остбанхоф. Сертифицированные лазерные технологии, индивидуальный подход, комфортные процедуры. Команда и контакты.'
    }
  },
  '/manikuere-pedikuere-muenchen': {
    de: {
      title: 'Maniküre & Pediküre München-Haidhausen | Yuliia Cheporska',
      description: 'Professionelle Maniküre & Pediküre in München-Haidhausen: Klassisch, Gel, Nagelmodellage, Nail Art, medizinische Fußpflege. Präzise Pflege & Hygiene. Termin online.'
    },
    ru: {
      title: 'Маникюр и педикюр Мюнхен-Хайдхаузен | Yuliia Cheporska',
      description: 'Профессиональный маникюр и педикюр в Мюнхене-Хайдхаузен: классический, гель, наращивание, нейл-арт, медицинский педикюр. Точный уход и гигиена. Запись онлайн.'
    }
  },
  '/redtouch-laser-muenchen': {
    de: {
      title: 'RedTouch 675 nm München | Hautverjüngung & Pigmentkorrektur',
      description: 'RedTouch Laser München-Haidhausen: 675 nm, nicht-ablativ – Kollagenstimulation, Hautstruktur, feine Linien, Akne-Narben & Pigmentthemen. Kaum Ausfallzeit.'
    },
    ru: {
      title: 'RedTouch 675 нм Мюнхен | Омоложение кожи и пигментация',
      description: 'RedTouch лазер Мюнхен-Хайдхаузен: 675 нм, неабляционный – стимуляция коллагена, текстура кожи, мелкие морщины, шрамы от акне и пигментация. Без реабилитации.'
    }
  },
  '/icoone-laser-muenchen': {
    de: {
      title: 'Icoone®️ Laser München | Bindegewebe, Cellulite & Hautbild',
      description: 'Icoone®️ Laser München-Haidhausen: Roboderm®-Mikrostimulation für straffes Bindegewebe, Cellulite-Reduktion und glatteres Hautbild. Ohne Downtime. Termin online.'
    },
    ru: {
      title: 'Icoone®️ лазер Мюнхен | Соединительная ткань и целлюлит',
      description: 'Icoone®️ лазер Мюнхен-Хайдхаузен: Roboderm®-микростимуляция для упругой соединительной ткани, уменьшения целлюлита и гладкой кожи. Без реабилитации. Запись онлайн.'
    }
  },
  '/impressum': {
    de: {
      title: 'Impressum – Yuliia Cheporska Studio | München-Haidhausen',
      description: 'Anbieterkennzeichnung gemäß § 5 DDG: Yuliia Cheporska, Elsässer Str. 33, 81667 München. Kontaktdaten, Verantwortliche und rechtliche Hinweise.'
    },
    ru: {
      title: 'Выходные данные – Студия Yuliia Cheporska | Мюнхен-Хайдхаузен',
      description: 'Выходные данные согласно § 5 DDG: Юлия Чепорская, Elsässer Str. 33, 81667 Мюнхен. Контактные данные, ответственные лица и правовая информация.'
    }
  },
  '/datenschutzerklaerung': {
    de: {
      title: 'Datenschutzerklärung – Yuliia Cheporska Studio München',
      description: 'Datenschutzerklärung gemäß DSGVO: Zwecke, Rechtsgrundlagen, Speicherdauer, Ihre Rechte als Betroffener. Yuliia Cheporska Studio München-Haidhausen.'
    },
    ru: {
      title: 'Политика конфиденциальности – Студия Yuliia Cheporska Мюнхен',
      description: 'Политика конфиденциальности согласно DSGVO: цели, правовые основания, срок хранения данных, ваши права. Студия Yuliia Cheporska Мюнхен-Хайдхаузен.'
    }
  },
  '/agb': {
    de: {
      title: 'AGB – Allgemeine Geschäftsbedingungen | Yuliia Cheporska Studio',
      description: 'Allgemeine Geschäftsbedingungen (AGB) inkl. Widerrufsbelehrung für Terminbuchungen. Yuliia Cheporska Studio München-Haidhausen.'
    },
    ru: {
      title: 'Общие условия (AGB) | Студия Yuliia Cheporska Мюнхен',
      description: 'Общие условия (AGB), включая инструкцию по отзыву для онлайн-бронирования. Студия Yuliia Cheporska Мюнхен-Хайдхаузен.'
    }
  },
  '/kontakt': {
    de: {
      title: 'Kontakt & Anfahrt – Yuliia Cheporska Studio München',
      description: 'Kontaktieren Sie uns: Elsässer Str. 33, 81667 München-Haidhausen (nahe Ostbahnhof). Telefon, E-Mail, WhatsApp, Instagram. Öffnungszeiten & Anfahrt mit ÖPNV.'
    },
    ru: {
      title: 'Контакты и как добраться – Студия Yuliia Cheporska Мюнхен',
      description: 'Свяжитесь с нами: Elsässer Str. 33, 81667 Мюнхен-Хайдхаузен (рядом с Остбанхоф). Телефон, e-mail, WhatsApp, Instagram. Часы работы и как добраться.'
    }
  },
  '/deka-geraeteverkauf': {
    de: {
      title: 'DEKA Laser Geräteverkauf München | Professionelle Systeme',
      description: 'Professioneller Verkauf von DEKA Lasersystemen: Alexandrit, Dioden, Motus AX, RedTouch Pro. Beratung, Installation und Service für Beauty-Studios in München.'
    },
    ru: {
      title: 'Продажа лазерного оборудования DEKA Мюнхен | Профессионалам',
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
      description: 'Motus Pro: Professionelles Alexandrit-Lasersystem von DEKA für dauerhafte Haarentfernung. Moveo-Technologie für schmerzfreie Behandlung aller Hauttypen.'
    },
    ru: {
      title: 'Motus Pro лазер Мюнхен | Система DEKA для эпиляции',
      description: 'Motus Pro: профессиональная александритовая лазерная система DEKA для долговременного удаления волос. Технология Moveo для безболезненной процедуры всех типов кожи.'
    }
  },
  '/motus-ax': {
    de: {
      title: 'Motus AX Laser München | DEKA Alexandrit & Nd:YAG System',
      description: 'Motus AX: Dual-Wellenlängen Lasersystem (Alexandrit 755nm + Nd:YAG 1064nm) von DEKA. Für alle Hauttypen und ganzjährige Behandlung. Moveo-Technologie.'
    },
    ru: {
      title: 'Motus AX лазер Мюнхен | DEKA александрит и Nd:YAG система',
      description: 'Motus AX: двухволновая лазерная система (александрит 755нм + Nd:YAG 1064нм) от DEKA. Для всех типов кожи и круглогодичных процедур. Технология Moveo.'
    }
  },
  '/physiq360': {
    de: {
      title: 'Physiq360 München | DEKA Body Contouring & Muskelaufbau',
      description: 'Physiq360: Innovatives Body-Contouring-System von DEKA. Elektromagnetische Muskelstimulation (STEP) für Körperformung und Muskelaufbau. Ohne Ausfallzeit.'
    },
    ru: {
      title: 'Physiq360 Мюнхен | DEKA коррекция фигуры и укрепление мышц',
      description: 'Physiq360: инновационная система коррекции фигуры от DEKA. Электромагнитная стимуляция мышц (STEP) для формирования тела и наращивания мышц. Без реабилитации.'
    }
  },
  '/again-cos': {
    de: {
      title: 'Again Cosmetics München | DEKA Professionelle Hautpflege',
      description: 'Again Cosmetics: Professionelle Hautpflegeprodukte von DEKA für optimale Behandlungsergebnisse. Ergänzende Pflege nach Laser- und Hautbehandlungen.'
    },
    ru: {
      title: 'Again Cosmetics Мюнхен | Профессиональная косметика DEKA',
      description: 'Again Cosmetics: профессиональные средства по уходу за кожей от DEKA для оптимальных результатов процедур. Дополнительный уход после лазерных процедур.'
    }
  },
  '/deka': {
    de: {
      title: 'DEKA Event München | Laser Demonstrations & Schulungen',
      description: 'DEKA Event in München: Live-Demonstrationen von Lasersystemen, Schulungen und Beratung. Exklusive Einblicke in DEKA Technologie für Beauty-Profis.'
    },
    ru: {
      title: 'DEKA Event Мюнхен | Демонстрация лазеров и обучение',
      description: 'DEKA Event в Мюнхене: live-демонстрации лазерных систем, обучение и консультации. Эксклюзивный взгляд на технологию DEKA для профессионалов красоты.'
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
