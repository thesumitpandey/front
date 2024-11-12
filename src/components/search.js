import React from 'react'
import Translate from "./Translate"
import Navbar from "./NavBar"
import './file.css'


import { useEffect,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; 
import NoteContext from '../context/Notes/Notecontext';
import Explore from './exploreitems';

function Search() {

  const{searchQuery,all,finds}=useContext(NoteContext)

  useEffect(() => {
   
   
    all()



  }, [])





  return (
    <div className='conainer'>
     < Navbar/>
      <Translate></Translate>
      <div className="container justify-content-center text-center">
  <h2 className='s my-3'>Explore more</h2>
  <hr />
</div>
        <Explore></Explore>



      <Button className="mx-3 my-2 btn btn-dark" as={Link} to="/Home">Back</Button>
    </div>
  )
}

export default Search
