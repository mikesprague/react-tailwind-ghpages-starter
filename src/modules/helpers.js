import { register } from 'register-service-worker';

export function isDev() {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return true;
  }
  return false;
}

export function handleError(error) {
  console.error(error);
}

export function initServiceWorker() {
  register('/service-worker.js', {
    updated(registration) {
      console.log(`Updated to the latest version.\n${registration}`);
      window.location.reload(true);
    },
    offline() {
      console.info('No internet connection found. App is currently offline.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
