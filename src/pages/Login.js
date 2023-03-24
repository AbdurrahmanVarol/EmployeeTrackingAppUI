import React, { useState,useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap';
import DefaultContext from '../contexts/DefaultContext';

function Login() {
  const {setToken} = useContext(DefaultContext);
  const [user, setUser] = useState();
  const navigate = useNavigate()

  const changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name)
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const loginHandler = (event)=>{
    event.preventDefault()
    console.log(user)
    console.log("worked")
    fetch("", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.isLoginSuccess){

          setToken(data.token);
        }
      });
      navigate("/")
  }

  return (
    <div>
      <h1>Login</h1>
      <Form>
        <FormGroup>
          <Input
            id="userName"
            name="userName"
            placeholder="User Name"
            onChange={changeHandler}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            onChange={changeHandler}
          ></Input>
        </FormGroup>
        <Button type="button" onClick={loginHandler}>
          Login
        </Button>
      </Form>
      <Row>
        <Col sm="6">
          <NavLink to="/register">Dont have an accout?</NavLink>
        </Col>
        <Col sm="6">
          <NavLink to="/login">Forgot password?</NavLink>
        </Col>
      </Row>
    </div>
  );
}

export default Login