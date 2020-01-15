import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

import { classContext } from "../contexts/classContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormState = {
  class_title: "",
  class_instructorId: "",
  class_categoryId: "",
  class_schedueleTime: "",
  class_address: "",
  class_city: "",
  class_state: "",
  class_zipCode: 0
};

const AddClass = props => {
  const { isEditing, setIsEditing, itemToEdit, setItemToEdit } = useContext(
    classContext
  );
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (isEditing) {
      setFormData({ ...itemToEdit, restaurant_stamped: false });
    }
  }, [isEditing, itemToEdit]);

  const handleChange = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (isEditing) {
      axiosWithAuth()
        .put(`auth/classes/${itemToEdit.id}`, formData)
        .then(() => {
          setFormData(initialFormState);
          props.history.push(`/classes/${itemToEdit.id}`);
        })
        .catch(err => {
          console.log("Put request error: ", err);
        });
    } else {
      axiosWithAuth()
        .post("/classes", formData)
        .then(() => {
          setFormData(initialFormState);
          props.history.push("/dashboard");
        })
        .catch(err => {
          console.log("Add form post error: ", err);
        });
    }
  };

  return (
    <div>
      {isEditing ? <h2>Edit a Class</h2> : <h2>Add a Class</h2>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='addClassName'>Name</label>
          <input
            type='text'
            name='class_name'
            id='addClassName'
            onChange={handleChange}
            value={formData.class_name}
            placeholder='name'
            required
          />
        </div>

        <div>
          <label htmlFor='addClassAddress'>Address</label>
          <input
            type='text'
            name='class_address'
            id='addClassAddress'
            onChange={handleChange}
            value={formData.class_address}
            placeholder='address'
            required
          />
        </div>

        <div>
          <label htmlFor='addClassCity'>City</label>
          <input
            type='text'
            name='class_city'
            id='addClassCity'
            onChange={handleChange}
            value={formData.class_city}
            placeholder='city'
            required
          />
        </div>

        <div>
          <label htmlFor='addClassZip'>Zip Code</label>
          <input
            type='text'
            name='class_zip'
            id='addClassZip'
            onChange={handleChange}
            value={formData.class_zip}
            placeholder='zip code'
            required
          />
        </div>
        <div>
          <button>Submit</button>
          <button
            onClick={() => {
              setFormData(initialFormState);
              setIsEditing(false);
              setItemToEdit({});
            }}
          >
            Reset
          </button>
          <button
            onClick={() => {
              setFormData(initialFormState);
              setIsEditing(false);
              setItemToEdit({});
              props.history.push("/dashboard");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(AddClass);
