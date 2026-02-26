/**
 * Altegio Widget - Dynamic Loading
 * Loads the Altegio booking widget script on demand (first booking click)
 * instead of loading it on every page load for GDPR compliance.
 */

const ALTEGIO_SCRIPT_URL = 'https://w1408290.alteg.io/widgetJS';

let scriptLoaded = false;
let scriptLoading = false;
let loadPromise: Promise<void> | null = null;

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
