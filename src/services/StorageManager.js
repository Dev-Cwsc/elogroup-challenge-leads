class StorageManager {
    static readLS (key) {
        return JSON.parse(localStorage.getItem(key)); // JSON.parse interpreta o JSON e transforma em objeto
    }

    static storeLS (key, value) {
        let data = [];
        if (this.readLS(key)) {
            data = JSON.parse(localStorage.getItem(key));
        }
        data.push(value);
        localStorage.setItem(key, JSON.stringify(data)); // JSON.stringfy converte objeto em string
    }
}

export default StorageManager;