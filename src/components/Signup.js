import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import noteContext from '../context/Notes/Notecontext';
import {useNavigate} from 'react-router-dom'
import './file.css'
import Navbar2 from "./Navbar2"
import { Link } from 'react-router-dom';


function FormGroupExample() {
  const [t, sett] = useState({ email: "", username: "", password: "" });
  const { user,getall } = useContext(noteContext); 
  let navigate = useNavigate();
  
  const handleChange = (e) => {
    sett({ ...t, [e.target.name]: e.target.value });
  };

 
  const handle = async(e) => {
    const success = await user({email:t.email, username: t.username, password: t.password });

  
    if (success === true) {
      console.log("Signup successful!");
      getall();
      navigate('/Home'); 
    } else {
      console.log("Signup failed.");
    }
  };









  return (
<div>
<Navbar2></Navbar2>
    <Form className="f">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={t.email} 
          onChange={handleChange} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          value={t.username}
          onChange={handleChange} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          value={t.password} 
          onChange={handleChange} 
        />
      </Form.Group>

      <Button className="my-3" onClick={handle}>
        Submit
      </Button>
      <Button className="mx-3" as={Link} to="/">Login</Button>
    </Form>
</div>

  );
}

export default FormGroupExample;
