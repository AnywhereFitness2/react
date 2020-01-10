import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import Button from '@material-ui/core/Button';
import axios from 'axios';

// const Form = styled.form`
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// border: 1px solid black;
// `;
// const Label = styled.label`
// text-align: initial ;
// // border: 1px solid black;
// padding-right: 2px; 
// .align {
//     text-align: left;
// }
// `;


export default function ClassForm () {
    const [classtributes, setClasstributes]= useState({className: '', classType:'', startTime: '', duration: '', intensityLevel: '', location: '', numberOfAttendees: '', maxClassSize: ''});
    const handleChanges = event => {
        console.log('event', event.target.value);
        setClasstributes({...classtributes, [event.target.name]: event.target.value})
        console.log(classtributes);
    }; 
    const onSubmit = event =>  {
        event.preventDefault(); 
        axios.post('/api/classes', classtributes)
        .then(response=> {
        console.log(response);        
        })       
        .catch(error=> console.log(error));
    
        setClasstributes({className: '', classType:'', startTime: '', duration: '', intensityLevel: '', location: '', numberOfAttendees: '', maxClassSize: ''})
    }
    return (
        <form onSubmit={onSubmit} >
           
            <div className= 'name'  >
                <label className= 'align'>Name: </label>
                <input                
                    type='text' 
                    placeholder= 'enter name' 
                    onChange= {handleChanges}
                    name="name"
                    value= {classtributes.name}
                    />
            </div>
            <div className= 'type'>
                <label className= 'align'>Type: </label>
                <input                 
                    type='text'
                    placeholder= 'Class Type'
                    onChange= {handleChanges}
                    name= 'classType'
                    value= {classtributes.classType}
                    />
            </div>
            <div className= 'startTime'>
                <label className= 'align'>Start Time: </label>
                <input             
                    type='text'
                    placeholder= 'Start Time'    
                    onChange= {handleChanges}
                    name= 'startTime'
                    value= {classtributes.startTime}
                />
            </div>
            <div className= 'duration'>
                <label className= 'align'>Duration: </label>
                <input              
                    type='text'
                    placeholder= 'Duration'    
                    onChange= {handleChanges}
                    name= 'duration'
                    value= {classtributes.duration}
                />
            </div>
            <div>
                <label className= 'align'>Location: </label>
                <input               
                    type='text'
                    placeholder= 'Location'    
                    onChange= {handleChanges}
                    name= 'location'
                    value= {classtributes.location}
                />
            </div>
            <div>
                <label className= 'align'>Attendees: </label>
                <input                 
                    type='text'
                    placeholder= 'Number of  Attendees'    
                    onChange= {handleChanges}
                    name= 'numberOfAttendees'
                    value= {classtributes.currentNumberOfAttendees}
                />
            </div>
            <div>
                <label className= 'align'>Max Class Size: </label>
                <input                 
                    type='text'
                    placeholder= 'Max Class Size'    
                    onChange= {handleChanges}
                    name= 'maxClassSize'
                    value= {classtributes.maxClassSize}
                /> 
            </div>
            <div>
                <label className= 'align'>Intensity: </label>
                <input                 
                    type='text'
                    placeholder= 'Intensity Level'    
                    onChange= {handleChanges}
                    name= 'intensityLevel'
                    value= {classtributes.intensityLevel}
                />
            </div>
            <div>
                    <Button variant="contained" color="primary">Submit</Button>

                {/* <button className= "submitButton" type= "submit"> </button> */}
            </div>
        </form>
            )
        }
