import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'SoftwareApplication' | 'FAQPage' | 'Article';
  data: any;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    return JSON.stringify(baseData);
  };

  return (
    <Helmet>
      <script type="application/ld+json">{getStructuredData()}</script>
    </Helmet>
  );
};

// Organization Schema
export const OrganizationSchema = () => (
  <StructuredData
    type="Organization"
    data={{
      name: 'Odomate',
      url: 'https://odomate.net',
      logo: 'https://odomate.net/logo.png',
      description: 'Smart car maintenance tracking app with AI-powered predictions and automatic mileage logging.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-XXX-XXX-XXXX',
        contactType: 'customer service',
        email: 'support@odomate.net',
        availableLanguage: ['English', 'Russian', 'French', 'German', 'Polish', 'Spanish'],
      },
      sameAs: [
        'https://twitter.com/odomate',
        'https://facebook.com/odomate',
        'https://instagram.com/odomate',
        'https://linkedin.com/company/odomate',
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    }}
  />
);

// WebSite Schema
export const WebSiteSchema = () => (
  <StructuredData
    type="WebSite"
    data={{
      name: 'Odomate',
      url: 'https://odomate.net',
      description: 'Smart car maintenance tracking with AI-powered insights',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://odomate.net/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
      inLanguage: ['en', 'ru', 'fr', 'de', 'pl', 'es'],
    }}
  />
);

// Software Application Schema
export const SoftwareApplicationSchema = () => (
  <StructuredData
    type="SoftwareApplication"
    data={{
      name: 'Odomate',
      applicationCategory: 'LifestyleApplication',
      operatingSystem: ['iOS', 'Android'],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free download with Premium subscription available',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1250',
        bestRating: '5',
        worstRating: '1',
      },
      description: 'Track maintenance, predict service needs, and keep your vehicle in perfect condition with AI-powered insights.',
      screenshot: 'https://odomate.net/app-screenshot.jpg',
      downloadUrl: [
        'https://apps.apple.com/app/odomate',
        'https://play.google.com/store/apps/details?id=com.odomate',
      ],
      author: {
        '@type': 'Organization',
        name: 'Odomate',
      },
      datePublished: '2024-01-01',
      softwareVersion: '1.0.0',
    }}
  />
);

// FAQ Schema
export const FAQSchema = ({ items }: { items: Array<{ question: string; answer: string }> }) => (
  <StructuredData
    type="FAQPage"
    data={{
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }}
  />
);

// Article Schema (for blog posts or pages)
export const ArticleSchema = ({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = 'Odomate',
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author?: string;
}) => (
  <StructuredData
    type="Article"
    data={{
      headline: title,
      description: description,
      image: image,
      datePublished: datePublished,
      dateModified: dateModified,
      author: {
        '@type': 'Organization',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Odomate',
        logo: {
          '@type': 'ImageObject',
          url: 'https://odomate.net/logo.png',
        },
      },
    }}
  />
);
