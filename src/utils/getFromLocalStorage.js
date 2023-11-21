export default function getFromStorage(key) {
    if (window && window.localStorage) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (ex) {
            console.error(ex);
            return null
        }
    }
    else {
        return null
    }
}