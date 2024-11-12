

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

import Form from 'react-bootstrap/Form'; 
import './file.css'


const NavBar = (props) => {
  let location = useLocation();
  const { s, m, setm, sets,finds,all } = useContext(noteContext);
  const [variant, setVariant] = useState("primary");
  const [v, setv] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  
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
















  return (
    <div>
      <div style={{ width: "100%" }}>
        <Navbar expand="lg" fixed="top" className="navbar-dark bg-dark">
          <Container>
            <Navbar.Brand as={Link} to="/">WordWave</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
