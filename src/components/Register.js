import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { addUser } from "../actions/index";

const Register = props => {
  let history = useHistory();
  const role = props.role;

  const [userInfo, setUserInfo] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    instructorCode: "123",
    roleId: role === "instructor" ? 1 : 2
  });

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://anywhere-fitness-be.herokuapp.com/api/auth/register", {
        username: userInfo.username,
        password: userInfo.password
      })
      .then(res => console.log(res))

      .catch(response => {
        console.log("Couldn't access database.", response, response.message);
      });
  };

  const registerWelcomeText =
    "Sign up as " + (role === "instructor" ? "an instructor" : "a client");

  return (
    <div>
      <h1>{registerWelcomeText}</h1>

      <form name='login' onSubmit={handleSubmit}>
        <input
          name='username'
          type='text'
          placeholder='Username'
          value={userInfo.username}
          onChange={handleChange}
        />

        <input
          name='password'
          type='password'
          placeholder='Password'
          value={userInfo.password}
          onChange={handleChange}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { addUser })(Register);
