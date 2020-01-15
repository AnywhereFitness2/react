import React, { useContext, useEffect, useState } from "react";

import { withRouter } from "react-router-dom";
import { classContext } from "../../contexts/classContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const ClassCard = props => {
  const { setIsEditing, setItemToEdit } = useContext(classContext);
  const [classes, setClasses] = useState([]);

  //fetch specific class ID to display card
  const id = props.match.params.id;
  useEffect(() => {
    axiosWithAuth()
      .get(`/classes/${id}`)
      .then(res => {
        setClasses(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  //delete class
  const deleteClasses = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/classes/${id}`)
      .then(() => {
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("Error deleting: ", err);
      });
  };

  //send class to form for editing
  const handleEdit = item => {
    setIsEditing(true);
    setItemToEdit(item);
    props.history.push("/add_form");
  };

  return (
    <div className='cardContainer'>
      {classes.map(res => {
        return (
          <div>
            <div key={res.id}>
              <div>
                <h2>{res.class_name}</h2>
                <p>{res.class_address}</p>
                <p>{res.class_city}</p>
                <p>{res.class_zip}</p>
              </div>

              <div>
                <button onClick={deleteClasses}>Delete</button>
                <button
                  onClick={e => {
                    e.preventDefault();
                    handleEdit(res);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(ClassCard);
