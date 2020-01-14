import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import WelcomePage from "./components/WelcomePage";
import Dashboard from "./components/Dashboard";
  
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import ClassForm from "./components/ClassForm";
import Class from "./components/Class";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <PrivateRoute path='/Dashboard' component={Dashboard} />
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        <Link className= 'linkOne' to='/classform'>Add a Class</Link>
        <Link className= 'linkOne' to='/class'>Your classes</Link>
        <Switch>
          {/* <Route path='/register' component={Register} /> */}
          {/* <Route path='/login' component={Login} /> */}
          <Route path='/classform' component={ClassForm} />
          <Route path='/class' component= {Class} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;