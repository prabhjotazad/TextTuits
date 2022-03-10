import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



function App() {
   const [screenmode, setScreenmode] = useState({backgroundColor: 'black'});
   const [textColorMode1, settextColorMode1] = useState('Red');
   const [textColorMode2, settextColorMode2] = useState('Yellow');
   const [textColorMode3, settextColorMode3] = useState('Green');
   const [textvalue1, setTextvalue1] = useState('danger');
   const [textvalue2, setTextvalue2] = useState('warning');
   const [textvalue3, setTextvalue3] = useState('success');
   const changeColorRed = () =>{
       if(screenmode.backgroundColor == 'black')
       {
          setScreenmode({backgroundColor: 'red'});
          settextColorMode1('Black');
          setTextvalue1('dark');
          document.title = "Hi";
       }
       else{
        setScreenmode({backgroundColor: 'black'})
        settextColorMode1('Red')
        setTextvalue1('danger')
        document.title= "Hi back";
       }
   }
   const changeColorYellow = () =>{
    
    if(screenmode.backgroundColor != '#f8cf54')
       {
          setScreenmode({backgroundColor: '#f8cf54'})
          settextColorMode2('Black')
          setTextvalue2('dark')
       }
       else{
        setScreenmode({backgroundColor: 'black'})
        settextColorMode2('Yellow')
        setTextvalue2('warning')
       }
   }
   const changeColorGreen = () =>{
   
    if(screenmode.backgroundColor != 'green')
       {
          setScreenmode({backgroundColor: 'green'})
          settextColorMode3('Black')
          setTextvalue3('dark')
       }
       else{
        setScreenmode({backgroundColor: 'black'})
        settextColorMode3('Green')
        setTextvalue3('success')
       }
   }
 
 
  return (
      <>
     <Router> 
      <Navbar title="TextUtils" manu1="Home" manu2="About" mode={screenmode} 
      colormode1={changeColorRed} colormode2={changeColorYellow} colormode3={changeColorGreen} 
      navcolor1={textColorMode1} navcolor2={textColorMode2} navcolor3={textColorMode3} navbgvalue1={textvalue1} navbgvalue2={textvalue2} navbgvalue3={textvalue3}/>
      <div className="container my-5">
            
         <Switch>
            <Route path="/about">
               <About />
            </Route>
            
            <Route path="/">
            <Textform headline="Enter text to analyse" subheadline="Peview your text here" />
            </Route>
         </Switch>
        
     
     </div>
     </Router> 
      </>
  );
}

export default App;
