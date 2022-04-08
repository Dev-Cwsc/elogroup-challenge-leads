import {React} from "react"
import {Route, BrowserRouter} from "react-router-dom"

import Login from "./views/pages/login"
import Register from "./views/pages/register"
import Leads from "./views/pages/leads"
import NewLead from "./views/pages/newLead"

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = {Login}  path = "/" exact/>
            <Route component = {Register} path = "/register"/>
            <Route component = {Leads} path = "/leads"/>
            <Route component = {NewLead} path = "/newlead"/>
        </BrowserRouter>
    )
 }
 
 export default Routes;