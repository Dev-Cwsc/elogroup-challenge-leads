import { useState } from "react";
import "./css/styles.css";
import egIMG from "./components/elogroup.png";
import StorageManager from "../../services/StorageManager";

function NewLead() {
  // hooks
  const [leadName, setLogin] = useState("");
  const [phone, setPassword] = useState("");
  const [email, setCnfPassword] = useState("");
  const [checkBoxes, setAll] = useState(
    {
      "rpa": false,
      "digitalProdutct": false,
      "analytics": false,
      "bpm": false
    }
  );

  const handleCheck = (e) => { // Função para atualizar o estado de checkbox
    if(e.target.name==="all"){ // Se o checkbox for o "all", marca ou desmarca todas as outras
      setAll({
        "rpa": e.target.checked,
        "digitalProdutct": e.target.checked,
        "analytics": e.target.checked,
        "bpm": e.target.checked
      });
    } else { // Se não for o "all", atualiza o estado de acordo com o checkbox clicado
      setAll({
        ...checkBoxes,
        [e.target.name]: e.target.checked
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que a página seja recarregada
    if (leadName === '' || phone === '' || email === '') { // Verifica se todos os campos estão preenchidos
      alert("Preencha todos os campos."); // Se não estiverem, exibe uma mensagem de erro
      return;
    } else if (StorageManager.setLeadsLS(leadName, phone, email, {...checkBoxes})) { // Se todos os campos estiverem preenchidos, verifica se o lead foi cadastrado
      alert("Lead cadastrado com sucesso!"); // Se o lead foi cadastrado, exibe uma mensagem de sucesso
      console.log({...checkBoxes});
      window.location.href = "/Leads"; // Redireciona para a página de manutenção de leads
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
            <span> Oportunidades: </span>
            <div className="checkbox-wrap">
              <input className="checkbox" name="all" onChange={handleCheck} checked={checkBoxes.all} type="checkbox" /> Todos <br />
              <input className="checkbox" name="rpa" onChange={handleCheck} checked={checkBoxes.rpa} type="checkbox" /> RPA <br />
              <input className="checkbox" name="digitalProduct" onChange={handleCheck} checked={checkBoxes.digitalProdutct} type="checkbox" /> Produto digital <br />
              <input className="checkbox" name="analytics" onChange={handleCheck} checked={checkBoxes.analytics} type="checkbox" /> Analytics <br />
              <input className="checkbox" name="bpm" onChange={handleCheck} checked={checkBoxes.bpm} type="checkbox" /> BPM <br />
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