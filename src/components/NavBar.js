

import { useContext, useEffect, useState } from 'react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import noteContext from '../context/Notes/Notecontext';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; 
import Form from 'react-bootstrap/Form'; 
import './file.css'


const NavBar = (props) => {
  let location = useLocation();
  const { s, m, setm, sets,finds,all ,notes,l,setSearchQuery,searchQuery} = useContext(noteContext);
  const [variant, setVariant] = useState("primary");
  const [v, setv] = useState(false);
 
  
  useEffect(() => {
    if (s != null) {
      if (s) {
        setVariant("success");
        setv(true);
      } else {
        setVariant("danger");
        setv(true);
      }
      const timer = setTimeout(() => {
        setv(false);
        setm(null);
        sets(null);
        setv(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [s, m]);

  let navigate = useNavigate();

  const logout = () => {
   if(window.confirm("Are you sure you want to logout?")){


     localStorage.removeItem('token');
     navigate('/');

   };
  };


  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
   
  
  };






  const click = (e) => {
    e.preventDefault();

   finds(searchQuery)
   
   navigate('/Search');
   
  };
  const click2 = (e) => {
    e.preventDefault();
   
    all();
    console.log("nav");
    navigate('/Explore');
   
  };






  return (
    <div>
      <div style={{ width: "100%" }}>
        <Navbar expand="lg" fixed="top" className="navbar-dark bg-dark n">
          <Container>
            <Navbar.Brand as={Link} to="/Home">WordWave</Navbar.Brand>
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} className={`${location.pathname === "/Home" ? "active" : ""}`} to="/Home">Home</Nav.Link>
                <Nav.Link as={Link} className={`${location.pathname === "/About" ? "active" : ""}`} to="/About">About</Nav.Link>
           
              </Nav>
              <Button  onClick={click2} className='btn btn-secondary my-1 mx-1' style={{ color:"white"}}>Explore
              <i className="fa-regular fa-compass mx-1"    onClick={click2}      style={{color:"#ffffff"}}></i>
           

               
                </Button>
              
              <Form  className="d-flex mx-1 my-1">
                <Form.Control
                  type="search"
                  placeholder="Search blogs"
                  className="me-2"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Button type="submit"   onClick={click} variant="outline-light">
                  <FaSearch />
                </Button>
              </Form>

              <Button onClick={logout}  className='btn btn-danger my-1 mx-1'>Logout</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {v && (
        <Alert key={variant} variant={variant} show={v}>
          {m}
        </Alert>
      )}
    </div>
  );
};

export default NavBar;
