import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

const Login = props => {
  const { loginData, setLoginData } = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", loginData)
      .then(res => {
        console.log(res, loginData);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        setLoginData({
          username: "",
          password: ""
        });
        props.history.push("/dashboard");
      })
      .catch(error => {
        console.log("error on login: ", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          onChange={handleChange}
          name='username'
          id='username'
          type='text'
          placeholder='username'
          value={loginData.username}
        />

        <label htmlFor='password'>Password</label>
        <input
          onChange={handleChange}
          name='password'
          id='password'
          type='password'
          placeholder='password'
          value={loginData.password}
        />

        <button>Sign In</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
