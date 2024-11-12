import { useContext, useState } from 'react';
import Notecontext from './Notecontext';

import axios from "axios";

const NoteState = (props) => {
  const host = "https://back-7nre.onrender.com";

  const [note, setNote] = useState([]);
  const token = localStorage.getItem('token');
  const namel = localStorage.getItem('namel');
  const [s, sets] = useState(null);
  const [m, setm] = useState(null);
  const [f, setf] = useState([]);
  const [fs, setfs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [c,setc] = useState([]);
  


  const headers = {
    'Content-Type': 'application/json',
    "auth-token":token
  };

  const find = async (id) => {
    const response = await fetch(`${host}/api/notes/findnotes/${id}`, {
      method: 'GET',
      headers: headers
    });
    const json = await response.json();
    setf(json);
    //console.log(id);
  };






  const finds = async (search) => {
    const response = await fetch(`${host}/api/notes/search`, {
      method: 'post',
      headers: headers,
      body: JSON.stringify({ search })
    });
    const json = await response.json();
 
    setfs(json);
   
  };


  const all= async () => {
    const response = await fetch(`${host}/api/notes/all`, {
      method: 'Get',
      headers: headers,
     
    });
    const json = await response.json();
    //console.log(json)
    setc(json);
   
  };














  const getall = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: 'GET',
      headers: headers
    });
    const json = await response.json();

    setNote(json);
    //console.log(json);
  };






  const user = async ({ email, username, password }) => {
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ email, username, password })
    });
    const jso = await response.json();

    if (jso.success) {
      //console.log(jso.jwtdata)
      // //console.log(jso.username);
      ////console.log(jso.success)
      localStorage.setItem('token', jso.jwtdata);
      localStorage.setItem('namel', jso.l);
      await getall(); 
      sets(jso.success)
      setm("Login success")


      return jso.success;
      
      
    } else {
      if (typeof jso.errors === "string") {
        //console.log("upr")
        ////console.log(jso.success) 
        //console.log(jso.errors) 
         sets(jso.success)
        setm(jso.errors)
       
        return jso.success;
      } else {
        ////console.log(jso.success)
        //console.log("niche")
        
        sets(jso.success)
        setm(jso.errors[0].msg)
        //console.log(s)

        return jso.success;
      }
        
   
    }
   
  };




  
  const Log = async ({ username, password }) => {
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ username, password })
    });
    const jso = await response.json();

    

    if (jso.success) {
      
      localStorage.setItem('token', jso.jwtdata);
      localStorage.setItem('namel', jso.username);
      await getall(); 
      sets(jso.success)
      setm("Login success")
  
      return jso.success;
      
      
    } else {
      if (typeof jso.errors === "string") {
       
         sets(jso.success)
        setm(jso.errors)
        return jso.success;
      } else {
       
        sets(jso.success)
        setm(jso.errors[0].msg)
     

        return jso.success;
      }
        
   
    }
   
  };


  const add = async ({title,description,tags}) => {

  
    const response=await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ title, description,tags})
    });
   

    const jso = await response.json();


    getall();
      

    if (jso) {
    
      await getall(); 
      sets(jso)
      setm("Blog Added")
      
    } else {
   
      sets(jso)
      setm("Server error")
        
   
    }

    await getall(); 
  };

  const updatef = async ({ id,title, description,tags }) => {
    const response=await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({ title, description,tags})
    });
    getall(); 

    const jso = await response.json();

    if (jso) {
    
      
      await getall();
      sets(jso)
      setm("Updated successfully")

      getall(); 
      
      
    } else {
      sets(jso)
      setm("Updated successfully")
        
    }








  };

  const deletes = async (id) => {
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: headers
    });
    setNote(note.filter((n) => n._id !== id));
    getall(); 
  };

  return (
    <Notecontext.Provider value={{ note, add, deletes, getall, updatef, user, Log,s,m ,setm,sets,find,f,finds,fs,all,namel,c,searchQuery, setSearchQuery}}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default NoteState;
