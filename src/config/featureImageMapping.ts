/**
 * Mapping between feature index and image key
 * This maps the order of features in translations to the corresponding image keys
 */
export const FEATURE_IMAGE_KEYS = [
  'navigation',             // 0: Navigation That Works Under GPS Jamming
  'driving_style',          // 1: AI Driving Style Analysis
  'background_tracking',    // 2: Background GPS Tracking
  'maintenance_android',    // 3: Component Life Notifications
  'maintenance_ios',        // 4: AI-Based Lifetime Prediction
  'trips_list',             // 5: Automatic Mileage Logging
  'service_book',           // 6: Digital Service Book
  'weather',                // 7: Weather Intelligence
  'parking',                // 8: Smart Parking Assistant (3 animated pairs)
  'android_head',           // 9: Android Head Units & Multi-Device Sync
] as const;

export type FeatureImageKey = typeof FEATURE_IMAGE_KEYS[number];
