import { useState } from "react";
import App from "../App.css?inline"; 

function ArtSearch({art}) {
  const [isActive, setIsActive] = useState([false, false, false, false, false, false]);
  

  function handleShow(id) {
    let newArray = [...isActive]
   
    if(newArray[id] === false) {
      newArray[id] = true;
    }
    else if(newArray[id] === true) {
      newArray[id] = false;
    } 
     setIsActive(newArray)

     console.log(isActive);
  }

  return (
   <div>
    <h1> Art Search </h1>
        
    {art.map( item => (
     <li key={item.id} >
      <div className="all-thing">
      <img 
       className="img"
       src={item.url}
       alt=""
       />
       <button className="btn" onClick = {() => handleShow(item.id)}>Check description</button>
       <div className="text">

       { isActive[item.id] &&  <div> <p> 
         <b className="title"style={{fontSize:"xxxLarge", position:"absolute", right: "300px", fontFamily:"serif"}} >{item.title}</b>
       </p>
       <p>   
       <b className="date" style={{fontSize: "large", position:"relative", right:"-200px", bottom:"-100px"}}> ~{item.date}~</b>
       </p>
       
       <p className="description" style={{fontSize:"xLarge", position:"relative",right:"-150px", bottom:"-200px", fontFamily:"cursive"}} > " {item.description} "</p> 

           </div> }
           </div>
         </div>
     </li> 
    ))}
     </div>
  );
} 


export default ArtSearch; 
