import { Outlet } from 'react-router';
import Login from '../views/pages/Login';
import StorageManager from "../services/StorageManager";

const isAuth = () => { // Retorna o estado de autenticação
    return StorageManager.getAuthenticationSS();
};

const Authentication = () => { // Verifica se o usuário está autenticado
    return isAuth() ? <Outlet /> : <Login />; // Se estiver autenticado, retorna o componente principal, caso contrário, retorna o componente de login
};

export default Authentication;