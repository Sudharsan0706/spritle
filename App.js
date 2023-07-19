import logo from "./logo.svg";
import "./App.css";
import React, { useState,} from "react";
import Spritle from "./Spritle";
import "./Spritle.css";
const App=()=>{
 
    
    const[value,updatevalue]=useState(0);
    const[dt,updatedt]=useState();
    const[contant,updatecontant]=useState();
    const[data,updatedata]=useState([]);
    const[idvalue,setidvalue]=useState([]);
    
    var currdate=new Date();

    const add=()=>{
          updatevalue(parseInt(document.getElementById("id1").value) + parseInt(value));
          updatedt(currdate.toISOString())
          updatecontant("Add") 
          setidvalue(document.getElementById("id1").value);
          updatedata([...data,{dt,idvalue,contant}])
          console.log(data)
    }
     const sub=()=>{
          updatevalue(parseInt(value) - parseInt(document.getElementById("id1").value));
          updatedt(currdate.toISOString())
          updatecontant("remove")
          setidvalue(document.getElementById("id1").value);
          updatedata([...data,{dt,idvalue,contant}])
          console.log(data)
     }
    return(
      <div>
          <h2 style={{textAlign:'center'}}>Expense Tracker - Basic</h2>
          <div className="firstdiv">
          <h3>Balance:{value}</h3>
          <input type="number" id="id1"/><br/>
          <button onClick={add}>Add</button>
          <button onClick={sub}>Remove</button>
        </div>
         <Spritle dateandtime={dt} idvalue={idvalue} contant={contant} data={data} />
      </div>
    )
  }
export default App;
