import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Form,FormGroup, Input, Label } from 'reactstrap';

function EmployeeDetails() {
    const location = useLocation();
    const [employee, setEmployee] = useState(
      location.state ? { ...location.state } : {}
    );

    useEffect(()=>{
        if(location.state){
            console.log(location.state);
        }
    },[])

    const changeHandler = (event) =>{
        let name = event.target.name
        let value = event.target.value
        setEmployee((prev) => ({ ...prev, [name]: value }));
      }
  return (
    <div>
      <h1>{JSON.stringify(location.state)}</h1>
      <Form>
        <div className="disabledDiv">
          <FormGroup>
            <Input id="firstName" name="firstName" placeholder="First Name" />
          </FormGroup>
          <FormGroup>
            <Input id="lastName" name="lastName" placeholder="Last Name" />
          </FormGroup>
          <FormGroup>
            <Input id="userName" name="userName" placeholder="User Name" />
          </FormGroup>
          <FormGroup>
            <Input id="email" name="email" placeholder="Email" />
          </FormGroup>
        </div>
        <FormGroup>
          <Label for="department">Department</Label>
          <Input
            id="department"
            name="department"
            type="select"
            onChange={changeHandler}
            value={employee.department}
          >
            <option defaultValue value="1">
              Department 1
            </option>
            <option value="2">Department 2</option>
          </Input>
        </FormGroup>
      </Form>
    </div>
  );
}

export default EmployeeDetails