import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialUser = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  city: "",
  email: "",
  experience: ""
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
        console.log(res.data);
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

        <label htmlFor='firstName'>First Name</label>
        <input
          onChange={handleChange}
          type='text'
          id='firstName'
          name='first_name'
          placeholder='first name'
          value={registrationData.first_name}
          required
        />

        <label htmlFor='lastName'>Last Name</label>
        <input
          onChange={handleChange}
          type='text'
          name='last_name'
          id='lastName'
          placeholder='last name'
          value={registrationData.last_name}
          required
        />

        <label htmlFor='city'>City</label>
        <input
          onChange={handleChange}
          type='text'
          name='city'
          id='city'
          placeholder='city'
          value={registrationData.city}
          required
        />

        <label htmlFor='email'>Email</label>
        <input
          onChange={handleChange}
          type='email'
          name='email'
          id='email'
          placeholder='email'
          value={registrationData.email}
          required
        />

        <label htmlFor='level'>Fitness Level</label>
        <input
          onChange={handleChange}
          type='level'
          name='level'
          id='level'
          placeholder='fitness level'
          value={registrationData.email}
          required
        />

        <button>Submit</button>
        <button
          className='loginBtn'
          onClick={() => setRegistrationData(initialUser)}
        >
          Reset
        </button>
      </form>
    </div>
  );
};
export default Register;
