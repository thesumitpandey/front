import React from 'react'
import { useContext } from 'react'
import Notecontext from '../context/Notes/Notecontext'
import { Link } from 'react-router-dom'
import Translatee from './translateitems'
import { Button } from 'react-bootstrap'
function Explore() {

const{c}=useContext(Notecontext)

console.log("explore item");
console.log(c);


  return (
    <div className='container'>
    <div className="row justify-content-center l">

       {(!Array.isArray(c) || c.length === 0) && (
          <h2 className="text-center my-4" style={{ fontWeight: '700' }}>
            "Blogs is currently unavailable. Once added, it will be displayed."
            <h2 className="text-center my-4" style={{ fontWeight: '700' }}>
            "Please add your Blog."
           
          </h2>
          </h2>
        )}




{
  Array.isArray(c) && c.length > 0 && c.map((c) => (
      <div key={c._id} className="col-md-4 d-flex justify-content-center">
       <Translatee fs={c}/>
            </div>
          ))
        }
    </div>
    </div>
  )
}

export default Explore
