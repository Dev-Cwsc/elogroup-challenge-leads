import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./views/pages/Login"
import NewUser from "./views/pages/NewUser"
import Leads from "./views/pages/Leads"
import NewLead from "./views/pages/NewLead"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={<Login />} />
        <Route path="/newUser" component={NewUser} />
        <Route path="/leads" component={Leads} />
        <Route path="/newLead" component={NewLead} />
      </Routes>
    </Router>
  );
}

export default App;
