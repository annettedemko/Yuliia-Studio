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
