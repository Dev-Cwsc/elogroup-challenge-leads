import { useState } from "react";
import "./css/styles.css";
import egIMG from "./components/elogroup.png";
import StorageManager from "../../services/StorageManager";

function NewLead() {
  const [leadName, setLogin] = useState("");
  const [phone, setPassword] = useState("");
  const [email, setCnfPassword] = useState("");
  const [all, setAll] = useState(false);
  const [rpa, setRpa] = useState(false);
  const [digitalProduct, setDigitalProduct] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [bpm, setBpm] = useState(false);

  const checkAll = () => {
    setAll(!all);
    setRpa(all);
    setDigitalProduct(all);
    setAnalytics(all);
    setBpm(all);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que a página seja recarregada
    if (leadName === '' || phone === '' || email === '') { // Verifica se todos os campos estão preenchidos
      alert("Preencha todos os campos."); // Se não estiverem, exibe uma mensagem de erro
      return;
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
            <h1 className="login-form-title-dark"> Dados de cadastro </h1>
            <div className="wrap-input-dark">
              <input
                className={leadName !== "" ? "has-val-dark input-dark" : "input-dark"}
                type="text"
                value={leadName}
                onChange={(e) => setLogin(e.target.value)}
              />
              <span className="focus-input-dark" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input-dark">
              <input
                className={phone !== "" ? "has-val-dark input-dark" : "input-dark"}
                type="phone"
                value={phone}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input-dark" data-placeholder="Telefone"></span>
            </div>

            <div className="wrap-input-dark">
              <input
                className={email !== "" ? "has-val-dark input-dark" : "input-dark"}
                type="email"
                value={email}
                onChange={(e) => setCnfPassword(e.target.value)}
              />
              <span className="focus-input-dark" data-placeholder="Email"></span>
            </div>
            <div className="checkbox-wrap">
              <input className="checkbox" onClick = {checkAll} value={all} type="checkbox"/> Todos <br/>
              <input className="checkbox" value={rpa} type="checkbox"/> RPA <br/>
              <input className="checkbox" value={digitalProduct} type="checkbox"/> Produto digital <br/>
              <input className="checkbox" value={analytics} type="checkbox"/> Analytics <br/>
              <input className="checkbox" value={bpm} type="checkbox"/> BPM <br/>
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