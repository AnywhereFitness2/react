  
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import ClassForm from "./components/ClassForm";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/classform'>Add a Class</Link>
        <Switch>
          {/* <Route path='/register' component={Register} /> */}
          {/* <Route path='/login' component={Login} /> */}
          <Route path='/classform' component={ClassForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;