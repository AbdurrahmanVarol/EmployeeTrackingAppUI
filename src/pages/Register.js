import React, { useState } from 'react'
import alertify from 'alertifyjs'
import { NavLink } from 'react-router-dom'
import { Form,Button, Col, FormGroup, Input, Row } from 'reactstrap'

function Register() {
  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    password:"",
    passwordConfirm:""            
  });

  const changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name)
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const registerHandler = (event)=>{
    event.preventDefault()
    console.log(user)
    
    if(user.pasword !== user.paswordConfirm){
      alertify.error("Password and password confirm must be equal")
      return
    }
    
    fetch("https://localhost:44333/api/Auth/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.isSuccess){
          alertify.success("User Added!")
          setUser({
            firstName:"",
            lastName:"",
            userName:"",
            email:"",
            password:"",
            passwordConfirm:""            
          })
        }
        else{
          alertify.error("User Added!")
        }
      });
      
  }
  return (
    <div>
      <h1>Register</h1>
      <Form>
        <Row>
          <Col sm="6">
            <FormGroup>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                onChange={changeHandler}
                value={user.firstName}
              ></Input>
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChange={changeHandler}
                value={user.lastName}
              ></Input>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            id="userName"
            name="userName"
            placeholder="User Name"
            onChange={changeHandler}
            value={user.userName}
          ></Input>
        </FormGroup>
        <Row>
          <Col sm="6">
            <FormGroup>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={changeHandler}
                value={user.password}
              ></Input>
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                placeholder="Password Confirm"
                onChange={changeHandler}
                value={user.passwordConfirm}
              ></Input>
            </FormGroup>
          </Col>
        </Row>
        <Button type="submit" onClick={registerHandler}>
          Register
        </Button>
      </Form>
      <Row>
        <Col sm="6">
          <NavLink to="/login">Have an accout?</NavLink>
        </Col>
        <Col sm="6"></Col>
      </Row>
    </div>
  );
}

export default Register