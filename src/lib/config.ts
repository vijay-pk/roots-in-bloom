// Centralized Pricing Configuration
// Update these values or let the system calculate dynamic discounts
export const PRODUCT_PRICE = "275";
export const ORIGINAL_PRICE = "499";

// Calculate dynamic savings percentage
export const SAVINGS_PERCENTAGE = Math.round(
  ((Number(ORIGINAL_PRICE) - Number(PRODUCT_PRICE)) / Number(ORIGINAL_PRICE)) * 100
);

export const AMAZON_PRODUCT_URL =
  "https://www.amazon.in/Prakrithi-Roots-Herbal-Hair-Oil/dp/B0H74RD947";
