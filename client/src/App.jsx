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
        // upon success, update tasks
        // console.log(json);
        setTasks(json);
      })
      .catch(error => {
        // upon failure, show error message
      });
  }, []);

  return (
    <div>
     <ArtSearch art={art}/>
      </div>
   );
   
 }
 

 
   export default App;
  

  
  


 