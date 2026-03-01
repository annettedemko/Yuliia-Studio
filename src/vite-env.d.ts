/// <reference types="vite/client" />

interface Window {
  yWidget?: {
    show: (url?: string) => void;
    href?: string;
  };
  dataLayer: any[];
  gtag: (...args: any[]) => void;
  _gtmLoaded?: boolean;
}
