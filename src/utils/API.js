import axios from "axios";

export default {
  grabEmployees: function () {
    return axios
      .get("https://randomuser.me/api/?results=200&nat=us")
      .then(res => {
        const employees = res.data.results;
        return employees.map(employee => {
          return {
            name: employee.name.first + " " + employee.name.last,
            age: employee.dob.age,
            location: employee.location.city + ", " + employee.location.state,
            number: employee.phone,
            image: employee.picture.medium,
            key: employee.id.value,
          };
        });
      });
  },

};