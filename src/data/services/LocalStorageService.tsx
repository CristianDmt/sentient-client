export default class LocalStorageService {
  static saveToLocalStorage(key: string, data: object | null, expirationMinutes: number = 60): object | null {
    try {
      let expirationMs = expirationMinutes * 60 * 1000;
      let record = {
        value: JSON.stringify(data),
        timestamp: new Date().getTime() + expirationMs
      };

      let serializedRecord = JSON.stringify(record);
      localStorage.setItem(key, serializedRecord);

      return data;
    } catch (err) {
      console.log("Could not save to local storage. Check your browser settings.");
      return null;
    }
  }

  static loadFromLocalStorage(key: string) {
    try {
      const serializedRecord = localStorage.getItem(key);
      if (serializedRecord === null) {
        return undefined;
      } else {
        let record = JSON.parse(serializedRecord);
        let data = (new Date().getTime() < record.timestamp && JSON.parse(record.value));
        if (data === {} || data === undefined || data === false) {
          localStorage.removeItem(key);
          data = undefined;
        }

        return data;
      }
    } catch (err) {
      console.log("Error loading from local storage. Please check your browser settings.");
      return undefined;
    }
  }
}