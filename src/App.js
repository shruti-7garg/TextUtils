
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import router 
//import {
  //BrowserRouter as Router,
  //Routes,
  //Route,

//} from "react-router-dom";

import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#080A24';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils- Dark mode";
      //setInterval(()=>{
      //document.title="Install TextUtils Now"
      //},2000);

      //setInterval(()=>{
      //document.title="TextUtils is amazing"
      //},1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils- Light mode";
    }
  }



  return (
    <>
    {/* from quickStart website take switch and router*/}
      {/*<Router>*/}
        <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode} about="About TextUtils"></Navbar>
        <Alert alert={alert} />
        <div className="container">
         {/* <Routes>
         /users => component1
             /users/home => component2    so use exact for exact path 
            <Route exact path="/about" element={<About/>}>
      
            </Route>
            <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze below" />}>
            </Route>
  </Routes>*/}
  <TextForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze below" />
        </div>
      {/*</Router>*/}
    </>
  );
}

export default App;
