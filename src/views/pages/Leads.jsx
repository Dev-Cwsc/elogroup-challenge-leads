import "./css/styles.css";
import egIMG from "./components/elogroup.png";
import StorageManager from "../../services/StorageManager";

function Leads() {
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
        <div className="nav-bar-btn-wrap">
          <button onClick={exitHandler} className="nav-bar-btn">Sair</button>
        </div>
        <div className="nav-bar-btn-wrap">
          <button onClick={() => window.location.href = "/newLead"} className="nav-bar-btn">Novo Lead</button>
        </div>
        <div className="nav-bar-txt-welcome-wrap">
          <h1 className="nav-bar-txt-welcome"> Bem vindo {`${StorageManager.getLoggedUser()}!`} </h1>
        </div>
      </nav>
      <div className="container-login">
        
      </div>
    </div>
  );
}

export default Leads;