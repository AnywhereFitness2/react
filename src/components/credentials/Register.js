import React, { useState } from "react";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

const initialUser = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: ""
};

const Register = props => {
  const [registrationData, setRegistrationData] = useState(initialUser);

  const handleChange = e => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/register", registrationData)
      .then(res => {
        setRegistrationData(initialUser);
        props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Register Below</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          onChange={handleChange}
          type='text'
          id='username'
          name='username'
          placeholder='username'
          value={registrationData.username}
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          onChange={handleChange}
          type='password'
          id='password'
          name='password'
          placeholder='password'
          value={registrationData.password}
          required
        />

        <button>Submit</button>
        <button onClick={() => setRegistrationData(initialUser)}>Reset</button>
      </form>
    </div>
  );
};
export default Register;
