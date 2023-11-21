export default function removeFromLocalStorage(key) {
  if (window && window.localStorage) {
    try {
      localStorage.removeItem(key);
    } catch (ex) {
      console.error(ex);
    }
  }
}
