import { useState } from "react";
import "./css/styles.css";
import egIMG from "./components/elogroup.png";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <div className="header-form-img">
            <img src={egIMG} className="img-elogroup" alt="EloGroup" />
          </div>
          <form className="login-form">
            <span className="login-form-title"> Cadastro de novo Usuário </span>
            <div className="wrap-input">
              <input
                className={login !== "" ? "has-val input" : "input"}
                type="email"
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