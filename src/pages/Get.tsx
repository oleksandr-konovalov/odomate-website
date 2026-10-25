import { useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight, Globe, Gauge, Navigation, RadioTower } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/types/language';
import logo from '@/assets/logo-256.png';

// Landing for links from TikTok, Instagram etc.: one screen, two store buttons.
// apps.apple.com without a country code opens the visitor's own storefront.
const APP_STORE_URL = 'https://apps.apple.com/app/odomate/id6754283341';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.aleksandrkonovalov.odomate';

// Brand slogan, the same in every language.
const TAGLINE = 'Your car. Your buddy.';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

type Platform = 'ios' | 'android' | 'other';

const detectPlatform = (): Platform => {
  const ua = navigator.userAgent || '';
  if (/android/i.test(ua)) return 'android';
  // iPadOS 13+ reports itself as a Mac with touch.
  if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
  return 'other';
};

interface GetTexts {
  title: string;
  features: [string, string, string];
  appStoreTop: string;
  googlePlayTop: string;
  free: string;
  website: string;
}

const texts: Record<Language, GetTexts> = {
  en: {
    title: 'Navigation That Works Under GPS Jamming',
    features: ['Cell towers + Wi-Fi', 'Turn-by-turn', 'Auto mileage'],
    appStoreTop: 'Download on the',
    googlePlayTop: 'Get it on',
    free: 'Free to download',
    website: 'Visit website',
  },
  uk: {
    title: 'Навігація, що працює під час глушіння GPS',
    features: ['Вежі + Wi-Fi', 'Покрокові підказки', 'Автопробіг'],
    appStoreTop: 'Завантажити в',
    googlePlayTop: 'Доступно в',
    free: 'Завантаження безкоштовне',
    website: 'Перейти на сайт',
  },
  ru: {
    title: 'Навигация, которая работает при глушении GPS',
    features: ['Вышки + Wi-Fi', 'Пошаговые подсказки', 'Автопробег'],
    appStoreTop: 'Загрузите в',
    googlePlayTop: 'Доступно в',
    free: 'Скачать бесплатно',
    website: 'Перейти на сайт',
  },
  de: {
    title: 'Navigation, die auch bei GPS-Störungen funktioniert',
    features: ['Funkmasten + WLAN', 'Turn-by-Turn', 'Auto-Kilometer'],
    appStoreTop: 'Laden im',
    googlePlayTop: 'Jetzt bei',
    free: 'Kostenlos herunterladen',
    website: 'Zur Website',
  },
  fr: {
    title: 'Une navigation qui fonctionne malgré le brouillage GPS',
    features: ['Antennes + Wi-Fi', 'Guidage pas à pas', 'Kilométrage auto'],
    appStoreTop: 'Télécharger dans',
    googlePlayTop: 'Disponible sur',
    free: 'Téléchargement gratuit',
    website: 'Voir le site',
  },
  es: {
    title: 'Navegación que funciona con interferencias GPS',
    features: ['Antenas + Wi-Fi', 'Paso a paso', 'Kilometraje auto'],
    appStoreTop: 'Descárgalo en',
    googlePlayTop: 'Disponible en',
    free: 'Descarga gratuita',
    website: 'Ir al sitio web',
  },
  pl: {
    title: 'Nawigacja działająca mimo zagłuszania GPS',
    features: ['Stacje bazowe + Wi-Fi', 'Zakręt po zakręcie', 'Auto przebieg'],
    appStoreTop: 'Pobierz z',
    googlePlayTop: 'Pobierz z',
    free: 'Pobierz za darmo',
    website: 'Przejdź na stronę',
  },
};

const AppleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 384 512" className={className} aria-hidden="true" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const GooglePlayLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
    <path fill="#00d7fe" d="M48 59.5v393c0 9.4 5.4 17.5 13.3 21.4L289 256 61.3 38.1C53.4 42 48 50.1 48 59.5z" />
    <path fill="#ffce00" d="M371.8 173.4 289 256l82.8 82.6 93.7-53.6c16.7-9.6 16.7-33.6 0-43.2l-93.7-68.4z" />
    <path fill="#00f076" d="M61.3 38.1 289 256l82.8-82.6L94.3 15.1c-10.7-6.1-22.8-4.9-33 3z" />
    <path fill="#ff3a44" d="M61.3 473.9c10.2 7.9 22.3 9.1 33 3l277.5-138.3L289 256 61.3 473.9z" />
  </svg>
);

interface StoreButtonProps {
  href: string;
  logo: React.ReactNode;
  top: string;
  name: string;
  primary: boolean;
  store: 'app_store' | 'google_play';
}

const StoreButton = ({ href, logo, top, name, primary, store }: StoreButtonProps) => (
  // Same-tab navigation: in-app browsers (TikTok, Instagram) handle it more
  // reliably than target="_blank" and hand the store link over to the store app.
  <a
    href={href}
    data-store={store}
    className={[
      'group flex w-full items-center gap-4 rounded-2xl px-5 py-4 min-h-[76px]',
      'transition-all duration-200 active:scale-[0.98] select-none',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      primary
        ? 'bg-foreground text-background shadow-[0_10px_40px_-10px_hsl(213_94%_68%/0.55)]'
        : 'bg-card/80 text-foreground border border-border hover:border-primary/40',
    ].join(' ')}
  >
    <span className="flex h-11 w-11 shrink-0 items-center justify-center">{logo}</span>
    <span className="flex flex-col items-start text-left leading-tight">
      <span className={primary ? 'text-xs font-medium opacity-70' : 'text-xs font-medium text-muted-foreground'}>{top}</span>
      <span className="text-[1.375rem] font-semibold tracking-tight">{name}</span>
    </span>
    <ChevronRight className="ml-auto h-5 w-5 opacity-50 transition-transform group-hover:translate-x-0.5" />
  </a>
);

const Get = () => {
  const { language } = useLanguage();
  const tx = texts[language] ?? texts.en;
  const platform = useMemo(detectPlatform, []);

  // Forward utm_* from the bio link into the stores. Play keeps them as an
  // install referrer; the App Store ignores unknown params, so it gets the plain URL.
  const playUrl = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const referrer = new URLSearchParams();
    UTM_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) referrer.set(key, value);
    });
    if (!referrer.has('utm_source')) referrer.set('utm_source', 'odomate.net');
    if (!referrer.has('utm_medium')) referrer.set('utm_medium', 'get_page');
    return `${GOOGLE_PLAY_URL}&referrer=${encodeURIComponent(referrer.toString())}`;
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const appStore = (
    <StoreButton
      key="ios"
      href={APP_STORE_URL}
      logo={<AppleLogo className="h-9 w-9" />}
      top={tx.appStoreTop}
      name="App Store"
      primary={platform === 'ios'}
      store="app_store"
    />
  );
  const googlePlay = (
    <StoreButton
      key="android"
      href={playUrl}
      logo={<GooglePlayLogo className="h-9 w-9" />}
      top={tx.googlePlayTop}
      name="Google Play"
      primary={platform === 'android'}
      store="google_play"
    />
  );
  const buttons = platform === 'android' ? [googlePlay, appStore] : [appStore, googlePlay];
  const featureIcons = [RadioTower, Navigation, Gauge];

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>Odomate — {TAGLINE}</title>
        <meta name="description" content={tx.title} />
        <meta property="og:title" content={`Odomate — ${TAGLINE}`} />
        <meta property="og:description" content={tx.title} />
        <meta property="og:url" content="https://odomate.net/get" />
        <link rel="canonical" href="https://odomate.net/get" />
      </Helmet>

      <main
        className="relative flex min-h-[100dvh] w-full flex-col items-center overflow-hidden bg-background px-5"
        style={{
          paddingTop: 'max(env(safe-area-inset-top), 1.75rem)',
          paddingBottom: 'max(env(safe-area-inset-bottom), 1.5rem)',
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-10rem] right-[-8rem] h-[22rem] w-[22rem] rounded-full bg-primary/10 blur-[90px]"
        />

        <div className="relative z-10 flex w-full max-w-[420px] flex-1 flex-col">
          {/* Brand */}
          <header className="flex flex-col items-center text-center">
            <div className="relative">
              <div aria-hidden="true" className="absolute inset-0 rounded-[28px] bg-primary/40 blur-2xl" />
              <img
                src={logo}
                alt="Odomate"
                width={96}
                height={96}
                className="relative h-24 w-24 rounded-[28px] object-cover shadow-2xl ring-1 ring-white/10 [@media(max-height:700px)]:h-16 [@media(max-height:700px)]:w-16 [@media(max-height:700px)]:rounded-[20px]"
              />
            </div>
            <h1 className="mt-5 text-[2.75rem] font-bold leading-none tracking-tight brand-gradient [@media(max-height:700px)]:mt-3 [@media(max-height:700px)]:text-4xl">Odomate</h1>
            <p className="mt-2 text-lg font-light text-muted-foreground">{TAGLINE}</p>
            <p className="mt-5 text-balance text-xl font-semibold leading-snug text-foreground [@media(max-height:700px)]:mt-3 [@media(max-height:700px)]:text-lg">{tx.title}</p>
          </header>

          {/* Feature chips: dropped on short screens so the store buttons stay above the fold */}
          <ul className="mt-5 flex flex-wrap justify-center gap-2 [@media(max-height:700px)]:hidden">
            {tx.features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <li
                  key={feature}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm text-foreground"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {feature}
                </li>
              );
            })}
          </ul>

          {/* Store buttons */}
          <nav className="mt-8 flex flex-col gap-3 [@media(max-height:700px)]:mt-5" aria-label="Download">
            {buttons}
          </nav>
          <p className="mt-3 text-center text-sm text-muted-foreground">{tx.free}</p>

          <div className="flex-1" />

          {/* Footer */}
          <footer className="mt-10 flex flex-col items-center gap-4">
            <Link
              to="/"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
              {tx.website}
            </Link>
            <p className="text-xs text-muted-foreground/60">© {new Date().getFullYear()} Odomate</p>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Get;
