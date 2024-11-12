import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import NoteContext from '../context/Notes/Notecontext';
import  "./file.css";
import Navbar from "./NavBar"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import axios from "axios";




function AddNote() {
  const { add,setm,sets,getall} = useContext(NoteContext); 
  const [note, setNote] = useState({ title: "", description: "",tags:""}); 
  const [file, setFile] = useState("");
  

 

  let navigate = useNavigate();

  

  const handleClick = async(e) => {
    e.preventDefault(); 

    
    if (!note.title || !note.description) {
      setm("Both title and description are required");
      sets(false);
      return;
    }

    if (note.title.length < 3) {
      setm("Title must have a minimum of 3 characters");
      sets(false);
      return;
    }
    if (note.description.length < 5) {
      setm("Description must have a minimum of 5 characters");
      sets(false);
      return;
    }
   


   
    add(note);
    getall();
    navigate('/Home');
   
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNote({ ...note, [e.target.name]: e.target.value });
  
  };
 




  return (




<div>

<Navbar></Navbar>
    <Form>
        
      <Form.Group>
        <Form.Label>
          <h2>Title</h2>
          </Form.Label>
        <Form.Control
          type="text"
          id="title"
          name="title"
          value={note.title} 
           placeholder='Title must have a minimum of 3 characters"'
          onChange={handleChange} 
        />
      </Form.Group>
      <Form.Group>
        <Form.Label><h2>Description</h2></Form.Label>
        <Form.Control
          as="textarea"
          id="description"
          name="description"
          value={note.description} 
           placeholder='Description must have a minimum of 5 characters'
          onChange={handleChange} 
        />
      </Form.Group>

      <Form.Group>
        <Form.Label><h2>Tags</h2></Form.Label>
        <Form.Control
          as="textarea"
          id="description"
          placeholder='Enter tags separated by #, e.g., #example #tag'
          name="tags"
          value={note.tags} 
          onChange={handleChange} 
        />
      </Form.Group>

   



      <Button onClick={handleClick} className="my-3 btn btn-dark">Add recipe</Button>
      <Button className="mx-3 my-2 btn btn-dark" as={Link} to="/Home">Back</Button>
    </Form>

    </div>
  );
}

export default AddNote;
