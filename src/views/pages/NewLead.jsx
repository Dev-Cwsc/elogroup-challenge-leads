import { useState } from "react";
import "./css/styles.css";
import egIMG from "./components/elogroup.png";
import StorageManager from "../../services/StorageManager";

function NewLead() {
  const [login, setLogin] = useState(""); // Estado de login
  const [password, setPassword] = useState(""); // Estado de senha
  const [cnfPassword, setCnfPassword] = useState(""); // Estado de confirmação de senha

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que a página seja recarregada
    if (login === '' || password === '' || cnfPassword === '') { // Verifica se todos os campos estão preenchidos
      alert("Preencha todos os campos."); // Se não estiverem, exibe uma mensagem de erro
      return;
    } else if (password !== cnfPassword) { // Verifica se as senhas são iguais
      alert("As senhas não conferem."); // Se não forem, exibe uma mensagem de erro
      return;
    } else if (StorageManager.setUserLS(login, password)) { // Se todos os campos estiverem preenchidos e as senhas forem iguais, salva o usuário no localStorage
      alert('Usuário e senha cadastrados com sucesso!'); // Exibe uma mensagem de sucesso
      setLogin(""); // Limpa os campos
      setPassword("");
      setCnfPassword("");
      window.location.href = "/"; // Redireciona para a página principal
    } else { // Se não conseguir fazer o cadastro corretamente exibe uma mensagem de erro
      alert('Erro ao cadastrar usuário e senha');
    }
  }

  const exitHandler = () => {
    window.location.href = "/"; // Redireciona para a página de login
    StorageManager.clearAuthenticationSS(); // Limpa o armazenamento de autenticação
  }
  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="nav-bar-logo" onClick={() => window.location.href = "/Leads"}> {/* Ao clicar no logo, redireciona para a página de manutenção de leads */}
          <img src={egIMG} className="img-elogroup" alt="EloGroup" />
        </div>
        <div className="nav-bar-txt-welcome-wrap">
          <h1 className="nav-bar-txt-welcome"> Cadastrar novo Lead </h1>
        </div>
        <div className="nav-bar-btn-wrap">
          <button onClick={() => window.location.href = "/leads"} className="nav-bar-btn">Cancelar</button>
        </div>
        <div className="nav-bar-btn-wrap">
          <button onClick={exitHandler} className="nav-bar-btn">Sair</button>
        </div>
      </nav>
      <div className="container-login">
        <div className="wrap-login-white">
          <div className="container-header-form-img"></div>
          <form className="login-form" onSubmit={handleSubmit}> {/* Função manipuladora que é acionada ao submeter o formulário de cadastro */}
            <div className="wrap-input-dark">
              <input
                className={login !== "" ? "has-val-dark input-dark" : "input-dark"}
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <span className="focus-input-dark" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input-dark">
              <input
                className={password !== "" ? "has-val-dark input-dark" : "input-dark"}
                type="phone"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input-dark" data-placeholder="Telefone"></span>
            </div>

            <div className="wrap-input-dark">
              <input
                className={cnfPassword !== "" ? "has-val-dark input-dark" : "input-dark"}
                type="email"
                value={cnfPassword}
                onChange={(e) => setCnfPassword(e.target.value)}
              />
              <span className="focus-input-dark" data-placeholder="Email"></span>
            </div>
            <div className="container-login-form-btn-leads">
              <button className="form-btn">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewLead;