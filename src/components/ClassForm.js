import React, { useState } from 'react';
export default function ClassForm () {
    const [classtributes, setClasstributes]= useState({className: '', classType:'', startTime: '', duration: '', intensityLevel: '', location: '', numberOfAttendees: '', maxClassSize: ''});
    const handleChanges = event => {
        console.log('event', event.target.value);
        setClasstributes({...classtributes, [event.target.name]: event.target.value})
        console.log(classtributes);
    }; 
    const onSubmit = event =>  {
        event.preventDefault();
        // props.addTeamMember(form);
        setClasstributes({className: '', classType:'', startTime: '', duration: '', intensityLevel: '', location: '', numberOfAttendees: '', maxClassSize: ''})
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input                
                type='text' 
                placeholder= 'enter name' 
                onChange= {handleChanges}
                name="name"
                value= {classtributes.name}
                />
            <label>Class Type</label>
            <input                 
                type='text'
                placeholder= 'Class Type'
                onChange= {handleChanges}
                name= 'classType'
                value= {classtributes.classType}
                />
            <label>Start Time</label>
            <input                 
                type='text'
                placeholder= 'Start Time'    
                onChange= {handleChanges}
                name= 'startTime'
                value= {classtributes.startTime}
            />
            <label>Duration</label>
            <input                 
                type='text'
                placeholder= 'Duration'    
                onChange= {handleChanges}
                name= 'duration'
                value= {classtributes.duration}
            />
            <label>Location</label>
            <input                 
                type='text'
                placeholder= 'Location'    
                onChange= {handleChanges}
                name= 'location'
                value= {classtributes.location}
            />
            <label>Current Number of Registered Attendees</label>
            <input                 
                type='text'
                placeholder= 'Number of  Attendees'    
                onChange= {handleChanges}
                name= 'numberOfAttendees'
                value= {classtributes.currentNumberOfAttendees}
            />
             <label>Max Class Size</label>
            <input                 
                type='text'
                placeholder= 'Max Class Size'    
                onChange= {handleChanges}
                name= 'maxClassSize'
                value= {classtributes.maxClassSize}
            /> <label>Intensity Level</label>
            <input                 
                type='text'
                placeholder= 'intensityLevel'    
                onChange= {handleChanges}
                name= 'intensityLevel'
                value= {classtributes.intensityLevel}
            />
            
            <button className= "submitButton" type= "submit">Click Here to Submit</button>
        </form>
            )
        }
