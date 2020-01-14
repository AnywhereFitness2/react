import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Dashboard from "./components/Dashboard";
import ClassCreate from "./components/Instuctors/ClassCreate";
import ClassEdit from "./components/Instuctors/ClassEdit";
import WelcomePage from "./components/WelcomePage";
import Login from "./components/Login";
import Register from "./components/Register";

import Class from "./components/Clients/Class";
import ClassForm from "./components/Clients/ClassForm";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' role='client' component={Register} />
      <Route path='/classform' component={ClassForm} />
      <Route path='/class' component={Class} />
      <Route
        exact
        path='/register/client'
        render={props => {
          return <Register {...props} role='client' />;
        }}
      />
      <Route
        exact
        path='/register/instructor'
        role='instuctor'
        component={Register}
      />
      <PrivateRoute exact path='/client' component={Dashboard} />
      <PrivateRoute
        path='/instructor/classes/edit/:classID'
        component={ClassEdit}
      />
      <PrivateRoute exact path='/instructor' component={Dashboard} />
      <PrivateRoute
        exact
        path='/instructor/createclass'
        component={ClassCreate}
      />
      <Route exact path='/' component={WelcomePage} />
    </div>
  );
}

export default App;
