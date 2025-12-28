/**
 * Cookie Consent Management for GDPR compliance
 * Manages user consent for analytics and other non-essential cookies
 */

export type ConsentCategories = {
  necessary: boolean;
  analytics: boolean;
};

export type ConsentValue = 'all' | 'necessary' | 'custom';

const CONSENT_COOKIE_NAME = 'cookie_consent';
const CONSENT_EXPIRY_DAYS = 365; // 1 year

/**
 * Get current consent preferences from cookie
 */
export function getConsentPreferences(): ConsentCategories | null {
  if (typeof document === 'undefined') return null;

  const cookieValue = getCookie(CONSENT_COOKIE_NAME);
  if (!cookieValue) return null;

  try {
    return JSON.parse(cookieValue) as ConsentCategories;
  } catch {
    return null;
  }
}

/**
 * Save consent preferences to cookie
 */
export function saveConsentPreferences(categories: ConsentCategories): void {
  if (typeof document === 'undefined') return;

  const value = JSON.stringify(categories);
  setCookie(CONSENT_COOKIE_NAME, value, CONSENT_EXPIRY_DAYS);

  // If analytics is disabled, remove analytics cookies
  if (!categories.analytics) {
    removeAnalyticsCookies();
  }

  // Trigger consent change event
  window.dispatchEvent(new CustomEvent('consentChanged', { detail: categories }));
}

/**
 * Accept all cookies
 */
export function acceptAllCookies(): void {
  saveConsentPreferences({
    necessary: true,
    analytics: true,
  });
}

/**
 * Accept only necessary cookies (reject analytics)
 */
export function acceptNecessaryCookies(): void {
  saveConsentPreferences({
    necessary: true,
    analytics: false,
  });

  // Remove analytics cookies if they exist
  removeAnalyticsCookies();
}

/**
 * Check if user has made a consent choice
 */
export function hasConsent(): boolean {
  return getConsentPreferences() !== null;
}

/**
 * Check if analytics is enabled
 */
export function isAnalyticsEnabled(): boolean {
  const preferences = getConsentPreferences();
  return preferences?.analytics ?? false;
}

/**
 * Reset consent (for testing or user request)
 */
export function resetConsent(): void {
  if (typeof document === 'undefined') return;

  deleteCookie(CONSENT_COOKIE_NAME);
  removeAnalyticsCookies();

  // Trigger consent change event
  window.dispatchEvent(new CustomEvent('consentChanged', { detail: null }));
}

/**
 * Remove Google Analytics cookies
 */
function removeAnalyticsCookies(): void {
  if (typeof document === 'undefined') return;

  // List of common GA cookie names
  const gaCookies = ['_ga', '_gat', '_gid', '_gat_gtag_UA_', '_gat_UA_'];

  gaCookies.forEach(name => {
    deleteCookie(name);
    // Also try to delete from all domains
    deleteCookie(name, '.' + window.location.hostname);
  });

  // Remove all cookies starting with _ga
  document.cookie.split(';').forEach(cookie => {
    const cookieName = cookie.split('=')[0].trim();
    if (cookieName.startsWith('_ga') || cookieName.startsWith('_gat') || cookieName.startsWith('_gid')) {
      deleteCookie(cookieName);
    }
  });
}

/**
 * Initialize Google Analytics if consent is given
 */
export function initializeAnalytics(): void {
  if (!isAnalyticsEnabled()) return;

  // Load Google Analytics script dynamically
  if (window.gtag) {
    // Already loaded, just update consent
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  } else {
    // Load GA script
    loadGoogleAnalytics();
  }
}

/**
 * Load Google Analytics script
 */
function loadGoogleAnalytics(): void {
  // Check if we have a GA measurement ID in env
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Google Analytics measurement ID not configured');
    return;
  }

  // Create script element
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    anonymize_ip: true, // IP anonymization for GDPR
    cookie_flags: 'SameSite=None;Secure'
  });
}

// Helper functions for cookie management
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const nameEQ = name + '=';
  const ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;

  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + date.toUTCString();

  document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax;Secure`;
}

function deleteCookie(name: string, domain?: string): void {
  if (typeof document === 'undefined') return;

  const domainStr = domain ? `;domain=${domain}` : '';
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/${domainStr}`;
}

// TypeScript declarations for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
