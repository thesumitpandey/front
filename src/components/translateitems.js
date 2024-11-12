
import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './file.css'

import NoteContext from '../context/Notes/Notecontext';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

function Nodeitem(props) {
  let navigate = useNavigate();
const{deletes,find,namel}=useContext(NoteContext)
const{fs}=props;

const click=((id)=>{

find(id);
navigate('/readfullrecipe');
  
  })

 

  const [t,sett]=useState("c");

  const m=()=>{
    sett("b")
  }
  const n=()=>{
    sett("c")
  }










  return (
    <div className="col-md-4 d-flex justify-content-center " >
    <div className="my-3 myx-9>">
  
    <Card style={{ width: '100%', maxWidth: '250px'  ,minWidth:'250px'   }} className="mx-1" onMouseEnter={m} onMouseLeave={n}>
    <div className="container justify-content-center text-center">
  <h6 style={{ fontWeight: 'bolder' }}>@{fs.nk}</h6>

</div>
        <Card.Body className='item'>
          <div className="d-flex align-items-center">
            <Card.Title>{fs.title.slice(0,10)}</Card.Title>
           
          </div>
          <Card.Text>
            {fs.description.slice(0,20)}
          </Card.Text>
         
          <Button className="mx-3 fire btn btn-danger" onClick={() => click(fs._id)} >Read full blog</Button>
        </Card.Body>
      </Card>
  
    </div>
  </div>
  )
}

export default Nodeitem
