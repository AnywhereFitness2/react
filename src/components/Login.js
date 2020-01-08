import React, { useState, useContext } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { userContext } from "../contexts/userContext";

const initialLoginState = {
  username: "",
  password: ""
};

const Login = props => {
  const { setUser } = useContext(userContext);
  const [logInData, setLogInData] = useState(initialLoginState);

  const handleChanges = e => {
    e.preventDefault();
    setLogInData({ ...logInData, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", logInData)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        setUser();
      })
      .catch(error => {
        console.log("error login: ", error);
      });

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input
            onChange={handleChanges}
            name='username'
            id='username'
            type='text'
            placeholder='username'
            value={logInData.username}
          />

          <label htmlFor='password'>Password</label>
          <input
            onChange={handleChanges}
            name='password'
            id='password'
            type='password'
            placeholder='password'
            value={logInData.password}
          />

          <button>Sign In</button>
        </form>
      </div>
    );
  };
};

export default Login;
