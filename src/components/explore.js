import React from 'react'
import Exploree from "./exploreitems"
import NavBar from './NavBar'
import { useEffect,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 
import NoteContext from '../context/Notes/Notecontext';




function Explore() {


const{all}=useContext(NoteContext)

  useEffect(() => {
    all();
  }, [])


  return (
    <div className='conainer'>
      
      <NavBar></NavBar>
      <Exploree></Exploree>
      <Button className="mx-3 my-2 btn btn-dark" as={Link} to="/Home">Back</Button>
     
    </div>
  )
}

export default Explore
