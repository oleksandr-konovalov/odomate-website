/**
 * Mapping between feature index and image key
 * This maps the order of features in translations to the corresponding image keys
 */
export const FEATURE_IMAGE_KEYS = [
  'gps',                    // 0: Live Navigation
  'trips_list',             // 1: Automatic Mileage Logging
  'maintenance_android',    // 2: Component Life Notifications
  'maintenance_ios',        // 3: AI-Based Lifetime Prediction
  'service_book',           // 4: Digital Service Book
  'weather',                // 5: Weather Intelligence
  'parking',                // 6: Smart Parking Assistant (3 animated pairs)
  'android_head',           // 7: Android Head Units & Multi-Device Sync
] as const;

export type FeatureImageKey = typeof FEATURE_IMAGE_KEYS[number];
