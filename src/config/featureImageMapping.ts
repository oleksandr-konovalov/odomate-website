/**
 * Mapping between feature index and image key
 * This maps the order of features in translations to the corresponding image keys
 */
export const FEATURE_IMAGE_KEYS = [
  'driving_style',          // 0: AI Driving Style Analysis
  'gps',                    // 1: Live Navigation
  'maintenance_android',    // 2: Component Life Notifications
  'maintenance_ios',        // 3: AI-Based Lifetime Prediction
  'trips_list',             // 4: Automatic Mileage Logging
  'service_book',           // 5: Digital Service Book
  'weather',                // 6: Weather Intelligence
  'parking',                // 7: Smart Parking Assistant (3 animated pairs)
  'android_head',           // 8: Android Head Units & Multi-Device Sync
] as const;

export type FeatureImageKey = typeof FEATURE_IMAGE_KEYS[number];
