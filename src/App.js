import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Route>
        <Switch>
          <Login />
        </Switch>
      </Route>
    </div>
  );
}

export default App;
