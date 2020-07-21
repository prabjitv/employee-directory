import React, { useState, useEffect } from "react";
import EmployeeContext from "../utils/employeeContext";
import API from "../utils/API";
import Employee from "./components/Employee"

function Directory() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});


  function Employees() {
    API.grabEmployees()
      .then(employees => {
        this.setEmployees(employees)
        console.log(employees)
      })
  };

  useEffect(() => {
    grabEmployees();

  }, []);


  return (
    <EmployeeContext.Provider value={{ employee, employees }}>
      <div>
        <Employee />
      </div>

    </EmployeeContext.Provider>
  );
};

export default Directory;