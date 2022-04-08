import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/pages/Login"
import NewUser from "./views/pages/NewUser"
import Leads from "./views/pages/Leads"
import NewLead from "./views/pages/NewLead"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/newLead" element={<NewLead />} />
      </Routes>
    </Router>
  );
}

export default App;
