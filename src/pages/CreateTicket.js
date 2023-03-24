import alertify from 'alertifyjs'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function CreateTicket() {
  const [ticket,setTicket] =useState({description:"",department:"1"})

  const changeHandler = (event) =>{
    let name = event.target.name
    let value = event.target.value
    setTicket((prev) => ({ ...prev, [name]: value }));
  }
  const submitHandler = (event)=>{
    event.preventDefault()
    console.log(ticket)
    setTicket({description:"",department:"1"})
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
            value={ticket.description}
            onChange={changeHandler}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="department">Department</Label>
            <Input
              id="department"
              name="department"
              type="select"
              onChange={changeHandler}
              value={ticket.department}
            >
              <option defaultValue value="1">Department 1</option>
              <option value="2">Department 2</option>
            </Input>          
        </FormGroup>
        <Button type='submit' onClick={submitHandler}>Create</Button>
      </Form>
    </div>
  );
}

export default CreateTicket