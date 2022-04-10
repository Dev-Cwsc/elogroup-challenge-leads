class StorageManager {
    static userExists (login){
        const users = this.getDataLS("users");
        return users.find(object => object.login === login) ? true : false; // Retorna true se encontrar um usuário com o login especificado, false caso contrário
    }
    
    static getDataLS (key) {
        const data = JSON.parse(localStorage.getItem(key)); // JSON.parse interpreta o JSON e transforma em objeto
        return data;
    }

    static setUserLS (login, password) {
        let users = [];
        if (this.getDataLS("users")) { // Se já existirem usuários cadastrados no localSotrage, eles serão armazenados em um array
            users = this.getDataLS("users");
            if(this.userExists(login)) { // Se o login já existir, significa que o usuário já está cadastrado
                alert("Já existe um usuário cadastrado com esse login.");
                return false;
            }
        }
        users.push({"login": login, "password": password});
        localStorage.setItem("users", JSON.stringify(users)); // JSON.stringfy converte objeto em string
        return true;
    }
}

export default StorageManager;