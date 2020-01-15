import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Register from "./components/credentials/Register";
import Login from "./components/credentials/Login";
import WelcomePage from "./components/WelcomePage";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AddClass from "./components/classes/AddClass";
import ClassCard from "./components/classes/ClassCard";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/add_class' component={AddClass} />
          <PrivateRoute path='/class/:id' component={ClassCard} />
          <Route exact path='/' component={WelcomePage} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route component={WelcomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
