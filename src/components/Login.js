import React, { useState, useContext } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import { userContext } from "../contexts/userContext";

const initialLoginState = {
  username: "",
  password: ""
};

const Login = props => {
  const { setUser } = useContext(userContext);
  console.log(setUser);
  const { loginData, setLoginData } = useState(initialLoginState);

  const handleChange = e => {
    e.preventDefault();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  console.log({ loginData });
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/login", loginData)
      .then(res => {
        console.log(res);
        setUser();
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
          // value={loginData.username}
        />

        <label htmlFor='password'>Password</label>
        <input
          onChange={handleChange}
          name='password'
          id='password'
          type='password'
          placeholder='password'
          // value={loginData.password}
        />

        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
