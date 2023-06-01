/*
import React, { useEffect, useState } from "react";
import "./App.css";
import ArtSearch from "./components/ArtSearch";
//import Art from "./Art"; 



function App() {
  const [art,setArt]=useState([])

  useEffect(() => {
    fetch("/api/paintings")
      .then(res => res.json())
      .then(json => {
        // upon success, update art
        // console.log(json);
        setArt(json);
      })
      .catch(error => {
        // upon failure, show error message
        throw error;
      });
  }, []); 

  return (
    <div>
     <ArtSearch art={art}/>
      </div>
   );
   
 }
 

 
   export default App; */
  

   
//CODE BY SERENA
import React, { useState } from "react";
import "./App.css";
import ArtSearch from "./components/ArtSearch";
import Art from "./Art"; 



function App() {
  
  return (
    <div>
     <ArtSearch art={Art}/>
      </div>
   );
   
 }
 

 
   export default App;

  
  


 