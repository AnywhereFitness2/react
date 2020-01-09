import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import WelcomePage from "./components/WelcomePage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <PrivateRoute path='/Dashboard' component={Dashboard} />
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
