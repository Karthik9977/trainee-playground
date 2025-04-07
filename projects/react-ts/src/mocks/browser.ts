import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);

// Make the worker available globally for debugging
declare global {
  interface Window {
    msw: {
      worker: ReturnType<typeof setupWorker>;
    };
  }
}

if (typeof window !== 'undefined') {
  window.msw = { worker };
}
