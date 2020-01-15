import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import ClassProvider from "./providers/ClassProvider";
import UserProvider from "./providers/UserProvider";

ReactDOM.render(
  <UserProvider>
    <ClassProvider>
      <App />
    </ClassProvider>
  </UserProvider>,
  document.getElementById("root")
);
