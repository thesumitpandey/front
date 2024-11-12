import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NoteContext from '../context/Notes/Notecontext';
import { useContext } from 'react';

import  "./file.css";
import Navbar from "./NavBar"


function TextExample() {
    
    const {f} = useContext(NoteContext); 
    

  return (
    <div>
<Navbar/>


    <div className="row justify-content-center l">

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{f.title}</Card.Title>
        <Card.Text>
          {f.description}
        </Card.Text>
      </Card.Body>
      <Button className="mx-3 my-2 btn btn-dark" as={Link} to="/Home">Back</Button>
    </Card>


    </div>

  </div>


  
);
 
}

export default TextExample;