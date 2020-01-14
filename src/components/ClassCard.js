import React, { useState, useEffect, useContext } from "react";
import { ClassContext } from "../contexts/ClassContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { withRouter } from "react-router-dom";

const inititalClass = {
  classTitle: "",
  classType: "",
  clsssTime: "",
  classAddress: "",
  classCity: "",
  classState: "",
  classZip: ""
};

const ClassCard = props => {
  const { setIsEditing, setEditClass } = useContext(ClassContext);
  const [classes, setClasses] = useState(inititalClass);

  //call the class
  useEffect(() => {
    axiosWithAuth()
      .get("/class")
      .then(res => {
        console.log(res);
        setClasses(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  //delete the class
  const deleteClass = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete("/class")
      .then(() => {
        props.history.push("/dashboard");
      })
      .catch(error => {
        console.log("Error Deleting: ", error);
      });
  };

  //edit Class
  const handleEdit = item => {
    setIsEditing(true);
    setEditClass(item);
    props.history.push("/add_form");
  };

  return (
    <div>
      {classes.map(res => {
        return (
          <div className='class-card'>
            <div>
              <h2>{res.title}</h2>
              <h4>{res.type}</h4>
              <p>{res.time}</p>
              <p>{res.address}</p>
            </div>
            <button onClick={deleteClass}>Delete</button>
            <button
              onClick={e => {
                e.preventDefault();
                handleEdit(res);
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(ClassCard);
