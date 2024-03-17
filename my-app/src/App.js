// import About from "./component/About";
// import { useState } from "react";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import About from "./component/About"

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
// import logo from "./logo.svg";



function App() {

  return (
    <>
    <Router>
     {/* <Navbar title="reactDemo" homeText="newHome" newLink="newLink" select="select"/> */}
      
     <Navbar title="reactDemo" searching ="submit"/>
     <Alert alert=' You got alert'/>

     <div className="container my-3" >  
     
     <Routes>
              <Route path="/about" element={<About />}> 
              </Route>

               <Route path="/" element={<TextForm/>}> 
               </Route>  
        
      </Routes>
     </div>
     </Router>

    
     
     
    </>
  );
}

export default App;

