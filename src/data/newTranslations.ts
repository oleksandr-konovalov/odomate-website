import { Language, Translations } from '@/types/language';

type NewTranslations = Pick<Translations,
  'nav' | 'hero' | 'socialProof' | 'howItWorks' | 'pricing' | 'b2b' | 'comparison' | 'audience'
>;

export const newTranslations: Record<Language, NewTranslations> = {
  en: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      b2b: 'Business',
      faq: 'FAQ',
      contact: 'Contact',
      backToHome: 'Back to Home',
    },
    hero: {
      title: 'Smart Car Care at Your Fingertips',
      subtitle: 'Track maintenance, predict service needs with personalized driving style analysis, and forecast maintenance costs or savings. Keep your vehicle in perfect condition with AI-powered insights tailored to your unique driving behavior.',
      badge: 'Free forever for 1 vehicle',
    },
    socialProof: {
      rating: '4.8★ on App Store',
      downloads: '10,000+ downloads',
      languages: '7 languages',
      vehicles: 'All car brands',
    },
    howItWorks: {
      title: 'Get Started in 3 Simple Steps',
      subtitle: 'Start your smart car care journey in less than a minute',
      steps: [
        {
          title: 'Download the App',
          description: 'Install Odomate from the App Store or Google Play — it\'s free.',
        },
        {
          title: 'Add Your Vehicle',
          description: 'Enter your car\'s make, model, year, and current mileage. Takes 30 seconds.',
        },
        {
          title: 'Drive Smarter',
          description: 'Odomate automatically tracks mileage, predicts maintenance, and sends smart alerts.',
        },
      ],
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Start free. Upgrade when you need more. Cancel anytime.',
      monthly: 'Monthly',
      yearly: 'Yearly',
      perMonth: '/mo',
      perYear: '/yr',
      or: 'or',
      save: 'Save 17%',
      mostPopular: 'Most Popular',
      download: 'Download',
      plans: {
        free: {
          name: 'Free',
          price: '$0',
          period: 'forever',
          description: 'Perfect for tracking a single vehicle',
          features: [
            '1 vehicle',
            'Automatic mileage tracking',
            'Basic maintenance reminders',
            'Digital service book',
            'Parking assistant',
          ],
        },
        premium: {
          name: 'Personal',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'For car owners who want the full experience',
          features: [
            '2 vehicles',
            'AI driving style analysis',
            'AI lifetime predictions',
            'Weather intelligence',
            'Live navigation',
            'Component life notifications',
            'Multi-device sync',
            'Priority support',
          ],
        },
        family: {
          name: 'Family',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Share the experience with your family (up to 5 members)',
          features: [
            'Everything in Personal',
            'Up to 5 family members',
            'Shared vehicle access',
            'Family driving insights',
            'Shared maintenance history',
          ],
        },
        b2b: {
          name: 'Business',
          tiers: [
            { name: 'Starter', drivers: '10 drivers', price: '$59.99', period: '/mo' },
            { name: 'Growth', drivers: '25 drivers', price: '$149.99', period: '/mo' },
            { name: 'Pro', drivers: '50 drivers', price: '$299.99', period: '/mo' },
            { name: 'Enterprise', drivers: '100 drivers', price: '$599.99', period: '/mo' },
          ],
          description: 'Fleet management with live GPS tracking',
          features: [
            'Live fleet map with GPS tracking',
            'Driver management & invitations',
            'Driving style analysis per driver',
            'Maintenance history per vehicle',
            'Trip history per driver',
            'Fleet-wide insights',
          ],
          contactUs: 'Contact us',
        },
      },
    },
    b2b: {
      title: 'Manage Your Fleet with Odomate',
      subtitle: 'Complete fleet management solution with live GPS tracking, driver management, and AI-powered maintenance predictions for every vehicle in your fleet.',
      features: [
        {
          title: 'Live Fleet Map',
          description: 'Track all your drivers in real-time on an interactive map. See who\'s online, their current location, and last-seen status.',
        },
        {
          title: 'Driver Management',
          description: 'Invite drivers by email, manage their status, and assign vehicles. Full control over your fleet with role-based access.',
        },
        {
          title: 'Driving Style Analytics',
          description: 'AI-powered analysis of each driver\'s behavior. Identify aggressive driving, predict component wear, and reduce maintenance costs.',
        },
        {
          title: 'Maintenance & Trip History',
          description: 'Complete service history and trip logs for every driver and vehicle. Export reports for compliance and accounting.',
        },
      ],
      cta: 'Start managing your fleet',
    },
    comparison: {
      title: 'Why Odomate Stands Out',
      subtitle: 'See how Odomate compares to other car maintenance apps',
      feature: 'Feature',
      odomate: 'Odomate',
      others: 'Other Apps',
      rows: [
        { feature: 'AI driving style analysis', odomate: '✓', others: '—' },
        { feature: 'AI component lifetime prediction', odomate: '✓', others: '—' },
        { feature: 'Automatic GPS mileage tracking', odomate: '✓', others: 'Limited' },
        { feature: 'Weather intelligence', odomate: '✓', others: '—' },
        { feature: 'Smart parking assistant', odomate: '✓', others: '—' },
        { feature: 'Fleet management (B2B)', odomate: '✓', others: '—' },
        { feature: 'Multi-device sync', odomate: '✓', others: 'Limited' },
        { feature: 'Digital service book', odomate: '✓', others: 'Basic' },
        { feature: 'Free plan available', odomate: '✓', others: 'Trial only' },
      ],
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
        {
          title: 'Families',
          description: 'Share vehicle tracking with your family. Keep everyone informed about maintenance needs, service history, and driving insights with the Family plan.',
        },
        {
          title: 'Fleet Managers',
          description: 'Manage your entire fleet with live GPS tracking, driver management, and AI-powered maintenance predictions. Built for businesses of any size.',
        },
      ],
    },
  },

  ru: {
    nav: {
      features: 'Возможности',
      pricing: 'Цены',
      b2b: 'Бизнесу',
      faq: 'Вопросы',
      contact: 'Контакты',
      backToHome: 'Вернуться на главную',
    },
    hero: {
      title: 'Умный уход за автомобилем у вас под рукой',
      subtitle: 'Отслеживайте обслуживание, прогнозируйте потребности в сервисе с персонализированным анализом стиля вождения и предсказывайте расходы или экономию на обслуживание. Поддерживайте ваш автомобиль в идеальном состоянии с помощью ИИ, адаптированного под ваш уникальный стиль вождения.',
      badge: 'Бесплатно навсегда для 1 автомобиля',
    },
    socialProof: {
      rating: '4.8★ в App Store',
      downloads: '10,000+ загрузок',
      languages: '7 языков',
      vehicles: 'Все марки авто',
    },
    howItWorks: {
      title: 'Начните за 3 простых шага',
      subtitle: 'Начните умный уход за автомобилем меньше чем за минуту',
      steps: [
        {
          title: 'Скачайте приложение',
          description: 'Установите Odomate из App Store или Google Play — это бесплатно.',
        },
        {
          title: 'Добавьте автомобиль',
          description: 'Введите марку, модель, год и текущий пробег. Займёт 30 секунд.',
        },
        {
          title: 'Водите умнее',
          description: 'Odomate автоматически отслеживает пробег, прогнозирует обслуживание и отправляет умные уведомления.',
        },
      ],
    },
    pricing: {
      title: 'Простые и прозрачные цены',
      subtitle: 'Начните бесплатно. Обновитесь, когда нужно. Отмена в любой момент.',
      monthly: 'Ежемесячно',
      yearly: 'Ежегодно',
      perMonth: '/мес',
      perYear: '/год',
      or: 'или',
      save: 'Скидка 17%',
      mostPopular: 'Популярный',
      download: 'Скачать',
      plans: {
        free: {
          name: 'Бесплатно',
          price: '$0',
          period: 'навсегда',
          description: 'Идеально для отслеживания одного автомобиля',
          features: [
            '1 автомобиль',
            'Автоматический учёт пробега',
            'Базовые напоминания об обслуживании',
            'Электронная сервисная книжка',
            'Помощник по парковке',
          ],
        },
        premium: {
          name: 'Personal',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Для владельцев, которым нужен полный функционал',
          features: [
            '2 автомобиля',
            'ИИ-анализ стиля вождения',
            'ИИ-прогнозы срока службы',
            'Умная погода',
            'Живая навигация',
            'Уведомления о замене деталей',
            'Синхронизация между устройствами',
            'Приоритетная поддержка',
          ],
        },
        family: {
          name: 'Family',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Поделитесь с семьёй (до 5 участников)',
          features: [
            'Всё из Personal',
            'До 5 членов семьи',
            'Общий доступ к автомобилям',
            'Семейная аналитика вождения',
            'Общая история обслуживания',
          ],
        },
        b2b: {
          name: 'Business',
          tiers: [
            { name: 'Starter', drivers: '10 водителей', price: '$59.99', period: '/мес' },
            { name: 'Growth', drivers: '25 водителей', price: '$149.99', period: '/мес' },
            { name: 'Pro', drivers: '50 водителей', price: '$299.99', period: '/мес' },
            { name: 'Enterprise', drivers: '100 водителей', price: '$599.99', period: '/мес' },
          ],
          description: 'Управление парком с GPS-отслеживанием',
          features: [
            'Живая карта парка с GPS',
            'Управление водителями и приглашения',
            'Анализ стиля вождения каждого водителя',
            'История обслуживания каждого авто',
            'История поездок каждого водителя',
            'Аналитика по всему парку',
          ],
          contactUs: 'Связаться с нами',
        },
      },
    },
    b2b: {
      title: 'Управляйте парком с Odomate',
      subtitle: 'Полное решение для управления парком с GPS-отслеживанием в реальном времени, управлением водителями и ИИ-прогнозами обслуживания для каждого автомобиля.',
      features: [
        {
          title: 'Живая карта парка',
          description: 'Отслеживайте всех водителей в реальном времени на интерактивной карте. Видите, кто онлайн, их местоположение и время последней активности.',
        },
        {
          title: 'Управление водителями',
          description: 'Приглашайте водителей по email, управляйте их статусом и назначайте автомобили. Полный контроль с ролевым доступом.',
        },
        {
          title: 'Аналитика стиля вождения',
          description: 'ИИ-анализ поведения каждого водителя. Выявляйте агрессивное вождение, прогнозируйте износ деталей и снижайте расходы на ремонт.',
        },
        {
          title: 'История обслуживания и поездок',
          description: 'Полная история сервиса и логов поездок для каждого водителя и автомобиля. Экспорт отчётов для комплаенса и бухгалтерии.',
        },
      ],
      cta: 'Начать управление парком',
    },
    comparison: {
      title: 'Почему Odomate выделяется',
      subtitle: 'Сравните Odomate с другими приложениями для обслуживания авто',
      feature: 'Функция',
      odomate: 'Odomate',
      others: 'Другие приложения',
      rows: [
        { feature: 'ИИ-анализ стиля вождения', odomate: '✓', others: '—' },
        { feature: 'ИИ-прогноз срока службы деталей', odomate: '✓', others: '—' },
        { feature: 'Автоматический GPS-учёт пробега', odomate: '✓', others: 'Ограничено' },
        { feature: 'Умная погода', odomate: '✓', others: '—' },
        { feature: 'Умный помощник парковки', odomate: '✓', others: '—' },
        { feature: 'Управление парком (B2B)', odomate: '✓', others: '—' },
        { feature: 'Синхронизация между устройствами', odomate: '✓', others: 'Ограничено' },
        { feature: 'Электронная сервисная книжка', odomate: '✓', others: 'Базово' },
        { feature: 'Бесплатный план', odomate: '✓', others: 'Только триал' },
      ],
    },
    audience: {
      title: 'Подходит каждому автовладельцу',
      items: [
        {
          title: 'Ежедневные водители',
          description: 'Идеально для тех, кто хочет контролировать обслуживание без лишних хлопот. Отслеживайте пробег, получайте своевременные напоминания и не пропускайте сервис.',
        },
        {
          title: 'Автолюбители',
          description: 'Ведите детальные записи о каждой модификации, обслуживании и улучшении. Документируйте историю вашего автомобиля.',
        },
        {
          title: 'Семьи',
          description: 'Делите отслеживание автомобилей с семьёй. Держите всех в курсе обслуживания, истории сервиса и аналитики вождения с тарифом Family.',
        },
        {
          title: 'Управляющие парком',
          description: 'Управляйте всем парком с GPS-отслеживанием, управлением водителями и ИИ-прогнозами обслуживания. Для бизнеса любого размера.',
        },
      ],
    },
  },

  uk: {
    nav: {
      features: 'Можливості',
      pricing: 'Ціни',
      b2b: 'Бізнесу',
      faq: 'Питання',
      contact: 'Контакти',
      backToHome: 'На головну',
    },
    hero: {
      title: 'Розумний догляд за авто у вас під рукою',
      subtitle: 'Відстежуйте обслуговування, прогнозуйте потреби в сервісі з персоналізованим аналізом стилю водіння та прогнозуйте витрати або економію на обслуговування. Підтримуйте ваш автомобіль у ідеальному стані з ШІ, адаптованим під ваш унікальний стиль водіння.',
      badge: 'Безкоштовно назавжди для 1 авто',
    },
    socialProof: {
      rating: '4.8★ в App Store',
      downloads: '10,000+ завантажень',
      languages: '7 мов',
      vehicles: 'Усі марки авто',
    },
    howItWorks: {
      title: 'Почніть за 3 простих кроки',
      subtitle: 'Розпочніть розумний догляд за авто менше ніж за хвилину',
      steps: [
        {
          title: 'Завантажте додаток',
          description: 'Встановіть Odomate з App Store або Google Play — це безкоштовно.',
        },
        {
          title: 'Додайте автомобіль',
          description: 'Введіть марку, модель, рік і поточний пробіг. Займе 30 секунд.',
        },
        {
          title: 'Водіть розумніше',
          description: 'Odomate автоматично відстежує пробіг, прогнозує обслуговування та надсилає розумні сповіщення.',
        },
      ],
    },
    pricing: {
      title: 'Прості та прозорі ціни',
      subtitle: 'Почніть безкоштовно. Оновіть, коли потрібно. Скасування в будь-який момент.',
      monthly: 'Щомісяця',
      yearly: 'Щороку',
      perMonth: '/міс',
      perYear: '/рік',
      or: 'або',
      save: 'Знижка 17%',
      mostPopular: 'Популярний',
      download: 'Завантажити',
      plans: {
        free: {
          name: 'Безкоштовно',
          price: '$0',
          period: 'назавжди',
          description: 'Ідеально для відстеження одного авто',
          features: [
            '1 автомобіль',
            'Автоматичний облік пробігу',
            'Базові нагадування про обслуговування',
            'Електронна сервісна книжка',
            'Помічник з паркування',
          ],
        },
        premium: {
          name: 'Personal',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Для власників, яким потрібен повний функціонал',
          features: [
            '2 автомобілі',
            'ШІ-аналіз стилю водіння',
            'ШІ-прогнози терміну служби',
            'Розумна погода',
            'Жива навігація',
            'Сповіщення про заміну деталей',
            'Синхронізація між пристроями',
            'Пріоритетна підтримка',
          ],
        },
        family: {
          name: 'Family',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Поділіться з сім\'єю (до 5 учасників)',
          features: [
            'Усе з Personal',
            'До 5 членів сім\'ї',
            'Спільний доступ до авто',
            'Сімейна аналітика водіння',
            'Спільна історія обслуговування',
          ],
        },
        b2b: {
          name: 'Business',
          tiers: [
            { name: 'Starter', drivers: '10 водіїв', price: '$59.99', period: '/міс' },
            { name: 'Growth', drivers: '25 водіїв', price: '$149.99', period: '/міс' },
            { name: 'Pro', drivers: '50 водіїв', price: '$299.99', period: '/міс' },
            { name: 'Enterprise', drivers: '100 водіїв', price: '$599.99', period: '/міс' },
          ],
          description: 'Управління парком з GPS-відстеженням',
          features: [
            'Жива карта парку з GPS',
            'Управління водіями та запрошення',
            'Аналіз стилю водіння кожного водія',
            'Історія обслуговування кожного авто',
            'Історія поїздок кожного водія',
            'Аналітика по всьому парку',
          ],
          contactUs: 'Зв\'язатися з нами',
        },
      },
    },
    b2b: {
      title: 'Керуйте парком з Odomate',
      subtitle: 'Повне рішення для управління парком з GPS-відстеженням у реальному часі, управлінням водіями та ШІ-прогнозами обслуговування для кожного автомобіля.',
      features: [
        {
          title: 'Жива карта парку',
          description: 'Відстежуйте всіх водіїв у реальному часі на інтерактивній карті. Бачте, хто онлайн, їхнє місцезнаходження та час останньої активності.',
        },
        {
          title: 'Управління водіями',
          description: 'Запрошуйте водіїв по email, керуйте їхнім статусом та призначайте автомобілі. Повний контроль з ролевим доступом.',
        },
        {
          title: 'Аналітика стилю водіння',
          description: 'ШІ-аналіз поведінки кожного водія. Виявляйте агресивне водіння, прогнозуйте знос деталей та знижуйте витрати на ремонт.',
        },
        {
          title: 'Історія обслуговування та поїздок',
          description: 'Повна історія сервісу та логів поїздок для кожного водія та автомобіля. Експорт звітів для комплаєнсу та бухгалтерії.',
        },
      ],
      cta: 'Почати управління парком',
    },
    comparison: {
      title: 'Чому Odomate виділяється',
      subtitle: 'Порівняйте Odomate з іншими додатками для обслуговування авто',
      feature: 'Функція',
      odomate: 'Odomate',
      others: 'Інші додатки',
      rows: [
        { feature: 'ШІ-аналіз стилю водіння', odomate: '✓', others: '—' },
        { feature: 'ШІ-прогноз терміну служби деталей', odomate: '✓', others: '—' },
        { feature: 'Автоматичний GPS-облік пробігу', odomate: '✓', others: 'Обмежено' },
        { feature: 'Розумна погода', odomate: '✓', others: '—' },
        { feature: 'Розумний помічник паркування', odomate: '✓', others: '—' },
        { feature: 'Управління парком (B2B)', odomate: '✓', others: '—' },
        { feature: 'Синхронізація між пристроями', odomate: '✓', others: 'Обмежено' },
        { feature: 'Електронна сервісна книжка', odomate: '✓', others: 'Базово' },
        { feature: 'Безкоштовний план', odomate: '✓', others: 'Лише триал' },
      ],
    },
    audience: {
      title: 'Підходить кожному автовласнику',
      items: [
        {
          title: 'Щоденні водії',
          description: 'Ідеально для тих, хто хоче контролювати обслуговування без зайвих клопотів. Відстежуйте пробіг, отримуйте своєчасні нагадування.',
        },
        {
          title: 'Автолюбителі',
          description: 'Ведіть детальні записи про кожну модифікацію, обслуговування та покращення. Документуйте історію вашого авто.',
        },
        {
          title: 'Сім\'ї',
          description: 'Діліть відстеження авто з сім\'єю. Тримайте всіх у курсі обслуговування, історії сервісу та аналітики водіння з тарифом Family.',
        },
        {
          title: 'Керуючі парком',
          description: 'Керуйте всім парком з GPS-відстеженням, управлінням водіями та ШІ-прогнозами обслуговування. Для бізнесу будь-якого розміру.',
        },
      ],
    },
  },

  de: {
    nav: {
      features: 'Funktionen',
      pricing: 'Preise',
      b2b: 'Business',
      faq: 'FAQ',
      contact: 'Kontakt',
      backToHome: 'Zurück zur Startseite',
    },
    hero: {
      title: 'Intelligente Autopflege griffbereit',
      subtitle: 'Verfolgen Sie Wartung, prognostizieren Sie Servicebedarf mit personalisierter Fahrstilanalyse und sagen Sie Wartungskosten oder Einsparungen voraus. Halten Sie Ihr Fahrzeug mit KI-gestützten Erkenntnissen in perfektem Zustand.',
      badge: 'Für 1 Fahrzeug kostenlos für immer',
    },
    socialProof: {
      rating: '4.8★ im App Store',
      downloads: '10.000+ Downloads',
      languages: '7 Sprachen',
      vehicles: 'Alle Automarken',
    },
    howItWorks: {
      title: 'In 3 einfachen Schritten starten',
      subtitle: 'Beginnen Sie Ihre intelligente Autopflege in weniger als einer Minute',
      steps: [
        {
          title: 'App herunterladen',
          description: 'Installieren Sie Odomate aus dem App Store oder Google Play — kostenlos.',
        },
        {
          title: 'Fahrzeug hinzufügen',
          description: 'Geben Sie Marke, Modell, Jahr und aktuellen Kilometerstand ein. Dauert 30 Sekunden.',
        },
        {
          title: 'Schlauer fahren',
          description: 'Odomate verfolgt automatisch Kilometerstand, prognostiziert Wartung und sendet smarte Benachrichtigungen.',
        },
      ],
    },
    pricing: {
      title: 'Einfache, transparente Preise',
      subtitle: 'Kostenlos starten. Upgraden bei Bedarf. Jederzeit kündbar.',
      monthly: 'Monatlich',
      yearly: 'Jährlich',
      perMonth: '/Monat',
      perYear: '/Jahr',
      or: 'oder',
      save: '17% sparen',
      mostPopular: 'Beliebteste Wahl',
      download: 'Herunterladen',
      plans: {
        free: {
          name: 'Kostenlos',
          price: '$0',
          period: 'für immer',
          description: 'Perfekt für ein einzelnes Fahrzeug',
          features: [
            '1 Fahrzeug',
            'Automatische Kilometerstand-Verfolgung',
            'Grundlegende Wartungserinnerungen',
            'Digitales Servicebuch',
            'Park-Assistent',
          ],
        },
        premium: {
          name: 'Personal',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Für Autobesitzer, die das volle Erlebnis wollen',
          features: [
            '2 Fahrzeuge',
            'KI-Fahrstilanalyse',
            'KI-Lebensdauervorhersagen',
            'Wetter-Intelligenz',
            'Live-Navigation',
            'Komponenten-Lebensdauer-Benachrichtigungen',
            'Geräteübergreifende Synchronisierung',
            'Priority-Support',
          ],
        },
        family: {
          name: 'Family',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Teilen Sie die Erfahrung mit Ihrer Familie (bis zu 5 Mitglieder)',
          features: [
            'Alles aus Personal',
            'Bis zu 5 Familienmitglieder',
            'Gemeinsamer Fahrzeugzugriff',
            'Familien-Fahreinsichten',
            'Geteilte Wartungshistorie',
          ],
        },
        b2b: {
          name: 'Business',
          tiers: [
            { name: 'Starter', drivers: '10 Fahrer', price: '$59.99', period: '/Monat' },
            { name: 'Growth', drivers: '25 Fahrer', price: '$149.99', period: '/Monat' },
            { name: 'Pro', drivers: '50 Fahrer', price: '$299.99', period: '/Monat' },
            { name: 'Enterprise', drivers: '100 Fahrer', price: '$599.99', period: '/Monat' },
          ],
          description: 'Flottenmanagement mit GPS-Tracking',
          features: [
            'Live-Flottenkarte mit GPS-Tracking',
            'Fahrerverwaltung & Einladungen',
            'Fahrstilanalyse pro Fahrer',
            'Wartungshistorie pro Fahrzeug',
            'Fahrtverlauf pro Fahrer',
            'Flottenweite Einblicke',
          ],
          contactUs: 'Kontaktieren Sie uns',
        },
      },
    },
    b2b: {
      title: 'Verwalten Sie Ihre Flotte mit Odomate',
      subtitle: 'Komplette Flottenmanagement-Lösung mit Live-GPS-Tracking, Fahrerverwaltung und KI-gestützten Wartungsvorhersagen für jedes Fahrzeug in Ihrer Flotte.',
      features: [
        {
          title: 'Live-Flottenkarte',
          description: 'Verfolgen Sie alle Fahrer in Echtzeit auf einer interaktiven Karte. Sehen Sie, wer online ist, aktuelle Position und letzte Aktivität.',
        },
        {
          title: 'Fahrerverwaltung',
          description: 'Laden Sie Fahrer per E-Mail ein, verwalten Sie deren Status und weisen Sie Fahrzeuge zu. Volle Kontrolle mit rollenbasiertem Zugriff.',
        },
        {
          title: 'Fahrstil-Analytik',
          description: 'KI-gestützte Analyse des Fahrerverhaltens. Identifizieren Sie aggressives Fahren, prognostizieren Sie Verschleiß und senken Sie Wartungskosten.',
        },
        {
          title: 'Wartungs- & Fahrtverlauf',
          description: 'Vollständige Service-Historie und Fahrtprotokolle für jeden Fahrer und jedes Fahrzeug. Berichte für Compliance und Buchhaltung exportierbar.',
        },
      ],
      cta: 'Flotte verwalten starten',
    },
    comparison: {
      title: 'Warum Odomate heraussticht',
      subtitle: 'Vergleichen Sie Odomate mit anderen Auto-Wartungs-Apps',
      feature: 'Funktion',
      odomate: 'Odomate',
      others: 'Andere Apps',
      rows: [
        { feature: 'KI-Fahrstilanalyse', odomate: '✓', others: '—' },
        { feature: 'KI-Komponenten-Lebensdauervorhersage', odomate: '✓', others: '—' },
        { feature: 'Automatische GPS-Kilometerstand-Verfolgung', odomate: '✓', others: 'Eingeschränkt' },
        { feature: 'Wetter-Intelligenz', odomate: '✓', others: '—' },
        { feature: 'Smarter Park-Assistent', odomate: '✓', others: '—' },
        { feature: 'Flottenmanagement (B2B)', odomate: '✓', others: '—' },
        { feature: 'Geräteübergreifende Synchronisierung', odomate: '✓', others: 'Eingeschränkt' },
        { feature: 'Digitales Servicebuch', odomate: '✓', others: 'Basis' },
        { feature: 'Kostenloser Plan', odomate: '✓', others: 'Nur Testversion' },
      ],
    },
    audience: {
      title: 'Perfekt für jeden Autobesitzer',
      items: [
        {
          title: 'Tägliche Fahrer',
          description: 'Perfekt für alltägliche Autobesitzer, die Wartung im Blick behalten wollen. Kilometerstand verfolgen, rechtzeitige Erinnerungen erhalten.',
        },
        {
          title: 'Auto-Enthusiasten',
          description: 'Führen Sie detaillierte Aufzeichnungen über jede Modifikation, jeden Service und jedes Upgrade. Dokumentieren Sie die Geschichte Ihres Autos.',
        },
        {
          title: 'Familien',
          description: 'Teilen Sie die Fahrzeugverfolgung mit Ihrer Familie. Alle informiert über Wartung, Service-Historie und Fahr-Einblicke mit dem Family-Plan.',
        },
        {
          title: 'Flottenmanager',
          description: 'Verwalten Sie Ihre gesamte Flotte mit Live-GPS-Tracking, Fahrerverwaltung und KI-Wartungsvorhersagen. Für Unternehmen jeder Größe.',
        },
      ],
    },
  },

  fr: {
    nav: {
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      b2b: 'Business',
      faq: 'FAQ',
      contact: 'Contact',
      backToHome: 'Retour à l\'accueil',
    },
    hero: {
      title: 'Entretien auto intelligent à portée de main',
      subtitle: 'Suivez l\'entretien, prévoyez les besoins de service avec une analyse personnalisée du style de conduite et anticipez les coûts ou économies d\'entretien. Gardez votre véhicule en parfait état avec l\'IA adaptée à votre conduite.',
      badge: 'Gratuit pour 1 véhicule pour toujours',
    },
    socialProof: {
      rating: '4.8★ sur l\'App Store',
      downloads: '10 000+ téléchargements',
      languages: '7 langues',
      vehicles: 'Toutes les marques',
    },
    howItWorks: {
      title: 'Démarrez en 3 étapes simples',
      subtitle: 'Commencez votre entretien auto intelligent en moins d\'une minute',
      steps: [
        {
          title: 'Téléchargez l\'app',
          description: 'Installez Odomate depuis l\'App Store ou Google Play — c\'est gratuit.',
        },
        {
          title: 'Ajoutez votre véhicule',
          description: 'Saisissez la marque, le modèle, l\'année et le kilométrage. 30 secondes suffisent.',
        },
        {
          title: 'Conduisez intelligemment',
          description: 'Odomate suit automatiquement le kilométrage, prévoit l\'entretien et envoie des alertes intelligentes.',
        },
      ],
    },
    pricing: {
      title: 'Tarifs simples et transparents',
      subtitle: 'Commencez gratuitement. Passez à un plan supérieur si besoin. Annulez à tout moment.',
      monthly: 'Mensuel',
      yearly: 'Annuel',
      perMonth: '/mois',
      perYear: '/an',
      or: 'ou',
      save: 'Économisez 17%',
      mostPopular: 'Le plus populaire',
      download: 'Télécharger',
      plans: {
        free: {
          name: 'Gratuit',
          price: '$0',
          period: 'pour toujours',
          description: 'Parfait pour suivre un seul véhicule',
          features: [
            '1 véhicule',
            'Suivi automatique du kilométrage',
            'Rappels d\'entretien de base',
            'Carnet de service numérique',
            'Assistant de stationnement',
          ],
        },
        premium: {
          name: 'Personal',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Pour les propriétaires qui veulent l\'expérience complète',
          features: [
            '2 véhicules',
            'Analyse IA du style de conduite',
            'Prédictions IA de durée de vie',
            'Intelligence météo',
            'Navigation en direct',
            'Notifications de durée de vie des composants',
            'Sync multi-appareils',
            'Support prioritaire',
          ],
        },
        family: {
          name: 'Family',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Partagez l\'expérience avec votre famille (jusqu\'à 5 membres)',
          features: [
            'Tout de Personal',
            'Jusqu\'à 5 membres de la famille',
            'Accès partagé aux véhicules',
            'Conduite familiale analysée',
            'Historique d\'entretien partagé',
          ],
        },
        b2b: {
          name: 'Business',
          tiers: [
            { name: 'Starter', drivers: '10 conducteurs', price: '$59.99', period: '/mois' },
            { name: 'Growth', drivers: '25 conducteurs', price: '$149.99', period: '/mois' },
            { name: 'Pro', drivers: '50 conducteurs', price: '$299.99', period: '/mois' },
            { name: 'Enterprise', drivers: '100 conducteurs', price: '$599.99', period: '/mois' },
          ],
          description: 'Gestion de flotte avec suivi GPS',
          features: [
            'Carte de flotte en direct avec GPS',
            'Gestion des conducteurs & invitations',
            'Analyse du style de conduite par conducteur',
            'Historique d\'entretien par véhicule',
            'Historique des trajets par conducteur',
            'Analyse de toute la flotte',
          ],
          contactUs: 'Contactez-nous',
        },
      },
    },
    b2b: {
      title: 'Gérez votre flotte avec Odomate',
      subtitle: 'Solution complète de gestion de flotte avec suivi GPS en direct, gestion des conducteurs et prédictions d\'entretien par IA pour chaque véhicule.',
      features: [
        {
          title: 'Carte de flotte en direct',
          description: 'Suivez tous vos conducteurs en temps réel sur une carte interactive. Voyez qui est en ligne, leur position et leur dernière activité.',
        },
        {
          title: 'Gestion des conducteurs',
          description: 'Invitez des conducteurs par email, gérez leur statut et attribuez des véhicules. Contrôle total avec accès basé sur les rôles.',
        },
        {
          title: 'Analytique du style de conduite',
          description: 'Analyse IA du comportement de chaque conducteur. Identifiez la conduite agressive, prévoyez l\'usure et réduisez les coûts.',
        },
        {
          title: 'Historique d\'entretien & trajets',
          description: 'Historique complet des services et trajets pour chaque conducteur et véhicule. Export de rapports pour la conformité.',
        },
      ],
      cta: 'Commencer la gestion de flotte',
    },
    comparison: {
      title: 'Pourquoi Odomate se distingue',
      subtitle: 'Comparez Odomate aux autres applications d\'entretien auto',
      feature: 'Fonctionnalité',
      odomate: 'Odomate',
      others: 'Autres applications',
      rows: [
        { feature: 'Analyse IA du style de conduite', odomate: '✓', others: '—' },
        { feature: 'Prédiction IA de durée de vie', odomate: '✓', others: '—' },
        { feature: 'Suivi GPS automatique du kilométrage', odomate: '✓', others: 'Limité' },
        { feature: 'Intelligence météo', odomate: '✓', others: '—' },
        { feature: 'Assistant de stationnement intelligent', odomate: '✓', others: '—' },
        { feature: 'Gestion de flotte (B2B)', odomate: '✓', others: '—' },
        { feature: 'Sync multi-appareils', odomate: '✓', others: 'Limité' },
        { feature: 'Carnet de service numérique', odomate: '✓', others: 'Basique' },
        { feature: 'Plan gratuit', odomate: '✓', others: 'Essai seulement' },
      ],
    },
    audience: {
      title: 'Parfait pour chaque propriétaire de voiture',
      items: [
        {
          title: 'Conducteurs quotidiens',
          description: 'Parfait pour les propriétaires qui veulent suivre l\'entretien sans tracas. Suivez le kilométrage, recevez des rappels opportuns.',
        },
        {
          title: 'Passionnés d\'auto',
          description: 'Gardez des enregistrements détaillés de chaque modification, service et amélioration. Documentez l\'histoire de votre voiture.',
        },
        {
          title: 'Familles',
          description: 'Partagez le suivi des véhicules avec votre famille. Tous informés sur l\'entretien et l\'historique avec le plan Family.',
        },
        {
          title: 'Gestionnaires de flotte',
          description: 'Gérez toute votre flotte avec suivi GPS, gestion des conducteurs et prédictions IA. Pour les entreprises de toute taille.',
        },
      ],
    },
  },

  es: {
    nav: {
      features: 'Características',
      pricing: 'Precios',
      b2b: 'Business',
      faq: 'FAQ',
      contact: 'Contacto',
      backToHome: 'Volver al inicio',
    },
    hero: {
      title: 'Cuidado inteligente del coche a tu alcance',
      subtitle: 'Registra el mantenimiento, predice las necesidades de servicio con análisis personalizado del estilo de conducción y anticipa costos o ahorros. Mantén tu vehículo en perfecto estado con IA adaptada a tu conducción.',
      badge: 'Gratis para 1 vehículo para siempre',
    },
    socialProof: {
      rating: '4.8★ en App Store',
      downloads: '10.000+ descargas',
      languages: '7 idiomas',
      vehicles: 'Todas las marcas',
    },
    howItWorks: {
      title: 'Empieza en 3 pasos simples',
      subtitle: 'Comienza tu cuidado inteligente del coche en menos de un minuto',
      steps: [
        {
          title: 'Descarga la app',
          description: 'Instala Odomate desde App Store o Google Play — es gratis.',
        },
        {
          title: 'Añade tu vehículo',
          description: 'Introduce marca, modelo, año y kilometraje actual. Toma 30 segundos.',
        },
        {
          title: 'Conduce de forma inteligente',
          description: 'Odomate rastrea automáticamente el kilometraje, predice el mantenimiento y envía alertas inteligentes.',
        },
      ],
    },
    pricing: {
      title: 'Precios simples y transparentes',
      subtitle: 'Empieza gratis. Mejora cuando necesites. Cancela cuando quieras.',
      monthly: 'Mensual',
      yearly: 'Anual',
      perMonth: '/mes',
      perYear: '/año',
      or: 'o',
      save: 'Ahorra 17%',
      mostPopular: 'Más popular',
      download: 'Descargar',
      plans: {
        free: {
          name: 'Gratis',
          price: '$0',
          period: 'para siempre',
          description: 'Perfecto para un solo vehículo',
          features: [
            '1 vehículo',
            'Seguimiento automático de kilometraje',
            'Recordatorios básicos de mantenimiento',
            'Libro de servicio digital',
            'Asistente de estacionamiento',
          ],
        },
        premium: {
          name: 'Personal',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Para quienes quieren la experiencia completa',
          features: [
            '2 vehículos',
            'Análisis IA del estilo de conducción',
            'Predicciones IA de vida útil',
            'Inteligencia meteorológica',
            'Navegación en vivo',
            'Notificaciones de vida de componentes',
            'Sincronización multidispositivo',
            'Soporte prioritario',
          ],
        },
        family: {
          name: 'Family',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Comparte con tu familia (hasta 5 miembros)',
          features: [
            'Todo de Personal',
            'Hasta 5 miembros de la familia',
            'Acceso compartido a vehículos',
            'Análisis de conducción familiar',
            'Historial de mantenimiento compartido',
          ],
        },
        b2b: {
          name: 'Business',
          tiers: [
            { name: 'Starter', drivers: '10 conductores', price: '$59.99', period: '/mes' },
            { name: 'Growth', drivers: '25 conductores', price: '$149.99', period: '/mes' },
            { name: 'Pro', drivers: '50 conductores', price: '$299.99', period: '/mes' },
            { name: 'Enterprise', drivers: '100 conductores', price: '$599.99', period: '/mes' },
          ],
          description: 'Gestión de flota con seguimiento GPS',
          features: [
            'Mapa de flota en vivo con GPS',
            'Gestión de conductores e invitaciones',
            'Análisis de estilo de conducción por conductor',
            'Historial de mantenimiento por vehículo',
            'Historial de viajes por conductor',
            'Análisis de toda la flota',
          ],
          contactUs: 'Contáctanos',
        },
      },
    },
    b2b: {
      title: 'Gestiona tu flota con Odomate',
      subtitle: 'Solución completa de gestión de flotas con seguimiento GPS en vivo, gestión de conductores y predicciones de mantenimiento por IA para cada vehículo.',
      features: [
        {
          title: 'Mapa de flota en vivo',
          description: 'Rastrea todos tus conductores en tiempo real en un mapa interactivo. Ve quién está en línea, su ubicación y última actividad.',
        },
        {
          title: 'Gestión de conductores',
          description: 'Invita conductores por email, gestiona su estado y asigna vehículos. Control total con acceso basado en roles.',
        },
        {
          title: 'Análisis de estilo de conducción',
          description: 'Análisis por IA del comportamiento de cada conductor. Identifica conducción agresiva, predice desgaste y reduce costos.',
        },
        {
          title: 'Historial de mantenimiento y viajes',
          description: 'Historial completo de servicios y registros de viajes para cada conductor y vehículo. Exporta informes para cumplimiento.',
        },
      ],
      cta: 'Empezar gestión de flota',
    },
    comparison: {
      title: 'Por qué Odomate destaca',
      subtitle: 'Compara Odomate con otras apps de mantenimiento de autos',
      feature: 'Característica',
      odomate: 'Odomate',
      others: 'Otras apps',
      rows: [
        { feature: 'Análisis IA del estilo de conducción', odomate: '✓', others: '—' },
        { feature: 'Predicción IA de vida útil', odomate: '✓', others: '—' },
        { feature: 'Seguimiento GPS automático de kilometraje', odomate: '✓', others: 'Limitado' },
        { feature: 'Inteligencia meteorológica', odomate: '✓', others: '—' },
        { feature: 'Asistente inteligente de estacionamiento', odomate: '✓', others: '—' },
        { feature: 'Gestión de flota (B2B)', odomate: '✓', others: '—' },
        { feature: 'Sincronización multidispositivo', odomate: '✓', others: 'Limitado' },
        { feature: 'Libro de servicio digital', odomate: '✓', others: 'Básico' },
        { feature: 'Plan gratuito', odomate: '✓', others: 'Solo prueba' },
      ],
    },
    audience: {
      title: 'Perfecto para cada dueño de auto',
      items: [
        {
          title: 'Conductores diarios',
          description: 'Perfecto para quienes quieren controlar el mantenimiento sin complicaciones. Rastrea kilometraje, recibe recordatorios oportunos.',
        },
        {
          title: 'Entusiastas del auto',
          description: 'Mantén registros detallados de cada modificación, servicio y mejora. Documenta la historia de tu auto.',
        },
        {
          title: 'Familias',
          description: 'Comparte el seguimiento de vehículos con tu familia. Todos informados sobre mantenimiento e historial con el plan Family.',
        },
        {
          title: 'Gestores de flota',
          description: 'Gestiona toda tu flota con seguimiento GPS, gestión de conductores y predicciones IA. Para negocios de cualquier tamaño.',
        },
      ],
    },
  },

  pl: {
    nav: {
      features: 'Funkcje',
      pricing: 'Cennik',
      b2b: 'Business',
      faq: 'FAQ',
      contact: 'Kontakt',
      backToHome: 'Powrót na stronę główną',
    },
    hero: {
      title: 'Inteligentna opieka nad autem w zasięgu ręki',
      subtitle: 'Śledź serwis, przewiduj potrzeby serwisowe z spersonalizowaną analizą stylu jazdy i prognozuj koszty lub oszczędności. Utrzymuj pojazd w idealnym stanie dzięki AI dopasowanej do Twojego stylu jazdy.',
      badge: 'Darmowe na zawsze dla 1 pojazdu',
    },
    socialProof: {
      rating: '4.8★ w App Store',
      downloads: '10 000+ pobrań',
      languages: '7 języków',
      vehicles: 'Wszystkie marki',
    },
    howItWorks: {
      title: 'Zacznij w 3 prostych krokach',
      subtitle: 'Rozpocznij inteligentną opiekę nad autem w mniej niż minutę',
      steps: [
        {
          title: 'Pobierz aplikację',
          description: 'Zainstaluj Odomate z App Store lub Google Play — za darmo.',
        },
        {
          title: 'Dodaj pojazd',
          description: 'Wprowadź markę, model, rok i aktualny przebieg. Trwa 30 sekund.',
        },
        {
          title: 'Jeździj mądrzej',
          description: 'Odomate automatycznie śledzi przebieg, przewiduje serwis i wysyła inteligentne alerty.',
        },
      ],
    },
    pricing: {
      title: 'Proste, przejrzyste ceny',
      subtitle: 'Zacznij za darmo. Ulepsz, gdy potrzebujesz. Anuluj w każdej chwili.',
      monthly: 'Miesięcznie',
      yearly: 'Rocznie',
      perMonth: '/mies',
      perYear: '/rok',
      or: 'lub',
      save: 'Oszczędź 17%',
      mostPopular: 'Najpopularniejszy',
      download: 'Pobierz',
      plans: {
        free: {
          name: 'Darmowy',
          price: '$0',
          period: 'na zawsze',
          description: 'Idealny do śledzenia jednego pojazdu',
          features: [
            '1 pojazd',
            'Automatyczne śledzenie przebiegu',
            'Podstawowe przypomnienia o serwisie',
            'Cyfrowa książka serwisowa',
            'Asystent parkowania',
          ],
        },
        premium: {
          name: 'Personal',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Dla właścicieli, którzy chcą pełnego doświadczenia',
          features: [
            '2 pojazdy',
            'Analiza AI stylu jazdy',
            'Prognozy AI żywotności',
            'Inteligentna pogoda',
            'Nawigacja na żywo',
            'Powiadomienia o żywotności komponentów',
            'Synchronizacja między urządzeniami',
            'Priorytetowe wsparcie',
          ],
        },
        family: {
          name: 'Family',
          priceMonthly: '$5.99',
          priceYearly: '$59.99',
          description: 'Podziel się z rodziną (do 5 członków)',
          features: [
            'Wszystko z Personal',
            'Do 5 członków rodziny',
            'Wspólny dostęp do pojazdów',
            'Analiza jazdy rodzinnej',
            'Wspólna historia serwisu',
          ],
        },
        b2b: {
          name: 'Business',
          tiers: [
            { name: 'Starter', drivers: '10 kierowców', price: '$59.99', period: '/mies' },
            { name: 'Growth', drivers: '25 kierowców', price: '$149.99', period: '/mies' },
            { name: 'Pro', drivers: '50 kierowców', price: '$299.99', period: '/mies' },
            { name: 'Enterprise', drivers: '100 kierowców', price: '$599.99', period: '/mies' },
          ],
          description: 'Zarządzanie flotą z śledzeniem GPS',
          features: [
            'Mapa floty na żywo z GPS',
            'Zarządzanie kierowcami i zaproszenia',
            'Analiza stylu jazdy każdego kierowcy',
            'Historia serwisu każdego pojazdu',
            'Historia tras każdego kierowcy',
            'Analiza całej floty',
          ],
          contactUs: 'Skontaktuj się z nami',
        },
      },
    },
    b2b: {
      title: 'Zarządzaj flotą z Odomate',
      subtitle: 'Kompletne rozwiązanie do zarządzania flotą z śledzeniem GPS na żywo, zarządzaniem kierowcami i prognozami serwisu AI dla każdego pojazdu.',
      features: [
        {
          title: 'Mapa floty na żywo',
          description: 'Śledź wszystkich kierowców w czasie rzeczywistym na interaktywnej mapie. Zobacz, kto jest online, ich lokalizację i ostatnią aktywność.',
        },
        {
          title: 'Zarządzanie kierowcami',
          description: 'Zapraszaj kierowców e-mailem, zarządzaj ich statusem i przypisuj pojazdy. Pełna kontrola z dostępem opartym na rolach.',
        },
        {
          title: 'Analiza stylu jazdy',
          description: 'Analiza AI zachowania każdego kierowcy. Identyfikuj agresywną jazdę, przewiduj zużycie i obniż koszty serwisu.',
        },
        {
          title: 'Historia serwisu i tras',
          description: 'Pełna historia serwisu i dzienniki tras dla każdego kierowcy i pojazdu. Eksport raportów dla zgodności i księgowości.',
        },
      ],
      cta: 'Zacznij zarządzanie flotą',
    },
    comparison: {
      title: 'Dlaczego Odomate wyróżnia się',
      subtitle: 'Porównaj Odomate z innymi aplikacjami do serwisu aut',
      feature: 'Funkcja',
      odomate: 'Odomate',
      others: 'Inne aplikacje',
      rows: [
        { feature: 'Analiza AI stylu jazdy', odomate: '✓', others: '—' },
        { feature: 'Prognoza AI żywotności komponentów', odomate: '✓', others: '—' },
        { feature: 'Automatyczne śledzenie GPS przebiegu', odomate: '✓', others: 'Ograniczone' },
        { feature: 'Inteligentna pogoda', odomate: '✓', others: '—' },
        { feature: 'Inteligentny asystent parkowania', odomate: '✓', others: '—' },
        { feature: 'Zarządzanie flotą (B2B)', odomate: '✓', others: '—' },
        { feature: 'Synchronizacja między urządzeniami', odomate: '✓', others: 'Ograniczone' },
        { feature: 'Cyfrowa książka serwisowa', odomate: '✓', others: 'Podstawowe' },
        { feature: 'Darmowy plan', odomate: '✓', others: 'Tylko wersja próbna' },
      ],
    },
    audience: {
      title: 'Idealny dla każdego właściciela auta',
      items: [
        {
          title: 'Codzienni kierowcy',
          description: 'Idealny dla właścicieli, którzy chcą kontrolować serwis bez trudu. Śledź przebieg, otrzymuj terminowe przypomnienia.',
        },
        {
          title: 'Pasjonaci aut',
          description: 'Prowadź szczegółowe zapisy każdej modyfikacji, serwisu i ulepszenia. Dokumentuj historię swojego auta.',
        },
        {
          title: 'Rodziny',
          description: 'Dziel śledzenie pojazdów z rodziną. Wszyscy poinformowani o serwisie i historii z planem Family.',
        },
        {
          title: 'Menedżerowie floty',
          description: 'Zarządzaj całą flotą z śledzeniem GPS, zarządzaniem kierowcami i prognozami AI. Dla firm każdej wielkości.',
        },
      ],
    },
  },
};
