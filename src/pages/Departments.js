import React, { useContext, useEffect, useState } from 'react'
import DefaultContext from '../contexts/DefaultContext'
import { Badge, Button, Form, FormGroup, Input, ListGroup, ListGroupItem, Table } from 'reactstrap'
import alertify from 'alertifyjs';

function Departments() {
    const{token} = useContext(DefaultContext)

    const[department,setDepartment] = useState({departmentName:""})
    const [departments, setDepartments] = useState([]);

    const loadDepartments= ()=>{
      fetch("https://localhost:44333/api/departments")
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
          setDepartments([...data])
      });
    }
    useEffect(()=>{
        if(!departments || departments.length == 0){
          loadDepartments()
            }
            console.log(departments)
    },[])
    const changeHandler = (event) =>{
        let name = event.target.name
        let value = event.target.value
        setDepartment(prev=> ({...prev,[name]:value}))
        console.log(department);
    }

    const clickHandler = (event) =>{
        console.log(JSON.stringify(department))
        event.preventDefault()
        fetch("https://localhost:44333/api/departments", {
            method: "POST",
            body: JSON.stringify(department),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
               "Authorization" : `Bearer ${token}`
            },
          })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setDepartments(data.departments)
                alertify.success("Department Added!")
            });
            loadDepartments();
    }

  

  return (
    <div>
      <Form>
        <FormGroup>
          <Input
            id="departmentName"
            name="departmentName"
            placeholder="Department Name"
            onChange={(event) => changeHandler(event)}
          ></Input>
        </FormGroup>
        <Button type="submit" onClick={clickHandler}>
          Add Department
        </Button>
      </Form>
      <hr></hr>
      <h3>Departments</h3>
      {!departments ? (
        <h4>There aren't any department</h4>
      ) : (
        <ListGroup>
          {departments.map((d) => (
            <ListGroupItem key={d.id}>
              <Badge color="danger">X</Badge> {d.departmentName}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </div>
  );
}

export default Departments