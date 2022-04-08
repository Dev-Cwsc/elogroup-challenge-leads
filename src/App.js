import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./views/pages/login"
import NewUser from "./views/pages/newUser"
import Leads from "./views/pages/leads"
import NewLead from "./views/pages/newLead"

function App() {
    return(
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
