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
          answer: 'When you add a new vehicle, our AI instantly analyzes all vehicle data (model, year, configuration, engine, etc.), considers online reviews and official manufacturer recommendations to determine optimal service intervals for every component.',
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
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: September 28, 2025',
      content: [
        {
          heading: 'Information We Collect',
          text: 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.'
        },
        {
          heading: 'How We Use Your Information',
          text: 'We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.'
        },
        {
          heading: 'Information Sharing',
          text: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.'
        },
        {
          heading: 'Data Security',
          text: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          heading: 'Contact Us',
          text: 'If you have any questions about this Privacy Policy, please contact us at privacy@odomate.com.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: September 28, 2025',
      content: [
        {
          heading: 'Acceptance of Terms',
          text: 'By accessing and using Odomate, you accept and agree to be bound by the terms and provision of this agreement.'
        },
        {
          heading: 'Use License',
          text: 'Permission is granted to temporarily use Odomate for personal, non-commercial transitory viewing only.'
        },
        {
          heading: 'Disclaimer',
          text: 'The materials on Odomate are provided on an \'as is\' basis. Odomate makes no warranties, expressed or implied.'
        },
        {
          heading: 'Limitations',
          text: 'In no event shall Odomate or its suppliers be liable for any damages arising out of the use or inability to use the materials on Odomate.'
        },
        {
          heading: 'Contact Us',
          text: 'If you have any questions about these Terms, please contact us at legal@odomate.com.'
        }
      ]
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
          description: 'Управляйте до 3 автомобилей с семейным планом или используйте личную подписку на один автомобиль.',
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
          answer: 'При добавлении нового автомобиля наш ИИ мгновенно анализирует все данные о машине (модель, год, комплектацию, двигатель и т.д.), учитывает отзывы в интернете и официальные рекомендации производителя для определения оптимальных интервалов обслуживания каждого компонента.',
        },
        {
          question: 'Можно ли использовать для нескольких автомобилей?',
          answer: 'Да! Личный план покрывает 1 автомобиль, а семейная подписка позволяет управлять до 3 автомобилей.',
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
    privacy: {
      title: 'Политика конфиденциальности',
      lastUpdated: 'Последнее обновление: 28 сентября 2025',
      content: [
        {
          heading: 'Информация, которую мы собираем',
          text: 'Мы собираем информацию, которую вы предоставляете нам напрямую, например, когда создаете аккаунт, используете наши услуги или обращаетесь в службу поддержки.'
        },
        {
          heading: 'Как мы используем вашу информацию',
          text: 'Мы используем собранную информацию для предоставления, поддержания и улучшения наших услуг, обработки транзакций и общения с вами.'
        },
        {
          heading: 'Передача информации',
          text: 'Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам без вашего согласия, за исключением случаев, описанных в этой политике.'
        },
        {
          heading: 'Безопасность данных',
          text: 'Мы применяем соответствующие меры безопасности для защиты вашей личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения.'
        },
        {
          heading: 'Свяжитесь с нами',
          text: 'Если у вас есть вопросы по этой Политике конфиденциальности, свяжитесь с нами по адресу privacy@odomate.com.'
        }
      ]
    },
    terms: {
      title: 'Условия использования',
      lastUpdated: 'Последнее обновление: 28 сентября 2025',
      content: [
        {
          heading: 'Принятие условий',
          text: 'Получая доступ и используя Odomate, вы принимаете и соглашаетесь соблюдать условия и положения этого соглашения.'
        },
        {
          heading: 'Лицензия на использование',
          text: 'Разрешается временное использование Odomate только для личного, некоммерческого просмотра.'
        },
        {
          heading: 'Отказ от ответственности',
          text: 'Материалы на Odomate предоставляются "как есть". Odomate не дает никаких гарантий, явных или подразумеваемых.'
        },
        {
          heading: 'Ограничения',
          text: 'Ни при каких обстоятельствах Odomate или его поставщики не несут ответственности за любой ущерб, возникший в результате использования или невозможности использования материалов на Odomate.'
        },
        {
          heading: 'Свяжитесь с нами',
          text: 'Если у вас есть вопросы по этим Условиям, свяжитесь с нами по адресу legal@odomate.com.'
        }
      ]
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
          answer: 'Lorsque vous ajoutez un nouveau véhicule, notre IA analyse instantanément toutes les données du véhicule (modèle, année, configuration, moteur, etc.), considère les avis en ligne et les recommandations officielles du fabricant pour déterminer les intervalles de service optimaux pour chaque composant.',
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
    privacy: {
      title: 'Politique de confidentialité',
      lastUpdated: 'Dernière mise à jour: 28 septembre 2025',
      content: [
        {
          heading: 'Informations que nous collectons',
          text: 'Nous collectons les informations que vous nous fournissez directement, comme lorsque vous créez un compte, utilisez nos services ou nous contactez pour le support.'
        },
        {
          heading: 'Comment nous utilisons vos informations',
          text: 'Nous utilisons les informations collectées pour fournir, maintenir et améliorer nos services, traiter les transactions et communiquer avec vous.'
        },
        {
          heading: 'Partage d\'informations',
          text: 'Nous ne vendons, échangeons ou transférons pas vos informations personnelles à des tiers sans votre consentement, sauf comme décrit dans cette politique.'
        },
        {
          heading: 'Sécurité des données',
          text: 'Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre l\'accès non autorisé, la modification, la divulgation ou la destruction.'
        },
        {
          heading: 'Nous contacter',
          text: 'Si vous avez des questions sur cette Politique de confidentialité, contactez-nous à privacy@odomate.com.'
        }
      ]
    },
    terms: {
      title: 'Conditions d\'utilisation',
      lastUpdated: 'Dernière mise à jour: 28 septembre 2025',
      content: [
        {
          heading: 'Acceptation des conditions',
          text: 'En accédant et en utilisant Odomate, vous acceptez et acceptez d\'être lié par les termes et dispositions de cet accord.'
        },
        {
          heading: 'Licence d\'utilisation',
          text: 'L\'autorisation est accordée d\'utiliser temporairement Odomate uniquement pour un visionnage personnel et non commercial.'
        },
        {
          heading: 'Avertissement',
          text: 'Les matériaux sur Odomate sont fournis sur une base "tel quel". Odomate ne donne aucune garantie, expresse ou implicite.'
        },
        {
          heading: 'Limitations',
          text: 'En aucun cas Odomate ou ses fournisseurs ne seront responsables de tout dommage découlant de l\'utilisation ou de l\'incapacité d\'utiliser les matériaux sur Odomate.'
        },
        {
          heading: 'Nous contacter',
          text: 'Si vous avez des questions sur ces Conditions, contactez-nous à legal@odomate.com.'
        }
      ]
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
          answer: 'Wenn Sie ein neues Fahrzeug hinzufügen, analysiert unsere KI sofort alle Fahrzeugdaten (Modell, Jahr, Ausstattung, Motor usw.), berücksichtigt Online-Bewertungen und offizielle Herstellerempfehlungen, um optimale Serviceintervalle für jede Komponente zu bestimmen.',
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
    privacy: {
      title: 'Datenschutzrichtlinie',
      lastUpdated: 'Zuletzt aktualisiert: 28. September 2025',
      content: [
        {
          heading: 'Informationen, die wir sammeln',
          text: 'Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, z.B. wenn Sie ein Konto erstellen, unsere Dienste nutzen oder uns für Support kontaktieren.'
        },
        {
          heading: 'Wie wir Ihre Informationen verwenden',
          text: 'Wir verwenden die gesammelten Informationen, um unsere Dienste bereitzustellen, zu warten und zu verbessern, Transaktionen zu verarbeiten und mit Ihnen zu kommunizieren.'
        },
        {
          heading: 'Informationsaustausch',
          text: 'Wir verkaufen, handeln oder übertragen Ihre persönlichen Informationen nicht an Dritte ohne Ihre Zustimmung, außer wie in dieser Richtlinie beschrieben.'
        },
        {
          heading: 'Datensicherheit',
          text: 'Wir implementieren angemessene Sicherheitsmaßnahmen zum Schutz Ihrer persönlichen Informationen vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung.'
        },
        {
          heading: 'Kontaktieren Sie uns',
          text: 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns unter privacy@odomate.com.'
        }
      ]
    },
    terms: {
      title: 'Nutzungsbedingungen',
      lastUpdated: 'Zuletzt aktualisiert: 28. September 2025',
      content: [
        {
          heading: 'Annahme der Bedingungen',
          text: 'Durch den Zugriff und die Nutzung von Odomate akzeptieren Sie die Bedingungen und Bestimmungen dieser Vereinbarung und erklären sich damit einverstanden.'
        },
        {
          heading: 'Nutzungslizenz',
          text: 'Die Erlaubnis wird erteilt, Odomate vorübergehend nur für den persönlichen, nicht-kommerziellen vorübergehenden Gebrauch zu nutzen.'
        },
        {
          heading: 'Haftungsausschluss',
          text: 'Die Materialien auf Odomate werden auf "wie besehen" Basis bereitgestellt. Odomate gibt keine Garantien, weder ausdrücklich noch stillschweigend.'
        },
        {
          heading: 'Beschränkungen',
          text: 'In keinem Fall sind Odomate oder seine Lieferanten für Schäden verantwortlich, die aus der Nutzung oder Unfähigkeit zur Nutzung der Materialien auf Odomate entstehen.'
        },
        {
          heading: 'Kontaktieren Sie uns',
          text: 'Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns unter legal@odomate.com.'
        }
      ]
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
          answer: 'Gdy dodajesz nowy pojazd, nasza AI natychmiast analizuje wszystkie dane pojazdu (model, rok, konfigurację, silnik itp.), uwzględnia opinie internetowe i oficjalne zalecenia producenta, aby określić optymalne interwały serwisowe dla każdego komponentu.',
        },
        {
          question: 'Czy mogę używać go do wielu pojazdów?',
          answer: 'Tak! Plan osobisty obejmuje 1 pojazd, podczas gdy subskrypcja rodzinna pozwala zarządzać do 3 pojazdami.',
        },
        {
          question: 'Czy moje dane są bezpieczne?',
          answer: 'Absolutnie. Używamy szyfrowania end-to-end i przestrzegamy przepisów RODO w celu zapewnienia prywatności danych.',
        },
      ],
    },
    contact: {
      title: 'Skontaktuj się z nami',
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
    privacy: {
      title: 'Polityka prywatności',
      lastUpdated: 'Ostatnia aktualizacja: 28 września 2025',
      content: [
        {
          heading: 'Informacje, które zbieramy',
          text: 'Zbieramy informacje, które dostarczasz nam bezpośrednio, np. podczas tworzenia konta, korzystania z naszych usług lub kontaktu z pomocą techniczną.'
        },
        {
          heading: 'Jak wykorzystujemy Twoje informacje',
          text: 'Wykorzystujemy zebrane informacje do świadczenia, utrzymywania i ulepszania naszych usług, przetwarzania transakcji i komunikacji z Tobą.'
        },
        {
          heading: 'Udostępnianie informacji',
          text: 'Nie sprzedajemy, nie wymieniamy ani nie przekazujemy Twoich danych osobowych stronom trzecim bez Twojej zgody, z wyjątkiem przypadków opisanych w tej polityce.'
        },
        {
          heading: 'Bezpieczeństwo danych',
          text: 'Wdrażamy odpowiednie środki bezpieczeństwa w celu ochrony Twoich danych osobowych przed nieautoryzowanym dostępem, zmianą, ujawnieniem lub zniszczeniem.'
        },
        {
          heading: 'Skontaktuj się z nami',
          text: 'Jeśli masz pytania dotyczące tej Polityki prywatności, skontaktuj się z nami pod adresem privacy@odomate.com.'
        }
      ]
    },
    terms: {
      title: 'Warunki korzystania',
      lastUpdated: 'Ostatnia aktualizacja: 28 września 2025',
      content: [
        {
          heading: 'Akceptacja warunków',
          text: 'Uzyskując dostęp i korzystając z Odomate, akceptujesz i zgadzasz się przestrzegać warunków tego porozumienia.'
        },
        {
          heading: 'Licencja użytkowania',
          text: 'Udzielamy pozwolenia na tymczasowe użytkowanie Odomate wyłącznie do celów osobistych, niekomercyjnych.'
        },
        {
          heading: 'Zastrzeżenia',
          text: 'Materiały na Odomate są udostępniane "tak jak są". Odomate nie udziela żadnych gwarancji, wyrażonych ani dorozumianych.'
        },
        {
          heading: 'Ograniczenia',
          text: 'W żadnym przypadku Odomate ani jego dostawcy nie ponoszą odpowiedzialności za jakiekolwiek szkody wynikające z korzystania lub niemożności korzystania z materiałów na Odomate.'
        },
        {
          heading: 'Skontaktuj się z nami',
          text: 'Jeśli masz pytania dotyczące tych Warunków, skontaktuj się z nami pod adresem legal@odomate.com.'
        }
      ]
    },
    gdpr: {
      text: 'Używamy analityki w celu poprawy Twojego doświadczenia. Kontynuując korzystanie z naszej strony internetowej, akceptujesz nasze praktyki przetwarzania danych.',
      accept: 'Akceptuj',
    },
  },
  es: {
    meta: {
      title: 'Odomate - Tu coche. Tu cuerpo.',
      description: 'Aplicación inteligente de seguimiento de mantenimiento de automóviles con predicciones de IA, registro automático de kilometraje y gestión integral de servicios.',
      keywords: 'mantenimiento de automóviles, aplicación automotriz, seguimiento de kilometraje, libro de servicio, predicciones de IA, gestión de vehículos',
    },
    nav: {
      features: 'Características',
      faq: 'FAQ',
      contact: 'Contacto',
    },
    hero: {
      title: 'Cuidado inteligente del automóvil al alcance de tu mano',
      subtitle: 'Rastrea el mantenimiento, predice las necesidades de servicio y mantén tu vehículo en perfectas condiciones con IA.',
    },
    features: {
      title: 'Todo lo que necesitas para el cuidado perfecto del automóvil',
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
          description: 'Algoritmos avanzados de IA predicen cuándo las partes de tu automóvil necesitarán atención.',
        },
        {
          title: 'Libro de servicio digital',
          description: 'Historia completa de mantenimiento digital con recibos, fotos y registros de servicio.',
        },
        {
          title: 'Suscripción familiar',
          description: 'Gestiona hasta 3 automóviles con plan familiar o mantente personal con suscripción de un auto.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Cómo funciona el seguimiento automático de kilometraje?',
          answer: 'Nuestra aplicación utiliza GPS e integración OBD-II para registrar automáticamente el kilometraje sin entrada manual.',
        },
        {
          question: '¿Qué hace que las predicciones de IA sean precisas?',
          answer: 'Cuando agregas un nuevo vehículo, nuestra IA analiza instantáneamente todos los datos del vehículo (modelo, año, configuración, motor, etc.), considera reseñas en línea y recomendaciones oficiales del fabricante para determinar intervalos de servicio óptimos para cada componente.',
        },
        {
          question: '¿Puedes usarlo para múltiples vehículos?',
          answer: '¡Sí! El plan personal cubre 1 vehículo, mientras que la suscripción familiar te permite gestionar hasta 3 vehículos.',
        },
        {
          question: '¿Están seguros mis datos?',
          answer: 'Absolutamente. Utilizamos cifrado de extremo a extremo y cumplimos con las regulaciones GDPR para garantizar la privacidad de los datos.',
        },
      ],
    },
    contact: {
      title: 'Ponte en contacto',
      name: 'Tu nombre',
      email: 'Dirección de correo electrónico',
      message: 'Tu mensaje',
      send: 'Enviar mensaje',
      success: '¡Gracias! Tu mensaje ha sido enviado.',
    },
    footer: {
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
    },
    privacy: {
      title: 'Política de privacidad',
      lastUpdated: 'Última actualización: 28 de septiembre de 2025',
      content: [
        {
          heading: 'Información que recopilamos',
          text: 'Recopilamos información que nos proporcionas directamente, como cuando creas una cuenta, usas nuestros servicios o nos contactas para soporte.'
        },
        {
          heading: 'Cómo usamos tu información',
          text: 'Usamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, procesar transacciones y comunicarnos contigo.'
        },
        {
          heading: 'Compartir información',
          text: 'No vendemos, intercambiamos o transferimos tu información personal a terceros sin tu consentimiento, excepto como se describe en esta política.'
        },
        {
          heading: 'Seguridad de datos',
          text: 'Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.'
        },
        {
          heading: 'Contáctanos',
          text: 'Si tienes preguntas sobre esta Política de privacidad, contáctanos en privacy@odomate.com.'
        }
      ]
    },
    terms: {
      title: 'Términos de servicio',
      lastUpdated: 'Última actualización: 28 de septiembre de 2025',
      content: [
        {
          heading: 'Aceptación de términos',
          text: 'Al acceder y usar Odomate, aceptas y te comprometes a cumplir con los términos y disposiciones de este acuerdo.'
        },
        {
          heading: 'Licencia de uso',
          text: 'Se otorga permiso para usar temporalmente Odomate solo para visualización personal y no comercial.'
        },
        {
          heading: 'Descargo de responsabilidad',
          text: 'Los materiales en Odomate se proporcionan "tal como están". Odomate no ofrece garantías, expresas o implícitas.'
        },
        {
          heading: 'Limitaciones',
          text: 'En ningún caso Odomate o sus proveedores serán responsables de cualquier daño que surja del uso o la incapacidad de usar los materiales en Odomate.'
        },
        {
          heading: 'Contáctanos',
          text: 'Si tienes preguntas sobre estos Términos, contáctanos en legal@odomate.com.'
        }
      ]
    },
    gdpr: {
      text: 'Usamos análisis para mejorar tu experiencia. Al continuar usando nuestro sitio web, aceptas nuestras prácticas de procesamiento de datos.',
      accept: 'Aceptar',
    },
  },
};
