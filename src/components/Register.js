import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialUser = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  city: "",
  email: ""
};

const Register = props => {
  const [registerData, setRegisterData] = useState(initialUser);

  const handleChange = e => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/register", registerData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          onChange={handleChange}
          type='text'
          id='username'
          name='username'
          placeholder='username'
          value={registerData.username}
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          onChange={handleChange}
          type='password'
          id='password'
          name='password'
          placeholder='password'
          value={registerData.password}
          required
        />

        <label htmlFor='firstName'>First Name</label>
        <input
          onChange={handleChange}
          type='text'
          id='firstName'
          name='first_name'
          placeholder='first name'
          value={registerData.first_name}
          required
        />

        <label htmlFor='lastName'>Last Name</label>
        <input
          onChange={handleChange}
          type='text'
          name='last_name'
          id='lastName'
          placeholder='last name'
          value={registerData.last_name}
          required
        />

        <label htmlFor='city'>City</label>
        <input
          onChange={handleChange}
          type='text'
          name='city'
          id='city'
          placeholder='city'
          value={registerData.city}
          required
        />

        <label htmlFor='email'>Email</label>
        <input
          onChange={handleChange}
          type='email'
          name='email'
          id='email'
          placeholder='email'
          value={registerData.email}
          required
        />

        <button>Submit</button>
        <button
          className='loginBtn'
          onClick={() => setRegisterData(initialUser)}
        >
          Reset
        </button>
      </form>
    </div>
  );
};
export default Register;
