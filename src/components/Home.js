import React, { useContext,useEffect } from 'react'
import noteContext from '../context/Notes/Notecontext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Notes from './Notes';
import Addnote from './addnote'
import Navbar from "./NavBar"
import Read from "./readmore"
import './file.css'


function Home(props) {

  return (
  <div>
 <Navbar/>
<div className='container my-10' >
<Read></Read>

<div className="k">

    <Notes></Notes>

</div>
    </div>
  </div>















  )
}

export default Home
