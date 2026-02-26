import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

type Lang = 'de' | 'ru';

const translations: Record<Lang, {
  title: string;
  message: string;
  reload: string;
  home: string;
}> = {
  de: {
    title: 'Etwas ist schiefgelaufen',
    message:
      'Entschuldigung, es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie, die Seite neu zu laden.',
    reload: 'Seite neu laden',
    home: 'Zur Startseite',
  },
  ru: {
    title: 'Что-то пошло не так',
    message:
      'Извините, произошла непредвиденная ошибка. Пожалуйста, попробуйте перезагрузить страницу.',
    reload: 'Перезагрузить страницу',
    home: 'На главную',
  },
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error);
    console.error('Component stack:', errorInfo.componentStack);
  }

  private detectLanguage(): Lang {
    if (typeof window !== 'undefined') {
      return window.location.pathname.startsWith('/ru') ? 'ru' : 'de';
    }
    return 'de';
  }

  private handleReload = (): void => {
    window.location.reload();
  };

  private handleGoHome = (): void => {
    const lang = this.detectLanguage();
    window.location.href = `/${lang}`;
  };

  render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const lang = this.detectLanguage();
    const t = translations[lang];

    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-accent/20 to-background px-4">
        <div className="w-full max-w-md text-center">
          {/* Decorative icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-rose-gold/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-rose-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="mb-3 text-2xl font-bold text-primary sm:text-3xl">
            {t.title}
          </h1>

          {/* Message */}
          <p className="mb-8 text-base text-muted-foreground sm:text-lg">
            {t.message}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={this.handleReload}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-rose-gold px-6 text-sm font-medium text-white shadow-rose transition-colors hover:bg-rose-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2"
            >
              {t.reload}
            </button>
            <button
              onClick={this.handleGoHome}
              className="inline-flex h-11 items-center justify-center rounded-lg border border-rose-gold/30 bg-background px-6 text-sm font-medium text-rose-gold transition-colors hover:bg-rose-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2"
            >
              {t.home}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
