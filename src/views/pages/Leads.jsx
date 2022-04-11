import "./css/styles.css";
import egIMG from "./components/elogroup.png";
import StorageManager from "../../services/StorageManager";
import { useState } from "react";

function Leads() {
  // hooks
  let [leadList, updateLeadList] = useState(StorageManager.getLeadsLS());
  //let leadList = StorageManager.getLeadsLS();

  const mouseDragEnd = (e) => {
    e.preventDefault();
    leadList[e.target.id].status = "Dados confirmados";
    let leadListCopy = [...leadList];
    updateLeadList(leadListCopy);
  }

  const exitHandler = () => {
    window.location.href = "/"; // Redireciona para a página de login
    StorageManager.clearAuthenticationSS(); // Limpa o armazenamento de autenticação
  }

  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="nav-bar-logo-wrap" onClick={() => window.location.href = "/Leads"}> {/* Ao clicar no logo, redireciona para a página de manutenção de leads */}
          <img src={egIMG} className="img-elogroup" alt="EloGroup" />
        </div>
        <div className="nav-bar-txt-welcome-wrap">
          <h1 className="nav-bar-txt-welcome"> Bem vindo(a) {`${StorageManager.getLoggedUser()}!`} </h1>
        </div>
        <div className="nav-bar-btn-wrap">
          <button onClick={() => window.location.href = "/newLead"} className="nav-bar-btn">Novo Lead</button>
        </div>
        <div className="nav-bar-btn-wrap">
          <button onClick={exitHandler} className="nav-bar-btn">Sair</button>
        </div>
      </nav>
      <div className="container-login">
        <table>
          <thead>
            <tr>
              <th>Cliente em Potencial</th>
              <th>Dados Confirmados</th>
              <th>Reunião Agendada</th>
            </tr>
          </thead>
          <tbody>
            {leadList.map((value, index) => {
              if (value.status === "Cliente em potencial") {
                return (<tr key={index}>
                  <td id={index} draggable={true} onDragEnd={mouseDragEnd}>{value.name}</td>
                  <td></td>
                  <td></td>
                </tr>)
              }
              if (value.status === "Dados confirmados") {
                return (<tr key={index}>
                  <td></td>
                  <td id={index} draggable={true} onDragEnd={mouseDragEnd}>{value.name}</td>
                  <td></td>
                </tr>)
              }
              if (value.status === "Reunião agendada") {
                return (<tr key={index}>
                  <td></td>
                  <td></td>
                  <td id={index} draggable={true} onDragEnd={mouseDragEnd}>{value.name}</td>
                </tr>)
              }
              return <></>
            })}
          </tbody>
          </table>
      </div>
    </div>
  );
}

export default Leads;