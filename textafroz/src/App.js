
import './App.css';
import Navbar from './components/navbar.js';
import About from './components/about.js';
// import TextForm from  './components/textform.js';
import React, { useState } from 'react';
import Alert from './components/alert.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}  from "react-router-dom";

function App() {
  const [mode, setmode] = useState('dark');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
      setalert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setalert(null);
      }, 3000);
  }
  
  const togglemode = ()=>{
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enabled", "success");
       
    }
  }
  return (
    <>
   {/* <Navbar title="textUtils2" abouttitle="about Utils"/>  */}
   <Navbar title="textUtils2" mode={mode} togglemode={togglemode}/>  
   <Alert alert={alert}/>
  <div className="container my-4">
{/* <TextForm showAler={showAlert} heading="Enter your text to analyze below" mode={mode}/> */}
<About/>
  </div>
 
      </>
  );
}

export default App;
