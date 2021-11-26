import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Login from "../components/Login";
import Manali from '../components/Manali';
import OwnerRegisteration from '../components/OwnerRegisteration'
import Shimla from '../components/Shimla';
import TenantPage from '../components/TenantPage';

const Container = () => {
    return (
        <div>
            <Router>
            <Switch>
            <Route exact path="/" exact component={LandingPage} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/OwnerRegisteration" component={OwnerRegisteration} />
            <Route exact path="/Shimla" component={Shimla} />
            <Route exact path="/Manali" component={Manali} />
            <Route export path = "/TenantPage" component={TenantPage}/>
            <Route>404 Not Found!</Route>
            </Switch>
            </Router>
        </div>
    )
}

export default Container;