import { Language, Translations } from '@/types/language';

export const translations: Record<Language, Translations> = {
  en: {
    meta: {
      title: 'Odomate - Your Car. Your Body.',
      description: 'Smart car maintenance tracking app with AI-powered predictions, automatic mileage logging, and comprehensive service management.',
      keywords: 'car maintenance, automotive app, mileage tracking, service book, AI predictions, vehicle management',
    },
    nav: {
      features: 'Features',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      title: 'Smart Car Care at Your Fingertips',
      subtitle: 'Track maintenance, predict service needs, and keep your vehicle in perfect condition with AI-powered insights.',
    },
    features: {
      title: 'Everything You Need for Perfect Car Care',
      items: [
        {
          title: 'Live Navigation',
          description: 'Real-time GPS navigation with traffic updates and route optimization for your daily drives.',
        },
        {
          title: 'Automatic Mileage Logging',
          description: 'Effortlessly track your vehicle\'s mileage automatically without manual input.',
        },
        {
          title: 'Component Life Notifications',
          description: 'Get timely alerts about maintenance schedules and component replacement needs.',
        },
        {
          title: 'AI-Based Lifetime Prediction',
          description: 'Advanced AI algorithms predict when your car parts will need attention or replacement.',
        },
        {
          title: 'Digital Service Book',
          description: 'Complete digital maintenance history with receipts, photos, and service records.',
        },
        {
          title: 'Family Subscription',
          description: 'Manage up to 3 cars with family plan or keep it personal with single car subscription.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'How does automatic mileage tracking work?',
          answer: 'Our app uses GPS and OBD-II integration to automatically log your vehicle\'s mileage without any manual input required.',
        },
        {
          question: 'What makes the AI predictions accurate?',
          answer: 'Our AI analyzes your driving patterns, vehicle history, manufacturer data, and millions of data points to provide highly accurate maintenance predictions.',
        },
        {
          question: 'Can I use it for multiple vehicles?',
          answer: 'Yes! The personal plan covers 1 vehicle, while the family subscription allows you to manage up to 3 vehicles.',
        },
        {
          question: 'Is my data secure?',
          answer: 'Absolutely. We use end-to-end encryption and comply with GDPR regulations to ensure your data privacy and security.',
        },
      ],
    },
    contact: {
      title: 'Get in Touch',
      name: 'Your Name',
      email: 'Email Address',
      message: 'Your Message',
      send: 'Send Message',
      success: 'Thank you! Your message has been sent.',
    },
    footer: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    gdpr: {
      text: 'We use analytics to improve your experience. By continuing to use our website, you accept our data processing practices.',
      accept: 'Accept',
    },
  },
  ru: {
    meta: {
      title: 'Odomate - Ваш автомобиль. Ваше тело.',
      description: 'Умное приложение для отслеживания обслуживания автомобиля с ИИ-прогнозами, автоматическим учетом пробега и комплексным управлением сервисом.',
      keywords: 'обслуживание автомобиля, автомобильное приложение, отслеживание пробега, сервисная книжка, ИИ прогнозы, управление транспортом',
    },
    nav: {
      features: 'Возможности',
      faq: 'Вопросы',
      contact: 'Контакты',
    },
    hero: {
      title: 'Умный уход за автомобилем у вас под рукой',
      subtitle: 'Отслеживайте обслуживание, прогнозируйте потребности в сервисе и поддерживайте автомобиль в идеальном состоянии с помощью ИИ.',
    },
    features: {
      title: 'Всё необходимое для идеального ухода за автомобилем',
      items: [
        {
          title: 'Живая навигация',
          description: 'GPS-навигация в реальном времени с обновлениями трафика и оптимизацией маршрута.',
        },
        {
          title: 'Автоматический учет пробега',
          description: 'Без усилий отслеживайте пробег вашего автомобиля автоматически без ручного ввода.',
        },
        {
          title: 'Уведомления о сроке службы компонентов',
          description: 'Получайте своевременные уведомления о расписании обслуживания и необходимости замены компонентов.',
        },
        {
          title: 'ИИ-прогнозирование срока службы',
          description: 'Продвинутые алгоритмы ИИ предсказывают, когда детали вашего автомобиля потребуют внимания.',
        },
        {
          title: 'Цифровая сервисная книжка',
          description: 'Полная цифровая история обслуживания с чеками, фотографиями и записями сервиса.',
        },
        {
          title: 'Семейная подписка',
          description: 'Управляйте до 3 автомобилями с семейным планом или используйте личную подписку на один автомобиль.',
        },
      ],
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      items: [
        {
          question: 'Как работает автоматическое отслеживание пробега?',
          answer: 'Наше приложение использует GPS и интеграцию с OBD-II для автоматической регистрации пробега без ручного ввода.',
        },
        {
          question: 'Что делает ИИ-прогнозы точными?',
          answer: 'Наш ИИ анализирует ваши привычки вождения, историю автомобиля, данные производителя и миллионы точек данных.',
        },
        {
          question: 'Можно ли использовать для нескольких автомобилей?',
          answer: 'Да! Личный план покрывает 1 автомобиль, а семейная подписка позволяет управлять до 3 автомобилями.',
        },
        {
          question: 'Безопасны ли мои данные?',
          answer: 'Абсолютно. Мы используем сквозное шифрование и соблюдаем регламент GDPR для защиты ваших данных.',
        },
      ],
    },
    contact: {
      title: 'Связаться с нами',
      name: 'Ваше имя',
      email: 'Адрес электронной почты',
      message: 'Ваше сообщение',
      send: 'Отправить сообщение',
      success: 'Спасибо! Ваше сообщение отправлено.',
    },
    footer: {
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
    },
    gdpr: {
      text: 'Мы используем аналитику для улучшения вашего опыта. Продолжая использовать наш сайт, вы принимаете наши практики обработки данных.',
      accept: 'Принять',
    },
  },
  fr: {
    meta: {
      title: 'Odomate - Votre voiture. Votre corps.',
      description: 'Application intelligente de suivi d\'entretien automobile avec prédictions IA, enregistrement automatique du kilométrage et gestion complète des services.',
      keywords: 'entretien automobile, application auto, suivi kilométrage, carnet de service, prédictions IA, gestion véhicule',
    },
    nav: {
      features: 'Fonctionnalités',
      faq: 'FAQ',
      contact: 'Contact',
    },
    hero: {
      title: 'Soins automobiles intelligents à portée de main',
      subtitle: 'Suivez l\'entretien, prédisez les besoins de service et maintenez votre véhicule en parfait état avec l\'IA.',
    },
    features: {
      title: 'Tout ce dont vous avez besoin pour un soin automobile parfait',
      items: [
        {
          title: 'Navigation en direct',
          description: 'Navigation GPS en temps réel avec mises à jour du trafic et optimisation d\'itinéraire.',
        },
        {
          title: 'Enregistrement automatique du kilométrage',
          description: 'Suivez sans effort le kilométrage de votre véhicule automatiquement sans saisie manuelle.',
        },
        {
          title: 'Notifications de durée de vie des composants',
          description: 'Recevez des alertes opportunes sur les calendriers d\'entretien et les besoins de remplacement.',
        },
        {
          title: 'Prédiction de durée de vie basée sur l\'IA',
          description: 'Les algorithmes d\'IA avancés prédisent quand vos pièces auto auront besoin d\'attention.',
        },
        {
          title: 'Carnet de service numérique',
          description: 'Historique d\'entretien numérique complet avec reçus, photos et dossiers de service.',
        },
        {
          title: 'Abonnement familial',
          description: 'Gérez jusqu\'à 3 voitures avec le plan familial ou restez personnel avec un abonnement une voiture.',
        },
      ],
    },
    faq: {
      title: 'Questions fréquemment posées',
      items: [
        {
          question: 'Comment fonctionne le suivi automatique du kilométrage?',
          answer: 'Notre application utilise GPS et l\'intégration OBD-II pour enregistrer automatiquement le kilométrage sans saisie manuelle.',
        },
        {
          question: 'Qu\'est-ce qui rend les prédictions IA précises?',
          answer: 'Notre IA analyse vos habitudes de conduite, l\'historique du véhicule, les données du fabricant et des millions de points de données.',
        },
        {
          question: 'Puis-je l\'utiliser pour plusieurs véhicules?',
          answer: 'Oui! Le plan personnel couvre 1 véhicule, tandis que l\'abonnement familial vous permet de gérer jusqu\'à 3 véhicules.',
        },
        {
          question: 'Mes données sont-elles sécurisées?',
          answer: 'Absolument. Nous utilisons le chiffrement de bout en bout et respectons les réglementations RGPD.',
        },
      ],
    },
    contact: {
      title: 'Nous contacter',
      name: 'Votre nom',
      email: 'Adresse e-mail',
      message: 'Votre message',
      send: 'Envoyer le message',
      success: 'Merci! Votre message a été envoyé.',
    },
    footer: {
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
    },
    gdpr: {
      text: 'Nous utilisons des analyses pour améliorer votre expérience. En continuant à utiliser notre site Web, vous acceptez nos pratiques de traitement des données.',
      accept: 'Accepter',
    },
  },
  de: {
    meta: {
      title: 'Odomate - Ihr Auto. Ihr Körper.',
      description: 'Intelligente Auto-Wartungs-App mit KI-Vorhersagen, automatischer Kilometerstand-Erfassung und umfassendem Service-Management.',
      keywords: 'Auto-Wartung, Automotive-App, Kilometerstand-Tracking, Serviceheft, KI-Vorhersagen, Fahrzeug-Management',
    },
    nav: {
      features: 'Funktionen',
      faq: 'FAQ',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Intelligente Autopflege bei der Hand',
      subtitle: 'Verfolgen Sie Wartung, prognostizieren Sie Servicebedarf und halten Sie Ihr Fahrzeug mit KI in perfektem Zustand.',
    },
    features: {
      title: 'Alles was Sie für perfekte Autopflege brauchen',
      items: [
        {
          title: 'Live-Navigation',
          description: 'Echtzeit-GPS-Navigation mit Verkehrsupdates und Routenoptimierung für Ihre täglichen Fahrten.',
        },
        {
          title: 'Automatische Kilometerstand-Erfassung',
          description: 'Verfolgen Sie mühelos den Kilometerstand Ihres Fahrzeugs automatisch ohne manuelle Eingabe.',
        },
        {
          title: 'Komponenten-Lebensdauer-Benachrichtigungen',
          description: 'Erhalten Sie rechtzeitige Warnungen über Wartungspläne und Ersatzteilbedarf.',
        },
        {
          title: 'KI-basierte Lebensdauer-Vorhersage',
          description: 'Fortgeschrittene KI-Algorithmen prognostizieren, wann Ihre Autoteile Aufmerksamkeit benötigen.',
        },
        {
          title: 'Digitales Serviceheft',
          description: 'Vollständige digitale Wartungshistorie mit Belegen, Fotos und Serviceaufzeichnungen.',
        },
        {
          title: 'Familien-Abonnement',
          description: 'Verwalten Sie bis zu 3 Autos mit Familienplan oder bleiben Sie persönlich mit Ein-Auto-Abonnement.',
        },
      ],
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      items: [
        {
          question: 'Wie funktioniert die automatische Kilometerstand-Verfolgung?',
          answer: 'Unsere App nutzt GPS und OBD-II-Integration zur automatischen Erfassung des Kilometerstands ohne manuelle Eingabe.',
        },
        {
          question: 'Was macht die KI-Vorhersagen genau?',
          answer: 'Unsere KI analysiert Ihre Fahrgewohnheiten, Fahrzeughistorie, Herstellerdaten und Millionen von Datenpunkten.',
        },
        {
          question: 'Kann ich es für mehrere Fahrzeuge verwenden?',
          answer: 'Ja! Der persönliche Plan deckt 1 Fahrzeug ab, während das Familien-Abonnement bis zu 3 Fahrzeuge verwalten lässt.',
        },
        {
          question: 'Sind meine Daten sicher?',
          answer: 'Absolut. Wir verwenden Ende-zu-Ende-Verschlüsselung und befolgen DSGVO-Bestimmungen für Datenschutz.',
        },
      ],
    },
    contact: {
      title: 'Kontakt aufnehmen',
      name: 'Ihr Name',
      email: 'E-Mail-Adresse',
      message: 'Ihre Nachricht',
      send: 'Nachricht senden',
      success: 'Danke! Ihre Nachricht wurde gesendet.',
    },
    footer: {
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
    },
    gdpr: {
      text: 'Wir verwenden Analysen zur Verbesserung Ihrer Erfahrung. Durch die weitere Nutzung unserer Website akzeptieren Sie unsere Datenverarbeitungspraktiken.',
      accept: 'Akzeptieren',
    },
  },
  pl: {
    meta: {
      title: 'Odomate - Twój samochód. Twoje ciało.',
      description: 'Inteligentna aplikacja do śledzenia konserwacji samochodu z prognozami AI, automatycznym rejestrowaniem przebiegu i kompleksowym zarządzaniem serwisem.',
      keywords: 'konserwacja samochodu, aplikacja motoryzacyjna, śledzenie przebiegu, książka serwisowa, prognozy AI, zarządzanie pojazdem',
    },
    nav: {
      features: 'Funkcje',
      faq: 'FAQ',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Inteligentna opieka nad samochodem na wyciągnięcie ręki',
      subtitle: 'Śledź konserwację, przewiduj potrzeby serwisowe i utrzymuj pojazd w idealnym stanie dzięki AI.',
    },
    features: {
      title: 'Wszystko czego potrzebujesz do idealnej opieki nad samochodem',
      items: [
        {
          title: 'Nawigacja na żywo',
          description: 'Nawigacja GPS w czasie rzeczywistym z aktualizacjami ruchu i optymalizacją trasy.',
        },
        {
          title: 'Automatyczne rejestrowanie przebiegu',
          description: 'Bez wysiłku śledź przebieg swojego pojazdu automatycznie bez ręcznego wprowadzania.',
        },
        {
          title: 'Powiadomienia o żywotności komponentów',
          description: 'Otrzymuj terminowe alerty o harmonogramach konserwacji i potrzebach wymiany części.',
        },
        {
          title: 'Przewidywanie żywotności oparte na AI',
          description: 'Zaawansowane algorytmy AI przewidują, kiedy części samochodu będą wymagały uwagi.',
        },
        {
          title: 'Cyfrowa książka serwisowa',
          description: 'Kompletna cyfrowa historia konserwacji z paragonami, zdjęciami i zapisami serwisu.',
        },
        {
          title: 'Subskrypcja rodzinna',
          description: 'Zarządzaj do 3 samochodami z planem rodzinnym lub zostań przy osobistej subskrypcji jednego auta.',
        },
      ],
    },
    faq: {
      title: 'Często zadawane pytania',
      items: [
        {
          question: 'Jak działa automatyczne śledzenie przebiegu?',
          answer: 'Nasza aplikacja wykorzystuje GPS i integrację OBD-II do automatycznego rejestrowania przebiegu bez ręcznego wprowadzania.',
        },
        {
          question: 'Co sprawia, że prognozy AI są dokładne?',
          answer: 'Nasze AI analizuje Twoje nawyki jazdy, historię pojazdu, dane producenta i miliony punktów danych.',
        },
        {
          question: 'Czy mogę używać dla wielu pojazdów?',
          answer: 'Tak! Plan osobisty obejmuje 1 pojazd, podczas gdy subskrypcja rodzinna pozwala zarządzać do 3 pojazdami.',
        },
        {
          question: 'Czy moje dane są bezpieczne?',
          answer: 'Absolutnie. Używamy szyfrowania end-to-end i przestrzegamy przepisów RODO dla ochrony danych.',
        },
      ],
    },
    contact: {
      title: 'Skontaktuj się',
      name: 'Twoje imię',
      email: 'Adres e-mail',
      message: 'Twoja wiadomość',
      send: 'Wyślij wiadomość',
      success: 'Dziękujemy! Twoja wiadomość została wysłana.',
    },
    footer: {
      privacy: 'Polityka prywatności',
      terms: 'Warunki korzystania',
    },
    gdpr: {
      text: 'Używamy analityki aby poprawić Twoje doświadczenia. Kontynuując korzystanie z naszej strony, akceptujesz nasze praktyki przetwarzania danych.',
      accept: 'Akceptuj',
    },
  },
  es: {
    meta: {
      title: 'Odomate - Tu coche. Tu cuerpo.',
      description: 'Aplicación inteligente de seguimiento de mantenimiento de autos con predicciones de IA, registro automático de kilometraje y gestión integral de servicios.',
      keywords: 'mantenimiento de autos, aplicación automotriz, seguimiento de kilometraje, libro de servicio, predicciones IA, gestión de vehículos',
    },
    nav: {
      features: 'Características',
      faq: 'FAQ',
      contact: 'Contacto',
    },
    hero: {
      title: 'Cuidado inteligente del auto al alcance de tus manos',
      subtitle: 'Rastrea el mantenimiento, predice las necesidades de servicio y mantén tu vehículo en perfectas condiciones con IA.',
    },
    features: {
      title: 'Todo lo que necesitas para el cuidado perfecto del auto',
      items: [
        {
          title: 'Navegación en vivo',
          description: 'Navegación GPS en tiempo real con actualizaciones de tráfico y optimización de rutas.',
        },
        {
          title: 'Registro automático de kilometraje',
          description: 'Rastrea sin esfuerzo el kilometraje de tu vehículo automáticamente sin entrada manual.',
        },
        {
          title: 'Notificaciones de vida útil de componentes',
          description: 'Recibe alertas oportunas sobre horarios de mantenimiento y necesidades de reemplazo.',
        },
        {
          title: 'Predicción de vida útil basada en IA',
          description: 'Algoritmos avanzados de IA predicen cuándo las partes de tu auto necesitarán atención.',
        },
        {
          title: 'Libro de servicio digital',
          description: 'Historial completo de mantenimiento digital con recibos, fotos y registros de servicio.',
        },
        {
          title: 'Suscripción familiar',
          description: 'Gestiona hasta 3 autos con plan familiar o mantente personal con suscripción de un auto.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Cómo funciona el seguimiento automático de kilometraje?',
          answer: 'Nuestra aplicación usa GPS e integración OBD-II para registrar automáticamente el kilometraje sin entrada manual.',
        },
        {
          question: '¿Qué hace precisas las predicciones de IA?',
          answer: 'Nuestra IA analiza tus patrones de conducción, historial del vehículo, datos del fabricante y millones de puntos de datos.',
        },
        {
          question: '¿Puedo usarla para múltiples vehículos?',
          answer: '¡Sí! El plan personal cubre 1 vehículo, mientras que la suscripción familiar te permite gestionar hasta 3 vehículos.',
        },
        {
          question: '¿Están seguros mis datos?',
          answer: 'Absolutamente. Usamos cifrado de extremo a extremo y cumplimos con las regulaciones GDPR para proteger tus datos.',
        },
      ],
    },
    contact: {
      title: 'Ponte en contacto',
      name: 'Tu nombre',
      email: 'Dirección de correo',
      message: 'Tu mensaje',
      send: 'Enviar mensaje',
      success: '¡Gracias! Tu mensaje ha sido enviado.',
    },
    footer: {
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
    },
    gdpr: {
      text: 'Usamos análisis para mejorar tu experiencia. Al continuar usando nuestro sitio web, aceptas nuestras prácticas de procesamiento de datos.',
      accept: 'Aceptar',
    },
  },
};