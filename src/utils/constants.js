export const APP_NAME = 'NutriLens';

export const HEALTH_CONDITIONS = [
  { id: 'diabetes', name: 'Diabetes' },
  { id: 'highBloodPressure', name: 'High Blood Pressure' },
  { id: 'heartDisease', name: 'Heart Disease' },
  { id: 'kidneyDisease', name: 'Kidney Disease' },
  { id: 'highCholesterol', name: 'High Cholesterol' },
];

export const ALLERGIES = [
  { id: 'dairy', name: 'Dairy' },
  { id: 'egg', name: 'Egg' },
  { id: 'treeNuts', name: 'Tree Nuts' },
  { id: 'fish', name: 'Fish' },
  { id: 'gluten', name: 'Gluten' },
  { id: 'wheat', name: 'Wheat' },
  { id: 'sesame', name: 'Sesame' },
  { id: 'seafood', name: 'Seafood' },
  { id: 'peanuts', name: 'Peanuts' },
  { id: 'soy', name: 'Soy' },
];

export const DIET_PREFERENCES = [
  { id: 'non-vegetarian', name: 'Non-Vegetarian' },
  { id: 'vegetarian', name: 'Vegetarian' },
  { id: 'vegan', name: 'Vegan' },
];

export const SCAN_MODES = {
  PRODUCE: 'produce',
  LABEL: 'label',
};

export const SAFETY_STATUS = {
  SAFE: 'safe',
  WARNING: 'warning',
  UNSAFE: 'unsafe',
};

export const PERFORMANCE_THRESHOLDS = {
  TARGET_FPS: 15,
  INFERENCE_TIMEOUT_MS: 2000,
  OCR_TIMEOUT_MS: 3000,
  RESULT_DISPLAY_TIMEOUT_MS: 3000,
};
