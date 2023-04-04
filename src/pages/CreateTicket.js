import alertify from 'alertifyjs'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import DefaultContext from '../contexts/DefaultContext'

function CreateTicket() {
  const{token} = useContext(DefaultContext)
  const [ticket,setTicket] =useState()
  const [departments,setDepartments] =useState([])
  useEffect(()=>{
    fetch("https://localhost:44333/api/departments")
    .then((response) => response.json())
    .then((data) => {
        setDepartments([...data])
    });
  },[])

  const changeHandler = (event) =>{
    let name = event.target.name
    let value = event.target.value
    setTicket((prev) => ({ ...prev, [name]: value }));
    console.log(ticket)
  }
  const submitHandler = (event)=>{
    event.preventDefault()
    fetch("https://localhost:44333/api/jobs", {
      method: "POST",
      body: JSON.stringify(ticket),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
         "Authorization" : `Bearer ${token}`
      },
    })
      .then((response) => response.json())
      .then((data) => {
          alertify.success("Department Added!")
      });
    alertify.success("Ticket created")
  }
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="description">Tictet Description</Label>
          <Input
            id="description"
            name="description"
            type="textarea"
            placeholder="Desctiption"
            onChange={changeHandler}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="department">Department</Label>
            <Input
              id="departmentId"
              name="departmentId"
              type="select"
              onChange={changeHandler}
            >
              {
                departments.map((department,index)=>(
                  <option key={index} value={department.id}>{department.departmentName}</option>
                ))
              }
            </Input>          
        </FormGroup>
        <Button type='submit' onClick={submitHandler}>Create</Button>
      </Form>
    </div>
  );
}

export default CreateTicket