import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { addUser } from "../actions/index";

const LoginForm = props => {
  const history = useHistory();

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    axios
      .post("https://lambda-anywhere-fitness.herokuapp.com/api/auth/login", {
        username: userInfo.username,
        password: userInfo.password
      })
      .then(loginResponse => {
        localStorage.setItem("token", loginResponse.data.token);
        localStorage.setItem("roleId", loginResponse.data.user.roleId);
        props.addUser(loginResponse.data.user);

        if (loginResponse.data.user.roleId === 1) {
          history.push("/instructor");
        } else if (loginResponse.data.user.roleId === 2) {
          history.push("/client");
        }
      })
      .catch(response => {
        console.log("Couldn't access database: ", response);
      });
  };

  return (
    <div>
      <h1>Log in</h1>

      <form name='login' onSubmit={handleLogin}>
        <input
          name='username'
          type='text'
          placeholder='Username'
          value={userInfo.username}
          onChange={handleChange}
        />
        <p className='formError' id='usernameErrors'></p>

        <input
          name='password'
          type='password'
          placeholder='Password'
          value={userInfo.password}
          onChange={handleChange}
        />

        <button type='submit'>Log In</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { addUser })(LoginForm);
