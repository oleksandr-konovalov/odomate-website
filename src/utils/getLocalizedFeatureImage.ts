import { Language } from '@/types/language';

// Import all feature images
// GPS
import gpsUs from '/assets/images/gps/gps_us.png';
import gpsUk from '/assets/images/gps/gps_uk.png';
import gpsDe2d from '/assets/images/gps/gpd_de_2d.png';
import gpsDe3d from '/assets/images/gps/gps_de_3d.png';

// Maintenance
import maintenanceAndroidEn from '/assets/images/maintenance/maintenance_android_en.png';
import maintenanceAndroidDe from '/assets/images/maintenance/maintenance_android_de.png';
import maintenanceIosEn from '/assets/images/maintenance/maintenance_ios_en.png';
import maintenanceIosDe from '/assets/images/maintenance/maintenance_ios_de.png';
import aiMaintenanceEn from '/assets/images/maintenance/ai_maintenance_en.png';
import aiMaintenanceDe from '/assets/images/maintenance/ai_maintenance_de.png';

// Parking
import findCarUs from '/assets/images/parking/find_car_us.png';
import findCarUk from '/assets/images/parking/find_car_uk.png';
import findCarDe from '/assets/images/parking/find_car_de.png';
import paidParkingUs from '/assets/images/parking/paid_parking_us.png';
import paidParkingUk from '/assets/images/parking/paid_parking_uk.png';
import paidParkingDe from '/assets/images/parking/paid_parking_de.png';
import setPaidParkingUs from '/assets/images/parking/set_paid_parking_us.png';
import setPaidParkingUk from '/assets/images/parking/set_paid_parking_uk.png';
import setPaidParkingDe from '/assets/images/parking/set_paid_parking_de.png';

// Saved Routes
import savedRoutesEn from '/assets/images/saved_routes/saved_routes_en.png';
import savedRoutesDe from '/assets/images/saved_routes/saved_routes_de.png';

// Service Book
import serviceBookUs from '/assets/images/service_book/serviсe_book_us.png';
import serviceBookUk from '/assets/images/service_book/service_book_uk.png';
import serviceBookDe from '/assets/images/service_book/service_book_de.png';

// Trips List
import tripsListUs from '/assets/images/trips_list/trips_list_us.png';
import tripsListUk from '/assets/images/trips_list/trips_list_uk.png';
import tripsListDe from '/assets/images/trips_list/trips_list_de.png';

// Weather
import weatherUs from '/assets/images/weather/weather_us.png';
import weatherUk from '/assets/images/weather/weather_uk.png';
import weatherDe from '/assets/images/weather/weather_de.png';

// Head device
import androidHeadDeviceDe from '/assets/images/android_head_device_de.png';
import androidHeadDeviceUk from '/assets/images/android_head_device_uk.png';

export type FeatureKey = 
  | 'gps'
  | 'maintenance'
  | 'parking' // Combined parking with animation
  | 'saved_routes'
  | 'service_book'
  | 'trips_list'
  | 'weather'
  | 'android_head';

interface FeatureImages {
  [key: string]: {
    [lang: string]: string | string[] | string[][];
  };
}

const featureImages: FeatureImages = {
  gps: {
    en: [gpsUs, gpsUk], // Two screenshots side by side
    ru: [gpsUs, gpsUk],
    uk: [gpsUs, gpsUk],
    de: gpsDe3d, // Single for German
    fr: [gpsUs, gpsUk],
    es: [gpsUs, gpsUk],
    pl: [gpsUs, gpsUk],
  },
  gps_2d: {
    de: gpsDe2d,
  },
  maintenance_android: {
    // iOS first everywhere
    en: [maintenanceIosEn, maintenanceAndroidEn],
    de: [maintenanceIosDe, maintenanceAndroidDe],
    ru: [maintenanceIosEn, maintenanceAndroidEn],
    uk: [maintenanceIosEn, maintenanceAndroidEn],
    fr: [maintenanceIosEn, maintenanceAndroidEn],
    es: [maintenanceIosEn, maintenanceAndroidEn],
    pl: [maintenanceIosEn, maintenanceAndroidEn],
  },
  maintenance_ios: {
    en: aiMaintenanceEn, // AI maintenance screenshot
    de: aiMaintenanceDe,
    ru: aiMaintenanceEn,
    uk: aiMaintenanceEn,
    fr: aiMaintenanceEn,
    es: aiMaintenanceEn,
    pl: aiMaintenanceEn,
  },
  // Parking with 3 animated pairs
  parking: {
    en: [
      [findCarUs, findCarUk],           // Pair 1: Find car
      [paidParkingUs, paidParkingUk],   // Pair 2: Paid parking
      [setPaidParkingUs, setPaidParkingUk], // Pair 3: Set parking
    ],
    de: [
      [findCarDe],                      // Pair 1: Find car (single)
      [paidParkingDe],                  // Pair 2: Paid parking (single)
      [setPaidParkingDe],               // Pair 3: Set parking (single)
    ],
    ru: [
      [findCarUs, findCarUk],
      [paidParkingUs, paidParkingUk],
      [setPaidParkingUs, setPaidParkingUk],
    ],
    uk: [
      [findCarUs, findCarUk],
      [paidParkingUs, paidParkingUk],
      [setPaidParkingUs, setPaidParkingUk],
    ],
    fr: [
      [findCarUs, findCarUk],
      [paidParkingUs, paidParkingUk],
      [setPaidParkingUs, setPaidParkingUk],
    ],
    es: [
      [findCarUs, findCarUk],
      [paidParkingUs, paidParkingUk],
      [setPaidParkingUs, setPaidParkingUk],
    ],
    pl: [
      [findCarUs, findCarUk],
      [paidParkingUs, paidParkingUk],
      [setPaidParkingUs, setPaidParkingUk],
    ],
  },
  saved_routes: {
    en: savedRoutesEn,
    de: savedRoutesDe,
    ru: savedRoutesEn,
    uk: savedRoutesEn,
    fr: savedRoutesEn,
    es: savedRoutesEn,
    pl: savedRoutesEn,
  },
  service_book: {
    en: [serviceBookUs, serviceBookUk], // Two screenshots side by side
    de: serviceBookDe,
    ru: [serviceBookUs, serviceBookUk],
    uk: [serviceBookUs, serviceBookUk],
    fr: [serviceBookUs, serviceBookUk],
    es: [serviceBookUs, serviceBookUk],
    pl: [serviceBookUs, serviceBookUk],
  },
  trips_list: {
    en: [tripsListUs, tripsListUk], // Two screenshots side by side
    de: tripsListDe,
    ru: [tripsListUs, tripsListUk],
    uk: [tripsListUs, tripsListUk],
    fr: [tripsListUs, tripsListUk],
    es: [tripsListUs, tripsListUk],
    pl: [tripsListUs, tripsListUk],
  },
  weather: {
    en: [weatherUs, weatherUk], // Two screenshots side by side
    de: weatherDe,
    ru: [weatherUs, weatherUk],
    uk: [weatherUs, weatherUk],
    fr: [weatherUs, weatherUk],
    es: [weatherUs, weatherUk],
    pl: [weatherUs, weatherUk],
  },
  android_head: {
    de: androidHeadDeviceDe,
    uk: androidHeadDeviceUk,
    en: androidHeadDeviceUk, // Fallback to UK version
    ru: androidHeadDeviceUk,
    fr: androidHeadDeviceUk,
    es: androidHeadDeviceUk,
    pl: androidHeadDeviceUk,
  },
};

/**
 * Get localized feature image(s) based on feature key and language
 * Falls back to English if language-specific image is not available
 * Returns array of images if multiple screenshots are available
 * Returns array of arrays for animated pairs (like parking)
 */
export function getLocalizedFeatureImage(
  featureKey: FeatureKey | string,
  language: Language
): string | string[] | string[][] {
  const images = featureImages[featureKey];
  
  if (!images) {
    console.warn(`No images found for feature: ${featureKey}`);
    return '';
  }

  // Try to get language-specific image
  const localizedImage = images[language];
  
  // Fallback to English if not found
  if (!localizedImage) {
    return images.en || Object.values(images)[0] || '';
  }

  return localizedImage;
}

/**
 * Get localized feature images as array (always returns array)
 * Useful for consistent handling of single and multiple images
 * For animated pairs (parking), returns the first pair
 */
export function getLocalizedFeatureImages(
  featureKey: FeatureKey | string,
  language: Language
): string[] {
  const result = getLocalizedFeatureImage(featureKey, language);
  
  // Handle nested arrays (animated pairs) - return first pair
  if (Array.isArray(result) && result.length > 0 && Array.isArray(result[0])) {
    return result[0] as string[];
  }
  
  // Handle regular arrays
  if (Array.isArray(result)) {
    return result as string[];
  }
  
  // Handle single string
  return [result];
}

/**
 * Check if feature has animated pairs (like parking)
 */
export function hasAnimatedPairs(
  featureKey: FeatureKey | string,
  language: Language
): boolean {
  const result = getLocalizedFeatureImage(featureKey, language);
  return Array.isArray(result) && result.length > 0 && Array.isArray(result[0]);
}

/**
 * Get all animated pairs for a feature
 */
export function getAnimatedPairs(
  featureKey: FeatureKey | string,
  language: Language
): string[][] {
  const result = getLocalizedFeatureImage(featureKey, language);
  
  if (Array.isArray(result) && result.length > 0 && Array.isArray(result[0])) {
    return result as string[][];
  }
  
  // If not animated, return single pair
  const images = getLocalizedFeatureImages(featureKey, language);
  return [images];
}
