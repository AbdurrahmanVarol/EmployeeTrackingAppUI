import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'reactstrap'

function Employees() {
  const navigate = useNavigate()
  const employees = [
    {firstName:"asdasd",lastName:"qwe",userName:"asd",departmentId:1,department:"HR"}
  ]

  const navigateToEmployeeDetails = (employee)=>{
    navigate("/employeeDetails",{state:{...employee}})
  }
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} style={{cursor:"pointer"}} onClick={() => navigateToEmployeeDetails(employee)}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.userName}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Employees