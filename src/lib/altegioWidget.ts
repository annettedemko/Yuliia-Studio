/**
 * Altegio Widget - Dynamic Loading
 * Loads the Altegio booking widget script on demand (first booking click)
 * instead of loading it on every page load for GDPR compliance.
 */

const ALTEGIO_SCRIPT_URL = 'https://w1408290.alteg.io/widgetJS';
const ALTEGIO_ORIGIN = 'https://w1408290.alteg.io';

let scriptLoaded = false;
let scriptLoading = false;
let loadPromise: Promise<void> | null = null;
let postMessageListenerAdded = false;

/** Hide the default Altegio floating button (we use our own FloatingBookButton). */
function hideDefaultButton(): void {
  const btn = document.querySelector('.yButton') as HTMLElement | null;
  if (btn) {
    btn.style.setProperty('display', 'none', 'important');
  }
  // Also observe for late-created buttons
  const observer = new MutationObserver(() => {
    const el = document.querySelector('.yButton') as HTMLElement | null;
    if (el && el.style.display !== 'none') {
      el.style.setProperty('display', 'none', 'important');
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  // Stop observing after 5s to avoid permanent overhead
  setTimeout(() => observer.disconnect(), 5000);
}

/**
 * Add a speculative postMessage listener for Altegio iframe events.
 * The Altegio widget may send events we can use for conversion tracking.
 */
function addPostMessageListener(): void {
  if (postMessageListenerAdded) return;
  postMessageListenerAdded = true;

  window.addEventListener('message', (event) => {
    if (event.origin !== ALTEGIO_ORIGIN) return;

    console.log('[Altegio postMessage]', event.data);

    // Try to parse if string
    const data = typeof event.data === 'string'
      ? (() => { try { return JSON.parse(event.data); } catch { return null; } })()
      : event.data;

    // If we discover a booking-completed event, push to dataLayer
    if (data && (data.event === 'booked' || data.type === 'booked')) {
      window.dataLayer?.push({
        event: 'altegio_booked',
        event_category: 'booking',
        event_label: 'completed',
      });
    }
  });
}

function loadScript(): Promise<void> {
  if (scriptLoaded && window.yWidget) {
    return Promise.resolve();
  }

  if (scriptLoading && loadPromise) {
    return loadPromise;
  }

  scriptLoading = true;
  loadPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = ALTEGIO_SCRIPT_URL;
    script.charset = 'UTF-8';
    script.async = true;

    script.onload = () => {
      scriptLoaded = true;
      scriptLoading = false;
      // Small delay to ensure widget initializes, then hide its default button
      setTimeout(() => {
        hideDefaultButton();
        resolve();
      }, 300);
    };

    script.onerror = () => {
      scriptLoading = false;
      loadPromise = null;
      reject(new Error('Failed to load Altegio widget'));
    };

    document.body.appendChild(script);
  });

  return loadPromise;
}

/**
 * Show the Altegio booking widget.
 * Dynamically loads the script on first call.
 */
export async function showBookingWidget(): Promise<void> {
  // Push micro-conversion event to dataLayer (book_click)
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'book_click',
      event_category: 'booking',
      event_label: window.location.pathname,
    });
  }

  // Set up postMessage listener to discover any Altegio iframe events
  addPostMessageListener();

  try {
    await loadScript();
    if (window.yWidget) {
      window.yWidget.show(window.yWidget.href);
    }
  } catch (error) {
    console.error('Altegio widget error:', error);
    // Fallback: open booking page directly
    window.open('https://w1408290.alteg.io/', '_blank');
  }
}
