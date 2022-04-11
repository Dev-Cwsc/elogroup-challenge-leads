class StorageManager {
    static userExists (login){
        const users = this.getDataLS("users"); // Retorna os usuários cadastrados no localStorage
        return users.find(object => object.login === login) ? true : false; // Retorna true se encontrar um usuário com o login especificado, false caso contrário
    }

    static getUserLS (login, password) {
        const users = this.getDataLS("users");
        return users.find(object => object.login === login && object.password === password); // Retorna o usuário com o login e senha especificados, ou false caso contrário
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

    static setLeadsLS (leadName, phone, email, rpa, digitalProduct, analytics, bpm) {
        let leads = [];
        if (this.getDataLS("leads")) { // Se já existirem leads cadastrados no localSotrage, eles serão armazenados em um array
            leads = this.getDataLS("leads");
        }
        leads.push({"name": leadName, "phone": phone, "email": email, "oportunities": rpa, digitalProduct, analytics, bpm, "status": "Cliente em potencial"});
        localStorage.setItem("leads", JSON.stringify(leads)); // JSON.stringfy converte objeto em string
        return true;
    }

    static getLeadsLS () {
        const leads = this.getDataLS("leads");
        return leads;
    }

    static updateStateLeadLS (id, state) {
        let leads;
        if (leads = this.getDataLS("leads")){
            leads[id].status = state;
            localStorage.setItem("leads", JSON.stringify(leads));
        }
    }

    static setAuthenticationSS (login, password) {
        const user = this.getUserLS(login, password); // Busca o usuário no localStorage
        if (user) { // Se o usuário existir, ele será armazenado no sessionStorage
            sessionStorage.setItem("authenticated", JSON.stringify(login));
            return true; // Retorna true para confirmar que o usuário foi autenticado
        } else {
            alert("Usuário ou senha inválidos.");
            return false; // Retorna false se o usuário não existir no localStorage
        }
    }

    static getAuthenticationSS () {
        return JSON.parse(sessionStorage.getItem("authenticated")) ? true : false; // Retorna true se houver um usuário estiver autenticado no momento, false caso contrário
    }

    static clearAuthenticationSS () {
        sessionStorage.clear(); // Limpa o sessionStorage
    }

    static getLoggedUser () {
        return JSON.parse(sessionStorage.getItem("authenticated")); // Retorna o login do usuário autenticado
    }
}

export default StorageManager;