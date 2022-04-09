import { Outlet } from 'react-router';
import Login from '../views/pages/Login';

const isAuth = () => { // Retorna o estado de autenticação
    return false;
};

const Authentication = () => { // Verifica se o usuário está autenticado
    const auth = isAuth();
    return auth ? <Outlet /> : <Login />; // Se estiver autenticado, retorna o componente principal, caso contrário, retorna o componente de login
};

export default Authentication;