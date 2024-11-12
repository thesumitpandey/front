
import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './file.css'

import NoteContext from '../context/Notes/Notecontext';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useNavigate } from 'react-router-dom';
function Nodeitem(props) {
  let navigate = useNavigate();
const{deletes,find}=useContext(NoteContext)
    const{note,update,imageu}=props;


const handle=((id)=>{

deletes(id)


})

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
  

</div>
        <Card.Body className='item'>
          <div className="d-flex align-items-center">
            <Card.Title>{note.title.slice(0,10)}</Card.Title>
            <i className="fa-solid fa-trash mx-2" onClick={() => handle(note._id)}></i>
            <i className="fa-regular fa-pen-to-square mx-2" onClick={() => update(note)}></i>
          </div>
          <Card.Text>
            {note.description.slice(0,20)}
          </Card.Text>
         
          <Button className="mx-3 fire btn btn-dark" onClick={() => click(note._id)} >Read full blog</Button>
        </Card.Body>
      </Card>
  
    </div>
  </div>
  )
}

export default Nodeitem
