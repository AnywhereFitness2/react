import React, { useState, useContext } from "react";

import { userContext } from "../../contexts/userContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const Login = props => {
  const { setUserName } = useContext(userContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", credentials)
      .then(result => {
        localStorage.setItem("token", result.data.payload);
        setUserName(credentials.username);
        props.history.push("/dashboard");
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type='text'
          name='username'
          value={credentials.username}
          placeholder='Username'
        />
        <input
          onChange={handleChange}
          type='password'
          name='password'
          value={credentials.password}
          placeholder='Password'
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Login;
