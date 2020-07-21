import React from "react";

const EmployeeContext = React.createContext({
  name: "",
  age: "",
  location: "",
  number: "",
  image: "",
});

export default EmployeeContext;