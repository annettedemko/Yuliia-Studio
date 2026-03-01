/**
 * Cookie Consent Management for GDPR compliance
 * Manages user consent for analytics, marketing, and other non-essential cookies.
 * Implements Google Consent Mode v2 + GTM loading.
 */

export type ConsentCategories = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  externalMedia: boolean;
  timestamp?: string;
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
    const parsed = JSON.parse(cookieValue) as ConsentCategories;
    // Migrate old consent without marketing field
    if (typeof parsed.marketing === 'undefined') {
      parsed.marketing = false;
    }
    // Migrate old consent without externalMedia field
    if (typeof parsed.externalMedia === 'undefined') {
      parsed.externalMedia = false;
    }
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Save consent preferences to cookie
 */
export function saveConsentPreferences(categories: ConsentCategories): void {
  if (typeof document === 'undefined') return;

  const value = JSON.stringify({ ...categories, timestamp: new Date().toISOString() });
  setCookie(CONSENT_COOKIE_NAME, value, CONSENT_EXPIRY_DAYS);

  // If analytics is disabled, remove analytics cookies
  if (!categories.analytics) {
    removeAnalyticsCookies();
  }

  // If marketing is disabled, remove marketing cookies
  if (!categories.marketing) {
    removeMarketingCookies();
  }

  // Update Google Consent Mode
  updateConsentState(categories);

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
    marketing: true,
    externalMedia: true,
  });
}

/**
 * Accept only necessary cookies (reject analytics + marketing)
 */
export function acceptNecessaryCookies(): void {
  saveConsentPreferences({
    necessary: true,
    analytics: false,
    marketing: false,
    externalMedia: false,
  });

  removeAnalyticsCookies();
  removeMarketingCookies();
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
 * Check if marketing is enabled
 */
export function isMarketingEnabled(): boolean {
  const preferences = getConsentPreferences();
  return preferences?.marketing ?? false;
}

/**
 * Check if external media (Google Maps, Instagram widget, etc.) is enabled
 */
export function isExternalMediaEnabled(): boolean {
  const preferences = getConsentPreferences();
  return preferences?.externalMedia ?? false;
}

/**
 * Reset consent (for testing or user request)
 */
export function resetConsent(): void {
  if (typeof document === 'undefined') return;

  deleteCookie(CONSENT_COOKIE_NAME);
  removeAnalyticsCookies();
  removeMarketingCookies();

  // Trigger consent change event
  window.dispatchEvent(new CustomEvent('consentChanged', { detail: null }));
}

// ---------------------------------------------------------------------------
// Google Tag Manager + Consent Mode v2
// ---------------------------------------------------------------------------

/**
 * Initialize Google Tag Manager with Consent Mode v2 defaults.
 * This MUST be called early — it sets all consent signals to "denied"
 * before GTM loads, then updates if the user has already consented.
 */
export function initializeGTM(): void {
  if (typeof window === 'undefined') return;

  const gtmId = import.meta.env.VITE_GTM_ID;
  if (!gtmId) return; // No GTM ID configured — skip silently
  if (window._gtmLoaded) return; // Already loaded

  // 1. Initialize dataLayer + gtag helper BEFORE GTM
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  // 2. Set Consent Mode v2 defaults — everything denied until user consents
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  });

  // 3. If user has already consented, update immediately
  const prefs = getConsentPreferences();
  if (prefs) {
    updateConsentState(prefs);
  }

  // 4. Load GTM script
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);

  window._gtmLoaded = true;
}

/**
 * Update Google Consent Mode signals based on user preferences.
 */
function updateConsentState(prefs: ConsentCategories): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', {
    analytics_storage: prefs.analytics ? 'granted' : 'denied',
    ad_storage: prefs.marketing ? 'granted' : 'denied',
    ad_user_data: prefs.marketing ? 'granted' : 'denied',
    ad_personalization: prefs.marketing ? 'granted' : 'denied',
  });
}

/**
 * Push a custom event to the GTM dataLayer.
 */
export function pushToDataLayer(event: string, params?: Record<string, string>): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

// ---------------------------------------------------------------------------
// Cookie cleanup helpers
// ---------------------------------------------------------------------------

/**
 * Remove Google Analytics cookies
 */
function removeAnalyticsCookies(): void {
  if (typeof document === 'undefined') return;

  const gaCookies = ['_ga', '_gat', '_gid', '_gat_gtag_UA_', '_gat_UA_'];

  gaCookies.forEach(name => {
    deleteCookie(name);
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
 * Remove Google Ads / marketing cookies
 */
function removeMarketingCookies(): void {
  if (typeof document === 'undefined') return;

  const marketingCookies = ['_gcl_au', '_gcl_aw', '_gac_'];

  marketingCookies.forEach(name => {
    deleteCookie(name);
    deleteCookie(name, '.' + window.location.hostname);
  });

  // Remove all cookies starting with _gcl or _gac
  document.cookie.split(';').forEach(cookie => {
    const cookieName = cookie.split('=')[0].trim();
    if (cookieName.startsWith('_gcl') || cookieName.startsWith('_gac')) {
      deleteCookie(cookieName);
    }
  });
}

// ---------------------------------------------------------------------------
// Low-level cookie helpers
// ---------------------------------------------------------------------------

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

// TypeScript declarations are in src/vite-env.d.ts
