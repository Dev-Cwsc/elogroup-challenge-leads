class StorageManager {
    static readLS (key) {
        return JSON.parse(localStorage.getItem(key)); // JSON.parse interpreta o JSON e transforma em objeto
    }

    static storeLS (key, value) {
        let data = [];
        if (this.readLS(key)) { // Se já existir algum valor no localStorage, ele será armazenado em um array
            data = JSON.parse(localStorage.getItem(key));
            if(data.find(function(str){return str === value;})){
                alert("O valor já existe no localStorage");
                return false;
            }
        }
        data.push(value);
        localStorage.setItem(key, JSON.stringify(data)); // JSON.stringfy converte objeto em string
        return true;
    }
}

export default StorageManager;