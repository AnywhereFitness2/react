import React, { useState } from "react";

import { ClassContext } from "../../contexts/ClassContext";

export const ClassProvider = ({ children }) => {
  const [classList, setClassList] = useState([]);
  const [isEdititng, setIsEditing] = useState(false);
  const [editClass, setEditClass] = useState({});

  return (
    <ClassContext.Provider
      value={{
        classList,
        setClassList,
        isEdititng,
        setIsEditing,
        editClass,
        setEditClass
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};
