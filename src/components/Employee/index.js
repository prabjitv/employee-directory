import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  function getEmployees() {
    API.grabEmployees()
      .then(res => {
        setEmployees(res)
      })
      .catch(err => console.log(err));
  }


  function updateSort(event) {
    const { value } = event.target;
    setSort(value);
    console.log(sort)
  }


  let sortedUsers = []
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].name.toLowerCase().includes(filter.toLowerCase())) {
      sortedUsers.push(employees[i])
    }
    else if (employees[i].location.toLowerCase().includes(filter.toLowerCase())) {
      sortedUsers.push(employees[i])
    }
  }

  if (sort === "firstName") {
    sortedUsers.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }

  else if (sort === "age") {

    sortedUsers.sort((a, b) => (a.age > b.age) ? 1 : -1)
  }

  else if (sort === "city") {

    sortedUsers.sort((a, b) => (a.location > b.location) ? 1 : -1)
  }

  useEffect(getEmployees, [])
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fullwidth>
        <Grid container
          component="div"
          style={{ backgroundColor: '#fffffd' }}
          justify="center"
        >
          <div>
            <div className="jumbotron "><h1 className="text-light">Your Employee Dir</h1></div>
            <div className="input-group ">
              <div className="input-group-prepend">
                <select onChange={updateSort} className="custom-select" id="inputGroupSelect01">
                  <option defaultValue>Sorting</option>
                  <option value="age">Age</option>
                  <option value="city">City</option>
                  <option value="firstName">First Name</option>
                </select>

              </div>
            </div>

            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Age</th>
                  <th scope="col">Location</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {sortedUsers.map(employee => (
                  <tr key={employee.key.toString()}>
                    <td className="lead h3" >{employee.name}</td>
                    <td>{employee.number}</td>
                    <td>{employee.age}</td>
                    <td>{employee.location}</td>
                    <td><img alt="Employee Portrait" src={employee.image}></img></td>
                  </tr>))}
              </tbody>
            </table>


          </div>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Employee