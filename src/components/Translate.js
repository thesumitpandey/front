import React from 'react'
import NoteContext from '../context/Notes/Notecontext';
import { useContext,useEffect } from 'react';
import Translatee from './translateitems';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Explore from './exploreitems';
import './file.css'
function Translate() {

  const a=useContext(NoteContext)
    

  const{fs,all}=a;  



  const [modalShow, setModalShow] = React.useState(false);

   



  return (
    <div>
    <div className="row justify-content-center l">






{
  Array.isArray(fs) && fs.length > 0 && fs.map((fs) => (
      <div key={fs._id} className="col-md-4 d-flex justify-content-center">
       <Translatee fs={fs}/>
            </div>
          ))
        }
        <div className="conatiner">

   
          

        </div>
        </div>

    </div>
  )
}

export default Translate
