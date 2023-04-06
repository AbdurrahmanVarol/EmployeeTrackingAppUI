import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'reactstrap'
import DefaultContext from '../contexts/DefaultContext'

function Employees() {
  const{token} = useContext(DefaultContext)
  const navigate = useNavigate()

  const[employees,setEmployees] = useState([])

  useEffect(()=>{
    fetch("https://localhost:44333/api/Users", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data:");
        console.log(data);
        setEmployees(data);
      });
  },[])

  const navigateToEmployeeDetails = (employee)=>{
    navigate("/employeeDetails",{state:{...employee}})
  }
  return (
    <div>
      <h1>Employees</h1>
      {!employees ? (
        <h2>There aren't any employee</h2>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => navigateToEmployeeDetails(employee)}
              >
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.userName}</td>
                <td>{employee.email}</td>
                <td>{employee.department?employee.department.departmentName:"-"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Employees