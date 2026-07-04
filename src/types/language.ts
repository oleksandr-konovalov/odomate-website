export type Language = 'en' | 'ru' | 'fr' | 'de' | 'pl' | 'es' | 'uk';

export interface LanguageConfig {
  code: Language;
  name: string;
  flag: string;
}

export const LANGUAGES: LanguageConfig[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
];

export interface Translations {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    features: string;
    pricing: string;
    b2b: string;
    faq: string;
    contact: string;
    backToHome: string;
  };
  hero: {
    title: string;
    subtitle: string;
    badge: string;
  };
  socialProof: {
    rating: string;
    downloads: string;
    languages: string;
    vehicles: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    yearly: string;
    perMonth: string;
    perYear: string;
    or: string;
    save: string;
    mostPopular: string;
    download: string;
    plans: {
      free: {
        name: string;
        price: string;
        period: string;
        description: string;
        features: string[];
      };
      premium: {
        name: string;
        priceMonthly: string;
        priceYearly: string;
        description: string;
        features: string[];
      };
      family: {
        name: string;
        priceMonthly: string;
        priceYearly: string;
        description: string;
        features: string[];
      };
      b2b: {
        name: string;
        tiers: {
          name: string;
          drivers: string;
          price: string;
          period: string;
        }[];
        description: string;
        features: string[];
        contactUs: string;
      };
    };
  };
  b2b: {
    title: string;
    subtitle: string;
    features: {
      title: string;
      description: string;
    }[];
    cta: string;
  };
  comparison: {
    title: string;
    subtitle: string;
    feature: string;
    odomate: string;
    others: string;
    rows: {
      feature: string;
      odomate: string;
      others: string;
    }[];
  };
  benefits: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  audience: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      avatar: string;
      content: string;
      rating: number;
    }[];
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
  footer: {
    privacy: string;
    terms: string;
    manual: string;
    quickLinks: string;
    legal: string;
    download: string;
    rights: string;
  };
  store: {
    comingSoonTitle: string;
    comingSoonText: string;
    ok: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    content: {
      heading: string;
      text: string;
    }[];
  };
  terms: {
    title: string;
    lastUpdated: string;
    content: {
      heading: string;
      text: string;
    }[];
  };
  gdpr: {
    title: string;
    text: string;
    categories: {
      necessary: {
        title: string;
        description: string;
      };
      analytics: {
        title: string;
        description: string;
      };
      marketing: {
        title: string;
        description: string;
      };
    };
    buttons: {
      acceptAll: string;
      acceptNecessary: string;
      customize: string;
      save: string;
    };
    links: {
      privacyPolicy: string;
      cookiePolicy: string;
    };
  };
}