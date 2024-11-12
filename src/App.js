import './App.css';
import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Notestate from './context/Notes/Notestate';
 import React, { useState, useEffect, useContext } from 'react';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Read from "./components/readmore"
import Add from "./components/addnote"
import { HashRouter, Routes, Route } from "react-router-dom";
import Rm from "./components/readitems"
import Translate from"./components/Translate"
import Search from './components/search';
import './components/file.css'
import Explore from"./components/explore"



function App() {
const [progress, set] = useState(0);
 
  return (
    <div>

       
        <Notestate>
          <HashRouter>
              <LoadingBar color='red' progress={progress} />
           
          
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Login set={set}/>} />
             
                <Route exact path='/Home' element={<Home/>} />
               
                <Route exact path='/addnote' element={<Add/>} />
                <Route exact path='/Signup' element={<Signup />} />
                <Route exact path='/read' element={<Read/>} />
                <Route exact path='/readfullrecipe' element={<Rm/>} />
                <Route exact path='/Search' element={<Search/>} />
                <Route exact path='/Explore' element={<Explore/>} />
                <Route exact path='/About' element={<About/>} />
               

              </Routes>
            </div>
          </HashRouter>
        </Notestate>
      
    </div>
  );
}

export default App;
