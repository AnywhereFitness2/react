import React, { useState } from "react";
import { connect } from "react-redux";

import { addClass } from "../../actions/index";

const ClassCreate = props => {
  const [newClass, setNewClass] = useState({
    className: "",
    classType: "",
    startTime: "",
    durationMinutes: 0,
    intensity: "",
    location: "",
    maxClassSize: 0,
    date: "",
    clients: []
  });

  console.log(newClass);

  const handleChanges = e => {
    console.log(e.target.value);
    setNewClass({
      ...newClass,
      [e.target.name]:
        e.target.type === "number" ? +e.target.value : e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addClass(newClass);
    props.history.push(`/instructor/`);
  };

  return (
    <div>
      <h1>Create Class</h1>

      <form className='createForm'>
        <div>
          <label htmlFor='className'>Class Name</label>
          <input
            type='text'
            name='className'
            value={newClass.className}
            id='className'
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor='classType'>Type</label>
          <input
            type='text'
            value={newClass.classType}
            id='classType'
            name='classType'
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor='startTime'>Start time</label>
          <input
            type='time'
            value={newClass.startTime}
            id='startTime'
            name='startTime'
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor='durationMinutes'>Duration (minutes)</label>
          <input
            type='number'
            value={newClass.durationMinutes}
            id='durationMinutes'
            name='durationMinutes'
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor='intensity'>Intensity</label>
          <input
            type='text'
            value={newClass.intensity}
            id='intensity'
            name='intensity'
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            value={newClass.location}
            id='location'
            name='location'
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor='maxClassSize'>Max Class Size</label>
          <input
            type='number'
            value={newClass.maxClassSize}
            id='maxClassSize'
            name='maxClassSize'
            onChange={handleChanges}
          />
        </div>
        <div>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            value={newClass.date}
            id='date'
            name='date'
            onChange={handleChanges}
          />
        </div>
        <button onClick={handleSubmit}>Create Class</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    addClass: addClass
  };
};

export default connect(mapStateToProps, { addClass })(ClassCreate);
