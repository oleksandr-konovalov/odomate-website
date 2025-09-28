export type Language = 'en' | 'ru' | 'fr' | 'de' | 'pl' | 'es';

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
];

export interface Translations {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    features: string;
    faq: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  features: {
    title: string;
    items: {
      title: string;
      description: string;
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
    text: string;
    accept: string;
  };
}