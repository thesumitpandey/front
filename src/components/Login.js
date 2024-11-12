import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import noteContext from '../context/Notes/Notecontext';
import { useNavigate } from 'react-router-dom';
import Home from "./Home"
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import Navbar2 from "./Navbar2"
import './file.css'
function FormGroupExample(props) {
  const [t, sett] = useState({ username: '', password: '' });
  const { Log,getall,sets,setm } = useContext(noteContext); 
  let navigate = useNavigate();

  
  const handleChange = (e) => {
    sett({ ...t, [e.target.name]: e.target.value });
  };

  const handle = async (e) => {
    e.preventDefault(); 

    
    const success = await Log({ username: t.username, password: t.password });

  
    if (success === true) {
      console.log("Login successful!");
      getall();
      navigate('/Home'); 
    } else {
      console.log("Login failed.");
    }
  };

  return (

    <div>
<Navbar2/>

      <Form className="f">
        <Form.Group className="mb-3" controlId="formGroupUsername" >
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
          Login
        </Button>
        <Button className="mx-3" as={Link} to="/Signup">Sign up</Button>
      </Form>
    </div>
    );
}

export default FormGroupExample;
