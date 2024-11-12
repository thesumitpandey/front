
import React, { useContext,useEffect,useState } from 'react'
import noteContext from '../context/Notes/Notecontext'
import Nodeitem from './nodeitem'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Read from "./readmore"

import './file.css'
function Notes() {
    const a=useContext(noteContext)
    

    const{note,setnotes,getall,updatef,setm,sets,namel}=a;
    const[t,sett]=useState({title:"",description:"",id:'',tags:''});
    
 
const update=(note)=>{
  
  setModalShow(true);
t.title=note.title
t.description=note.description;
t.id=note._id
t.tags=note.tags
}

const handleChange = (e) => {
  e.preventDefault();
  sett({ ...t, [e.target.name]: e.target.value });
  
};








const [modalShow, setModalShow] = React.useState(false);

    useEffect(()=>{

getall();

},[])
const onHide=()=>{
  if (!t.title || !t.description) {
    setm("Both title and description are required");
    sets(false);
    return;
  }

  if (t.title.length < 3) {
    setm("Title must have a minimum of 3 characters");
    sets(false);
    return;
  }
  if (t.description.length < 5) {
    setm("Description must have a minimum of 5 characters");
    sets(false);
    return;
  }
 
  updatef({id:t.id,title:t.title,description:t.description,tags:t.tags})
  
pp();
}

const pp=()=>{
  setModalShow(false)
 
  }

return (
  <div>
   <div>
      
   <Modal show={modalShow}    
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={pp}>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
   
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          id="title"
          name="title"
          value={t.title}
          onChange={handleChange} 
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          id="description"
          name="description"
          value={t.description} 
          onChange={handleChange} 
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Tags</Form.Label>
        <Form.Control
          as="textarea"
          id="description"
          name="tags"
          value={t.tags} 
          onChange={handleChange} 
        />
      </Form.Group>
      </Modal.Body>
   
      <Modal.Footer>
        <Button onClick={onHide} on>Submit</Button>
      </Modal.Footer>
    </Modal>
  
      
        </div>

<div className="row justify-content-center text-center">
<h2 className="text-center my-4 s" >
  @{namel}-
Your Recipes
</h2>



</div>

<div className="row justify-content-center l">

        {(!Array.isArray(note) || note.length === 0) && (
          <h2 className="text-center my-4 g"  >
       "There are no blogs available to display."
       <h2 className="text-center my-4 g"  >
       "Please add your blog."
          </h2>
          </h2>
        )}
  
{Array.isArray(note) && note.length > 0 &&
          note.map((note) => (
            <div key={note._id} className="col-md-4 d-flex justify-content-center">
              <Nodeitem note={note} update={update} image={note.pdf}  imageu={note.pdf}/>
            </div>
          ))
        }
        
</div>
</div> 
  

       
        

);
}

export default Notes;

