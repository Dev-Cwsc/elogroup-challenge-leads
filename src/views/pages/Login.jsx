import { useState } from "react";
import "./css/styles.css";
import egIMG from "./components/elogroup.png";

function teste(){
  alert('teste');
}

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <div className="header-form-img">
            <img src={egIMG} className="img-elogroup" alt="EloGroup" />
          </div>
          <form className="login-form" onSubmit={teste}>
            <span className="login-form-title"> Sistema de Manutenção de Leads </span>
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

            <div className="container-login-form-btn">
              <button className="form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui cadastro? </span>
              <a className="txt2" href="/newUser">
                Cadastrar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;