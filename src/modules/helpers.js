export function isDev() {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return true;
  }

  return false;
}

export function handleError(error) {
  console.error(error);
}
