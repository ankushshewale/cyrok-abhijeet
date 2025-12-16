import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => {
  // Error handling - in production, consider sending to error tracking service
  if (typeof window !== 'undefined') {
    // Only log in development
    if (!window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1')) {
      // In production, send to error tracking service instead
      return;
    }
  }
  // Fallback for SSR
  if (typeof console !== 'undefined') {
    console.error('Application bootstrap failed:', err);
  }
});
