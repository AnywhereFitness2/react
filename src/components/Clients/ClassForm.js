import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled, { css } from "styled-components";
import axios from "axios";

export default function ClassForm() {
  const [classtributes, setClasstributes] = useState({
    className: "",
    classType: "",
    startTime: "",
    durationMinutes: "",
    intensity: "",
    location: "",
    maxClassSize: 0,
    date: "",
    clients: []
  });
  const handleChanges = event => {
    console.log("event", event.target.value);
    setClasstributes({
      ...classtributes,
      [event.target.name]: event.target.value
    });
    console.log(classtributes);
  };
  const onSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "https://anywhere-fitness-be.herokuapp.com/api/classes",
        classtributes
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error), []);

    setClasstributes({
      className: "",
      classType: "",
      startTime: "",
      duration: "",
      intensityLevel: "",
      location: "",
      numberOfAttendees: "",
      maxClassSize: ""
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <section className='classForm'>
        <div className='name'>
          <label className='align'></label>
          <TextField
            placeholder='Class Name'
            id='inputField'
            type='text'
            margin='normal'
            onChange={handleChanges}
            name='className'
            value={classtributes.className}
          />
        </div>
        <div className='type'>
          <label className='align'></label>

          <TextField
            id='inputField'
            type='text'
            placeholder='Class Type'
            margin='normal'
            onChange={handleChanges}
            name='classType'
            value={classtributes.classType}
          />
        </div>
        <div className='startTime'>
          <label className='align'></label>

          <TextField
            id='inputField'
            type='text'
            placeholder='Start Time'
            margin='normal'
            onChange={handleChanges}
            name='startTime'
            value={classtributes.startTime}
          />
        </div>
        <div className='duration'>
          <label className='align'></label>

          <TextField
            id='inputField'
            type='text'
            placeholder='Duration'
            margin='normal'
            onChange={handleChanges}
            name='duration'
            value={classtributes.duration}
          />
        </div>
        <div>
          <label className='align'></label>

          <TextField
            id='inputField'
            type='text'
            placeholder='Intensity Level'
            margin='normal'
            onChange={handleChanges}
            name='intensityLevel'
            value={classtributes.intensityLevel}
          />
        </div>
        <div>
          <label className='align'></label>

          <TextField
            id='inputField'
            type='text'
            placeholder='Location'
            margin='normal'
            onChange={handleChanges}
            name='location'
            value={classtributes.location}
          />
        </div>
        <div>
          <label className='align'></label>
          <TextField
            id='inputField'
            type='text'
            placeholder='Max Class Size'
            onChange={handleChanges}
            name='maxClassSize'
            value={classtributes.maxClassSize}
          />
        </div>
        <div>
          <label className='align'></label>
          <TextField
            id='inputField'
            type='text'
            placeholder='# of Attendees'
            onChange={handleChanges}
            name='numberOfAttendees'
            value={classtributes.numberOfAttendees}
          />
        </div>
        <div>
          <br></br>
          <Button
            className='btm-button'
            variant='contained'
            color='primary'
            type='submit'
          >
            Submit
          </Button>
        </div>
      </section>
    </form>
  );
}
