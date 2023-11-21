export default function setToLocalStorage(key, value) {
    if (window && window.localStorage) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (ex) {
            console.error(ex);
        }
    }
}