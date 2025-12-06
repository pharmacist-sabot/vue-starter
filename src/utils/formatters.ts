// src/utils/formatters.ts

/**
 * Format a number as a currency string.
 * @param amount - The number to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale string (default: 'en-US')
 */
export function formatCurrency(
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US',
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format a date object or string into a readable date string.
 * @param date - The date to format
 * @param locale - The locale string (default: 'en-US')
 * @param options - Intl.DateTimeFormatOptions
 */
export function formatDate(
  date: Date | string | number,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
): string {
  const dateObj = new Date(date);
  // Check for invalid date
  if (Number.isNaN(dateObj.getTime())) {
    return '-';
  }
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Compact number formatting for large numbers (e.g., 1.2k, 1M).
 */
export function formatCompactNumber(
  number: number,
  locale: string = 'en-US',
): string {
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1,
  }).format(number);
}
