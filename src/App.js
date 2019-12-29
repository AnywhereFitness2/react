import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
function App() {
  const apiData = 'API is up!';
  useEffect(() => {
  axios.get(' https://anywhere-fitness-be.herokuapp.com')
  .then(response => {
    console.log(response);     
    
  })
  .catch(err => console.log(err))
} , [])

return (
  <div>
    <div>
      <h3>Title: {apiData}</h3>
    </div>
  </div>
  )
}

  


export default App;
