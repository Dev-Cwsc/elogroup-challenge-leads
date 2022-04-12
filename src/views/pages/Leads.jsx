import "./css/styles.css";
import egIMG from "./components/elogroup.png";
import StorageManager from "../../services/StorageManager";
import { useState } from "react";

function Leads() {
  // hooks
  let [leadList, updateLeadList] = useState(StorageManager.getLeadsLS());

  const mouseDragHandler = (e) => { // Função para arrastar o elemento
    e.preventDefault();
    if (window.confirm("Realmente deseja avançar uma etapa? Esta ação não poderá ser desfeita.")) {
      leadList = StorageManager.updateStateLeadLS(e.target.id);
      updateLeadList(leadList);
      window.location.reload(false);
    }
  }

  const exitHandler = () => {
    window.location.href = "/"; // Redireciona para a página de login
    StorageManager.clearAuthenticationSS(); // Limpa o armazenamento de autenticação
  }

  const verification = () => { // Função para verificar se existem leads cadastrados
    if (!leadList) return (<></>)
    return leadList.map((value, index) => {
      if (value.status === "Cliente em potencial") { // Se o status for igual ao valor "Cliente em potencial", posiciona na primeira coluna
        return (<tr key={index}>
          <td className="table-cell" id={index} draggable={true} onDragEnd={mouseDragHandler}>{value.name}</td>
          <td className="table-cell" ></td>
          <td className="table-cell" ></td>
        </tr>)
      }
      if (value.status === "Dados confirmados") { // Se o status for igual ao valor "Dados confirmados", posiciona na segunda coluna
        return (<tr key={index}>
          <td className="table-cell"></td>
          <td className="table-cell" id={index} draggable={true} onDragEnd={mouseDragHandler}>{value.name}</td>
          <td className="table-cell" ></td>
        </tr>)
      }
      if (value.status === "Reunião agendada") { // Se o status for igual ao valor "Reunião agendada", posiciona na terceira coluna
        return (<tr key={index}>
          <td className="table-cell"></td>
          <td className="table-cell"></td>
          <td className="table-cell" id={index} draggable={true} onDragEnd={mouseDragHandler}>{value.name}</td>
        </tr>)
      }
      return <></>
    })
  }

  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="container-nav-bar-logo" onClick={() => window.location.href = "/Leads"}> {/* Ao clicar no logo, redireciona para a página de manutenção de leads */}
          <img src={egIMG} className="img-elogroup" alt="EloGroup" />
        </div>
        <div className="container-nav-bar-txt-welcome">
          <h1 className="nav-bar-txt-welcome"> Bem vindo(a) {`${StorageManager.getLoggedUser()}!`} </h1>
        </div>
        <div className="container-nav-bar-btn">
          <button onClick={() => window.location.href = "/newLead"} className="nav-bar-btn">Novo Lead</button>
        </div>
        <div className="container-nav-bar-btn">
          <button onClick={exitHandler} className="nav-bar-btn">Sair</button>
        </div>
      </nav>
      <div className="container-nav-bar">
        <div className="wrapper-login-white">
          <h1 className="login-form-title-dark"> Manutenção de Leads </h1>
          <table className="table">
            <thead className="table">
              <tr className="table">
                <th className="table">Cliente em Potencial</th>
                <th className="table">Dados Confirmados</th>
                <th className="table">Reunião Agendada</th>
              </tr>
            </thead>
            <tbody>
              {
                verification()
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leads;