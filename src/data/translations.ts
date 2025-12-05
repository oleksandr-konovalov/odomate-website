import { Language, Translations } from '@/types/language';

export const translations: Record<Language, Translations> = {
  en: {
    meta: {
      title: 'Odomate - Smart Car Maintenance Tracking | AI-Powered Vehicle Care',
      description: 'Track your car maintenance with Odomate. AI-powered predictions, automatic GPS mileage logging, weather intelligence, and smart parking assistant. Premium plan for 2 vehicles.',
      keywords: 'car maintenance app, vehicle tracking, AI car care, mileage tracker, service book app, car maintenance tracker, automotive app, vehicle management, car service reminder, GPS mileage tracking, smart parking, weather car care',
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
    benefits: {
      title: 'Why choose Odomate',
      items: [
        {
          title: 'Fast results',
          description: 'Get instant insights about your car\'s health and maintenance needs in seconds.',
        },
        {
          title: 'Simple interface',
          description: 'Clean, intuitive design that makes car maintenance tracking effortless.',
        },
        {
          title: 'Multiple tools',
          description: 'All-in-one platform with navigation, tracking, and smart predictions.',
        },
        {
          title: 'Precise, not generic',
          description: 'AI-powered predictions tailored specifically to your vehicle and driving habits.',
        },
        {
          title: 'Flexible options',
          description: 'Choose features that work for you. Customize your car care experience.',
        },
        {
          title: 'Saves time',
          description: 'Automated tracking and smart alerts keep you ahead without manual effort.',
        },
      ],
    },
    features: {
      title: 'Everything You Need for Perfect Car Care',
      subtitle: 'Powerful features designed to make car maintenance simple and stress-free',
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
          description: 'Keep detailed records of every modification, service, and improvement. Document your car\'s history with a complete maintenance history.',
        },
        {
          title: 'Weather Intelligence',
          description: 'Plan smarter drives with hyperlocal forecasts and care tips tailored to upcoming conditions.',
        },
        {
          title: 'Smart Parking Assistant',
          description: 'Save your parking spot, enable paid parking timers, and receive push alerts before time runs out.',
        },
        {
          title: 'Android Head Units & Multi-Device Sync',
          description: 'Full support for Android car head units and multimedia systems with seamless synchronization across all your devices. Access your data anywhere, anytime.',
        },
      ],
    },
    cta: {
      title: 'Drive smarter with Odomate',
      subtitle: 'Join thousands of car owners who trust Odomate their vehicle maintenance',
      button: 'Get Started Now',
    },
    audience: {
      title: 'Perfect for every car owner',
      items: [
        {
          title: 'Daily Drivers',
          description: 'Perfect for everyday car owners who want to stay on top of maintenance without the hassle. Track your mileage, get timely reminders, and never miss a service appointment.',
        },
        {
          title: 'Car Enthusiasts',
          description: 'Keep detailed records of every modification, service, and upgrade. Document your car\'s journey with comprehensive maintenance history.',
        },
      ],
    },
    testimonials: {
      title: 'What Our Users Say',
      subtitle: 'Join thousands of satisfied car owners who trust Odomate for their vehicle maintenance',
      items: [
        {
          name: 'Sarah Johnson',
          role: 'Daily Commuter',
          avatar: 'SJ',
          content: 'Odomate has completely transformed how I manage my car maintenance. The AI predictions are incredibly accurate, and I never miss a service anymore.',
          rating: 5
        },
        {
          name: 'Michael Chen',
          role: 'Car Enthusiast',
          avatar: 'MC',
          content: 'As someone who loves modifying cars, the digital service book feature is invaluable. I can track every modification and service with perfect detail.',
          rating: 5
        },
        {
          name: 'Emma Rodriguez',
          role: 'Fleet Manager',
          avatar: 'ER',
          content: 'The automatic mileage tracking saves me hours every week. Odomate is essential for managing multiple vehicles efficiently.',
          rating: 5
        },
        {
          name: 'David Thompson',
          role: 'Weekend Driver',
          avatar: 'DT',
          content: 'Simple, intuitive, and incredibly helpful. The parking assistant alone has saved me from countless parking tickets.',
          rating: 5
        },
        {
          name: 'Lisa Anderson',
          role: 'Road Trip Enthusiast',
          avatar: 'LA',
          content: 'The weather intelligence feature helps me plan perfect road trips. I always know when to check my tires or change oil based on conditions.',
          rating: 5
        },
        {
          name: 'James Wilson',
          role: 'Small Business Owner',
          avatar: 'JW',
          content: 'I manage 5 delivery vehicles with Odomate. The component life predictions have saved me thousands in unexpected repairs.',
          rating: 5
        },
        {
          name: 'Maria Garcia',
          role: 'New Driver',
          avatar: 'MG',
          content: 'As a new driver, Odomate gives me confidence. The reminders are clear, and I never feel overwhelmed about maintenance.',
          rating: 5
        },
        {
          name: 'Robert Taylor',
          role: 'Classic Car Collector',
          avatar: 'RT',
          content: 'Perfect for my classic car collection. Each vehicle gets personalized care based on its unique needs and usage patterns.',
          rating: 5
        },
        {
          name: 'Jennifer Lee',
          role: 'Rideshare Driver',
          avatar: 'JL',
          content: 'Driving 50k miles yearly means maintenance is critical. Odomate keeps my car in perfect shape and maximizes my earnings.',
          rating: 5
        },
        {
          name: 'Thomas Brown',
          role: 'DIY Mechanic',
          avatar: 'TB',
          content: 'The detailed service history helps me track what I have done myself. Perfect for anyone who works on their own car.',
          rating: 5
        }
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'How does automatic mileage tracking work?',
          answer: 'Our app uses GPS technology to automatically log your vehicle\'s mileage without any manual input required.',
        },
        {
          question: 'What makes the AI predictions accurate?',
          answer: 'When you add a new vehicle, our AI instantly analyzes all vehicle data (model, year, configuration, engine, etc.), considers online reviews and official manufacturer recommendations to determine optimal service intervals for every component.',
        },
        {
          question: 'Can I use it for multiple vehicles?',
          answer: 'Yes! Our Premium plan allows you to manage up to 2 vehicles with all features included.',
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
      manual: 'User Manual',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      download: 'Download App',
      rights: 'All rights reserved.',
    },
    store: {
      comingSoonTitle: 'Coming soon',
      comingSoonText: 'The app is not yet available in the store. Please check back soon.',
      ok: 'OK'
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
          text: 'If you have any questions about this Privacy Policy, please contact us at privacy@odomate.net.'
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
          text: 'If you have any questions about these Terms, please contact us at legal@odomate.net.'
        }
      ]
    },
    gdpr: {
      title: 'Cookie Preferences',
      text: 'We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this, as outlined in our Cookie Policy.',
      categories: {
        necessary: {
          title: 'Essential Cookies',
          description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.'
        },
        analytics: {
          title: 'Analytics Cookies',
          description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.'
        },
        marketing: {
          title: 'Marketing Cookies',
          description: 'These cookies are used to make advertising messages more relevant to you and your interests.'
        }
      },
      buttons: {
        acceptAll: 'Accept All',
        acceptNecessary: 'Accept Necessary Only',
        customize: 'Customize',
        save: 'Save Preferences'
      },
      links: {
        privacyPolicy: 'Privacy Policy',
        cookiePolicy: 'Cookie Policy'
      }
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
    benefits: {
      title: 'Почему выбирают Odomate',
      items: [
        {
          title: 'Быстрые результаты',
          description: 'Получайте мгновенную информацию о состоянии автомобиля и потребностях в обслуживании за секунды.',
        },
        {
          title: 'Простой интерфейс',
          description: 'Чистый, интуитивный дизайн, который делает отслеживание обслуживания автомобиля легким.',
        },
        {
          title: 'Множество инструментов',
          description: 'Универсальная платформа с навигацией, отслеживанием и умными прогнозами.',
        },
        {
          title: 'Точно, а не обобщенно',
          description: 'ИИ-прогнозы, адаптированные специально под ваш автомобиль и стиль вождения.',
        },
        {
          title: 'Гибкие опции',
          description: 'Выбирайте функции, которые работают для вас. Настраивайте свой опыт ухода за автомобилем.',
        },
        {
          title: 'Экономит время',
          description: 'Автоматическое отслеживание и умные уведомления держат вас в курсе без ручных усилий.',
        },
      ],
    },
    features: {
      title: 'Всё необходимое для идеального ухода за автомобилем',
      subtitle: 'Мощные функции, разработанные для простого и беззаботного обслуживания автомобиля',
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
          description: 'Ведите подробные записи каждой модификации, обслуживания и улучшения. Документируйте историю вашего автомобиля с полной историей обслуживания.',
        },
        {
          title: 'Погодный ассистент',
          description: 'Планируйте поездки с гиперлокальными прогнозами и советами по уходу, адаптированными к предстоящим условиям.',
        },
        {
          title: 'Умный помощник парковки',
          description: 'Сохраняйте геопозицию парковки, включайте таймер платной стоянки и получайте push-уведомления, когда время подходит к концу и уже истекло.',
        },
        {
          title: 'Android Магнитолы и Синхронизация',
          description: 'Полная поддержка Android автомобильных магнитол и мультимедийных систем с бесшовной синхронизацией между всеми вашими устройствами. Доступ к данным в любое время и в любом месте.',
        },
      ],
    },
    cta: {
      title: 'Водите умнее с Odomate',
      subtitle: 'Присоединяйтесь к тысячам автовладельцев, которые доверяют Odomate обслуживание своих автомобилей',
      button: 'Начать сейчас',
    },
    audience: {
      title: 'Идеально для каждого автовладельца',
      items: [
        {
          title: 'Ежедневные водители',
          description: 'Идеально для обычных автовладельцев, которые хотят быть в курсе обслуживания без лишних хлопот. Отслеживайте пробег, получайте своевременные напоминания и никогда не пропускайте сервисное обслуживание.',
        },
        {
          title: 'Автоэнтузиасты',
          description: 'Ведите подробные записи каждой модификации, обслуживания и улучшения. Документируйте историю вашего автомобиля с полной историей обслуживания.',
        },
      ],
    },
    testimonials: {
      title: 'Что говорят наши пользователи',
      subtitle: 'Присоединяйтесь к тысячам довольных автовладельцев, которые доверяют Odomate обслуживание своих автомобилей',
      items: [
        {
          name: 'Анна Петрова',
          role: 'Ежедневный водитель',
          avatar: 'АП',
          content: 'Odomate полностью изменил то, как я управляю обслуживанием автомобиля. Предсказания И невероятно точные, и я больше никогда не пропускаю ТО.',
          rating: 5
        },
        {
          name: 'Михаил Иванов',
          role: 'Автоэнтузиаст',
          avatar: 'МИ',
          content: 'Как человек, который любит тюнинговать автомобили, функция цифровой сервисной книжки бесценна. Я могу отслеживать каждую модификацию и сервис с идеальной детализацией.',
          rating: 5
        },
        {
          name: 'Елена Смирнова',
          role: 'Менеджер автопарка',
          avatar: 'ЕС',
          content: 'Автоматическое отслеживание пробега экономит мне часы каждую неделю. Odomate необходим для эффективного управления несколькими автомобилями.',
          rating: 5
        },
        {
          name: 'Дмитрий Козлов',
          role: 'Водитель выходного дня',
          avatar: 'ДК',
          content: 'Просто, интуитивно и невероятно полезно. Один только помощник парковки спас меня от бесчисленных штрафов за парковку.',
          rating: 5
        },
        {
          name: 'Ольга Волкова',
          role: 'Любитель путешествий',
          avatar: 'ОВ',
          content: 'Функция погодной интеллигенции помогает планировать идеальные путешествия. Я всегда знаю, когда проверять шины или менять масло.',
          rating: 5
        },
        {
          name: 'Алексей Соколов',
          role: 'Владелец малого бизнеса',
          avatar: 'АС',
          content: 'Управляю 5 автомобилями доставки с Odomate. Прогнозы жизненного цикла компонентов сэкономили мне тысячи на внезапных ремонтах.',
          rating: 5
        },
        {
          name: 'Мария Новикова',
          role: 'Новичок за рулем',
          avatar: 'МН',
          content: 'Как новый водитель, Odomate дает мне уверенность. Напоминания понятные, и я никогда не чувствую себя перегруженной обслуживанием.',
          rating: 5
        },
        {
          name: 'Виктор Орлов',
          role: 'Коллекционер классики',
          avatar: 'ВО',
          content: 'Идеально для моей коллекции классических автомобилей. Каждый автомобиль получает персонализированный уход на основе уникальных потребностей.',
          rating: 5
        },
        {
          name: 'Екатерина Белова',
          role: 'Водитель такси',
          avatar: 'ЕБ',
          content: 'Ежегодно проезжаю 80 тыс. км, значит обслуживание критически важно. Odomate поддерживает мой автомобиль в идеальном состоянии.',
          rating: 5
        },
        {
          name: 'Игорь Кузнецов',
          role: 'Автомеханик-любитель',
          avatar: 'ИК',
          content: 'Подробная история обслуживания помогает отслеживать, что я сделал самостоятельно. Идеально для тех, кто работает с своим автомобилем.',
          rating: 5
        }
      ],
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      items: [
        {
          question: 'Как работает автоматическое отслеживание пробега?',
          answer: 'Наше приложение использует GPS-технологию для автоматической регистрации пробега без ручного ввода.',
        },
        {
          question: 'Что делает ИИ-прогнозы точными?',
          answer: 'При добавлении нового автомобиля наш ИИ мгновенно анализирует все данные о машине (модель, год, комплектацию, двигатель и т.д.), учитывает отзывы в интернете и официальные рекомендации производителя для определения оптимальных интервалов обслуживания каждого компонента.',
        },
        {
          question: 'Можно ли использовать для нескольких автомобилей?',
          answer: 'Да! Наш Premium план позволяет управлять до 2 автомобилей со всеми функциями.',
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
      manual: 'Руководство пользователя',
      quickLinks: 'Быстрые ссылки',
      legal: 'Юридическая информация',
      download: 'Скачать приложение',
      rights: 'Все права защищены.',
    },
    store: {
      comingSoonTitle: 'Скоро будет',
      comingSoonText: 'Приложение пока недоступно в магазине. Загляните позже.',
      ok: 'Ок'
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
          text: 'Если у вас есть вопросы по этой Политике конфиденциальности, свяжитесь с нами по адресу privacy@odomate.net.'
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
          text: 'Если у вас есть вопросы по этим Условиям, свяжитесь с нами по адресу legal@odomate.net.'
        }
      ]
    },
    gdpr: {
      title: 'Настройки файлов cookie',
      text: 'Мы используем файлы cookie и похожие технологии, чтобы помочь персонализировать контент, адаптировать и измерять рекламу, а также предоставить лучший опыт. Нажимая "Принять", вы соглашаетесь с этим, как описано в нашей Политике использования файлов cookie.',
      categories: {
        necessary: {
          title: 'Обязательные файлы cookie',
          description: 'Эти файлы cookie необходимы для работы веб-сайта и не могут быть отключены в наших системах.'
        },
        analytics: {
          title: 'Аналитические файлы cookie',
          description: 'Эти файлы cookie позволяют нам подсчитывать посещения и источники трафика, чтобы мы могли измерять и улучшать производительность нашего сайта.'
        },
        marketing: {
          title: 'Маркетинговые файлы cookie',
          description: 'Эти файлы cookie используются для того, чтобы рекламные сообщения были более релевантными для вас и ваших интересов.'
        }
      },
      buttons: {
        acceptAll: 'Принять все',
        acceptNecessary: 'Только обязательные',
        customize: 'Настроить',
        save: 'Сохранить настройки'
      },
      links: {
        privacyPolicy: 'Политика конфиденциальности',
        cookiePolicy: 'Политика cookie'
      }
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
    benefits: {
      title: 'Pourquoi choisir Odomate',
      items: [
        {
          title: 'Résultats rapides',
          description: 'Obtenez des informations instantanées sur la santé de votre voiture et les besoins d\'entretien en quelques secondes.',
        },
        {
          title: 'Interface simple',
          description: 'Design épuré et intuitif qui rend le suivi de l\'entretien automobile sans effort.',
        },
        {
          title: 'Plusieurs outils',
          description: 'Plateforme tout-en-un avec navigation, suivi et prédictions intelligentes.',
        },
        {
          title: 'Précis, pas générique',
          description: 'Prédictions IA adaptées spécifiquement à votre véhicule et vos habitudes de conduite.',
        },
        {
          title: 'Options flexibles',
          description: 'Choisissez les fonctionnalités qui vous conviennent. Personnalisez votre expérience d\'entretien automobile.',
        },
        {
          title: 'Gain de temps',
          description: 'Le suivi automatique et les alertes intelligentes vous gardent en avance sans effort manuel.',
        },
      ],
    },
    features: {
      title: 'Tout ce dont vous avez besoin pour un soin automobile parfait',
      subtitle: 'Fonctionnalités puissantes conçues pour rendre l\'entretien automobile simple et sans stress',
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
          description: 'Tenez des registres détaillés de chaque modification, service et amélioration. Documentez l\'histoire de votre voiture avec un historique d\'entretien complet.',
        },
        {
          title: 'Intelligence météo',
          description: 'Planifiez vos trajets avec des prévisions hyperlocales et des conseils d\'entretien adaptés aux conditions à venir.',
        },
        {
          title: 'Assistant stationnement intelligent',
          description: 'Enregistrez votre place, activez le minuteur de stationnement payant et recevez des notifications push avant la fin ou à l\'expiration.',
        },
        {
          title: 'Autoradios Android et Synchronisation',
          description: 'Support complet pour les autoradios et systèmes multimédia Android embarqués avec synchronisation transparente sur tous vos appareils. Accédez à vos données partout, à tout moment.',
        },
      ],
    },
    cta: {
      title: 'Conduisez plus intelligemment avec Odomate',
      subtitle: 'Rejoignez des milliers de propriétaires de voitures qui font confiance à Odomate l\'entretien de leur véhicule',
      button: 'Commencer maintenant',
    },
    audience: {
      title: 'Parfait pour chaque propriétaire de voiture',
      items: [
        {
          title: 'Conducteurs quotidiens',
          description: 'Parfait pour les propriétaires de voitures ordinaires qui veulent rester au courant de l\'entretien sans tracas. Suivez votre kilométrage, recevez des rappels opportuns et ne manquez jamais un rendez-vous de service.',
        },
        {
          title: 'Passionnés d\'automobile',
          description: 'Tenez des registres détaillés de chaque modification, service et amélioration. Documentez le parcours de votre voiture avec un historique d\'entretien complet.',
        },
      ],
    },
    testimonials: {
      title: 'Ce que disent nos utilisateurs',
      subtitle: 'Rejoignez des milliers de propriétaires de voitures satisfaits qui font confiance à Odomate pour l\'entretien de leur véhicule',
      items: [
        {
          name: 'Marie Dubois',
          role: 'Conductrice quotidienne',
          avatar: 'MD',
          content: 'Odomate a complètement transformé la façon dont je gère l\'entretien de ma voiture. Les prédictions IA sont incroyablement précises, et je ne rate plus jamais un entretien.',
          rating: 5
        },
        {
          name: 'Pierre Martin',
          role: 'Passionné d\'automobile',
          avatar: 'PM',
          content: 'En tant que passionné de modification de voitures, la fonction de carnet de service numérique est inestimable. Je peux suivre chaque modification et service avec un détail parfait.',
          rating: 5
        },
        {
          name: 'Sophie Bernard',
          role: 'Gestionnaire de flotte',
          avatar: 'SB',
          content: 'Le suivi automatique du kilométrage me fait économiser des heures chaque semaine. Odomate est essentiel pour gérer efficacement plusieurs véhicules.',
          rating: 5
        },
        {
          name: 'Lucas Petit',
          role: 'Conducteur du week-end',
          avatar: 'LP',
          content: 'Simple, intuitif et incroyablement utile. L\'assistant de stationnement seul m\'a sauvé d\'innombrables amendes de stationnement.',
          rating: 5
        },
        {
          name: 'Camille Laurent',
          role: 'Passionnée de voyages',
          avatar: 'CL',
          content: 'La fonction d\'intelligence météorologique m\'aide à planifier des voyages parfaits. Je sais toujours quand vérifier mes pneus ou changer l\'huile.',
          rating: 5
        },
        {
          name: 'Nicolas Rousseau',
          role: 'Petit entrepreneur',
          avatar: 'NR',
          content: 'Je gère 5 véhicules de livraison avec Odomate. Les prédictions de durée de vie des composants m\'ont fait économiser des milliers en réparations imprévues.',
          rating: 5
        },
        {
          name: 'Julie Moreau',
          role: 'Nouvelle conductrice',
          avatar: 'JM',
          content: 'En tant que nouvelle conductrice, Odomate me donne confiance. Les rappels sont clairs, et je ne me sens jamais dépassée par l\'entretien.',
          rating: 5
        },
        {
          name: 'Antoine Girard',
          role: 'Collectionneur de classiques',
          avatar: 'AG',
          content: 'Parfait pour ma collection de voitures classiques. Chaque véhicule reçoit des soins personnalisés basés sur ses besoins uniques.',
          rating: 5
        },
        {
          name: 'Isabelle Lambert',
          role: 'Conductrice VTC',
          avatar: 'IL',
          content: 'Parcourir 80 000 km par an signifie que l\'entretien est critique. Odomate maintient ma voiture en parfait état et maximise mes revenus.',
          rating: 5
        },
        {
          name: 'François Michel',
          role: 'Mécanicien amateur',
          avatar: 'FM',
          content: 'L\'historique d\'entretien détaillé m\'aide à suivre ce que j\'ai fait moi-même. Parfait pour quiconque travaille sur sa propre voiture.',
          rating: 5
        }
      ],
    },
    faq: {
      title: 'Questions fréquemment posées',
      items: [
        {
          question: 'Comment fonctionne le suivi automatique du kilométrage?',
          answer: 'Notre application utilise la technologie GPS pour enregistrer automatiquement le kilométrage sans saisie manuelle.',
        },
        {
          question: 'Qu\'est-ce qui rend les prédictions IA précises?',
          answer: 'Lorsque vous ajoutez un nouveau véhicule, notre IA analyse instantanément toutes les données du véhicule (modèle, année, configuration, moteur, etc.), considère les avis en ligne et les recommandations officielles du fabricant pour déterminer les intervalles de service optimaux pour chaque composant.',
        },
        {
          question: 'Puis-je l\'utiliser pour plusieurs véhicules?',
          answer: 'Oui! Notre plan Premium vous permet de gérer jusqu\'à 2 véhicules avec toutes les fonctionnalités incluses.',
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
      manual: 'Guide d\'utilisation',
      quickLinks: 'Liens rapides',
      legal: 'Mentions légales',
      download: 'Télécharger l\'application',
      rights: 'Tous droits réservés.',
    },
    store: {
      comingSoonTitle: 'Bientôt disponible',
      comingSoonText: 'L\'application n\'est pas encore disponible sur le store. Revenez bientôt.',
      ok: 'OK',
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
          text: 'Si vous avez des questions sur cette Politique de confidentialité, contactez-nous à privacy@odomate.net.'
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
          text: 'Si vous avez des questions sur ces Conditions, contactez-nous à legal@odomate.net.'
        }
      ]
    },
    gdpr: {
      title: 'Préférences de cookies',
      text: 'Nous utilisons des cookies et des technologies similaires pour aider à personnaliser le contenu, adapter et mesurer les publicités, et fournir une meilleure expérience. En cliquant sur accepter, vous acceptez cela, comme décrit dans notre Politique de cookies.',
      categories: {
        necessary: {
          title: 'Cookies essentiels',
          description: 'Ces cookies sont nécessaires au fonctionnement du site Web et ne peuvent pas être désactivés dans nos systèmes.'
        },
        analytics: {
          title: 'Cookies d\'analyse',
          description: 'Ces cookies nous permettent de compter les visites et les sources de trafic afin que nous puissions mesurer et améliorer les performances de notre site.'
        },
        marketing: {
          title: 'Cookies marketing',
          description: 'Ces cookies sont utilisés pour rendre les messages publicitaires plus pertinents pour vous et vos intérêts.'
        }
      },
      buttons: {
        acceptAll: 'Tout accepter',
        acceptNecessary: 'Accepter uniquement les essentiels',
        customize: 'Personnaliser',
        save: 'Enregistrer les préférences'
      },
      links: {
        privacyPolicy: 'Politique de confidentialité',
        cookiePolicy: 'Politique de cookies'
      }
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
    benefits: {
      title: 'Warum Autobesitzer Odomate lieben',
      items: [
        {
          title: 'Nie wieder verpasste Wartung',
          description: 'Intelligente Erinnerungen halten Ihr Auto in Top-Zustand',
        },
        {
          title: 'Geld sparen',
          description: 'Vermeiden Sie teure Reparaturen durch rechtzeitige Wartung',
        },
        {
          title: 'Alles an einem Ort',
          description: 'Vollständige Fahrzeughistorie immer zur Hand',
        },
      ],
    },
    features: {
      title: 'Alles was Sie für perfekte Autopflege brauchen',
      subtitle: 'Erweiterte Funktionen für intelligente Fahrzeugwartung und Verwaltung',
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
          description: 'Führen Sie detaillierte Aufzeichnungen über jede Modifikation, Wartung und Verbesserung. Dokumentieren Sie die Geschichte Ihres Fahrzeugs mit einer vollständigen Wartungshistorie.',
        },
        {
          title: 'Wetterintelligenz',
          description: 'Planen Sie Fahrten mit hyperlokalen Vorhersagen und Pflegetipps, die an bevorstehende Bedingungen angepasst sind.',
        },
        {
          title: 'Intelligenter Parkassistent',
          description: 'Speichern Sie Ihren Parkplatz, aktivieren Sie kostenpflichtige Parktimer und erhalten Sie Push-Benachrichtigungen, wenn die Zeit abläuft oder abgelaufen ist.',
        },
        {
          title: 'Android Autoradios & Multi-Geräte-Sync',
          description: 'Vollständige Unterstützung für Android Autoradios und Multimedia-Systeme mit nahtloser Synchronisierung über alle Ihre Geräte. Greifen Sie überall und jederzeit auf Ihre Daten zu.',
        },
      ],
    },
    cta: {
      title: 'Fahren Sie intelligenter mit Odomate',
      subtitle: 'Schließen Sie sich Tausenden von Autobesitzern an, die Odomate die Wartung ihrer Fahrzeuge anvertrauen',
      button: 'Jetzt starten',
    },
    audience: {
      title: 'Perfekt für jeden Autobesitzer',
      items: [
        {
          title: 'Tägliche Fahrer',
          description: 'Perfekt für alltägliche Autobesitzer, die ihren Wartungsplan im Blick behalten möchten, ohne sich darum kümmern zu müssen. Verfolgen Sie Ihre Kilometerleistung, erhalten Sie rechtzeitige Erinnerungen und verpassen Sie nie einen Servicetermin.',
        },
        {
          title: 'Auto-Enthusiasten',
          description: 'Führen Sie detaillierte Aufzeichnungen über jede Modifikation, Wartung und Verbesserung. Dokumentieren Sie die Reise Ihres Autos mit umfassender Wartungshistorie.',
        },
      ],
    },
    testimonials: {
      title: 'Was unsere Benutzer sagen',
      subtitle: 'Schließen Sie sich Tausenden zufriedener Autobesitzer an, die Odomate für ihre Fahrzeugwartung vertrauen',
      items: [
        {
          name: 'Anna Schmidt',
          role: 'Tägliche Fahrerin',
          avatar: 'AS',
          content: 'Odomate hat die Art und Weise, wie ich meine Fahrzeugwartung manage, völlig verändert. Die KI-Vorhersagen sind unglaublich genau, und ich verpasse nie mehr eine Wartung.',
          rating: 5
        },
        {
          name: 'Michael Weber',
          role: 'Auto-Enthusiast',
          avatar: 'MW',
          content: 'Als jemand, der Autos gerne modifiziert, ist die digitale Servicebuch-Funktion unschätzbar wertvoll. Ich kann jede Modifikation und Wartung mit perfekter Detailgenauigkeit verfolgen.',
          rating: 5
        },
        {
          name: 'Julia Müller',
          role: 'Flottenmanagerin',
          avatar: 'JM',
          content: 'Die automatische Kilometerstand-Verfolgung spart mir jede Woche Stunden. Odomate ist unerlässlich für die effiziente Verwaltung mehrerer Fahrzeuge.',
          rating: 5
        },
        {
          name: 'Thomas Wagner',
          role: 'Wochenendfahrer',
          avatar: 'TW',
          content: 'Einfach, intuitiv und unglaublich hilfreich. Allein der Parkassistent hat mich vor unzähligen Parkbußgeldern bewahrt.',
          rating: 5
        },
        {
          name: 'Laura Fischer',
          role: 'Reisende',
          avatar: 'LF',
          content: 'Die Wetterintelligenz-Funktion hilft mir bei der Planung perfekter Reisen. Ich weiß immer, wann ich meine Reifen prüfen oder das Öl wechseln soll.',
          rating: 5
        },
        {
          name: 'Stefan Koch',
          role: 'Kleinunternehmer',
          avatar: 'SK',
          content: 'Ich verwalte 5 Lieferfahrzeuge mit Odomate. Die Komponentenlebensdauer-Vorhersagen haben mir Tausende bei unerwarteten Reparaturen gespart.',
          rating: 5
        },
        {
          name: 'Marina Bauer',
          role: 'Neue Fahrerin',
          avatar: 'MB',
          content: 'Als neue Fahrerin gibt mir Odomate Selbstvertrauen. Die Erinnerungen sind klar, und ich fühle mich nie von der Wartung überfordert.',
          rating: 5
        },
        {
          name: 'Klaus Richter',
          role: 'Klassiksammler',
          avatar: 'KR',
          content: 'Perfekt für meine klassische Autosammlung. Jedes Fahrzeug erhält persönliche Pflege basierend auf seinen einzigartigen Bedürfnissen.',
          rating: 5
        },
        {
          name: 'Sabine Wolf',
          role: 'Fahrerin für Ride-Sharing',
          avatar: 'SW',
          content: '80.000 km pro Jahr zu fahren bedeutet, Wartung ist kritisch. Odomate hält mein Auto in perfektem Zustand und maximiert meine Einnahmen.',
          rating: 5
        },
        {
          name: 'Horst Becker',
          role: 'Bastler-Mechaniker',
          avatar: 'HB',
          content: 'Die detaillierte Wartungshistorie hilft mir zu verfolgen, was ich selbst gemacht habe. Perfekt für jeden, der an seinem eigenen Auto arbeitet.',
          rating: 5
        }
      ],
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      items: [
        {
          question: 'Wie funktioniert die automatische Kilometerstand-Verfolgung?',
          answer: 'Unsere App nutzt GPS-Technologie zur automatischen Erfassung des Kilometerstands ohne manuelle Eingabe.',
        },
        {
          question: 'Was macht die KI-Vorhersagen genau?',
          answer: 'Wenn Sie ein neues Fahrzeug hinzufügen, analysiert unsere KI sofort alle Fahrzeugdaten (Modell, Jahr, Ausstattung, Motor usw.), berücksichtigt Online-Bewertungen und offizielle Herstellerempfehlungen, um optimale Serviceintervalle für jede Komponente zu bestimmen.',
        },
        {
          question: 'Kann ich es für mehrere Fahrzeuge verwenden?',
          answer: 'Ja! Unser Premium-Plan ermöglicht die Verwaltung von bis zu 2 Fahrzeugen mit allen Funktionen.',
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
      manual: 'Benutzerhandbuch',
      quickLinks: 'Schnellzugriff',
      legal: 'Rechtliches',
      download: 'App herunterladen',
      rights: 'Alle Rechte vorbehalten.',
    },
    store: {
      comingSoonTitle: 'Demnächst verfügbar',
      comingSoonText: 'Die App ist noch nicht im Store verfügbar. Bitte schauen Sie bald wieder vorbei.',
      ok: 'OK',
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
          text: 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns unter privacy@odomate.net.'
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
          text: 'Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns unter legal@odomate.net.'
        }
      ]
    },
    gdpr: {
      title: 'Cookie-Einstellungen',
      text: 'Wir verwenden Cookies und ähnliche Technologien, um Inhalte zu personalisieren, Werbung anzupassen und zu messen und ein besseres Erlebnis zu bieten. Durch Klicken auf Akzeptieren stimmen Sie dem zu, wie in unserer Cookie-Richtlinie beschrieben.',
      categories: {
        necessary: {
          title: 'Essentielle Cookies',
          description: 'Diese Cookies sind für das Funktionieren der Website erforderlich und können in unseren Systemen nicht deaktiviert werden.'
        },
        analytics: {
          title: 'Analyse-Cookies',
          description: 'Diese Cookies ermöglichen es uns, Besuche und Traffic-Quellen zu zählen, damit wir die Leistung unserer Site messen und verbessern können.'
        },
        marketing: {
          title: 'Marketing-Cookies',
          description: 'Diese Cookies werden verwendet, um Werbebotschaften relevanter für Sie und Ihre Interessen zu machen.'
        }
      },
      buttons: {
        acceptAll: 'Alle akzeptieren',
        acceptNecessary: 'Nur essentielle akzeptieren',
        customize: 'Anpassen',
        save: 'Einstellungen speichern'
      },
      links: {
        privacyPolicy: 'Datenschutzerklärung',
        cookiePolicy: 'Cookie-Richtlinie'
      }
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
    benefits: {
      title: 'Dlaczego właściciele samochodów kochają Odomate',
      items: [
        {
          title: 'Nigdy więcej pominiętej konserwacji',
          description: 'Inteligentne przypomnienia utrzymują Twój samochód w doskonałym stanie',
        },
        {
          title: 'Oszczędzaj pieniądze',
          description: 'Unikaj kosztownych napraw dzięki terminowej konserwacji',
        },
        {
          title: 'Wszystko w jednym miejscu',
          description: 'Pełna historia pojazdu zawsze pod ręką',
        },
      ],
    },
    features: {
      title: 'Wszystko czego potrzebujesz do idealnej opieki nad samochodem',
      subtitle: 'Zaawansowane funkcje do inteligentnej konserwacji i zarządzania pojazdem',
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
          description: 'Prowadź szczegółowe zapisy każdej modyfikacji, serwisu i ulepszenia. Dokumentuj historię swojego samochodu z pełną historią konserwacji.',
        },
        {
          title: 'Inteligencja pogodowa',
          description: 'Planuj trasy dzięki hiperlokalnym prognozom i wskazówkom pielęgnacyjnym dopasowanym do nadchodzących warunków.',
        },
        {
          title: 'Inteligentny asystent parkowania',
          description: 'Zapisz lokalizację parkowania, włącz licznik płatnego postoju i otrzymuj powiadomienia push, gdy czas dobiega końca lub już minął.',
        },
        {
          title: 'Android Radioodtwarzacze i Synchronizacja',
          description: 'Pełne wsparcie dla Android radioodtwarzaczy i systemów multimedialnych w samochodzie z płynną synchronizacją na wszystkich Twoich urządzeniach. Dostęp do danych w każdym miejscu i czasie.',
        },
      ],
    },
    cta: {
      title: 'Jedź mądrzej z Odomate',
      subtitle: 'Dołącz do tysięcy właścicieli samochodów, którzy powierzają Odomate konserwację swoich pojazdów',
      button: 'Zacznij teraz',
    },
    audience: {
      title: 'Idealny dla każdego właściciela samochodu',
      items: [
        {
          title: 'Codzienni kierowcy',
          description: 'Idealny dla zwykłych właścicieli samochodów, którzy chcą być na bieżąco z konserwacją bez kłopotów. Śledź przebieg, otrzymuj terminowe przypomnienia i nigdy nie omiń wizyty serwisowej.',
        },
        {
          title: 'Entuzjaści samochodów',
          description: 'Prowadź szczegółowe zapisy każdej modyfikacji, serwisu i ulepszenia. Dokumentuj podróż swojego samochodu z kompletną historią konserwacji.',
        },
      ],
    },
    testimonials: {
      title: 'Co mówią nasi użytkownicy',
      subtitle: 'Dołącz do tysięcy zadowolonych właścicieli samochodów, którzy powierzają Odomate konserwację swoich pojazdów',
      items: [
        {
          name: 'Anna Kowalska',
          role: 'Codzienna kierowczyni',
          avatar: 'AK',
          content: 'Odomate całkowicie zmienił sposób, w jaki zarządzam konserwacją mojego samochodu. Przewidywania AI są niewiarygodnie dokładne, i nigdy więcej nie przegapiam serwisu.',
          rating: 5
        },
        {
          name: 'Piotr Wiśniewski',
          role: 'Entuzjasta samochodów',
          avatar: 'PW',
          content: 'Jako osoba, która uwielbia modyfikować samochody, funkcja cyfrowej książki serwisowej jest bezcenna. Mogę śledzić każdą modyfikację i serwis z idealną dokładnością.',
          rating: 5
        },
        {
          name: 'Ewa Dąbrowska',
          role: 'Menedżer floty',
          avatar: 'ED',
          content: 'Automatyczne śledzenie przebiegu oszczędza mi godzin każdego tygodnia. Odomate jest niezbędny do efektywnego zarządzania wieloma pojazdami.',
          rating: 5
        },
        {
          name: 'Jan Nowak',
          role: 'Kierowca weekendowy',
          avatar: 'JN',
          content: 'Proste, intuicyjne i niewiarygodnie pomocne. Sam inteligentny asystent parkowania uratował mnie od niezliczonych mandatów za parkowanie.',
          rating: 5
        },
        {
          name: 'Katarzyna Wiśniewska',
          role: 'Miłośniczka podróży',
          avatar: 'KW',
          content: 'Funkcja inteligencji pogodowej pomaga mi planować idealne podróże. Zawsze wiem, kiedy sprawdzić opony lub zmienić olej.',
          rating: 5
        },
        {
          name: 'Tomasz Lewandowski',
          role: 'Mały przedsiębiorca',
          avatar: 'TL',
          content: 'Zarządzam 5 pojazdami dostawczymi z Odomate. Przewidywania żywotności komponentów oszczędziły mi tysiące na nieoczekiwanych naprawach.',
          rating: 5
        },
        {
          name: 'Magdalena Kowalczyk',
          role: 'Nowa kierowca',
          avatar: 'MK',
          content: 'Jako nowa kierowca, Odomate daje mi pewność siebie. Przypomnienia są jasne, i nigdy nie czuję się przytłoczona konserwacją.',
          rating: 5
        },
        {
          name: 'Krzysztof Zieliński',
          role: 'Kolekcjoner klasyków',
          avatar: 'KZ',
          content: 'Idealny dla mojej kolekcji klasycznych samochodów. Każdy pojazd otrzymuje spersonalizowaną opiekę na podstawie unikalnych potrzeb.',
          rating: 5
        },
        {
          name: 'Agnieszka Szymańska',
          role: 'Kierowca ride-sharing',
          avatar: 'AS',
          content: 'Pokonywanie 80 000 km rocznie oznacza, że konserwacja jest krytyczna. Odomate utrzymuje mój samochód w idealnym stanie i maksymalizuje zarobki.',
          rating: 5
        },
        {
          name: 'Robert Wójcik',
          role: 'Amatorski mechanik',
          avatar: 'RW',
          content: 'Szczegółowa historia serwisu pomaga mi śledzić, co zrobiłem samodzielnie. Idealny dla każdego, kto pracuje na swoim samochodzie.',
          rating: 5
        }
      ],
    },
    faq: {
      title: 'Często zadawane pytania',
      items: [
        {
          question: 'Jak działa automatyczne śledzenie przebiegu?',
          answer: 'Nasza aplikacja wykorzystuje technologię GPS do automatycznego rejestrowania przebiegu bez ręcznego wprowadzania.',
        },
        {
          question: 'Co sprawia, że prognozy AI są dokładne?',
          answer: 'Gdy dodajesz nowy pojazd, nasza AI natychmiast analizuje wszystkie dane pojazdu (model, rok, konfigurację, silnik itp.), uwzględnia opinie internetowe i oficjalne zalecenia producenta, aby określić optymalne interwały serwisowe dla każdego komponentu.',
        },
        {
          question: 'Czy mogę używać go do wielu pojazdów?',
          answer: 'Tak! Nasz plan Premium pozwala zarządzać do 2 pojazdami ze wszystkimi funkcjami.',
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
      manual: 'Instrukcja użytkownika',
      quickLinks: 'Szybkie linki',
      legal: 'Informacje prawne',
      download: 'Pobierz aplikację',
      rights: 'Wszelkie prawa zastrzeżone.',
    },
    store: {
      comingSoonTitle: 'Wkrótce dostępne',
      comingSoonText: 'Aplikacja nie jest jeszcze dostępna w sklepie. Wróć wkrótce.',
      ok: 'OK',
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
          text: 'Jeśli masz pytania dotyczące tej Polityki prywatności, skontaktuj się z nami pod adresem privacy@odomate.net.'
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
          text: 'Jeśli masz pytania dotyczące tych Warunków, skontaktuj się z nami pod adresem legal@odomate.net.'
        }
      ]
    },
    gdpr: {
      title: 'Preferencje plików cookie',
      text: 'Używamy plików cookie i podobnych technologii, aby pomóc w personalizacji treści, dostosowywaniu i mierzeniu reklam oraz zapewnić lepsze doświadczenie. Klikając Akceptuj, zgadzasz się na to, jak opisano w naszej Polityce plików cookie.',
      categories: {
        necessary: {
          title: 'Niezbędne pliki cookie',
          description: 'Te pliki cookie są niezbędne do działania witryny i nie można ich wyłączyć w naszych systemach.'
        },
        analytics: {
          title: 'Pliki cookie analityczne',
          description: 'Te pliki cookie pozwalają nam liczyć wizyty i źródła ruchu, abyśmy mogli mierzyć i poprawiać wydajność naszej witryny.'
        },
        marketing: {
          title: 'Pliki cookie marketingowe',
          description: 'Te pliki cookie są używane do tego, aby wiadomości reklamowe były bardziej trafne dla Ciebie i Twoich zainteresowań.'
        }
      },
      buttons: {
        acceptAll: 'Akceptuj wszystkie',
        acceptNecessary: 'Tylko niezbędne',
        customize: 'Dostosuj',
        save: 'Zapisz preferencje'
      },
      links: {
        privacyPolicy: 'Polityka prywatności',
        cookiePolicy: 'Polityka plików cookie'
      }
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
    benefits: {
      title: 'Por qué los propietarios de autos aman Odomate',
      items: [
        {
          title: 'Nunca más mantenimiento perdido',
          description: 'Los recordatorios inteligentes mantienen tu auto en perfecto estado',
        },
        {
          title: 'Ahorra dinero',
          description: 'Evita reparaciones costosas con mantenimiento oportuno',
        },
        {
          title: 'Todo en un solo lugar',
          description: 'Historial completo del vehículo siempre a mano',
        },
      ],
    },
    features: {
      title: 'Todo lo que necesitas para el cuidado perfecto del automóvil',
      subtitle: 'Funciones avanzadas para mantenimiento inteligente de vehículos y gestión',
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
          description: 'Mantén registros detallados de cada modificación, servicio y mejora. Documenta la historia de tu auto con una historia completa de mantenimiento.',
        },
        {
          title: 'Inteligencia meteorológica',
          description: 'Planifica tus recorridos con pronósticos hiperlocales y consejos de cuidado ajustados a las condiciones que se aproximan.',
        },
        {
          title: 'Asistente inteligente de estacionamiento',
          description: 'Guarda tu lugar, activa el temporizador de estacionamiento pago y recibe notificaciones push antes de que el tiempo termine o cuando haya expirado.',
        },
        {
          title: 'Radios Android y Sincronización',
          description: 'Soporte completo para radios y sistemas multimedia Android en el automóvil con sincronización perfecta en todos tus dispositivos. Accede a tus datos en cualquier lugar y momento.',
        },
      ],
    },
    cta: {
      title: 'Conduce más inteligentemente con Odomate',
      subtitle: 'Únete a miles de propietarios de autos que confían a Odomate el mantenimiento de sus vehículos',
      button: 'Comenzar ahora',
    },
    audience: {
      title: 'Perfecto para cada propietario de auto',
      items: [
        {
          title: 'Conductores diarios',
          description: 'Perfecto para propietarios de autos cotidianos que quieren estar al tanto del mantenimiento sin complicaciones. Rastrea tu kilometraje, recibe recordatorios oportunos y nunca pierdas una cita de servicio.',
        },
        {
          title: 'Entusiastas de autos',
          description: 'Mantén registros detallados de cada modificación, servicio y mejora. Documenta el viaje de tu auto con historial completo de mantenimiento.',
        },
      ],
    },
    testimonials: {
      title: 'Lo que dicen nuestros usuarios',
      subtitle: 'Únete a miles de propietarios de autos satisfechos que confían a Odomate el mantenimiento de sus vehículos',
      items: [
        {
          name: 'María García',
          role: 'Conductora diaria',
          avatar: 'MG',
          content: 'Odomate ha transformado completamente cómo gestiono el mantenimiento de mi auto. Las predicciones de IA son increíblemente precisas, y nunca pierdo un servicio.',
          rating: 5
        },
        {
          name: 'Carlos Rodríguez',
          role: 'Entusiasta de autos',
          avatar: 'CR',
          content: 'Como alguien a quien le encanta modificar autos, la función del libro de servicio digital es invaluable. Puedo rastrear cada modificación y servicio con detalle perfecto.',
          rating: 5
        },
        {
          name: 'Ana Martínez',
          role: 'Gerente de flota',
          avatar: 'AM',
          content: 'El seguimiento automático de kilometraje me ahorra horas cada semana. Odomate es esencial para gestionar eficientemente múltiples vehículos.',
          rating: 5
        },
        {
          name: 'Luis Hernández',
          role: 'Conductor de fin de semana',
          avatar: 'LH',
          content: 'Simple, intuitivo e increíblemente útil. Solo el asistente de estacionamiento me ha salvado de incontables multas de estacionamiento.',
          rating: 5
        },
        {
          name: 'Carmen López',
          role: 'Amante de los viajes',
          avatar: 'CL',
          content: 'La función de inteligencia climática me ayuda a planificar viajes perfectos. Siempre sé cuándo revisar mis neumáticos o cambiar el aceite.',
          rating: 5
        },
        {
          name: 'Juan Pérez',
          role: 'Pequeño empresario',
          avatar: 'JP',
          content: 'Gestiono 5 vehículos de entrega con Odomate. Las predicciones de vida útil de componentes me han ahorrado miles en reparaciones inesperadas.',
          rating: 5
        },
        {
          name: 'Sofia González',
          role: 'Nueva conductora',
          avatar: 'SG',
          content: 'Como nueva conductora, Odomate me da confianza. Los recordatorios son claros, y nunca me siento abrumada por el mantenimiento.',
          rating: 5
        },
        {
          name: 'Miguel Sánchez',
          role: 'Coleccionista de clásicos',
          avatar: 'MS',
          content: 'Perfecto para mi colección de autos clásicos. Cada vehículo recibe atención personalizada basada en sus necesidades únicas.',
          rating: 5
        },
        {
          name: 'Isabel Torres',
          role: 'Conductora de ride-sharing',
          avatar: 'IT',
          content: 'Conducir 80,000 km al año significa que el mantenimiento es crítico. Odomate mantiene mi auto en perfecto estado y maximiza mis ganancias.',
          rating: 5
        },
        {
          name: 'Diego Ramírez',
          role: 'Mecánico aficionado',
          avatar: 'DR',
          content: 'El historial de servicio detallado me ayuda a rastrear lo que he hecho yo mismo. Perfecto para cualquiera que trabaja en su propio auto.',
          rating: 5
        }
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Cómo funciona el seguimiento automático de kilometraje?',
          answer: 'Nuestra aplicación utiliza tecnología GPS para registrar automáticamente el kilometraje sin entrada manual.',
        },
        {
          question: '¿Qué hace que las predicciones de IA sean precisas?',
          answer: 'Cuando agregas un nuevo vehículo, nuestra IA analiza instantáneamente todos los datos del vehículo (modelo, año, configuración, motor, etc.), considera reseñas en línea y recomendaciones oficiales del fabricante para determinar intervalos de servicio óptimos para cada componente.',
        },
        {
          question: '¿Puedes usarlo para múltiples vehículos?',
          answer: '¡Sí! Nuestro plan Premium te permite gestionar hasta 2 vehículos con todas las funciones incluidas.',
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
      manual: 'Manual de usuario',
      quickLinks: 'Enlaces rápidos',
      legal: 'Aviso legal',
      download: 'Descargar la app',
      rights: 'Todos los derechos reservados.',
    },
    store: {
      comingSoonTitle: 'Próximamente',
      comingSoonText: 'La aplicación aún no está disponible en la tienda. Vuelve pronto.',
      ok: 'OK',
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
          text: 'Si tienes preguntas sobre esta Política de privacidad, contáctanos en privacy@odomate.net.'
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
          text: 'Si tienes preguntas sobre estos Términos, contáctanos en legal@odomate.net.'
        }
      ]
    },
    gdpr: {
      title: 'Preferencias de cookies',
      text: 'Usamos cookies y tecnologías similares para ayudar a personalizar el contenido, adaptar y medir anuncios, y proporcionar una mejor experiencia. Al hacer clic en aceptar, aceptas esto, como se describe en nuestra Política de cookies.',
      categories: {
        necessary: {
          title: 'Cookies esenciales',
          description: 'Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas.'
        },
        analytics: {
          title: 'Cookies de análisis',
          description: 'Estas cookies nos permiten contar visitas y fuentes de tráfico para que podamos medir y mejorar el rendimiento de nuestro sitio.'
        },
        marketing: {
          title: 'Cookies de marketing',
          description: 'Estas cookies se utilizan para que los mensajes publicitarios sean más relevantes para ti y tus intereses.'
        }
      },
      buttons: {
        acceptAll: 'Aceptar todas',
        acceptNecessary: 'Aceptar solo las esenciales',
        customize: 'Personalizar',
        save: 'Guardar preferencias'
      },
      links: {
        privacyPolicy: 'Política de privacidad',
        cookiePolicy: 'Política de cookies'
      }
    },
  },
  uk: {
    meta: {
      title: 'Odomate - Розумний контроль техобслуговування | Догляд за авто з ШІ',
      description: 'Відстежуйте обслуговування автомобіля з Odomate. Прогнози на базі ШІ, автоматичний облік пробігу через GPS, погодний інтелект і розумний помічник паркування. Преміум-план для 2 авто.',
      keywords: 'додаток для обслуговування авто, відстеження пробігу, догляд за авто з ШІ, сервісна книжка, нагадування про сервіс, автомобільний додаток, керування автопарком, прогноз техобслуговування, gps облік пробігу, розумне паркування',
    },
    nav: {
      features: 'Можливості',
      faq: 'Питання',
      contact: 'Контакти',
    },
    hero: {
      title: 'Розумний догляд за авто у ваших руках',
      subtitle: 'Відстежуйте техобслуговування, прогнозуйте потреби сервісу та підтримуйте ідеальний стан авто завдяки інсайтам ШІ.',
    },
    benefits: {
      title: 'Чому обирають Odomate',
      items: [
        {
          title: 'Швидкий результат',
          description: 'Отримуйте миттєві дані про стан автомобіля та необхідні роботи за лічені секунди.',
        },
        {
          title: 'Простий інтерфейс',
          description: 'Зрозумілий та інтуїтивний дизайн, що робить контроль обслуговування без зусиль.',
        },
        {
          title: 'Багато інструментів',
          description: 'Усе в одному місці: навігація, облік та розумні прогнози.',
        },
        {
          title: 'Точність замість шаблонів',
          description: 'Прогнози на базі ШІ, адаптовані під ваш автомобіль і стиль керування.',
        },
        {
          title: 'Гнучкі можливості',
          description: 'Обирайте потрібні функції та налаштовуйте досвід догляду за авто.',
        },
        {
          title: 'Економія часу',
          description: 'Автоматичний облік та розумні нагадування допоможуть нічого не пропустити.',
        },
      ],
    },
    features: {
      title: 'Все, що потрібно для ідеального догляду',
      subtitle: 'Потужні можливості, створені для простого та безстресового техобслуговування',
      items: [
        {
          title: 'Жива навігація',
          description: 'GPS-навігація в реальному часі з трафіком та оптимізацією маршрутів для щоденних поїздок.',
        },
        {
          title: 'Автоматичний облік пробігу',
          description: 'Відстежуйте пробіг автомобіля без ручного введення — система робить це за вас.',
        },
        {
          title: 'Сповіщення про ресурс вузлів',
          description: 'Вчасні нагадування про графік техоглядів і потребу заміни компонентів.',
        },
        {
          title: 'Прогноз ресурсу від ШІ',
          description: 'Алгоритми штучного інтелекту передбачають, коли деталі потребуватимуть уваги чи заміни.',
        },
        {
          title: 'Цифрова сервісна книжка',
          description: 'Зберігайте історію усіх сервісів, модифікацій та покращень у одному місці.',
        },
        {
          title: 'Погодний інтелект',
          description: 'Плануйте поїздки з урахуванням локальних прогнозів та порад з догляду в різних умовах.',
        },
        {
          title: 'Розумний помічник паркування',
          description: 'Запам’ятовуйте місце стоянки, контролюйте платну парковку та отримуйте нагадування.',
        },
        {
          title: 'Головні пристрої Android і синхронізація',
          description: 'Повна підтримка мультимедійних систем Android у авто та синхронізація даних між усіма пристроями.',
        },
      ],
    },
    cta: {
      title: 'Керуйте авто розумніше з Odomate',
      subtitle: 'Приєднайтеся до тисяч водіїв, які довіряють Odomate техобслуговування своїх авто',
      button: 'Почати зараз',
    },
    audience: {
      title: 'Підходить кожному власнику авто',
      items: [
        {
          title: 'Щоденні водії',
          description: 'Ідеально для тих, хто хоче стежити за станом авто без зайвих турбот. Фіксуйте пробіг, отримуйте нагадування та не пропускайте сервіс.',
        },
        {
          title: 'Автоентузіасти',
          description: 'Ведіть детальний журнал модифікацій, сервісів та апгрейдів. Зберігайте повну історію свого автомобіля.',
        },
      ],
    },
    testimonials: {
      title: 'Відгуки наших користувачів',
      subtitle: 'Долучайтеся до тисяч задоволених власників авто, які довіряють Odomate',
      items: [
        {
          name: 'Sarah Johnson',
          role: 'Щоденна водійка',
          avatar: 'SJ',
          content: 'Odomate повністю змінив мій підхід до техобслуговування. Прогнози ШІ неймовірно точні, тому я більше не пропускаю сервіс.',
          rating: 5
        },
        {
          name: 'Michael Chen',
          role: 'Автоентузіаст',
          avatar: 'MC',
          content: 'Для людини, яка любить модифікації, цифрова сервісна книжка — незамінна. Я точно знаю історію кожного доопрацювання.',
          rating: 5
        },
        {
          name: 'Emma Rodriguez',
          role: 'Керівниця автопарку',
          avatar: 'ER',
          content: 'Автоматичний облік пробігу щотижня економить мені години часу. Odomate — незамінний інструмент для керування кількома авто.',
          rating: 5
        },
        {
          name: 'David Thompson',
          role: 'Водій вихідного дня',
          avatar: 'DT',
          content: 'Простий, інтуїтивний і дуже корисний додаток. Помічник паркування вже не раз рятував мене від штрафів.',
          rating: 5
        },
        {
          name: 'Lisa Anderson',
          role: 'Любителька подорожей',
          avatar: 'LA',
          content: 'Погодні інсайти допомагають планувати ідеальні роудтрипи. Я знаю, коли варто перевірити шини або масло.',
          rating: 5
        },
        {
          name: 'James Wilson',
          role: 'Власник малого бізнесу',
          avatar: 'JW',
          content: 'Я керую п’ятьма авто доставки. Прогнози ресурсу компонентів заощадили мені тисячі на несподіваних ремонтах.',
          rating: 5
        },
        {
          name: 'Maria Garcia',
          role: 'Новачок за кермом',
          avatar: 'MG',
          content: 'Як новій водійці, Odomate дає впевненість. Нагадування зрозумілі, і я не відчуваю перенавантаження.',
          rating: 5
        },
        {
          name: 'Robert Taylor',
          role: 'Колекціонер класики',
          avatar: 'RT',
          content: 'Ідеально для моєї колекції ретроавто. Кожне отримує персоналізований догляд відповідно до використання.',
          rating: 5
        },
        {
          name: 'Jennifer Lee',
          role: 'Водійка райдшеру',
          avatar: 'JL',
          content: 'Коли проїжджаєш 80 тисяч км на рік, техобслуговування критичне. Odomate тримає авто в ідеальному стані й збільшує мій дохід.',
          rating: 5
        },
        {
          name: 'Thomas Brown',
          role: 'Майстер-самоучка',
          avatar: 'TB',
          content: 'Детальна історія сервісу допомагає відслідковувати все, що я роблю самостійно. Ідеально для тих, хто ремонтує авто власноруч.',
          rating: 5
        }
      ],
    },
    faq: {
      title: 'Часті запитання',
      items: [
        {
          question: 'Як працює автоматичний облік пробігу?',
          answer: 'Додаток використовує GPS, щоб автоматично фіксувати пробіг вашого автомобіля без ручного введення.',
        },
        {
          question: 'Звідки така точність прогнозів ШІ?',
          answer: 'Коли ви додаєте авто, ШІ аналізує модель, рік, конфігурацію та офіційні рекомендації виробника, щоб визначити оптимальні інтервали сервісу для кожного вузла.',
        },
        {
          question: 'Чи можна додати кілька автомобілів?',
          answer: 'Так! Преміум-план дозволяє керувати двома авто з усіма функціями.',
        },
        {
          question: 'Чи безпечні мої дані?',
          answer: 'Так. Ми використовуємо наскрізне шифрування та дотримуємось GDPR, щоб гарантувати конфіденційність і безпеку даних.',
        },
      ],
    },
    contact: {
      title: 'Зв’яжіться з нами',
      name: 'Ваше ім’я',
      email: 'Електронна пошта',
      message: 'Ваше повідомлення',
      send: 'Надіслати',
      success: 'Дякуємо! Ваше повідомлення надіслано.',
    },
    footer: {
      privacy: 'Політика конфіденційності',
      terms: 'Умови користування',
      manual: 'Посібник користувача',
      quickLinks: 'Швидкі посилання',
      legal: 'Юридична інформація',
      download: 'Завантажити додаток',
      rights: 'Всі права захищено.',
    },
    store: {
      comingSoonTitle: 'Незабаром',
      comingSoonText: 'Застосунок ще недоступний у сторі. Завітайте згодом.',
      ok: 'OK',
    },
    privacy: {
      title: 'Політика конфіденційності',
      lastUpdated: 'Останнє оновлення: 28 вересня 2025',
      content: [
        {
          heading: 'Яку інформацію ми збираємо',
          text: 'Ми збираємо дані, які ви надаєте напряму, наприклад під час створення акаунта, використання сервісу або звернення до підтримки.'
        },
        {
          heading: 'Як ми використовуємо інформацію',
          text: 'Ми використовуємо дані для надання, підтримки та покращення сервісу, обробки транзакцій і комунікації з вами.'
        },
        {
          heading: 'Передавання інформації',
          text: 'Ми не продаємо та не передаємо вашу персональну інформацію третім сторонам без згоди, окрім випадків, описаних у цій політиці.'
        },
        {
          heading: 'Безпека даних',
          text: 'Ми впроваджуємо належні заходи безпеки, щоб захистити ваші дані від несанкціонованого доступу, зміни, розкриття чи знищення.'
        },
        {
          heading: 'Зв’яжіться з нами',
          text: 'Якщо у вас є питання щодо цієї політики, напишіть нам на privacy@odomate.net.'
        }
      ]
    },
    terms: {
      title: 'Умови користування',
      lastUpdated: 'Останнє оновлення: 28 вересня 2025',
      content: [
        {
          heading: 'Прийняття умов',
          text: 'Користуючись Odomate, ви погоджуєтесь дотримуватися положень цієї угоди.'
        },
        {
          heading: 'Ліцензія на використання',
          text: 'Дозволяється тимчасово використовувати Odomate для особистого, некомерційного перегляду.'
        },
        {
          heading: 'Відмова від відповідальності',
          text: 'Матеріали Odomate надаються «як є». Odomate не дає жодних гарантій, явних чи неявних.'
        },
        {
          heading: 'Обмеження відповідальності',
          text: 'Odomate та його постачальники не несуть відповідальності за збитки, що виникають через використання або неможливість використання матеріалів.'
        },
        {
          heading: 'Контакти',
          text: 'Якщо у вас є запитання щодо цих умов, звертайтеся на legal@odomate.net.'
        }
      ]
    },
    gdpr: {
      title: 'Налаштування файлів cookie',
      text: 'Ми використовуємо файли cookie та подібні технології, щоб персоналізувати контент, налаштовувати та вимірювати рекламу, а також надавати кращий досвід. Натискаючи «Прийняти», ви погоджуєтесь із цим, як описано в нашій політиці cookie.',
      categories: {
        necessary: {
          title: 'Обов’язкові файли cookie',
          description: 'Ці файли cookie необхідні для роботи вебсайту та не можуть бути вимкнені.'
        },
        analytics: {
          title: 'Аналітичні файли cookie',
          description: 'Ці файли допомагають нам рахувати відвідування та джерела трафіку, щоб ми могли вимірювати й покращувати продуктивність сайту.'
        },
        marketing: {
          title: 'Маркетингові файли cookie',
          description: 'Ці файли використовуються, щоб рекламні повідомлення були релевантнішими для вас.'
        }
      },
      buttons: {
        acceptAll: 'Прийняти всі',
        acceptNecessary: 'Лише обов’язкові',
        customize: 'Налаштувати',
        save: 'Зберегти налаштування'
      },
      links: {
        privacyPolicy: 'Політика конфіденційності',
        cookiePolicy: 'Політика cookie'
      }
    },
  },
};
