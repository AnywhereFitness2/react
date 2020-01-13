  
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import ClassForm from "./components/ClassForm";
import Class from "./components/Class";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/classform'>Add a Class</Link>
        <Link to='/class'>Go to your classes</Link>
        <Switch>
          {/* <Route path='/register' component={Register} /> */}
          {/* <Route path='/login' component={Login} /> */}
          <Route path='/classform' component={ClassForm} />
          <Route path='/class' component={Class} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;