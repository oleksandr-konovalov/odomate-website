import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/hooks/useLanguage';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
}

export const SEO = ({
  title,
  description,
  keywords,
  image = 'https://odomate.net/og-image.jpg',
  url = 'https://odomate.net',
  type = 'website',
  noindex = false,
}: SEOProps) => {
  const { t, language } = useLanguage();

  const siteTitle = title || t.meta.title;
  const siteDescription = description || t.meta.description;
  const siteKeywords = keywords || t.meta.keywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={language} />
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : language === 'ru' ? 'ru_RU' : language === 'fr' ? 'fr_FR' : language === 'de' ? 'de_DE' : language === 'pl' ? 'pl_PL' : 'es_ES'} />
      <meta property="og:site_name" content="Odomate" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@odomate" />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Odomate" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#5B9BF3" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en" href={`https://odomate.net/en${url.replace('https://odomate.net', '')}`} />
      <link rel="alternate" hrefLang="ru" href={`https://odomate.net/ru${url.replace('https://odomate.net', '')}`} />
      <link rel="alternate" hrefLang="fr" href={`https://odomate.net/fr${url.replace('https://odomate.net', '')}`} />
      <link rel="alternate" hrefLang="de" href={`https://odomate.net/de${url.replace('https://odomate.net', '')}`} />
      <link rel="alternate" hrefLang="pl" href={`https://odomate.net/pl${url.replace('https://odomate.net', '')}`} />
      <link rel="alternate" hrefLang="es" href={`https://odomate.net/es${url.replace('https://odomate.net', '')}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://odomate.net${url.replace('https://odomate.net', '')}`} />
    </Helmet>
  );
};
