//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
//import About from './components/About';
import React, { useState } from 'react';//using imrs command



//import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//  // Link
// } from "react-router-dom";


//let name="Pushkar";//This will act as attribute to jsx

function App() { //it is a function based component . In return only one element can be returned like here only div is returned.
                 // But, To return more than one element jsx fragment (<>  </>) is used.
  
  const [mode, setmode] = useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
   setAlert({msg:message,
  type:type,})

  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }
  const toggle=()=>{
    if(mode=="light"){
      setmode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode Has Been Enabled","success");
      document.title="Textutils - Dark Mode";// to change title dynamically...
      // setInterval(()=>{
      //   document.title="Install textutils Now";  to blink the title

      // },2000);

      // setInterval(()=>{
      //   document.title="Textutils is amazing";

      // },1500);
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Has Been Enabled","success");
      document.title="Textutils - Light Mode";

    }
  }

  

                 
 return (
   <>
   <Navbar  title="Pushkar" aboutText="AboutTextUtils" mode={mode} togglemode={toggle} />
   <Alert alert={alert}/>
   <div className="container my-3">
   <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> 
   </div>
  {/* <Router>
    <Navbar  title="Pushkar" aboutText="AboutTextUtils" mode={mode} togglemode={toggle} />
    <Alert alert={alert}/>
    <div className="container my-3">
     <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
           <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> 
          </Route>
          
      </Switch>
   </div>
  </Router> */}
  </>
  
 );
}

export default App;
