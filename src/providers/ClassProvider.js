import React, { useState } from "react";

import { classContext } from "../contexts/classContext";

const PassportProvider = ({ children }) => {
  const [classList, setClassList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({});
  const [filteredList, setFilteredList] = useState([]);

  return (
    <classContext.Provider
      value={{
        classList,
        setClassList,
        isEditing,
        setIsEditing,
        itemToEdit,
        setItemToEdit,
        filteredList,
        setFilteredList
      }}
    >
      {children}
    </classContext.Provider>
  );
};

export default PassportProvider;
