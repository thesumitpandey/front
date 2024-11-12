import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './file.css'
import NoteContext from '../context/Notes/Notecontext';

import { useContext } from 'react';

function TextExample() {
    let navigate = useNavigate();

    const{l}=useContext(NoteContext)



    const logout = () => {
     

      navigate('/addnote');
    };



    


  return (
    <Card style={{ width: '100%', maxWidth: '350px' }} className="mx-auto">
    <Card.Body>
      <Card.Title>
        <i className="fas fa-plus-circle mx-2"></i>
        New
      </Card.Title>
      <Button onClick={logout} className="btn btn-danger">
        Add blog
      </Button>
      
    </Card.Body>
  </Card>
  
);
 
}

export default TextExample;