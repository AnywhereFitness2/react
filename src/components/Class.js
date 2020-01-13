// Where the class is rendered
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Class = () => {
    const [getClass, setGetClass]= useState([]);
    useEffect(() => {
        axios.get('https://anywhere-fitness-be.herokuapp.com/api/classes')
        .then(response => {
            console.log(response)
            setGetClass(response.data);
            
        })
        .catch(error=> console.log(error));
    }, [])
    
    return (        
                <div className="class">
                  <h1>Your Class</h1>           
                    {getClass.map(item => {
                    return <div className= "classData">
                        <p>{item.className}</p>             
                        <p>{item.classType}</p> 
                        <p>{item.startTime}</p>                   
                        <p>{item.duration}</p>     
                        <p>{item.intensityLevel}</p>   
                        <p>{item.location}</p>    
                        <p>{item.maxClassSize}</p> 
                        <p>{item.numberOfAttendees}</p> 
                      </div>   
                    })}
                </div>
              )      
            
}   
export default Class;