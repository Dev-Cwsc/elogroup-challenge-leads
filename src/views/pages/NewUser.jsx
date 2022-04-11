import { useState } from "react";
import "./css/styles.css";
import StorageManager from "../../services/StorageManager";
import egIMG from "./components/elogroup.png";

function Login() {
  const [login, setLogin] = useState(""); // Estado de login
  const [password, setPassword] = useState(""); // Estado de senha
  const [cnfPassword, setCnfPassword] = useState(""); // Estado de confirmação de senha
  const regexTest = RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"); // Regex para testar a senha

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que a página seja recarregada
    if (login === '' || password === '' || cnfPassword === '') { // Verifica se todos os campos estão preenchidos
      alert("Preencha todos os campos."); // Se não estiverem, exibe uma mensagem de erro
      return;
    } else if (password !== cnfPassword) { // Verifica se as senhas são iguais
      alert("As senhas não conferem."); // Se não forem, exibe uma mensagem de erro
      return;
    } else if (!regexTest.test(password)) { // Se a senha não estiver no padrão
      alert("A senha deve conter pelo menos 8 caracteres, 1 letra, 1 número e 1 caractere especial."); // Exibe uma mensagem de erro
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

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <div className="container-header-form-img">
            <img src={egIMG} className="img-elogroup" alt="EloGroup" />
          </div>
          <form className="login-form" onSubmit={handleSubmit}> {/* Função manipuladora que é acionada ao submeter o formulário de cadastro */}
            <h1 className="login-form-title"> Cadastro de novo Usuário </h1>
            <div className="wrap-input">
              <input
                className={login !== "" ? "has-val input" : "input"}
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Login"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="wrap-input">
              <input
                className={cnfPassword !== "" ? "has-val input" : "input"}
                type="password"
                value={cnfPassword}
                onChange={(e) => setCnfPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Confirme sua senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="form-btn">Cadastrar</button>
            </div>

            <div className="text-center">
              <span className="txt1">Já possui cadastro? </span>
              <a className="txt2" href="/">
                Entrar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;