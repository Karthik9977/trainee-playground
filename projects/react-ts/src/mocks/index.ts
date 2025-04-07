/**
 * MSW (Mock Service Worker) Setup
 * 
 * This file initializes MSW for different environments:
 * - In the browser (development): Uses a Service Worker
 * - In Node.js (testing): Uses direct request interception
 */

// Determine if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

export async function initializeMocks() {
  if (isBrowser && import.meta.env.MODE === 'development') {
    // Only load the browser worker in development mode
    const { worker } = await import('./browser');
    
    // Start the worker with specific options
    return worker.start({
      onUnhandledRequest: 'bypass', // Don't warn about unhandled requests
      serviceWorker: {
        // Customize the Service Worker registration
        url: '/mockServiceWorker.js',
        options: {
          // Scope of the Service Worker
          scope: '/',
        },
      },
    });
  }
  
  // For Node.js environment (or production), don't initialize MSW
  return Promise.resolve();
}

// Export for direct imports
export { handlers } from './handlers/index';
