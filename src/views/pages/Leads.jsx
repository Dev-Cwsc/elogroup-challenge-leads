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
        <div className="nav-bar-logo-wrap" onClick={() => window.location.href = "/Leads"}> {/* Ao clicar no logo, redireciona para a página de manutenção de leads */}
          <img src={egIMG} className="img-elogroup" alt="EloGroup" />
        </div>
        <div className="nav-bar-txt-welcome-wrap">
          <h1 className="nav-bar-txt-welcome"> Bem vindo {`${StorageManager.getLoggedUser()}!`} </h1>
        </div>
        <div className="nav-bar-btn-wrap">
          <button onClick={() => window.location.href = "/newLead"} className="nav-bar-btn">Novo Lead</button>
        </div>
        <div className="nav-bar-btn-wrap">
          <button onClick={exitHandler} className="nav-bar-btn">Sair</button>
        </div>
      </nav>
      <div className="container-login">
        {/*<Table striped bordered hover >
          <thead>
            <tr>
              <th>Cliente em Potencial</th>
              <th>Dados Confirmados</th>
              <th>Reunião Agendada</th>
            </tr>
          </thead>
          <tbody>
            {this.state.leadList.map((value, index) => {
              if (value.Status === "Cliente em Potencial") {
                return (<tr key={index}>
                  <td id={index} draggable={true} onDragEnd={this.mouseDragEnd}>{value.name}</td>
                  <td></td>
                  <td></td>
                </tr>)
              }
              if (value.Status === "Dados Confirmados") {
                return (<tr key={index}>
                  <td></td>
                  <td id={index} draggable={true} onDragEnd={this.mouseDragEnd}>{value.name}</td>
                  <td></td>
                </tr>)
              }
              if (value.Status === "Reuniao Agendada") {
                return (<tr key={index}>
                  <td></td>
                  <td></td>
                  <td id={index} draggable={true} onDragEnd={this.mouseDragEnd}>{value.name}</td>
                </tr>)
              }
              return <></>
            })}
          </tbody>
          </Table>*/}
      </div>
    </div>
  );
}

export default Leads;