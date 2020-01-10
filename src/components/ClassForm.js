import React, { useState } from 'react';
import styled, {css} from 'styled-components';
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid black;
`;
const Label = styled.label`
text-align: left;
`;
export default function ClassForm () {
    const [classtributes, setClasstributes]= useState({className: '', classType:'', startTime: '', duration: '', intensityLevel: '', location: '', numberOfAttendees: '', maxClassSize: ''});
    const handleChanges = event => {
        console.log('event', event.target.value);
        setClasstributes({...classtributes, [event.target.name]: event.target.value})
        console.log(classtributes);
    }; 
    const onSubmit = event =>  {
        event.preventDefault();        
        setClasstributes({className: '', classType:'', startTime: '', duration: '', intensityLevel: '', location: '', numberOfAttendees: '', maxClassSize: ''})
    }
    return (
        <Form onSubmit={onSubmit}>
            <div className= 'name'  >
                <Label>Name: </Label>
                <input                
                    type='text' 
                    placeholder= 'enter name' 
                    onChange= {handleChanges}
                    name="name"
                    value= {classtributes.name}
                    />
            </div>
            <div className= 'type'>
                <Label>Type: </Label>
                <input                 
                    type='text'
                    placeholder= 'Class Type'
                    onChange= {handleChanges}
                    name= 'classType'
                    value= {classtributes.classType}
                    />
            </div>
            <div className= 'startTime'>
                <label>Start Time: </label>
                <input             
                    type='text'
                    placeholder= 'Start Time'    
                    onChange= {handleChanges}
                    name= 'startTime'
                    value= {classtributes.startTime}
                />
            </div>
            <div className= 'duration'>
                <label>Duration: </label>
                <input              
                    type='text'
                    placeholder= 'Duration'    
                    onChange= {handleChanges}
                    name= 'duration'
                    value= {classtributes.duration}
                />
            </div>
            <div>
                <label>Location: </label>
                <input               
                    type='text'
                    placeholder= 'Location'    
                    onChange= {handleChanges}
                    name= 'location'
                    value= {classtributes.location}
                />
            </div>
            <div>
                <label>Attendees: </label>
                <input                 
                    type='text'
                    placeholder= 'Number of  Attendees'    
                    onChange= {handleChanges}
                    name= 'numberOfAttendees'
                    value= {classtributes.currentNumberOfAttendees}
                />
            </div>
            <div>
                <label>Max Class Size: </label>
                <input                 
                    type='text'
                    placeholder= 'Max Class Size'    
                    onChange= {handleChanges}
                    name= 'maxClassSize'
                    value= {classtributes.maxClassSize}
                /> 
                </div>
            <div>
                <label>Intensity: </label>
                <input                 
                    type='text'
                    placeholder= 'Intensity Level'    
                    onChange= {handleChanges}
                    name= 'intensityLevel'
                    value= {classtributes.intensityLevel}
                />
            </div>
            <div>
            <button className= "submitButton" type= "submit">Click Here to Submit</button>
            </div>
        </Form>
            )
        }
